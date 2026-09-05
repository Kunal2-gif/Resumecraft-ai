import type { Metadata } from 'next';
import './globals.css';

export const metadata: Metadata = {
    title: 'ResumeCraft AI - 100% ATS-Compliant AI Resume Builder',
    description: 'Build, score, and rewrite your resume with AI to achieve 100% ATS compliance and match top job descriptions.',
};

export default function RootLayout({
    children,
}: {
    children: React.ReactNode;
}) {
    return (
        <html lang="en" className="dark">
            <body className="bg-[#09090b] text-[#fafafa] min-h-screen antialiased selection:bg-violet-500 selection:text-white">
                {children}
            </body>
        </html>
    );
}
