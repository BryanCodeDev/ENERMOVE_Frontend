import { ArrowRight, CircleDot } from 'lucide-react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { processSteps } from '../../data/services';
import Reveal from '../ui/Reveal';
import SectionHeading from '../ui/SectionHeading';

export default function ProcessSection() {
  return (
    <section className="relative overflow-hidden bg-brand-blue px-5 py-20 text-white sm:px-8 lg:px-12 lg:py-28">
      <div className="absolute -right-24 -top-24 h-72 w-72 rounded-full bg-white/10 blur-3xl sm:h-96 sm:w-96" />
      <div className="absolute -bottom-28 -left-20 h-72 w-72 rounded-full bg-brand-blueDark/40 blur-3xl sm:h-96 sm:w-96" />
      <div className="relative mx-auto max-w-page">
        <SectionHeading inverted align="center" eyebrow="Nuestro proceso" title="Una ruta clara, de la idea a la acción." />
        <div className="relative mt-12">
          <div className="absolute left-8 right-8 top-5 hidden h-px bg-white/20 lg:block" />
          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-5">
            {processSteps.map((step, index) => (
              <Reveal key={step.number} delay={index * 0.08} className="relative">
                <div className="relative flex flex-col items-start">
                  <span className="relative z-10 grid h-11 w-11 place-items-center rounded-full border-2 border-white/25 bg-brand-blue text-white transition-colors hover:border-white hover:bg-white hover:text-brand-blue"><CircleDot className="h-4 w-4" /></span>
                  <span className="mt-5 font-display text-xs font-semibold uppercase tracking-[0.18em] text-white/60">{step.number}</span>
                  <h3 className="mt-2 font-display text-lg font-semibold leading-snug">{step.title}</h3>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
        <div className="mt-10 text-center">
          <Link to="/contacto" className="inline-flex w-full items-center justify-center gap-2 rounded-full bg-white px-6 py-3.5 text-sm font-semibold text-brand-blue shadow-soft transition-all hover:-translate-y-0.5 hover:bg-brand-blueDark hover:text-white sm:w-auto">
            Iniciar mi proyecto
            <ArrowRight className="h-4 w-4" />
          </Link>
        </div>
      </div>
    </section>
  );
}
