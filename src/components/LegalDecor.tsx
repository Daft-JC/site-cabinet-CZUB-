"use client";

import { useState, useEffect } from "react";

/* ── SVG Balance de justice ─────────────────────────────── */
function ScalesSVG({ animateBeam = false }: { animateBeam?: boolean }) {
  return (
    <svg viewBox="0 0 200 270" fill="none" xmlns="http://www.w3.org/2000/svg" className="w-full h-full">
      {/* Socle */}
      <rect x="58" y="248" width="84" height="6" rx="1" stroke="currentColor" strokeWidth="1" />
      <line x1="68" y1="248" x2="62" y2="258" stroke="currentColor" strokeWidth="1" />
      <line x1="132" y1="248" x2="138" y2="258" stroke="currentColor" strokeWidth="1" />
      <line x1="56" y1="258" x2="144" y2="258" stroke="currentColor" strokeWidth="1" />

      {/* Colonne */}
      <line x1="100" y1="248" x2="100" y2="90" stroke="currentColor" strokeWidth="1.2" />

      {/* Ornements colonne */}
      <rect x="93" y="210" width="14" height="3" rx="0.5" stroke="currentColor" strokeWidth="0.7" opacity="0.6"/>
      <rect x="91" y="195" width="18" height="2" rx="0.5" stroke="currentColor" strokeWidth="0.6" opacity="0.4"/>
      <rect x="94" y="182" width="12" height="2" rx="0.5" stroke="currentColor" strokeWidth="0.5" opacity="0.3"/>

      {/* Sommet — ornement circulaire */}
      <circle cx="100" cy="84" r="6" stroke="currentColor" strokeWidth="1" />
      <circle cx="100" cy="84" r="2.5" stroke="currentColor" strokeWidth="0.7" opacity="0.6"/>
      <line x1="100" y1="90" x2="100" y2="96" stroke="currentColor" strokeWidth="1" />

      {/* Fléau animé */}
      <g style={animateBeam ? { transformOrigin: "100px 96px", animation: "swayBeam 4s ease-in-out infinite" } : undefined}>
        {/* Barre horizontale */}
        <line x1="18" y1="96" x2="182" y2="96" stroke="currentColor" strokeWidth="1.2" />

        {/* Pivot central */}
        <circle cx="100" cy="96" r="3.5" stroke="currentColor" strokeWidth="0.8" />

        {/* Embouts du fléau */}
        <circle cx="20" cy="96" r="3" stroke="currentColor" strokeWidth="0.8" />
        <circle cx="180" cy="96" r="3" stroke="currentColor" strokeWidth="0.8" />

        {/* ── Plateau gauche ── */}
        <line x1="22"  y1="96"  x2="16"  y2="150" stroke="currentColor" strokeWidth="0.9" />
        <line x1="44"  y1="96"  x2="62"  y2="150" stroke="currentColor" strokeWidth="0.9" />
        {/* Corde de milieu gauche */}
        <line x1="33"  y1="96"  x2="39"  y2="150" stroke="currentColor" strokeWidth="0.6" opacity="0.5"/>
        {/* Coupelle gauche */}
        <path d="M12 150 Q39 168 66 150" stroke="currentColor" strokeWidth="1.2" />
        {/* Fond de coupelle */}
        <path d="M12 150 Q39 155 66 150" stroke="currentColor" strokeWidth="0.4" opacity="0.3"/>

        {/* ── Plateau droit (légèrement décalé) ── */}
        <line x1="178" y1="96"  x2="184" y2="158" stroke="currentColor" strokeWidth="0.9" />
        <line x1="156" y1="96"  x2="138" y2="158" stroke="currentColor" strokeWidth="0.9" />
        {/* Corde de milieu droite */}
        <line x1="167" y1="96"  x2="161" y2="158" stroke="currentColor" strokeWidth="0.6" opacity="0.5"/>
        {/* Coupelle droite */}
        <path d="M134 158 Q161 176 188 158" stroke="currentColor" strokeWidth="1.2" />
        <path d="M134 158 Q161 163 188 158" stroke="currentColor" strokeWidth="0.4" opacity="0.3"/>
      </g>
    </svg>
  );
}

/* ── Halos de lumière dorée en fond ──────────────────────── */
function BackgroundGlow() {
  return (
    <div className="fixed inset-0 pointer-events-none overflow-hidden" style={{ zIndex: 0 }}>
      {/* Halo haut-gauche */}
      <div
        className="absolute rounded-full animate-glow-pulse"
        style={{
          top: "-10%",
          left: "-5%",
          width: "55vw",
          height: "55vw",
          background: "radial-gradient(circle, rgba(184,149,79,0.07) 0%, transparent 70%)",
          ["--duration" as string]: "7s",
          ["--delay" as string]: "0s",
        }}
      />
      {/* Halo centre-droite */}
      <div
        className="absolute rounded-full animate-glow-pulse"
        style={{
          top: "30%",
          right: "-10%",
          width: "45vw",
          height: "45vw",
          background: "radial-gradient(circle, rgba(150,120,62,0.06) 0%, transparent 70%)",
          ["--duration" as string]: "9s",
          ["--delay" as string]: "2s",
        }}
      />
      {/* Halo bas-centre */}
      <div
        className="absolute rounded-full animate-glow-pulse"
        style={{
          bottom: "-15%",
          left: "20%",
          width: "60vw",
          height: "50vw",
          background: "radial-gradient(circle, rgba(184,149,79,0.05) 0%, transparent 70%)",
          ["--duration" as string]: "11s",
          ["--delay" as string]: "4s",
        }}
      />
      {/* Ligne horizontale de lumière — milieu page */}
      <div
        style={{
          position: "absolute",
          top: "50%",
          left: 0,
          right: 0,
          height: "1px",
          background: "linear-gradient(90deg, transparent 0%, rgba(184,149,79,0.12) 30%, rgba(184,149,79,0.18) 50%, rgba(184,149,79,0.12) 70%, transparent 100%)",
          opacity: 0.6,
        }}
      />
    </div>
  );
}

