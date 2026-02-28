"use client";

import { Github, Linkedin, Mail, MapPin } from "lucide-react";
import Image from "next/image";
import Link from "next/link";

export default function HeroSection() {
  return (
        <section id="about" className="bg-white scroll-mt-24 pt-16">
            <div className="min-h-screen flex flex-col md:flex-row">
                <div className="relative flex-1 flex items-center justify-center overflow-hidden md:p-8">
                    <div className="absolute inset-0 bg-gradient-to-br from-slate-900 via-blue-950 to-slate-900 hidden md:block" style={{clipPath: "polygon(0 0, 100% 0, 80% 100%, 0% 100%)",}} ></div>
                    <div className="flex items-center justify-center flex-col">
                        <div className="relative w-60 h-60 md:w-80 md:h-80 md:rounded-full border-8 border-white overflow-hidden">
                            <Image
                                src="/umesh-profile.jpg"
                                alt="Umesh Chaurasiya — Senior Angular Consultant and Frontend Performance Engineer"
                                fill
                                sizes="(max-width: 640px) 80vw,
                                    (max-width: 1024px) 40vw,
                                    280px"
                                className="object-cover"
                                priority
                            />
                        </div>
                    </div>
                </div>

                <div className="flex-1 p-8 flex justify-center flex-col">
                    <h1 className="text-3xl md:text-5xl text-gray-900">
                        Umesh Chaurasiya
                    </h1>

                    <h2 className="text-xl md:text-2xl text-slate-600 mt-2">
                        Senior Angular Engineer & Frontend Consultant
                    </h2>

                    <p className="mt-4 text-md text-slate-600">
                        Angular Modernization | Performance Engineering | Enterprise UI
                        Development
                    </p>

                    <div className="border-b border-slate-300 py-2"></div>

                    <p className="mt-4 text-slate-700 leading-relaxed text-[0.9rem]">
                        I help engineering teams modernize legacy Angular applications,
                        improve frontend performance, and deliver stable, production-ready
                        features for enterprise web platforms.
                    </p>

                    <p className="mt-4 text-slate-700 leading-relaxed text-[0.9rem]">
                        Specialized in Angular migrations, runtime performance optimization,
                        large-scale feature delivery, and long-term maintenance of
                        business-critical applications.
                    </p>

                    <div className="mt-4">
                        <p className="text-slate-700 text-[0.9rem]">
                            ✔ 10+ Years Frontend Engineering Experience
                        </p>
                        <p className="text-slate-700 text-[0.9rem]">
                            ✔ Enterprise Production Systems
                        </p>
                        <p className="text-slate-700 text-[0.9rem]">
                            ✔ Distributed & Global Team Collaboration
                        </p>
                    </div>

                    <p className="mt-4 text-slate-700 text-[0.9rem]">
                        Available for hire as a Senior Angular Consultant, Enterprise
                        Angular Developer, or Frontend Architecture Consultant. I support
                        global organizations with Angular migration, performance
                        optimization, and enterprise frontend modernization through remote
                        consulting and contract engagements.
                    </p>

                    <div className="mt-4 text-slate-600 text-sm flex items-center gap-1">
                        <MapPin size={20} />
                        <span>Available for remote opportunities</span>
                    </div>

                    <div className="mt-4 flex flex-col sm:flex-row gap-3 sm:gap-4 justify-center md:justify-start">
                        <Link href="/contact" className="inline-block bg-blue-700 text-white text-center px-8 py-3 rounded-md shadow-md hover:shadow-lg text-base font-medium hover:bg-blue-800 transition">
                            Schedule a Call
                        </Link>
                    </div>

                    <div className="flex gap-4 pt-6">            
                        <Link
                            href="mailto:contact@mercurionconsulting.com"
                            className="w-10 h-10 rounded text-slate-600 bg-slate-200 flex items-center justify-center hover:bg-slate-300 transition"
                            aria-label="Email"
                        >
                            <Mail size={20} />
                        </Link>
                        <Link
                            href="https://github.com/chaurasiyaumesh9"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="w-10 h-10 rounded text-slate-600 bg-slate-200 flex items-center justify-center hover:bg-slate-300 transition"
                            aria-label="GitHub"
                        >
                            <Github size={20} />
                        </Link>
                        <Link
                            href="https://www.linkedin.com/in/uc1990/"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="w-10 h-10 rounded text-slate-600 bg-slate-200 flex items-center justify-center hover:bg-slate-300 transition"
                            aria-label="LinkedIn"
                        >
                            <Linkedin size={20} />
                        </Link>
                    </div>
                </div>
            </div>
        </section>
  );
}
