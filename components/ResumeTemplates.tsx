'use client';

import React from 'react';
import { Mail, Phone, MapPin, Linkedin, Globe } from 'lucide-react';

export interface WorkExperience {
    id: string;
    role: string;
    company: string;
    location: string;
    startDate: string;
    endDate: string;
    bullets: string[];
}

export interface Education {
    id: string;
    degree: string;
    school: string;
    location: string;
    graduationYear: string;
}

export interface ResumeData {
    fullName: string;
    title: string;
    email: string;
    phone: string;
    location: string;
    linkedin: string;
    website: string;
    summary: string;
    skills: string[];
    experiences: WorkExperience[];
    education: Education[];
}

export const initialResumeData: ResumeData = {
    fullName: "Alex Rivera",
    title: "Senior Full Stack Engineer & Cloud Architect",
    email: "alex.rivera@email.com",
    phone: "+1 (555) 382-9102",
    location: "San Francisco, CA",
    linkedin: "linkedin.com/in/alexrivera-dev",
    website: "alexrivera.dev",
    summary: "Results-driven Senior Full Stack Engineer with 7+ years of experience building scalable distributed web applications and cloud architectures. Proven track record of boosting system performance by 45% and leading engineering teams to deploy microservices handling 2M+ daily active users.",
    skills: [
        "TypeScript", "React", "Next.js", "Node.js", "Python",
        "AWS (ECS, Lambda, S3)", "PostgreSQL", "GraphQL", "Docker", "Tailwind CSS", "CI/CD"
    ],
    experiences: [
        {
            id: "1",
            role: "Senior Full Stack Engineer",
            company: "Apex Nexus Tech",
            location: "San Francisco, CA",
            startDate: "2022",
            endDate: "Present",
            bullets: [
                "Architected next-generation enterprise SaaS platform using Next.js 14 and AWS Serverless, reducing page load latency by 52%.",
                "Spearheaded AI resume keyword matching integration using NLP model APIs, increasing candidate placement conversions by 38%.",
                "Mentored team of 6 software engineers in TypeScript best practices and test-driven development (TDD), achieving 94% test coverage."
            ]
        },
        {
            id: "2",
            role: "Software Engineer",
            company: "Vanguard Systems",
            location: "San Jose, CA",
            startDate: "2019",
            endDate: "2022",
            bullets: [
                "Engineered real-time data analytics dashboard with React, Redux, and PostgreSQL for 500K daily active users.",
                "Refactored legacy monolith into modular GraphQL microservices, reducing server infrastructure costs by $45K annually."
            ]
        }
    ],
    education: [
        {
            id: "1",
            degree: "B.S. in Computer Science & Engineering",
            school: "University of California, Berkeley",
            location: "Berkeley, CA",
            graduationYear: "2019"
        }
    ]
};

interface TemplateProps {
    data: ResumeData;
}

