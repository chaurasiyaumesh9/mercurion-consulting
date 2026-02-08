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
  sameAs: ["https://www.linkedin.com/in/uc1990/"],
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
          name: "Angular Consulting",
        },
      },
      {
        "@type": "Offer",
        itemOffered: {
          "@type": "Service",
          name: "Angular Performance Optimization Consulting",
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
        text: "Yes. I work with global teams as a remote Senior Angular Consultant and enterprise frontend performance specialist.",
      },
    },
    {
      "@type": "Question",
      name: "Do you provide Angular migration consulting?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Yes. I specialize in AngularJS to Angular migration, legacy frontend modernization, and enterprise Angular platform upgrades.",
      },
    },
    {
      "@type": "Question",
      name: "Do you support enterprise Angular performance optimization?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Yes. I help improve Core Web Vitals, bundle size optimization, rendering performance, and runtime stability for enterprise Angular applications.",
      },
    },
  ],
};
