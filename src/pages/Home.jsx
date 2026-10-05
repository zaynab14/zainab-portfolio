import React from "react";
import Navbar from "@/components/Navbar";
import ScrollToTop from "@/components/ScrollToTop";
import AnimatedBackground from "@/components/AnimatedBackground";
import Hero from "@/components/sections/Hero";
import Skills from "@/components/sections/Skills";
import Projects from "@/components/sections/Projects";
import Experience from "@/components/sections/Experience";
import Courses from "@/components/sections/Courses";
import Resume from "@/components/sections/Resume";
import Contact from "@/components/sections/Contact";

export default function Home() {
    return (
        <div className="relative min-h-screen bg-[#05070a] text-foreground">
            <AnimatedBackground />
            <Navbar />
            <main className="relative" style={{ zIndex: 1 }}>
                <Hero />
                <Skills />
                <Projects />
                <Experience />
                <Courses />
                <Resume />
                <Contact />
            </main>
            <ScrollToTop />
        </div>
    );
}