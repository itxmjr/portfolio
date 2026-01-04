'use client';

import React, { useState } from 'react';

export default function Contact() {
    const [isSubmitting, setIsSubmitting] = useState(false);

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        setIsSubmitting(true);

        // Simulate submission
        setTimeout(() => {
            setIsSubmitting(false);
            alert("Message sent! I'll reply shortly.");
            (e.target as HTMLFormElement).reset();
        }, 1400);
    };

    return (
        <section id="contact" className="mb-16 scroll-mt-24 md:mb-24 lg:mb-32 lg:scroll-mt-32" data-animate>
            <div className="reveal transition-all duration-1000 ease-[cubic-bezier(0.16,1,0.3,1)]">
                <div className="glass-panel p-6 md:p-8 border border-white/10 rounded-3xl shadow-[0_20px_60px_rgba(0,0,0,0.45)] backdrop-blur-2xl">
                    <p className="text-[#00FF7F] text-xs font-bold uppercase tracking-widest mb-4">Let&apos;s Collaborate</p>
                    <h2 className="text-3xl font-semibold text-white mb-4">Start a Conversation</h2>
                    <p className="text-white/70 text-sm mb-8 leading-relaxed max-w-sm">
                        Currently open to technical leadership roles, AI strategy consulting, and collaborative product development. Let&apos;s build the next generation of intelligence together.
                    </p>
                    <form id="contactForm" className="space-y-4" onSubmit={handleSubmit}>
                        <div className="grid md:grid-cols-2 gap-4">
                            <input
                                type="text"
                                id="name"
                                className="w-full bg-white/5 border border-white/10 rounded-lg px-4 py-3 text-white text-sm focus:outline-none focus:border-[#00FF7F] focus:ring-1 focus:ring-[#00FF7F] transition-all duration-300"
                                placeholder="Name"
                                required
                            />
                            <input
                                type="email"
                                id="email"
                                className="w-full bg-white/5 border border-white/10 rounded-lg px-4 py-3 text-white text-sm focus:outline-none focus:border-[#00FF7F] focus:ring-1 focus:ring-[#00FF7F] transition-all duration-300"
                                placeholder="Email"
                                required
                            />
                        </div>
                        <textarea
                            id="message"
                            rows={3}
                            className="w-full bg-white/5 border border-white/10 rounded-lg px-4 py-3 text-white text-sm focus:outline-none focus:border-[#00FF7F] focus:ring-1 focus:ring-[#00FF7F] transition-all duration-300"
                            placeholder="Message..."
                            required
                        ></textarea>
                        <button
                            type="submit"
                            disabled={isSubmitting}
                            className="w-full btn bg-[#00FF7F] text-black font-semibold py-3 rounded-xl hover:bg-[#2de3b8] transition-colors disabled:opacity-70 disabled:cursor-not-allowed"
                        >
                            {isSubmitting ? 'Sending...' : 'Send Message'}
                        </button>
                    </form>
                </div>
                <div className="mt-8 text-xs text-white/40">
                    <p>Coded in Visual Studio Code. Built with Next.js, Tailwind CSS, & React.</p>
                </div>
            </div>
        </section>
    );
}
