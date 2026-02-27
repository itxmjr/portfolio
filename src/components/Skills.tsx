'use client';

import React, { useState, useCallback } from 'react';
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

const radarLabels = ['AI Architecture', 'Retrieval (RAG)', 'AI Automation', 'Deep Learning', 'Eng & Ops'];
const radarValues = [98, 92, 95, 85, 88];

const skillPanels = {
    genai: {
        label: 'Core AI',
        radarIndex: 0, // AI Architecture
        skills: [
            { name: 'Transformers', level: 95 },
            { name: 'LLMs', level: 92 },
            { name: 'RAG', level: 90 },
            { name: 'LangChain', level: 88 },
            { name: 'LangGraph', level: 85 },
            { name: 'Attention Mechanisms', level: 90 },
            { name: 'Vector DBs', level: 87 },
            { name: 'Prompt Engineering', level: 93 },
        ]
    },
    deeplearning: {
        label: 'Deep Learning',
        radarIndex: 3, // Deep Learning
        skills: [
            { name: 'PyTorch', level: 92 },
            { name: 'CNNs', level: 88 },
            { name: 'RNNs', level: 85 },
            { name: 'Training Loops', level: 90 },
            { name: 'Autograd Systems', level: 82 },
            { name: 'LSTMs', level: 86 },
            { name: 'Computer Vision', level: 84 },
            { name: 'NLP Pipelines', level: 91 },
        ]
    },
    tools: {
        label: 'Tools & Platforms',
        radarIndex: 4, // Eng & Ops
        skills: [
            { name: 'Docker', level: 85 },
            { name: 'Git', level: 95 },
            { name: 'Linux', level: 88 },
            { name: 'FastAPI', level: 92 },
            { name: 'Next.js', level: 90 },
            { name: 'Hugging Face', level: 87 },
            { name: 'Vercel', level: 85 },
            { name: 'Ollama', level: 80 },
        ]
    },
    languages: {
        label: 'Languages',
        radarIndex: 2, // AI Automation
        skills: [
            { name: 'Python', level: 96 },
            { name: 'C++', level: 78 },
            { name: 'SQL', level: 82 },
            { name: 'TypeScript', level: 88 },
            { name: 'JavaScript', level: 90 },
            { name: 'HTML/CSS', level: 92 },
        ]
    }
};

type SkillKey = keyof typeof skillPanels;

