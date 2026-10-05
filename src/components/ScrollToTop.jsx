import React, { useEffect, useState } from "react";

export default function ScrollToTop() {
    const [show, setShow] = useState(false);

    useEffect(() => {
        const onScroll = () => setShow(window.scrollY > 600);
        window.addEventListener("scroll", onScroll, { passive: true });
        return () => window.removeEventListener("scroll", onScroll);
    }, []);

    if (!show) return null;

    return (
        <button
            onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
            className="fixed bottom-6 right-6 z-50 h-11 w-11 rounded-xl bg-violet-500/90 hover:bg-violet-400 text-white grid place-items-center transition-all duration-300 hover:-translate-y-1 glow-purple"
            aria-label="Scroll to top"
        >
            <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                <path d="m18 15-6-6-6 6" />
            </svg>
        </button>
    );
}