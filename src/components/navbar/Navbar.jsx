import { Menu, X, ArrowRight } from 'lucide-react';
import { useEffect, useState } from 'react';
import { Link, NavLink, useLocation } from 'react-router-dom';
import { motion, useScroll, useTransform } from 'framer-motion';

const links = [
  { label: 'Inicio', to: '/' },
  { label: 'Nosotros', to: '/nosotros' },
  { label: 'Soluciones', to: '/soluciones' },
  { label: 'Servicios', to: '/servicios' },
  { label: 'Catálogo', to: '/catalogo' },
  { label: 'Blog', to: '/blog' },
  { label: 'Contacto', to: '/contacto' },
];

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);
  const { pathname } = useLocation();
  const { scrollY } = useScroll();
  const navY = useTransform(scrollY, [0, 120], [0, -18]);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24);
    onScroll();
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  useEffect(() => setOpen(false), [pathname]);

  const darkHeaderRoutes = ['/', '/soluciones', '/catalogo', '/contacto'];
  const isDarkHeader = !scrolled && !open && (darkHeaderRoutes.includes(pathname) || pathname.startsWith('/catalogo/'));
  const headerTextClass = isDarkHeader ? 'text-white' : 'text-brand-charcoal';
  const inactiveLinkClass = isDarkHeader
    ? 'text-white/85 hover:text-white'
    : 'text-brand-charcoal/80 hover:text-brand-blue';

  return (
    <motion.header
      style={{ y: navY }}
      className={`fixed inset-x-0 top-0 z-50 transition-all duration-500 ${scrolled ? 'bg-white/90 shadow-soft backdrop-blur-xl' : 'bg-transparent'}`}
    >
      <div className="mx-auto flex h-20 max-w-page items-center justify-between px-5 sm:px-8 lg:px-12">
        <Link to="/" className="group inline-flex items-center gap-2.5" aria-label="ENERMOVE inicio">
          <span className="grid h-10 w-10 place-items-center rounded-xl bg-gradient-to-br from-brand-blue to-brand-green font-display text-sm font-bold tracking-tight text-white shadow-lift transition-transform group-hover:scale-105">EM</span>
          <span className={`font-display text-lg font-bold tracking-wide sm:text-xl ${scrolled || open ? 'text-brand-ink' : headerTextClass}`}>ENERMOVE</span>
        </Link>

        <nav className="hidden items-center gap-7 lg:flex" aria-label="Navegación principal">
          {links.map((link) => (
            <NavLink
              key={link.to}
              className={({ isActive }) => `relative text-sm font-medium transition-colors ${isActive ? 'text-brand-blue' : inactiveLinkClass}`}
              to={link.to}
            >
              {({ isActive }) => (
                <>
                  <span>{link.label}</span>
                  <span className={`absolute -bottom-2 left-0 h-0.5 rounded-full bg-brand-green transition-all duration-300 ${isActive ? 'w-full' : 'w-0 group-hover:w-full'}`} />
                </>
              )}
            </NavLink>
          ))}
          <Link to="/contacto" className="ml-2 inline-flex items-center gap-2 rounded-full bg-brand-blue px-5 py-2.5 text-sm font-semibold text-white shadow-lift transition-all hover:-translate-y-0.5 hover:bg-brand-blueDark">
            Solicitar cotización
            <ArrowRight className="h-4 w-4" />
          </Link>
        </nav>

        <button
          type="button"
          className={`grid h-11 w-11 place-items-center rounded-full border transition-colors lg:hidden ${isDarkHeader ? 'border-white/25 text-white hover:bg-white/10' : 'border-brand-line text-brand-ink hover:bg-brand-sand'}`}
          onClick={() => setOpen((current) => !current)}
          aria-label={open ? 'Cerrar menú' : 'Abrir menú'}
          aria-expanded={open}
        >
          {open ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
        </button>
      </div>

      <motion.div
        initial={false}
        animate={{ height: open ? 'auto' : 0, opacity: open ? 1 : 0 }}
        transition={{ duration: 0.35, ease: 'easeInOut' }}
        className="overflow-hidden bg-white/95 backdrop-blur-xl lg:hidden"
      >
        <nav className="mx-auto max-w-page px-5 pb-7 pt-2 sm:px-8" aria-label="Navegación móvil">
          <div className="flex flex-col divide-y divide-brand-line">
            {links.map((link, index) => (
              <NavLink
                key={link.to}
                className={({ isActive }) => `flex items-center justify-between py-4 text-base font-medium ${isActive ? 'text-brand-blue' : 'text-brand-charcoal/80'}`}
                to={link.to}
              >
                <span>{link.label}</span>
                <span className="font-display text-xs text-brand-green/70">0{index + 1}</span>
              </NavLink>
            ))}
          </div>
          <Link to="/contacto" className="mt-6 flex items-center justify-center gap-2 rounded-full bg-brand-blue px-5 py-3.5 text-sm font-semibold text-white shadow-lift" >
            Solicitar cotización
            <ArrowRight className="h-4 w-4" />
          </Link>
        </nav>
      </motion.div>
    </motion.header>
  );
}
