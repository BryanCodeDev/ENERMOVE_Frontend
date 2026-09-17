import { ArrowRight, CheckCircle2 } from 'lucide-react';
import { Link } from 'react-router-dom';
import { getWhatsAppUrl } from '../../config/contact';
import Reveal from '../ui/Reveal';

export default function CTASection() {
  const whatsappHref = getWhatsAppUrl();

  return (
    <section className="relative overflow-hidden bg-brand-blue px-5 py-24 sm:px-8 lg:px-12 lg:py-32">
      <div className="absolute -right-24 -top-24 h-96 w-96 rounded-full bg-brand-green/20 blur-3xl" />
      <div className="absolute -bottom-32 -left-20 h-96 w-96 rounded-full bg-white/10 blur-3xl" />
      <div className="relative mx-auto max-w-page">
        <Reveal className="max-w-3xl">
          <p className="font-display text-sm font-semibold uppercase tracking-[0.22em] text-brand-green">Conectemos tu próximo proyecto</p>
          <h2 className="mt-5 font-display text-4xl font-bold leading-[1.05] tracking-tight text-white sm:text-5xl lg:text-6xl">El futuro de la movilidad ya está conectado.</h2>
          <p className="mt-7 max-w-2xl text-base leading-8 text-white/75">Descubre cómo EnerMove puede ayudarte a incorporar soluciones de movilidad eléctrica y energía limpia.</p>
          <div className="mt-9 flex flex-col gap-4 sm:flex-row">
            <Link to="/contacto" className="inline-flex items-center justify-center gap-2 rounded-full bg-white px-7 py-4 text-sm font-semibold text-brand-blue shadow-soft transition-all hover:-translate-y-0.5 hover:bg-brand-green hover:text-white">
              Solicitar cotización
              <ArrowRight className="h-4 w-4" />
            </Link>
            <a href={whatsappHref} className="inline-flex items-center justify-center gap-2 rounded-full border border-white/35 px-7 py-4 text-sm font-semibold text-white transition-all hover:border-white hover:bg-white/10">
              Hablar por WhatsApp
            </a>
          </div>
        </Reveal>
        <div className="mt-14 grid gap-4 border-t border-white/15 pt-8 sm:grid-cols-3">
          {['Tecnología con propósito', 'Acompañamiento cercano', 'Energía más limpia'].map((item, index) => (
            <div key={item} className="flex items-center gap-3 text-sm font-medium text-white/85">
              <CheckCircle2 className="h-5 w-5 shrink-0 text-brand-green" />
              <span className="font-display text-xs uppercase tracking-[0.16em] text-white/45">0{index + 1}</span>
              {item}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
