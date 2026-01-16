'use client';

import React, { useState } from 'react';
import Image from 'next/image';
import { Github, ExternalLink, Code2 } from 'lucide-react';
import clsx from 'clsx';

const projects = {
    llmFromScratch: {
        industry: 'Generative AI',
        title: 'LLM From Scratch',
        year: '2025',
        description: 'A deep dive into the architecture of Large Language Models. Built a transformer-based LLM from the ground up, implementing multi-head attention, positional encoding, and layer normalization. Focused on understanding the mathematical foundations of modern generative AI.',
        tech: ['Python', 'PyTorch', 'NumPy', 'CUDA'],
        github: 'https://github.com/itxmjr',
        live: '#',
        image: '/mock-project.png',
        outcomes: [
            { title: 'Transformer Architecture', desc: 'Custom implementation of self-attention mechanisms.' },
            { title: 'Efficiency Optimized', desc: 'Leveraged CUDA for hardware-accelerated training.' }
        ]
    },
    musicGen: {
        industry: 'Audio AI',
        title: 'Music Generator',
        year: '2025',
        description: 'A powerful AI-based music composition tool featuring a robust FastAPI backend and a modern Next.js frontend. This project uses LSTM neural networks to create unique musical pieces and offers a sleek, mood-based generation UI.',
        tech: ['FastAPI', 'PyTorch', 'Next.js', 'LSTM'],
        github: 'https://github.com/itxmjr',
        live: '#',
        image: '/mock-project.png',
        outcomes: [
            { title: 'Mood-Based Composition', desc: 'Select from moods like Energetic, Melancholic, or Cyberpunk.' },
            { title: 'MIDI Export', desc: 'Instantly download creations as standard MIDI files.' }
        ]
    },
    translator: {
        industry: 'Natural Language Processing',
        title: 'Language Translator',
        year: '2025',
        description: 'A real-time translation application built with Python (FastAPI) and Next.js. Supports over 30 global languages and features integrated Text-to-Speech (TTS) capabilities.',
        tech: ['FastAPI', 'Next.js', 'gTTS', 'Docker'],
        github: 'https://github.com/itxmjr',
        live: '#',
        image: '/mock-project.png',
        outcomes: [
            { title: '30+ Languages Supported', desc: 'Seamless translation between global languages.' },
            { title: 'Integrated TTS', desc: 'Listen to translations with a single click.' }
        ]
    },
    chatbot: {
        industry: 'Artificial Intelligence',
        title: 'Knowledge Assistant',
        year: '2025',
        description: 'A smart, lightweight knowledge assistant backend using TF-IDF and Cosine Similarity to accurately match user queries against a predefined knowledge base.',
        tech: ['Python', 'FastAPI', 'Scikit-Learn', 'NLTK'],
        github: 'https://github.com/itxmjr',
        live: '#',
        image: '/mock-project.png',
        outcomes: [
            { title: 'High Accuracy Matching', desc: 'Powered by TF-IDF vectorization and cosine similarity.' },
            { title: 'RESTful Endpoints', desc: 'Optimized for modern frontend integrations.' }
        ]
    },
    stockForecast: {
        industry: 'Financial Technology',
        title: 'Stock Price Forecast',
        year: '2024',
        description: 'A robust machine learning application designed to predict the next day\'s closing stock price using Random Forest and Linear Regression models.',
        tech: ['Python', 'Scikit-Learn', 'Pandas', 'yfinance'],
        github: 'https://github.com/itxmjr',
        live: '#',
        image: '/mock-project.png',
        outcomes: [
            { title: 'Automated Data Pipeline', desc: 'Seamlessly downloads historical stock data.' },
            { title: '96% Accuracy (LR)', desc: 'Achieved high R² scores on historical market data.' }
        ]
    }
};

type ProjectKey = keyof typeof projects;

