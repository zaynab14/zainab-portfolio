import React, { useEffect, useState } from "react";

const LINKS = [
    { label: "Home", id: "home" },
    { label: "Skills", id: "skills" },
    { label: "Projects", id: "projects" },
    { label: "Experience", id: "experience" },
    { label: "Courses", id: "courses" },
    { label: "Resume", id: "resume" },
    { label: "Contact", id: "contact" },
];

export default function Navbar() {
    const [active, setActive] = useState("home");
    const [scrolled, setScrolled] = useState(false);
    const [open, setOpen] = useState(false);

    useEffect(() => {
        const onScroll = () => {
            setScrolled(window.scrollY > 40);
            // section spy
            const offsets = LINKS.map((l) => {
                const el = document.getElementById(l.id);
                if (!el) return { id: l.id, top: Infinity };
                return { id: l.id, top: el.getBoundingClientRect().top };
            });
            const current = offsets.reduce((acc, cur) => (cur.top < 120 && cur.top > acc.top ? cur : acc), offsets[0]);
            setActive(current.id);
        };
        window.addEventListener("scroll", onScroll, { passive: true });
        onScroll();
        return () => window.removeEventListener("scroll", onScroll);
    }, []);

    const go = (id) => {
        setOpen(false);
        document.getElementById(id)?.scrollIntoView({ behavior: "smooth" });
    };

    return (
        <header
            className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${scrolled ? "glass border-b border-border/60" : "bg-transparent"
                }`}
        >
            <nav className="mx-auto max-w-7xl px-6 lg:px-10 h-16 flex items-center justify-between">
                <a href="#home" onClick={(e) => { e.preventDefault(); go("home"); }} className="font-mono font-bold text-base sm:text-lg tracking-tight">
                    <span className="text-foreground">Zainab Raza</span>
                    <span className="text-cyan-400">.</span>
                </a>

                <ul className="hidden md:flex items-center gap-7">
                    {LINKS.map((l) => (
                        <li key={l.id}>
                            <button
                                onClick={() => go(l.id)}
                                className={`relative font-mono text-xs uppercase tracking-widest transition-colors duration-200 hover:text-cyan-400 ${active === l.id ? "text-cyan-400" : "text-muted-foreground"
                                    }`}
                            >
                                {l.label}
                                {active === l.id && (
                                    <span className="absolute -bottom-1 left-0 right-0 h-px bg-cyan-400 animate-[scan-line_0.4s_ease]" />
                                )}
                            </button>
                        </li>
                    ))}
                </ul>

                <button
                    className="md:hidden text-muted-foreground hover:text-cyan-400 transition-colors"
                    onClick={() => setOpen((o) => !o)}
                    aria-label="Toggle menu"
                >
                    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                        {open ? <path d="M18 6 6 18M6 6l12 12" /> : <path d="M3 6h18M3 12h18M3 18h18" />}
                    </svg>
                </button>
            </nav>

            {/* mobile menu */}
            {open && (
                <div className="md:hidden glass border-b border-border/60">
                    <ul className="px-6 py-4 space-y-3">
                        {LINKS.map((l) => (
                            <li key={l.id}>
                                <button
                                    onClick={() => go(l.id)}
                                    className={`block w-full text-left font-mono text-sm uppercase tracking-widest py-1 ${active === l.id ? "text-cyan-400" : "text-muted-foreground"
                                        }`}
                                >
                                    {l.label}
                                </button>
                            </li>
                        ))}
                    </ul>
                </div>
            )}
        </header>
    );
}