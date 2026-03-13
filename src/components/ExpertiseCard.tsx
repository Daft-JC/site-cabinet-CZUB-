import Link from "next/link";
import { Sun, Building2, Shield, CreditCard, Umbrella, Car, Scale, Heart, Key, Users } from "lucide-react";
import RevealOnScroll from "./RevealOnScroll";

const ICONS = {
  sun: Sun,
  building: Building2,
  shield: Shield,
  creditcard: CreditCard,
  umbrella: Umbrella,
  car: Car,
  scale: Scale,
  heart: Heart,
  key: Key,
  users: Users,
} as const;

interface Props {
  id: string;
  title: string;
  description: string;
  icon: keyof typeof ICONS;
  delay?: number;
  linkTo?: boolean;
}

export default function ExpertiseCard({
  id,
  title,
  description,
  icon,
  delay = 0,
  linkTo = true,
}: Props) {
  const Icon = ICONS[icon];

  const content = (
    <div className="group bg-anthracite p-12 md:p-[60px_48px] relative overflow-hidden transition-all duration-500 cursor-default hover:bg-gris-sombre before:content-[''] before:absolute before:top-0 before:left-0 before:w-full before:h-0.5 before:bg-or before:scale-x-0 before:origin-left before:transition-transform before:duration-500 hover:before:scale-x-100">
      <div className="w-12 h-12 border border-or/30 flex items-center justify-center mb-8 transition-colors duration-400 group-hover:border-or">
        <Icon className="w-5 h-5 text-or" strokeWidth={1.5} />
      </div>
      <h3 className="font-serif text-2xl font-normal text-ivoire mb-4 leading-tight">
        {title}
      </h3>
      <p className="font-sans text-[0.82rem] font-light text-gris-clair leading-[1.8]">
        {description}
      </p>
      {linkTo && (
        <span className="inline-block mt-6 text-[0.65rem] font-medium tracking-[0.2em] uppercase text-or opacity-0 translate-y-2 transition-all duration-400 group-hover:opacity-100 group-hover:translate-y-0">
          En savoir plus →
        </span>
      )}
    </div>
  );

  return (
    <RevealOnScroll delay={delay}>
      {linkTo ? (
        <Link href={`/expertises#${id}`} className="no-underline block">
          {content}
        </Link>
      ) : (
        content
      )}
    </RevealOnScroll>
  );
}
