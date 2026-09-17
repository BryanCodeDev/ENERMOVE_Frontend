import { ChevronRight, Home } from 'lucide-react';
import { Link } from 'react-router-dom';

export default function Breadcrumbs({ items = [] }) {
  return (
    <nav className="flex flex-wrap items-center gap-2 text-xs font-medium text-brand-charcoal/55" aria-label="Migas de pan">
      <Link className="inline-flex items-center gap-2 hover:text-brand-blue" to="/">
        <Home className="h-3.5 w-3.5" />
        Inicio
      </Link>
      {items.map((item, index) => (
        <span className="inline-flex items-center gap-2" key={`${item.label}-${index}`}>
          <ChevronRight className="h-3.5 w-3.5 text-brand-line" />
          {item.to ? <Link className="hover:text-brand-blue" to={item.to}>{item.label}</Link> : <span className="text-brand-blue">{item.label}</span>}
        </span>
      ))}
    </nav>
  );
}
