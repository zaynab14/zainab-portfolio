import React, { useState } from "react";
import { SectionLabel } from "@/components/sections/Skills";

const CREDENTIALS = [
    {
        title: "Google Advanced Data Analytics",
        issuer: "Google",
        date: "Mar 2026",
        credentialId: "4EBZL35SL54D",
        skills: [],
    },
    {
        title: "Google Data Analytics",
        issuer: "Google",
        date: "Mar 2026",
        credentialId: "4EBZL35SL54D",
        skills: [],
    },
    {
        title: "Data Manipulation in Python: Master Python, Numpy & Pandas",
        issuer: "Udemy",
        date: "Mar 2024",
        credentialId: "UC-ead84f8e-3641-4e4c-bbc4-4544b3b75e24",
        skills: ["Programming Languages"],
    },
    {
        title: "Python Data Structures",
        issuer: "University of Michigan",
        date: "Aug 2023",
        credentialId: "U62MDYXVC7W6",
        skills: ["Programming Languages", "Python (Programming Language)"],
    },
];

function CredentialCard({ c }) {
    const [open, setOpen] = useState(false);
    return (
        <div className="group rounded-xl border border-border/60 bg-card/50 p-5 transition-all duration-300 hover:border-cyan-400/40 hover:bg-card/80">
            <div className="flex items-start justify-between gap-3 mb-2">
                <div className="flex items-start gap-3">
                    <div className="h-9 w-9 shrink-0 rounded-md border border-cyan-400/40 bg-cyan-400/5 grid place-items-center font-mono text-sm font-bold text-cyan-400">
                        {c.issuer.charAt(0)}
                    </div>
                    <div>
                        <h3 className="text-base font-semibold text-foreground leading-snug">{c.title}</h3>
                        <p className="font-mono text-xs text-muted-foreground mt-0.5">{c.issuer} · {c.date}</p>
                    </div>
                </div>
            </div>

            <div className="flex flex-wrap items-center gap-2 mt-3">
                <span className="font-mono text-[11px] text-muted-foreground/80">Credential ID:</span>
                <code className="font-mono text-[11px] text-violet-300 bg-secondary/60 rounded px-1.5 py-0.5">{c.credentialId}</code>
            </div>

            {c.skills.length > 0 && (
                <div className="mt-3 flex flex-wrap gap-1.5">
                    <span className="font-mono text-[11px] text-muted-foreground/80">Skills:</span>
                    {c.skills.map((s) => (
                        <span key={s} className="font-mono text-[11px] px-2 py-0.5 rounded-full border border-cyan-400/40 text-cyan-300 bg-cyan-400/5">
                            {s}
                        </span>
                    ))}
                </div>
            )}
        </div>
    );
}

export default function Courses() {
    return (
        <section id="courses" className="relative py-24">
            <div className="mx-auto max-w-5xl px-6 lg:px-10">
                <SectionLabel label="CREDENTIALS" />
                <h2 className="text-4xl sm:text-5xl font-bold mb-3">
                    <span className="text-gradient">Licenses & Certifications</span>
                </h2>
                <p className="text-muted-foreground max-w-2xl mb-12">
                    Verified credentials and certifications across data analytics and Python programming.
                </p>

                <div className="grid sm:grid-cols-2 gap-4">
                    {CREDENTIALS.map((c, i) => (
                        <CredentialCard key={i} c={c} />
                    ))}
                </div>
            </div>
        </section>
    );
}