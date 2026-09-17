import { ArrowRight, Check, Mail, MapPin, MessageCircle, Phone } from 'lucide-react';
import { Link } from 'react-router-dom';
import { contactConfig, getWhatsAppUrl } from '../../config/contact';
import Reveal from '../ui/Reveal';

export default function ContactInfo() {
  const whatsappHref = getWhatsAppUrl();
  const items = [
    [Mail, 'Email', contactConfig.email, `mailto:${contactConfig.email}`],
    [Phone, 'Teléfono', contactConfig.phone, `tel:${contactConfig.phone}`],
    [MapPin, 'Ubicación', `${contactConfig.city} · ${contactConfig.address}`, null],
    [MessageCircle, 'WhatsApp', whatsappHref === '#' ? 'Pendiente de configuración' : 'Abrir chat', whatsappHref === '#' ? null : whatsappHref],
  ];

  return (
    <section className="bg-brand-ink px-5 py-20 text-white sm:px-8 lg:px-12 lg:py-28">
      <div className="mx-auto max-w-page">
        <div className="grid gap-12 lg:grid-cols-[0.9fr_1.1fr] lg:gap-20">
          <Reveal>
            <p className="font-display text-sm font-semibold uppercase tracking-[0.22em] text-brand-green">Contacto</p>
            <h2 className="mt-5 font-display text-4xl font-bold leading-[1.05] tracking-tight sm:text-5xl lg:text-6xl">Tu proyecto empieza con una conversación.</h2>
            <p className="mt-7 max-w-lg text-base leading-8 text-white/65">Comparte tu necesidad y construyamos una ruta clara para incorporar movilidad eléctrica y energía limpia.</p>
            <div className="mt-10 space-y-5">
              {items.map(([Icon, label, value, href]) => (
                <div key={label} className="flex items-center gap-4">
                  <span className="grid h-11 w-11 place-items-center rounded-xl bg-white/10 text-brand-green"><Icon className="h-5 w-5" /></span>
                  <div>
                    <p className="text-xs font-semibold uppercase tracking-[0.16em] text-white/45">{label}</p>
                    {href ? <a className="mt-1 block text-sm font-medium hover:text-brand-green" href={href}>{value}</a> : <p className="mt-1 block text-sm font-medium text-white/75">{value}</p>}
                  </div>
                </div>
              ))}
            </div>
          </Reveal>
          <Reveal delay={0.12} className="rounded-2xl border border-white/10 bg-white p-8 text-brand-ink shadow-soft sm:p-10">
            <p className="font-display text-sm font-semibold uppercase tracking-[0.22em] text-brand-blue">Solicita una cotización</p>
            <h3 className="mt-4 font-display text-3xl font-semibold leading-tight">Cuéntanos sobre tu necesidad.</h3>
            <p className="mt-5 text-sm leading-7 text-brand-charcoal/65">Este formulario frontend muestra una confirmación visual y está listo para conectar con un servicio backend en una siguiente etapa.</p>
            <ul className="mt-8 space-y-4">
              {['Diagnóstico inicial', 'Propuesta coherente', 'Acompañamiento cercano'].map((item) => (
                <li key={item} className="flex items-center gap-3 text-sm font-medium text-brand-charcoal/80"><Check className="h-4 w-4 text-brand-green" />{item}</li>
              ))}
            </ul>
            <Link to="/contacto" className="mt-9 inline-flex items-center gap-2 rounded-full bg-brand-blue px-6 py-3.5 text-sm font-semibold text-white shadow-lift transition-all hover:-translate-y-0.5 hover:bg-brand-blueDark">
              Ir al formulario
              <ArrowRight className="h-4 w-4" />
            </Link>
          </Reveal>
        </div>
      </div>
    </section>
  );
}
