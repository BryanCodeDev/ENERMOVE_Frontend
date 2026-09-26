import { ArrowRight } from 'lucide-react';
import { Link } from 'react-router-dom';
import Reveal from '../ui/Reveal';

export default function SolutionCard({ solution, index = 0 }) {
  const Icon = solution.icon;

  return (
    <Reveal delay={(index % 3) * 0.08} className="group">
      <article className="flex h-full flex-col overflow-hidden rounded-2xl border border-brand-line bg-white transition-all duration-500 hover:-translate-y-1.5 hover:border-brand-blue/30 hover:shadow-soft">
        <div className="relative aspect-[16/10] overflow-hidden bg-brand-line">
          <img src={solution.image} alt={solution.alt} loading="lazy" className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-105" />
          <div className="absolute inset-0 bg-gradient-to-t from-brand-ink/45 via-transparent to-transparent" />
          <span className="absolute left-4 top-4 rounded-full bg-white/90 px-3 py-1.5 text-[10px] font-bold uppercase tracking-[0.16em] text-brand-blue">{solution.eyebrow}</span>
          <span className="absolute bottom-4 right-4 grid h-10 w-10 place-items-center rounded-full bg-brand-green text-white shadow-lift transition-transform group-hover:rotate-6">
            <Icon className="h-5 w-5" />
          </span>
        </div>
        <div className="flex flex-1 flex-col p-6">
          <h3 className="font-display text-2xl font-semibold leading-tight">{solution.title}</h3>
          <span className="mt-5 block h-1 w-10 rounded-full bg-brand-green/70" />
          <Link to={solution.href} className="mt-auto inline-flex items-center gap-2 pt-7 text-sm font-semibold text-brand-blue transition-colors hover:text-brand-green">
            {solution.cta}
            <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
          </Link>
        </div>
      </article>
    </Reveal>
  );
}
