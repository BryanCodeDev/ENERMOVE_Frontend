import { useEffect } from 'react';

const siteUrl = 'https://enermove.example';

const setMeta = (name, content, property = 'name') => {
  if (!content) return;
  let element = document.querySelector(`meta[${property}="${name}"]`);
  if (!element) {
    element = document.createElement('meta');
    element.setAttribute(property, name);
    document.head.appendChild(element);
  }
  element.setAttribute('content', content);
};

export const seoDefaults = {
  title: 'ENERMOVE | Energía que conecta tu hogar',
  description: 'ENERMOVE integra soluciones de movilidad eléctrica y energía limpia para hogares y empresas en Colombia.',
  canonical: siteUrl,
  image: '/enermove-og.jpg',
};

export function useSeo({ title, description, canonical, image, type = 'website' }) {
  useEffect(() => {
    const pageCanonical = canonical || siteUrl;
    document.title = title || seoDefaults.title;
    setMeta('description', description || seoDefaults.description);
    setMeta('og:title', title || seoDefaults.title, 'property');
    setMeta('og:description', description || seoDefaults.description, 'property');
    setMeta('og:type', type, 'property');
    setMeta('og:url', pageCanonical, 'property');
    setMeta('og:image', image || seoDefaults.image, 'property');
    setMeta('twitter:card', 'summary_large_image');
    setMeta('twitter:title', title || seoDefaults.title);
    setMeta('twitter:description', description || seoDefaults.description);
    setMeta('twitter:image', image || seoDefaults.image);

    let canonicalLink = document.querySelector('link[rel="canonical"]');
    if (!canonicalLink) {
      canonicalLink = document.createElement('link');
      canonicalLink.rel = 'canonical';
      document.head.appendChild(canonicalLink);
    }
    canonicalLink.href = pageCanonical;
  }, [title, description, canonical, image, type]);
}

export const getCanonicalUrl = (path = '') => `${siteUrl}${path.startsWith('/') ? path : `/${path}`}`;

export const organizationSchema = {
  '@context': 'https://schema.org',
  '@type': 'Organization',
  name: 'ENERMOVE',
  url: siteUrl,
  description: seoDefaults.description,
  areaServed: 'Colombia',
};

export const webSiteSchema = {
  '@context': 'https://schema.org',
  '@type': 'WebSite',
  name: 'ENERMOVE',
  url: siteUrl,
  inLanguage: 'es-CO',
};

export const productSchema = (product) => ({
  '@context': 'https://schema.org',
  '@type': 'Product',
  name: product.name,
  description: product.description,
  brand: { '@type': 'Brand', name: product.brand },
  additionalProperty: [
    { '@type': 'PropertyValue', name: 'Modelo', value: product.model },
    { '@type': 'PropertyValue', name: 'Potencia', value: product.power },
    { '@type': 'PropertyValue', name: 'Conector', value: product.connector },
  ],
});

export const articleSchema = (post) => ({
  '@context': 'https://schema.org',
  '@type': 'Article',
  headline: post.title,
  description: post.excerpt,
  image: post.image,
  datePublished: post.date,
  author: { '@type': 'Organization', name: 'ENERMOVE' },
  publisher: { '@type': 'Organization', name: 'ENERMOVE' },
});

export const breadcrumbSchema = (items) => ({
  '@context': 'https://schema.org',
  '@type': 'BreadcrumbList',
  itemListElement: items.map((item, index) => ({
    '@type': 'ListItem',
    position: index + 1,
    name: item.name,
    item: item.url,
  })),
});
