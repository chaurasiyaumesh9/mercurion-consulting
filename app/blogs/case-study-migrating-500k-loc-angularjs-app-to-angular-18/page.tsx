import { BlogArticleLayout } from "../components/BlogArticleLayout";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Case Study: Migrating a 500K LOC AngularJS App to Angular 18 | Mercurion Consulting",
  description:
    "A large-scale migration case study showing phased delivery, quality gates, and operational outcomes.",
  keywords: [
    "angularjs migration case study",
    "500k loc angular migration",
    "enterprise frontend modernization",
  ],
  alternates: {
    canonical:
      "https://mercurionconsulting.com/blogs/case-study-migrating-500k-loc-angularjs-app-to-angular-18",
  },
};

export default function Page() {
  return (
    <BlogArticleLayout
      title="Case Study: Migrating a 500K LOC AngularJS App to Angular 18"
      description="A real-world style case study showing phased migration of a large AngularJS codebase to Angular 18 with risk controls, performance gains, and delivery continuity."
      slug="case-study-migrating-500k-loc-angularjs-app-to-angular-18"
      publishedAt="2026-03-04"
    >
      <section>
        <h2 className="text-2xl text-slate-900 mb-4">Context</h2>
        <p className="text-slate-700">
          The platform supported complex workflows, high user volume, and strict
          release controls. AngularJS legacy patterns had become the primary
          bottleneck for delivery speed.
        </p>
      </section>
      <section>
        <h2 className="text-2xl text-slate-900 mb-4">Migration Execution</h2>
        <ul className="list-disc pl-6 text-slate-700 space-y-2">
          <li>Route-strangler migration by domain wave</li>
          <li>Shared design system modernization first</li>
          <li>Feature flags and rollback controls per release</li>
        </ul>
      </section>
      <section>
        <h2 className="text-2xl text-slate-900 mb-4">Outcomes</h2>
        <p className="text-slate-700">
          The team achieved phased modernization with stable releases, lower
          error rates on migrated routes, and improved engineering velocity.
        </p>
      </section>
    </BlogArticleLayout>
  );
}


