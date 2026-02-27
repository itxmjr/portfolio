import React from 'react';
import Image from 'next/image';

export default function About() {
    return (
        <section id="about" className="mb-8 px-4 sm:px-6" data-animate>
            <div className="reveal transition-all duration-1000 ease-[cubic-bezier(0.16,1,0.3,1)]">
                <div className="relative p-6 sm:p-8 md:p-10 border border-white/[0.06] rounded-2xl bg-white/[0.02] overflow-hidden">
                    {/* Decorative gradient orb */}
                    <div className="absolute -top-20 -right-20 w-60 h-60 bg-[#00FF7F]/[0.04] rounded-full blur-3xl pointer-events-none"></div>
                    <div className="absolute -bottom-16 -left-16 w-48 h-48 bg-cyan-500/[0.03] rounded-full blur-3xl pointer-events-none"></div>

                    <div className="relative flex flex-col lg:flex-row items-center lg:items-start gap-8">
                        {/* Profile Image */}
                        <div className="relative group shrink-0">
                            <div className="absolute -inset-1 bg-gradient-to-br from-[#00FF7F]/30 to-cyan-500/20 rounded-2xl blur-lg opacity-0 group-hover:opacity-100 transition duration-700"></div>
                            <Image
                                src="/Image.png"
                                alt="M Jawad ur Rehman"
                                width={224}
                                height={224}
                                className="relative w-36 h-36 sm:w-44 sm:h-44 rounded-2xl object-cover border border-white/10 shadow-2xl"
                            />
                            <div className="absolute -bottom-2 -right-2 bg-[#00FF7F] text-black px-2.5 py-1 rounded-lg text-[9px] font-bold uppercase tracking-tight shadow-lg">
                                Available for Work
                            </div>
                        </div>

                        {/* Content */}
                        <div className="space-y-5 text-center lg:text-left flex-1">
                            <div className="space-y-2">
                                <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold leading-tight text-white">
                                    Crafting the Future of{' '}
                                    <span className="bg-gradient-to-r from-[#00FF7F] to-emerald-400 bg-clip-text text-transparent">
                                        Decision Intelligence.
                                    </span>
                                </h2>
                                <p className="text-[#00FF7F]/60 text-[10px] sm:text-xs font-bold uppercase tracking-[0.25em]">Full-Stack Engineer & AI Architect</p>
                            </div>

                            <div className="space-y-3 text-white/45 text-sm leading-relaxed">
                                <p>
                                    I am <span className="text-white font-semibold">M Jawad ur Rehman</span>, a developer bridging the gap between sophisticated AI models and real-world utility — building tools that don&apos;t just automate tasks, but augment human capability through <span className="text-white/70">intelligent design</span> and <span className="text-white/70">robust engineering</span>.
                                </p>
                                <p>
                                    From <span className="text-[#00FF7F]/70">Modern Web Architectures</span> to <span className="text-[#00FF7F]/70">Generative AI Workflows</span>, I specialize in the &quot;last mile&quot; — ensuring complex backends translate into seamless user experiences.
                                </p>
                            </div>

                            {/* Stats Row */}
                            <div className="flex flex-wrap justify-center lg:justify-start gap-6 pt-5 border-t border-white/[0.04]">
                                <div className="flex flex-col items-center lg:items-start">
                                    <span className="text-white font-bold text-xl">20+</span>
                                    <span className="text-white/25 text-[9px] uppercase tracking-widest font-medium">Projects</span>
                                </div>
                                <div className="w-px h-10 bg-white/[0.06]"></div>
                                <div className="flex flex-col items-center lg:items-start">
                                    <span className="text-white font-bold text-xl">AI/ML</span>
                                    <span className="text-white/25 text-[9px] uppercase tracking-widest font-medium">Specialization</span>
                                </div>
                                <div className="w-px h-10 bg-white/[0.06]"></div>
                                <div className="flex flex-col items-center lg:items-start">
                                    <span className="text-white font-bold text-xl">Full-Stack</span>
                                    <span className="text-white/25 text-[9px] uppercase tracking-widest font-medium">Development</span>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}
