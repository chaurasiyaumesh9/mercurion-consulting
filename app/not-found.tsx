import Link from "next/link";

export default function NotFound() {
  return (
    <div className="min-h-screen bg-white flex items-center justify-center px-6">
      <div className="max-w-2xl text-center">
        <h1 className="text-6xl font-bold text-slate-900">404</h1>
        <h2 className="mt-4 text-2xl font-semibold text-slate-800">
          Page Not Found
        </h2>
        <p className="mt-4 text-slate-600">
          The page you're looking for doesn't exist or has been moved.
        </p>

        <div className="mt-8 space-y-3">
          <p className="text-slate-700 font-medium">
            Looking for Angular consulting services?
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center mt-6">
            <Link
              href="/"
              className="px-6 py-3 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition"
            >
              Go to Homepage
            </Link>
            <Link
              href="/hire-angular-consultant"
              className="px-6 py-3 border border-blue-600 text-blue-600 rounded-lg hover:bg-blue-50 transition"
            >
              Hire Angular Consultant
            </Link>
          </div>
        </div>

        <div className="mt-12 pt-8 border-t border-slate-200">
          <h3 className="text-lg font-semibold text-slate-900 mb-4">
            Popular Services
          </h3>
          <div className="grid sm:grid-cols-2 gap-3 text-left max-w-lg mx-auto">
            <Link
              href="/services/angular-migration-modernization"
              className="p-4 border rounded-lg hover:border-blue-600 hover:bg-blue-50 transition"
            >
              <div className="font-medium text-slate-900">
                Angular Migration
              </div>
              <div className="text-sm text-slate-600">
                AngularJS to Angular upgrades
              </div>
            </Link>
            <Link
              href="/services/frontend-performance-optimization"
              className="p-4 border rounded-lg hover:border-blue-600 hover:bg-blue-50 transition"
            >
              <div className="font-medium text-slate-900">
                Performance Optimization
              </div>
              <div className="text-sm text-slate-600">
                Core Web Vitals improvements
              </div>
            </Link>
            <Link
              href="/services/enterprise-angular-development"
              className="p-4 border rounded-lg hover:border-blue-600 hover:bg-blue-50 transition"
            >
              <div className="font-medium text-slate-900">
                Enterprise Development
              </div>
              <div className="text-sm text-slate-600">
                Large-scale Angular apps
              </div>
            </Link>
            <Link
              href="/services/frontend-delivery-enablement"
              className="p-4 border rounded-lg hover:border-blue-600 hover:bg-blue-50 transition"
            >
              <div className="font-medium text-slate-900">
                Delivery Enablement
              </div>
              <div className="text-sm text-slate-600">
                Team & platform engineering
              </div>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}
