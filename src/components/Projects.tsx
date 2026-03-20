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
        github: 'https://github.com/itxmjr/LLM-From-Scratch',
        live: '#',
        image: '/llm-from-scratch.png',
        outcomes: [
            { title: 'Transformer Architecture', desc: 'Custom implementation of self-attention mechanisms.' },
            { title: 'Efficiency Optimized', desc: 'Leveraged CUDA for hardware-accelerated training.' }
        ]
    },
    musicGen: {
        industry: 'Audio AI',
        title: 'AI Music Generator',
        year: '2025',
        description: 'An AI-powered music composition app with a FastAPI backend and Next.js frontend. Leverages LSTM neural networks to learn musical patterns and generate original compositions as downloadable MIDI files, with an intuitive mood-based generation interface.',
        tech: ['FastAPI', 'PyTorch', 'Next.js', 'Tone.js'],
        github: 'https://github.com/itxmjr/Music-Generator',
        live: 'https://mymusicgen.vercel.app',
        image: '/mymusicgen.png',
        outcomes: [
            { title: 'Mood-Based Composition', desc: 'Select from moods like Energetic, Melancholic, or Cyberpunk.' },
            { title: 'MIDI Export', desc: 'Instantly download creations as standard MIDI files.' }
        ]
    },
    chatbot: {
        industry: 'Artificial Intelligence',
        title: 'Knowledge Assistant',
        year: '2025',
        description: 'An intelligent FAQ chatbot powered by Natural Language Understanding. Uses tokenization, n-gram analysis, TF-IDF vectorization, and cosine similarity to accurately match user queries against a customizable JSON knowledge base via a RESTful API.',
        tech: ['Python', 'FastAPI', 'Scikit-Learn', 'NLTK'],
        github: 'https://github.com/itxmjr/Knowledge-Assistant',
        live: 'https://itxmjr-knowledge-assistant.hf.space/',
        image: '/knowledge-assistant.png',
        outcomes: [
            { title: 'High Accuracy Matching', desc: 'Powered by TF-IDF vectorization and cosine similarity.' },
            { title: 'RESTful Endpoints', desc: 'Optimized for modern frontend integrations.' }
        ]
    },
    translator: {
        industry: 'Natural Language Processing',
        title: 'Language Translator',
        year: '2025',
        description: 'A full-stack translation app built with FastAPI and Next.js. Supports 30+ languages with real-time Google Translate API integration and Text-to-Speech playback via gTTS. Containerized with Docker and deployed on Hugging Face Spaces.',
        tech: ['FastAPI', 'Next.js', 'gTTS', 'Docker'],
        github: 'https://github.com/itxmjr/Language-Translator',
        live: 'https://itxmjr-language-translator.hf.space/',
        image: '/language-translator.png',
        outcomes: [
            { title: '30+ Languages Supported', desc: 'Seamless translation between global languages.' },
            { title: 'Integrated TTS', desc: 'Listen to translations with a single click.' }
        ]
    },
    stockForecast: {
        industry: 'Financial Technology',
        title: 'Stock Price Forecast',
        year: '2024',
        description: 'A robust machine learning application designed to predict the next day\'s closing stock price using Random Forest and Linear Regression models.',
        tech: ['Python', 'Scikit-Learn', 'Pandas', 'yfinance'],
        github: 'https://github.com/itxmjr/Stock-Price-Forecast',
        live: '#',
        image: '/stock-price-forecast.png',
        outcomes: [
            { title: 'Automated Data Pipeline', desc: 'Seamlessly downloads historical stock data.' },
            { title: '96% Accuracy (LR)', desc: 'Achieved high R² scores on historical market data.' }
        ]
    },
    dataAnalysis: {
        industry: 'Data Analysis',
        title: 'Exploratory Data Analysis',
        year: '2024',
        description: 'A comprehensive data analysis project that explores and visualizes various datasets to extract meaningful insights. The project covers data cleaning, preprocessing, exploratory data analysis, and visualization.',
        tech: ['Python', 'Pandas', 'Matplotlib', 'Seaborn'],
        github: 'https://github.com/itxmjr/Exploratory-Data-Analysis',
        live: '#',
        image: '/exploratory-data-analysis.png',
        outcomes: [
            { title: 'Data Cleaning', desc: 'Cleaned and preprocessed raw data to ensure data quality.' },
            { title: 'Data Visualization', desc: 'Visualized data to extract meaningful insights.' }
        ]
    }
};

type ProjectKey = keyof typeof projects;

