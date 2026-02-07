export function ExperienceAuthority() {
  const credentials = [
    {
      metric: "8+ Years",
      description: "Angular Development Experience",
    },
    {
      metric: "12+ Years",
      description: "Frontend Engineering Experience",
    },
    {
      metric: "Enterprise",
      description: "Product & Ecommerce Systems Experience",
    },
    {
      metric: "Specialized",
      description: "Performance Optimization Expertise",
    },
  ];

  return (
    <section id="about" className="bg-[#F9FAFB] py-12">
      <div className="max-w-7xl mx-auto px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12">
          {credentials.map((cred, index) => (
            <div key={index} className="text-center">
              <div className="text-4xl mb-4 text-[#2563EB]">{cred.metric}</div>
              <div className="text-lg text-[#6B7280]">{cred.description}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
