import { NextRequest, NextResponse } from "next/server";
import { Resend } from "resend";
import { SITE_CONFIG } from "@/lib/constants";

// Adresse d'expédition : tant que le domaine cabinet-czub.fr n'est pas vérifié
// dans Resend, seule l'adresse de test onboarding@resend.dev fonctionne (et
// uniquement vers l'e-mail du compte Resend). Voir RESEND_FROM.
const FROM = process.env.RESEND_FROM || "Cabinet Czub <onboarding@resend.dev>";
const TO = process.env.CONTACT_TO || SITE_CONFIG.contact.email;

// Limite simple : 5 envois / 10 min par adresse IP (mémoire de l'instance).
const fenetre = 10 * 60 * 1000;
const envois = new Map<string, number[]>();
function tropDeRequetes(ip: string) {
  const now = Date.now();
  const liste = (envois.get(ip) || []).filter((t) => now - t < fenetre);
  liste.push(now);
  envois.set(ip, liste);
  return liste.length > 5;
}

const echapper = (s: string) =>
  s.replace(/[&<>"']/g, (ch) => ({ "&": "&amp;", "<": "&lt;", ">": "&gt;", '"': "&quot;", "'": "&#39;" })[ch]!);

const texte = (v: unknown, max: number) => (typeof v === "string" ? v.trim().slice(0, max) : "");

const erreur = (msg: string, status = 400) => NextResponse.json({ error: msg }, { status });

export async function POST(req: NextRequest) {
  // Refuse les envois provenant d'un autre site
  const origin = req.headers.get("origin");
  if (origin && new URL(origin).host !== req.headers.get("host")) return erreur("Origine refusée.", 403);

  const ip = (req.headers.get("x-forwarded-for") || "").split(",")[0].trim() || "inconnue";
  if (tropDeRequetes(ip)) return erreur("Trop d'envois rapprochés. Réessayez dans quelques minutes ou appelez le cabinet.", 429);

  let body: Record<string, unknown>;
  try {
    body = await req.json();
  } catch {
    return erreur("Requête invalide.");
  }

  // Robots : champ piège rempli ou formulaire envoyé en moins de 3 s.
  // On répond « succès » pour ne pas leur indiquer qu'ils ont été repérés.
  if (texte(body.site_web, 200) || Number(body.duree) < 3000) {
    return NextResponse.json({ success: true });
  }

  const d = {
    prenom: texte(body.prenom, 80),
    nom: texte(body.nom, 80),
    email: texte(body.email, 160),
    telephone: texte(body.telephone, 30),
    domaine: texte(body.domaine, 120),
    message: texte(body.message, 4000),
  };

  if (!d.prenom || !d.nom || !d.domaine || d.message.length < 20)
    return erreur("Merci de remplir tous les champs obligatoires (message de 20 caractères minimum).");
  if (!/^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/.test(d.email)) return erreur("L'adresse e-mail semble incorrecte.");
  if (body.consentement !== "oui") return erreur("Merci de cocher la case de consentement.");
  if (/(https?:\/\/[^\s]+[\s\S]*){4,}/i.test(d.message)) return erreur("Votre message contient trop de liens.");

  if (!process.env.RESEND_API_KEY) {
    console.error("RESEND_API_KEY manquante");
    return erreur(`Envoi indisponible. Appelez le cabinet au ${SITE_CONFIG.contact.phone}.`, 500);
  }

  const e = Object.fromEntries(Object.entries(d).map(([k, v]) => [k, echapper(v)])) as typeof d;
  const ligne = (label: string, val: string) =>
    `<tr><td style="padding:8px 12px 8px 0;color:#55606B;vertical-align:top">${label}</td><td style="padding:8px 0">${val}</td></tr>`;

  try {
    const resend = new Resend(process.env.RESEND_API_KEY);
    const { error } = await resend.emails.send({
      from: FROM,
      to: TO,
      replyTo: d.email,
      subject: `[Site] Demande de rendez-vous : ${d.domaine}`,
      text: `${d.prenom} ${d.nom}\n${d.email}\n${d.telephone || "Téléphone non renseigné"}\nDomaine : ${d.domaine}\n\n${d.message}`,
      html: `<div style="font-family:Arial,sans-serif;max-width:600px;color:#1C2530">
        <h1 style="font-size:18px;color:#1E4A6E">Nouvelle demande depuis cabinet-czub.fr</h1>
        <table style="border-collapse:collapse;font-size:14px">
          ${ligne("Nom", `${e.prenom} ${e.nom}`)}
          ${ligne("E-mail", e.email)}
          ${ligne("Téléphone", e.telephone || "Non renseigné")}
          ${ligne("Domaine", e.domaine)}
        </table>
        <div style="margin-top:16px;padding:12px 16px;border-left:3px solid #C08A3E;background:#FBF9F4;white-space:pre-wrap;font-size:14px;line-height:1.6">${e.message}</div>
        <p style="font-size:12px;color:#55606B">Répondre à cet e-mail pour écrire directement à la personne.</p>
      </div>`,
    });
    if (error) throw error;
    return NextResponse.json({ success: true });
  } catch (err) {
    console.error("Erreur envoi e-mail :", err);
    return erreur(`Le message n'a pas pu être envoyé. Appelez le cabinet au ${SITE_CONFIG.contact.phone}.`, 500);
  }
}
