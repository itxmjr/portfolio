'use client';

import React, { useEffect, useRef, useState } from 'react';

function useCounter(target: number, duration: number = 2000) {
    const [count, setCount] = useState(0);
    const elementRef = useRef<HTMLDivElement>(null);

    useEffect(() => {
        const element = elementRef.current;
        const observer = new IntersectionObserver(
            (entries) => {
                if (entries[0].isIntersecting) {
                    let start = 0;
                    const increment = target / (duration / 20);

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
        <div ref={elementRef} className="relative group p-3 sm:p-5 text-center rounded-2xl border border-white/[0.06] bg-white/[0.02] hover:border-[#00FF7F]/20 transition-all duration-500">
            <div className="font-mono font-bold text-[clamp(2rem,3.5vw,2.8rem)] text-[#00FF7F] leading-none mb-1">
                {count}
            </div>
            <p className="text-white/40 text-[9px] sm:text-[10px] uppercase tracking-[0.08em] sm:tracking-[0.15em] font-medium">{label}</p>
            {/* Subtle glow on hover */}
            <div className="absolute inset-0 rounded-2xl bg-[#00FF7F]/[0.02] opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
        </div>
    );
}

const experiences = [
    {
        period: '2024 — Present',
        title: 'AI Engineer & Founder',
        company: 'AI by MJR',
        description: 'Building LLM systems, RAG pipelines, and agentic workflows. Focused on transformer architectures and generative NLP research prototypes.',
        tags: ['LangChain', 'RAG', 'LLMs', 'Agents'],
    },
    {
        period: '2025 — Present',
        title: 'AI Intern',
        company: 'CodeAlpha',
        description: 'Developing real-time object detection and LLM-based automation workflows. Working on embeddings pipelines and vector search optimization.',
        tags: ['PyTorch', 'YOLO', 'Embeddings', 'FastAPI'],
    },
    {
        period: '2025 — Present',
        title: 'AI/ML Intern',
        company: 'DevelopersHub',
        description: 'Building language translators and machine learning models. Working on NLP pipelines and deep learning solutions.',
        tags: ['PyTorch', 'NLP', 'Deep Learning', 'Transformers'],
    },
];

export default function Experience() {
    return (
        <section id="experience" className="py-16 px-4 sm:px-6 scroll-mt-24" data-animate>
            <div className="space-y-10 reveal transition-all duration-1000 ease-[cubic-bezier(0.16,1,0.3,1)]">
                {/* Section Header */}
                <div>
                    <h2 className="text-3xl sm:text-4xl font-bold text-white mb-3">
                        Work Experience
                    </h2>
                    <p className="text-white/50 text-sm sm:text-base leading-relaxed max-w-xl">
                        Proven track record in building LLM systems, Generative AI models, and RAG pipelines. Bridging the gap between AI research and production-ready applications.
                    </p>
                </div>

                {/* Stats Row */}
                <div className="grid grid-cols-3 gap-3 sm:gap-4">
                    <StatCard target={10} label="Solutions Shipped" />
                    <StatCard target={5} label="Featured Demos" />
                    <StatCard target={3} label="AI Internships" />
                </div>

                {/* Timeline */}
                <div className="space-y-4">
                    {experiences.map((exp, idx) => (
                        <div
                            key={idx}
                            className="group relative p-5 sm:p-6 rounded-2xl border border-white/[0.06] bg-white/[0.02] hover:border-[#00FF7F]/20 hover:bg-white/[0.04] transition-all duration-500"
                        >
                            {/* Period badge */}
                            <span className="inline-block text-[11px] text-white/30 font-medium tracking-wide mb-3">
                                {exp.period}
                            </span>

                            <h3 className="text-lg sm:text-xl font-bold text-white mb-0.5 group-hover:text-[#00FF7F] transition-colors duration-300">
                                {exp.title}
                            </h3>
                            <p className="text-[#00FF7F]/70 text-sm font-medium mb-3">
                                {exp.company}
                            </p>
                            <p className="text-white/50 text-sm leading-relaxed mb-4">
                                {exp.description}
                            </p>

                            {/* Tech Tags */}
                            <div className="flex flex-wrap gap-2">
                                {exp.tags.map((tag) => (
                                    <span
                                        key={tag}
                                        className="px-2.5 py-1 rounded-full text-[10px] font-semibold bg-[#00FF7F]/[0.08] border border-[#00FF7F]/[0.12] text-[#00FF7F]/80 uppercase tracking-wider"
                                    >
                                        {tag}
                                    </span>
                                ))}
                            </div>

                            {/* Left accent bar */}
                            <div className="absolute left-0 top-6 bottom-6 w-[2px] rounded-full bg-gradient-to-b from-[#00FF7F]/40 via-[#00FF7F]/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}
