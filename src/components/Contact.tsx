'use client';

import React, { useState } from 'react';

export default function Contact() {
    const [isSubmitting, setIsSubmitting] = useState(false);

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        setIsSubmitting(true);

        setTimeout(() => {
            setIsSubmitting(false);
            alert("Message sent! I'll reply shortly.");
            (e.target as HTMLFormElement).reset();
        }, 1400);
    };

    return (
        <section id="contact" className="mb-16 scroll-mt-24 md:mb-24 lg:mb-32 lg:scroll-mt-32 px-4 sm:px-6" data-animate>
            <div className="reveal transition-all duration-1000 ease-[cubic-bezier(0.16,1,0.3,1)]">
                <div className="p-5 sm:p-6 md:p-8 border border-white/[0.06] rounded-2xl bg-white/[0.02]">
                    <h2 className="text-3xl sm:text-4xl font-bold text-white mb-2">Let&apos;s Collaborate</h2>
                    <p className="text-white/50 text-sm mb-8 leading-relaxed max-w-md">
                        Currently open to technical leadership roles, AI strategy consulting, and collaborative product development.
                    </p>
                    <form id="contactForm" className="space-y-4" onSubmit={handleSubmit}>
                        <div className="grid sm:grid-cols-2 gap-3">
                            <input
                                type="text"
                                id="name"
                                className="w-full bg-white/[0.03] border border-white/[0.08] rounded-xl px-4 py-3 text-white text-sm placeholder:text-white/25 focus:outline-none focus:border-[#00FF7F]/40 focus:ring-1 focus:ring-[#00FF7F]/30 transition-all duration-300"
                                placeholder="Name"
                                required
                            />
                            <input
                                type="email"
                                id="email"
                                className="w-full bg-white/[0.03] border border-white/[0.08] rounded-xl px-4 py-3 text-white text-sm placeholder:text-white/25 focus:outline-none focus:border-[#00FF7F]/40 focus:ring-1 focus:ring-[#00FF7F]/30 transition-all duration-300"
                                placeholder="Email"
                                required
                            />
                        </div>
                        <textarea
                            id="message"
                            rows={3}
                            className="w-full bg-white/[0.03] border border-white/[0.08] rounded-xl px-4 py-3 text-white text-sm placeholder:text-white/25 focus:outline-none focus:border-[#00FF7F]/40 focus:ring-1 focus:ring-[#00FF7F]/30 transition-all duration-300 resize-none"
                            placeholder="Your message..."
                            required
                        ></textarea>
                        <button
                            type="submit"
                            disabled={isSubmitting}
                            className="w-full bg-[#00FF7F] text-black font-semibold py-3 rounded-xl hover:bg-[#2de3b8] transition-all duration-300 hover:shadow-[0_8px_30px_rgba(0,255,127,0.2)] disabled:opacity-70 disabled:cursor-not-allowed text-sm"
                        >
                            {isSubmitting ? 'Sending...' : 'Send Message'}
                        </button>
                    </form>
                </div>
                <div className="mt-6 text-center text-[11px] text-white/20">
                    <p>Built with Next.js, Tailwind CSS & React</p>
                </div>
            </div>
        </section>
    );
}
