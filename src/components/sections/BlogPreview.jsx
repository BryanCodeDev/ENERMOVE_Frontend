import { ArrowRight } from 'lucide-react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { blogPosts } from '../../data/blog';
import BlogCard from '../cards/BlogCard';
import Reveal from '../ui/Reveal';
import SectionHeading from '../ui/SectionHeading';

export default function BlogPreview() {
  return (
    <section className="bg-white px-5 py-20 sm:px-8 lg:px-12 lg:py-28">
      <div className="mx-auto max-w-page">
        <div className="flex flex-col justify-between gap-8 md:flex-row md:items-end">
          <SectionHeading eyebrow="Blog" title="Ideas para mover la energía hacia adelante." description="Contenido de demostración para inspirar decisiones informadas sobre movilidad eléctrica y energía limpia." />
          <Link to="/blog" className="inline-flex w-fit items-center gap-2 text-sm font-semibold text-brand-blue transition-colors hover:text-brand-green">
            Ver todos los artículos
            <ArrowRight className="h-4 w-4 transition-transform hover:translate-x-1" />
          </Link>
        </div>
        <div className="mt-14 grid gap-5 md:grid-cols-2 lg:grid-cols-3">
          {blogPosts.map((post, index) => <BlogCard key={post.slug} post={post} index={index} />)}
        </div>
      </div>
    </section>
  );
}
