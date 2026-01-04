'use client';

import React, { useEffect, useRef } from 'react';

export default function CursorEffects() {
    const glowRef = useRef<HTMLDivElement>(null);
    const trailRef = useRef<HTMLDivElement>(null);

    useEffect(() => {
        const handleMouseMove = (e: MouseEvent) => {
            // Ambient Glow
            if (glowRef.current) {
                requestAnimationFrame(() => {
                    if (glowRef.current) {
                        glowRef.current.style.left = `${e.clientX}px`;
                        glowRef.current.style.top = `${e.clientY}px`;
                    }
                });
            }

            // Trail
            if (trailRef.current) {
                const particle = document.createElement('span');
                particle.className = 'absolute w-1.5 h-1.5 rounded-full bg-[#00FF7F] shadow-[0_0_20px_rgba(0,255,127,0.25)] opacity-85 pointer-events-none animate-trail';
                particle.style.left = `${e.clientX}px`;
                particle.style.top = `${e.clientY}px`;
                particle.style.opacity = `${Math.random() * 0.5 + 0.4}`;
                particle.style.transform = `scale(${Math.random() * 0.7 + 0.5})`;

                trailRef.current.appendChild(particle);
                setTimeout(() => particle.remove(), 900);
            }
        };

        document.addEventListener('mousemove', handleMouseMove);
        return () => document.removeEventListener('mousemove', handleMouseMove);
    }, []);

    return (
        <>
            <div id="cursor-glow" ref={glowRef} className="ambient-glow"></div>
            <div id="cursor-trail" ref={trailRef} className="fixed inset-0 pointer-events-none z-50"></div>
        </>
    );
}
