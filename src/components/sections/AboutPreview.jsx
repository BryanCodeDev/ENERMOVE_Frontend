import { ArrowRight } from 'lucide-react';
import { Link } from 'react-router-dom';
import { company } from '../../data/company';
import { images } from '../../data/images';
import Reveal from '../ui/Reveal';

export default function AboutPreview() {
  return (
    <section id="conoce-enermove" className="bg-brand-sand px-5 py-20 sm:px-8 lg:px-12 lg:py-28">
      <div className="mx-auto max-w-page">
        <div className="grid items-center gap-14 lg:grid-cols-[0.9fr_1.1fr] lg:gap-20">
          <Reveal>
            <div className="media-frame media-frame--portrait relative overflow-hidden rounded-[1.5rem] bg-brand-line sm:rounded-[2rem]">
              <img src={images.team} alt={images.teamAlt} loading="lazy" className="h-full w-full object-cover transition-transform duration-700 hover:scale-105" />
              <div className="absolute inset-0 bg-gradient-to-t from-brand-ink/55 via-transparent to-transparent" />
              <div className="absolute bottom-4 left-4 right-4 text-white sm:bottom-7 sm:left-7 sm:right-7">
                <p className="text-[10px] font-semibold uppercase tracking-[0.18em] text-brand-blue sm:text-xs">Colombia</p>
                <p className="mt-2 font-display text-lg font-semibold leading-tight sm:text-2xl">Innovación con propósito</p>
              </div>
            </div>
          </Reveal>
          <Reveal delay={0.12}>
            <p className="font-display text-sm font-semibold uppercase tracking-[0.22em] text-brand-blue">Nosotros</p>
            <h2 className="mt-5 font-display text-4xl font-bold leading-[1.05] tracking-tight text-brand-ink sm:text-5xl lg:text-6xl">Estamos construyendo una nueva forma de movernos.</h2>
            <p className="mt-6 max-w-xl text-base leading-8 text-brand-charcoal/65">{company.description}</p>
            <Link to="/nosotros" className="mt-8 inline-flex items-center gap-2 rounded-full border border-brand-line px-6 py-3.5 text-sm font-semibold text-brand-ink transition-all hover:border-brand-blue hover:bg-brand-blue hover:text-white">
              Conoce nuestra visión
              <ArrowRight className="h-4 w-4" />
            </Link>
          </Reveal>
        </div>
      </div>
    </section>
  );
}
