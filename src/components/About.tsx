import React from 'react';
import Image from 'next/image';

export default function About() {
    return (
        <section id="about" className="mb-4 px-4 sm:px-6" data-animate>
            <div className="reveal transition-all duration-1000 ease-[cubic-bezier(0.16,1,0.3,1)]">
                <div className="glass-panel p-6 md:p-8 border border-white/10 rounded-3xl shadow-[0_20px_60px_rgba(0,0,0,0.45)] overflow-hidden">
                    <div className="flex flex-col items-center text-center">
                        <div className="relative mb-6 group">
                            <div className="absolute -inset-1 bg-gradient-to-r from-[#00FF7F] to-cyan-400 rounded-3xl blur opacity-25 group-hover:opacity-50 transition duration-1000 group-hover:duration-200"></div>
                            <Image
                                src="/Image.png"
                                alt="M Jawad ur Rehman"
                                width={192}
                                height={192}
                                className="relative w-40 h-40 md:w-48 md:h-48 rounded-2xl object-cover border-2 border-white/10 shadow-2xl"
                            />
                        </div>
                        <div className="space-y-4 max-w-2xl">
                            <h2 className="text-2xl font-semibold bg-clip-text text-transparent bg-gradient-to-r from-white to-white/60">
                                Bridging Technology & Strategy.
                            </h2>
                            <div className="space-y-3 text-white/70 text-sm leading-relaxed">
                                <p>
                                    I am a full-stack engineer and AI strategist dedicated to building tools that amplify <span className="text-[#00FF7F]">Human Productivity</span>. I believe AI should be a robust partner in complex decision-making, moving beyond simple automation to true intelligent assistance.
                                </p>
                                <p>
                                    My focus is on the critical &quot;last mile&quot; of AI development—transforming sophisticated models into secure, reliable, and user-centric applications. Whether it&apos;s architecting multi-agent workflows or optimizing RAG pipelines, I ensure every solution is built for scale and business value.
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}
