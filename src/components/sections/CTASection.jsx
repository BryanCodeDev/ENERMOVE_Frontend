import { ArrowRight } from 'lucide-react';
import { Link } from 'react-router-dom';
import { getWhatsAppUrl } from '../../config/contact';
import Reveal from '../ui/Reveal';

export default function CTASection() {
  const whatsappHref = getWhatsAppUrl();

  return (
    <section className="relative overflow-hidden bg-brand-blue px-5 py-24 sm:px-8 lg:px-12 lg:py-32">
      <div className="absolute -right-24 -top-24 h-96 w-96 rounded-full bg-brand-blue/20 blur-3xl" />
      <div className="absolute -bottom-32 -left-20 h-96 w-96 rounded-full bg-white/10 blur-3xl" />
      <div className="relative mx-auto max-w-page">
        <Reveal className="max-w-3xl">
          <p className="font-display text-sm font-semibold uppercase tracking-[0.22em] text-white">Conectemos tu próximo proyecto</p>
          <h2 className="mt-5 font-display text-4xl font-bold leading-[1.05] tracking-tight text-white sm:text-5xl lg:text-6xl">El futuro de la movilidad ya está conectado.</h2>
          <div className="mt-9 flex flex-col gap-3 sm:flex-row sm:flex-wrap">
            <Link to="/contacto" className="inline-flex items-center justify-center gap-2 rounded-full bg-white px-6 py-3.5 text-sm font-semibold text-brand-blue shadow-soft transition-all hover:-translate-y-0.5 hover:bg-brand-sand hover:text-brand-blueDark sm:px-7 sm:py-4">
              Solicitar cotización
              <ArrowRight className="h-4 w-4" />
            </Link>
            <a href={whatsappHref} className="inline-flex items-center justify-center gap-2 rounded-full border border-white/35 px-6 py-3.5 text-sm font-semibold text-white transition-all hover:border-white hover:bg-white/10 sm:px-7 sm:py-4">
              Hablar por WhatsApp
            </a>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
