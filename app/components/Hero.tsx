import { ArrowRight } from "lucide-react";

export function Hero() {
  return (
    <section className="bg-gradient-to-br from-[#1E40AF] via-[#3B82F6] to-[#60A5FA] py-14">
      <div className="max-w-7xl mx-auto px-8">
        <div className="max-w-4xl">
          <div className="mb-8">
            <h1 className="text-6xl tracking-tight mb-4 text-white">Umesh Chaurasiya</h1>
            <div className="inline-block px-4 py-2 bg-white/10 backdrop-blur-sm border border-white/20 rounded">
              <span className="text-lg text-white/95">Enterprise Angular & Performance Consultant</span>
            </div>
          </div>
          
          <div className="mb-10">
            <p className="text-xl text-white/90 leading-relaxed max-w-3xl">
              I help enterprise organizations scale Angular architecture and optimize 
              frontend performance for mission-critical applications. With deep expertise 
              in large-scale systems, I deliver strategic technical guidance that reduces 
              complexity and accelerates delivery.
            </p>
          </div>

          <div className="flex gap-6">
            <a 
              href="#contact"
              className="inline-flex items-center gap-2 bg-white text-[#111827] px-8 py-4 hover:bg-[#F3F4F6] transition-colors"
            >
              Contact
              <ArrowRight className="w-5 h-5" />
            </a>
            <a 
              href="#case-studies"
              className="inline-flex items-center gap-2 border-2 border-white text-white px-8 py-4 hover:bg-white/10 transition-colors"
            >
              View Case Studies
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