/** 1. Modern Tech Template (ATS Optimized) */
export function ModernTechTemplate({ data }: TemplateProps) {
    return (
        <div className="w-full bg-white text-zinc-900 font-sans p-8 shadow-2xl rounded-sm print-only-container text-[13px] leading-relaxed">
            {/* Header */}
            <div className="border-b-2 border-violet-600 pb-4 mb-4">
                <h1 className="text-2xl font-extrabold uppercase tracking-tight text-zinc-950">{data.fullName}</h1>
                <p className="text-violet-700 font-semibold text-sm mt-0.5">{data.title}</p>

                {/* Contact Info */}
                <div className="flex flex-wrap items-center gap-x-4 gap-y-1 text-xs text-zinc-600 mt-2 font-medium">
                    {data.email && <span>{data.email}</span>}
                    {data.phone && <span>• {data.phone}</span>}
                    {data.location && <span>• {data.location}</span>}
                    {data.linkedin && <span>• {data.linkedin}</span>}
                    {data.website && <span>• {data.website}</span>}
                </div>
            </div>

            {/* Professional Summary */}
            {data.summary && (
                <div className="mb-4">
                    <h2 className="text-xs font-bold uppercase tracking-wider text-violet-900 border-b border-zinc-200 pb-1 mb-1.5">
                        Professional Summary
                    </h2>
                    <p className="text-zinc-700">{data.summary}</p>
                </div>
            )}

            {/* Skills */}
            {data.skills.length > 0 && (
                <div className="mb-4">
                    <h2 className="text-xs font-bold uppercase tracking-wider text-violet-900 border-b border-zinc-200 pb-1 mb-1.5">
                        Technical Skills & Core Competencies
                    </h2>
                    <div className="flex flex-wrap gap-1.5 pt-0.5">
                        {data.skills.map((skill, idx) => (
                            <span key={idx} className="bg-violet-50 text-violet-950 font-medium px-2 py-0.5 rounded text-[11px] border border-violet-200">
                                {skill}
                            </span>
                        ))}
                    </div>
                </div>
            )}

            {/* Experience */}
            <div className="mb-4">
                <h2 className="text-xs font-bold uppercase tracking-wider text-violet-900 border-b border-zinc-200 pb-1 mb-2">
                    Work Experience
                </h2>
                <div className="space-y-3">
                    {data.experiences.map((exp) => (
                        <div key={exp.id}>
                            <div className="flex justify-between items-baseline font-bold text-zinc-900">
                                <span>{exp.role} — <span className="font-semibold text-zinc-700">{exp.company}</span></span>
                                <span className="text-xs text-zinc-500 font-medium">{exp.startDate} – {exp.endDate}</span>
                            </div>
                            <ul className="list-disc list-inside text-zinc-700 mt-1 space-y-1 text-xs">
                                {exp.bullets.map((b, i) => (
                                    <li key={i} className="pl-1 leading-snug">{b}</li>
                                ))}
                            </ul>
                        </div>
                    ))}
                </div>
            </div>

            {/* Education */}
            <div>
                <h2 className="text-xs font-bold uppercase tracking-wider text-violet-900 border-b border-zinc-200 pb-1 mb-1.5">
                    Education
                </h2>
                {data.education.map((edu) => (
                    <div key={edu.id} className="flex justify-between items-baseline text-xs">
                        <div>
                            <span className="font-bold text-zinc-900">{edu.degree}</span>
                            <span className="text-zinc-600 font-medium"> — {edu.school}</span>
                        </div>
                        <span className="text-zinc-500 font-medium">{edu.graduationYear}</span>
                    </div>
                ))}
            </div>
        </div>
    );
}

/** 2. Executive Clean Template */
export function ExecutiveCleanTemplate({ data }: TemplateProps) {
    return (
        <div className="w-full bg-white text-zinc-900 font-serif p-8 shadow-2xl rounded-sm print-only-container text-[13px] leading-relaxed">
            {/* Header Centered */}
            <div className="text-center border-b-2 border-zinc-900 pb-4 mb-4">
                <h1 className="text-2xl font-bold tracking-normal uppercase text-zinc-950">{data.fullName}</h1>
                <p className="text-zinc-600 font-sans italic text-sm mt-0.5">{data.title}</p>
                <div className="flex justify-center items-center gap-3 text-xs font-sans text-zinc-600 mt-2">
                    {data.email && <span>{data.email}</span>}
                    {data.phone && <span>| {data.phone}</span>}
                    {data.location && <span>| {data.location}</span>}
                    {data.linkedin && <span>| {data.linkedin}</span>}
                </div>
            </div>

            {/* Summary */}
            {data.summary && (
                <div className="mb-4">
                    <h2 className="text-xs font-bold font-sans uppercase tracking-widest text-zinc-900 border-b border-zinc-300 pb-1 mb-1.5">
                        Executive Profile
                    </h2>
                    <p className="text-zinc-800 italic">{data.summary}</p>
                </div>
            )}

            {/* Experience */}
            <div className="mb-4">
                <h2 className="text-xs font-bold font-sans uppercase tracking-widest text-zinc-900 border-b border-zinc-300 pb-1 mb-2">
                    Professional Experience
                </h2>
                <div className="space-y-3">
                    {data.experiences.map((exp) => (
                        <div key={exp.id}>
                            <div className="flex justify-between items-baseline font-sans">
                                <span className="font-bold text-zinc-950 text-xs uppercase">{exp.role} | {exp.company}</span>
                                <span className="text-xs text-zinc-600 font-medium">{exp.startDate} – {exp.endDate}</span>
                            </div>
                            <ul className="list-square list-inside text-zinc-800 mt-1 space-y-1 text-xs">
                                {exp.bullets.map((b, i) => (
                                    <li key={i} className="pl-1">{b}</li>
                                ))}
                            </ul>
                        </div>
                    ))}
                </div>
            </div>

            {/* Skills */}
            <div className="mb-4">
                <h2 className="text-xs font-bold font-sans uppercase tracking-widest text-zinc-900 border-b border-zinc-300 pb-1 mb-1.5">
                    Areas of Expertise
                </h2>
                <p className="text-xs font-sans text-zinc-800 leading-normal">
                    {data.skills.join(" • ")}
                </p>
            </div>

            {/* Education */}
            <div>
                <h2 className="text-xs font-bold font-sans uppercase tracking-widest text-zinc-900 border-b border-zinc-300 pb-1 mb-1.5">
                    Education & Credentials
                </h2>
                {data.education.map((edu) => (
                    <div key={edu.id} className="flex justify-between items-baseline text-xs font-sans">
                        <span className="font-bold text-zinc-900">{edu.degree}, {edu.school}</span>
                        <span className="text-zinc-600">{edu.graduationYear}</span>
                    </div>
                ))}
            </div>
        </div>
    );
}