/* ── Particules dorées montantes ─────────────────────────── */
interface Particle {
  id: number;
  left: string;
  bottom: string;
  size: number;
  opacity: number;
  duration: string;
  delay: string;
}

function Particles() {
  const [particles, setParticles] = useState<Particle[]>([]);

  useEffect(() => {
    // Génération stable côté client uniquement (évite hydration mismatch)
    const pts: Particle[] = Array.from({ length: 28 }, (_, i) => {
      const seed = i * 137.508; // nombre d'or pour distribution uniforme
      return {
        id: i,
        left: `${(seed % 97).toFixed(1)}%`,
        bottom: `${((i * 29) % 80).toFixed(0)}%`,
        size: 1.2 + (i % 4) * 0.5,
        opacity: 0.12 + (i % 6) * 0.06,
        duration: `${13 + (i % 8) * 1.5}s`,
        delay: `${(i * 0.9) % 18}s`,
      };
    });
    setParticles(pts);
  }, []);

  return (
    <div className="fixed inset-0 pointer-events-none overflow-hidden" style={{ zIndex: 0 }}>
      {particles.map((p) => (
        <span
          key={p.id}
          className="absolute rounded-full animate-particle-rise"
          style={{
            left: p.left,
            bottom: p.bottom,
            width: `${p.size}px`,
            height: `${p.size}px`,
            background: `rgba(184,149,79,${p.opacity})`,
            ["--duration" as string]: p.duration,
            ["--delay" as string]: p.delay,
            boxShadow: `0 0 ${p.size * 2}px rgba(184,149,79,0.4)`,
          }}
        />
      ))}
    </div>
  );
}

/* ── Balances décoratives ────────────────────────────────── */
function ScalesLayer() {
  return (
    <div className="fixed inset-0 pointer-events-none overflow-hidden" style={{ zIndex: 0 }}>

      {/* Balance 1 — grande, droite haute, or chaud */}
      <div
        className="absolute text-or animate-float-scale"
        style={{
          top: "2%",
          right: "-2%",
          width: "300px",
          opacity: 0.09,
          ["--rot" as string]: "6deg",
          ["--duration" as string]: "8s",
          ["--delay" as string]: "0s",
        }}
      >
        <ScalesSVG animateBeam />
      </div>

      {/* Balance 2 — milieu gauche, ivoire */}
      <div
        className="absolute text-ivoire animate-float-scale"
        style={{
          top: "35%",
          left: "-5%",
          width: "240px",
          opacity: 0.055,
          ["--rot" as string]: "-4deg",
          ["--duration" as string]: "10s",
          ["--delay" as string]: "2s",
        }}
      >
        <ScalesSVG />
      </div>

      {/* Balance 3 — bas droite, petite */}
      <div
        className="absolute text-or animate-float-scale"
        style={{
          bottom: "5%",
          right: "4%",
          width: "180px",
          opacity: 0.07,
          ["--rot" as string]: "3deg",
          ["--duration" as string]: "9s",
          ["--delay" as string]: "4s",
        }}
      >
        <ScalesSVG animateBeam />
      </div>

      {/* Balance 4 — très grande, centrée en watermark */}
      <div
        className="absolute text-or animate-float-scale"
        style={{
          top: "48%",
          left: "50%",
          transform: "translate(-50%, -50%)",
          width: "480px",
          opacity: 0.025,
          ["--rot" as string]: "-2deg",
          ["--duration" as string]: "12s",
          ["--delay" as string]: "1s",
        }}
      >
        <ScalesSVG />
      </div>

      {/* Balance 5 — bas gauche */}
      <div
        className="absolute text-ivoire animate-float-scale"
        style={{
          bottom: "3%",
          left: "1%",
          width: "200px",
          opacity: 0.04,
          ["--rot" as string]: "-7deg",
          ["--duration" as string]: "11s",
          ["--delay" as string]: "5s",
        }}
      >
        <ScalesSVG />
      </div>

      {/* Balance 6 — centre droit intermédiaire */}
      <div
        className="absolute text-or animate-float-scale"
        style={{
          top: "65%",
          right: "8%",
          width: "160px",
          opacity: 0.06,
          ["--rot" as string]: "9deg",
          ["--duration" as string]: "7s",
          ["--delay" as string]: "3s",
        }}
      >
        <ScalesSVG animateBeam />
      </div>

    </div>
  );
}

/* ── Grain de texture ────────────────────────────────────── */
function GrainOverlay() {
  return (
    <div
      className="fixed inset-0 pointer-events-none"
      style={{
        zIndex: 2,
        opacity: 0.025,
        backgroundImage: `url("data:image/svg+xml,%3Csvg viewBox='0 0 256 256' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='noise'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.9' numOctaves='4' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23noise)' opacity='1'/%3E%3C/svg%3E")`,
        backgroundSize: "200px 200px",
        mixBlendMode: "overlay",
      }}
    />
  );
}

/* ── Export principal ────────────────────────────────────── */
export default function LegalDecor() {
  return (
    <>
      <BackgroundGlow />
      <Particles />
      <ScalesLayer />
      <GrainOverlay />
    </>
  );
}
