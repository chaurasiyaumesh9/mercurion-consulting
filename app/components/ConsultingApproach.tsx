import { BarChart, Rocket, Search, Wrench } from "lucide-react";

export function ConsultingApproach() {
  const steps = [
    {
      icon: <Search size={40} />,
      phase: "Discovery",
      title: "Technical Discovery & System Audit",
      description:
        "I begin every engagement with a comprehensive technical assessment. This includes reviewing existing architecture, identifying performance bottlenecks, evaluating code quality, and understanding team capabilities. This phase establishes a clear baseline and identifies opportunities for improvement.",
      keyActivities: [
        "Requirements gathering",
        "Technical assessment",
        "Stakeholder interviews",
        "Risk analysis",
      ],
    },
    {
      icon: <Wrench size={40} />,
      phase: "Planning",
      title: "Engineering Strategy & Roadmap Planning",
      description:
        "Based on discovery findings, I create a detailed technical roadmap with clear milestones, deliverables, and success metrics. This includes architecture decisions, technology stack recommendations, team structure proposals, and risk mitigation strategies. The plan ensures alignment between technical solutions and business objectives.",
      keyActivities: [
        "Architecture design",
        "Technology selection",
        "Sprint planning",
        "Resource allocation",
      ],
    },
    {
      icon: <Rocket size={40} />,
      phase: "Execution",
      title: "Implementation & Engineering Execution",
      description:
        "Implementation follows agile methodologies with short iteration cycles, continuous integration, and regular stakeholder feedback. I establish coding standards, implement automated testing, set up CI/CD pipelines, and ensure code quality through reviews and pair programming. The focus is on building sustainable, maintainable solutions.",
      keyActivities: [
        "Agile development",
        "Code reviews",
        "Automated testing",
        "CI/CD implementation",
      ],
    },
    {
      icon: <BarChart size={40} />,
      phase: "Optimization",
      title: "Performance Optimization, Knowledge Transfer & Training",
      description:
        "The final phase focuses on optimization and knowledge transfer. I conduct performance audits, implement optimizations, and establish monitoring systems. Equally important is ensuring the team can maintain and evolve the solution through comprehensive documentation, training sessions, and ongoing mentorship.",
      keyActivities: [
        "Performance monitoring",
        "A/B testing",
        "User feedback analysis",
        "Continuous optimization",
      ],
    },
  ];

  return (
    <section id="approach" className="bg-white py-14 md:py-20 scroll-mt-24">
        <div className="max-w-7xl mx-auto px-6 md:px-8">
            <div className="text-center mb-12">
            <h2 className="text-3xl sm:text-4xl text-slate-900 mb-4">
                Technical Delivery Approach
            </h2>
            <p className="text-lg text-slate-600">
                A proven methodology for delivering high-quality frontend solutions
                on time and within budget
            </p>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-2 gap-6 md:gap-8">
                {steps.map((step, index) => (
                    <div key={index} className="relative group bg-white p-6 border border-slate-200 rounded-2xl shadow-sm hover:shadow-md transition-all duration-300 overflow-hidden">
                        <div className="relative z-10">
                            <div className="flex items-stretch gap-6 mb-6">                
                                <div className="flex items-center justify-center 
                                    min-w-15 text-5xl font-semibold text-slate-300">
                                    {String(index + 1)}
                                </div>
                                <div className="flex flex-col justify-center border-l border-slate-200 pl-6">
                                    <h3 className="text-xl text-slate-900">
                                        {step.phase}
                                    </h3>
                                    <p className="text-slate-600 text-sm mt-1">
                                        {step.title}
                                    </p>
                                </div>
                            </div>

                            <div className="h-px bg-linear-to-r from-transparent via-slate-300 to-transparent my-4"></div>

                            <p className="text-slate-700 mb-6 leading-relaxed">
                                {step.description}
                            </p>

                            <ul className="space-y-2 md:space-y-2.5">
                                {step.keyActivities.map((item, idx) => (
                                    <li key={idx} className="flex items-start gap-2 leading-relaxed">
                                        <span className="text-slate-700 text-[0.95rem]">✔</span>
                                        <span className="text-slate-700 text-[0.95rem]">
                                            {item}
                                        </span>
                                    </li>
                                ))}
                            </ul>
                        </div>             

                        <div className="absolute bottom-0 right-0 w-40 h-40 bg-linear-to-br from-slate-900 to-blue-950 z-0" style={{ clipPath: "polygon(100% 0, 100% 100%, 0 100%)",}}></div>
                        <div className="absolute bottom-6 right-6 z-10">
                            <div className="w-12 h-12 backdrop-blur-sm 
                                rounded-xl flex items-center justify-center text-white">
                                {step.icon}
                            </div>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    </section>
  );
}
