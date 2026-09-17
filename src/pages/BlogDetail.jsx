import { ArrowLeft, ArrowRight, Calendar, Clock3 } from 'lucide-react';
import { Link, useParams } from 'react-router-dom';
import { getBlogPost } from '../data/blog';
import Breadcrumbs from '../components/ui/Breadcrumbs';
import Reveal from '../components/ui/Reveal';
import JsonLd from '../components/ui/JsonLd';
import NotFoundContent from '../components/sections/NotFoundContent';
import { articleSchema, useSeo } from '../utils/seo';

export default function BlogDetail() {
  const { slug } = useParams();
  const post = getBlogPost(slug);

  if (!post) {
    return <NotFoundContent />;
  }

  useSeo({
    title: `${post.title} | ENERMOVE`,
    description: post.excerpt,
    canonical: `https://enermove.example/blog/${post.slug}`,
    image: post.image,
    type: 'article',
  });

  const date = new Intl.DateTimeFormat('es-CO', { month: 'long', day: 'numeric', year: 'numeric' }).format(new Date(post.date));

  return (
    <>
      <JsonLd data={articleSchema(post)} />
      <section className="bg-brand-sand px-5 pt-32 pb-20 sm:px-8 lg:px-12 lg:pb-28 lg:pt-40">
        <div className="mx-auto max-w-page">
          <Breadcrumbs items={[{ label: 'Blog', to: '/blog' }, { label: post.category, to: '/blog' }, { label: post.title }]} />
          <Reveal className="mx-auto mt-12 max-w-4xl text-center">
            <span className="rounded-full bg-brand-green/10 px-4 py-2 text-[11px] font-bold uppercase tracking-[0.18em] text-brand-greenDark">{post.category}</span>
            <h1 className="mt-7 font-display text-4xl font-bold leading-[1.05] tracking-tight text-brand-ink sm:text-5xl lg:text-6xl">{post.title}</h1>
            <p className="mx-auto mt-7 max-w-2xl text-base leading-8 text-brand-charcoal/65">{post.excerpt}</p>
            <div className="mt-8 flex flex-wrap items-center justify-center gap-x-5 gap-y-3 text-xs text-brand-charcoal/55">
              <span className="inline-flex items-center gap-2"><Calendar className="h-4 w-4" />{date}</span>
              <span className="inline-flex items-center gap-2"><Clock3 className="h-4 w-4" />{post.readTime} de lectura</span>
              <span className="inline-flex items-center gap-2"><span className="h-1.5 w-1.5 rounded-full bg-brand-green" />Contenido de demostración</span>
            </div>
          </Reveal>
          <Reveal delay={0.12} className="mt-12 overflow-hidden rounded-[2rem] bg-brand-line">
            <img src={post.image} alt={post.alt} className="aspect-[21/9] w-full object-cover" loading="lazy" />
          </Reveal>
        </div>
      </section>
      <article className="bg-white px-5 py-20 sm:px-8 lg:px-12 lg:py-28">
        <div className="mx-auto max-w-3xl">
          <Reveal className="prose prose-brand max-w-none">
            {post.content.map((paragraph, index) => (
              <p key={paragraph} className={`text-base leading-8 text-brand-charcoal/75 ${index === 0 ? 'font-display text-2xl font-semibold leading-snug text-brand-ink' : ''}`}>{paragraph}</p>
            ))}
          </Reveal>
          <div className="mt-14 rounded-2xl border border-brand-line bg-brand-sand p-8">
            <p className="font-display text-sm font-semibold uppercase tracking-[0.22em] text-brand-blue">Siguiente paso</p>
            <h2 className="mt-4 font-display text-3xl font-semibold leading-tight">¿Quieres llevar esta idea a tu proyecto?</h2>
            <p className="mt-4 text-sm leading-7 text-brand-charcoal/65">Cuéntanos tu contexto y construyamos una ruta clara para incorporar movilidad eléctrica y energía limpia.</p>
            <Link to="/contacto" className="mt-7 inline-flex items-center gap-2 rounded-full bg-brand-blue px-6 py-3.5 text-sm font-semibold text-white shadow-lift transition-all hover:-translate-y-0.5 hover:bg-brand-blueDark">
              Solicitar cotización
              <ArrowRight className="h-4 w-4" />
            </Link>
          </div>
        </div>
      </article>
    </>
  );
}
