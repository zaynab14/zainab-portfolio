import React from "react";
import { SectionLabel } from "@/components/sections/Skills";

const PROJECTS = [
    {
        n: "01",
        title: "SmartSight: AI Assistive Navigation Wearable",
        desc: "Final-year project — an assistive navigation and fall-detection system combining an ESP32 wearable, computer vision, and LLM-based scene understanding. Converts camera input into spoken descriptions, with sensor-based alerts and emergency notifications for caregivers.",
        tags: ["Generative AI", "LLM", "Computer Vision", "YOLO11", "FastAPI", "ESP32", "Flutter"],
        link: "https://github.com/hibamahboob587/FYP.git",
        featured: true,
    },
    {
        n: "02",
        title: "Mood-Based Music Recommendation System",
        desc: "A full-stack application that uses Google Gemini and the Spotify Web API to generate personalized music recommendations. Built with a React frontend and Flask backend, with JWT authentication and PostgreSQL integration.",
        tags: ["Generative AI", "LLM", "Gemini API", "React", "Flask", "PostgreSQL"],
        link: "https://github.com/zaynab14/Music-Recommendation-System.git",
    },
    {
        n: "03",
        title: "Autonomous Flappy Bird AI Agent",
        desc: "An autonomous game-playing agent trained with NEAT to make real-time decisions in Flappy Bird. Developed with Python and Pygame, using evolved neural networks and tuned fitness and population parameters.",
        tags: ["AI Agent", "NEAT", "Neural Networks", "Python", "Pygame"],
        link: "https://github.com/zaynab14/Flappy-bird-AI-based.git",
    },
    {
        n: "04",
        title: "Air Quality Monitoring System",
        desc: "An ESP32-based IoT system that collects environmental readings from DHT11 and MQ-135 sensors and sends data to the cloud for remote monitoring and analysis.",
        tags: ["IoT", "ESP32", "Sensors", "REST API", "ThingSpeak", "Environmental Monitoring"],
        link: "https://github.com/zaynab14/IOT-based-Air-Quality-Monitor-.git",
    },
    {
        n: "05",
        title: "Book Recommendation System",
        desc: "A personalized recommendation system that helps readers discover books using preference-based filtering and book similarities. Combines exploratory data analysis with machine learning methods such as collaborative or content-based filtering.",
        tags: ["Recommendation Systems", "Machine Learning", "Python", "Pandas", "NumPy", "Scikit-learn", "EDA"],
        link: "https://github.com/zaynab14/Book-Recommendation.git",
    },
    {
        n: "06",
        title: "SE Space Shooter",
        desc: "A retro-style JavaScript space shooter featuring responsive movement, projectile firing, enemy waves, and collision detection. Includes a live score and health display, with animated effects and arcade-style audio.",
        tags: ["JavaScript", "Node.js", "HTML5 Canvas", "Game Development", "Collision Detection"],
        link: "https://github.com/zaynab14/SE-Space-shooter.git",
    },
];

function Card({ p }) {
    return (
        <div className={`group relative rounded-xl border bg-card/50 p-6 flex flex-col transition-all duration-300 hover:-translate-y-1 hover:bg-card/80 ${p.featured ? "border-cyan-400/50 hover:border-cyan-400/80 glow-cyan sm:col-span-2 lg:col-span-2" : "border-border/60 hover:border-cyan-400/40"}`}>
            <div className="flex items-center justify-between mb-3">
                <div className="font-mono text-xs text-muted-foreground/70">#{p.n}</div>
                {p.featured && (
                    <span className="font-mono text-[10px] uppercase tracking-widest px-2 py-0.5 rounded-full border border-violet-400/50 text-violet-300 bg-violet-400/10">
                        ★ Final-Year Project
                    </span>
                )}
            </div>
            <h3 className={`font-bold text-foreground mb-2 ${p.featured ? "text-xl sm:text-2xl" : "text-lg"}`}>{p.title}</h3>
            <p className={`text-muted-foreground leading-relaxed mb-5 flex-1 ${p.featured ? "text-sm sm:text-base max-w-3xl" : "text-sm"}`}>{p.desc}</p>
            <div className="flex flex-wrap gap-2 mb-4">
                {p.tags.map((t) => (
                    <span
                        key={t}
                        className="text-xs font-mono px-2.5 py-1 rounded-full border border-cyan-400/40 text-cyan-300 bg-cyan-400/5"
                    >
                        {t}
                    </span>
                ))}
            </div>
            <a
                href={p.link}
                target="_blank"
                rel="noreferrer"
                className="font-mono text-sm text-violet-400 hover:text-violet-300 transition-colors inline-flex items-center gap-1"
            >
                View on GitHub <span className="transition-transform group-hover:translate-x-1">→</span>
            </a>
        </div>
    );
}

export default function Projects() {
    return (
        <section id="projects" className="relative py-24">
            <div className="mx-auto max-w-7xl px-6 lg:px-10">
                <SectionLabel label="WORK" />
                <h2 className="text-4xl sm:text-5xl font-bold mb-3">
                    <span className="text-gradient">Featured Projects</span>
                </h2>
                <p className="text-muted-foreground max-w-2xl mb-10">
                    Applied AI across Generative AI, LLMs, computer vision, and autonomous systems.
                </p>

                <div className="grid sm:grid-cols-2 lg:grid-cols-2 gap-5">
                    {PROJECTS.map((p) => (
                        <Card key={p.n} p={p} />
                    ))}
                </div>
            </div>
        </section>
    );
}