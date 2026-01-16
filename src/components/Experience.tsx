'use client';

import React, { useEffect, useRef, useState } from 'react';

function useCounter(target: number, duration: number = 2000) {
    const [count, setCount] = useState(0);
    const elementRef = useRef<HTMLDivElement>(null);

    useEffect(() => {
        const element = elementRef.current; // Copy ref value to a variable
        const observer = new IntersectionObserver(
            (entries) => {
                if (entries[0].isIntersecting) {
                    let start = 0;
                    const increment = target / (duration / 20); // updates every 20ms

                    const timer = setInterval(() => {
                        start += increment;
                        if (start >= target) {
                            setCount(target);
                            clearInterval(timer);
                        } else {
                            setCount(Math.round(start));
                        }
                    }, 20);

                    if (element) {
                        observer.unobserve(element);
                    }
                }
            },
            { threshold: 0.4 }
        );

        if (element) {
            observer.observe(element);
        }

        return () => {
            if (element) {
                observer.unobserve(element);
            }
        };
    }, [target, duration]);

    return { count, elementRef };
}

function StatCard({ target, label }: { target: number; label: string }) {
    const { count, elementRef } = useCounter(target);

    return (
        <div ref={elementRef} className="glass-panel p-4 border border-white/10 text-center rounded-2xl shadow-[0_20px_60px_rgba(0,0,0,0.45)]">
            <div className="font-mono font-bold text-[clamp(1.8rem,3vw,2.5rem)] text-[#00FF7F]">
                {count}
            </div>
            <p className="text-white/50 text-xs uppercase tracking-wider">{label}</p>
        </div>
    );
}

export default function Experience() {
    return (
        <section id="experience" className="py-12 px-4 sm:px-6 scroll-mt-24" data-animate>
            <div className="space-y-10 reveal transition-all duration-1000 ease-[cubic-bezier(0.16,1,0.3,1)]">
                <div>
                    <p className="inline-flex items-center gap-2 px-3 py-1 rounded-full border border-white/10 bg-white/5 text-[0.85rem] text-[#96a2b6] tracking-wide uppercase">
                        Experience
                    </p>
                    <h2 className="text-4xl font-semibold mt-4">2 Years of engineering intelligent solutions.</h2>
                    <p className="text-white/70 mt-4">
                        Proven track record in building LLM systems, Generative AI models, and RAG pipelines. Specialized in bridging the gap between sophisticated AI models and user-centric, production-ready applications.
                    </p>
                </div>

                {/* Hero Stats */}
                <div className="grid sm:grid-cols-3 gap-4">
                    <StatCard target={10} label="Solutions Shipped" />
                    <StatCard target={5} label="Featured Demos" />
                    <StatCard target={3} label="AI Internships" />
                </div>

                {/* Timeline */}
                <div className="relative glass-panel p-6 border border-white/10 rounded-3xl shadow-[0_20px_60px_rgba(0,0,0,0.45)] timeline after:content-[''] after:absolute after:top-6 after:bottom-6 after:left-[35px] after:w-0.5 after:bg-white/10">
                    <div className="space-y-8">
                        <div className="flex gap-4 relative z-10">
                            <div className="mt-2 w-2.5 h-2.5 bg-[#00FF7F] rounded-full shadow-[0_0_10px_rgba(0,255,127,0.5)] shrink-0 ml-[4px]"></div>
                            <div>
                                <p className="text-sm text-white/40">2024 · Present</p>
                                <h3 className="text-xl font-semibold">AI Engineer & Founder · AI by MJR</h3>
                                <p className="text-white/70 text-sm">
                                    Building LLM systems, RAG pipelines, and agentic workflows. Focused on transformer architectures and generative NLP research prototypes.
                                </p>
                            </div>
                        </div>
                        <div className="flex gap-4 relative z-10">
                            <div className="mt-2 w-2.5 h-2.5 bg-[#00FF7F] rounded-full shadow-[0_0_10px_rgba(0,255,127,0.5)] shrink-0 ml-[4px]"></div>
                            <div>
                                <p className="text-sm text-white/40">2025 · Present</p>
                                <h3 className="text-xl font-semibold">AI Intern · CodeAlpha & DevelopersHub</h3>
                                <p className="text-white/70 text-sm">
                                    Developing real-time object detection, language translators, and LLM-based automation workflows. Working on embeddings pipelines and vector search optimization.
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}
