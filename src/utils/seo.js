import { useEffect } from 'react';
import { contactConfig } from '../config/contact';

const siteUrl = 'https://enermove.example';

const phoneSchema = contactConfig.phoneLink;

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

export function useSeo({ title, description, canonical, image, type = 'website', noIndex = false, noFollow = false }) {
  useEffect(() => {
    const pageCanonical = canonical || siteUrl;
    document.title = title || seoDefaults.title;
    setMeta('description', description || seoDefaults.description);
    setMeta('og:title', title || seoDefaults.title, 'property');
    setMeta('og:description', description || seoDefaults.description, 'property');
    setMeta('og:type', type, 'property');
    setMeta('og:url', pageCanonical, 'property');
    setMeta('og:image', image || seoDefaults.image, 'property');
    setMeta('og:site_name', 'ENERMOVE', 'property');
    setMeta('og:locale', 'es_CO', 'property');
    setMeta('twitter:card', 'summary_large_image');
    setMeta('twitter:title', title || seoDefaults.title);
    setMeta('twitter:description', description || seoDefaults.description);
    setMeta('twitter:image', image || seoDefaults.image);
    setMeta('robots', `${noIndex ? 'noindex' : 'index'}, ${noFollow ? 'nofollow' : 'follow'}`);

    let canonicalLink = document.querySelector('link[rel="canonical"]');
    if (!canonicalLink) {
      canonicalLink = document.createElement('link');
      canonicalLink.rel = 'canonical';
      document.head.appendChild(canonicalLink);
    }
    canonicalLink.href = pageCanonical;
  }, [title, description, canonical, image, type, noIndex, noFollow]);
}

export const getCanonicalUrl = (path = '') => `${siteUrl}${path.startsWith('/') ? path : `/${path}`}`;

export const organizationSchema = {
  '@context': 'https://schema.org',
  '@type': 'Organization',
  name: 'ENERMOVE',
  url: siteUrl,
  logo: `${siteUrl}/logo.svg`,
  description: seoDefaults.description,
  areaServed: { '@type': 'Country', name: 'Colombia' },
  sameAs: [
    `https://wa.me/${contactConfig.whatsappNumber}`,
  ],
  contactPoint: {
    '@type': 'ContactPoint',
    telephone: phoneSchema,
    contactType: 'customer service',
    availableLanguage: ['Spanish'],
    areaServed: 'CO',
  },
};

export const webSiteSchema = {
  '@context': 'https://schema.org',
  '@type': 'WebSite',
  name: 'ENERMOVE',
  url: siteUrl,
  inLanguage: 'es-CO',
  potentialAction: {
    '@type': 'SearchAction',
    target: {
      '@type': 'EntryPoint',
      urlTemplate: `${siteUrl}/buscar?q={search_term_string}`,
    },
    'query-input': 'required name=search_term_string',
  },
};

export const localBusinessSchema = {
  '@context': 'https://schema.org',
  '@type': 'LocalBusiness',
  name: 'ENERMOVE',
  url: siteUrl,
  logo: `${siteUrl}/logo.svg`,
  description: seoDefaults.description,
  areaServed: { '@type': 'Country', name: 'Colombia' },
  address: {
    '@type': 'PostalAddress',
    addressCountry: 'CO',
    addressLocality: 'Bogotá',
    addressRegion: 'Bogotá D.C.',
  },
  telephone: phoneSchema,
  priceRange: '$$',
  currenciesAccepted: 'COP',
  paymentAccepted: 'Cash, Credit Card, Transfer',
  openingHoursSpecification: [
    { '@type': 'OpeningHoursSpecification', dayOfWeek: ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday'], opens: '08:00', closes: '18:00' },
    { '@type': 'OpeningHoursSpecification', dayOfWeek: 'Saturday', opens: '09:00', closes: '13:00' },
  ],
};

export const productSchema = (product) => ({
  '@context': 'https://schema.org',
  '@type': 'Product',
  name: product.name,
  description: product.description,
  brand: { '@type': 'Brand', name: product.brand },
  sku: product.slug,
  mpn: product.model,
  additionalProperty: [
    { '@type': 'PropertyValue', name: 'Modelo', value: product.model },
    { '@type': 'PropertyValue', name: 'Potencia', value: product.power },
    { '@type': 'PropertyValue', name: 'Conector', value: product.connector },
  ],
  category: product.categoryName,
  image: product.gallery?.[0] || `${siteUrl}${product.image}`,
  offers: {
    '@type': 'Offer',
    name: product.name,
    description: product.description,
    priceCurrency: 'COP',
    availability: 'https://schema.org/PreOrder',
    seller: { '@type': 'Organization', name: 'ENERMOVE' },
  },
});

export const serviceSchema = (service) => ({
  '@context': 'https://schema.org',
  '@type': 'Service',
  name: service.title,
  description: service.description,
  provider: { '@type': 'Organization', name: 'ENERMOVE', url: siteUrl },
  areaServed: { '@type': 'Country', name: 'Colombia' },
  serviceType: service.category,
  hasOfferCatalog: {
    '@type': 'OfferCatalog',
    name: service.title,
    itemListElement: service.features?.map((feature, index) => ({
      '@type': 'Offer',
      position: index + 1,
      itemOffered: {
        '@type': 'Service',
        name: feature,
      },
    })) || [],
  },
});

export const faqSchema = (faqs) => ({
  '@context': 'https://schema.org',
  '@type': 'FAQPage',
  mainEntity: faqs.map((faq) => ({
    '@type': 'Question',
    name: faq.question,
    acceptedAnswer: {
      '@type': 'Answer',
      text: faq.answer,
    },
  })),
});

export const articleSchema = (post) => ({
  '@context': 'https://schema.org',
  '@type': 'Article',
  headline: post.title,
  description: post.excerpt,
  image: post.image,
  datePublished: post.date,
  dateModified: post.date,
  author: { '@type': 'Organization', name: 'ENERMOVE' },
  publisher: { '@type': 'Organization', name: 'ENERMOVE', logo: { '@type': 'ImageObject', url: `${siteUrl}/logo.svg` } },
  mainEntityOfPage: { '@type': 'WebPage', '@id': post.url },
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

export const solutionSchema = (solution) => ({
  '@context': 'https://schema.org',
  '@type': 'Service',
  name: solution.title,
  description: solution.description,
  provider: { '@type': 'Organization', name: 'ENERMOVE', url: siteUrl },
  areaServed: { '@type': 'Country', name: 'Colombia' },
  serviceType: 'Solución de movilidad eléctrica',
  hasOfferCatalog: {
    '@type': 'OfferCatalog',
    name: solution.title,
    itemListElement: solution.features?.map((feature, index) => ({
      '@type': 'Offer',
      position: index + 1,
      itemOffered: {
        '@type': 'Service',
        name: feature,
      },
    })) || [],
  },
});