'use client';

import React, { useState } from 'react';
import clsx from 'clsx';

const projects = {
    rag: {
        industry: 'Enterprise Solutions',
        title: 'Intelligent RAG System',
        year: '2024',
        description: 'Engineering high-precision retrieval-augmented systems for compliance and knowledge management, featuring semantic search, metadata filtering, and automated citations.',
        tech: ['LangChain', 'Pinecone', 'GPT-4 Turbo', 'Cloud Infrastructure'],
        outcomes: [
            { title: '⬆ Retrieval Efficiency +63%', desc: 'Optimized hybrid search & reranking.' },
            { title: '⬇ Manual Review -41%', desc: 'Scalable automated verification layer.' }
        ]
    },
    agent: {
        industry: 'Process Automation',
        title: 'Agentic Workflow Network',
        year: '2023',
        description: 'Designed a multi-agent orchestration framework that streamlines complex research and execution tasks through autonomous AI collaboration and human-in-the-loop oversight.',
        tech: ['LangGraph', 'CrewAI', 'PostgreSQL', 'Python'],
        outcomes: [
            { title: '75% Faster Delivery Cycle', desc: 'Parallel process automation.' },
            { title: 'Robust Governance Layer', desc: 'Error handling & audit transparency.' }
        ]
    },
    multimodal: {
        industry: 'Creator Economy',
        title: 'Multimodal Content Copilot',
        year: '2023',
        description: 'Developed a unified productivity suite that leverages multimodal models to generate high-quality text, visuals, and code snippets aligned with brand guidelines.',
        tech: ['Claude 3', 'Stable Diffusion', 'TypeScript', 'Node.js'],
        outcomes: [
            { title: '4x Productivity Boost', desc: 'Accelerated asset generation.' },
            { title: 'Seamless Developer Handoff', desc: 'Auto-generated documentation & assets.' }
        ]
    },
    eval: {
        industry: 'Quality Assurance',
        title: 'Enterprise AI Eval Platform',
        year: '2022',
        description: 'Built a comprehensive LLMOps suite for regression testing, drift detection, and hallucination monitoring to ensure model safety and performance in production.',
        tech: ['Weights & Biases', 'MLflow', 'Pytest', 'Cloud Monitoring'],
        outcomes: [
            { title: '55% Improvement in Accuracy', desc: 'Systematic benchmark testing.' },
            { title: 'Regulatory Compliance Ready', desc: 'Explainability & bias mitigation reports.' }
        ]
    }
};

type ProjectKey = keyof typeof projects;

export default function Projects() {
    const [activeProject, setActiveProject] = useState<ProjectKey>('rag');
    const data = projects[activeProject];

    return (
        <section id="projects" className="py-12 px-4 sm:px-6 scroll-mt-24" data-animate>
            <div className="w-full reveal transition-all duration-1000 ease-[cubic-bezier(0.16,1,0.3,1)]">
                <div className="flex flex-col gap-3 mb-6">
                    <p className="inline-flex items-center gap-2 px-3 py-1 rounded-full border border-white/10 bg-white/5 text-[0.8rem] text-[#96a2b6] tracking-wide uppercase">
                        Case Studies
                    </p>
                    <h2 className="text-3xl font-semibold">Strategic AI Implementations.</h2>
                </div>
                <div className="grid xl:grid-cols-5 gap-4">

                    {/* Project List */}
                    <div className="glass-panel p-3 xl:col-span-2 flex flex-col gap-2 border border-white/10 rounded-2xl shadow-[0_20px_60px_rgba(0,0,0,0.45)] backdrop-blur-2xl">
                        {Object.entries(projects).map(([key, p]) => (
                            <div
                                key={key}
                                onClick={() => setActiveProject(key as ProjectKey)}
                                className={clsx(
                                    "cursor-pointer p-3 rounded-xl border border-transparent hover:bg-white/5 hover:border-white/5 transition-all duration-300",
                                    activeProject === key && "bg-white/5 border-[rgba(0,255,127,0.25)]"
                                )}
                            >
                                <p className="text-xs text-white/50">{p.industry}</p>
                                <h3 className={clsx("text-lg font-semibold transition-colors duration-300", activeProject === key && "text-[#00FF7F]")}>
                                    {p.title}
                                </h3>
                                <p className="text-white/60 text-xs">{(p.industry === 'Enterprise Solutions' ? 'Knowledge Retrieval Systems' : p.industry === 'Process Automation' ? 'Autonomous Workflow Design' : p.industry === 'Creator Economy' ? 'Cross-Modal AI Generation' : 'Rigorous Model Benchmarking')}</p>
                            </div>
                        ))}
                    </div>

                    {/* Project Details */}
                    <div className="glass-panel p-5 xl:col-span-3 space-y-3 border border-white/10 rounded-2xl shadow-[0_20px_60px_rgba(0,0,0,0.45)] backdrop-blur-2xl">
                        <div className="flex items-center justify-between">
                            <div>
                                <p className="text-xs text-white/50">{data.industry}</p>
                                <h3 className="text-xl font-semibold">{data.title}</h3>
                            </div>
                            <span className="text-white/60 text-xs">{data.year}</span>
                        </div>
                        <p className="text-white/70 text-sm">
                            {data.description}
                        </p>
                        <div className="flex flex-wrap gap-2">
                            {data.tech.map(t => (
                                <span key={t} className="px-3 py-1 rounded-full text-sm bg-white/10">{t}</span>
                            ))}
                        </div>
                        <div className="grid sm:grid-cols-2 gap-3 text-white/70 text-xs">
                            <div className="p-3 rounded-xl bg-white/5">
                                <p className="text-white font-semibold">{data.outcomes[0].title}</p>
                                <p>{data.outcomes[0].desc}</p>
                            </div>
                            <div className="p-3 rounded-xl bg-white/5">
                                <p className="text-white font-semibold">{data.outcomes[1].title}</p>
                                <p>{data.outcomes[1].desc}</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}
