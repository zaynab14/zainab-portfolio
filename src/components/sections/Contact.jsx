import React, { useState } from "react";
import { SectionLabel } from "@/components/sections/Skills";

const CONTACT_EMAIL = "zainabraza782@gmail.com";

export default function Contact() {
    const [form, setForm] = useState({ name: "", email: "", message: "" });
    const [status, setStatus] = useState("");

    const update = (key) => (event) => {
        setForm((current) => ({ ...current, [key]: event.target.value }));
        setStatus("");
    };

    const submit = (event) => {
        event.preventDefault();
        const subject = encodeURIComponent(`Portfolio message from ${form.name}`);
        const body = encodeURIComponent(`Name: ${form.name}\nEmail: ${form.email}\n\n${form.message}`);
        setStatus("Your email app should open with the message ready to send.");
        window.location.href = `mailto:${CONTACT_EMAIL}?subject=${subject}&body=${body}`;
    };

    return (
        <section id="contact" className="relative py-24">
            <div className="mx-auto max-w-3xl px-6 lg:px-10">
                <SectionLabel label="CONNECTION" />
                <h2 className="text-4xl sm:text-5xl font-bold mb-3">
                    <span className="text-gradient">Get In Touch</span>
                </h2>
                <p className="text-muted-foreground max-w-2xl mb-6">
                    Have a project, role or collaboration in mind? Reach me directly at the email below, or send a message — I'll get back to you.
                </p>
                <a href={`mailto:${CONTACT_EMAIL}`} className="inline-flex items-center gap-2 font-mono text-sm text-cyan-400 hover:text-cyan-300 transition-colors mb-10">
                    <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                        <rect x="2" y="4" width="20" height="16" rx="2" />
                        <path d="m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7" />
                    </svg>
                    {CONTACT_EMAIL}
                </a>
                <form onSubmit={submit} className="space-y-6">
                    <Field label="Name">
                        <input value={form.name} onChange={update("name")} required autoComplete="name" placeholder="Your name" className="w-full bg-transparent border-0 border-b border-border/60 focus:border-cyan-400 focus:outline-none py-2.5 text-foreground placeholder:text-muted-foreground/50 transition-colors" />
                    </Field>
                    <Field label="Email">
                        <input type="email" value={form.email} onChange={update("email")} required autoComplete="email" placeholder="you@example.com" className="w-full bg-transparent border-0 border-b border-border/60 focus:border-cyan-400 focus:outline-none py-2.5 text-foreground placeholder:text-muted-foreground/50 transition-colors" />
                    </Field>
                    <Field label="Message">
                        <textarea value={form.message} onChange={update("message")} required rows={4} placeholder="Tell me about your project..." className="w-full bg-transparent border-0 border-b border-border/60 focus:border-cyan-400 focus:outline-none py-2.5 text-foreground placeholder:text-muted-foreground/50 transition-colors resize-none" />
                    </Field>
                    <button type="submit" className="w-full py-4 rounded-lg bg-cyan-400 text-background font-semibold hover:bg-cyan-300 transition-all hover:-translate-y-0.5 glow-cyan">
                        Open Email App →
                    </button>
                    <p aria-live="polite" className="text-sm text-muted-foreground">{status}</p>
                </form>
                <div className="mt-10 flex flex-wrap justify-center gap-6 font-mono text-xs text-muted-foreground">
                    <a href={`mailto:${CONTACT_EMAIL}`} className="hover:text-cyan-400 transition-colors">EMAIL</a>
                    <a href="https://github.com/zaynab14" target="_blank" rel="noreferrer" className="hover:text-cyan-400 transition-colors">GITHUB</a>
                    <a href="https://www.linkedin.com/in/zainab-raza-63362428b" target="_blank" rel="noreferrer" className="hover:text-cyan-400 transition-colors">LINKEDIN</a>
                </div>
                <footer className="mt-16 pt-6 border-t border-border/40 text-center font-mono text-xs text-muted-foreground/60">
                    © {new Date().getFullYear()} Zainab Raza · Built with the Architectural Logic design system
                </footer>
            </div>
        </section>
    );
}

function Field({ label, children }) {
    return (
        <label className="block">
            <span className="font-mono text-xs uppercase tracking-widest text-muted-foreground">{label}</span>
            <div className="mt-1">{children}</div>
        </label>
    );
}
