import React from 'react';

export default function Terminal() {
    return (
        <div className="py-12 px-4 sm:px-6" data-animate>
            <div
                className="reveal glass-panel px-6 py-4 border border-white/10 relative overflow-hidden rounded-3xl shadow-[0_20px_60px_rgba(0,0,0,0.45)] backdrop-blur-2xl transition-all duration-1000"
            >
                <div className="flex items-center justify-between pb-2 border-b border-white/5">
                    <span className="text-white/50 text-xs font-mono">gen_ai_project.py</span>
                    <div className="flex gap-1.5">
                        <span className="w-2.5 h-2.5 rounded-full bg-rose-400/80"></span>
                        <span className="w-2.5 h-2.5 rounded-full bg-amber-300/80"></span>
                        <span className="w-2.5 h-2.5 rounded-full bg-emerald-300/80"></span>
                    </div>
                </div>
                <div className="mt-3 font-mono text-xs terminal-content">
                    <p className="text-[#00FF7F] mb-1 leading-snug tracking-tight">$ python deploy_agent.py</p>
                    <p className="text-white/80 mb-1 leading-snug tracking-tight">› Loading foundation models...</p>
                    <p className="text-sky-300 mb-1 leading-snug tracking-tight">✓ GPT-4 Turbo · Claude 3 Opus</p>
                    <p className="text-sky-300 mb-1 leading-snug tracking-tight">✓ Pinecone + Weaviate hybrid search</p>
                    <p className="text-sky-300 mb-1 leading-snug tracking-tight">✓ Toolformer orchestration ready</p>
                    <p className="text-amber-300 mb-1 leading-snug tracking-tight">› Building agent graph...</p>
                    <p className="text-violet-300 mb-1 leading-snug tracking-tight">from langchain.agents import Tool</p>
                    <p className="text-violet-300 mb-1 leading-snug tracking-tight">crew.load(role="research", autonomy="high")</p>
                    <p className="text-[#00FF7F] mb-1 leading-snug tracking-tight">$ <span className="terminal-cursor inline-block animate-blink">█</span></p>
                </div>
                <div className="absolute -right-6 -bottom-6 w-32 h-32 bg-[#00FF7F]/20 rounded-full blur-3xl"></div>
            </div>
        </div>
    );
}
