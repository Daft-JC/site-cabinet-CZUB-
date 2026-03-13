"use client";

import { useState } from "react";
import dynamic from "next/dynamic";
import { SITE_CONFIG } from "@/lib/constants";
import PageHero from "@/components/PageHero";
import SectionDivider from "@/components/SectionDivider";
import RevealOnScroll from "@/components/RevealOnScroll";
import { MapPin, Phone, Mail, Clock, ArrowRight } from "lucide-react";

const MapCabinet = dynamic(() => import("@/components/MapCabinet"), {
  ssr: false,
  loading: () => (
    <div className="bg-anthracite border border-gris-sombre/50 h-[280px] flex items-center justify-center">
      <div className="text-[0.7rem] tracking-[0.2em] uppercase text-gris">Chargement de la carte…</div>
    </div>
  ),
});

export default function ContactPage() {
  const [formData, setFormData] = useState({
    nom: "",
    prenom: "",
    email: "",
    telephone: "",
    domaine: "",
    message: "",
  });
  const [submitted, setSubmitted] = useState(false);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");

  const handleChange = (
    e: React.ChangeEvent<
      HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement
    >
  ) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    setError("");
    try {
      const res = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(formData),
      });
      if (!res.ok) throw new Error();
      setSubmitted(true);
    } catch {
      setError("Une erreur est survenue. Veuillez réessayer ou nous appeler directement.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <>
      <PageHero
        tag="Contact"
        title="Prenons"
        highlight="rendez-vous"
        subtitle="Le cabinet est implanté à Martigues et intervient sur toute la France. Contactez-nous pour toute demande de consultation ou d'information."
      />

      <SectionDivider />

      <section className="py-24 md:py-36 px-6 md:px-[60px]">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-24">
          {/* ── COORDONNÉES ── */}
          <div>
            <RevealOnScroll>
              <div className="section-label mb-8">Coordonnées</div>
            </RevealOnScroll>

            <div className="space-y-8">
              {[
                {
                  icon: MapPin,
                  label: "Adresse",
                  value: SITE_CONFIG.contact.address,
                  sub: "13500 Martigues",
                },
                {
                  icon: Phone,
                  label: "Téléphone",
                  value: SITE_CONFIG.contact.phone,
                  href: SITE_CONFIG.contact.phoneHref,
                },
                {
                  icon: Mail,
                  label: "Email",
                  value: SITE_CONFIG.contact.email,
                  href: SITE_CONFIG.contact.emailHref,
                },
                {
                  icon: Clock,
                  label: "Horaires",
                  value: "Du lundi au vendredi",
                  sub: "Sur rendez-vous uniquement",
                },
              ].map((item, i) => (
                <RevealOnScroll key={item.label} delay={i * 100}>
                  <div className="flex items-start gap-5">
                    <div className="w-10 h-10 border border-or/25 flex items-center justify-center flex-shrink-0">
                      <item.icon
                        className="w-4 h-4 text-or"
                        strokeWidth={1.5}
                      />
                    </div>
                    <div>
                      <span className="block text-[0.6rem] tracking-[0.2em] uppercase text-gris mb-1">
                        {item.label}
                      </span>
                      {item.href ? (
                        <a
                          href={item.href}
                          className="text-[0.9rem] font-light text-ivoire no-underline hover:text-or transition-colors duration-300"
                        >
                          {item.value}
                        </a>
                      ) : (
                        <span className="text-[0.9rem] font-light text-ivoire">
                          {item.value}
                        </span>
                      )}
                      {item.sub && (
                        <span className="block text-[0.8rem] font-light text-gris-clair mt-0.5">
                          {item.sub}
                        </span>
                      )}
                    </div>
                  </div>
                </RevealOnScroll>
              ))}
            </div>

            {/* Carte OpenStreetMap */}
            <RevealOnScroll delay={500}>
              <div className="mt-12 border border-gris-sombre/50 overflow-hidden">
                <MapCabinet />
              </div>
              <a
                href="https://maps.google.com/?q=1+Boulevard+du+Président+Allende,+L'Espace+Vénitien,+13500+Martigues"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 mt-3 text-[0.65rem] tracking-[0.15em] uppercase text-or no-underline hover:text-or-clair transition-colors duration-300"
              >
                <MapPin className="w-3 h-3" strokeWidth={1.5} />
                Ouvrir dans Google Maps
              </a>
            </RevealOnScroll>
          </div>

          {/* ── FORMULAIRE ── */}
          <div>
            <RevealOnScroll>
              <div className="section-label mb-8">Formulaire de contact</div>
            </RevealOnScroll>

            {submitted ? (
              <RevealOnScroll>
                <div className="bg-anthracite border border-or/20 p-12 text-center">
                  <div className="w-16 h-16 border border-or rounded-full flex items-center justify-center mx-auto mb-6">
                    <svg
                      className="w-6 h-6 text-or"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth={1.5}
                      viewBox="0 0 24 24"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        d="M5 13l4 4L19 7"
                      />
                    </svg>
                  </div>
                  <h3 className="font-serif text-2xl text-ivoire mb-3">
                    Message envoyé
                  </h3>
                  <p className="text-[0.85rem] font-light text-gris-clair leading-relaxed">
                    Nous avons bien reçu votre demande. Le cabinet vous
                    recontactera dans les meilleurs délais.
                  </p>
                </div>
              </RevealOnScroll>
            ) : (
              <RevealOnScroll delay={150}>
                <form onSubmit={handleSubmit} className="space-y-6">
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                    <div className="flex flex-col gap-2">
                      <label className="text-[0.6rem] tracking-[0.2em] uppercase text-gris">
                        Nom
                      </label>
                      <input
                        type="text"
                        name="nom"
                        required
                        placeholder="Votre nom"
                        value={formData.nom}
                        onChange={handleChange}
                        className="bg-anthracite border border-gris-sombre text-ivoire font-sans text-[0.85rem] font-light px-5 py-3.5 outline-none transition-colors duration-300 focus:border-or placeholder:text-gris-sombre"
                      />
                    </div>
                    <div className="flex flex-col gap-2">
                      <label className="text-[0.6rem] tracking-[0.2em] uppercase text-gris">
                        Prénom
                      </label>
                      <input
                        type="text"
                        name="prenom"
                        required
                        placeholder="Votre prénom"
                        value={formData.prenom}
                        onChange={handleChange}
                        className="bg-anthracite border border-gris-sombre text-ivoire font-sans text-[0.85rem] font-light px-5 py-3.5 outline-none transition-colors duration-300 focus:border-or placeholder:text-gris-sombre"
                      />
                    </div>
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                    <div className="flex flex-col gap-2">
                      <label className="text-[0.6rem] tracking-[0.2em] uppercase text-gris">
                        Email
                      </label>
                      <input
                        type="email"
                        name="email"
                        required
                        placeholder="votre@email.fr"
                        value={formData.email}
                        onChange={handleChange}
                        className="bg-anthracite border border-gris-sombre text-ivoire font-sans text-[0.85rem] font-light px-5 py-3.5 outline-none transition-colors duration-300 focus:border-or placeholder:text-gris-sombre"
                      />
                    </div>
                    <div className="flex flex-col gap-2">
                      <label className="text-[0.6rem] tracking-[0.2em] uppercase text-gris">
                        Téléphone
                      </label>
                      <input
                        type="tel"
                        name="telephone"
                        placeholder="06 00 00 00 00"
                        value={formData.telephone}
                        onChange={handleChange}
                        className="bg-anthracite border border-gris-sombre text-ivoire font-sans text-[0.85rem] font-light px-5 py-3.5 outline-none transition-colors duration-300 focus:border-or placeholder:text-gris-sombre"
                      />
                    </div>
                  </div>

                  <div className="flex flex-col gap-2">
                    <label className="text-[0.6rem] tracking-[0.2em] uppercase text-gris">
                      Domaine concerné
                    </label>
                    <select
                      name="domaine"
                      required
                      value={formData.domaine}
                      onChange={handleChange}
                      className="bg-anthracite border border-gris-sombre text-ivoire font-sans text-[0.85rem] font-light px-5 py-3.5 outline-none transition-colors duration-300 focus:border-or cursor-pointer appearance-none"
                    >
                      <option value="" disabled>
                        Sélectionnez un domaine
                      </option>
                      <option>Photovoltaïque & Énergies Renouvelables</option>
                      <option>Code de la Consommation</option>
                      <option>Arnaques & Fraudes Bancaires</option>
                      <option>Assurances</option>
                      <option>Construction & Immobilier</option>
                      <option>Litiges Automobile</option>
                      <option>Responsabilité & Contrats</option>
                      <option>Réparation du Préjudice Corporel</option>
                      <option>Litiges Bailleurs & Locataires</option>
                      <option>Divorces Amiables</option>
                      <option>Autre</option>
                    </select>
                  </div>

                  <div className="flex flex-col gap-2">
                    <label className="text-[0.6rem] tracking-[0.2em] uppercase text-gris">
                      Votre message
                    </label>
                    <textarea
                      name="message"
                      required
                      rows={5}
                      placeholder="Décrivez brièvement votre situation…"
                      value={formData.message}
                      onChange={handleChange}
                      className="bg-anthracite border border-gris-sombre text-ivoire font-sans text-[0.85rem] font-light px-5 py-3.5 outline-none transition-colors duration-300 focus:border-or resize-y min-h-[120px] placeholder:text-gris-sombre"
                    />
                  </div>

                  {error && (
                    <p className="text-[0.8rem] text-red-400 font-light">{error}</p>
                  )}
                  <button
                    type="submit"
                    disabled={loading}
                    className="group inline-flex items-center gap-3 text-[0.7rem] font-medium tracking-[0.2em] uppercase text-noir bg-or border-none px-9 py-4 cursor-pointer transition-all duration-400 hover:bg-or-clair disabled:opacity-60 disabled:cursor-not-allowed"
                  >
                    <span>{loading ? "Envoi en cours…" : "Envoyer"}</span>
                    {!loading && <ArrowRight className="w-3.5 h-3.5 transition-transform duration-300 group-hover:translate-x-1" />}
                  </button>
                </form>
              </RevealOnScroll>
            )}
          </div>
        </div>
      </section>
    </>
  );
}
