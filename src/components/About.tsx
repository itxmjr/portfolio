'use client';

import React, { useState, useRef, useEffect, useCallback } from 'react';
import Image from 'next/image';

// Command responses data
const commandResponses: Record<string, { output: React.ReactNode }> = {
    help: {
        output: (
            <div className="space-y-1">
                <p className="text-[#00FF7F] font-bold mb-2">Available Commands:</p>
                <p><span className="text-[#00FF7F]">whoami</span>    <span className="text-white/30">—</span> <span className="text-white/50">Current user</span></p>
                <p><span className="text-[#00FF7F]">pwd</span>       <span className="text-white/30">—</span> <span className="text-white/50">Working directory</span></p>
                <p><span className="text-[#00FF7F]">ls</span>        <span className="text-white/30">—</span> <span className="text-white/50">List sections</span></p>
                <p><span className="text-[#00FF7F]">about</span>     <span className="text-white/30">—</span> <span className="text-white/50">Who am I</span></p>
                <p><span className="text-[#00FF7F]">skills</span>    <span className="text-white/30">—</span> <span className="text-white/50">Technical expertise</span></p>
                <p><span className="text-[#00FF7F]">experience</span> <span className="text-white/30">—</span> <span className="text-white/50">Work history</span></p>
                <p><span className="text-[#00FF7F]">projects</span>  <span className="text-white/30">—</span> <span className="text-white/50">Featured projects</span></p>
                <p><span className="text-[#00FF7F]">education</span> <span className="text-white/30">—</span> <span className="text-white/50">Academic background</span></p>
                <p><span className="text-[#00FF7F]">contact</span>   <span className="text-white/30">—</span> <span className="text-white/50">Get in touch</span></p>
                <p><span className="text-[#00FF7F]">clear</span>     <span className="text-white/30">—</span> <span className="text-white/50">Clear terminal</span></p>
                <p className="text-white/20 mt-2 text-[10px]">Tip: Click on any section in the nav to scroll there directly.</p>
            </div>
        )
    },
    about: {
        output: (
            <div className="space-y-2">
                <p className="text-[#00FF7F] font-bold">$ cat about.md</p>
                <p className="text-white/70">I&apos;m <span className="text-white font-semibold">M Jawad ur Rehman</span> — AI Engineer & Founder at AI by MJR.</p>
                <p className="text-white/50">I bridge the gap between sophisticated AI models and real-world utility. From <span className="text-[#00FF7F]/70">Modern Web Architectures</span> to <span className="text-[#00FF7F]/70">Generative AI Workflows</span>, I specialize in the &quot;last mile&quot; of product development.</p>
                <div className="flex gap-4 mt-2">
                    <span className="text-white/70">📍 20+ Projects</span>
                    <span className="text-white/70">🤖 AI/ML Focus</span>
                    <span className="text-white/70">⚡ Full-Stack</span>
                </div>
            </div>
        )
    },
    skills: {
        output: (
            <div className="space-y-2">
                <p className="text-[#00FF7F] font-bold">$ cat skills.json | jq &apos;.top&apos;</p>
                <div className="grid grid-cols-2 gap-x-4 gap-y-0.5">
                    {['Transformers', 'LangChain', 'RAG', 'PyTorch', 'LLMs', 'FastAPI', 'Next.js', 'Docker', 'Python', 'TypeScript'].map(s => (
                        <p key={s} className="text-white/50">
                            <span className="text-sky-300/80">›</span> {s}
                        </p>
                    ))}
                </div>
                <p className="text-white/20 text-[10px] mt-1">Scroll to Skills section for full breakdown ↓</p>
            </div>
        )
    },
    experience: {
        output: (
            <div className="space-y-2">
                <p className="text-[#00FF7F] font-bold">$ git log --oneline career</p>
                <p className="text-amber-300/80">2024-Present <span className="text-white/60">AI Engineer & Founder @ AI by MJR</span></p>
                <p className="text-white/40 text-[11px] ml-4">LLM systems, RAG pipelines, agentic workflows</p>
                <p className="text-amber-300/80">2025-Present <span className="text-white/60">AI Intern @ CodeAlpha</span></p>
                <p className="text-white/40 text-[11px] ml-4">Object detection, embeddings pipelines</p>
                <p className="text-amber-300/80">2025-Present <span className="text-white/60">AI/ML Intern @ DevelopersHub</span></p>
                <p className="text-white/40 text-[11px] ml-4">Language translators, ML models</p>
            </div>
        )
    },
    projects: {
        output: (
            <div className="space-y-2">
                <p className="text-[#00FF7F] font-bold">$ ls ~/projects/featured/</p>
                {[
                    { name: 'llm-from-scratch/', desc: 'Transformer LLM built from ground up', color: 'text-violet-300/80' },
                    { name: 'music-generator/', desc: 'LSTM-based AI music composition', color: 'text-sky-300/80' },
                    { name: 'language-translator/', desc: '30+ language real-time translation', color: 'text-emerald-300/80' },
                    { name: 'knowledge-assistant/', desc: 'TF-IDF powered smart Q&A', color: 'text-amber-300/80' },
                    { name: 'stock-forecast/', desc: 'ML stock price prediction (96% acc)', color: 'text-rose-300/80' },
                ].map(p => (
                    <p key={p.name}>
                        <span className={p.color}>📁 {p.name}</span>
                        <span className="text-white/30 ml-2">{p.desc}</span>
                    </p>
                ))}
            </div>
        )
    },
    education: {
        output: (
            <div className="space-y-1">
                <p className="text-[#00FF7F] font-bold">$ cat education.txt</p>
                <p className="text-white/70">🎓 BS Computer Science — University of Central Punjab</p>
                <p className="text-white/50">   2023 — 2027 | CGPA: <span className="text-white font-semibold">3.82/4.0</span> | Top Performer</p>
                <p className="text-white/40 text-[11px]">   Focus: Artificial Intelligence & Agentic Systems</p>
            </div>
        )
    },
    contact: {
        output: (
            <div className="space-y-1">
                <p className="text-[#00FF7F] font-bold">$ echo $CONTACT</p>
                <p className="text-white/60">🔗 <a href="https://linkedin.com/in/itxmjr" target="_blank" rel="noopener noreferrer" className="text-sky-300/80 hover:text-[#00FF7F] transition-colors underline underline-offset-2">linkedin.com/in/itxmjr</a></p>
                <p className="text-white/60">🐙 <a href="https://github.com/itxmjr" target="_blank" rel="noopener noreferrer" className="text-sky-300/80 hover:text-[#00FF7F] transition-colors underline underline-offset-2">github.com/itxmjr</a></p>
                <p className="text-white/60">▶️ <a href="https://youtube.com/@aibymjr" target="_blank" rel="noopener noreferrer" className="text-sky-300/80 hover:text-[#00FF7F] transition-colors underline underline-offset-2">youtube.com/@aibymjr</a></p>
                <p className="text-white/20 text-[10px] mt-1">Or scroll to the contact form below ↓</p>
            </div>
        )
    },
    whoami: {
        output: (
            <p className="text-white/70">mjr — <span className="text-white font-semibold">M Jawad ur Rehman</span>, AI Engineer &amp; Founder @ AI by MJR</p>
        )
    },
    pwd: {
        output: (
            <p className="text-white/70">/home/mjr/portfolio</p>
        )
    },
    ls: {
        output: (
            <div className="grid grid-cols-2 gap-x-4 gap-y-0.5">
                {['about/', 'experience/', 'projects/', 'skills/', 'education/', 'testimonials/', 'contact/'].map(d => (
                    <p key={d} className="text-sky-300/80">{d}</p>
                ))}
            </div>
        )
    },
};

