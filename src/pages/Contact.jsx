import { ArrowRight, Mail, MapPin, Phone } from 'lucide-react';
import { contactConfig } from '../config/contact';
import Breadcrumbs from '../components/ui/Breadcrumbs';
import Reveal from '../components/ui/Reveal';
import ContactSection from '../components/sections/ContactSection';
import JsonLd from '../components/ui/JsonLd';
import { useSeo, breadcrumbSchema, faqSchema } from '../utils/seo';

const faqs = [
  {
    question: '¿Qué tipo de cargador necesito para mi vehículo eléctrico?',
    answer: 'Depende de tu vehículo, uso diario y tipo de instalación. ENERMOVE te asesora para elegir entre carga lenta (AC), carga rápida (DC) o cargadores portátiles según tu modelo de carro y necesidades.',
  },
  {
    question: '¿Realizan instalaciones en toda Colombia?',
    answer: 'Sí, contamos con cobertura nacional a través de aliados instaladores certificados. Coordinamos la instalación según tu ciudad y tipo de proyecto.',
  },
  {
    question: '¿Cuánto tiempo tarda la instalación de un cargador?',
    answer: 'Para instalaciones residenciales estándar, entre 4 y 8 horas. Proyectos empresariales o de infraestructura requieren evaluación previa y pueden tomar varios días.',
  },
  {
    question: '¿Ofrecen financiamiento o planes de pago?',
    answer: 'Trabajamos con entidades financieras aliadas para ofrecer opciones de financiamiento. Consulta condiciones al solicitar tu cotización.',
  },
];

export default function Contact() {
  useSeo({
    title: 'Cotiza tu cargador de carro eléctrico | ENERMOVE',
    description: 'Cuéntanos tu proyecto y te respondemos por WhatsApp, correo o teléfono. Instalación certificada RETIE en Bogotá y Colombia.',
    canonical: 'https://enermove.example/contacto',
  });

  const breadcrumbData = breadcrumbSchema([
    { name: 'Inicio', url: 'https://enermove.example/' },
    { name: 'Contacto', url: 'https://enermove.example/contacto' },
  ]);
  const faqData = faqSchema(faqs);

  return (
    <>
      <JsonLd id="breadcrumb-schema" data={breadcrumbData} />
      <JsonLd id="faq-schema" data={faqData} />
      <section className="bg-brand-ink px-5 pt-32 pb-20 text-white sm:px-8 lg:px-12 lg:pb-28 lg:pt-40">
        <div className="mx-auto max-w-page">
          <Breadcrumbs items={[{ label: 'Contacto' }]} />
          <div className="mt-12 max-w-4xl">
            <Reveal>
              <p className="font-display text-sm font-semibold uppercase tracking-[0.22em] text-brand-blue">Contacto</p>
              <h1 className="mt-5 font-display text-5xl font-bold leading-[1.02] tracking-tight sm:text-6xl lg:text-7xl">Cotiza tu cargador para carro eléctrico.</h1>
              <p className="mt-7 max-w-2xl text-base leading-8 text-white/65">Cuéntanos qué necesitas y construyamos una ruta clara para incorporar soluciones de movilidad eléctrica y energía limpia en Colombia.</p>
            </Reveal>
          </div>
        </div>
      </section>
      <ContactSection />
    </>
  );
}
