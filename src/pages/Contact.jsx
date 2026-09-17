import { ArrowRight, Mail, MapPin, MessageCircle, Phone } from 'lucide-react';
import { contactConfig } from '../config/contact';
import Breadcrumbs from '../components/ui/Breadcrumbs';
import Reveal from '../components/ui/Reveal';
import ContactSection from '../components/sections/ContactSection';
import CTASection from '../components/sections/CTASection';
import { useSeo } from '../utils/seo';

export default function Contact() {
  useSeo({
    title: 'Contacto | ENERMOVE',
    description: 'Contacta a ENERMOVE para conocer soluciones de movilidad eléctrica, carga EV y energía limpia.',
    canonical: 'https://enermove.example/contacto',
  });

  return (
    <>
      <section className="bg-brand-ink px-5 pt-32 pb-20 text-white sm:px-8 lg:px-12 lg:pb-28 lg:pt-40">
        <div className="mx-auto max-w-page">
          <Breadcrumbs items={[{ label: 'Contacto' }]} />
          <div className="mt-12 max-w-4xl">
            <Reveal>
              <p className="font-display text-sm font-semibold uppercase tracking-[0.22em] text-brand-green">Contacto</p>
              <h1 className="mt-5 font-display text-5xl font-bold leading-[1.02] tracking-tight sm:text-6xl lg:text-7xl">Conversemos sobre tu proyecto.</h1>
              <p className="mt-7 max-w-2xl text-base leading-8 text-white/65">Cuéntanos qué necesitas y construyamos una ruta clara para incorporar soluciones de movilidad eléctrica y energía limpia.</p>
            </Reveal>
          </div>
        </div>
      </section>
      <ContactSection />
      <CTASection />
    </>
  );
}
