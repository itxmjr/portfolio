import React from 'react';

const testimonials = [
    {
        quote: "MJR delivered an exceptional AI chatbot that transformed our customer support. His deep understanding of NLP and clean code made the integration seamless.",
        name: "Sarah Chen",
        role: "CTO @ TechFlow",
        initials: "SC",
    },
    {
        quote: "Working with MJR was a game-changer. He built a custom ML pipeline that cut our data processing time by 60%. Highly recommend for any AI project.",
        name: "David Park",
        role: "Founder @ DataScale",
        initials: "DP",
    },
    {
        quote: "Professional, responsive, and technically brilliant. MJR's music generation tool exceeded our expectations in both quality and delivery time.",
        name: "Emma Rodriguez",
        role: "Product Lead @ SoundAI",
        initials: "ER",
    },
];

export default function Testimonials() {
    return (
        <section id="testimonials" className="mb-16 scroll-mt-24 md:mb-24 lg:mb-32 lg:scroll-mt-32 px-4 sm:px-6" data-animate>
            <div className="reveal transition-all duration-1000 ease-[cubic-bezier(0.16,1,0.3,1)]">
                <h2 className="text-3xl sm:text-4xl font-bold text-white mb-8">What Clients Say</h2>
                <div className="space-y-4">
                    {testimonials.map((t) => (
                        <div
                            key={t.name}
                            className="p-5 sm:p-6 border border-white/[0.06] rounded-2xl bg-white/[0.02]"
                        >
                            <span className="text-[#00FF7F] text-2xl leading-none font-serif">&ldquo;</span>
                            <p className="text-white/70 text-sm leading-relaxed mt-1 mb-4">
                                {t.quote}
                            </p>
                            <div className="flex items-center gap-3">
                                <div className="w-8 h-8 rounded-full bg-[#00FF7F]/10 border border-[#00FF7F]/20 flex items-center justify-center text-[#00FF7F] text-xs font-semibold">
                                    {t.initials}
                                </div>
                                <div>
                                    <p className="text-white text-sm font-medium">{t.name}</p>
                                    <p className="text-white/40 text-xs">{t.role}</p>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}
