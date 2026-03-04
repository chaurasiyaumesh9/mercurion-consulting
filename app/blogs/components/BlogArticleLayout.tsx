import { Navigation } from "@/app/components/layout/Navigation";
import { Breadcrumbs } from "@/app/components/ui/Breadcrumbs";
import { getBreadcrumbSchema } from "@/app/lib/structuredData";
import Link from "next/link";

type BlogArticleLayoutProps = {
  title: string;
  description: string;
  slug: string;
  publishedAt: string;
  children: React.ReactNode;
};

export function BlogArticleLayout({
  title,
  description,
  slug,
  publishedAt,
  children,
}: BlogArticleLayoutProps) {
  const pageUrl = `https://mercurionconsulting.com/blogs/${slug}`;

  const breadcrumbSchema = getBreadcrumbSchema([
    { name: "Home", url: "https://mercurionconsulting.com" },
    { name: "Blogs", url: "https://mercurionconsulting.com/blogs" },
    { name: title, url: pageUrl },
  ]);

  const blogPostingSchema = {
    "@context": "https://schema.org",
    "@type": "BlogPosting",
    headline: title,
    description,
    datePublished: publishedAt,
    dateModified: publishedAt,
    author: {
      "@type": "Person",
      name: "Umesh Chaurasiya",
    },
    publisher: {
      "@type": "Organization",
      name: "Mercurion Consulting",
      logo: {
        "@type": "ImageObject",
        url: "https://mercurionconsulting.com/logo.webp",
      },
    },
    mainEntityOfPage: {
      "@type": "WebPage",
      "@id": pageUrl,
    },
  };

  const breadcrumbItems = [
    { label: "Blogs", href: "/blogs" },
    { label: title, href: `/blogs/${slug}` },
  ];

  return (
    <main className="min-h-screen bg-gray-50">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(blogPostingSchema) }}
      />
      <Navigation />

      <article className="py-14 md:py-20 scroll-mt-24">
        <div className="max-w-7xl mx-auto px-6 md:px-8 mb-8 mt-8">
          <Breadcrumbs items={breadcrumbItems} />
        </div>

        <div className="max-w-7xl mx-auto px-6 md:px-8">
          <div className="bg-white rounded-xl border border-gray-100 p-8 md:p-12 shadow-sm">
            <p className="text-sm text-slate-500 mb-3">Published: {publishedAt}</p>
            <h1 className="text-3xl sm:text-4xl text-slate-900 mb-6 leading-tight">{title}</h1>
            <p className="text-gray-700 leading-relaxed mb-10">{description}</p>

            <div className="space-y-8 text-gray-700 [&_h2]:text-[#1a2332] [&_h2]:mb-4 [&_h3]:text-[#1a2332] [&_h3]:mb-3 [&_p]:text-gray-700 [&_p]:leading-relaxed [&_ul]:list-disc [&_ul]:pl-6 [&_ul]:space-y-2 [&_li]:text-gray-700 [&_li]:leading-relaxed">
              {children}
            </div>

            <div className="border-t border-gray-200 mt-12 pt-6">
              <h2 className="text-[#1a2332] mb-3">Related Services</h2>
              <div className="grid sm:grid-cols-2 gap-2 text-base">
                <Link
                  href="/services/angular-migration-modernization"
                  className="text-blue-700 hover:text-blue-800"
                >
                  Angular Migration & Modernization
                </Link>
                <Link
                  href="/services/frontend-performance-optimization"
                  className="text-blue-700 hover:text-blue-800"
                >
                  Frontend Performance Optimization
                </Link>
                <Link
                  href="/services/enterprise-angular-development"
                  className="text-blue-700 hover:text-blue-800"
                >
                  Enterprise Angular Development
                </Link>
                <Link
                  href="/services/frontend-delivery-enablement"
                  className="text-blue-700 hover:text-blue-800"
                >
                  Frontend Delivery Enablement
                </Link>
              </div>
            </div>
          </div>
        </div>
      </article>
    </main>
  );
}
