import { CheckCircle2 } from 'lucide-react';
import { Link } from 'react-router-dom';
import Reveal from '../ui/Reveal';
import SectionHeading from '../ui/SectionHeading';
import ButtonLink from '../buttons/ButtonLink';

export default function CatalogIntro() {
  return (
    <section className="bg-brand-sand px-5 py-20 sm:px-8 lg:px-12 lg:py-28">
      <div className="mx-auto max-w-page">
        <div className="grid gap-12 lg:grid-cols-[0.9fr_1.1fr] lg:gap-20">
          <Reveal>
            <SectionHeading eyebrow="Catálogo informativo" title="Tecnología para imaginar lo que sigue." />
            <p className="mt-7 max-w-xl text-base leading-8 text-brand-charcoal/65">Explora referencias de carga rápida, carga normal y soluciones portátiles. Los datos de marca, modelo, conectores y disponibilidad están pendientes de confirmación.</p>
            <div className="mt-8 flex flex-wrap gap-2">
              {['Sin precios', 'Sin carrito', 'Información por confirmar'].map((item) => (
                <span key={item} className="inline-flex items-center gap-2 rounded-full bg-white px-4 py-2 text-xs font-medium text-brand-charcoal/70"><CheckCircle2 className="h-4 w-4 text-brand-blue" />{item}</span>
              ))}
            </div>
          </Reveal>
          <Reveal delay={0.12} className="rounded-2xl border border-brand-line bg-white p-8 shadow-soft">
            <p className="font-display text-sm font-semibold uppercase tracking-[0.22em] text-brand-blue">Cómo usar este catálogo</p>
            <h3 className="mt-4 font-display text-xl font-semibold leading-tight sm:text-2xl">Consulta, compara y proyecta.</h3>
            <p className="mt-5 text-sm leading-7 text-brand-charcoal/65">Selecciona una referencia y cuéntanos tu contexto. Te ayudaremos a identificar la alternativa más coherente para tu proyecto.</p>
            <ButtonLink to="/contacto" variant="primary" className="mt-8">Solicitar orientación</ButtonLink>
          </Reveal>
        </div>
      </div>
    </section>
  );
}
