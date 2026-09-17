import { ArrowRight, CheckCircle2, Leaf, Sparkles, UsersRound } from 'lucide-react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { company } from '../../data/company';
import { images } from '../../data/images';
import Reveal from '../ui/Reveal';

export default function AboutPreview() {
  return (
    <section id="conoce-enermove" className="bg-brand-sand px-5 py-20 sm:px-8 lg:px-12 lg:py-28">
      <div className="mx-auto max-w-page">
        <div className="grid items-center gap-14 lg:grid-cols-[0.9fr_1.1fr] lg:gap-20">
          <Reveal className="relative">
            <div className="relative aspect-[4/5] overflow-hidden rounded-[2rem] bg-brand-line">
              <img src={images.team} alt={images.teamAlt} loading="lazy" className="h-full w-full object-cover transition-transform duration-700 hover:scale-105" />
              <div className="absolute inset-0 bg-gradient-to-t from-brand-ink/55 via-transparent to-transparent" />
              <div className="absolute bottom-7 left-7 right-7 text-white">
                <p className="text-xs font-semibold uppercase tracking-[0.18em] text-brand-green">Colombia</p>
                <p className="mt-2 font-display text-2xl font-semibold">Innovación con propósito</p>
              </div>
            </div>
            <div className="absolute -right-4 -top-5 rounded-2xl bg-white p-5 shadow-soft sm:-right-8">
              <Sparkles className="h-6 w-6 text-brand-blue" />
              <p className="mt-3 font-display text-sm font-semibold">Transición energética</p>
              <p className="mt-1 max-w-[150px] text-xs leading-5 text-brand-charcoal/60">Una nueva forma de movernos</p>
            </div>
          </Reveal>
          <Reveal delay={0.12}>
            <p className="font-display text-sm font-semibold uppercase tracking-[0.22em] text-brand-blue">Nosotros</p>
            <h2 className="mt-5 font-display text-4xl font-bold leading-[1.05] tracking-tight text-brand-ink sm:text-5xl lg:text-6xl">Estamos construyendo una nueva forma de movernos.</h2>
            <p className="mt-7 max-w-xl text-base leading-8 text-brand-charcoal/65">{company.description}</p>
            <div className="mt-9 grid gap-4 sm:grid-cols-3">
              {[
                [UsersRound, 'Acompañamiento'],
                [Leaf, 'Sostenibilidad'],
                [CheckCircle2, 'Claridad'],
              ].map(([Icon, title]) => (
                <div key={title} className="rounded-xl border border-brand-line bg-white p-5">
                  <Icon className="h-5 w-5 text-brand-green" />
                  <p className="mt-4 font-display text-sm font-semibold">{title}</p>
                </div>
              ))}
            </div>
            <Link to="/nosotros" className="mt-9 inline-flex items-center gap-2 rounded-full border border-brand-line px-6 py-3.5 text-sm font-semibold text-brand-ink transition-all hover:border-brand-blue hover:bg-brand-blue hover:text-white">
              Conoce nuestra visión
              <ArrowRight className="h-4 w-4" />
            </Link>
          </Reveal>
        </div>
      </div>
    </section>
  );
}
