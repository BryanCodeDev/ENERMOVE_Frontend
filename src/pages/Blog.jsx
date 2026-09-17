import { ArrowRight, Calendar, Clock3 } from 'lucide-react';
import { Link } from 'react-router-dom';
import { blogPosts } from '../data/blog';
import Breadcrumbs from '../components/ui/Breadcrumbs';
import Reveal from '../components/ui/Reveal';
import SectionHeading from '../components/ui/SectionHeading';
import BlogCard from '../components/cards/BlogCard';
import BlogIntro from '../components/sections/BlogIntro';
import CTASection from '../components/sections/CTASection';
import { useSeo } from '../utils/seo';

export default function Blog() {
  useSeo({
    title: 'Blog | ENERMOVE',
    description: 'Artículos de ENERMOVE sobre movilidad eléctrica, cargadores EV, energía solar y tecnología energética.',
    canonical: 'https://enermove.example/blog',
  });

  return (
    <>
      <section className="bg-brand-sand px-5 pt-32 pb-20 sm:px-8 lg:px-12 lg:pb-28 lg:pt-40">
        <div className="mx-auto max-w-page">
          <Breadcrumbs items={[{ label: 'Blog' }]} />
          <div className="mt-12 max-w-4xl">
            <Reveal>
              <p className="font-display text-sm font-semibold uppercase tracking-[0.22em] text-brand-blue">Blog</p>
              <h1 className="mt-5 font-display text-5xl font-bold leading-[1.02] tracking-tight text-brand-ink sm:text-6xl lg:text-7xl">Ideas para mover la energía hacia adelante.</h1>
              <p className="mt-7 max-w-2xl text-base leading-8 text-brand-charcoal/65">Contenido de demostración para inspirar decisiones informadas sobre movilidad eléctrica y energía limpia.</p>
            </Reveal>
          </div>
        </div>
      </section>
      <BlogIntro />
      <section className="bg-white px-5 py-20 sm:px-8 lg:px-12 lg:py-28">
        <div className="mx-auto max-w-page">
          <SectionHeading align="center" eyebrow="Artículos" title="Explora las últimas ideas." description="Contenido estático de demostración, preparado para migrar a un gestor de contenido en una etapa posterior." />
          <div className="mt-14 grid gap-5 md:grid-cols-2 lg:grid-cols-3">
            {blogPosts.map((post, index) => <BlogCard key={post.slug} post={post} index={index} />)}
          </div>
        </div>
      </section>
      <CTASection />
    </>
  );
}
