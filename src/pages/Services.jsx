import { ArrowRight, CheckCircle2 } from 'lucide-react';
import { Link } from 'react-router-dom';
import Breadcrumbs from '../components/ui/Breadcrumbs';
import Reveal from '../components/ui/Reveal';
import SectionHeading from '../components/ui/SectionHeading';
import ServicesSection from '../components/sections/ServicesSection';
import ProcessSection from '../components/sections/ProcessSection';
import ContactInfo from '../components/sections/ContactInfo';
import JsonLd from '../components/ui/JsonLd';
import { useSeo, serviceSchema, breadcrumbSchema } from '../utils/seo';

const services = [
  { title: 'Asesoría especializada', category: 'Consultoría', features: ['Diagnóstico de necesidades', 'Análisis de viabilidad técnica', 'Recomendación de tecnología'] },
  { title: 'Selección de equipos', category: 'Especificación', features: ['Comparativa de fabricantes', 'Dimensionamiento de cargadores', 'Compatibilidad vehicular'] },
  { title: 'Diseño de soluciones', category: 'Ingeniería', features: ['Planos unifilares', 'Cálculo de protecciones', 'Integración con solar'] },
  { title: 'Integración energética', category: 'Sistemas', features: ['Gestión de carga inteligente', 'Monitoreo remoto', 'Optimización de demanda'] },
];

export default function Services() {
  useSeo({
    title: 'Instalación de cargadores y energía solar | ENERMOVE',
    description: 'Asesoría, selección de equipos, diseño e integración de carga EV con paneles solares. Instalación certificada RETIE en Colombia.',
    canonical: 'https://enermove.netlify.app/servicios',
  });

  const breadcrumbData = breadcrumbSchema([
    { name: 'Inicio', url: 'https://enermove.netlify.app/' },
    { name: 'Servicios', url: 'https://enermove.netlify.app/servicios' },
  ]);
  const serviceSchemas = services.map(serviceSchema);

  return (
    <>
      <JsonLd id="breadcrumb-schema" data={breadcrumbData} />
      {serviceSchemas.map((schema, i) => <JsonLd key={`service-${i}`} data={schema} />)}
      <section className="bg-brand-sand px-5 pt-32 pb-20 sm:px-8 lg:px-12 lg:pb-28 lg:pt-40">
        <div className="mx-auto max-w-page">
          <Breadcrumbs items={[{ label: 'Servicios' }]} />
          <div className="mt-12 grid items-end justify-between gap-10 lg:grid-cols-[1fr_0.6fr]">
            <Reveal>
              <p className="font-display text-sm font-semibold uppercase tracking-[0.22em] text-brand-blue">Servicios</p>
              <h1 className="mt-5 max-w-4xl font-display text-5xl font-bold leading-[1.02] tracking-tight text-brand-ink sm:text-6xl lg:text-7xl">Instalación de cargadores EV, energía solar y integración energética.</h1>
              <p className="mt-7 max-w-2xl text-base leading-8 text-brand-charcoal/65">Diseñamos una ruta clara: diagnosticamos tu necesidad, comparamos alternativas técnicas y definimos la solución óptima para tu proyecto de carga EV e integración solar.</p>
            </Reveal>
            <Reveal delay={0.12} className="rounded-2xl border border-brand-line bg-white p-7 shadow-soft">
              <CheckCircle2 className="h-7 w-7 text-brand-blue" />
              <p className="mt-5 font-display text-xl font-semibold">Claridad antes que complejidad.</p>
              <p className="mt-3 text-sm leading-6 text-brand-charcoal/65">Alcance, tiempos y condiciones se definen en propuesta formal tras diagnóstico inicial.</p>
            </Reveal>
          </div>
        </div>
      </section>
      <ServicesSection />
      <ProcessSection />
      <ContactInfo />
    </>
  );
}
