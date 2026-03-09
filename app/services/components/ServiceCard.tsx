interface ServiceCardProps {
  title: string;
  children: React.ReactNode;
}

export function ServiceCard({ title, children }: ServiceCardProps) {
  return (
    <div className="bg-white rounded-lg p-8 shadow-sm border border-gray-100">
      <h2 className="text-[#1a2332] mb-4">{title}</h2>
      <div className="text-gray-700 leading-relaxed space-y-4">{children}</div>
    </div>
  );
}
