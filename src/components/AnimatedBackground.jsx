import React, { useEffect, useRef, useState } from "react";

// Drifting geometric primitives + animated grid. Reacts subtly to mouse proximity.
export default function AnimatedBackground() {
    const layerRef = useRef(null);
    const [mouse, setMouse] = useState({ x: 0.5, y: 0.5 });

    useEffect(() => {
        const onMove = (e) => {
            setMouse({ x: e.clientX / window.innerWidth, y: e.clientY / window.innerHeight });
        };
        window.addEventListener("mousemove", onMove);
        return () => window.removeEventListener("mousemove", onMove);
    }, []);

    const px = (mouse.x - 0.5) * 30;
    const py = (mouse.y - 0.5) * 30;

    return (
        <div ref={layerRef} className="pointer-events-none fixed inset-0 overflow-hidden" style={{ zIndex: 0 }}>
            {/* base grid */}
            <div className="absolute inset-0 grid-lines opacity-60" />

            {/* radial glow following cursor */}
            <div
                className="absolute inset-0 transition-all duration-500"
                style={{
                    background: `radial-gradient(600px circle at ${mouse.x * 100}% ${mouse.y * 100}%, rgba(34,211,238,0.06), transparent 60%)`,
                }}
            />

            {/* drifting wireframe shapes */}
            <svg
                className="absolute -top-20 -left-10 w-40 h-40 opacity-[0.12] animate-float-slow"
                style={{ transform: `translate(${px}px, ${py}px)` }}
                viewBox="0 0 100 100"
                fill="none"
                stroke="#22d3ee"
                strokeWidth="1"
            >
                <polygon points="50,5 95,27 95,73 50,95 5,73 5,27" />
                <polygon points="50,20 80,35 80,65 50,80 20,65 20,35" />
            </svg>

            <svg
                className="absolute top-1/3 right-10 w-28 h-28 opacity-[0.10] animate-float-medium"
                style={{ transform: `translate(${-px}px, ${-py}px)` }}
                viewBox="0 0 100 100"
                fill="none"
                stroke="#c084fc"
                strokeWidth="1"
            >
                <rect x="20" y="20" width="60" height="60" />
                <rect x="35" y="35" width="30" height="30" />
                <line x1="20" y1="20" x2="80" y2="80" />
                <line x1="80" y1="20" x2="20" y2="80" />
            </svg>

            <svg
                className="absolute bottom-24 left-1/4 w-32 h-32 opacity-[0.10] animate-drift"
                style={{ transform: `translate(${px * 0.6}px, ${py * 0.6}px)` }}
                viewBox="0 0 100 100"
                fill="none"
                stroke="#22d3ee"
                strokeWidth="1"
            >
                <circle cx="50" cy="50" r="40" />
                <circle cx="50" cy="50" r="25" />
                <line x1="10" y1="50" x2="90" y2="50" />
                <line x1="50" y1="10" x2="50" y2="90" />
            </svg>

            <svg
                className="absolute top-2/3 left-10 w-24 h-24 opacity-[0.10] animate-float-slow"
                style={{ transform: `translate(${-px * 0.8}px, ${-py * 0.8}px)` }}
                viewBox="0 0 100 100"
                fill="none"
                stroke="#c084fc"
                strokeWidth="1"
            >
                <polygon points="50,10 90,90 10,90" />
                <polygon points="50,30 75,80 25,80" />
            </svg>

            <svg
                className="absolute top-10 right-1/3 w-20 h-20 opacity-[0.10] animate-float-medium"
                style={{ transform: `translate(${px}px, ${-py}px)` }}
                viewBox="0 0 100 100"
                fill="none"
                stroke="#22d3ee"
                strokeWidth="1"
            >
                <path d="M50 10 L50 90 M10 50 L90 50 M22 22 L78 78 M78 22 L22 78" />
            </svg>

            {/* floating particles */}
            {[...Array(14)].map((_, i) => (
                <span
                    key={i}
                    className="absolute rounded-full animate-drift"
                    style={{
                        left: `${(i * 37) % 100}%`,
                        top: `${(i * 53) % 100}%`,
                        width: `${2 + (i % 3)}px`,
                        height: `${2 + (i % 3)}px`,
                        background: i % 2 === 0 ? "#22d3ee" : "#c084fc",
                        opacity: 0.25,
                        animationDelay: `${(i * 0.7).toFixed(2)}s`,
                        animationDuration: `${8 + (i % 5)}s`,
                    }}
                />
            ))}
        </div>
    );
}