import { ArrowRight, BatteryCharging, Check, MapPin, ShieldCheck, Zap } from 'lucide-react';
import { Link, useParams } from 'react-router-dom';
import { getProduct } from '../data/products';
import Breadcrumbs from '../components/ui/Breadcrumbs';
import Reveal from '../components/ui/Reveal';
import ProductGallery from '../components/products/ProductGallery';
import QuoteForm from '../components/forms/QuoteForm';
import JsonLd from '../components/ui/JsonLd';
import NotFoundContent from '../components/sections/NotFoundContent';
import { productSchema, useSeo } from '../utils/seo';

export default function ProductDetail() {
  const { slug } = useParams();
  const product = getProduct(slug);

  if (!product) {
    return <NotFoundContent />;
  }

  useSeo({
    title: `${product.name} | ENERMOVE`,
    description: product.description,
    canonical: `https://enermove.example/producto/${product.slug}`,
    type: 'product',
  });

  return (
    <>
      <JsonLd data={productSchema(product)} />
      <section className="bg-brand-sand px-5 pt-32 pb-20 sm:px-8 lg:px-12 lg:pb-28 lg:pt-40">
        <div className="mx-auto max-w-page">
          <Breadcrumbs items={[{ label: 'Catálogo', to: '/catalogo' }, { label: product.categoryName, to: `/catalogo/${product.category}` }, { label: product.name }]} />
          <div className="mt-12 grid items-start gap-14 lg:grid-cols-[1.1fr_0.9fr] lg:gap-16">
            <ProductGallery images={product.gallery} alt={product.alt} />
            <Reveal delay={0.1}>
              <p className="font-display text-xs font-semibold uppercase tracking-[0.2em] text-brand-green">{product.categoryName}</p>
              <h1 className="mt-4 font-display text-4xl font-bold leading-[1.05] tracking-tight text-brand-ink sm:text-5xl">{product.name}</h1>
              <p className="mt-5 text-sm leading-7 text-brand-charcoal/65">{product.description}</p>
              <div className="mt-8 grid grid-cols-2 gap-3">
                {[
                  ['Marca', product.brand],
                  ['Modelo', product.model],
                  ['Potencia', product.power],
                  ['Conector', product.connector],
                ].map(([label, value]) => (
                  <div key={label} className="rounded-xl border border-brand-line bg-white p-4">
                    <p className="text-[10px] font-semibold uppercase tracking-[0.16em] text-brand-charcoal/45">{label}</p>
                    <p className="mt-2 text-sm font-semibold text-brand-ink">{value}</p>
                  </div>
                ))}
              </div>
              <div className="mt-9 flex flex-col gap-3 sm:flex-row">
                <a href="#cotizar" className="inline-flex items-center justify-center gap-2 rounded-full bg-brand-blue px-6 py-3.5 text-sm font-semibold text-white shadow-lift transition-all hover:-translate-y-0.5 hover:bg-brand-blueDark">Consultar <ArrowRight className="h-4 w-4" /></a>
                <Link to="/catalogo" className="inline-flex items-center justify-center rounded-full border border-brand-line px-6 py-3.5 text-sm font-semibold text-brand-ink transition-all hover:border-brand-blue hover:bg-brand-blue hover:text-white">Volver al catálogo</Link>
              </div>
              <div className="mt-8 flex flex-wrap gap-2">
                {['Sin precio publicado', 'Disponibilidad por confirmar', 'Datos técnicos pendientes'].map((item) => <span key={item} className="rounded-full bg-brand-green/10 px-3 py-1.5 text-[11px] font-medium text-brand-greenDark">{item}</span>)}
              </div>
            </Reveal>
          </div>
        </div>
      </section>
      <section className="bg-white px-5 py-20 sm:px-8 lg:px-12 lg:py-28">
        <div className="mx-auto max-w-page grid gap-14 lg:grid-cols-2 lg:gap-20">
          <Reveal>
            <p className="font-display text-sm font-semibold uppercase tracking-[0.22em] text-brand-blue">Especificaciones</p>
            <h2 className="mt-5 font-display text-4xl font-bold leading-[1.05] tracking-tight text-brand-ink sm:text-5xl">Detalles de la referencia.</h2>
            <ul className="mt-8 space-y-4">
              {product.features.map((feature) => <li key={feature} className="flex items-start gap-3 text-sm leading-6 text-brand-charcoal/75"><Check className="mt-0.5 h-4 w-4 shrink-0 text-brand-green" />{feature}</li>)}
            </ul>
            <div className="mt-10 grid gap-4 sm:grid-cols-2">
              <div className="rounded-2xl border border-brand-line bg-brand-sand p-6">
                <BatteryCharging className="h-6 w-6 text-brand-blue" />
                <h3 className="mt-5 font-display text-lg font-semibold">Aplicaciones</h3>
                <ul className="mt-4 space-y-2 text-sm text-brand-charcoal/65">{product.applications.map((item) => <li key={item} className="flex gap-2"><span className="h-1.5 w-1.5 mt-2 rounded-full bg-brand-green" />{item}</li>)}</ul>
              </div>
              <div className="rounded-2xl border border-brand-line bg-brand-sand p-6">
                <ShieldCheck className="h-6 w-6 text-brand-green" />
                <h3 className="mt-5 font-display text-lg font-semibold">Beneficios</h3>
                <ul className="mt-4 space-y-2 text-sm text-brand-charcoal/65">{product.benefits.map((item) => <li key={item} className="flex gap-2"><span className="h-1.5 w-1.5 mt-2 rounded-full bg-brand-green" />{item}</li>)}</ul>
              </div>
            </div>
          </Reveal>
          <Reveal delay={0.12} id="cotizar" className="scroll-mt-28 rounded-2xl border border-brand-line bg-brand-sand p-6 shadow-soft sm:p-8 lg:p-10">
            <p className="font-display text-sm font-semibold uppercase tracking-[0.22em] text-brand-green">Solicitud</p>
            <h3 className="mt-3 font-display text-3xl font-semibold leading-tight">Consulta esta referencia.</h3>
            <p className="mt-4 text-sm leading-6 text-brand-charcoal/65">Déjanos los datos de tu proyecto y te ayudaremos a identificar una alternativa coherente.</p>
            <div className="mt-8">
              <QuoteForm compact />
            </div>
          </Reveal>
        </div>
      </section>
    </>
  );
}
