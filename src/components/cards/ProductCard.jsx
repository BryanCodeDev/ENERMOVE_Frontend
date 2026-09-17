import { ArrowRight, Check, Zap } from 'lucide-react';
import { Link } from 'react-router-dom';
import Reveal from '../ui/Reveal';

export default function ProductCard({ product, index = 0 }) {
  return (
    <Reveal delay={(index % 3) * 0.08} className="group">
      <article className="flex h-full flex-col overflow-hidden rounded-2xl border border-brand-line bg-white transition-all duration-500 hover:-translate-y-1.5 hover:border-brand-blue/30 hover:shadow-soft">
        <div className="relative aspect-[4/3] overflow-hidden bg-brand-line">
          <img src={product.image} alt={product.alt} loading="lazy" className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-105" />
          <span className="absolute left-4 top-4 rounded-full bg-white/90 px-3 py-1.5 text-[10px] font-bold uppercase tracking-[0.16em] text-brand-blue">{product.categoryName}</span>
          <span className="absolute right-4 top-4 grid h-9 w-9 place-items-center rounded-full bg-brand-ink/80 text-white backdrop-blur-md"><Zap className="h-4 w-4" /></span>
        </div>
        <div className="flex flex-1 flex-col p-6">
          <div className="flex items-start justify-between gap-4">
            <div>
              <p className="text-xs font-semibold uppercase tracking-[0.16em] text-brand-green">{product.brand}</p>
              <h3 className="mt-2 font-display text-2xl font-semibold leading-tight">{product.name}</h3>
            </div>
            <span className="shrink-0 rounded-lg bg-brand-sand px-3 py-2 font-display text-sm font-semibold text-brand-blue">{product.power}</span>
          </div>
          <p className="mt-4 text-sm leading-6 text-brand-charcoal/65">{product.description}</p>
          <div className="mt-5 flex flex-wrap gap-2">
            {product.features.slice(0, 2).map((feature) => <span key={feature} className="rounded-full bg-brand-sand px-3 py-1.5 text-[11px] text-brand-charcoal/70">{feature}</span>)}
          </div>
          <Link to={`/producto/${product.slug}`} className="mt-auto inline-flex items-center gap-2 pt-6 text-sm font-semibold text-brand-blue transition-colors hover:text-brand-green">
            Consultar
            <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
          </Link>
        </div>
      </article>
    </Reveal>
  );
}
