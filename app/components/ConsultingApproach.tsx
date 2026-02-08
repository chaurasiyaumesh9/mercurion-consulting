export function ConsultingApproach() {
  const steps = [
    {
      title: "Technical Discovery & System Audit",
      description:
        "Architecture review, codebase analysis, performance profiling, and identification of technical debt and stability risks. For new builds, includes requirements clarification and frontend platform foundation design.",
    },
    {
      title: "Engineering Strategy & Roadmap Planning",
      description:
        "Translate technical findings into a prioritized roadmap covering modernization opportunities, performance optimization strategy, architecture improvements, and phased delivery planning aligned with business timelines.",
    },
    {
      title: "Implementation & Engineering Execution",
      description:
        "Hands-on engineering contribution delivering improvements or new capabilities, including performance optimization, modernization, and frontend architecture implementation in collaboration with product teams.",
    },
    {
      title: "Documentation, Knowledge Transfer & Stability",
      description:
        "Provide documentation, architectural decision records, and knowledge transfer to ensure teams can maintain and evolve the frontend platform independently after engagement.",
    },
  ];

  return (
    <section id="approach" className="bg-white py-8">
      <div className="max-w-7xl mx-auto px-8">
        <div className="mb-8">
          <h2 className="text-4xl tracking-tight mb-5 text-[#1E293B]">
            Technical Delivery Approach
          </h2>
          <p className="text-xl text-[#6B7280] leading-relaxed max-w-2xl">
            A structured, hands-on methodology for assessing, building,
            modernizing, and scaling enterprise frontend applications.
          </p>
        </div>

        <div className="relative">
          {/* Vertical Line */}
          <div className="absolute left-5 top-0 bottom-0 w-px bg-slate-200 hidden sm:block" />

          <div className="space-y-8">
            {steps.map((step, index) => (
              <div key={index} className="relative flex gap-8">
                {/* Timeline Column */}
                <div className="flex flex-col items-center">
                  <div className="w-10 h-10 rounded-full bg-blue-50 flex items-center justify-center border border-blue-100 z-10">
                    <span className="text-sm font-semibold text-blue-600">
                      {index + 1}
                    </span>
                  </div>
                </div>

                {/* Content Column */}
                <div className="pb-2">
                  <h3 className="text-xl font-semibold text-[#1E293B] mb-3">
                    {step.title}
                  </h3>
                  <p className="text-[#6B7280] leading-relaxed text-[16px] max-w-xl">
                    {step.description}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