export default function Skills() {
    const [activeTab, setActiveTab] = useState<SkillKey>('genai');
    const [hoveredSkill, setHoveredSkill] = useState<string | null>(null);
    const chartRef = React.useRef<any>(null);

    // Highlight radar point when tab changes or skill is clicked
    const highlightRadar = useCallback((index: number) => {
        const chart = chartRef.current;
        if (!chart) return;

        chart.setActiveElements([{ datasetIndex: 0, index }]);
        chart.tooltip.setActiveElements([{ datasetIndex: 0, index }]);
        chart.update();
    }, []);

    // Update radar when tab changes
    React.useEffect(() => {
        const panel = skillPanels[activeTab];
        highlightRadar(panel.radarIndex);
    }, [activeTab, highlightRadar]);

    const handleSkillClick = (skillName: string) => {
        // Map skill names to radar indices
        const skillToRadar: Record<string, number> = {
            // Core AI skills → AI Architecture (0) or Retrieval (1)
            'Transformers': 0, 'LLMs': 0, 'Attention Mechanisms': 0,
            'RAG': 1, 'Vector DBs': 1, 'LangChain': 1, 'LangGraph': 1,
            'Prompt Engineering': 0,
            // Deep Learning → Deep Learning (3)
            'PyTorch': 3, 'CNNs': 3, 'RNNs': 3, 'Training Loops': 3,
            'Autograd Systems': 3, 'LSTMs': 3, 'Computer Vision': 3, 'NLP Pipelines': 3,
            // Tools → Eng & Ops (4)
            'Docker': 4, 'Git': 4, 'Linux': 4, 'FastAPI': 4,
            'Next.js': 4, 'Hugging Face': 4, 'Vercel': 4, 'Ollama': 4,
            // Languages → AI Automation (2)
            'Python': 2, 'C++': 2, 'SQL': 2, 'TypeScript': 2,
            'JavaScript': 2, 'HTML/CSS': 2,
        };

        const radarIdx = skillToRadar[skillName];
        if (radarIdx !== undefined) {
            highlightRadar(radarIdx);
        }
    };

    const skillData = {
        labels: radarLabels,
        datasets: [{
            label: 'Proficiency',
            data: radarValues,
            backgroundColor: `${neon}20`,
            borderColor: neon,
            pointBackgroundColor: '#000',
            pointBorderColor: neon,
            pointHoverBackgroundColor: neon,
            pointHoverBorderColor: '#fff',
            borderWidth: 2,
            pointRadius: 5,
            pointHoverRadius: 8,
        }]
    };

    const chartOptions = {
        responsive: true,
        maintainAspectRatio: true,
        scales: {
            r: {
                angleLines: { color: 'rgba(255, 255, 255, 0.06)' },
                grid: { color: 'rgba(255, 255, 255, 0.06)' },
                pointLabels: {
                    color: 'rgba(255, 255, 255, 0.6)',
                    font: { family: 'Inter', size: 10, weight: '600' as const }
                },
                ticks: { display: false },
                suggestedMin: 0,
                suggestedMax: 100,
            }
        },
        plugins: {
            legend: { display: false },
            tooltip: {
                backgroundColor: 'rgba(0, 0, 0, 0.95)',
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

    return (
        <section id="skills" className="py-16 px-4 sm:px-6 scroll-mt-24" data-animate>
            <div className="space-y-8 reveal transition-all duration-1000 ease-[cubic-bezier(0.16,1,0.3,1)]">
                {/* Section Header - single clean heading, no redundant text */}
                <div>
                    <h2 className="text-3xl sm:text-4xl font-bold text-white mb-3">Skills & Expertise</h2>
                    <p className="text-white/50 text-sm sm:text-base max-w-xl">Click any skill to see its corresponding domain proficiency on the radar chart.</p>
                </div>

                {/* Category Tabs */}
                <div className="flex flex-wrap gap-2">
                    {Object.entries(skillPanels).map(([key, panel]) => (
                        <button
                            key={key}
                            onClick={() => setActiveTab(key as SkillKey)}
                            className={clsx(
                                "px-4 py-2 rounded-xl text-xs font-semibold transition-all duration-300 border",
                                activeTab === key
                                    ? "bg-[#00FF7F] text-black border-[#00FF7F] shadow-[0_0_20px_rgba(0,255,127,0.15)]"
                                    : "bg-white/[0.03] border-white/[0.06] text-white/50 hover:text-white/80 hover:bg-white/[0.06] hover:border-white/10"
                            )}
                        >
                            {panel.label}
                        </button>
                    ))}
                </div>

                {/* Skills Content */}
                <div className="rounded-2xl border border-white/[0.06] bg-white/[0.02] p-5 sm:p-6">
                    <div className="grid md:grid-cols-2 gap-6 items-start">
                        {/* Skills Grid - Interactive */}
                        <div className="space-y-2">
                            {skillPanels[activeTab].skills.map((skill) => (
                                <button
                                    key={skill.name}
                                    onClick={() => handleSkillClick(skill.name)}
                                    onMouseEnter={() => setHoveredSkill(skill.name)}
                                    onMouseLeave={() => setHoveredSkill(null)}
                                    className={clsx(
                                        "w-full text-left p-3 rounded-xl border transition-all duration-300 group flex items-center justify-between",
                                        hoveredSkill === skill.name
                                            ? "bg-[#00FF7F]/[0.06] border-[#00FF7F]/20"
                                            : "bg-white/[0.01] border-white/[0.04] hover:bg-white/[0.04] hover:border-white/10"
                                    )}
                                >
                                    <span className={clsx(
                                        "text-sm font-medium transition-colors duration-300",
                                        hoveredSkill === skill.name ? "text-[#00FF7F]" : "text-white/60 group-hover:text-white/80"
                                    )}>
                                        {skill.name}
                                    </span>
                                    <div className="flex items-center gap-3">
                                        {/* Progress bar */}
                                        <div className="w-16 sm:w-24 h-1.5 rounded-full bg-white/[0.06] overflow-hidden">
                                            <div
                                                className="h-full rounded-full bg-gradient-to-r from-[#00FF7F]/60 to-[#00FF7F] transition-all duration-500"
                                                style={{ width: `${skill.level}%` }}
                                            />
                                        </div>
                                        <span className="text-[10px] text-white/30 font-mono w-7 text-right">
                                            {skill.level}
                                        </span>
                                    </div>
                                </button>
                            ))}
                        </div>

                        {/* Radar Chart */}
                        <div className="hidden md:flex items-center justify-center">
                            <div className="w-full max-w-[300px]">
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
