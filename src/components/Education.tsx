import React from 'react';

export default function Education() {
    return (
        <section id="education" className="py-16 px-4 sm:px-6 scroll-mt-24" data-animate>
            <div className="space-y-8 reveal transition-all duration-1000 ease-[cubic-bezier(0.16,1,0.3,1)]">
                {/* Section Header */}
                <div>
                    <h2 className="text-3xl sm:text-4xl font-bold text-white mb-3">Educational Foundations</h2>
                    <p className="text-white/40 text-sm sm:text-base leading-relaxed max-w-xl">
                        Solidifying theoretical knowledge with practical implementation in Computer Science and Machine Learning.
                    </p>
                </div>

                {/* Education Card */}
                <div className="relative p-6 sm:p-7 rounded-2xl border border-white/[0.08] bg-white/[0.03] overflow-hidden">
                    {/* Top row: Degree + Year badge */}
                    <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-2 mb-4">
                        <div>
                            <h3 className="text-xl sm:text-2xl font-bold text-white">
                                BS Computer Science
                            </h3>
                            <p className="text-[#00FF7F] text-sm font-semibold uppercase tracking-wider mt-1">
                                University of Central Punjab
                            </p>
                        </div>
                        <span className="inline-flex items-center px-4 py-1.5 rounded-full border border-white/[0.1] bg-white/[0.04] text-xs text-white/50 font-medium tracking-wide whitespace-nowrap">
                            2023 — 2027
                        </span>
                    </div>

                    {/* Description */}
                    <p className="text-white/45 text-sm leading-relaxed mb-6">
                        Specializing in <span className="text-white font-semibold">Artificial Intelligence</span> and <span className="text-white font-semibold">Agentic Systems</span>. Currently maintaining a rigorous academic standard while leading AI-focused initiatives.
                    </p>

                    {/* Stats Row */}
                    <div className="flex items-center gap-6 pt-5 border-t border-white/[0.06]">
                        <div className="flex flex-col">
                            <span className="text-white font-bold text-lg sm:text-xl">3.77 / 4.0</span>
                            <span className="text-white/25 text-[9px] uppercase tracking-widest font-medium mt-0.5">Current CGPA</span>
                        </div>
                        <div className="w-px h-10 bg-white/[0.06]"></div>
                        <div className="flex flex-col">
                            <span className="text-white font-bold text-lg sm:text-xl">Dean&apos;s List</span>
                            <span className="text-white/25 text-[9px] uppercase tracking-widest font-medium mt-0.5">Academic Honor</span>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}
