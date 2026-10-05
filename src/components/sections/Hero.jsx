import React from "react";
import useTyping from "@/components/useTyping";

const PHRASES = [
    "Architecting Scalable AI Systems",
    "Designing REST APIs with FastAPI",
    "Using Transformer Models For AI-Systems",
    "Built LLM Apps and Agents",
];

export default function Hero() {
    const typed = useTyping(PHRASES);

    const scrollTo = (id) => document.getElementById(id)?.scrollIntoView({ behavior: "smooth" });

    return (
        <section id="home" className="relative min-h-screen flex items-center pt-24 pb-16">
            <div className="mx-auto max-w-7xl w-full px-6 lg:px-10 grid md:grid-cols-2 gap-12 items-center">
                {/* left column */}
                <div className="space-y-6">
                    <div className="inline-flex items-center gap-2 font-mono text-xs tracking-widest text-cyan-400">
                        <span className="h-1.5 w-1.5 rounded-full bg-cyan-400 animate-pulse" />
                        AI ENGINEER · KARACHI, PAKISTAN
                    </div>

                    <h1 className="font-display font-extrabold leading-[1.05] text-5xl sm:text-6xl lg:text-7xl whitespace-nowrap">
                        <span className="text-gradient-purple">Zainab Raza</span>
                    </h1>

                    <p className="text-lg text-foreground/90 font-medium">
                        Bachelor in Computer System Engineering From NED University
                    </p>

                    {/* terminal typing */}
                    <div className="font-mono text-sm sm:text-base text-muted-foreground bg-secondary/40 border border-border/60 rounded-lg px-4 py-3 inline-flex items-center gap-2 max-w-full">
                        <span className="text-cyan-400">$</span>
                        <span className="truncate">{typed}</span>
                        <span className="inline-block w-2 h-5 bg-cyan-400 animate-blink" />
                    </div>

                    <p className="text-muted-foreground text-base leading-relaxed max-w-xl">
                        I'm a Software Engineer and AI Engineer who builds intelligent, production-ready applications
                        from the database to the interface. I work across the full stack: FastAPI and Flask backends,
                        polished React and Flutter frontends, and AI layers powered by Generative AI, LLMs, and AI
                        agents. My background in computer vision and vision-language models led me to build a wearable
                        assistive device that describes the world through audio and detects falls in real time. I also
                        build LLM-powered apps with guardrails against prompt injection and unsafe outputs, so they're
                        reliable as well as impressive. Whether it's a clean user interface, a scalable API, or an AI
                        feature that makes a real difference, I turn ambitious ideas into software people can actually use.
                    </p>

                    <div className="flex flex-wrap gap-4 pt-2">
                        <button
                            onClick={() => scrollTo("projects")}
                            className="px-6 py-3 rounded-lg bg-violet-600 hover:bg-violet-500 text-white font-medium transition-all hover:-translate-y-0.5 glow-purple"
                        >
                            » View Projects
                        </button>
                        <button
                            onClick={() => scrollTo("contact")}
                            className="px-6 py-3 rounded-lg border border-foreground/30 hover:border-cyan-400 hover:text-cyan-400 text-foreground font-medium transition-all"
                        >
                            Get In Touch
                        </button>
                    </div>
                </div>

                {/* right column — portrait */}
                <div className="relative flex justify-center md:justify-end">
                    <div className="relative w-64 h-64 sm:w-80 sm:h-80">
                        {/* rotating gradient ring */}
                        <div
                            className="absolute -inset-4 rounded-full animate-spin-slow opacity-80"
                            style={{
                                background: "conic-gradient(from 0deg, #22d3ee, #c084fc, #22d3ee)",
                                filter: "blur(14px)",
                            }}
                        />
                        <div className="absolute inset-0 rounded-full overflow-hidden border-2 border-white/10">
                            <img
                                src="/assets/zainab-raza.png"
                                alt="Zainab Raza"
                                className="w-full h-full object-cover"
                            />
                        </div>

                        {/* minimal status badge — sits below the portrait, never overlaps */}
                        <div className="absolute -bottom-5 left-1/2 -translate-x-1/2 glass border border-border/70 rounded-full px-4 py-2 text-xs font-mono whitespace-nowrap flex items-center gap-2">
                            <span className="relative flex h-2 w-2">
                                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75" />
                                <span className="relative inline-flex rounded-full h-2 w-2 bg-emerald-400" />
                            </span>
                            <span className="text-foreground/90">Open to opportunities</span>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}
