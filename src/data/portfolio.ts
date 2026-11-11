import { ExperienceItem, ProjectItem, LeadershipItem, EducationItem } from "@/types";

export const personalInfo = {
  name: "Harsh Gour",
  role: "Software & Full-Stack Engineer",
  tagline: "Building scalable systems, high-performance web applications, and resilient data architectures.",
  institution: "Indian Institute of Technology Kanpur",
  degree: "B.Tech in Civil Engineering",
  email: "harshgour23@iitk.ac.in",
  github: "https://github.com/harshgour",
  linkedin: "https://linkedin.com/in/harshgour",
  resumeUrl: "#resume",
  bio: "Full-stack and frontend-focused engineer currently studying at IIT Kanpur. Passionate about building robust backend pipelines, responsive web experiences, and developer-first infrastructure that scales.",
  stats: [
    { label: "Unit Tests in CI/CD", value: "2,785+" },
    { label: "Records Processed", value: "68,400+" },
    { label: "Team Members Led", value: "200+" },
    { label: "Core Competency", value: "Full-Stack & Systems" },
  ],
};

export const education: EducationItem = {
  degree: "Bachelor of Technology",
  major: "Civil Engineering",
  institution: "Indian Institute of Technology Kanpur",
  period: "2021 – 2025",
  location: "Kanpur, India",
};

export const experiences: ExperienceItem[] = [
  {
    id: "blitz",
    role: "Tech Intern",
    company: "Blitz",
    location: "Bangalore, India",
    period: "May 2024 – July 2024",
    type: "Internship",
    metrics: "2,785 unit tests orchestrated",
    description: [
      "Architected an automated CI/CD workflow within CircleCI executing 2,785 unit tests to elevate pipeline reliability and delivery velocity.",
      "Integrated full-spectrum Slack observability for instant build telemetry, test failures, and deployment status updates.",
      "Configured real-time anomaly detection pipelines in CtrlB to proactively catch runtime degradation and infrastructure deviations.",
    ],
    skills: ["CircleCI", "CI/CD", "CtrlB", "Slack API", "Observability", "DevOps", "Testing Automation"],
  },
  {
    id: "nextround-ai",
    role: "Summer Intern",
    company: "NextRoundAi.in",
    location: "Remote / Gurgaon, India",
    period: "May 2023 – July 2023",
    type: "Internship",
    metrics: "FastAPI + OpenAI LLM Pipelines",
    description: [
      "Designed resilient, high-throughput FastAPI backend microservices utilizing strict Pydantic schemas for validated request payloads.",
      "Integrated OpenAI API workflows for intelligent, automated dynamic resume generation tailored to candidate specifications.",
      "Engineered an NLP transformation pipeline for extracting, standardizing, and ranking candidate profile features with low latency.",
    ],
    skills: ["FastAPI", "Python", "Pydantic", "OpenAI API", "NLP", "REST APIs", "Prompt Engineering"],
  },
];

export const projects: ProjectItem[] = [
  {
    id: "roj-guard",
    title: "ROJ Guard",
    subtitle: "Air Level Clustering & Real-time Geospatial Intelligence",
    context: "Kaya AI Hackathon",
    description:
      "Engineered a geospatial monitoring system to visualize ambient air level clustering in real-time, backed by automated data validation and proactive emergency dispatch alerts via WhatsApp.",
    highlights: [
      "Architected an interactive Streamlit dashboard leveraging PostgreSQL, GeoPandas, and Shapely to compute and visualize Air Level Clustering.",
      "Engineered an end-to-end Python data quality pipeline verifying incoming sensor readings and mitigating outlier anomalies.",
      "Integrated Fyno WhatsApp notification triggers for instant automated alerts whenever air toxicity thresholds breach safe baselines.",
    ],
    technologies: ["Streamlit", "PostgreSQL", "GeoPandas", "Shapely", "Python", "Fyno API", "WhatsApp Alerts"],
    githubUrl: "https://github.com/harshgour",
    liveUrl: "https://github.com/harshgour",
    featured: true,
  },
  {
    id: "med-cyclegan",
    title: "Med-CycleGAN",
    subtitle: "Unpaired Cross-Modality CT-to-MRI Medical Image Translation",
    context: "Course Project under Prof. Koteswar Rao Jerripothula",
    description:
      "Deep generative framework performing high-fidelity unpaired cross-modality synthesis between CT scans and MRI volumes, preserving fine-grained anatomical structures.",
    highlights: [
      "Managed Kaggle dataset collection, normalization, and preprocessing for unpaired multi-center CT and MRI medical scans.",
      "Developed the primary code implementation for an unpaired CT-to-MRI CycleGAN framework from scratch.",
      "Incorporated Convolutional Block Attention Modules (CBAM) and dual cycle-consistency loss to eliminate artifacts and preserve tissue boundaries.",
    ],
    technologies: ["PyTorch", "CycleGAN", "CBAM Attention", "Deep Learning", "Computer Vision", "Medical Imaging", "Kaggle"],
    githubUrl: "https://github.com/harshgour",
    liveUrl: "https://github.com/harshgour",
    featured: true,
  },
  {
    id: "air-quality-index",
    title: "Air Quality Index",
    subtitle: "Geospatial Pollution Distribution & Massive Data Pipeline",
    context: "Environmental Data Science",
    description:
      "Comprehensive pollution analysis and geospatial visualization platform processing tens of thousands of regional pollution records to illuminate longitudinal environmental trends.",
    highlights: [
      "Developed an interactive Folium geospatial mapping module illustrating regional pollution heatmaps and district-level distribution patterns.",
      "Engineered a high-performance Pandas data processing pipeline parsing and cleaning 68,401 historical records.",
      "Calculated standardized multi-pollutant AQI indices with statistical aggregations to expose temporal variance and spatial hotspots.",
    ],
    technologies: ["Python", "Pandas", "Folium", "Geospatial Analysis", "Data Wrangling", "Interactive Maps", "Jupyter"],
    githubUrl: "https://github.com/harshgour",
    liveUrl: "https://github.com/harshgour",
    featured: true,
  },
];

export const leadership: LeadershipItem[] = [
  {
    id: "spo-iitk",
    role: "Overall Placement Coordinator",
    organization: "Students' Placement Office (SPO), IIT Kanpur",
    description: [
      "Spearheaded campus recruitment operations at IIT Kanpur, leading and managing a 200-member student placement executive team.",
      "Orchestrated Japan Day, liaising with premier international delegations, corporate partners, and global tech firms for student placements.",
      "Managed corporate relations, end-to-end recruitment drives, interview logistics, and candidate preparation programs across all departments.",
    ],
    skills: ["Team Leadership (200+ Members)", "International Relations", "Operations Management", "Strategic Planning", "Stakeholder Communication"],
  },
];

export const skillsCategories = [
  {
    category: "Languages & Frameworks",
    items: ["TypeScript", "JavaScript", "Python", "Next.js", "React", "FastAPI", "HTML5/CSS3", "Tailwind CSS"],
  },
  {
    category: "Data & Machine Learning",
    items: ["PyTorch", "Pandas", "GeoPandas", "Shapely", "PostgreSQL", "Folium", "CycleGAN", "OpenAI API"],
  },
  {
    category: "DevOps & Tools",
    items: ["CircleCI", "Git / GitHub", "Docker", "Slack API", "CtrlB", "Linux / Bash", "Streamlit", "Framer Motion"],
  },
];
