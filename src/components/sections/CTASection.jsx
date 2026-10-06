import { Link } from 'react-router-dom';
import { getWhatsAppUrl } from '../../config/contact';
import Reveal from '../ui/Reveal';
import SectionHeading from '../ui/SectionHeading';
import ButtonLink from '../buttons/ButtonLink';

export default function CTASection() {
  const whatsappHref = getWhatsAppUrl();

  return (
    <section className="relative overflow-hidden bg-brand-blue px-5 py-20 sm:px-8 lg:px-12 lg:py-28">
      <div className="absolute -right-24 -top-24 h-96 w-96 rounded-full bg-brand-blue/20 blur-3xl" />
      <div className="absolute -bottom-32 -left-20 h-96 w-96 rounded-full bg-white/10 blur-3xl" />
      <div className="relative mx-auto max-w-page">
        <Reveal className="max-w-3xl">
          <SectionHeading inverted align="center" eyebrow="Conectemos tu próximo proyecto" title="El futuro de la movilidad ya está conectado." />
          <div className="mt-9 flex flex-col gap-3 sm:flex-row sm:flex-wrap">
            <ButtonLink to="/contacto" variant="light" className="sm:px-7 sm:py-4">Solicitar cotización</ButtonLink>
            <a href={whatsappHref} className="inline-flex items-center justify-center gap-2 rounded-full border border-white/35 px-6 py-3.5 text-sm font-semibold text-white transition-all hover:border-white hover:bg-white/10 sm:px-7 sm:py-4">
              Hablar por WhatsApp
            </a>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
