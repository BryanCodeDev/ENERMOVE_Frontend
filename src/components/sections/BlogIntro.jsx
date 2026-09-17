import { ArrowRight, CheckCircle2 } from 'lucide-react';
import { Link } from 'react-router-dom';
import Reveal from '../ui/Reveal';

export default function BlogIntro() {
  return (
    <section className="bg-brand-sand px-5 py-20 sm:px-8 lg:px-12 lg:py-28">
      <div className="mx-auto max-w-page">
        <div className="grid gap-12 lg:grid-cols-[0.9fr_1.1fr] lg:gap-20">
          <Reveal>
            <p className="font-display text-sm font-semibold uppercase tracking-[0.22em] text-brand-blue">Blog</p>
            <h2 className="mt-5 font-display text-4xl font-bold leading-[1.05] tracking-tight text-brand-ink sm:text-5xl lg:text-6xl">Conocimiento para decidir con claridad.</h2>
            <p className="mt-7 max-w-xl text-base leading-8 text-brand-charcoal/65">Artículos de demostración sobre movilidad eléctrica, cargadores EV, energía solar y tecnología energética. Contenido pendiente de validación editorial.</p>
          </Reveal>
          <Reveal delay={0.12} className="rounded-2xl border border-brand-line bg-white p-8 shadow-soft">
            <p className="font-display text-sm font-semibold uppercase tracking-[0.22em] text-brand-green">Próximamente</p>
            <h3 className="mt-4 font-display text-3xl font-semibold leading-tight">Más ideas, guías y recursos.</h3>
            <p className="mt-5 text-sm leading-7 text-brand-charcoal/65">Estamos preparando contenido para ayudarte a entender las posibilidades de la movilidad eléctrica y la energía limpia en Colombia.</p>
            <div className="mt-8 flex flex-wrap gap-2">
              {['Movilidad eléctrica', 'Cargadores EV', 'Energía solar', 'Tecnología', 'Guías'].map((item) => <span key={item} className="rounded-full bg-brand-sand px-3 py-1.5 text-[11px] text-brand-charcoal/70">{item}</span>)}
            </div>
          </Reveal>
        </div>
      </div>
    </section>
  );
}
