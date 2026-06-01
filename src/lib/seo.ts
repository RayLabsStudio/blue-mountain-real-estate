import { SITE } from './site';

export interface SeoMeta {
  title: string;
  description: string;
  canonical?: string;
  ogImage?: string;
  ogType?: 'website' | 'article' | 'profile';
  noIndex?: boolean;
}

export function buildTitle(pageTitle: string | undefined): string {
  if (!pageTitle) return `${SITE.name} — ${SITE.tagline}`;
  return `${pageTitle} · ${SITE.name}`;
}

export function organizationLd() {
  return {
    '@context': 'https://schema.org',
    '@type': 'RealEstateAgent',
    name: SITE.name,
    url: SITE.url,
    logo: `${SITE.url}/logo.png`,
    email: SITE.email,
    areaServed: { '@type': 'State', name: 'Florida' },
    description: SITE.strapline,
    sameAs: [SITE.social.linkedin],
    memberOf: [
      { '@type': 'Organization', name: 'Florida Realtors' },
      { '@type': 'Organization', name: 'National Association of Realtors' },
    ],
  };
}

export function localBusinessLd() {
  return {
    '@context': 'https://schema.org',
    '@type': 'LocalBusiness',
    name: SITE.name,
    url: SITE.url,
    email: SITE.email,
    address: {
      '@type': 'PostalAddress',
      addressRegion: 'FL',
      addressCountry: 'US',
    },
    areaServed: { '@type': 'State', name: 'Florida' },
    priceRange: 'Contact for pricing',
  };
}

export function serviceLd(opts: {
  name: string;
  description: string;
  serviceType: string;
}) {
  return {
    '@context': 'https://schema.org',
    '@type': 'Service',
    name: opts.name,
    description: opts.description,
    serviceType: opts.serviceType,
    provider: {
      '@type': 'RealEstateAgent',
      name: SITE.name,
      url: SITE.url,
    },
    areaServed: { '@type': 'State', name: 'Florida' },
  };
}
