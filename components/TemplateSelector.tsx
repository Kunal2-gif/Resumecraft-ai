'use client';

import React from 'react';
import { LayoutTemplate, Sparkles, Award, Palette } from 'lucide-react';

export type TemplateId = 'modern' | 'executive' | 'creative';

interface TemplateSelectorProps {
    activeTemplate: TemplateId;
    onChange: (id: TemplateId) => void;
}

export default function TemplateSelector({ activeTemplate, onChange }: TemplateSelectorProps) {
    const templates: { id: TemplateId; name: string; tag: string; icon: React.ReactNode; desc: string }[] = [
        {
            id: 'modern',
            name: 'Modern Tech',
            tag: 'Most Popular',
            icon: <Sparkles className="w-4 h-4 text-violet-400" />,
            desc: 'Clean top header, skill pills, single-column Workday & Greenhouse optimized.',
        },
        {
            id: 'executive',
            name: 'Executive Clean',
            tag: 'Classic',
            icon: <Award className="w-4 h-4 text-amber-400" />,
            desc: 'Elegant serif headings, horizontal dividers, tailored for senior & management roles.',
        },
        {
            id: 'creative',
            name: 'Creative Minimal',
            tag: 'Startup',
            icon: <Palette className="w-4 h-4 text-emerald-400" />,
            desc: 'Structured side column layout with subtle violet accents, clean typography.',
        },
    ];

    return (
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-3">
            {templates.map((tpl) => {
                const isActive = activeTemplate === tpl.id;
                return (
                    <button
                        key={tpl.id}
                        type="button"
                        onClick={() => onChange(tpl.id)}
                        className={`text-left p-3.5 rounded-xl border transition-all flex flex-col justify-between ${isActive
                                ? 'bg-violet-950/40 border-violet-500 shadow-lg shadow-violet-500/10 ring-1 ring-violet-500'
                                : 'bg-zinc-900/60 border-zinc-800 hover:border-zinc-700 hover:bg-zinc-900'
                            }`}
                    >
                        <div>
                            <div className="flex items-center justify-between mb-1.5">
                                <div className="flex items-center gap-2">
                                    {tpl.icon}
                                    <span className={`text-sm font-semibold ${isActive ? 'text-violet-200' : 'text-zinc-200'}`}>
                                        {tpl.name}
                                    </span>
                                </div>
                                <span className="text-[10px] font-bold px-1.5 py-0.5 rounded bg-zinc-800 text-zinc-400">
                                    {tpl.tag}
                                </span>
                            </div>
                            <p className="text-xs text-zinc-400 line-clamp-2">{tpl.desc}</p>
                        </div>

                        <div className="mt-2.5 pt-2 border-t border-zinc-800/80 flex items-center justify-between text-[11px]">
                            <span className="text-emerald-400 font-medium">100% ATS Ready</span>
                            <span className={isActive ? 'text-violet-400 font-bold' : 'text-zinc-500'}>
                                {isActive ? 'Active' : 'Select'}
                            </span>
                        </div>
                    </button>
                );
            })}
        </div>
    );
}
