# Product Requirement Document (PRD)

## Product Name: ResumeCraft AI
**Tagline:** 100% ATS-Compliant AI Resume Builder & Tailoring Engine  
**Version:** 1.0.0  
**Target Release:** Q4 2026  
**Theme & UI Aesthetic:** Dark Linear-inspired SaaS UI (Violet `#8b5cf6`, Obsidian Black `#09090b`, Zinc `#18181b`)

---

## 1. Executive Summary
ResumeCraft AI is an intelligent resume tailoring platform engineered to pass Applicant Tracking Systems (ATS) with a guaranteed high match score (90%+ target). Job seekers upload an existing resume or start from scratch, paste a target Job Description (JD), receive a real-time 0-100% ATS score analysis, and utilize one-click AI rewriting to optimize keywords, bullet verbs, and formatting. Output resumes can be rendered across 3 ATS-tested templates and exported as print-perfect PDFs.

---

## 2. Product Objectives & Key Metrics
- **ATS Compliance Rate:** 100% parseable by top ATS platforms (Workday, Greenhouse, Lever, Taleo, iCIMS).
- **Match Optimization:** Improve user resume match score by an average of +35 points upon AI tailoring.
- **Conversion Goal:** Enable job candidates to tailor resumes to job descriptions in under 3 minutes.
- **Visual Excellence:** Deliver a state-of-the-art dark mode Linear SaaS user interface with instant real-time feedback loop.

---

## 3. Key Feature Specifications

### 3.1. Resume Upload & Parsing Engine
- **Input Formats Supported:** PDF, DOCX, TXT, or direct manual entry.
- **Parser Intelligence:** Extracts structural sections automatically:
  - Personal Information & Contact Details (Email, Phone, LinkedIn, Portfolio, Location)
  - Professional Summary / Objective
  - Work Experience (Company, Role, Dates, Bullet points)
  - Skills (Technical Skills, Soft Skills, Tools & Frameworks)
  - Education (Degree, Institution, Graduation Year, Honors)
  - Certifications & Projects

### 3.2. Job Description (JD) Analyzer
- **Input:** Rich text input field for pasting raw job descriptions.
- **Keyword Extraction:** NLP extracts hard skills, soft skills, role responsibilities, required qualifications, and industry buzzwords.
- **Required Experience Level Detection:** Identifies seniority requirements (Junior, Mid, Senior, Staff, Lead).

### 3.3. Real-Time ATS Match Score Engine (0 - 100%)
- **Score Calculation Algorithm:**
  - **Keyword Match (40% weight):** Exact & semantic match of critical skills against the JD.
  - **Formatting Compliance (25% weight):** Standard section headers, single-column flow, no tables or images that break ATS parsers.
  - **Action Verbs & Impact (20% weight):** Presence of quantifiable metrics (%, $, numbers) and strong action verbs (e.g., *Spearheaded, Architected, Accelerated*).
  - **Relevance & Length (15% weight):** Ideal length ratio relative to target role depth.
- **Visual Representation:** Animated SVG radial progress indicator with dynamic color mapping (0-49%: Crimson, 50-74%: Amber, 75-100%: Electric Violet/Emerald).
- **Interactive Breakdown:** Categorized suggestions panel listing missing keywords, formatting fixes, and impact improvements.

### 3.4. One-Click AI Resume Rewriter
- **Bullet Point Optimizer:** Rewrites bullet points following the **Google XYZ Formula** (*"Accomplished [X], as measured by [Y], by doing [Z]"*).
- **Tailor to JD:** Seamlessly integrates missing target keywords from the JD without keyword stuffing.
- **Summary Generator:** Generates a custom 3-line executive elevator pitch tailored specifically to the targeted position.
- **Tone & Style Controls:** Toggle between *Impactful*, *Executive*, and *Technical Concise* rewriting styles.

### 3.5. 3 ATS-Compliant Resume Templates
1. **Modern Tech (Default):** Clean top header, prominent technical skill tags, sharp typography, single-column ATS layout.
2. **Executive Clean:** Elegant serif/sans headers, double divider rules, classic formal structure ideal for management and enterprise roles.
3. **Creative Minimal:** Minimalist left-aligned metadata, subtle violet accent bar, optimized for design, product, and modern startup roles.
- **ATS Rules Enforced across all templates:**
  - Standard system font stacks (Inter, Arial, Helvetica, Georgia).
  - No background images, text boxes, canvas artifacts, or multi-column wraps that confuse Workday/Taleo.

### 3.6. PDF Export Engine
- **Vector PDF Generation:** High-fidelity PDF output rendered at 300 DPI layout precision.
- **Standard A4 & US Letter Support:** Pixel-perfect margin bounds.
- **Selectable Text & OCR Compliant:** All text remains select-and-copy enabled inside PDF files for direct ATS scanner reading.

---

## 4. User Journey & Interface Wireframe Specs

### Screen 1: Landing Page (`/app/page.tsx`)
- **Header:** Brand Logo (ResumeCraft AI), Navigation links (Features, Templates, Pricing, Wall of Love), "Launch Builder" CTA button.
- **Hero Section:** Dark glowing violet backdrop (`bg-zinc-950`), headline *"Craft a 100% ATS-Compliant Resume in Seconds"*, live interactive ATS match preview widget.
- **Features Grid:** Card layout showing real-time ATS scoring, AI bullet enhancer, and PDF vector exporter.
- **Template Showcase:** Interactive preview switcher demonstrating the 3 templates.
- **Footer:** Links, copyright, and system status indicator.

### Screen 2: Main Builder Studio (`/app/builder/page.tsx`)
- **Split Screen Layout:**
  - **Left Panel (40% Width - Studio Inputs):**
    - Tab 1: **Upload & JD** (Drag & drop resume file + Paste Job Description).
    - Tab 2: **Content Editor** (Form sections for Contact, Summary, Experience, Education, Skills).
    - Tab 3: **AI Rewriter** (Target role suggestions, Keyword insert buttons, AI enhancement triggers).
  - **Right Panel (60% Width - Live ATS & Document Preview):**
    - Top Bar: Template Selector dropdown/pills, ATS Score Circle trigger modal, PDF Download button (`Download PDF`).
    - Sticky Preview Canvas: Real-time rendered resume document reflecting active template and content updates.
    - Floating ATS Score Gauge: Live circular progress badge showing score percentage with instant click-to-expand suggestion sheet.

---

## 5. Technical Stack & Architecture

- **Framework:** Next.js 14 / 15 (App Router, Server Components & Client Hooks)
- **Language:** TypeScript
- **Styling:** Tailwind CSS + Vanilla CSS variables for custom glow & Linear dark theme
- **Icons:** Lucide React (`lucide-react`)
- **State Management:** React `useState` & `useContext` / custom builder state hooks
- **PDF Generation Client Utility:** `html2pdf.js` / browser print vector canvas export

---

## 6. Non-Functional Requirements & Security
- **Performance:** Sub-100ms UI reactivity on content typing & score recalculations.
- **Privacy:** Resume data stored locally in browser state / session memory; no sensitive personal info logged to external third parties.
- **Accessibility (a11y):** WCAG AA compliant contrast ratios with dark mode support.
