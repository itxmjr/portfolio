'use client';

import React, { useState, useEffect } from 'react';
import Link from 'next/link';
import { navItems } from './NavConfig';
import clsx from 'clsx';

export default function Header() {
    const [activeSection, setActiveSection] = useState('about');
    const [typedRole, setTypedRole] = useState('');
    const [isDeleting, setIsDeleting] = useState(false);
    const [loopNum, setLoopNum] = useState(0);
    const [typingSpeed, setTypingSpeed] = useState(100);

    // Typing Effect
    useEffect(() => {
        const roles = ['AI Engineer & Founder', 'Full-Stack AI Developer', 'GenAI Strategist', 'LLM Solutions Architect'];
        const handleType = () => {
            const i = loopNum % roles.length;
            const fullText = roles[i];

            setTypedRole(isDeleting
                ? fullText.substring(0, typedRole.length - 1)
                : fullText.substring(0, typedRole.length + 1)
            );

            setTypingSpeed(isDeleting ? 40 : 80);

            if (!isDeleting && typedRole === fullText) {
                setTypingSpeed(2000);
                setIsDeleting(true);
            } else if (isDeleting && typedRole === '') {
                setIsDeleting(false);
                setLoopNum(loopNum + 1);
                setTypingSpeed(500);
            }
        };

        const timer = setTimeout(handleType, typingSpeed);
        return () => clearTimeout(timer);
    }, [typedRole, isDeleting, loopNum, typingSpeed]);

    // Scrollspy
    const observer = React.useRef<IntersectionObserver | null>(null);

    useEffect(() => {
        if (observer.current) {
            observer.current.disconnect();
        }

        observer.current = new IntersectionObserver((entries) => {
            entries.forEach((entry) => {
                if (entry.isIntersecting) {
                    setActiveSection(entry.target.id);
                }
            });
        }, {
            rootMargin: '-45% 0px -45% 0px'
        });

        const sections = document.querySelectorAll('section[id]');
        sections.forEach((section) => {
            if (observer.current) observer.current.observe(section);
        });

        return () => {
            if (observer.current) observer.current.disconnect();
        };
    }, []);

    const handleNavClick = (e: React.MouseEvent, href: string) => {
        e.preventDefault();
        const target = document.querySelector(href);
        if (target) {
            target.scrollIntoView({ behavior: 'smooth' });
            setActiveSection(href.substring(1));
        }
    };

    return (
        <header className="lg:col-span-5 lg:sticky lg:top-0 lg:flex lg:h-screen lg:flex-col lg:justify-between lg:py-20 pt-16 pb-8 lg:overflow-y-auto scrollbar-hidden">
            <div>
                <h1 className="text-4xl sm:text-5xl lg:text-4xl xl:text-5xl font-bold tracking-tight text-white mb-3">
                    M Jawad ur Rehman
                </h1>
                <h2 className="text-lg font-medium tracking-tight text-white/80 sm:text-xl mb-4 min-h-[1.5em] flex items-center">
                    <span className="text-[#00FF7F] font-bold transition-all duration-100">{typedRole}</span>
                    <span className="animate-blink ml-0.5 text-[#00FF7F]">|</span>
                </h2>
                <p className="max-w-xs leading-relaxed text-white/50 text-sm mb-10">
                    I design and deploy scalable GenAI solutions, specialized agentic systems, and RAG architectures that drive measurable business impact.
                </p>

                <nav className="hidden lg:block">
                    <ul className="flex flex-col gap-1 w-max">
                        {navItems.map((item) => {
                            const isActive = activeSection === item.href.substring(1);
                            return (
                                <li key={item.name}>
                                    <Link
                                        href={item.href}
                                        className={clsx(
                                            "nav-link group flex items-center py-2.5",
                                            isActive && "text-white"
                                        )}
                                        onClick={(e) => handleNavClick(e, item.href)}
                                    >
                                        <span className={clsx(
                                            "nav-indicator mr-4 h-px transition-all duration-300 group-hover:w-16 group-hover:bg-[#00FF7F]",
                                            isActive ? "w-16 bg-[#00FF7F]" : "w-8 bg-white/20"
                                        )}></span>
                                        <span className={clsx(
                                            "nav-text text-xs font-bold uppercase tracking-widest group-hover:text-white transition-colors duration-300",
                                            isActive ? "text-white" : "text-white/40"
                                        )}>
                                            {item.name}
                                        </span>
                                    </Link>
                                </li>
                            );
                        })}
                    </ul>
                </nav>

                <a
                    href="https://cal.com/mjawad/30min"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="hidden lg:inline-flex items-center gap-2 px-4 py-2 mt-6 rounded-md border border-[#00FF7F]/40 text-[#00FF7F] text-xs font-semibold tracking-wide hover:bg-[#00FF7F] hover:text-black hover:border-[#00FF7F] hover:shadow-[0_0_20px_rgba(0,255,127,0.3)] transition-all duration-300"
                >
                    <svg xmlns="http://www.w3.org/2000/svg" width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                        <rect x="3" y="4" width="18" height="18" rx="2" ry="2" />
                        <line x1="16" y1="2" x2="16" y2="6" />
                        <line x1="8" y1="2" x2="8" y2="6" />
                        <line x1="3" y1="10" x2="21" y2="10" />
                    </svg>
                    Book a Call
                </a>
            </div>

            {/* Social Icons - positioned closer to nav, not at absolute bottom */}
            <div className="flex items-center gap-5 mt-6 lg:mt-0 lg:mb-8">
                <a href="https://www.linkedin.com/in/itxmjr" target="_blank" rel="noopener noreferrer" className="text-white/40 hover:text-[#00FF7F] transition-all duration-300 hover:drop-shadow-[0_0_8px_rgba(45,227,184,0.5)] hover:-translate-y-0.5">
                    <svg xmlns="http://www.w3.org/2000/svg" width="22" height="22" viewBox="0 0 24 24" fill="currentColor">
                        <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z" />
                    </svg>
                </a>
                <a href="https://github.com/itxmjr" target="_blank" rel="noopener noreferrer" className="text-white/40 hover:text-[#00FF7F] transition-all duration-300 hover:drop-shadow-[0_0_8px_rgba(45,227,184,0.5)] hover:-translate-y-0.5">
                    <svg xmlns="http://www.w3.org/2000/svg" width="22" height="22" viewBox="0 0 24 24" fill="currentColor">
                        <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z" />
                    </svg>
                </a>
                <a href="https://www.youtube.com/@aibymjr" target="_blank" rel="noopener noreferrer" className="text-white/40 hover:text-[#00FF7F] transition-all duration-300 hover:drop-shadow-[0_0_8px_rgba(45,227,184,0.5)] hover:-translate-y-0.5">
                    <svg xmlns="http://www.w3.org/2000/svg" width="22" height="22" viewBox="0 0 24 24" fill="currentColor">
                        <path d="M19.615 3.184c-3.604-.246-11.631-.245-15.23 0-3.897.266-4.356 2.62-4.385 8.816.029 6.185.484 8.549 4.385 8.816 3.6.245 11.626.246 15.23 0 3.897-.266 4.356-2.62 4.385-8.816-.029-6.185-.484-8.549-4.385-8.816zm-10.615 12.816v-8l8 3.993-8 4.007z" />
                    </svg>
                </a>
                <a href="https://fiverr.com/aibymjr" target="_blank" rel="noopener noreferrer" className="text-white/40 hover:text-[#00FF7F] transition-all duration-300 hover:drop-shadow-[0_0_8px_rgba(45,227,184,0.5)] hover:-translate-y-0.5">
                    <svg xmlns="http://www.w3.org/2000/svg" width="22" height="22" viewBox="0 0 24 24" fill="currentColor">
                        <path d="M23.004 15.588a.995.995 0 1 0 .002-1.99.995.995 0 0 0-.002 1.99zm-.996-3.705h-.85c-.546 0-.84.41-.84 1.092v2.507h-1.61v-3.564h-.76c-.535 0-.84.41-.84 1.092v2.472h-1.61V13.47h-.84v-1.483h.84v-.423c0-1.255.755-1.946 1.91-1.946.376 0 .742.06 1.097.18v1.394a1.84 1.84 0 0 0-.84-.217c-.42 0-.558.19-.558.52v.492h1.6v-.38c0-1.255.754-1.946 1.909-1.946.375 0 .741.06 1.096.18v1.394a1.84 1.84 0 0 0-.84-.217c-.42 0-.558.19-.558.52v.449h1.694v1.506zM9.34 13.01c0-.46.37-.695.904-.695.508 0 1.107.235 1.57.588v-1.6a3.984 3.984 0 0 0-1.57-.31c-1.495 0-2.484.78-2.484 2.083 0 2.36 2.967 1.927 2.967 2.968 0 .517-.43.736-.993.736-.577 0-1.228-.293-1.736-.694v1.62c.517.274 1.04.41 1.736.41 1.537 0 2.574-.77 2.574-2.093C12.308 13.694 9.34 14.127 9.34 13.01zm-3.944-.577h.84v-1.483h-.84v-.657c0-.537.196-.78.762-.78a2.1 2.1 0 0 1 .576.083V8.188a2.792 2.792 0 0 0-.83-.12c-1.302 0-2.118.79-2.118 2.073v.82H3v1.484h.786v4.993h1.61v-4.993zm14.66-5.842C20.056 2.85 17.174 1 13.987 1 8.445 1 3.927 5.224 3.5 10.635h1.61C5.547 6.12 9.376 2.6 13.986 2.6c2.726 0 5.15 1.218 6.77 3.12l-1.28 1.282 3.606.602-.602-3.606-1.424 1.193z"/>
                    </svg>
                </a>
                <a href="https://upwork.com/aibymjr" target="_blank" rel="noopener noreferrer" className="text-white/40 hover:text-[#00FF7F] transition-all duration-300 hover:drop-shadow-[0_0_8px_rgba(45,227,184,0.5)] hover:-translate-y-0.5">
                    <svg xmlns="http://www.w3.org/2000/svg" width="22" height="22" viewBox="0 0 24 24" fill="currentColor">
                        <path d="M18.561 13.158c-1.102 0-2.135-.467-3.074-1.227l.228-1.076.008-.042c.207-1.143.849-3.06 2.839-3.06 1.492 0 2.703 1.212 2.703 2.703-.001 1.489-1.212 2.702-2.704 2.702zm0-8.14c-2.539 0-4.51 1.649-5.31 4.366-1.22-1.834-2.148-4.036-2.687-5.892H7.828v7.112c-.002 1.406-1.141 2.546-2.547 2.546-1.405 0-2.543-1.14-2.545-2.546V3.492H0v7.112c0 2.914 2.37 5.303 5.281 5.303 2.913 0 5.283-2.389 5.283-5.303v-1.19c.529 1.107 1.182 2.229 1.974 3.221l-1.673 7.873h2.797l1.213-5.71c1.063.679 2.285 1.109 3.686 1.109 3 0 5.439-2.452 5.439-5.45 0-3-2.439-5.439-5.439-5.439z"/>
                    </svg>
                </a>
            </div>
        </header>
    );
}