type HistoryEntry = {
    command: string;
    output: React.ReactNode;
};

export default function About() {
    const [input, setInput] = useState('');
    const [history, setHistory] = useState<HistoryEntry[]>([]);
    const [commandHistory, setCommandHistory] = useState<string[]>([]);
    const [historyIndex, setHistoryIndex] = useState(-1);
    const [showBootSequence, setShowBootSequence] = useState(true);
    const inputRef = useRef<HTMLInputElement>(null);
    const scrollRef = useRef<HTMLDivElement>(null);

    // Boot sequence animation
    useEffect(() => {
        const timer = setTimeout(() => {
            setShowBootSequence(false);
            setHistory([{
                command: '',
                output: (
                    <div className="space-y-1">
                        <p className="text-[#00FF7F] font-bold">Welcome to MJR Terminal v2.0</p>
                        <p className="text-white/40">Interactive portfolio explorer. Type <span className="text-[#00FF7F]">help</span> for available commands.</p>
                    </div>
                )
            }]);
        }, 2000);
        return () => clearTimeout(timer);
    }, []);

    // Auto-scroll to bottom
    useEffect(() => {
        if (scrollRef.current) {
            scrollRef.current.scrollTop = scrollRef.current.scrollHeight;
        }
    }, [history, showBootSequence]);

    // Focus input on click
    const handleContainerClick = useCallback(() => {
        inputRef.current?.focus();
    }, []);

    const processCommand = useCallback((cmd: string) => {
        const trimmed = cmd.trim().toLowerCase();

        if (trimmed === 'clear') {
            setHistory([]);
            return;
        }

        if (trimmed === '') return;

        const response = commandResponses[trimmed];

        if (response) {
            setHistory(prev => [...prev, { command: cmd, output: response.output }]);
        } else {
            setHistory(prev => [...prev, {
                command: cmd,
                output: (
                    <p className="text-rose-400/80">
                        Command not found: <span className="text-white/50">{cmd}</span>. Type <span className="text-[#00FF7F]">help</span> for available commands.
                    </p>
                )
            }]);
        }

        setCommandHistory(prev => [cmd, ...prev]);
        setHistoryIndex(-1);
    }, []);

    const handleKeyDown = (e: React.KeyboardEvent<HTMLInputElement>) => {
        if (e.key === 'Enter') {
            processCommand(input);
            setInput('');
        } else if (e.key === 'ArrowUp') {
            e.preventDefault();
            if (historyIndex < commandHistory.length - 1) {
                const newIndex = historyIndex + 1;
                setHistoryIndex(newIndex);
                setInput(commandHistory[newIndex]);
            }
        } else if (e.key === 'ArrowDown') {
            e.preventDefault();
            if (historyIndex > 0) {
                const newIndex = historyIndex - 1;
                setHistoryIndex(newIndex);
                setInput(commandHistory[newIndex]);
            } else {
                setHistoryIndex(-1);
                setInput('');
            }
        } else if (e.key === 'Tab') {
            e.preventDefault();
            const commands = Object.keys(commandResponses).concat(['clear']).sort();
            const match = commands.find(c => c.startsWith(input.toLowerCase()));
            if (match) setInput(match);
        }
    };

    return (
        <section id="about" className="mb-8 px-4 sm:px-6" data-animate>
            <div className="reveal transition-all duration-1000 ease-[cubic-bezier(0.16,1,0.3,1)]">
                {/* Profile summary strip */}
                <div className="flex items-center gap-4 mb-4 px-1">
                    <div className="relative group shrink-0">
                        <div className="absolute -inset-0.5 bg-gradient-to-br from-[#00FF7F]/30 to-cyan-500/20 rounded-xl blur-sm opacity-0 group-hover:opacity-100 transition duration-500"></div>
                        <Image
                            src="/Image.png"
                            alt="M Jawad ur Rehman"
                            width={56}
                            height={56}
                            className="relative w-12 h-12 sm:w-14 sm:h-14 rounded-xl object-cover border border-white/10"
                        />
                    </div>
                    <div className="flex-1 min-w-0">
                        <h2 className="text-base sm:text-xl font-bold text-white">Crafting the Future of <span className="text-[#00FF7F]">Decision Intelligence.</span></h2>
                        <p className="text-white/30 text-[10px] sm:text-xs uppercase tracking-wider">Full-Stack Engineer & AI Architect · <span className="text-[#00FF7F]/60">Available for Work</span></p>
                    </div>
                </div>

                {/* Interactive Terminal */}
                <div
                    className="relative border border-white/[0.08] rounded-2xl bg-[#0a0a0f] overflow-hidden cursor-text"
                    onClick={handleContainerClick}
                >
                    {/* Terminal Header */}
                    <div className="flex items-center justify-between px-4 py-2.5 border-b border-white/[0.06] bg-white/[0.02]">
                        <div className="flex items-center gap-3">
                            <div className="flex gap-1.5">
                                <span className="w-3 h-3 rounded-full bg-[#ff5f57] hover:opacity-80 transition-opacity"></span>
                                <span className="w-3 h-3 rounded-full bg-[#febc2e] hover:opacity-80 transition-opacity"></span>
                                <span className="w-3 h-3 rounded-full bg-[#28c840] hover:opacity-80 transition-opacity"></span>
                            </div>
                            <span className="text-white/25 text-[11px] font-mono hidden sm:inline">mjr@portfolio</span>
                        </div>
                        <div className="flex items-center gap-2">
                            <span className="w-2 h-2 rounded-full bg-[#00FF7F] animate-pulse"></span>
                            <span className="text-white/20 text-[10px] font-mono">interactive</span>
                        </div>
                    </div>

                    {/* Terminal Body */}
                    <div
                        ref={scrollRef}
                        className="p-4 font-mono text-xs h-[240px] sm:h-[320px] md:h-[360px] overflow-y-auto custom-scrollbar space-y-3"
                    >
                        {/* Boot Sequence */}
                        {showBootSequence && (
                            <div className="space-y-1 animate-fadeSlide">
                                <p className="text-[#00FF7F]">Initializing MJR Terminal v2.0...</p>
                                <p className="text-white/40">› Loading portfolio modules...</p>
                                <p className="text-sky-300/70">✓ about.md loaded</p>
                                <p className="text-sky-300/70">✓ skills.json parsed</p>
                                <p className="text-sky-300/70">✓ projects/ indexed</p>
                                <p className="text-amber-300/70">› Establishing connection...</p>
                                <p className="text-[#00FF7F] mt-2">
                                    <span className="inline-block animate-blink">█</span>
                                </p>
                            </div>
                        )}

                        {/* History */}
                        {!showBootSequence && history.map((entry, idx) => (
                            <div key={idx} className="space-y-1">
                                {entry.command && (
                                    <p className="text-white/50">
                                        <span className="text-[#00FF7F]">mjr</span>
                                        <span className="text-white/20">@</span>
                                        <span className="text-sky-300/60">portfolio</span>
                                        <span className="text-white/20"> ~ $ </span>
                                        <span className="text-white/70">{entry.command}</span>
                                    </p>
                                )}
                                <div className="pl-0 text-white/60">
                                    {entry.output}
                                </div>
                            </div>
                        ))}

                        {/* Input Line */}
                        {!showBootSequence && (
                            <div className="flex items-center">
                                <span className="text-[#00FF7F] shrink-0">mjr</span>
                                <span className="text-white/20 shrink-0">@</span>
                                <span className="text-sky-300/60 shrink-0">portfolio</span>
                                <span className="text-white/20 shrink-0"> ~ $ </span>
                                <input
                                    ref={inputRef}
                                    type="text"
                                    value={input}
                                    onChange={(e) => setInput(e.target.value)}
                                    onKeyDown={handleKeyDown}
                                    className="flex-1 bg-transparent border-none outline-none text-white/80 caret-[#00FF7F] ml-1 font-mono text-xs"
                                    spellCheck={false}
                                    autoComplete="off"
                                    autoFocus
                                />
                            </div>
                        )}
                    </div>

                    {/* Subtle glow */}
                    <div className="absolute -right-10 -bottom-10 w-40 h-40 bg-[#00FF7F]/[0.04] rounded-full blur-3xl pointer-events-none"></div>
                </div>
            </div>
        </section>
    );
}
