import React from 'react';

export default function Education() {
    return (
        <section id="education" className="py-16 px-4 sm:px-6 scroll-mt-24" data-animate>
            <div className="space-y-8 reveal transition-all duration-1000 ease-[cubic-bezier(0.16,1,0.3,1)]">
                {/* Section Header - consistent with other sections */}
                <div>
                    <h2 className="text-3xl sm:text-4xl font-bold text-white mb-3">Education</h2>
                    <p className="text-white/50 text-sm sm:text-base">Academic foundation in Computer Science & AI.</p>
                </div>

                {/* Education Card */}
                <div className="group relative p-5 sm:p-6 rounded-2xl border border-white/[0.06] bg-white/[0.02] hover:border-[#00FF7F]/20 hover:bg-white/[0.04] transition-all duration-500">
                    <span className="inline-block text-[11px] text-white/30 font-medium tracking-wide mb-3">
                        2023 — 2027
                    </span>
                    <h3 className="text-lg sm:text-xl font-bold text-white mb-1 group-hover:text-[#00FF7F] transition-colors duration-300">
                        BS Computer Science
                    </h3>
                    <p className="text-[#00FF7F]/70 text-sm font-medium mb-3">University of Central Punjab</p>
                    <p className="text-white/50 text-sm leading-relaxed">
                        Focusing on Artificial Intelligence and Machine Learning. Current CGPA: <span className="text-white font-semibold">3.77 / 4.0</span>
                    </p>

                    {/* Left accent bar on hover */}
                    <div className="absolute left-0 top-6 bottom-6 w-[2px] rounded-full bg-gradient-to-b from-[#00FF7F]/40 via-[#00FF7F]/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                </div>
            </div>
        </section>
    );
}
