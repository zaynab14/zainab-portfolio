import React, { useState } from "react";

const CATEGORIES = [
    {
        title: "Software Testing",
        code: "ST",
        color: "#22d3ee",
        skills: ["SDLC", "STLC", "Functional Testing", "Integration Testing", "API Testing", "Test Case Design", "Requirement Analysis", "Data Validation", "Defect Tracking", "Regression Testing"],
    },
    {
        title: "Testing Tools",
        code: "TT",
        color: "#c084fc",
        skills: ["Jira", "pytest", "Postman", "Swagger/OpenAPI", "Android Studio", "Microsoft Excel"],
    },
    {
        title: "Databases",
        code: "DB",
        color: "#22d3ee",
        skills: ["MySQL", "PostgreSQL"],
    },
    {
        title: "Programming Languages",
        code: "PL",
        color: "#c084fc",
        skills: ["Python", "JavaScript", "HTML/HTML5", "CSS", "SQL", "TypeScript"],
    },
    {
        title: "Frameworks & Development Tools",
        code: "FW",
        color: "#22d3ee",
        skills: ["FastAPI", "Flask", "Django", "ReactJS", "Flutter", "Git", "GitHub", "Visual Studio"],
    },
    {
        title: "Libraries & Technologies",
        code: "LT",
        color: "#c084fc",
        skills: ["PyTorch", "Scikit-learn", "Pandas", "NumPy", "Matplotlib", "TensorFlow", "Keras", "Firebase", "Supabase", "Generative AI/LLMs", "NLP"],
    },
];

function Chip({ skill, color }) {
    const [hover, setHover] = useState(false);
    return (
        <span
            onMouseEnter={() => setHover(true)}
            onMouseLeave={() => setHover(false)}
            className={`inline-flex items-center rounded-lg border px-3 py-1.5 text-sm font-medium transition-all duration-200 cursor-default ${hover ? "border-cyan-400/70 bg-secondary/60 text-cyan-400 -translate-y-0.5" : "border-border/60 bg-secondary/30 text-foreground"
                }`}
            style={hover ? { boxShadow: `0 0 16px ${color}33` } : undefined}
        >
            {skill}
        </span>
    );
}

export default function Skills() {
    return (
        <section id="skills" className="relative py-24">
            <div className="mx-auto max-w-7xl px-6 lg:px-10">
                <SectionLabel label="CAPABILITIES" />
                <h2 className="text-4xl sm:text-5xl font-bold mb-3">
                    <span className="text-gradient">Skills & Technologies</span>
                </h2>
                <p className="text-muted-foreground max-w-2xl mb-12">
                    A toolkit built across academic study, internships, and hands-on project work.
                </p>

                <div className="space-y-10">
                    {CATEGORIES.map((cat) => (
                        <div key={cat.title}>
                            <div className="flex items-center gap-3 mb-4">
                                <span
                                    className="font-mono text-xs font-bold px-2 py-1 rounded"
                                    style={{ color: cat.color, backgroundColor: `${cat.color}1a` }}
                                >
                                    {cat.code}
                                </span>
                                <h3 className="font-mono text-sm uppercase tracking-widest text-foreground/90">{cat.title}</h3>
                                <div className="flex-1 h-px bg-border/40" />
                            </div>
                            <div className="flex flex-wrap gap-2.5">
                                {cat.skills.map((s) => (
                                    <Chip key={s} skill={s} color={cat.color} />
                                ))}
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}

export function SectionLabel({ label }) {
    return (
        <div className="font-mono text-xs uppercase tracking-[0.3em] text-cyan-400 mb-3">
            {label}
        </div>
    );
}