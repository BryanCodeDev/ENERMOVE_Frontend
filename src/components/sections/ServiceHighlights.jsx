import { ArrowRight, Check, Leaf, ShieldCheck, Sparkles } from 'lucide-react';
import { Link } from 'react-router-dom';
import Reveal from '../ui/Reveal';
import SectionHeading from '../ui/SectionHeading';
import ButtonLink from '../buttons/ButtonLink';

export default function ServiceHighlights() {
  const items = [
    [ShieldCheck, 'Seguridad', 'Criterios claros para cada recomendación.'],
    [Sparkles, 'Tecnología', 'Alternativas seleccionadas con visión de futuro.'],
    [Leaf, 'Sostenibilidad', 'Una ruta más limpia para cada proyecto.'],
  ];

  return (
    <section className="bg-brand-ink px-5 py-20 text-white sm:px-8 lg:px-12 lg:py-28">
      <div className="mx-auto max-w-page">
        <div className="grid gap-12 lg:grid-cols-[0.8fr_1.2fr] lg:gap-20">
          <Reveal>
            <SectionHeading eyebrow="Acompañamiento" title="Decisiones con una visión completa." />
            <p className="mt-6 max-w-md text-base leading-7 text-white/65">Combinamos contexto, tecnología y sostenibilidad para construir soluciones que tengan sentido hoy y puedan crecer mañana.</p>
            <ButtonLink to="/servicios" variant="outlineLight" className="mt-8">Conoce nuestros servicios</ButtonLink>
          </Reveal>
          <div className="grid gap-4 sm:grid-cols-3">
            {items.map(([Icon, title, text], index) => (
              <Reveal key={title} delay={index * 0.08} className="rounded-2xl border border-white/10 bg-white/[0.04] p-6">
                <Icon className="h-6 w-6 text-brand-blue" />
                <h3 className="mt-7 font-display text-xl font-semibold">{title}</h3>
                <p className="mt-3 text-sm leading-6 text-white/60">{text}</p>
              </Reveal>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
