import { ArrowRight, Check, Leaf, ShieldCheck, Sparkles } from 'lucide-react';
import { Link } from 'react-router-dom';
import Reveal from '../ui/Reveal';
import { company } from '../../data/company';

export default function AboutValues() {
  return (
    <section className="bg-white px-5 py-20 sm:px-8 lg:px-12 lg:py-28">
      <div className="mx-auto max-w-page">
        <div className="grid gap-12 lg:grid-cols-[1.1fr_0.9fr] lg:gap-20">
          <Reveal>
            <p className="font-display text-sm font-semibold uppercase tracking-[0.22em] text-brand-blue">Nuestros valores</p>
            <h2 className="mt-5 font-display text-4xl font-bold leading-[1.05] tracking-tight text-brand-ink sm:text-5xl lg:text-6xl">La energía también se trata de confianza.</h2>
            <p className="mt-7 max-w-xl text-base leading-8 text-brand-charcoal/65">Escuchar primero. Proponer con claridad. Construir con responsabilidad.</p>
            <div className="mt-9 grid gap-4 sm:grid-cols-2">
              {[
                [ShieldCheck, 'Innovación'],
                [Leaf, 'Sostenibilidad'],
                [Sparkles, 'Eficiencia'],
                [Check, 'Acompañamiento'],
              ].map(([Icon, title]) => (
                <div key={title} className="rounded-2xl border border-brand-line bg-brand-sand p-6">
                  <Icon className="h-5 w-5 text-brand-blue" />
                  <h3 className="mt-5 font-display text-lg font-semibold">{title}</h3>
                  <span className="mt-4 block h-1 w-8 rounded-full bg-brand-blue/70" />
                </div>
              ))}
            </div>
          </Reveal>
          <Reveal delay={0.12} className="relative overflow-hidden rounded-[2rem] bg-brand-ink p-8 text-white sm:p-10 sm:min-h-[420px]">
            <div className="absolute -right-16 -top-16 h-56 w-56 rounded-full bg-brand-blue/20 blur-3xl" />
            <p className="relative font-display text-sm font-semibold uppercase tracking-[0.22em] text-brand-blue">Propósito</p>
            <blockquote className="relative mt-8 font-display text-3xl font-semibold leading-tight sm:text-4xl">{company.purpose}</blockquote>
            <p className="relative mt-7 text-sm leading-7 text-white/60">Conectamos la movilidad del futuro con la energía del presente.</p>
            <Link to="/contacto" className="relative mt-10 inline-flex items-center gap-2 rounded-full border border-white/25 px-5 py-3 text-sm font-semibold transition-all hover:border-brand-blue hover:bg-brand-blue">
              Cotizar mi proyecto
              <ArrowRight className="h-4 w-4" />
            </Link>
          </Reveal>
        </div>
      </div>
    </section>
  );
}
