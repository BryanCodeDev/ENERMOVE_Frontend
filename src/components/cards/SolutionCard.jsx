import { ArrowRight } from 'lucide-react';
import { Link } from 'react-router-dom';
import Reveal from '../ui/Reveal';

export default function SolutionCard({ solution, index = 0 }) {
  const Icon = solution.icon;

  return (
    <Reveal delay={(index % 3) * 0.08} className="group">
      <article className="flex h-full flex-col overflow-hidden rounded-2xl border border-brand-line bg-white transition-all duration-500 hover:-translate-y-1.5 hover:border-brand-blue/30 hover:shadow-soft">
        <div className="media-frame media-frame--wide relative overflow-hidden bg-brand-line">
          <img src={solution.image} alt={solution.alt} loading="lazy" className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-105" />
          <div className="absolute inset-0 bg-gradient-to-t from-brand-ink/45 via-transparent to-transparent" />
          <span className="absolute left-3 top-3 rounded-full bg-white/90 px-2.5 py-1 text-[9px] font-bold uppercase tracking-[0.14em] text-brand-blue sm:left-4 sm:top-4 sm:px-3 sm:py-1.5 sm:text-[10px] sm:tracking-[0.16em]">{solution.eyebrow}</span>
          <span className="absolute bottom-3 right-3 grid h-9 w-9 place-items-center rounded-full bg-brand-blue text-white shadow-lift transition-transform group-hover:rotate-6 sm:bottom-4 sm:right-4 sm:h-10 sm:w-10">
            <Icon className="h-4 w-4 sm:h-5 sm:w-5" />
          </span>
        </div>
        <div className="flex flex-1 flex-col p-5 sm:p-6">
          <h3 className="font-display text-xl font-semibold leading-tight sm:text-2xl">{solution.title}</h3>
          <span className="mt-4 block h-1 w-10 rounded-full bg-brand-blue/70 sm:mt-5" />
          <Link to={solution.href} className="mt-auto inline-flex items-center gap-2 pt-5 text-sm font-semibold text-brand-blue transition-colors hover:text-brand-blue sm:pt-7">
            {solution.cta}
            <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
          </Link>
        </div>
      </article>
    </Reveal>
  );
}
