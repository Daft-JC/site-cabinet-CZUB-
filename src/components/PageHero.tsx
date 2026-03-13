"use client";

interface Props {
  tag: string;
  title: string;
  highlight?: string;
  subtitle?: string;
}

export default function PageHero({ tag, title, highlight, subtitle }: Props) {
  return (
    <section className="pt-40 pb-24 md:pb-32 px-6 md:px-[60px] relative">
      {/* Background accent */}
      <div className="absolute inset-0 pointer-events-none">
        <div
          className="absolute top-0 right-0 w-1/2 h-full opacity-[0.03]"
          style={{
            background:
              "radial-gradient(ellipse 80% 60% at 70% 30%, #b8954f 0%, transparent 70%)",
          }}
        />
      </div>

      <div className="relative max-w-3xl">
        <div className="section-label mb-8 opacity-0 animate-fade-up [animation-delay:0.2s] [animation-fill-mode:forwards]">
          {tag}
        </div>
        <h1 className="section-heading !text-[clamp(2.5rem,5vw,4rem)] mb-6 opacity-0 animate-fade-up [animation-delay:0.4s] [animation-fill-mode:forwards]">
          {title}{" "}
          {highlight && <em className="italic text-or font-normal">{highlight}</em>}
        </h1>
        {subtitle && (
          <p className="font-sans text-base font-light text-gris-clair leading-[1.8] max-w-xl opacity-0 animate-fade-up [animation-delay:0.6s] [animation-fill-mode:forwards]">
            {subtitle}
          </p>
        )}
      </div>
    </section>
  );
}
