# Harsh Gour — Developer Portfolio

Modern, responsive, and accessible developer portfolio engineered with **Next.js (App Router)**, **TypeScript**, **Tailwind CSS**, **Framer Motion**, and **Lucide Icons**.

Built with a minimalist dark mode aesthetic featuring subtle glowing accents, clean typography, and optimized for **90+ Lighthouse performance, accessibility, and SEO**.

---

## 🚀 Tech Stack

- **Framework**: [Next.js 14 (App Router)](https://nextjs.org/)
- **Language**: [TypeScript](https://www.typescriptlang.org/)
- **Styling**: [Tailwind CSS](https://tailwindcss.com/)
- **Animations**: [Framer Motion](https://www.framer.com/motion/)
- **Icons**: [Lucide React](https://lucide.dev/)
- **Typography**: Inter / Modern System Sans-serif

---

## 📁 Project Architecture

```
portfolio/
├── src/
│   ├── app/
│   │   ├── globals.css           # Minimalist dark theme, glowing utility classes
│   │   ├── layout.tsx            # Root layout, OpenGraph & SEO metadata, viewport
│   │   └── page.tsx              # Single-page orchestrator
│   ├── components/
│   │   ├── Navbar.tsx            # Sticky glass navigation with mobile drawer & skip link
│   │   ├── GlowBackground.tsx    # Ambient radial gradients & low-overhead grid
│   │   ├── Hero.tsx              # Hook, status badges, metrics grid, and CTAs
│   │   ├── Experience.tsx        # Career timeline (Blitz, NextRoundAi)
│   │   ├── Projects.tsx          # Featured cards (ROJ Guard, Med-CycleGAN, AQI)
│   │   ├── Leadership.tsx        # Executive campus governance (SPO IIT Kanpur) & Education
│   │   ├── Skills.tsx            # Categorized tech stack & tooling badges
│   │   ├── Contact.tsx           # Institutional email copier, direct channels & mailto form
│   │   └── Footer.tsx            # Footer with back-to-top and social links
│   ├── data/
│   │   └── portfolio.ts          # Strongly typed content & metrics
│   ├── lib/
│   │   └── utils.ts              # Classname merger (clsx + tailwind-merge)
│   └── types/
│       └── index.ts              # Data contracts and TypeScript interfaces
├── public/                       # Static public assets
├── tailwind.config.ts            # Custom themes, colors, and keyframe animations
├── tsconfig.json                 # TypeScript strict compiler options
└── package.json                  # Dependencies and scripts
```

---

## 🏃 Getting Started

### 1. Install Dependencies
```bash
npm install
```

### 2. Run the Development Server
```bash
npm run dev
```
Open [http://localhost:3000](http://localhost:3000) in your browser.

### 3. Build for Production
```bash
npm run build
npm run start
```

---

## 🎯 Key Design & Engineering Highlights

1. **Minimalist Dark Aesthetic**:
   - Palette: Deep charcoal / Obsidian `#07080c` with cyan (`#38bdf8`), emerald, and indigo glow accents.
   - Glassmorphic card surfaces with subtle border highlights on hover.
2. **Lighthouse 90+ Score Compliance**:
   - Prerendered static markup with minimal JavaScript footprint (`~135kB` first load).
   - Semantic HTML5 tags (`<header>`, `<main>`, `<section>`, `<article>`, `<nav>`, `<footer>`).
   - High contrast colors meeting WCAG AA/AAA standards.
   - Accessible keyboard navigation with visible focus rings (`focus-visible`) and a "Skip to main content" link.
   - Dynamic OpenGraph and Twitter card metadata for optimal search engine discovery.
3. **Structured Content**:
   - **Work Experience**:
     - *Blitz Bangalore*: CI/CD with CircleCI (2,785 tests), Slack observability, CtrlB anomaly detection.
     - *NextRoundAi.in*: FastAPI microservices, Pydantic schemas, OpenAI resume generation, NLP pipeline.
   - **Featured Projects**:
     - *ROJ Guard*: Kaya AI Hackathon (Streamlit, PostgreSQL, GeoPandas, Shapely, Fyno WhatsApp alerts).
     - *Med-CycleGAN*: Prof. Koteswar Rao Jerripothula (CT-to-MRI synthesis, CBAM attention, cycle-consistency loss).
     - *Air Quality Index*: Folium geospatial mapping and Pandas pipeline processing 68,401 records.
   - **Leadership & Pedigree**:
     - *Students' Placement Office (SPO), IIT Kanpur*: Overall Placement Coordinator managing 200+ team and Japan Day.
     - *Education*: B.Tech in Civil Engineering at IIT Kanpur.
   - **Contact**: Direct institutional email (`harshgour23@iitk.ac.in`), LinkedIn, and GitHub.
