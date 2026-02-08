export function ConsultingApproach() {
  const steps = [
    {
      phase: "01",
      title: "Technical Discovery & System Audit",
      description:
        "Architecture review, codebase analysis, performance profiling, and identification of technical debt and stability risks. For new builds, includes requirements clarification and frontend platform foundation design.",
    },
    {
      phase: "02",
      title: "Engineering Strategy & Roadmap Planning",
      description:
        "Translate technical findings into a prioritized roadmap covering modernization opportunities, performance optimization strategy, architecture improvements, and phased delivery planning aligned with business timelines.",
    },
    {
      phase: "03",
      title: "Implementation & Engineering Execution",
      description:
        "Hands-on engineering contribution delivering improvements or new capabilities, including performance optimization, modernization, and frontend architecture implementation in collaboration with product teams.",
    },
    {
      phase: "04",
      title: "Documentation, Knowledge Transfer & Stability",
      description:
        "Provide documentation, architectural decision records, and knowledge transfer to ensure teams can maintain and evolve the frontend platform independently after engagement.",
    },
  ];

  return (
    <section id="approach" className="bg-white py-14 md:py-20 scroll-mt-24">
      <div className="max-w-7xl mx-auto px-6 md:px-8">
        {/* HEADER */}
        <div className="mb-12 md:mb-16 max-w-3xl">
          <h2 className="text-3xl md:text-4xl font-semibold text-[#1E293B]">
            Technical Delivery Approach
          </h2>

          <p className="mt-4 text-lg md:text-xl text-[#6B7280] leading-relaxed">
            A structured, hands-on methodology for assessing, building,
            modernizing, and scaling enterprise frontend applications.
          </p>
        </div>

        {/* PHASE BLOCKS */}
        <div className="grid md:grid-cols-2 gap-6 md:gap-8">
          {steps.map((step, index) => (
            <div
              key={index}
              className="bg-[#F9FAFB] border border-[#E5E7EB] rounded-xl p-6 md:p-8"
            >
              {/* PHASE NUMBER */}
              <div className="text-sm font-semibold text-blue-600 mb-3">
                Phase {step.phase}
              </div>

              {/* TITLE */}
              <h3 className="text-lg md:text-xl font-semibold text-[#1E293B] mb-3 leading-snug">
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
