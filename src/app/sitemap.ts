import { MetadataRoute } from 'next';
import { SERVICES, PRODUCTS, CASE_STUDIES, INSIGHTS } from '@/data/mockData';

export default function sitemap(): MetadataRoute.Sitemap {
  const baseUrl = 'https://innovtec.ai';

  const staticRoutes = [
    '',
    '/services',
    '/products',
    '/portfolio',
    '/insights',
    '/about',
    '/careers',
    '/contact',
    '/privacy-policy',
    '/compliance-policy',
    '/terms-and-conditions',
    '/gdpr-compliance',
  ].map((route) => ({
    url: `${baseUrl}${route}`,
    lastModified: new Date(),
    changeFrequency: 'weekly' as const,
    priority: route === '' ? 1.0 : 0.8,
  }));

  const serviceRoutes = SERVICES.map((s) => ({
    url: `${baseUrl}/services/${s.slug}`,
    lastModified: new Date(),
    changeFrequency: 'monthly' as const,
    priority: 0.7,
  }));

  const productRoutes = PRODUCTS.map((p) => ({
    url: `${baseUrl}/products/${p.slug}`,
    lastModified: new Date(),
    changeFrequency: 'monthly' as const,
    priority: 0.7,
  }));

  const portfolioRoutes = CASE_STUDIES.map((cs) => ({
    url: `${baseUrl}/portfolio/${cs.slug}`,
    lastModified: new Date(),
    changeFrequency: 'monthly' as const,
    priority: 0.7,
  }));

  const insightRoutes = INSIGHTS.map((art) => ({
    url: `${baseUrl}/insights/${art.slug}`,
    lastModified: new Date(),
    changeFrequency: 'weekly' as const,
    priority: 0.6,
  }));

  return [
    ...staticRoutes,
    ...serviceRoutes,
    ...productRoutes,
    ...portfolioRoutes,
    ...insightRoutes,
  ];
}
