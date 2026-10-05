import React from "react";
import { SectionLabel } from "@/components/sections/Skills";

export default function Resume() {
    return (
        <section id="resume" className="relative py-24">
            <div className="mx-auto max-w-7xl px-6 lg:px-10">
                <SectionLabel label="DOCUMENT" />
                <h2 className="text-4xl sm:text-5xl font-bold mb-3">
                    <span className="text-gradient">Resume</span>
                </h2>
                <p className="text-muted-foreground max-w-2xl mb-12">
                    A condensed technical profile — download the full CV for the complete picture.
                </p>

                <div className="grid lg:grid-cols-2 gap-6 items-stretch">
                    {/* quick look summary */}
                    <div className="rounded-xl border border-border/60 bg-card/50 p-7">
                        <h3 className="font-mono text-xs uppercase tracking-widest text-cyan-400 mb-4">Quick Look</h3>
                        <dl className="space-y-4 text-sm">
                            <Row k="Name" v="Zainab Raza" />
                            <Row k="Role" v="AI/ML Engineer" />
                            <Row k="Degree" v="BS Computer Info. & System Eng." />
                            <Row k="University" v="NED University, Karachi" />
                            <Row k="Timeline" v="Oct 2022 — Sep 2026" />
                            <Row k="Location" v="Karachi, Pakistan" />
                        </dl>
                    </div>

                    {/* download card with scanning animation */}
                    <div className="relative rounded-xl border border-border/60 bg-card/50 p-7 flex flex-col justify-center items-center text-center overflow-hidden">
                        <div className="absolute inset-x-0 top-0 h-px bg-cyan-400/70" style={{ animation: "scan-line 2.5s linear infinite" }} />
                        <div className="mb-5 h-14 w-14 rounded-xl border border-cyan-400/40 grid place-items-center text-cyan-400">
                            <svg width="26" height="26" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                                <path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z" />
                                <path d="M14 2v6h6M12 18v-6M9 15l3 3 3-3" />
                            </svg>
                        </div>
                        <h3 className="text-xl font-semibold text-foreground mb-2">Download Technical CV</h3>
                        <p className="text-sm text-muted-foreground mb-6 max-w-xs">
                            Full résumé with experience, projects and certifications in PDF format.
                        </p>
                        <a
                            href="/assets/zainab-raza-cv.pdf"
                            target="_blank"
                            rel="noreferrer"
                            className="px-7 py-3 rounded-lg bg-cyan-400 text-background font-semibold hover:bg-cyan-300 transition-all hover:-translate-y-0.5 glow-cyan"
                        >
                            Download CV ↓
                        </a>
                    </div>
                </div>
            </div>
        </section>
    );
}

function Row({ k, v }) {
    return (
        <div className="flex justify-between gap-4 border-b border-border/40 pb-3 last:border-0 last:pb-0">
            <dt className="font-mono text-xs uppercase tracking-wider text-muted-foreground">{k}</dt>
            <dd className="text-foreground font-medium text-right">{v}</dd>
        </div>
    );
}
