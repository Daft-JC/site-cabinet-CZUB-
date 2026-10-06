"use client";

import { useEffect, useRef, useState } from "react";
import { EXPERTISES, SITE_CONFIG } from "@/lib/constants";

type Etat = "saisie" | "envoi" | "envoye" | "erreur";

const champ =
  "mt-2 w-full rounded-xl border border-[#B9B0A1] bg-papier px-4 py-3 text-encre placeholder:text-[#77808A] focus:border-etang focus:bg-white focus:outline-none focus-visible:outline-[3px] focus-visible:outline-ocre";

export default function ContactForm() {
  const [etat, setEtat] = useState<Etat>("saisie");
  const [message, setMessage] = useState("");
  const debut = useRef(0);
  const confirmation = useRef<HTMLDivElement>(null);

  useEffect(() => {
    debut.current = Date.now();
  }, []);

  useEffect(() => {
    if (etat === "envoye") confirmation.current?.focus();
  }, [etat]);

  async function onSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setEtat("envoi");
    const data = Object.fromEntries(new FormData(e.currentTarget).entries());
    try {
      const res = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ ...data, duree: Date.now() - debut.current }),
      });
      const json = await res.json().catch(() => ({}));
      if (!res.ok) throw new Error(json.error);
      setEtat("envoye");
    } catch (err) {
      setMessage(
        (err as Error).message ||
          `Le message n'a pas pu être envoyé. Appelez le cabinet au ${SITE_CONFIG.contact.phone}.`
      );
      setEtat("erreur");
    }
  }

  if (etat === "envoye") {
    return (
      <div ref={confirmation} tabIndex={-1} role="status" className="mt-8 rounded-2xl bg-etang-clair p-6">
        <p className="t-h3">Message envoyé</p>
        <p className="mt-2">
          Le cabinet a bien reçu votre demande et vous recontacte pour fixer un rendez-vous. En cas d&apos;urgence,
          appelez le <a href={SITE_CONFIG.contact.phoneHref}>{SITE_CONFIG.contact.phone}</a>.
        </p>
      </div>
    );
  }

  return (
    <form onSubmit={onSubmit} className="mt-8 space-y-6" noValidate={false}>
      <div className="grid gap-6 sm:grid-cols-2">
        <div>
          <label htmlFor="prenom" className="font-medium">Prénom</label>
          <input id="prenom" name="prenom" required maxLength={80} autoComplete="given-name" className={champ} />
        </div>
        <div>
          <label htmlFor="nom" className="font-medium">Nom</label>
          <input id="nom" name="nom" required maxLength={80} autoComplete="family-name" className={champ} />
        </div>
      </div>
      <div className="grid gap-6 sm:grid-cols-2">
        <div>
          <label htmlFor="email" className="font-medium">E-mail</label>
          <input id="email" name="email" type="email" required maxLength={160} autoComplete="email" className={champ} />
        </div>
        <div>
          <label htmlFor="telephone" className="font-medium">
            Téléphone <span className="font-normal text-sourdine">(conseillé)</span>
          </label>
          <input id="telephone" name="telephone" type="tel" maxLength={30} autoComplete="tel" className={champ} />
        </div>
      </div>
      <div>
        <label htmlFor="domaine" className="font-medium">Votre situation concerne</label>
        <select id="domaine" name="domaine" required defaultValue="" className={champ}>
          <option value="" disabled>
            Choisir un domaine
          </option>
          {EXPERTISES.map((e) => (
            <option key={e.slug}>{e.title}</option>
          ))}
          <option>Autre</option>
        </select>
      </div>
      <div>
        <label htmlFor="message" className="font-medium">Votre message</label>
        <textarea
          id="message"
          name="message"
          required
          minLength={20}
          maxLength={4000}
          rows={6}
          aria-describedby="message-aide"
          className={champ}
        />
        <p id="message-aide" className="mt-1.5 text-[0.9rem] text-sourdine">
          Quelques lignes suffisent : ce qui s&apos;est passé, quand, et ce que vous attendez.
        </p>
      </div>

      {/* Piège à robots : invisible pour les humains, ignoré par les lecteurs d'écran */}
      <div aria-hidden="true" className="absolute -left-[10000px] h-px w-px overflow-hidden">
        <label htmlFor="site_web">Ne pas remplir</label>
        <input id="site_web" name="site_web" tabIndex={-1} autoComplete="off" />
      </div>

      <div className="flex items-start gap-3">
        <input
          id="consentement"
          name="consentement"
          type="checkbox"
          required
          value="oui"
          className="mt-1 h-5 w-5 shrink-0 accent-[#1E4A6E]"
        />
        <label htmlFor="consentement" className="text-[0.95rem]">
          J&apos;accepte que les informations saisies soient utilisées par le cabinet pour me recontacter au sujet de ma
          demande.
        </label>
      </div>

      <div aria-live="polite">
        {etat === "erreur" && <p className="rounded-xl bg-[#FBEAEA] p-4 text-[#8A1F1F]">{message}</p>}
      </div>

      <button type="submit" disabled={etat === "envoi"} className="btn-plein w-full sm:w-auto disabled:opacity-60">
        {etat === "envoi" ? "Envoi en cours…" : "Envoyer ma demande"}
      </button>
    </form>
  );
}
