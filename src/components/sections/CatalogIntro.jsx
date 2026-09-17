import { ArrowRight, CheckCircle2 } from 'lucide-react';
import { Link } from 'react-router-dom';
import Reveal from '../ui/Reveal';

export default function CatalogIntro() {
  return (
    <section className="bg-brand-sand px-5 py-20 sm:px-8 lg:px-12 lg:py-28">
      <div className="mx-auto max-w-page">
        <div className="grid gap-12 lg:grid-cols-[0.9fr_1.1fr] lg:gap-20">
          <Reveal>
            <p className="font-display text-sm font-semibold uppercase tracking-[0.22em] text-brand-blue">Catálogo informativo</p>
            <h2 className="mt-5 font-display text-4xl font-bold leading-[1.05] tracking-tight text-brand-ink sm:text-5xl lg:text-6xl">Tecnología para imaginar lo que sigue.</h2>
            <p className="mt-7 max-w-xl text-base leading-8 text-brand-charcoal/65">Explora referencias de carga rápida, carga normal y soluciones portátiles. Los datos de marca, modelo, conectores y disponibilidad están pendientes de confirmación.</p>
            <div className="mt-8 flex flex-wrap gap-2">
              {['Sin precios', 'Sin carrito', 'Información por confirmar'].map((item) => (
                <span key={item} className="inline-flex items-center gap-2 rounded-full bg-white px-4 py-2 text-xs font-medium text-brand-charcoal/70"><CheckCircle2 className="h-4 w-4 text-brand-green" />{item}</span>
              ))}
            </div>
          </Reveal>
          <Reveal delay={0.12} className="rounded-2xl border border-brand-line bg-white p-8 shadow-soft">
            <p className="font-display text-sm font-semibold uppercase tracking-[0.22em] text-brand-green">Cómo usar este catálogo</p>
            <h3 className="mt-4 font-display text-3xl font-semibold leading-tight">Consulta, compara y proyecta.</h3>
            <p className="mt-5 text-sm leading-7 text-brand-charcoal/65">Selecciona una referencia y cuéntanos tu contexto. Te ayudaremos a identificar la alternativa más coherente para tu proyecto.</p>
            <Link to="/contacto" className="mt-8 inline-flex items-center gap-2 rounded-full bg-brand-blue px-6 py-3.5 text-sm font-semibold text-white shadow-lift transition-all hover:-translate-y-0.5 hover:bg-brand-blueDark">
              Solicitar orientación
              <ArrowRight className="h-4 w-4" />
            </Link>
          </Reveal>
        </div>
      </div>
    </section>
  );
}
