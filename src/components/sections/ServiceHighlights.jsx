import { ArrowRight, Check, Leaf, ShieldCheck, Sparkles } from 'lucide-react';
import { Link } from 'react-router-dom';
import Reveal from '../ui/Reveal';

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
            <p className="font-display text-sm font-semibold uppercase tracking-[0.22em] text-brand-green">Acompañamiento</p>
            <h2 className="mt-5 font-display text-4xl font-bold leading-[1.05] tracking-tight sm:text-5xl lg:text-6xl">Decisiones con una visión completa.</h2>
            <p className="mt-6 max-w-md text-base leading-7 text-white/65">Combinamos contexto, tecnología y sostenibilidad para construir soluciones que tengan sentido hoy y puedan crecer mañana.</p>
            <Link to="/servicios" className="mt-8 inline-flex items-center gap-2 text-sm font-semibold text-white hover:text-brand-green">
              Conoce nuestros servicios
              <ArrowRight className="h-4 w-4 transition-transform hover:translate-x-1" />
            </Link>
          </Reveal>
          <div className="grid gap-4 sm:grid-cols-3">
            {items.map(([Icon, title, text], index) => (
              <Reveal key={title} delay={index * 0.08} className="rounded-2xl border border-white/10 bg-white/[0.04] p-6">
                <Icon className="h-6 w-6 text-brand-green" />
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
