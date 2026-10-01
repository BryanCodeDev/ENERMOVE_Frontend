import { ChevronRight, Home } from 'lucide-react';
import { Link, useLocation } from 'react-router-dom';

export default function Breadcrumbs({ items = [], whiteItems = ['Inicio', 'Contacto'] }) {
  const { pathname } = useLocation();
  const isDarkRoute = ['/soluciones', '/catalogo', '/contacto'].some(r => pathname.startsWith(r));
  const homeClass = isDarkRoute && whiteItems.includes('Inicio') ? 'text-white hover:text-white/80' : 'text-brand-charcoal/55 hover:text-brand-blue';
  const itemClass = (label) => isDarkRoute && whiteItems.includes(label) ? 'text-white' : 'text-brand-blue';

  return (
    <nav className="flex flex-wrap items-center gap-2 text-xs font-medium" aria-label="Migas de pan">
      <Link className={`inline-flex items-center gap-2 ${homeClass}`} to="/">
        <Home className="h-3.5 w-3.5" />
        Inicio
      </Link>
      {items.map((item, index) => (
        <span className="inline-flex items-center gap-2" key={`${item.label}-${index}`}>
          <ChevronRight className="h-3.5 w-3.5 text-brand-line" />
          {item.to ? <Link className={itemClass(item.label)} to={item.to}>{item.label}</Link> : <span className={itemClass(item.label)}>{item.label}</span>}
        </span>
      ))}
    </nav>
  );
}
