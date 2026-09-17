import { ArrowRight, CheckCircle2 } from 'lucide-react';
import { Link } from 'react-router-dom';
import Breadcrumbs from '../components/ui/Breadcrumbs';
import Reveal from '../components/ui/Reveal';
import SectionHeading from '../components/ui/SectionHeading';
import ServicesSection from '../components/sections/ServicesSection';
import ProcessSection from '../components/sections/ProcessSection';
import ContactInfo from '../components/sections/ContactInfo';
import CTASection from '../components/sections/CTASection';
import { useSeo } from '../utils/seo';

export default function Services() {
  useSeo({
    title: 'Servicios | ENERMOVE',
    description: 'Acompañamiento de ENERMOVE para asesoría, selección de equipos, diseño de soluciones e integración energética.',
    canonical: 'https://enermove.example/servicios',
  });

  return (
    <>
      <section className="bg-brand-sand px-5 pt-32 pb-20 sm:px-8 lg:px-12 lg:pb-28 lg:pt-40">
        <div className="mx-auto max-w-page">
          <Breadcrumbs items={[{ label: 'Servicios' }]} />
          <div className="mt-12 grid items-end justify-between gap-10 lg:grid-cols-[1fr_0.6fr]">
            <Reveal>
              <p className="font-display text-sm font-semibold uppercase tracking-[0.22em] text-brand-blue">Servicios</p>
              <h1 className="mt-5 max-w-4xl font-display text-5xl font-bold leading-[1.02] tracking-tight text-brand-ink sm:text-6xl lg:text-7xl">Nuestro acompañamiento.</h1>
              <p className="mt-7 max-w-2xl text-base leading-8 text-brand-charcoal/65">Una ruta de trabajo provisional para entender tu necesidad, comparar alternativas y diseñar una solución coherente con tu proyecto.</p>
            </Reveal>
            <Reveal delay={0.12} className="rounded-2xl border border-brand-line bg-white p-7 shadow-soft">
              <CheckCircle2 className="h-7 w-7 text-brand-green" />
              <p className="mt-5 font-display text-xl font-semibold">Claridad antes que complejidad.</p>
              <p className="mt-3 text-sm leading-6 text-brand-charcoal/65">Cada servicio está sujeto a confirmación oficial y a las condiciones del proyecto.</p>
            </Reveal>
          </div>
        </div>
      </section>
      <ServicesSection />
      <ProcessSection />
      <ContactInfo />
      <CTASection />
    </>
  );
}
