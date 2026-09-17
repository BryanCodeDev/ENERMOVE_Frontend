import { ArrowRight, Compass, HeartHandshake, Lightbulb, ShieldCheck } from 'lucide-react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { company } from '../data/company';
import { images } from '../data/images';
import Breadcrumbs from '../components/ui/Breadcrumbs';
import Reveal from '../components/ui/Reveal';
import SectionHeading from '../components/ui/SectionHeading';
import JsonLd from '../components/ui/JsonLd';
import { organizationSchema, useSeo } from '../utils/seo';
import AboutValues from '../components/sections/AboutValues';
import ProcessSection from '../components/sections/ProcessSection';
import CTASection from '../components/sections/CTASection';

const pillars = [
  [Compass, 'Innovación', 'Exploramos tecnologías que hacen más simple adoptar la movilidad eléctrica.'],
  [ShieldCheck, 'Eficiencia', 'Proponemos soluciones prácticas, claras y orientadas a resultados.'],
  [Lightbulb, 'Sostenibilidad', 'Impulsamos decisiones que contribuyen a un uso más limpio de la energía.'],
  [HeartHandshake, 'Acompañamiento', 'Cercanía y claridad en cada etapa del proyecto.'],
];

export default function About() {
  useSeo({
    title: 'Nosotros | ENERMOVE',
    description: 'Conoce a ENERMOVE, empresa colombiana orientada a la transición energética y la movilidad eléctrica.',
    canonical: 'https://enermove.example/nosotros',
  });

  return (
    <>
      <JsonLd data={organizationSchema} />
      <section className="bg-brand-sand px-5 pt-32 pb-20 sm:px-8 lg:px-12 lg:pb-28 lg:pt-40">
        <div className="mx-auto max-w-page">
          <Breadcrumbs items={[{ label: 'Nosotros' }]} />
          <div className="mt-12 grid items-center gap-14 lg:grid-cols-[0.9fr_1.1fr] lg:gap-20">
            <Reveal>
              <p className="font-display text-sm font-semibold uppercase tracking-[0.22em] text-brand-blue">Nosotros</p>
              <h1 className="mt-5 font-display text-5xl font-bold leading-[1.02] tracking-tight text-brand-ink sm:text-6xl lg:text-7xl">Estamos construyendo una nueva forma de movernos.</h1>
              <p className="mt-7 max-w-xl text-base leading-8 text-brand-charcoal/65">{company.description}</p>
              <div className="mt-9 flex flex-wrap gap-3">
                {['Innovación', 'Tecnología', 'Eficiencia', 'Sostenibilidad', 'Acompañamiento'].map((item) => <span key={item} className="rounded-full bg-white px-4 py-2 text-xs font-medium text-brand-charcoal/70 shadow-soft">{item}</span>)}
              </div>
            </Reveal>
            <Reveal delay={0.12} className="relative">
              <div className="relative aspect-[4/5] overflow-hidden rounded-[2rem] bg-brand-line">
                <img src={images.team} alt={images.teamAlt} loading="lazy" className="h-full w-full object-cover transition-transform duration-700 hover:scale-105" />
                <div className="absolute inset-0 bg-gradient-to-t from-brand-ink/55 via-transparent to-transparent" />
                <div className="absolute bottom-7 left-7 right-7 text-white">
                  <p className="text-xs font-semibold uppercase tracking-[0.18em] text-brand-green">Empresa colombiana</p>
                  <p className="mt-2 font-display text-2xl font-semibold">Transición energética con visión humana</p>
                </div>
              </div>
              <div className="absolute -left-4 -bottom-6 rounded-2xl bg-white p-5 shadow-soft sm:-left-8">
                <p className="font-display text-3xl font-bold text-brand-blue">EM</p>
                <p className="mt-1 text-xs leading-5 text-brand-charcoal/60">Energía que conecta tu hogar</p>
              </div>
            </Reveal>
          </div>
        </div>
      </section>
      <AboutValues />
      <section className="bg-brand-sand px-5 py-20 sm:px-8 lg:px-12 lg:py-28">
        <div className="mx-auto max-w-page">
          <SectionHeading align="center" eyebrow="Nuestra brújula" title="Misión, visión y propósito." description="Textos corporativos pendientes de definición oficial. Mantendremos estos espacios claramente identificados hasta contar con la versión aprobada." />
          <div className="mt-14 grid gap-5 lg:grid-cols-3">
            {[
              ['Misión', company.mission, Compass],
              ['Visión', company.vision, Lightbulb],
              ['Propósito', company.purpose, HeartHandshake],
            ].map(([title, text, Icon], index) => (
              <Reveal key={title} delay={index * 0.08} className="rounded-2xl border border-brand-line bg-white p-8">
                <Icon className="h-6 w-6 text-brand-green" />
                <p className="mt-8 font-display text-xs font-semibold uppercase tracking-[0.18em] text-brand-blue">0{index + 1}</p>
                <h3 className="mt-3 font-display text-2xl font-semibold">{title}</h3>
                <p className="mt-4 text-sm leading-7 text-brand-charcoal/65">{text}</p>
              </Reveal>
            ))}
          </div>
        </div>
      </section>
      <ProcessSection />
      <CTASection />
    </>
  );
}
