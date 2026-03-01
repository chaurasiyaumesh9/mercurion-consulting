import Link from "next/link";

interface BreadcrumbItem {
  label: string;
  href: string;
}

interface BreadcrumbsProps {
  items: BreadcrumbItem[];
}

export function Breadcrumbs({ items }: BreadcrumbsProps) {
  return (
    <nav aria-label="Breadcrumb" className="mb-8">
      <ol className="flex items-center space-x-2 text-sm">
        <li>
          <Link href="/" className="text-slate-600 hover:text-blue-600 transition">
            Home
          </Link>
        </li>

        {items.map((item, index) => (
          <li key={item.href} className="flex items-center space-x-2">
            <span className="text-slate-400">/</span>
            {index === items.length - 1 ? (
              <span className="text-slate-900 font-medium">{item.label}</span>
            ) : (
              <Link href={item.href} className="text-slate-600 hover:text-blue-600 transition">
                {item.label}
              </Link>
            )}
          </li>
        ))}
      </ol>
    </nav>
  );
}
