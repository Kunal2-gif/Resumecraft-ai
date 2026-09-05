'use client';

import React from 'react';
import Link from 'next/link';
import { Sparkles, FileText, CheckCircle2, ArrowRight, ShieldCheck } from 'lucide-react';

export default function Navbar() {
    return (
        <header className="sticky top-0 z-50 w-full border-b border-zinc-800/80 bg-[#09090b]/80 backdrop-blur-xl">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-16 flex items-center justify-between">

                {/* Brand Logo */}
                <Link href="/" className="flex items-center gap-2.5 group">
                    <div className="w-9 h-9 rounded-xl bg-gradient-to-tr from-violet-600 to-indigo-500 flex items-center justify-center shadow-lg shadow-violet-500/20 group-hover:scale-105 transition-transform">
                        <Sparkles className="w-5 h-5 text-white" />
                    </div>
                    <div className="flex flex-col">
                        <div className="flex items-center gap-2">
                            <span className="font-bold text-lg tracking-tight text-white group-hover:text-violet-400 transition-colors">
                                ResumeCraft <span className="text-violet-400 font-extrabold">AI</span>
                            </span>
                            <span className="px-2 py-0.5 text-[10px] font-semibold bg-violet-950/80 border border-violet-500/30 text-violet-300 rounded-full flex items-center gap-1">
                                <ShieldCheck className="w-3 h-3 text-violet-400" />
                                100% ATS
                            </span>
                        </div>
                    </div>
                </Link>

                {/* Center Nav Links */}
                <nav className="hidden md:flex items-center gap-8 text-sm font-medium text-zinc-400">
                    <Link href="/" className="hover:text-white transition-colors">
                        Home
                    </Link>
                    <Link href="/builder" className="hover:text-white transition-colors flex items-center gap-1.5">
                        <FileText className="w-4 h-4 text-violet-400" />
                        AI Resume Builder
                    </Link>
                    <a href="#features" className="hover:text-white transition-colors">
                        ATS Engine
                    </a>
                    <a href="#templates" className="hover:text-white transition-colors">
                        Templates
                    </a>
                </nav>

                {/* Right CTA */}
                <div className="flex items-center gap-3">
                    <Link
                        href="/builder"
                        className="px-4 py-2 text-sm font-semibold text-white bg-gradient-to-r from-violet-600 to-purple-600 hover:from-violet-500 hover:to-purple-500 rounded-lg shadow-lg shadow-violet-600/25 border border-violet-400/30 flex items-center gap-2 transition-all hover:gap-3"
                    >
                        <span>Build My Resume</span>
                        <ArrowRight className="w-4 h-4" />
                    </Link>
                </div>

            </div>
        </header>
    );
}
