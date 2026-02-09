export const personStructuredData = {
  "@context": "https://schema.org",
  "@type": "Person",
  name: "Umesh Chaurasiya",
  url: "https://mercurionconsulting.com",
  image: "https://mercurionconsulting.com/umesh-profile.jpg",
  jobTitle: "Senior Angular Consultant & Enterprise Frontend Engineer",
  worksFor: {
    "@type": "Organization",
    name: "Mercurion Consulting",
  },
  sameAs: [
    "https://www.linkedin.com/in/uc1990/",
    "https://github.com/chaurasiyaumesh9",
  ],
  knowsAbout: [
    "Angular",
    "Angular Architecture",
    "Enterprise Frontend Engineering",
    "Frontend Performance Optimization",
    "Angular Migration",
    "Frontend Platform Engineering",
    "Web Performance Engineering",
    "Core Web Vitals Optimization",
    "Enterprise Web Applications",
  ],
};

export const organizationStructuredData = {
  "@context": "https://schema.org",
  "@type": "Organization",
  name: "Mercurion Consulting",
  url: "https://mercurionconsulting.com",
  logo: "https://mercurionconsulting.com/logo.png", // Add a logo file
  description:
    "Enterprise Angular consulting services including modernization, migration, performance optimization, and frontend platform engineering.",
  founder: {
    "@type": "Person",
    name: "Umesh Chaurasiya",
  },
  contactPoint: {
    "@type": "ContactPoint",
    email: "contact@mercurionconsulting.com",
    contactType: "Customer Service",
    areaServed: "Worldwide",
  },
  sameAs: ["https://www.linkedin.com/in/uc1990/"],
};

export const serviceStructuredData = {
  "@context": "https://schema.org",
  "@type": "ProfessionalService",
  name: "Mercurion Consulting",
  url: "https://mercurionconsulting.com",
  logo: "https://mercurionconsulting.com/favicon.ico",
  image: "https://mercurionconsulting.com/umesh-profile.jpg",
  description:
    "Enterprise Angular consulting services including modernization, migration, performance optimization, and frontend platform engineering.",
  founder: {
    "@type": "Person",
    name: "Umesh Chaurasiya",
  },
  areaServed: "Worldwide",
  hasOfferCatalog: {
    "@type": "OfferCatalog",
    name: "Angular Consulting Services",
    itemListElement: [
      {
        "@type": "Offer",
        itemOffered: {
          "@type": "Service",
          name: "Angular Migration & Modernization Consulting",
          description:
            "Expert AngularJS to Angular migration and enterprise Angular upgrade services",
        },
      },
      {
        "@type": "Offer",
        itemOffered: {
          "@type": "Service",
          name: "Angular Performance Optimization Consulting",
          description:
            "Core Web Vitals optimization and runtime performance improvements for Angular applications",
        },
      },
      {
        "@type": "Offer",
        itemOffered: {
          "@type": "Service",
          name: "Enterprise Angular Development Consulting",
          description:
            "Large-scale Angular application architecture and development consulting",
        },
      },
      {
        "@type": "Offer",
        itemOffered: {
          "@type": "Service",
          name: "Frontend Delivery Enablement",
          description:
            "Frontend platform engineering and team enablement services",
        },
      },
    ],
  },
  serviceType: [
    "Angular Consulting",
    "Frontend Performance Optimization",
    "Angular Migration",
    "Enterprise Frontend Architecture Consulting",
    "Frontend Modernization Consulting",
  ],
};

export const faqStructuredData = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  mainEntity: [
    {
      "@type": "Question",
      name: "Can you be hired as a remote Angular consultant?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Yes. I work with global teams as a remote Senior Angular Consultant and enterprise frontend performance specialist. I have experience working with distributed teams across different time zones and can seamlessly integrate into your development workflow.",
      },
    },
    {
      "@type": "Question",
      name: "Do you provide Angular migration consulting?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Yes. I specialize in AngularJS to Angular migration, legacy frontend modernization, and enterprise Angular platform upgrades. I help organizations safely migrate their applications with minimal business disruption using proven incremental migration strategies.",
      },
    },
    {
      "@type": "Question",
      name: "Do you support enterprise Angular performance optimization?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Yes. I help improve Core Web Vitals, bundle size optimization, rendering performance, and runtime stability for enterprise Angular applications. This includes profiling, identifying bottlenecks, and implementing performance best practices.",
      },
    },
    {
      "@type": "Question",
      name: "What is your availability for consulting projects?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "I am available for both short-term and long-term consulting engagements, including contract positions, project-based work, and technical advisory roles. Contact me to discuss your specific needs and timeline.",
      },
    },
    {
      "@type": "Question",
      name: "Do you work with international clients?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Yes. I work with clients globally and have experience with remote collaboration across different time zones. I can adapt my schedule to overlap with your team's working hours.",
      },
    },
  ],
};

// Helper function to generate breadcrumb schema for service pages
export const getBreadcrumbSchema = (
  items: Array<{ name: string; url: string }>,
) => ({
  "@context": "https://schema.org",
  "@type": "BreadcrumbList",
  itemListElement: items.map((item, index) => ({
    "@type": "ListItem",
    position: index + 1,
    name: item.name,
    item: item.url,
  })),
});

// Helper function for individual service pages
export const getServicePageSchema = (
  serviceName: string,
  description: string,
  url: string,
) => ({
  "@context": "https://schema.org",
  "@type": "Service",
  name: serviceName,
  description: description,
  url: url,
  provider: {
    "@type": "Person",
    name: "Umesh Chaurasiya",
    jobTitle: "Senior Angular Consultant",
  },
  areaServed: "Worldwide",
  availableChannel: {
    "@type": "ServiceChannel",
    serviceUrl: "https://mercurionconsulting.com",
  },
});