/** 3. Creative Minimal Template */
export function CreativeMinimalTemplate({ data }: TemplateProps) {
    return (
        <div className="w-full bg-white text-zinc-900 font-sans p-8 shadow-2xl rounded-sm print-only-container text-[13px] leading-relaxed flex gap-6">
            {/* Left Sidebar Accent Column (30%) */}
            <div className="w-1/3 border-r border-zinc-200 pr-5 space-y-5">
                <div>
                    <h1 className="text-xl font-black text-zinc-950 leading-tight">{data.fullName}</h1>
                    <p className="text-violet-600 font-medium text-xs mt-1">{data.title}</p>
                </div>

                {/* Contact */}
                <div className="space-y-1.5 text-xs text-zinc-600">
                    <h3 className="font-bold text-[10px] uppercase text-zinc-400 tracking-wider">Contact</h3>
                    {data.email && <div className="break-all">{data.email}</div>}
                    {data.phone && <div>{data.phone}</div>}
                    {data.location && <div>{data.location}</div>}
                    {data.linkedin && <div className="break-all">{data.linkedin}</div>}
                </div>

                {/* Skills */}
                <div className="space-y-1.5">
                    <h3 className="font-bold text-[10px] uppercase text-zinc-400 tracking-wider">Skills</h3>
                    <div className="flex flex-wrap gap-1">
                        {data.skills.map((s, idx) => (
                            <span key={idx} className="bg-zinc-100 text-zinc-800 text-[10px] font-semibold px-2 py-0.5 rounded">
                                {s}
                            </span>
                        ))}
                    </div>
                </div>

                {/* Education */}
                <div className="space-y-1.5">
                    <h3 className="font-bold text-[10px] uppercase text-zinc-400 tracking-wider">Education</h3>
                    {data.education.map((edu) => (
                        <div key={edu.id} className="text-xs">
                            <div className="font-bold text-zinc-900">{edu.degree}</div>
                            <div className="text-zinc-500 text-[11px]">{edu.school} • {edu.graduationYear}</div>
                        </div>
                    ))}
                </div>
            </div>

            {/* Main Content Column (70%) */}
            <div className="w-2/3 space-y-4">
                {data.summary && (
                    <div>
                        <h2 className="text-xs font-bold uppercase tracking-wider text-violet-900 mb-1">
                            About
                        </h2>
                        <p className="text-zinc-700 text-xs">{data.summary}</p>
                    </div>
                )}

                <div>
                    <h2 className="text-xs font-bold uppercase tracking-wider text-violet-900 mb-2">
                        Experience
                    </h2>
                    <div className="space-y-3">
                        {data.experiences.map((exp) => (
                            <div key={exp.id} className="space-y-1">
                                <div className="flex justify-between items-baseline text-xs">
                                    <span className="font-bold text-zinc-950">{exp.role}</span>
                                    <span className="text-[11px] text-zinc-400 font-medium">{exp.startDate} – {exp.endDate}</span>
                                </div>
                                <div className="text-xs font-medium text-violet-700">{exp.company}</div>
                                <ul className="list-disc list-inside text-zinc-700 space-y-1 text-[12px]">
                                    {exp.bullets.map((b, i) => (
                                        <li key={i}>{b}</li>
                                    ))}
                                </ul>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </div>
    );
}

interface MainTemplateSelectorProps {
    templateId: 'modern' | 'executive' | 'creative';
    data: ResumeData;
}

export function ResumeRenderer({ templateId, data }: MainTemplateSelectorProps) {
    return (
        <div id="resume-preview" className="w-full">
            {templateId === 'executive' && <ExecutiveCleanTemplate data={data} />}
            {templateId === 'creative' && <CreativeMinimalTemplate data={data} />}
            {(templateId === 'modern' || !['executive', 'creative'].includes(templateId)) && (
                <ModernTechTemplate data={data} />
            )}
        </div>
    );
}
