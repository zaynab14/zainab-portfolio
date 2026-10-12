import React from "react";
import { SectionLabel } from "@/components/sections/Skills";

const EXPERIENCE = [
    {
        date: "Sep 2026 — Present",
        role: "QA Intern",
        company: "Xictek System",
        location: "Lahore, Pakistan",
        points: [
            "Build automated test suites with Playwright for critical user flows and regression testing across Chromium and Firefox.",
            "Design positive, negative, and boundary test cases to validate application behavior.",
            "Report and track defects in Jira with clear reproduction steps.",
            "Collaborate with developers and cross-functional teams in an Agile environment to clarify requirements, validate fixes, and support high-quality releases.",
        ],
    },
    {
        date: "Aug 2026 — Sep 2026",
        role: "AI/ML Intern",
        company: "Xictek Systems — HisabDo (Finance Management App)",
        location: "Lahore, Pakistan",
        points: [
            "Contributed to AI solutions for software business applications.",
            "Developed and tested AI/API integration components using Python and pytest.",
            "Mapped and validated application use cases and AI service interactions.",
            "Worked on Generative AI/LLM-powered applications, prompt engineering, AI safety guardrails, and API integration.",
            "Implemented AI safety validation for emergency detection, diagnosis and prescription restrictions, prompt injection, and unsafe AI outputs.",
            "Used Jira for task and bug tracking and Git/GitHub for development workflows.",
        ],
    },
    {
        date: "Oct 2025 — Dec 2025",
        role: "Project Management Intern",
        company: "Cubix",
        location: "Karachi, Pakistan",
        points: [
            "Supported IT project coordination from initiation through closeout, including scope, objectives, deliverables, requirements, assumptions, and dependencies.",
            "Maintained project plans, task trackers, and boards in ClickUp and Jira, tracking owners, priorities, statuses, deadlines, milestones, and dependencies.",
            "Coordinated project and sprint meetings, documented decisions and action items, and followed up with team members on deadlines.",
        ],
    },
    {
        date: "Feb 2025 — Apr 2025",
        role: "AI Intern",
        company: "National Centre For Big Data & Cloud Computing (NCBC), NED",
        location: "Karachi, Pakistan",
        points: [
            "Collected, cleaned, validated, and analyzed datasets using Python to improve data quality and support machine learning experiments.",
            "Performed exploratory data analysis (EDA), data validation, and model evaluation to identify trends and improve model performance.",
            "Documented workflows, model architectures, experiments, and results.",
        ],
    },
];

export default function Experience() {
    return (
        <section id="experience" className="relative py-24">
            <div className="mx-auto max-w-4xl px-6 lg:px-10">
                <SectionLabel label="TIMELINE" />
                <h2 className="text-4xl sm:text-5xl font-bold mb-3">
                    <span className="text-gradient">Experience</span>
                </h2>
                <p className="text-muted-foreground max-w-2xl mb-12">
                    Experience across software quality assurance, project coordination, and AI and machine learning.
                </p>

                <div className="relative pl-8">
                    <div className="absolute left-2 top-2 bottom-2 w-px bg-gradient-to-b from-cyan-400 via-violet-400 to-transparent" />

                    {EXPERIENCE.map((e, i) => (
                        <div key={i} className="relative mb-10 last:mb-0">
                            <span className="absolute -left-[26px] top-1.5 h-3 w-3 rounded-full bg-cyan-400 ring-4 ring-cyan-400/20 animate-pulse-ring" />
                            <div className="rounded-xl border border-border/60 bg-card/50 p-6">
                                <div className="flex flex-col sm:flex-row sm:items-baseline sm:justify-between gap-1 mb-1">
                                    <h3 className="text-lg font-semibold text-foreground">{e.role}</h3>
                                    <span className="font-mono text-sm text-violet-400">{e.date}</span>
                                </div>
                                <p className="font-mono text-xs text-cyan-400 mb-1">{e.company}</p>
                                <p className="font-mono text-xs text-muted-foreground mb-4">{e.location}</p>
                                <ul className="space-y-2">
                                    {e.points.map((p, j) => (
                                        <li key={j} className="flex gap-2 text-sm text-muted-foreground leading-relaxed">
                                            <span className="text-cyan-400 mt-1.5 h-1 w-1 rounded-full bg-cyan-400 shrink-0" />
                                            {p}
                                        </li>
                                    ))}
                                </ul>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}

