import { MetadataRoute } from 'next'
 
export default function sitemap(): MetadataRoute.Sitemap {
  return [
    {
      url: 'https://mercurionconsulting.com',
      lastModified: new Date(),
      changeFrequency: 'monthly',
      priority: 1,
    },
    {
        url: 'https://mercurionconsulting.com/contact',
        lastModified: new Date(),
        changeFrequency: 'monthly',
        priority: 0.9, // High priority - it's a conversion page
    },
    {
      url: 'https://mercurionconsulting.com/hire-angular-consultant',
      lastModified: new Date(),
      changeFrequency: 'monthly',
      priority: 0.9,
    },
    {
      url: 'https://mercurionconsulting.com/hire-angular-consultant-usa',
      lastModified: new Date(),
      changeFrequency: 'monthly',
      priority: 0.85,
    },
    {
      url: 'https://mercurionconsulting.com/hire-angular-consultant-uk',
      lastModified: new Date(),
      changeFrequency: 'monthly',
      priority: 0.85,
    },
    {
      url: 'https://mercurionconsulting.com/hire-angular-consultant-europe',
      lastModified: new Date(),
      changeFrequency: 'monthly',
      priority: 0.85,
    },
    {
      url: 'https://mercurionconsulting.com/remote-angular-consultant',
      lastModified: new Date(),
      changeFrequency: 'monthly',
      priority: 0.85,
    },
    {
      url: 'https://mercurionconsulting.com/services/angular-migration-modernization',
      lastModified: new Date(),
      changeFrequency: 'monthly',
      priority: 0.8,
    },
    {
      url: 'https://mercurionconsulting.com/services/enterprise-angular-development',
      lastModified: new Date(),
      changeFrequency: 'monthly',
      priority: 0.8,
    },
    {
      url: 'https://mercurionconsulting.com/services/frontend-performance-optimization',
      lastModified: new Date(),
      changeFrequency: 'monthly',
      priority: 0.8,
    },
    {
      url: 'https://mercurionconsulting.com/services/frontend-delivery-enablement',
      lastModified: new Date(),
      changeFrequency: 'monthly',
      priority: 0.8,
    },
  ]
}
