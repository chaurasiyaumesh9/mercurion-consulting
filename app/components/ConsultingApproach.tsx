export function ConsultingApproach() {
  const steps = [
    {
      phase: "Discovery",
      title: "Technical Discovery & System Audit",
      description:
        "I begin every engagement with a comprehensive technical assessment. This includes reviewing existing architecture, identifying performance bottlenecks, evaluating code quality, and understanding team capabilities. This phase establishes a clear baseline and identifies opportunities for improvement.",
    },
    {
      phase: "Planning",
      title: "Engineering Strategy & Roadmap Planning",
      description:
        "Based on discovery findings, I create a detailed technical roadmap with clear milestones, deliverables, and success metrics. This includes architecture decisions, technology stack recommendations, team structure proposals, and risk mitigation strategies. The plan ensures alignment between technical solutions and business objectives.",
    },
    {
      phase: "Development",
      title: "Implementation & Engineering Execution",
      description:
        "Implementation follows agile methodologies with short iteration cycles, continuous integration, and regular stakeholder feedback. I establish coding standards, implement automated testing, set up CI/CD pipelines, and ensure code quality through reviews and pair programming. The focus is on building sustainable, maintainable solutions.",
    },
    {
      phase: "Optimization",
      title: "Performance Optimization, Knowledge Transfer & Training",
      description:
        "The final phase focuses on optimization and knowledge transfer. I conduct performance audits, implement optimizations, and establish monitoring systems. Equally important is ensuring the team can maintain and evolve the solution through comprehensive documentation, training sessions, and ongoing mentorship.",
    },
  ];

  return (
    <section id="approach" className="bg-white py-14 md:py-20 scroll-mt-24">
      <div className="max-w-7xl mx-auto px-6 md:px-8">
        {/* HEADER */}
        <div className="text-center mb-12">
            <h2 className="text-3xl sm:text-4xl text-slate-900 mb-4">
              Technical Delivery Approach
            </h2>
            <p className="text-lg text-slate-600">
              A proven methodology for delivering high-quality frontend solutions on time and within budget
            </p>
          </div>

        {/* PHASE BLOCKS */}
        <div className="grid md:grid-cols-2 gap-6 md:gap-8">
          {steps.map((step, index) => (
            <div
              key={index}
              className="bg-[#F9FAFB] border border-[#E5E7EB] rounded-xl p-6 md:p-8"
            >
                <div className="w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center">
                  <span className="text-2xl font-bold text-blue-600">{index + 1}</span>
                </div>
              {/* PHASE NUMBER */}
              <div className="text-xl font-semibold text-slate-900 mb-2 mt-2">
                {step.phase}
              </div>

              {/* TITLE */}
              <h3 className="text-sm text-blue-600 font-medium mb-3">
                {step.title}
              </h3>

              {/* DESCRIPTION */}
              <p className="text-[#6B7280] leading-relaxed text-[15px] md:text-[16px]">
                {step.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
