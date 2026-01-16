import React from 'react';
import Image from 'next/image';

export default function About() {
    return (
        <section id="about" className="mb-4 px-4 sm:px-6" data-animate>
            <div className="reveal transition-all duration-1000 ease-[cubic-bezier(0.16,1,0.3,1)]">
                <div className="glass-panel p-8 md:p-12 border border-white/10 rounded-3xl shadow-2xl overflow-hidden bg-white/[0.01] backdrop-blur-3xl">
                    <div className="flex flex-col items-center gap-8">
                        {/* Image at the top */}
                        <div className="relative group shrink-0">
                            <div className="absolute -inset-1 bg-gradient-to-r from-[#00FF7F] to-cyan-500 rounded-2xl blur opacity-20 group-hover:opacity-40 transition duration-1000"></div>
                            <Image
                                src="/Image.png"
                                alt="M Jawad ur Rehman"
                                width={224}
                                height={224}
                                className="relative w-40 h-40 md:w-56 md:h-56 rounded-2xl object-cover border border-white/10 shadow-2xl"
                            />
                            <div className="absolute -bottom-2 -right-2 bg-[#00FF7F] text-black px-3 py-1 rounded-lg text-[10px] font-bold uppercase tracking-tighter shadow-xl">
                                Available for Work
                            </div>
                        </div>

                        {/* Text below the image */}
                        <div className="space-y-6 text-center max-w-3xl">
                            <div className="space-y-2">
                                <h2 className="text-3xl md:text-5xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-white via-white to-white/40 leading-tight">
                                    Crafting the Future of <span className="text-[#00FF7F]">Decision Intelligence.</span>
                                </h2>
                                <p className="text-[#00FF7F]/80 text-xs md:text-sm font-bold uppercase tracking-[0.3em]">Full-Stack Engineer & AI Architect</p>
                            </div>

                            <div className="space-y-4 text-white/60 text-sm md:text-lg leading-relaxed">
                                <p>
                                    I am <span className="text-white font-semibold">M Jawad ur Rehman</span>, a developer dedicated to bridging the gap between sophisticated AI models and real-world utility. My work focuses on building tools that don&apos;t just automate tasks, but augment human capability through <span className="text-white">intelligent design</span> and <span className="text-white">robust engineering</span>.
                                </p>
                                <p>
                                    With expertise ranging from <span className="text-[#00FF7F]">Modern Web Architectures</span> to <span className="text-[#00FF7F]">Generative AI Workflows</span>, I specialize in the &quot;last mile&quot; of product development—ensuring that complex backends are translated into seamless, high-performance user experiences.
                                </p>
                            </div>

                            <div className="flex flex-wrap justify-center gap-8 pt-6 border-t border-white/5">
                                <div className="flex flex-col">
                                    <span className="text-white font-bold text-2xl md:text-3xl">20+</span>
                                    <span className="text-white/40 text-[10px] md:text-[11px] uppercase tracking-widest font-medium">Projects Completed</span>
                                </div>
                                <div className="w-[1px] h-12 bg-white/10 hidden sm:block"></div>
                                <div className="flex flex-col">
                                    <span className="text-white font-bold text-2xl md:text-3xl">AI/ML</span>
                                    <span className="text-white/40 text-[10px] md:text-[11px] uppercase tracking-widest font-medium">Specialization</span>
                                </div>
                                <div className="w-[1px] h-12 bg-white/10 hidden sm:block"></div>
                                <div className="flex flex-col">
                                    <span className="text-white font-bold text-2xl md:text-3xl">Full-Stack</span>
                                    <span className="text-white/40 text-[10px] md:text-[11px] uppercase tracking-widest font-medium">Development</span>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}
