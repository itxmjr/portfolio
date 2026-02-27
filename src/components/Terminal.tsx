import React from 'react';

export default function Terminal() {
    return (
        <div className="py-12 px-4 sm:px-6" data-animate>
            <div
                className="reveal p-5 sm:p-6 border border-white/[0.06] rounded-2xl bg-white/[0.02] relative overflow-hidden transition-all duration-1000"
            >
                <div className="flex items-center justify-between pb-3 border-b border-white/[0.04]">
                    <span className="text-white/40 text-xs font-mono">gen_ai_project.py</span>
                    <div className="flex gap-1.5">
                        <span className="w-2.5 h-2.5 rounded-full bg-rose-400/70"></span>
                        <span className="w-2.5 h-2.5 rounded-full bg-amber-300/70"></span>
                        <span className="w-2.5 h-2.5 rounded-full bg-emerald-300/70"></span>
                    </div>
                </div>
                <div className="mt-3 font-mono text-xs space-y-1">
                    <p className="text-[#00FF7F] leading-snug tracking-tight">$ python deploy_agent.py</p>
                    <p className="text-white/60 leading-snug tracking-tight">› Loading foundation models...</p>
                    <p className="text-sky-300/80 leading-snug tracking-tight">✓ GPT-4 Turbo · Claude 3 Opus</p>
                    <p className="text-sky-300/80 leading-snug tracking-tight">✓ Pinecone + Weaviate hybrid search</p>
                    <p className="text-sky-300/80 leading-snug tracking-tight">✓ Toolformer orchestration ready</p>
                    <p className="text-amber-300/70 leading-snug tracking-tight">› Building agent graph...</p>
                    <p className="text-violet-300/70 leading-snug tracking-tight">from langchain.agents import Tool</p>
                    <p className="text-violet-300/70 leading-snug tracking-tight">crew.load(role=&quot;research&quot;, autonomy=&quot;high&quot;)</p>
                    <p className="text-[#00FF7F] leading-snug tracking-tight">$ <span className="inline-block animate-blink">█</span></p>
                </div>
                <div className="absolute -right-8 -bottom-8 w-32 h-32 bg-[#00FF7F]/10 rounded-full blur-3xl"></div>
            </div>
        </div>
    );
}
