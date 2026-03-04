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
        <h2>Project Context</h2>
        <p>
          The platform supported complex workflows, high user volume, and strict
          release controls. AngularJS legacy patterns had become the primary
          bottleneck for delivery speed.
        </p>
        <p>
          The objective was to modernize without disrupting business-critical
          operations and without freezing product development.
        </p>
      </section>
      <section>
        <h2>Discovery and Planning</h2>
        <ul>
          <li>Mapped module coupling and domain ownership boundaries</li>
          <li>Baseline performance, error, and release metrics</li>
          <li>Prioritized routes by business criticality and risk</li>
          <li>Defined phased migration milestones and rollback criteria</li>
        </ul>
      </section>
      <section>
        <h2>Migration Execution Model</h2>
        <ul>
          <li>Route-strangler migration by domain wave</li>
          <li>Shared design system modernization first</li>
          <li>Feature flags and rollback controls per release</li>
          <li>Parallel quality hardening with regression gates</li>
        </ul>
      </section>
      <section>
        <h2>Quality and Risk Controls</h2>
        <ul>
          <li>Pre-release route-level regression suite</li>
          <li>Production telemetry for errors and Web Vitals</li>
          <li>Release approvals tied to stability thresholds</li>
          <li>Weekly architecture review checkpoints</li>
        </ul>
      </section>
      <section>
        <h2>Outcomes</h2>
        <p>
          The team achieved phased modernization with stable releases, lower
          error rates on migrated routes, and improved engineering velocity.
        </p>
        <p>
          The biggest gain was delivery predictability. Teams could ship new
          features while migration progressed, instead of waiting for a full
          rewrite to finish.
        </p>
      </section>
      <section>
        <h2>Lessons Learned</h2>
        <ul>
          <li>Governance matters more than migration tooling alone</li>
          <li>Domain-by-domain planning outperforms big-bang migration</li>
          <li>Observability must be part of the migration scope</li>
          <li>Clear ownership reduces cross-team bottlenecks</li>
        </ul>
      </section>
    </BlogArticleLayout>
  );
}


