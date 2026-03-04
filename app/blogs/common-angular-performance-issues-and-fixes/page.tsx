import { BlogArticleLayout } from "../components/BlogArticleLayout";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "10 Common Angular Performance Issues and How to Fix Them | Mercurion Consulting",
  description:
    "A practical list of Angular performance bottlenecks with diagnostics and remediation patterns for enterprise applications.",
  keywords: [
    "angular performance issues",
    "angular optimization",
    "core web vitals angular",
  ],
  alternates: {
    canonical:
      "https://mercurionconsulting.com/blogs/common-angular-performance-issues-and-fixes",
  },
};

export default function Page() {
  return (
    <BlogArticleLayout
      title="10 Common Angular Performance Issues and How to Fix Them"
      description="A field-tested list of Angular runtime and rendering bottlenecks with clear diagnostics and practical fixes for enterprise applications."
      slug="common-angular-performance-issues-and-fixes"
      publishedAt="2026-03-04"
    >
      <section>
        <h2 className="text-2xl text-slate-900 mb-4">Rendering Bottlenecks</h2>
        <ul className="list-disc pl-6 text-slate-700 space-y-2">
          <li>Unbounded change detection in large component trees</li>
          <li>Function calls and heavy expressions in templates</li>
          <li>Missing `trackBy` in long lists</li>
        </ul>
      </section>
      <section>
        <h2 className="text-2xl text-slate-900 mb-4">JavaScript and Bundle Cost</h2>
        <p className="text-slate-700 mb-4">
          Large initial bundles hurt LCP and interaction readiness. Prioritize
          route-based lazy loading and remove low-value dependencies.
        </p>
        <ul className="list-disc pl-6 text-slate-700 space-y-2">
          <li>Split by feature routes</li>
          <li>Defer non-critical scripts</li>
          <li>Audit third-party packages every release</li>
        </ul>
      </section>
      <section>
        <h2 className="text-2xl text-slate-900 mb-4">Data and State Efficiency</h2>
        <p className="text-slate-700">
          Repeated HTTP calls and unmanaged streams increase CPU and latency.
          Use shared streams, cancellation patterns, and caching for read-heavy
          views.
        </p>
      </section>
      <section>
        <h2 className="text-2xl text-slate-900 mb-4">Performance Workflow</h2>
        <p className="text-slate-700">
          Use a loop of baseline, diagnose, optimize, verify, and guard. Teams
          that operationalize this cycle prevent regressions instead of reacting
          after release.
        </p>
      </section>
    </BlogArticleLayout>
  );
}


