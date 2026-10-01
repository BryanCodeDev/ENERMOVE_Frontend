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

const pillars = [
  [Compass, 'Innovación', 'Exploramos tecnologías que hacen más simple adoptar la movilidad eléctrica.'],
  [ShieldCheck, 'Eficiencia', 'Proponemos soluciones prácticas, claras y orientadas a resultados.'],
  [Lightbulb, 'Sostenibilidad', 'Impulsamos decisiones que contribuyen a un uso más limpio de la energía.'],
  [HeartHandshake, 'Acompañamiento', 'Cercanía y claridad en cada etapa del proyecto.'],
];

export default function About() {
  useSeo({
    title: 'Empresa de cargadores EV y energía solar en Colombia | ENERMOVE',
    description: 'ENERMOVE S.A.S., empresa colombiana con sede en Bogotá. Ingeniería, importación, instalación y consultoría en movilidad eléctrica e integración solar. Fundador: Ing. Mecánico, Especialista PMI, 15+ años en sector energético.',
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
              <h1 className="mt-5 font-display text-5xl font-bold leading-[1.02] tracking-tight text-brand-ink sm:text-6xl lg:text-7xl">ENERMOVE: ingeniería colombiana para la movilidad eléctrica.</h1>
              <p className="mt-7 max-w-xl text-base leading-8 text-brand-charcoal/65">{company.description}</p>
              <p className="mt-5 max-w-xl text-base leading-8 text-brand-charcoal/65">Fundada por ingeniero mecánico con especialización PMI y 15+ años en energía. Sede en Bogotá, cobertura nacional mediante red de instaladores certificados RETIE.</p>
              <div className="mt-9 flex flex-wrap gap-3">
                {['Innovación', 'Tecnología', 'Eficiencia', 'Sostenibilidad', 'Acompañamiento'].map((item) => <span key={item} className="rounded-full bg-white px-4 py-2 text-xs font-medium text-brand-charcoal/70 shadow-soft">{item}</span>)}
              </div>
            </Reveal>
            <Reveal delay={0.12} className="relative">
              <div className="media-frame media-frame--portrait relative overflow-hidden rounded-[1.5rem] bg-brand-line sm:rounded-[2rem]">
                <img src={images.nosotros} alt={images.nosotrosAlt} loading="lazy" className="h-full w-full object-cover transition-transform duration-700 hover:scale-105" />
                <div className="absolute inset-0 bg-gradient-to-t from-brand-ink/55 via-transparent to-transparent" />
                <div className="absolute bottom-4 left-4 right-4 text-white sm:bottom-7 sm:left-7 sm:right-7">
                  <p className="text-[10px] font-semibold uppercase tracking-[0.18em] text-brand-blue sm:text-xs">Empresa colombiana</p>
                  <p className="mt-2 font-display text-lg font-semibold leading-tight sm:text-2xl">Transición energética con visión humana</p>
                </div>
              </div>
              <div className="absolute -bottom-5 left-2 max-w-[72%] rounded-2xl bg-white p-4 shadow-soft sm:-bottom-6 sm:left-2 sm:max-w-none sm:-left-8 sm:p-5">
                <p className="font-display text-2xl font-bold text-brand-blue sm:text-3xl">EM</p>
                <p className="mt-1 text-[11px] leading-5 text-brand-charcoal/60 sm:text-xs">Energía que conecta tu hogar</p>
              </div>
            </Reveal>
          </div>
        </div>
      </section>
      <AboutValues />
      <section className="bg-brand-sand px-5 py-20 sm:px-8 lg:px-12 lg:py-28">
        <div className="mx-auto max-w-page">
          <SectionHeading align="center" eyebrow="Nuestra brújula" title="Misión, visión y propósito." description="Los pilares que guían cada decisión y proyecto en ENERMOVE." />
          <div className="mt-14 grid gap-5 lg:grid-cols-3">
            {[
              ['Misión', company.mission, Compass],
              ['Visión', company.vision, Lightbulb],
              ['Propósito', company.purpose, HeartHandshake],
            ].map(([title, text, Icon], index) => (
              <Reveal key={title} delay={index * 0.08} className="rounded-2xl border border-brand-line bg-white p-8">
                <Icon className="h-6 w-6 text-brand-blue" />
                <p className="mt-8 font-display text-xs font-semibold uppercase tracking-[0.18em] text-brand-blue">0{index + 1}</p>
                <h3 className="mt-3 font-display text-2xl font-semibold">{title}</h3>
                <p className="mt-4 text-sm leading-7 text-brand-charcoal/65">{text}</p>
              </Reveal>
            ))}
          </div>
        </div>
      </section>
      <ProcessSection />
    </>
  );
}
