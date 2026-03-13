import { NextRequest, NextResponse } from "next/server";
import nodemailer from "nodemailer";

export async function POST(req: NextRequest) {
  const { nom, prenom, email, telephone, domaine, message } = await req.json();

  if (!nom || !prenom || !email || !domaine || !message) {
    return NextResponse.json({ error: "Champs manquants" }, { status: 400 });
  }

  const transporter = nodemailer.createTransport({
    host: "smtp-mail.outlook.com",
    port: 587,
    secure: false,
    auth: {
      user: process.env.SMTP_USER,
      pass: process.env.SMTP_PASS,
    },
    tls: {
      ciphers: "SSLv3",
    },
  });

  const mailOptions = {
    from: `"Cabinet Czub — Site Web" <${process.env.SMTP_USER}>`,
    to: "czubjoseph@hotmail.com",
    replyTo: email,
    subject: `[Cabinet Czub] Nouvelle demande — ${domaine}`,
    html: `
      <div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto; color: #333;">
        <div style="background: #0a0a0a; padding: 30px; text-align: center;">
          <h1 style="color: #b8954f; font-size: 20px; margin: 0; letter-spacing: 2px; text-transform: uppercase;">
            Cabinet Maître Joseph Czub
          </h1>
          <p style="color: #9a9a9a; font-size: 12px; margin: 8px 0 0;">Nouvelle demande de contact</p>
        </div>

        <div style="background: #f9f9f9; padding: 30px;">
          <table style="width: 100%; border-collapse: collapse;">
            <tr>
              <td style="padding: 10px 0; border-bottom: 1px solid #eee; color: #666; font-size: 13px; width: 140px;">Nom</td>
              <td style="padding: 10px 0; border-bottom: 1px solid #eee; font-size: 14px; font-weight: bold;">${prenom} ${nom}</td>
            </tr>
            <tr>
              <td style="padding: 10px 0; border-bottom: 1px solid #eee; color: #666; font-size: 13px;">Email</td>
              <td style="padding: 10px 0; border-bottom: 1px solid #eee; font-size: 14px;">
                <a href="mailto:${email}" style="color: #b8954f;">${email}</a>
              </td>
            </tr>
            <tr>
              <td style="padding: 10px 0; border-bottom: 1px solid #eee; color: #666; font-size: 13px;">Téléphone</td>
              <td style="padding: 10px 0; border-bottom: 1px solid #eee; font-size: 14px;">${telephone || "Non renseigné"}</td>
            </tr>
            <tr>
              <td style="padding: 10px 0; border-bottom: 1px solid #eee; color: #666; font-size: 13px;">Domaine</td>
              <td style="padding: 10px 0; border-bottom: 1px solid #eee; font-size: 14px; color: #b8954f; font-weight: bold;">${domaine}</td>
            </tr>
          </table>

          <div style="margin-top: 24px;">
            <p style="color: #666; font-size: 13px; margin-bottom: 10px; text-transform: uppercase; letter-spacing: 1px;">Message</p>
            <div style="background: white; border-left: 3px solid #b8954f; padding: 16px 20px; font-size: 14px; line-height: 1.7; color: #333;">
              ${message.replace(/\n/g, "<br/>")}
            </div>
          </div>
        </div>

        <div style="background: #0a0a0a; padding: 20px; text-align: center;">
          <p style="color: #6b6b6b; font-size: 11px; margin: 0;">
            Message envoyé depuis le formulaire de contact du site cabinet-czub.fr
          </p>
          <p style="color: #6b6b6b; font-size: 11px; margin: 6px 0 0;">
            Répondre directement à cet email pour contacter ${prenom} ${nom}
          </p>
        </div>
      </div>
    `,
  };

  try {
    await transporter.sendMail(mailOptions);
    return NextResponse.json({ success: true });
  } catch (error) {
    console.error("Erreur envoi email:", error);
    return NextResponse.json({ error: "Erreur lors de l'envoi" }, { status: 500 });
  }
}
