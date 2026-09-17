import { ArrowRight, Calendar, Clock3 } from 'lucide-react';
import { Link } from 'react-router-dom';
import Reveal from '../ui/Reveal';

export default function BlogCard({ post, index = 0 }) {
  const date = new Intl.DateTimeFormat('es-CO', { month: 'long', day: 'numeric', year: 'numeric' }).format(new Date(post.date));

  return (
    <Reveal delay={(index % 3) * 0.08} className="group">
      <article className="flex h-full flex-col overflow-hidden rounded-2xl border border-brand-line bg-white transition-all duration-500 hover:-translate-y-1.5 hover:border-brand-blue/30 hover:shadow-soft">
        <div className="relative aspect-[16/10] overflow-hidden bg-brand-line">
          <img src={post.image} alt={post.alt} loading="lazy" className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-105" />
          <span className="absolute left-4 top-4 rounded-full bg-brand-green px-3 py-1.5 text-[10px] font-bold uppercase tracking-[0.16em] text-white">{post.category}</span>
        </div>
        <div className="flex flex-1 flex-col p-6">
          <div className="flex flex-wrap items-center gap-x-4 gap-y-2 text-[11px] text-brand-charcoal/55">
            <span className="inline-flex items-center gap-1.5"><Calendar className="h-3.5 w-3.5" />{date}</span>
            <span className="inline-flex items-center gap-1.5"><Clock3 className="h-3.5 w-3.5" />{post.readTime}</span>
          </div>
          <h3 className="mt-4 font-display text-2xl font-semibold leading-tight">{post.title}</h3>
          <p className="mt-4 text-sm leading-6 text-brand-charcoal/65">{post.excerpt}</p>
          <Link to={`/blog/${post.slug}`} className="mt-auto inline-flex items-center gap-2 pt-6 text-sm font-semibold text-brand-blue transition-colors hover:text-brand-green">
            Leer artículo
            <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
          </Link>
        </div>
      </article>
    </Reveal>
  );
}
