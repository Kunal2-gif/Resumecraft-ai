'use client';

import React from 'react';
import Link from 'next/link';
import Navbar from '@/components/Navbar';
import AtsScoreCircle from '@/components/AtsScoreCircle';
import {
    Sparkles,
    UploadCloud,
    FileText,
    Wand2,
    Download,
    CheckCircle2,
    ArrowRight,
    ShieldCheck,
    Cpu,
    Zap,
    Target,
    BarChart3
} from 'lucide-react';

export default function LandingPage() {
    return (
        <div className="min-h-screen bg-[#09090b] text-[#fafafa] relative overflow-hidden selection:bg-violet-500 selection:text-white">
            {/* Navbar */}
            <Navbar />

            {/* Hero Glow Background */}
            <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[1000px] h-[500px] bg-gradient-to-b from-violet-600/20 via-purple-600/5 to-transparent blur-3xl pointer-events-none -z-10" />

            {/* HERO SECTION */}
            <section className="relative pt-16 pb-20 md:pt-24 md:pb-32 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="text-center space-y-6 max-w-4xl mx-auto">

                    {/* Pill Badge */}
                    <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-zinc-900/90 border border-violet-500/30 text-violet-300 text-xs font-semibold shadow-lg shadow-violet-500/10">
                        <Sparkles className="w-3.5 h-3.5 text-violet-400 animate-pulse" />
                        <span>AI-Powered Resume Tailoring Engine v1.0</span>
                        <span className="w-1.5 h-1.5 rounded-full bg-violet-400" />
                    </div>

                    {/* Headline */}
                    <h1 className="text-4xl sm:text-6xl lg:text-7xl font-extrabold tracking-tight text-white leading-[1.1]">
                        Pass the ATS. Land <br className="hidden sm:inline" />
                        <span className="text-gradient">3x More Interviews.</span>
                    </h1>

                    {/* Subtitle */}
                    <p className="text-lg sm:text-xl text-zinc-400 max-w-2xl mx-auto font-normal leading-relaxed">
                        Upload your resume, paste any job description, and watch our AI recalculate your real-time
                        <span className="text-violet-300 font-semibold"> ATS Score (0-100%)</span> while optimizing keywords, bullet points, and formatting in 3 ATS-tested templates.
                    </p>

                    {/* Action Buttons */}
                    <div className="flex flex-col sm:flex-row items-center justify-center gap-4 pt-4">
                        <Link
                            href="/builder"
                            className="w-full sm:w-auto px-8 py-4 text-base font-semibold text-white bg-gradient-to-r from-violet-600 to-indigo-600 hover:from-violet-500 hover:to-indigo-500 rounded-xl shadow-xl shadow-violet-600/30 border border-violet-400/30 flex items-center justify-center gap-2.5 transition-all hover:scale-[1.02]"
                        >
                            <Wand2 className="w-5 h-5 text-violet-200" />
                            <span>Tailor Resume Now — Free</span>
                            <ArrowRight className="w-5 h-5" />
                        </Link>

                        <a
                            href="#demo"
                            className="w-full sm:w-auto px-6 py-4 text-base font-semibold text-zinc-300 bg-zinc-900/80 hover:bg-zinc-800 rounded-xl border border-zinc-800 flex items-center justify-center gap-2 transition-colors"
                        >
                            <span>See Live Score Engine</span>
                        </a>
                    </div>

                    {/* Trust Metrics */}
                    <div className="pt-8 flex flex-wrap items-center justify-center gap-6 sm:gap-12 text-xs font-medium text-zinc-400">
                        <div className="flex items-center gap-2">
                            <CheckCircle2 className="w-4 h-4 text-violet-400" />
                            <span>Workday & Greenhouse Compatible</span>
                        </div>
                        <div className="flex items-center gap-2">
                            <CheckCircle2 className="w-4 h-4 text-violet-400" />
                            <span>300 DPI Print PDF Export</span>
                        </div>
                        <div className="flex items-center gap-2">
                            <CheckCircle2 className="w-4 h-4 text-violet-400" />
                            <span>Zero Keyword Hallucination</span>
                        </div>
                    </div>
                </div>

                {/* DEMO MOCKUP PREVIEW CARD */}
                <div id="demo" className="mt-16 relative max-w-5xl mx-auto rounded-2xl linear-card p-4 sm:p-8 border border-zinc-800 shadow-2xl">
                    <div className="absolute -top-3 right-8 px-3 py-1 bg-violet-600 text-white text-[11px] font-bold rounded-full uppercase tracking-wider shadow-lg">
                        Live Preview Studio
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-12 gap-8 items-center">

                        {/* Left Mock Inputs */}
                        <div className="md:col-span-6 space-y-4 text-left">
                            <div className="flex items-center justify-between pb-2 border-b border-zinc-800">
                                <span className="text-xs font-bold text-zinc-300 uppercase tracking-wider flex items-center gap-2">
                                    <UploadCloud className="w-4 h-4 text-violet-400" />
                                    Source Input
                                </span>
                                <span className="text-[11px] text-violet-400 font-semibold">Senior Frontend Architect JD</span>
                            </div>

                            <div className="p-3.5 bg-zinc-900/80 rounded-xl border border-zinc-800 space-y-2">
                                <div className="flex justify-between items-center text-xs">
                                    <span className="text-zinc-400 font-medium">Uploaded Resume:</span>
                                    <span className="text-zinc-200 font-bold">Alex_Rivera_Resume.pdf</span>
                                </div>
                                <div className="text-[11px] text-zinc-500 line-clamp-2">
                                    "Senior Full Stack Engineer with 7+ years experience in React, TypeScript, Next.js, AWS microservices..."
                                </div>
                            </div>

                            <div className="p-3.5 bg-zinc-900/80 rounded-xl border border-zinc-800 space-y-2">
                                <div className="flex justify-between items-center text-xs">
                                    <span className="text-zinc-400 font-medium">Target Job Description:</span>
                                    <span className="text-emerald-400 font-semibold text-[11px]">9 Missing Keywords Found</span>
                                </div>
                                <div className="flex flex-wrap gap-1.5 pt-1">
                                    <span className="px-2 py-0.5 text-[10px] font-semibold bg-rose-950/60 border border-rose-500/30 text-rose-300 rounded">
                                        + GraphQL Schema
                                    </span>
                                    <span className="px-2 py-0.5 text-[10px] font-semibold bg-rose-950/60 border border-rose-500/30 text-rose-300 rounded">
                                        + Serverless Architecture
                                    </span>
                                    <span className="px-2 py-0.5 text-[10px] font-semibold bg-violet-950/60 border border-violet-500/30 text-violet-300 rounded">
                                        ✓ Next.js 14
                                    </span>
                                </div>
                            </div>

                            <Link
                                href="/builder"
                                className="w-full py-3 px-4 rounded-xl bg-violet-950/50 hover:bg-violet-900/50 border border-violet-500/40 text-violet-300 text-xs font-semibold flex items-center justify-center gap-2 transition-all"
                            >
                                <Wand2 className="w-4 h-4 text-violet-400" />
                                <span>Apply AI One-Click Keyword Fix</span>
                            </Link>
                        </div>

                        {/* Right Mock Score & Preview */}
                        <div className="md:col-span-6 flex flex-col items-center justify-center p-6 bg-zinc-950/60 rounded-xl border border-zinc-800">
                            <AtsScoreCircle
                                score={98}
                                keywordScore={96}
                                formatScore={100}
                                impactScore={98}
                                structureScore={100}
                                size={150}
                            />
                        </div>

                    </div>
                </div>
            </section>

            {/* CORE FEATURES GRID */}
            <section id="features" className="py-20 border-t border-zinc-800/80 bg-zinc-950/40">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

                    <div className="text-center space-y-3 mb-16">
                        <h2 className="text-xs font-bold uppercase tracking-widest text-violet-400">
                            Engineered For Job Seekers
                        </h2>
                        <h3 className="text-3xl sm:text-4xl font-extrabold text-white">
                            Everything You Need to Beat ATS Bots
                        </h3>
                        <p className="text-zinc-400 max-w-xl mx-auto text-sm">
                            99% of top Fortune 500 companies use ATS scanners like Workday and Taleo. ResumeCraft AI ensures your resume never gets filtered out automatically.
                        </p>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-3 gap-6">

                        {/* Feature 1 */}
                        <div className="p-6 rounded-2xl linear-card border border-zinc-800 space-y-3">
                            <div className="w-10 h-10 rounded-xl bg-violet-950/80 border border-violet-500/30 flex items-center justify-center text-violet-400">
                                <Target className="w-5 h-5" />
                            </div>
                            <h4 className="text-lg font-bold text-white">Real-Time ATS Match Score</h4>
                            <p className="text-xs text-zinc-400 leading-relaxed">
                                Instant 0-100% scoring engine evaluating keyword density, section headers, formatting compliance, and impact verbs against target JDs.
                            </p>
                        </div>

                        {/* Feature 2 */}
                        <div className="p-6 rounded-2xl linear-card border border-zinc-800 space-y-3">
                            <div className="w-10 h-10 rounded-xl bg-violet-950/80 border border-violet-500/30 flex items-center justify-center text-violet-400">
                                <Wand2 className="w-5 h-5" />
                            </div>
                            <h4 className="text-lg font-bold text-white">AI Bullet & Keyword Rewriter</h4>
                            <p className="text-xs text-zinc-400 leading-relaxed">
                                Rewrites experience bullet points following Google’s XYZ formula (*Accomplished X by measuring Y doing Z*), incorporating missing keywords seamlessly.
                            </p>
                        </div>

                        {/* Feature 3 */}
                        <div className="p-6 rounded-2xl linear-card border border-zinc-800 space-y-3">
                            <div className="w-10 h-10 rounded-xl bg-violet-950/80 border border-violet-500/30 flex items-center justify-center text-violet-400">
                                <Download className="w-5 h-5" />
                            </div>
                            <h4 className="text-lg font-bold text-white">3 Templates & Vector PDF</h4>
                            <p className="text-xs text-zinc-400 leading-relaxed">
                                Switch effortlessly between Modern Tech, Executive Clean, and Creative Minimal templates. Export 300DPI vector PDFs ready for online job portals.
                            </p>
                        </div>

                    </div>
                </div>
            </section>

            {/* TEMPLATE SHOWCASE */}
            <section id="templates" className="py-20 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
                <div className="space-y-3 mb-12">
                    <h2 className="text-xs font-bold uppercase tracking-widest text-violet-400">
                        ATS-Tested Design System
                    </h2>
                    <h3 className="text-3xl font-extrabold text-white">
                        3 Templates Approved by Recruiters & ATS Scanners
                    </h3>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-3 gap-6">
                    <div className="p-4 rounded-xl bg-zinc-900 border border-zinc-800 text-left space-y-3">
                        <div className="h-44 bg-zinc-800/60 rounded border border-zinc-700/50 p-3 overflow-hidden text-[8px] text-zinc-400 font-mono">
                            <div className="font-bold text-violet-400 text-[10px] uppercase">Modern Tech</div>
                            <div className="mt-1 border-b border-zinc-700 pb-1">Alex Rivera — Senior Software Engineer</div>
                            <div className="mt-2 space-y-1">
                                <div>• Architected microservices with Next.js & AWS</div>
                                <div>• Reduced API response time by 45%</div>
                            </div>
                        </div>
                        <div className="flex items-center justify-between">
                            <span className="text-sm font-semibold text-white">Modern Tech</span>
                            <span className="text-[10px] font-bold px-2 py-0.5 bg-violet-950 text-violet-300 rounded border border-violet-500/30">Default</span>
                        </div>
                    </div>

                    <div className="p-4 rounded-xl bg-zinc-900 border border-zinc-800 text-left space-y-3">
                        <div className="h-44 bg-zinc-800/60 rounded border border-zinc-700/50 p-3 overflow-hidden text-[8px] text-zinc-400 font-serif">
                            <div className="font-bold text-amber-400 text-[10px] uppercase text-center">Executive Clean</div>
                            <div className="mt-1 border-b border-zinc-700 pb-1 text-center">ALEX RIVERA | VP ENGINEERING</div>
                            <div className="mt-2 space-y-1">
                                <div>EXECUTIVE PROFILE</div>
                                <div>Led 40+ engineers across cloud architecture...</div>
                            </div>
                        </div>
                        <div className="flex items-center justify-between">
                            <span className="text-sm font-semibold text-white">Executive Clean</span>
                            <span className="text-[10px] font-bold px-2 py-0.5 bg-zinc-800 text-zinc-400 rounded">Management</span>
                        </div>
                    </div>

                    <div className="p-4 rounded-xl bg-zinc-900 border border-zinc-800 text-left space-y-3">
                        <div className="h-44 bg-zinc-800/60 rounded border border-zinc-700/50 p-3 overflow-hidden text-[8px] text-zinc-400 flex gap-2">
                            <div className="w-1/3 border-r border-zinc-700 pr-1">
                                <div className="font-bold text-emerald-400 text-[9px]">Alex Rivera</div>
                                <div className="text-[7px]">San Francisco</div>
                            </div>
                            <div className="w-2/3">
                                <div className="font-bold text-zinc-300 text-[8px]">EXPERIENCE</div>
                                <div className="text-[7px]">Full Stack Dev</div>
                            </div>
                        </div>
                        <div className="flex items-center justify-between">
                            <span className="text-sm font-semibold text-white">Creative Minimal</span>
                            <span className="text-[10px] font-bold px-2 py-0.5 bg-zinc-800 text-zinc-400 rounded">Design & Product</span>
                        </div>
                    </div>
                </div>
            </section>

            {/* FOOTER CALL TO ACTION */}
            <footer className="border-t border-zinc-800 py-12 bg-zinc-950">
                <div className="max-w-7xl mx-auto px-4 text-center space-y-6">
                    <h3 className="text-2xl font-bold text-white">Ready to Land Your Dream Tech Job?</h3>
                    <Link
                        href="/builder"
                        className="inline-flex items-center gap-2 px-8 py-3.5 bg-gradient-to-r from-violet-600 to-indigo-600 text-white font-semibold rounded-xl shadow-lg shadow-violet-600/30 hover:scale-105 transition-all text-sm"
                    >
                        <span>Launch Resume Studio</span>
                        <ArrowRight className="w-4 h-4" />
                    </Link>
                    <div className="text-xs text-zinc-500 pt-4">
                        © 2026 ResumeCraft AI. Built with Next.js, Tailwind CSS, & Advanced NLP Engine.
                    </div>
                </div>
            </footer>
        </div>
    );
}
