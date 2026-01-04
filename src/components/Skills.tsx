'use client';

import React, { useState } from 'react';
import {
    Chart as ChartJS,
    RadialLinearScale,
    PointElement,
    LineElement,
    Filler,
    Tooltip,
    Legend,
} from 'chart.js';
import { Radar } from 'react-chartjs-2';
import clsx from 'clsx';

ChartJS.register(
    RadialLinearScale,
    PointElement,
    LineElement,
    Filler,
    Tooltip,
    Legend
);

const neon = '#00FF7F';

const skillData = {
    labels: ['AI Architecture', 'Retrieval (RAG)', 'AI Automation', 'Deep Learning', 'Eng & Ops'],
    datasets: [{
        label: 'Proficiency',
        data: [98, 92, 95, 85, 88],
        backgroundColor: `${neon}33`,
        borderColor: neon,
        pointBackgroundColor: '#000',
        pointBorderColor: neon,
        pointHoverBackgroundColor: neon,
        pointHoverBorderColor: '#fff',
        borderWidth: 2,
        pointRadius: 4,
        pointHoverRadius: 6,
    }]
};

const chartOptions = {
    responsive: true,
    scales: {
        r: {
            angleLines: { color: 'rgba(255, 255, 255, 0.1)' },
            grid: { color: 'rgba(255, 255, 255, 0.1)' },
            pointLabels: {
                color: 'rgba(255, 255, 255, 0.7)',
                font: { family: 'Inter', size: 10, weight: '500' }
            },
            ticks: { display: false, max: 100 }
        }
    },
    plugins: {
        legend: { display: false },
        tooltip: {
            backgroundColor: 'rgba(0, 0, 0, 0.9)',
            titleColor: neon,
            bodyColor: '#fff',
            bodyFont: { family: 'Inter' },
            padding: 12,
            borderColor: 'rgba(255, 255, 255, 0.1)',
            borderWidth: 1,
            displayColors: false,
            callbacks: {
                label: function (context: any) {
                    return `${context.raw}% Proficiency`;
                }
            }
        }
    }
};

const skillPanels = {
    genai: {
        label: 'AI Architecture',
        skills: ['GPT-4 Turbo', 'Claude 3 Opus', 'Gemini 1.5 Pro', 'LLaMA 3', 'Fine-tuning', 'Prompt Engineering', 'Eval Harnesses', 'Multi-modal']
    },
    rag: {
        label: 'Retrieval (RAG)',
        skills: ['Pinecone', 'Weaviate', 'Milvus', 'Hybrid search', 'Chunking', 'Retriever', 'Re-ranking', 'Knowledge graphs']
    },
    agents: {
        label: 'AI Automation',
        skills: ['LangChain', 'CrewAI', 'Function calling', 'Toolformer', 'Planning', 'Human-in-loop', 'Voice agents', 'Metrics']
    },
    mlops: {
        label: 'Eng & Ops',
        skills: ['W&B', 'MLflow', 'Arize AI', 'Feature stores', 'Kubernetes', 'Data contracts', 'Monitoring', 'Security']
    }
};

type SkillKey = keyof typeof skillPanels;

export default function Skills() {
    const [activeTab, setActiveTab] = useState<SkillKey>('genai');
    const chartRef = React.useRef<any>(null);

    // Effect to update chart focus when activeTab changes
    React.useEffect(() => {
        const chart = chartRef.current;
        if (!chart) return;

        const targetMap: Record<string, number> = { 'genai': 0, 'rag': 1, 'agents': 2, 'mlops': 4 };
        const index = targetMap[activeTab];

        if (index !== undefined) {
            chart.setActiveElements([
                {
                    datasetIndex: 0,
                    index: index,
                }
            ]);
            chart.tooltip.setActiveElements([
                {
                    datasetIndex: 0,
                    index: index,
                }
            ]);
        } else {
            chart.setActiveElements([]);
            chart.tooltip.setActiveElements([]);
        }

        chart.update();
    }, [activeTab]);

    return (
        <section id="skills" className="py-12 px-4 sm:px-6 scroll-mt-24" data-animate>
            <div className="space-y-8 reveal transition-all duration-1000 ease-[cubic-bezier(0.16,1,0.3,1)]">
                <div className="flex flex-col gap-3">
                    <p className="inline-flex items-center gap-2 px-3 py-1 rounded-full border border-white/10 bg-white/5 text-[0.8rem] text-[#96a2b6] tracking-wide uppercase">
                        Skills
                    </p>
                    <h2 className="text-3xl font-semibold">Specialized Toolkit</h2>
                </div>

                <div className="flex flex-wrap gap-2">
                    {Object.entries(skillPanels).map(([key, panel]) => (
                        <button
                            key={key}
                            onClick={() => setActiveTab(key as SkillKey)}
                            className={clsx(
                                "px-4 py-1.5 rounded-full border border-white/10 bg-white/5 text-white/70 text-xs font-medium transition-all duration-300 hover:bg-white/10",
                                activeTab === key && "!bg-[#00FF7F] !text-black !border-[#00FF7F]" // Added !important via Tailwind to override generic clashes if any
                            )}
                        >
                            {panel.label}
                        </button>
                    ))}
                </div>

                <div className="glass-panel p-6 rounded-3xl shadow-[0_20px_60px_rgba(0,0,0,0.45)] backdrop-blur-2xl hover:border-[#00FF7F]/30 transition-colors duration-300">
                    <div className="grid md:grid-cols-2 gap-6">
                        <div className="grid grid-cols-2 gap-x-4 gap-y-1 animate-fadeSlide">
                            {skillPanels[activeTab].skills.map((skill) => (
                                <span
                                    key={skill}
                                    className="text-xs text-white/50 hover:text-[#00FF7F] transition-colors cursor-default"
                                >
                                    {skill}
                                </span>
                            ))}
                        </div>

                        {/* Radar Chart Canvas */}
                        <div className="hidden md:flex items-center justify-center p-2">
                            <div className="w-full max-w-[320px]">
                                <Radar
                                    ref={chartRef}
                                    data={skillData}
                                    options={chartOptions as any}
                                />
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}
