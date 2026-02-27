import React from 'react';
import Image from 'next/image';

export default function About() {
    return (
        <section id="about" className="mb-8 px-4 sm:px-6" data-animate>
            <div className="reveal transition-all duration-1000 ease-[cubic-bezier(0.16,1,0.3,1)]">
                <div className="p-6 sm:p-8 md:p-10 border border-white/[0.06] rounded-2xl bg-white/[0.02] overflow-hidden">
                    <div className="flex flex-col items-center gap-6 sm:gap-8">
                        {/* Profile Image */}
                        <div className="relative group shrink-0">
                            <div className="absolute -inset-1 bg-gradient-to-r from-[#00FF7F] to-cyan-500 rounded-2xl blur opacity-20 group-hover:opacity-40 transition duration-1000"></div>
                            <Image
                                src="/Image.png"
                                alt="M Jawad ur Rehman"
                                width={224}
                                height={224}
                                className="relative w-32 h-32 sm:w-40 sm:h-40 md:w-48 md:h-48 rounded-2xl object-cover border border-white/10 shadow-2xl"
                            />
                            <div className="absolute -bottom-2 -right-2 bg-[#00FF7F] text-black px-2.5 py-1 rounded-lg text-[9px] font-bold uppercase tracking-tight shadow-xl">
                                Available for Work
                            </div>
                        </div>

                        {/* Hero Text */}
                        <div className="space-y-5 text-center max-w-2xl">
                            <div className="space-y-2">
                                <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold leading-tight text-white">
                                    Crafting the Future of <span className="text-[#00FF7F]">Decision Intelligence.</span>
                                </h2>
                                <p className="text-[#00FF7F]/70 text-[10px] sm:text-xs font-bold uppercase tracking-[0.25em]">Full-Stack Engineer & AI Architect</p>
                            </div>

                            <div className="space-y-3 text-white/50 text-sm leading-relaxed">
                                <p>
                                    I am <span className="text-white font-semibold">M Jawad ur Rehman</span>, a developer dedicated to bridging the gap between sophisticated AI models and real-world utility. My work focuses on building tools that don&apos;t just automate tasks, but augment human capability through <span className="text-white/80">intelligent design</span> and <span className="text-white/80">robust engineering</span>.
                                </p>
                                <p>
                                    With expertise ranging from <span className="text-[#00FF7F]/80">Modern Web Architectures</span> to <span className="text-[#00FF7F]/80">Generative AI Workflows</span>, I specialize in the &quot;last mile&quot; of product development—ensuring that complex backends are translated into seamless, high-performance user experiences.
                                </p>
                            </div>

                            {/* Stats Row */}
                            <div className="flex flex-wrap justify-center gap-6 sm:gap-8 pt-5 border-t border-white/[0.04]">
                                <div className="flex flex-col items-center">
                                    <span className="text-white font-bold text-xl sm:text-2xl">20+</span>
                                    <span className="text-white/30 text-[9px] sm:text-[10px] uppercase tracking-widest font-medium">Projects</span>
                                </div>
                                <div className="w-px h-10 bg-white/[0.06] hidden sm:block"></div>
                                <div className="flex flex-col items-center">
                                    <span className="text-white font-bold text-xl sm:text-2xl">AI/ML</span>
                                    <span className="text-white/30 text-[9px] sm:text-[10px] uppercase tracking-widest font-medium">Specialization</span>
                                </div>
                                <div className="w-px h-10 bg-white/[0.06] hidden sm:block"></div>
                                <div className="flex flex-col items-center">
                                    <span className="text-white font-bold text-xl sm:text-2xl">Full-Stack</span>
                                    <span className="text-white/30 text-[9px] sm:text-[10px] uppercase tracking-widest font-medium">Development</span>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}
