import { ArrowRight, CircleDot } from 'lucide-react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { processSteps } from '../../data/services';
import Reveal from '../ui/Reveal';
import SectionHeading from '../ui/SectionHeading';

export default function ProcessSection() {
  return (
    <section className="bg-white px-5 py-20 sm:px-8 lg:px-12 lg:py-28">
      <div className="mx-auto max-w-page">
        <SectionHeading align="center" eyebrow="Nuestro proceso" title="Una ruta clara, de la idea a la acción." description="Cada proyecto es diferente. Por eso escuchamos, analizamos y proponemos con una visión práctica y escalable." />
        <div className="relative mt-16">
          <div className="absolute left-8 right-8 top-5 hidden h-px bg-brand-line lg:block" />
          <div className="grid gap-6 lg:grid-cols-5">
            {processSteps.map((step, index) => {
              const Icon = step.icon;
              return (
                <Reveal key={step.number} delay={index * 0.08} className="relative">
                  <div className="relative flex flex-col items-start">
                    <span className="relative z-10 grid h-11 w-11 place-items-center rounded-full border-2 border-brand-line bg-white text-brand-blue transition-colors hover:border-brand-green hover:text-brand-green"><CircleDot className="h-4 w-4" /></span>
                    <span className="mt-6 font-display text-xs font-semibold uppercase tracking-[0.18em] text-brand-green">{step.number}</span>
                    <h3 className="mt-3 font-display text-lg font-semibold leading-snug">{step.title}</h3>
                    <p className="mt-3 text-sm leading-6 text-brand-charcoal/60">{step.description}</p>
                  </div>
                </Reveal>
              );
            })}
          </div>
        </div>
        <div className="mt-14 text-center">
          <Link to="/contacto" className="inline-flex items-center gap-2 rounded-full border border-brand-line px-6 py-3.5 text-sm font-semibold text-brand-ink transition-all hover:border-brand-blue hover:bg-brand-blue hover:text-white">
            Hablemos de tu proyecto
            <ArrowRight className="h-4 w-4" />
          </Link>
        </div>
      </div>
    </section>
  );
}
