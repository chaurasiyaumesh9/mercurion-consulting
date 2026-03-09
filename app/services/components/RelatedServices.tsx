import Link from "next/link";

type ServiceLink = {
  href: string;
  title: string;
  description: string;
};

type RelatedServicesProps = {
  heading?: string;
  services: ServiceLink[];
};

export function RelatedServices({
  heading = "Related Services",
  services,
}: RelatedServicesProps) {
  return (
    <section className="bg-slate-50 rounded-xl border border-slate-200 p-8 mb-12">
      <h2 className="text-2xl text-slate-900 mb-6">{heading}</h2>
      <div className="grid md:grid-cols-3 gap-6">
        {services.map((service) => (
          <Link
            key={service.href}
            href={service.href}
            className="block bg-white rounded-lg border border-slate-200 p-5 transition-colors hover:border-slate-400"
          >
            <h3 className="text-base text-slate-900 mb-2">{service.title}</h3>
            <p className="text-[1rem] text-slate-600 leading-relaxed">
              {service.description}
            </p>
          </Link>
        ))}
      </div>
    </section>
  );
}
