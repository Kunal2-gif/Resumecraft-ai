'use client';

import React, { useState } from 'react';
import Link from 'next/link';
import Navbar from '@/components/Navbar';
import AtsScoreCircle from '@/components/AtsScoreCircle';
import TemplateSelector, { TemplateId } from '@/components/TemplateSelector';
import {
    ResumeData,
    initialResumeData,
    ResumeRenderer
} from '@/components/ResumeTemplates';
import {
    UploadCloud,
    FileText,
    Wand2,
    Download,
    Plus,
    Trash2,
    Sparkles,
    CheckCircle2,
    ArrowLeft,
    RefreshCw,
    Sliders,
    Layers,
    Search,
    Check
} from 'lucide-react';

export default function BuilderPage() {
    const [activeTab, setActiveTab] = useState<'jd' | 'editor' | 'ai'>('jd');
    const [template, setTemplate] = useState<TemplateId>('modern');
    const [resumeData, setResumeData] = useState<ResumeData>(initialResumeData);

    // Job Description & ATS Analysis state
    const [jobDescription, setJobDescription] = useState<string>(
        `Target Role: Senior Full Stack Engineer\nRequirements:\n- 5+ years experience with Next.js, React, and TypeScript\n- Strong experience building GraphQL APIs and microservices\n- Experience with AWS Serverless (Lambda, S3, ECS)\n- Proven ability to write high-test-coverage code and mentor engineers\n- Knowledge of CI/CD pipelines and Docker containerization`
    );

    const [atsScore, setAtsScore] = useState<number>(88);
    const [keywordScore, setKeywordScore] = useState<number>(85);
    const [formatScore, setFormatScore] = useState<number>(100);
    const [impactScore, setImpactScore] = useState<number>(82);
    const [isAnalyzing, setIsAnalyzing] = useState<boolean>(false);
    const [isAiRewriting, setIsAiRewriting] = useState<boolean>(false);

    // Missing keywords extracted from JD
    const [missingKeywords, setMissingKeywords] = useState<string[]>([
        "GraphQL Schemas",
        "CI/CD Pipelines",
        "Jest & Cypress TDD",
        "Docker Containerization",
        "Microservice Architecture"
    ]);

    // Handle section text updates
    const handlePersonalInfoChange = (field: keyof ResumeData, value: string) => {
        setResumeData((prev) => ({ ...prev, [field]: value }));
    };

    const handleSkillAdd = (newSkill: string) => {
        if (!newSkill.trim()) return;
        if (resumeData.skills.includes(newSkill)) return;
        setResumeData((prev) => ({
            ...prev,
            skills: [...prev.skills, newSkill.trim()]
        }));
    };

    const handleSkillRemove = (skillToRemove: string) => {
        setResumeData((prev) => ({
            ...prev,
            skills: prev.skills.filter((s) => s !== skillToRemove)
        }));
    };

    const handleAddKeywordToSkills = (keyword: string) => {
        handleSkillAdd(keyword);
        setMissingKeywords((prev) => prev.filter((k) => k !== keyword));
        // Dynamic score boost on keyword fix
        setAtsScore((prev) => Math.min(100, prev + 3));
        setKeywordScore((prev) => Math.min(100, prev + 4));
    };

    const handleExperienceChange = (id: string, field: string, value: string) => {
        setResumeData((prev) => ({
            ...prev,
            experiences: prev.experiences.map((exp) =>
                exp.id === id ? { ...exp, [field]: value } : exp
            )
        }));
    };

    const handleBulletChange = (expId: string, bulletIdx: number, value: string) => {
        setResumeData((prev) => ({
            ...prev,
            experiences: prev.experiences.map((exp) => {
                if (exp.id !== expId) return exp;
                const updatedBullets = [...exp.bullets];
                updatedBullets[bulletIdx] = value;
                return { ...exp, bullets: updatedBullets };
            })
        }));
    };

    const handleAddBullet = (expId: string) => {
        setResumeData((prev) => ({
            ...prev,
            experiences: prev.experiences.map((exp) => {
                if (exp.id !== expId) return exp;
                return { ...exp, bullets: [...exp.bullets, "Accomplished [Metric] by implementing [Feature] using [Technology]."] };
            })
        }));
    };

    const handleRemoveBullet = (expId: string, bulletIdx: number) => {
        setResumeData((prev) => ({
            ...prev,
            experiences: prev.experiences.map((exp) => {
                if (exp.id !== expId) return exp;
                return { ...exp, bullets: exp.bullets.filter((_, idx) => idx !== bulletIdx) };
            })
        }));
    };

    // Run ATS Analysis Simulation
    const runAtsAnalysis = () => {
        setIsAnalyzing(true);
        setTimeout(() => {
            setIsAnalyzing(false);
            setAtsScore(94);
            setKeywordScore(92);
            setImpactScore(95);
        }, 800);
    };

    // AI Bullet Points Enhancer Simulation
    const runAiRewriteBullets = () => {
        setIsAiRewriting(true);
        setTimeout(() => {
            setIsAiRewriting(false);
            setResumeData((prev) => ({
                ...prev,
                experiences: prev.experiences.map((exp) => ({
                    ...exp,
                    bullets: exp.bullets.map((bullet) => {
                        if (bullet.includes("Spearheaded AI")) return "Spearheaded AI keyword matching NLP integration, accelerating candidate placement conversion by 42% across 150K user sessions.";
                        if (bullet.includes("Architected next-generation")) return "Architected high-concurrency Next.js 14 & AWS Serverless application, reducing page load latency by 58% and hosting costs by $32K.";
                        return bullet;
                    })
                }))
            }));
            setAtsScore(98);
            setImpactScore(98);
        }, 1000);
    };

    // PDF Export Trigger
    const handleDownloadPdf = () => {
        window.print();
    };

    return (
        <div className="min-h-screen bg-[#09090b] text-[#fafafa] flex flex-col selection:bg-violet-500 selection:text-white">

            {/* BUILDER HEADER BAR */}
            <header className="no-print sticky top-0 z-40 w-full border-b border-zinc-800 bg-[#09090b]/95 backdrop-blur-md px-4 py-3 flex flex-wrap items-center justify-between gap-4">

                {/* Left Logo & Back */}
                <div className="flex items-center gap-4">
                    <Link href="/" className="p-2 rounded-lg bg-zinc-900 hover:bg-zinc-800 border border-zinc-800 text-zinc-400 hover:text-white transition-colors">
                        <ArrowLeft className="w-4 h-4" />
                    </Link>
                    <div className="flex items-center gap-2">
                        <div className="w-8 h-8 rounded-lg bg-gradient-to-tr from-violet-600 to-indigo-500 flex items-center justify-center shadow-md shadow-violet-500/20">
                            <Sparkles className="w-4 h-4 text-white" />
                        </div>
                        <span className="font-bold text-base tracking-tight text-white hidden sm:inline">
                            ResumeCraft <span className="text-violet-400">Studio</span>
                        </span>
                    </div>
                </div>

                {/* Template Quick Switcher */}
                <div className="flex items-center gap-2 bg-zinc-900/90 p-1 rounded-xl border border-zinc-800 text-xs">
                    <span className="text-zinc-500 px-2 font-medium hidden md:inline">Template:</span>
                    {(['modern', 'executive', 'creative'] as TemplateId[]).map((tId) => (
                        <button
                            key={tId}
                            onClick={() => setTemplate(tId)}
                            className={`px-3 py-1.5 rounded-lg font-semibold capitalize transition-all ${template === tId
                                    ? 'bg-violet-600 text-white shadow-sm'
                                    : 'text-zinc-400 hover:text-zinc-200 hover:bg-zinc-800'
                                }`}
                        >
                            {tId}
                        </button>
                    ))}
                </div>

                {/* Header Actions */}
                <div className="flex items-center gap-3">
                    <button
                        onClick={runAiRewriteBullets}
                        disabled={isAiRewriting}
                        className="px-3.5 py-2 text-xs font-semibold text-violet-300 bg-violet-950/80 hover:bg-violet-900/80 border border-violet-500/40 rounded-lg flex items-center gap-2 transition-all shadow-sm"
                    >
                        <Wand2 className={`w-4 h-4 text-violet-400 ${isAiRewriting ? 'animate-spin' : ''}`} />
                        <span className="hidden sm:inline">{isAiRewriting ? 'Optimizing...' : 'AI Enhance All'}</span>
                    </button>

                    <button
                        onClick={handleDownloadPdf}
                        className="px-4 py-2 text-xs font-bold text-white bg-gradient-to-r from-violet-600 to-indigo-600 hover:from-violet-500 hover:to-indigo-500 rounded-lg shadow-lg shadow-violet-600/25 border border-violet-400/30 flex items-center gap-2 transition-all"
                    >
                        <Download className="w-4 h-4" />
                        <span>Download PDF</span>
                    </button>
                </div>

            </header>

            {/* MAIN 40/60 BUILDER CONTAINER */}
            <div className="flex-1 grid grid-cols-1 lg:grid-cols-12 gap-0 overflow-hidden">

                {/* ========================================================================= */}
                {/* LEFT PANEL (40% Width -> lg:col-span-5) : Inputs, JD & AI Studio */}
                {/* ========================================================================= */}
                <div className="no-print lg:col-span-5 border-r border-zinc-800 bg-[#09090b] flex flex-col h-[calc(100vh-61px)] overflow-y-auto">

                    {/* Tab Selection */}
                    <div className="flex border-b border-zinc-800 bg-zinc-950/60 sticky top-0 z-20">
                        <button
                            onClick={() => setActiveTab('jd')}
                            className={`flex-1 py-3 px-3 text-xs font-semibold flex items-center justify-center gap-2 border-b-2 transition-colors ${activeTab === 'jd'
                                    ? 'border-violet-500 text-violet-300 bg-violet-950/20'
                                    : 'border-transparent text-zinc-400 hover:text-zinc-200'
                                }`}
                        >
                            <UploadCloud className="w-4 h-4" />
                            <span>1. Resume & JD</span>
                        </button>
                        <button
                            onClick={() => setActiveTab('editor')}
                            className={`flex-1 py-3 px-3 text-xs font-semibold flex items-center justify-center gap-2 border-b-2 transition-colors ${activeTab === 'editor'
                                    ? 'border-violet-500 text-violet-300 bg-violet-950/20'
                                    : 'border-transparent text-zinc-400 hover:text-zinc-200'
                                }`}
                        >
                            <FileText className="w-4 h-4" />
                            <span>2. Content Editor</span>
                        </button>
                        <button
                            onClick={() => setActiveTab('ai')}
                            className={`flex-1 py-3 px-3 text-xs font-semibold flex items-center justify-center gap-2 border-b-2 transition-colors ${activeTab === 'ai'
                                    ? 'border-violet-500 text-violet-300 bg-violet-950/20'
                                    : 'border-transparent text-zinc-400 hover:text-zinc-200'
                                }`}
                        >
                            <Wand2 className="w-4 h-4 text-violet-400" />
                            <span>3. AI Rewriter</span>
                        </button>
                    </div>

                    {/* TAB 1: RESUME UPLOAD & JOB DESCRIPTION */}
                    {activeTab === 'jd' && (
                        <div className="p-5 space-y-6">

                            {/* Upload Drop Zone */}
                            <div className="space-y-2">
                                <label className="text-xs font-bold text-zinc-300 uppercase tracking-wider flex items-center gap-2">
                                    <UploadCloud className="w-4 h-4 text-violet-400" />
                                    Upload Existing Resume
                                </label>
                                <div className="p-6 rounded-xl border-2 border-dashed border-zinc-800 bg-zinc-950/60 hover:border-violet-500/50 hover:bg-zinc-900/40 transition-all text-center group cursor-pointer">
                                    <UploadCloud className="w-8 h-8 text-zinc-500 group-hover:text-violet-400 transition-colors mx-auto mb-2" />
                                    <p className="text-xs font-semibold text-zinc-300">Drag & drop your resume PDF or DOCX</p>
                                    <p className="text-[11px] text-zinc-500 mt-1">Or click to select file from computer</p>
                                </div>
                            </div>

                            {/* Job Description Textarea */}
                            <div className="space-y-2">
                                <div className="flex justify-between items-center">
                                    <label className="text-xs font-bold text-zinc-300 uppercase tracking-wider flex items-center gap-2">
                                        <FileText className="w-4 h-4 text-violet-400" />
                                        Target Job Description (JD)
                                    </label>
                                    <span className="text-[11px] text-violet-400 font-medium">Paste JD for 100% ATS Match</span>
                                </div>
                                <textarea
                                    rows={8}
                                    value={jobDescription}
                                    onChange={(e) => setJobDescription(e.target.value)}
                                    placeholder="Paste the target job description requirements here..."
                                    className="w-full p-3 bg-zinc-900/90 border border-zinc-800 rounded-xl text-xs text-zinc-200 focus:border-violet-500 focus:outline-none resize-none font-mono"
                                />
                            </div>

                            {/* Action Button */}
                            <button
                                onClick={runAtsAnalysis}
                                disabled={isAnalyzing}
                                className="w-full py-3 px-4 rounded-xl bg-gradient-to-r from-violet-600 to-indigo-600 hover:from-violet-500 hover:to-indigo-500 text-white font-bold text-xs flex items-center justify-center gap-2 shadow-lg shadow-violet-600/20 transition-all"
                            >
                                <RefreshCw className={`w-4 h-4 ${isAnalyzing ? 'animate-spin' : ''}`} />
                                <span>{isAnalyzing ? 'Analyzing ATS Match...' : 'Recalculate ATS Match Score'}</span>
                            </button>

                            {/* Missing Keywords Box */}
                            <div className="p-4 rounded-xl bg-zinc-950/80 border border-zinc-800 space-y-3">
                                <div className="flex items-center justify-between">
                                    <span className="text-xs font-bold text-zinc-300 flex items-center gap-1.5">
                                        <Sparkles className="w-3.5 h-3.5 text-violet-400" />
                                        Recommended JD Keywords
                                    </span>
                                    <span className="text-[11px] text-amber-400 font-semibold">{missingKeywords.length} Missing</span>
                                </div>
                                <div className="flex flex-wrap gap-2">
                                    {missingKeywords.map((keyword, idx) => (
                                        <button
                                            key={idx}
                                            onClick={() => handleAddKeywordToSkills(keyword)}
                                            className="px-2.5 py-1 text-[11px] font-semibold bg-violet-950/60 hover:bg-violet-900/80 border border-violet-500/40 text-violet-300 rounded-lg flex items-center gap-1 transition-all group"
                                            title="Click to add this keyword to resume skills"
                                        >
                                            <span>+ {keyword}</span>
                                        </button>
                                    ))}
                                    {missingKeywords.length === 0 && (
                                        <span className="text-xs text-emerald-400 font-semibold flex items-center gap-1">
                                            <Check className="w-4 h-4" /> All critical keywords added!
                                        </span>
                                    )}
                                </div>
                            </div>

                        </div>
                    )}

                    {/* TAB 2: CONTENT EDITOR */}
                    {activeTab === 'editor' && (
                        <div className="p-5 space-y-6">

                            {/* Personal Info */}
                            <div className="space-y-3">
                                <h3 className="text-xs font-bold text-violet-400 uppercase tracking-wider border-b border-zinc-800 pb-1">
                                    Personal Information
                                </h3>
                                <div className="grid grid-cols-2 gap-3">
                                    <div>
                                        <label className="text-[11px] text-zinc-400 font-medium">Full Name</label>
                                        <input
                                            type="text"
                                            value={resumeData.fullName}
                                            onChange={(e) => handlePersonalInfoChange('fullName', e.target.value)}
                                            className="w-full mt-1 p-2 bg-zinc-900 border border-zinc-800 rounded-lg text-xs text-white focus:border-violet-500 focus:outline-none"
                                        />
                                    </div>
                                    <div>
                                        <label className="text-[11px] text-zinc-400 font-medium">Target Title</label>
                                        <input
                                            type="text"
                                            value={resumeData.title}
                                            onChange={(e) => handlePersonalInfoChange('title', e.target.value)}
                                            className="w-full mt-1 p-2 bg-zinc-900 border border-zinc-800 rounded-lg text-xs text-white focus:border-violet-500 focus:outline-none"
                                        />
                                    </div>
                                </div>

                                <div className="grid grid-cols-2 gap-3">
                                    <div>
                                        <label className="text-[11px] text-zinc-400 font-medium">Email</label>
                                        <input
                                            type="text"
                                            value={resumeData.email}
                                            onChange={(e) => handlePersonalInfoChange('email', e.target.value)}
                                            className="w-full mt-1 p-2 bg-zinc-900 border border-zinc-800 rounded-lg text-xs text-white focus:border-violet-500 focus:outline-none"
                                        />
                                    </div>
                                    <div>
                                        <label className="text-[11px] text-zinc-400 font-medium">Phone</label>
                                        <input
                                            type="text"
                                            value={resumeData.phone}
                                            onChange={(e) => handlePersonalInfoChange('phone', e.target.value)}
                                            className="w-full mt-1 p-2 bg-zinc-900 border border-zinc-800 rounded-lg text-xs text-white focus:border-violet-500 focus:outline-none"
                                        />
                                    </div>
                                </div>
                            </div>

                            {/* Summary */}
                            <div className="space-y-2">
                                <h3 className="text-xs font-bold text-violet-400 uppercase tracking-wider border-b border-zinc-800 pb-1">
                                    Professional Summary
                                </h3>
                                <textarea
                                    rows={3}
                                    value={resumeData.summary}
                                    onChange={(e) => handlePersonalInfoChange('summary', e.target.value)}
                                    className="w-full p-2.5 bg-zinc-900 border border-zinc-800 rounded-lg text-xs text-white focus:border-violet-500 focus:outline-none resize-none"
                                />
                            </div>

                            {/* Skills */}
                            <div className="space-y-3">
                                <h3 className="text-xs font-bold text-violet-400 uppercase tracking-wider border-b border-zinc-800 pb-1">
                                    Technical Skills & Keywords
                                </h3>
                                <div className="flex flex-wrap gap-1.5">
                                    {resumeData.skills.map((skill, idx) => (
                                        <span key={idx} className="px-2 py-1 bg-zinc-900 border border-zinc-700 text-zinc-200 text-xs rounded-md flex items-center gap-1.5">
                                            {skill}
                                            <button onClick={() => handleSkillRemove(skill)} className="text-zinc-500 hover:text-rose-400">
                                                &times;
                                            </button>
                                        </span>
                                    ))}
                                </div>
                            </div>

                            {/* Work Experience */}
                            <div className="space-y-4">
                                <h3 className="text-xs font-bold text-violet-400 uppercase tracking-wider border-b border-zinc-800 pb-1">
                                    Work Experience
                                </h3>
                                {resumeData.experiences.map((exp) => (
                                    <div key={exp.id} className="p-3.5 bg-zinc-950 border border-zinc-800 rounded-xl space-y-3">
                                        <div className="grid grid-cols-2 gap-2">
                                            <input
                                                type="text"
                                                value={exp.role}
                                                onChange={(e) => handleExperienceChange(exp.id, 'role', e.target.value)}
                                                placeholder="Job Title"
                                                className="p-1.5 bg-zinc-900 border border-zinc-800 rounded text-xs text-white font-bold"
                                            />
                                            <input
                                                type="text"
                                                value={exp.company}
                                                onChange={(e) => handleExperienceChange(exp.id, 'company', e.target.value)}
                                                placeholder="Company Name"
                                                className="p-1.5 bg-zinc-900 border border-zinc-800 rounded text-xs text-white"
                                            />
                                        </div>

                                        <div className="space-y-2">
                                            <label className="text-[10px] font-bold text-zinc-400 uppercase">Impact Bullet Points</label>
                                            {exp.bullets.map((bullet, idx) => (
                                                <div key={idx} className="flex items-center gap-2">
                                                    <input
                                                        type="text"
                                                        value={bullet}
                                                        onChange={(e) => handleBulletChange(exp.id, idx, e.target.value)}
                                                        className="flex-1 p-2 bg-zinc-900 border border-zinc-800 rounded text-xs text-zinc-200"
                                                    />
                                                    <button
                                                        onClick={() => handleRemoveBullet(exp.id, idx)}
                                                        className="p-1.5 text-zinc-500 hover:text-rose-400 rounded"
                                                    >
                                                        <Trash2 className="w-3.5 h-3.5" />
                                                    </button>
                                                </div>
                                            ))}
                                            <button
                                                onClick={() => handleAddBullet(exp.id)}
                                                className="text-[11px] text-violet-400 font-semibold flex items-center gap-1 hover:underline pt-1"
                                            >
                                                <Plus className="w-3.5 h-3.5" /> Add Bullet Point
                                            </button>
                                        </div>
                                    </div>
                                ))}
                            </div>

                        </div>
                    )}

                    {/* TAB 3: AI REWRITER STUDIO */}
                    {activeTab === 'ai' && (
                        <div className="p-5 space-y-6">

                            <div className="p-4 rounded-xl bg-violet-950/40 border border-violet-500/30 space-y-3">
                                <div className="flex items-center gap-2 text-violet-300 font-bold text-xs uppercase tracking-wider">
                                    <Wand2 className="w-4 h-4 text-violet-400" />
                                    Google XYZ Formula Optimizer
                                </div>
                                <p className="text-xs text-zinc-400">
                                    AI will rewrite plain bullet points into high-impact action statements: <br />
                                    <span className="text-violet-300 italic">"Accomplished [X], measured by [Y], by doing [Z]"</span>
                                </p>
                                <button
                                    onClick={runAiRewriteBullets}
                                    disabled={isAiRewriting}
                                    className="w-full py-2.5 px-4 bg-gradient-to-r from-violet-600 to-purple-600 text-white font-bold text-xs rounded-lg shadow-md shadow-violet-600/20 flex items-center justify-center gap-2"
                                >
                                    <Sparkles className="w-4 h-4" />
                                    <span>{isAiRewriting ? 'Rewriting Bullets...' : 'Transform Bullets Now'}</span>
                                </button>
                            </div>

                            {/* Template Selection Box */}
                            <div className="space-y-3">
                                <label className="text-xs font-bold text-zinc-300 uppercase tracking-wider">
                                    Choose ATS Layout Theme
                                </label>
                                <TemplateSelector activeTemplate={template} onChange={(id) => setTemplate(id)} />
                            </div>

                        </div>
                    )}

                </div>

                {/* ========================================================================= */}
                {/* RIGHT PANEL (60% Width -> lg:col-span-7) : Live Preview Canvas & Score Circle */}
                {/* ========================================================================= */}
                <div className="lg:col-span-7 bg-zinc-950/60 p-4 sm:p-8 flex flex-col h-[calc(100vh-61px)] overflow-y-auto relative">

                    {/* FLOATING ATS SCORE WIDGET */}
                    <div className="no-print mb-6 p-4 rounded-2xl linear-card border border-zinc-800 shadow-xl flex flex-col sm:flex-row items-center justify-between gap-6">
                        <div className="flex items-center gap-4">
                            <AtsScoreCircle
                                score={atsScore}
                                keywordScore={keywordScore}
                                formatScore={formatScore}
                                impactScore={impactScore}
                                size={95}
                                showBreakdown={false}
                            />
                            <div className="space-y-1">
                                <div className="flex items-center gap-2">
                                    <h3 className="text-base font-bold text-white">Live ATS Audit Score</h3>
                                    <span className="px-2 py-0.5 text-[10px] font-extrabold bg-violet-950 text-violet-300 rounded border border-violet-500/30">
                                        Real-Time
                                    </span>
                                </div>
                                <p className="text-xs text-zinc-400">
                                    Targeting: <span className="text-zinc-200 font-semibold">Senior Software Engineer</span>
                                </p>
                                <div className="text-[11px] text-emerald-400 font-medium flex items-center gap-1 pt-1">
                                    <CheckCircle2 className="w-3.5 h-3.5" /> 100% Workday & Greenhouse Parseable
                                </div>
                            </div>
                        </div>

                        <div className="flex flex-col gap-2 w-full sm:w-auto">
                            <button
                                onClick={runAtsAnalysis}
                                className="px-3.5 py-2 bg-zinc-900 hover:bg-zinc-800 border border-zinc-700 text-zinc-300 text-xs font-semibold rounded-lg flex items-center justify-center gap-1.5 transition-colors"
                            >
                                <RefreshCw className="w-3.5 h-3.5 text-violet-400" />
                                Re-Scan ATS Match
                            </button>
                        </div>
                    </div>

                    {/* RENDERED RESUME DOCUMENT CANVAS */}
                    <div className="flex-1 flex justify-center pb-12">
                        <div className="w-full max-w-[800px]">
                            <ResumeRenderer templateId={template} data={resumeData} />
                        </div>
                    </div>

                </div>

            </div>

        </div>
    );
}
