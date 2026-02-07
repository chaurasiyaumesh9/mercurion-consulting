export function ConsultingApproach() {
  const phases = [
    {
      number: "01",
      title: "Technical Assessment",
      description: "Comprehensive evaluation of current architecture, codebase analysis, performance profiling, and identification of technical debt and optimization opportunities."
    },
    {
      number: "02",
      title: "Strategic Roadmap",
      description: "Detailed technical roadmap with prioritized recommendations, risk assessment, and phased implementation plan aligned with business objectives."
    },
    {
      number: "03",
      title: "Implementation Guidance",
      description: "Direct technical leadership during implementation. Architecture reviews, code reviews, and hands-on guidance for critical technical decisions."
    },
    {
      number: "04",
      title: "Knowledge Transfer",
      description: "Documentation, training, and enablement to ensure your team can maintain and evolve the solution independently after engagement completion."
    }
  ];

  return (
    <section id="approach" className="max-w-7xl mx-auto px-8 py-8">
      <div className="mb-8">
        <h2 className="text-4xl mb-4 text-[#1E293B]">Consulting Approach</h2>
        <p className="text-xl text-[#6B7280] max-w-3xl">
          Structured methodology for delivering sustainable technical solutions
        </p>
      </div>

      <div className="space-y-8">
        {phases.map((phase, index) => (
          <div key={index} className="flex gap-8 items-start">
            <div className="text-5xl font-light text-[#D1D5DB] min-w-[100px]">
              {phase.number}
            </div>
            <div className="flex-1 pt-2">
              <h3 className="text-xl mb-3 text-[#1E293B]">{phase.title}</h3>
              <p className="text-base text-[#6B7280] leading-relaxed max-w-3xl">
                {phase.description}
              </p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
