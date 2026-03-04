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
      url: 'https://mercurionconsulting.com/blogs',
      lastModified: new Date(),
      changeFrequency: 'weekly',
      priority: 0.8,
    },
    {
      url: 'https://mercurionconsulting.com/blogs/migrate-angularjs-to-angular-18-2026-complete-guide',
      lastModified: new Date('2026-03-04'),
      changeFrequency: 'monthly',
      priority: 0.75,
    },
    {
      url: 'https://mercurionconsulting.com/blogs/common-angular-performance-issues-and-fixes',
      lastModified: new Date('2026-03-04'),
      changeFrequency: 'monthly',
      priority: 0.75,
    },
    {
      url: 'https://mercurionconsulting.com/blogs/angularjs-end-of-life-migration-strategy-enterprise-apps',
      lastModified: new Date('2026-03-04'),
      changeFrequency: 'monthly',
      priority: 0.75,
    },
    {
      url: 'https://mercurionconsulting.com/blogs/angular-vs-react-2026-enterprise-framework-decision',
      lastModified: new Date('2026-03-04'),
      changeFrequency: 'monthly',
      priority: 0.75,
    },
    {
      url: 'https://mercurionconsulting.com/blogs/core-web-vitals-optimization-angular-applications',
      lastModified: new Date('2026-03-04'),
      changeFrequency: 'monthly',
      priority: 0.75,
    },
    {
      url: 'https://mercurionconsulting.com/blogs/angular-migration-cost-2026-pricing-guide',
      lastModified: new Date('2026-03-04'),
      changeFrequency: 'monthly',
      priority: 0.75,
    },
    {
      url: 'https://mercurionconsulting.com/blogs/angular-signals-vs-ngrx-when-to-use-each',
      lastModified: new Date('2026-03-04'),
      changeFrequency: 'monthly',
      priority: 0.75,
    },
    {
      url: 'https://mercurionconsulting.com/blogs/case-study-migrating-500k-loc-angularjs-app-to-angular-18',
      lastModified: new Date('2026-03-04'),
      changeFrequency: 'monthly',
      priority: 0.75,
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

