'use client';

import React from 'react';
import { CheckCircle2, AlertTriangle, ShieldAlert, Sparkles, HelpCircle } from 'lucide-react';

interface AtsScoreCircleProps {
    score: number;
    keywordScore?: number;
    formatScore?: number;
    impactScore?: number;
    structureScore?: number;
    size?: number;
    showBreakdown?: boolean;
}

export default function AtsScoreCircle({
    score = 88,
    keywordScore = 85,
    formatScore = 100,
    impactScore = 82,
    structureScore = 95,
    size = 140,
    showBreakdown = true,
}: AtsScoreCircleProps) {
    // Determine color theme based on score range
    const getScoreColor = (val: number) => {
        if (val >= 80) return { stroke: '#8b5cf6', bg: 'rgba(139, 92, 246, 0.15)', text: 'text-violet-400', border: 'border-violet-500/40', badge: 'bg-violet-950/80 text-violet-300' };
        if (val >= 60) return { stroke: '#f59e0b', bg: 'rgba(245, 158, 11, 0.15)', text: 'text-amber-400', border: 'border-amber-500/40', badge: 'bg-amber-950/80 text-amber-300' };
        return { stroke: '#f43f5e', bg: 'rgba(244, 63, 94, 0.15)', text: 'text-rose-400', border: 'border-rose-500/40', badge: 'bg-rose-950/80 text-rose-300' };
    };

    const theme = getScoreColor(score);
    const strokeWidth = 10;
    const radius = (size - strokeWidth) / 2;
    const circumference = 2 * Math.PI * radius;
    const strokeDashoffset = circumference - (score / 100) * circumference;

    return (
        <div className="flex flex-col items-center">
            {/* Circle Gauge */}
            <div className="relative flex items-center justify-center" style={{ width: size, height: size }}>
                <svg className="transform -rotate-90" width={size} height={size}>
                    {/* Background circle */}
                    <circle
                        cx={size / 2}
                        cy={size / 2}
                        r={radius}
                        stroke="#27272a"
                        strokeWidth={strokeWidth}
                        fill="transparent"
                    />
                    {/* Animated score stroke */}
                    <circle
                        cx={size / 2}
                        cy={size / 2}
                        r={radius}
                        stroke={theme.stroke}
                        strokeWidth={strokeWidth}
                        strokeDasharray={circumference}
                        strokeDashoffset={strokeDashoffset}
                        strokeLinecap="round"
                        fill="transparent"
                        className="transition-all duration-1000 ease-out"
                    />
                </svg>

                {/* Center content */}
                <div className="absolute inset-0 flex flex-col items-center justify-center text-center">
                    <span className={`text-3xl font-extrabold tracking-tight ${theme.text}`}>
                        {score}%
                    </span>
                    <span className="text-[11px] font-semibold text-zinc-400 uppercase tracking-wider">
                        ATS Score
                    </span>
                </div>
            </div>

            {/* Compliance Badge */}
            <div className={`mt-3 px-3 py-1 text-xs font-semibold rounded-full border ${theme.border} ${theme.badge} flex items-center gap-1.5 shadow-sm`}>
                {score >= 80 ? (
                    <>
                        <CheckCircle2 className="w-3.5 h-3.5 text-violet-400" />
                        100% ATS Compliant
                    </>
                ) : score >= 60 ? (
                    <>
                        <AlertTriangle className="w-3.5 h-3.5 text-amber-400" />
                        Needs AI Keyword Boost
                    </>
                ) : (
                    <>
                        <ShieldAlert className="w-3.5 h-3.5 text-rose-400" />
                        High Risk of ATS Rejection
                    </>
                )}
            </div>

            {/* Optional Breakdown Grid */}
            {showBreakdown && (
                <div className="w-full mt-5 space-y-2.5 pt-4 border-t border-zinc-800/80">
                    <div className="flex items-center justify-between text-xs font-medium">
                        <span className="text-zinc-400 flex items-center gap-1.5">
                            <Sparkles className="w-3.5 h-3.5 text-violet-400" />
                            JD Keyword Match
                        </span>
                        <span className="text-zinc-200 font-bold">{keywordScore}%</span>
                    </div>
                    <div className="w-full bg-zinc-800 rounded-full h-1.5 overflow-hidden">
                        <div className="bg-violet-500 h-1.5 rounded-full transition-all duration-700" style={{ width: `${keywordScore}%` }} />
                    </div>

                    <div className="flex items-center justify-between text-xs font-medium pt-1">
                        <span className="text-zinc-400 flex items-center gap-1.5">
                            <CheckCircle2 className="w-3.5 h-3.5 text-emerald-400" />
                            Format & Parsing
                        </span>
                        <span className="text-zinc-200 font-bold">{formatScore}%</span>
                    </div>
                    <div className="w-full bg-zinc-800 rounded-full h-1.5 overflow-hidden">
                        <div className="bg-emerald-500 h-1.5 rounded-full transition-all duration-700" style={{ width: `${formatScore}%` }} />
                    </div>

                    <div className="flex items-center justify-between text-xs font-medium pt-1">
                        <span className="text-zinc-400 flex items-center gap-1.5">
                            <HelpCircle className="w-3.5 h-3.5 text-indigo-400" />
                            Action Verbs & Impact
                        </span>
                        <span className="text-zinc-200 font-bold">{impactScore}%</span>
                    </div>
                    <div className="w-full bg-zinc-800 rounded-full h-1.5 overflow-hidden">
                        <div className="bg-indigo-500 h-1.5 rounded-full transition-all duration-700" style={{ width: `${impactScore}%` }} />
                    </div>
                </div>
            )}
        </div>
    );
}
