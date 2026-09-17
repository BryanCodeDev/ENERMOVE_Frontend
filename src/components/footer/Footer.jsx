import { ArrowUpRight, Facebook, Instagram, Linkedin, Mail, MapPin, MessageCircle, Phone } from 'lucide-react';
import { Link } from 'react-router-dom';
import { contactConfig } from '../../config/contact';

const navigation = [
  { label: 'Inicio', to: '/' },
  { label: 'Nosotros', to: '/nosotros' },
  { label: 'Soluciones', to: '/soluciones' },
  { label: 'Servicios', to: '/servicios' },
  { label: 'Catálogo', to: '/catalogo' },
  { label: 'Blog', to: '/blog' },
  { label: 'Contacto', to: '/contacto' },
];

const solutionLinks = [
  { label: 'Carga residencial', to: '/soluciones#carga-residencial' },
  { label: 'Carga empresarial', to: '/soluciones#carga-empresarial' },
  { label: 'Infraestructura EV', to: '/soluciones#infraestructura-ev' },
  { label: 'Energía solar', to: '/soluciones#energia-solar' },
];

const socialLinks = [
  { label: 'Instagram', href: contactConfig.social.instagram, icon: Instagram },
  { label: 'LinkedIn', href: contactConfig.social.linkedin, icon: Linkedin },
  { label: 'Facebook', href: contactConfig.social.facebook, icon: Facebook },
];

const isPlaceholder = (value) => typeof value === 'string' && value.includes('REEMPLAZAR');

export default function Footer() {
  return (
    <footer className="bg-brand-ink text-white">
      <div className="mx-auto max-w-page px-5 py-16 sm:px-8 lg:px-12">
        <div className="grid gap-12 border-b border-white/10 pb-14 lg:grid-cols-[1.35fr_0.7fr_0.8fr_1fr] lg:gap-8">
          <div>
            <Link to="/" className="inline-flex items-center gap-2" aria-label="ENERMOVE inicio">
              <span className="grid h-10 w-10 place-items-center rounded-xl bg-brand-green font-display text-sm font-bold tracking-tight">EM</span>
              <span className="font-display text-xl font-bold tracking-wide">ENERMOVE</span>
            </Link>
            <p className="mt-5 max-w-xs text-sm leading-7 text-white/65">{contactConfig.tagline || 'Energía que conecta tu hogar'}</p>
            <div className="mt-7 flex flex-wrap gap-2">
              <span className="rounded-full border border-white/15 px-3 py-1.5 text-[11px] font-semibold uppercase tracking-[0.18em] text-white/70">Movilidad eléctrica</span>
              <span className="rounded-full border border-white/15 px-3 py-1.5 text-[11px] font-semibold uppercase tracking-[0.18em] text-white/70">Energía limpia</span>
            </div>
            <div className="mt-7 flex gap-3">
              {socialLinks.map(({ label, href, icon: Icon }) => {
                const placeholder = isPlaceholder(href);
                const content = <Icon className="h-4 w-4" />;
                return placeholder ? (
                  <span key={label} className="grid h-9 w-9 place-items-center rounded-full border border-white/15 text-white/35" title={`${label} pendiente de configuración`}>{content}</span>
                ) : (
                  <a key={label} href={href} target="_blank" rel="noreferrer" className="grid h-9 w-9 place-items-center rounded-full border border-white/15 text-white/75 transition-colors hover:border-brand-green hover:text-brand-green" aria-label={label}>{content}</a>
                );
              })}
            </div>
          </div>

          <div>
            <p className="font-display text-sm font-semibold uppercase tracking-[0.18em] text-white/45">Explorar</p>
            <ul className="mt-6 space-y-4">
              {navigation.slice(1).map((item) => (
                <li key={item.to}>
                  <Link className="group inline-flex items-center gap-2 text-sm text-white/75 transition-colors hover:text-white" to={item.to}>
                    <span>{item.label}</span>
                    <ArrowUpRight className="h-3.5 w-3.5 opacity-0 transition-all group-hover:translate-x-0.5 group-hover:opacity-100" />
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <p className="font-display text-sm font-semibold uppercase tracking-[0.18em] text-white/45">Soluciones</p>
            <ul className="mt-6 space-y-4">
              {solutionLinks.map((item) => (
                <li key={item.to}>
                  <Link className="text-sm text-white/75 transition-colors hover:text-white" to={item.to}>{item.label}</Link>
                </li>
              ))}
              <li>
                <Link className="text-sm text-white/75 transition-colors hover:text-white" to="/catalogo">Catálogo informativo</Link>
              </li>
            </ul>
          </div>

          <div>
            <p className="font-display text-sm font-semibold uppercase tracking-[0.18em] text-white/45">Contacto</p>
            <ul className="mt-6 space-y-4 text-sm text-white/75">
              <li className="flex gap-3">
                <Mail className="mt-0.5 h-4 w-4 shrink-0 text-brand-green" />
                <a className="break-words hover:text-white" href={`mailto:${contactConfig.email}`}>{contactConfig.email}</a>
              </li>
              <li className="flex gap-3">
                <Phone className="mt-0.5 h-4 w-4 shrink-0 text-brand-green" />
                <a className="hover:text-white" href={`tel:${contactConfig.phone}`}>{contactConfig.phone}</a>
              </li>
              <li className="flex gap-3">
                <MapPin className="mt-0.5 h-4 w-4 shrink-0 text-brand-green" />
                <span>{contactConfig.city} {contactConfig.address && `· ${contactConfig.address}`}</span>
              </li>
              <li className="flex gap-3">
                <MessageCircle className="mt-0.5 h-4 w-4 shrink-0 text-brand-green" />
                <span>WhatsApp disponible próximamente</span>
              </li>
            </ul>
          </div>
        </div>

        <div className="flex flex-col gap-6 pt-8 text-xs text-white/45 sm:flex-row sm:items-end sm:justify-between">
          <p>© {new Date().getFullYear()} ENERMOVE. Todos los derechos reservados.</p>
          <div className="flex flex-wrap gap-x-6 gap-y-2">
            <Link className="hover:text-white" to="/politica-de-privacidad">Política de privacidad</Link>
            <Link className="hover:text-white" to="/tratamiento-de-datos">Tratamiento de datos</Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