export default function Projects() {
    const [activeProject, setActiveProject] = useState<ProjectKey>('llmFromScratch');
    const data = projects[activeProject];

    return (
        <section id="projects" className="py-12 px-4 sm:px-6 scroll-mt-24" data-animate>
            <div className="w-full reveal transition-all duration-1000 ease-[cubic-bezier(0.16,1,0.3,1)]">
                <div className="flex flex-col gap-3 mb-6">
                    <p className="inline-flex items-center gap-2 px-3 py-1 rounded-full border border-white/10 bg-white/5 text-[0.8rem] text-[#96a2b6] tracking-wide uppercase">
                        Case Studies
                    </p>
                    <h2 className="text-3xl font-semibold text-white">Strategic AI Implementations.</h2>
                </div>
                <div className="grid xl:grid-cols-5 gap-6 h-auto xl:h-[500px]">

                    {/* Project List */}
                    <div className="xl:col-span-2 flex flex-col h-full overflow-hidden">
                        <div className="glass-panel flex-grow overflow-y-auto custom-scrollbar p-2 flex flex-col gap-2 border border-white/10 rounded-2xl shadow-2xl backdrop-blur-2xl bg-white/[0.02]">
                            {Object.entries(projects).map(([key, p]) => (
                                <div
                                    key={key}
                                    onClick={() => setActiveProject(key as ProjectKey)}
                                    className={clsx(
                                        "cursor-pointer p-4 rounded-xl border transition-all duration-300 group shrink-0",
                                        activeProject === key
                                            ? "bg-white/10 border-[#00FF7F]/30 shadow-[0_0_20px_rgba(0,255,127,0.1)]"
                                            : "border-transparent hover:bg-white/5 hover:border-white/10"
                                    )}
                                >
                                    <div className="flex justify-between items-start mb-0.5">
                                        <p className="text-[9px] text-[#00FF7F] uppercase tracking-widest font-bold">{p.industry}</p>
                                        <span className="text-[9px] text-white/30 font-medium">{p.year}</span>
                                    </div>
                                    <h3 className={clsx(
                                        "text-base font-bold transition-colors duration-300",
                                        activeProject === key ? "text-white" : "text-white/60 group-hover:text-white/90"
                                    )}>
                                        {p.title}
                                    </h3>
                                    <p className="text-white/40 text-[10px] mt-0.5 line-clamp-1">
                                        {p.tech.join(' • ')}
                                    </p>
                                </div>
                            ))}
                        </div>
                    </div>

                    {/* Project Details */}
                    <div className="xl:col-span-3 h-full">
                        <div className="glass-panel border border-white/10 rounded-2xl shadow-2xl overflow-hidden flex flex-col h-full backdrop-blur-3xl bg-white/[0.02]">
                            {/* Project Image Container */}
                            <div className="relative h-[180px] shrink-0 w-full overflow-hidden border-b border-white/10 group">
                                <Image
                                    src={data.image}
                                    alt={data.title}
                                    fill
                                    className="object-cover transition-transform duration-700 group-hover:scale-105"
                                />
                                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent opacity-60"></div>
                                <div className="absolute bottom-3 left-5 right-5 flex justify-between items-end">
                                    <div className="flex gap-2">
                                        <a
                                            href={data.github}
                                            target="_blank"
                                            rel="noopener noreferrer"
                                            className="flex items-center gap-1.5 px-3 py-1.5 bg-white/10 hover:bg-white/20 backdrop-blur-md border border-white/10 rounded-lg text-[10px] font-semibold text-white transition-all hover:translate-y-[-1px]"
                                        >
                                            <Github size={12} />
                                            GitHub
                                        </a>
                                        <a
                                            href={data.live}
                                            target="_blank"
                                            rel="noopener noreferrer"
                                            className="flex items-center gap-1.5 px-3 py-1.5 bg-[#00FF7F]/20 hover:bg-[#00FF7F]/30 backdrop-blur-md border border-[#00FF7F]/30 rounded-lg text-[10px] font-semibold text-[#00FF7F] transition-all hover:translate-y-[-1px]"
                                        >
                                            <ExternalLink size={12} />
                                            Live Demo
                                        </a>
                                    </div>
                                </div>
                            </div>

                            <div className="p-5 overflow-y-auto flex-grow space-y-4 custom-scrollbar">
                                <div className="space-y-1">
                                    <div className="flex items-center gap-2 text-[#00FF7F]">
                                        <Code2 size={14} />
                                        <span className="text-[9px] font-bold uppercase tracking-wider">{data.industry}</span>
                                    </div>
                                    <h3 className="text-xl font-bold text-white tracking-tight">{data.title}</h3>
                                </div>

                                <p className="text-white/60 text-xs leading-relaxed">
                                    {data.description}
                                </p>

                                <div className="flex flex-wrap gap-1.5">
                                    {data.tech.map(t => (
                                        <span key={t} className="px-2 py-0.5 rounded-full text-[8px] font-bold bg-white/5 border border-white/10 text-white/70 uppercase tracking-widest">{t}</span>
                                    ))}
                                </div>

                                <div className="grid sm:grid-cols-2 gap-3 pt-4 border-t border-white/5">
                                    {data.outcomes.map((outcome, idx) => (
                                        <div key={idx} className="p-3 rounded-lg bg-white/[0.03] border border-white/10 hover:border-[#00FF7F]/20 transition-colors">
                                            <p className="text-[#00FF7F] text-[9px] font-bold mb-0.5 uppercase tracking-wider">{outcome.title}</p>
                                            <p className="text-white/50 text-[10px] leading-relaxed">{outcome.desc}</p>
                                        </div>
                                    ))}
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}
