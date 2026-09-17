import { ArrowRight, Mail, MapPin, MessageCircle, Phone } from 'lucide-react';
import { Link } from 'react-router-dom';
import { contactConfig, getWhatsAppUrl } from '../../config/contact';
import QuoteForm from '../forms/QuoteForm';
import Reveal from '../ui/Reveal';

const whatsappHref = getWhatsAppUrl();
const details = [
  { icon: Mail, label: 'Email', value: contactConfig.email, href: `mailto:${contactConfig.email}` },
  { icon: Phone, label: 'Teléfono', value: contactConfig.phone, href: `tel:${contactConfig.phone}` },
  { icon: MapPin, label: 'Ubicación', value: `${contactConfig.city} · ${contactConfig.address}` },
  { icon: MessageCircle, label: 'WhatsApp', value: whatsappHref === '#' ? 'Pendiente de configuración' : 'Abrir chat', href: whatsappHref === '#' ? null : whatsappHref },
];

export default function ContactSection() {
  return (
    <section id="contacto" className="bg-brand-sand px-5 py-20 sm:px-8 lg:px-12 lg:py-28">
      <div className="mx-auto max-w-page">
        <div className="grid gap-14 lg:grid-cols-[0.8fr_1.2fr] lg:gap-20">
          <Reveal>
            <p className="font-display text-sm font-semibold uppercase tracking-[0.22em] text-brand-blue">Contacto</p>
            <h2 className="mt-5 font-display text-4xl font-bold leading-[1.05] tracking-tight text-brand-ink sm:text-5xl lg:text-6xl">Conversemos sobre tu proyecto.</h2>
            <p className="mt-7 max-w-lg text-base leading-8 text-brand-charcoal/65">Cuéntanos qué necesitas y construyamos juntos una ruta clara para incorporar movilidad eléctrica y energía limpia.</p>
            <div className="mt-10 space-y-5">
              {details.map(({ icon: Icon, label, value, href }) => (
                <div key={label} className="flex items-center gap-4">
                  <span className="grid h-11 w-11 shrink-0 place-items-center rounded-xl bg-white text-brand-blue shadow-soft"><Icon className="h-5 w-5" /></span>
                  <div>
                    <p className="text-xs font-semibold uppercase tracking-[0.16em] text-brand-charcoal/50">{label}</p>
                    {href ? <a className="mt-1 block text-sm font-medium text-brand-ink hover:text-brand-blue" href={href}>{value}</a> : <p className="mt-1 block text-sm font-medium text-brand-ink/70">{value}</p>}
                  </div>
                </div>
              ))}
            </div>
          </Reveal>
          <Reveal delay={0.12} className="rounded-2xl border border-brand-line bg-white p-6 shadow-soft sm:p-8 lg:p-10">
            <div className="mb-8">
              <p className="font-display text-sm font-semibold uppercase tracking-[0.22em] text-brand-green">Solicitud</p>
              <h3 className="mt-3 font-display text-3xl font-semibold leading-tight">Cuéntanos qué tienes en mente.</h3>
            </div>
            <QuoteForm compact />
          </Reveal>
        </div>
      </div>
    </section>
  );
}