export default function Projects() {
    const [activeProject, setActiveProject] = useState<ProjectKey>('llmFromScratch');
    const [isImageLoading, setIsImageLoading] = useState(true);
    const data = projects[activeProject];

    const handleProjectChange = (key: ProjectKey) => {
        if (key !== activeProject) {
            setIsImageLoading(true);
            setActiveProject(key);
        }
    };

    return (
        <section id="projects" className="py-16 px-4 sm:px-6 scroll-mt-24" data-animate>
            <div className="reveal transition-all duration-1000 ease-[cubic-bezier(0.16,1,0.3,1)]">
                {/* Section Header */}
                <div className="mb-8">
                    <h2 className="text-3xl sm:text-4xl font-bold text-white mb-3">Featured Projects</h2>
                    <p className="text-white/50 text-sm sm:text-base max-w-xl">Strategic AI implementations showcasing end-to-end engineering.</p>
                </div>

                <div className="grid lg:grid-cols-5 gap-4">

                    {/* Project List */}
                    <div className="lg:col-span-2 flex flex-col">
                        <div className="flex flex-col gap-2 lg:max-h-[480px] lg:overflow-y-auto custom-scrollbar lg:pr-2 lg:pb-6">
                            {Object.entries(projects).map(([key, p]) => (
                                <React.Fragment key={key}>
                                    <div
                                        onClick={() => handleProjectChange(key as ProjectKey)}
                                        className={clsx(
                                            "cursor-pointer p-4 rounded-xl border transition-all duration-300 group",
                                            activeProject === key
                                                ? "bg-white/[0.06] border-[#00FF7F]/20 shadow-[0_0_20px_rgba(0,255,127,0.06)]"
                                                : "border-white/[0.04] hover:bg-white/[0.03] hover:border-white/10"
                                        )}
                                    >
                                        <div className="flex justify-between items-start mb-1">
                                            <p className="text-[10px] text-[#00FF7F]/80 uppercase tracking-widest font-bold">{p.industry}</p>
                                            <span className="text-[10px] text-white/20 font-medium">{p.year}</span>
                                        </div>
                                        <h3 className={clsx(
                                            "text-sm font-bold transition-colors duration-300",
                                            activeProject === key ? "text-white" : "text-white/50 group-hover:text-white/80"
                                        )}>
                                            {p.title}
                                        </h3>
                                        <p className="text-white/30 text-[10px] mt-1 line-clamp-1">
                                            {p.tech.join(' · ')}
                                        </p>
                                    </div>

                                    {/* Inline detail for mobile */}
                                    {activeProject === key && (
                                        <div className="lg:hidden border border-white/[0.06] rounded-xl overflow-hidden bg-white/[0.02] animate-in slide-in-from-top-2 duration-300">
                                            <div className="relative h-[160px] w-full overflow-hidden border-b border-white/[0.06] group">
                                                {isImageLoading && <div className="absolute inset-0 shimmer z-10" />}
                                                <Image
                                                    src={p.image}
                                                    alt={p.title}
                                                    fill
                                                    priority
                                                    className={clsx(
                                                        "object-cover transition-opacity duration-300",
                                                        isImageLoading ? "opacity-0" : "opacity-100"
                                                    )}
                                                    onLoad={() => setIsImageLoading(false)}
                                                />
                                                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/30 to-transparent"></div>
                                                <div className="absolute bottom-3 left-4 right-4 flex gap-2">
                                                    <a href={p.github} target="_blank" rel="noopener noreferrer" className="flex items-center gap-1.5 px-3 py-1.5 bg-white/10 hover:bg-white/20 backdrop-blur-md border border-white/10 rounded-lg text-[10px] font-semibold text-white transition-all">
                                                        <Github size={12} /> Source
                                                    </a>
                                                    {p.live && p.live !== '#' && (
                                                        <a href={p.live} target="_blank" rel="noopener noreferrer" className="flex items-center gap-1.5 px-3 py-1.5 bg-[#00FF7F]/15 hover:bg-[#00FF7F]/25 backdrop-blur-md border border-[#00FF7F]/20 rounded-lg text-[10px] font-semibold text-[#00FF7F] transition-all">
                                                            <ExternalLink size={12} /> Demo
                                                        </a>
                                                    )}
                                                </div>
                                            </div>
                                            <div className="p-4 space-y-3">
                                                <div className="space-y-1">
                                                    <div className="flex items-center gap-2 text-[#00FF7F]/70">
                                                        <Code2 size={13} />
                                                        <span className="text-[9px] font-bold uppercase tracking-wider">{p.industry}</span>
                                                    </div>
                                                    <h3 className="text-lg font-bold text-white tracking-tight">{p.title}</h3>
                                                </div>
                                                <p className="text-white/50 text-xs leading-relaxed">{p.description}</p>
                                                <div className="flex flex-wrap gap-1.5">
                                                    {p.tech.map(t => (
                                                        <span key={t} className="px-2.5 py-0.5 rounded-full text-[9px] font-semibold bg-white/[0.04] border border-white/[0.08] text-white/60 uppercase tracking-wider">{t}</span>
                                                    ))}
                                                </div>
                                                <div className="grid grid-cols-2 gap-2 pt-3 border-t border-white/[0.04]">
                                                    {p.outcomes.map((outcome, idx) => (
                                                        <div key={idx} className="p-2.5 rounded-xl bg-white/[0.02] border border-white/[0.06]">
                                                            <p className="text-[#00FF7F]/80 text-[9px] font-bold mb-0.5 uppercase tracking-wider">{outcome.title}</p>
                                                            <p className="text-white/40 text-[10px] leading-relaxed">{outcome.desc}</p>
                                                        </div>
                                                    ))}
                                                </div>
                                            </div>
                                        </div>
                                    )}
                                </React.Fragment>
                            ))}
                        </div>
                    </div>

                    {/* Project Details */}
                    <div className="hidden lg:block lg:col-span-3">
                        <div className="border border-white/[0.06] rounded-2xl overflow-hidden bg-white/[0.02] flex flex-col h-full">
                            {/* Project Image */}
                            <div className="relative h-[180px] shrink-0 w-full overflow-hidden border-b border-white/[0.06] group">
                                {isImageLoading && <div className="absolute inset-0 shimmer z-10" />}
                                <Image
                                    src={data.image}
                                    alt={data.title}
                                    fill
                                    priority
                                    quality={100}
                                    className={clsx(
                                        "object-cover transition-all duration-700 group-hover:scale-105",
                                        isImageLoading ? "opacity-0" : "opacity-100"
                                    )}
                                    onLoad={() => setIsImageLoading(false)}
                                />
                                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/30 to-transparent"></div>
                                <div className="absolute bottom-3 left-4 right-4 flex gap-2">
                                    <a
                                        href={data.github}
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        className="flex items-center gap-1.5 px-3 py-1.5 bg-white/10 hover:bg-white/20 backdrop-blur-md border border-white/10 rounded-lg text-[10px] font-semibold text-white transition-all hover:-translate-y-0.5"
                                    >
                                        <Github size={12} />
                                        Source
                                    </a>
                                    {data.live && data.live !== '#' && (
                                        <a
                                            href={data.live}
                                            target="_blank"
                                            rel="noopener noreferrer"
                                            className="flex items-center gap-1.5 px-3 py-1.5 bg-[#00FF7F]/15 hover:bg-[#00FF7F]/25 backdrop-blur-md border border-[#00FF7F]/20 rounded-lg text-[10px] font-semibold text-[#00FF7F] transition-all hover:-translate-y-0.5"
                                        >
                                            <ExternalLink size={12} />
                                            Demo
                                        </a>
                                    )}
                                </div>
                            </div>

                            <div className="p-5 overflow-y-auto flex-grow space-y-4 custom-scrollbar">
                                <div className="space-y-1">
                                    <div className="flex items-center gap-2 text-[#00FF7F]/70">
                                        <Code2 size={13} />
                                        <span className="text-[9px] font-bold uppercase tracking-wider">{data.industry}</span>
                                    </div>
                                    <h3 className="text-xl font-bold text-white tracking-tight">{data.title}</h3>
                                </div>

                                <p className="text-white/50 text-xs leading-relaxed">
                                    {data.description}
                                </p>

                                <div className="flex flex-wrap gap-1.5">
                                    {data.tech.map(t => (
                                        <span key={t} className="px-2.5 py-0.5 rounded-full text-[9px] font-semibold bg-white/[0.04] border border-white/[0.08] text-white/60 uppercase tracking-wider">{t}</span>
                                    ))}
                                </div>

                                <div className="grid sm:grid-cols-2 gap-3 pt-4 border-t border-white/[0.04]">
                                    {data.outcomes.map((outcome, idx) => (
                                        <div key={idx} className="p-3 rounded-xl bg-white/[0.02] border border-white/[0.06] hover:border-[#00FF7F]/15 transition-colors duration-300">
                                            <p className="text-[#00FF7F]/80 text-[9px] font-bold mb-0.5 uppercase tracking-wider">{outcome.title}</p>
                                            <p className="text-white/40 text-[10px] leading-relaxed">{outcome.desc}</p>
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
