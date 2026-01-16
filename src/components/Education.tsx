import React from 'react';

export default function Education() {
    return (
        <section id="education" className="py-12 px-4 sm:px-6 scroll-mt-24" data-animate>
            <div className="space-y-10 reveal transition-all duration-1000 ease-[cubic-bezier(0.16,1,0.3,1)]">
                <div className="flex flex-col gap-2 items-center text-center">
                    <p className="inline-flex items-center gap-2 px-3 py-1 rounded-full border border-white/10 bg-white/5 text-[0.85rem] text-[#96a2b6] tracking-wide uppercase">
                        Academia
                    </p>
                    <h2 className="text-3xl font-semibold">Foundations</h2>
                </div>
                <div className="grid gap-6 relative">
                    <div className="glass-panel p-6 border border-white/10 rounded-3xl shadow-[0_20px_60px_rgba(0,0,0,0.45)] backdrop-blur-2xl hover:border-[#00FF7F]/30 transition-colors duration-300 relative group">
                        <span className="inline-block px-3 py-1 rounded-full bg-white/5 text-xs text-white/50 mb-4">2023 — 2027</span>
                        <h3 className="text-xl font-bold text-white mb-1">BS Computer Science</h3>
                        <p className="text-[#00FF7F] font-medium mb-3">University of Central Punjab</p>
                        <p className="text-white/60 text-xs leading-relaxed">Focusing on Artificial Intelligence and Machine Learning. Current CGPA: 3.77 / 4.0.</p>
                    </div>
                </div>
            </div>
        </section>
    );
}
