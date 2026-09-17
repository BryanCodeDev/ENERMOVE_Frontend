import { ArrowRight, Check, Leaf, PlugZap, Sun } from 'lucide-react';
import { Link } from 'react-router-dom';
import { solutions } from '../data/solutions';
import Breadcrumbs from '../components/ui/Breadcrumbs';
import Reveal from '../components/ui/Reveal';
import SectionHeading from '../components/ui/SectionHeading';
import SolutionCard from '../components/cards/SolutionCard';
import ResidentialSection from '../components/sections/ResidentialSection';
import BusinessSection from '../components/sections/BusinessSection';
import SolarSection from '../components/sections/SolarSection';
import CTASection from '../components/sections/CTASection';
import { useSeo } from '../utils/seo';

export default function Solutions() {
  useSeo({
    title: 'Soluciones | ENERMOVE',
    description: 'Conoce las soluciones de ENERMOVE en carga residencial, carga empresarial, infraestructura EV y energía solar.',
    canonical: 'https://enermove.example/soluciones',
  });

  return (
    <>
      <section className="bg-brand-ink px-5 pt-32 pb-20 text-white sm:px-8 lg:px-12 lg:pb-28 lg:pt-40">
        <div className="mx-auto max-w-page">
          <Breadcrumbs items={[{ label: 'Soluciones' }]} />
          <div className="mt-12 grid items-end justify-between gap-10 lg:grid-cols-[1fr_0.65fr]">
            <Reveal>
              <p className="font-display text-sm font-semibold uppercase tracking-[0.22em] text-brand-green">Soluciones</p>
              <h1 className="mt-5 max-w-4xl font-display text-5xl font-bold leading-[1.02] tracking-tight sm:text-6xl lg:text-7xl">Soluciones para cada necesidad.</h1>
              <p className="mt-7 max-w-2xl text-base leading-8 text-white/65">Conectamos movilidad eléctrica, carga inteligente y energía limpia en propuestas pensadas para hogares, empresas y proyectos de infraestructura.</p>
            </Reveal>
            <Reveal delay={0.12} className="rounded-2xl border border-white/10 bg-white/[0.05] p-7 backdrop-blur-md">
              <p className="font-display text-sm font-semibold uppercase tracking-[0.18em] text-brand-green">Enfoque integral</p>
              <ul className="mt-6 space-y-4 text-sm leading-6 text-white/75">
                {['Diagnóstico del contexto', 'Tecnología adecuada', 'Visión de crecimiento', 'Energía más limpia'].map((item) => <li key={item} className="flex gap-3"><Check className="mt-0.5 h-4 w-4 shrink-0 text-brand-green" />{item}</li>)}
              </ul>
            </Reveal>
          </div>
        </div>
      </section>
      <section className="bg-brand-sand px-5 py-20 sm:px-8 lg:px-12 lg:py-28">
        <div className="mx-auto max-w-page">
          <SectionHeading align="center" eyebrow="Explora" title="Una solución para cada etapa." description="Selecciona una línea para conocer cómo podemos ayudarte a avanzar con mayor claridad." />
          <div className="mt-14 grid gap-5 md:grid-cols-2 lg:grid-cols-3">
            {solutions.map((solution, index) => <SolutionCard key={solution.slug} solution={solution} index={index} />)}
          </div>
        </div>
      </section>
      <ResidentialSection />
      <BusinessSection />
      <SolarSection />
      <CTASection />
    </>
  );
}
