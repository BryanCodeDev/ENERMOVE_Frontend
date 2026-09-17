import { ArrowRight, Check, Cog, Headphones, ShieldCheck, SlidersHorizontal, Sun, Wrench } from 'lucide-react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { services } from '../../data/services';
import Reveal from '../ui/Reveal';
import SectionHeading from '../ui/SectionHeading';

export default function ServicesSection() {
  return (
    <section className="bg-brand-sand px-5 py-20 sm:px-8 lg:px-12 lg:py-28">
      <div className="mx-auto max-w-page">
        <SectionHeading align="center" eyebrow="Nuestro acompañamiento" title="Más que equipos, una ruta para decidir mejor." description="Servicios provisionales sujetos a confirmación oficial. Queremos que cada paso sea claro, útil y adecuado para tu proyecto." />
        <div className="mt-14 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {services.map((service, index) => {
            const Icon = service.icon;
            return (
              <Reveal key={service.slug} delay={(index % 3) * 0.08} className="group">
                <article className="flex h-full flex-col rounded-2xl border border-brand-line bg-white p-7 transition-all duration-500 hover:-translate-y-1.5 hover:border-brand-green/40 hover:shadow-soft">
                  <div className="flex items-start justify-between">
                    <span className="grid h-11 w-11 place-items-center rounded-xl bg-brand-blue/10 text-brand-blue transition-transform group-hover:scale-110 group-hover:rotate-3"><Icon className="h-5 w-5" /></span>
                    <span className="font-display text-xs text-brand-green/70">0{index + 1}</span>
                  </div>
                  <h3 className="mt-8 font-display text-2xl font-semibold">{service.title}</h3>
                  <p className="mt-4 text-sm leading-6 text-brand-charcoal/65">{service.description}</p>
                  <div className="mt-6 flex flex-wrap gap-2">
                    {service.tags.map((tag) => <span key={tag} className="rounded-full bg-brand-sand px-3 py-1.5 text-[11px] text-brand-charcoal/70">{tag}</span>)}
                  </div>
                  <Link to="/contacto" className="mt-auto inline-flex items-center gap-2 pt-7 text-sm font-semibold text-brand-blue transition-colors hover:text-brand-green">
                    Consultar
                    <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
                  </Link>
                </article>
              </Reveal>
            );
          })}
        </div>
      </div>
    </section>
  );
}
