import { ArrowRight, Check, Leaf, ShieldCheck, Sparkles } from 'lucide-react';
import { Link } from 'react-router-dom';
import Reveal from '../ui/Reveal';

export default function AboutValues() {
  return (
    <section className="bg-white px-5 py-20 sm:px-8 lg:px-12 lg:py-28">
      <div className="mx-auto max-w-page">
        <div className="grid gap-12 lg:grid-cols-[1.1fr_0.9fr] lg:gap-20">
          <Reveal>
            <p className="font-display text-sm font-semibold uppercase tracking-[0.22em] text-brand-blue">Nuestros valores</p>
            <h2 className="mt-5 font-display text-4xl font-bold leading-[1.05] tracking-tight text-brand-ink sm:text-5xl lg:text-6xl">La energía también se trata de confianza.</h2>
            <p className="mt-7 max-w-xl text-base leading-8 text-brand-charcoal/65">Trabajamos con una lógica simple: escuchar primero, proponer con claridad y construir soluciones que acompañen la transición energética de forma responsable.</p>
            <div className="mt-9 grid gap-4 sm:grid-cols-2">
              {[
                [ShieldCheck, 'Innovación', 'Buscamos alternativas que simplifiquen la adopción tecnológica.'],
                [Leaf, 'Sostenibilidad', 'Pensamos en el impacto de cada decisión energética.'],
                [Sparkles, 'Eficiencia', 'Proponemos rutas prácticas y escalables.'],
                [Check, 'Acompañamiento', 'Mantenemos una comunicación cercana y transparente.'],
              ].map(([Icon, title, text]) => (
                <div key={title} className="rounded-2xl border border-brand-line bg-brand-sand p-6">
                  <Icon className="h-5 w-5 text-brand-green" />
                  <h3 className="mt-5 font-display text-lg font-semibold">{title}</h3>
                  <p className="mt-3 text-sm leading-6 text-brand-charcoal/65">{text}</p>
                </div>
              ))}
            </div>
          </Reveal>
          <Reveal delay={0.12} className="relative min-h-[420px] overflow-hidden rounded-[2rem] bg-brand-ink p-8 text-white sm:p-10">
            <div className="absolute -right-16 -top-16 h-56 w-56 rounded-full bg-brand-green/20 blur-3xl" />
            <p className="relative font-display text-sm font-semibold uppercase tracking-[0.22em] text-brand-green">Propósito</p>
            <blockquote className="relative mt-8 font-display text-3xl font-semibold leading-tight sm:text-4xl">[REEMPLAZAR CON PROPÓSITO OFICIAL]</blockquote>
            <p className="relative mt-7 text-sm leading-7 text-white/60">Este texto es un placeholder hasta contar con la definición corporativa oficial.</p>
            <Link to="/contacto" className="relative mt-10 inline-flex items-center gap-2 rounded-full border border-white/25 px-5 py-3 text-sm font-semibold transition-all hover:border-brand-green hover:bg-brand-green">
              Hablemos
              <ArrowRight className="h-4 w-4" />
            </Link>
          </Reveal>
        </div>
      </div>
    </section>
  );
}
