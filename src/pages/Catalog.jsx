import { ArrowRight, SlidersHorizontal } from 'lucide-react';
import { Link, useParams } from 'react-router-dom';
import { productCategories, getProductsByCategory, products } from '../data/products';
import Breadcrumbs from '../components/ui/Breadcrumbs';
import Reveal from '../components/ui/Reveal';
import SectionHeading from '../components/ui/SectionHeading';
import ProductCard from '../components/cards/ProductCard';
import CatalogIntro from '../components/sections/CatalogIntro';
import CTASection from '../components/sections/CTASection';
import { useSeo } from '../utils/seo';

export default function Catalog() {
  const { category } = useParams();
  const activeCategory = productCategories.find((item) => item.slug === category);
  const visibleProducts = activeCategory ? getProductsByCategory(activeCategory.slug) : products;
  const title = activeCategory ? activeCategory.label : 'Catálogo informativo';
  const description = activeCategory ? activeCategory.description : 'Explora referencias informativas de carga rápida DC, carga normal AC y cargadores portátiles.';

  useSeo({
    title: `${title} | ENERMOVE`,
    description,
    canonical: `https://enermove.example/catalogo${category ? `/${category}` : ''}`,
  });

  return (
    <>
      <section className="bg-brand-ink px-5 pt-32 pb-20 text-white sm:px-8 lg:px-12 lg:pb-28 lg:pt-40">
        <div className="mx-auto max-w-page">
          <Breadcrumbs items={[{ label: 'Catálogo' }, ...(activeCategory ? [{ label: activeCategory.label }] : [])]} />
          <div className="mt-12 max-w-4xl">
            <Reveal>
              <p className="font-display text-sm font-semibold uppercase tracking-[0.22em] text-brand-green">Catálogo</p>
              <h1 className="mt-5 font-display text-5xl font-bold leading-[1.02] tracking-tight sm:text-6xl lg:text-7xl">{title}</h1>
              <p className="mt-7 max-w-2xl text-base leading-8 text-white/65">{description}</p>
            </Reveal>
          </div>
        </div>
      </section>
      <CatalogIntro />
      <section className="bg-white px-5 py-20 sm:px-8 lg:px-12 lg:py-28">
        <div className="mx-auto max-w-page">
          <div className="flex flex-col justify-between gap-6 md:flex-row md:items-end">
            <SectionHeading eyebrow="Referencias" title="Explora por categoría." description="Información de demostración para futura conexión con un catálogo administrable." />
            <div className="flex flex-wrap gap-2">
              {productCategories.map((item) => (
                <Link key={item.slug} to={`/catalogo/${item.slug}`} className={`rounded-full px-4 py-2.5 text-xs font-semibold transition-colors ${activeCategory?.slug === item.slug ? 'bg-brand-blue text-white' : 'bg-brand-sand text-brand-charcoal/70 hover:bg-brand-blue/10 hover:text-brand-blue'}`}>{item.label}</Link>
              ))}
              {!activeCategory && <Link to="/catalogo" className="rounded-full bg-brand-ink px-4 py-2.5 text-xs font-semibold text-white">Todas</Link>}
            </div>
          </div>
          {visibleProducts.length ? (
            <div className="mt-14 grid gap-5 md:grid-cols-2 lg:grid-cols-3">
              {visibleProducts.map((product, index) => <ProductCard key={product.slug} product={product} index={index} />)}
            </div>
          ) : (
            <Reveal className="rounded-2xl border border-dashed border-brand-line bg-brand-sand p-12 text-center">
              <SlidersHorizontal className="mx-auto h-8 w-8 text-brand-blue" />
              <h3 className="mt-5 font-display text-2xl font-semibold">Próximamente</h3>
              <p className="mx-auto mt-3 max-w-md text-sm leading-6 text-brand-charcoal/65">Estamos preparando más referencias para esta categoría.</p>
            </Reveal>
          )}
        </div>
      </section>
      <CTASection />
    </>
  );
}
