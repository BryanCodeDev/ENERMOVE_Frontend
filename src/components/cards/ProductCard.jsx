import { ArrowRight, Check, Zap } from 'lucide-react';
import { Link } from 'react-router-dom';
import Reveal from '../ui/Reveal';

export default function ProductCard({ product, index = 0 }) {
  return (
    <Reveal delay={(index % 3) * 0.08} className="group">
      <article className="flex h-full flex-col overflow-hidden rounded-2xl border border-brand-line bg-white transition-all duration-500 hover:-translate-y-1.5 hover:border-brand-blue/30 hover:shadow-soft">
        <div className="media-frame relative overflow-hidden bg-brand-line">
          <img src={product.image} alt={product.alt} loading="lazy" className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-105" />
          <span className="absolute left-3 top-3 rounded-full bg-white/90 px-2.5 py-1 text-[9px] font-bold uppercase tracking-[0.14em] text-brand-blue sm:left-4 sm:top-4 sm:px-3 sm:py-1.5 sm:text-[10px] sm:tracking-[0.16em]">{product.categoryName}</span>
          <span className="absolute right-3 top-3 grid h-8 w-8 place-items-center rounded-full bg-brand-ink/80 text-white backdrop-blur-md sm:right-4 sm:top-4 sm:h-9 sm:w-9"><Zap className="h-3.5 w-3.5 sm:h-4 sm:w-4" /></span>
        </div>
        <div className="flex flex-1 flex-col p-5 sm:p-6">
          <div className="flex items-start justify-between gap-3 sm:gap-4">
            <div className="min-w-0">
              <p className="text-[10px] font-semibold uppercase tracking-[0.16em] text-brand-blue sm:text-xs">{product.brand}</p>
              <h3 className="mt-2 font-display text-lg font-semibold leading-tight sm:text-2xl">{product.name}</h3>
            </div>
            <span className="shrink-0 rounded-lg bg-brand-sand px-2.5 py-1.5 font-display text-xs font-semibold text-brand-blue sm:px-3 sm:py-2 sm:text-sm">{product.power}</span>
          </div>
          <p className="mt-3 text-[13px] leading-6 text-brand-charcoal/65 sm:mt-4 sm:text-sm">{product.description}</p>
          <div className="mt-4 flex flex-wrap gap-2 sm:mt-5">
            {product.features.slice(0, 2).map((feature) => <span key={feature} className="rounded-full bg-brand-sand px-2.5 py-1 text-[10px] text-brand-charcoal/70 sm:px-3 sm:py-1.5 sm:text-[11px]">{feature}</span>)}
          </div>
          <Link to={`/producto/${product.slug}`} className="mt-auto inline-flex items-center gap-2 pt-5 text-sm font-semibold text-brand-blue transition-colors hover:text-brand-blue sm:pt-6">
            Consultar
            <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
          </Link>
        </div>
      </article>
    </Reveal>
  );
}
