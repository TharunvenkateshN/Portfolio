"use client";

import { Mail, Heart } from "lucide-react";
import { GithubIcon, LinkedinIcon } from "./Icons";

export default function Footer() {
  return (
    <footer className="border-t border-[var(--border)] py-10">
      <div className="section-container">
        <div className="flex flex-col md:flex-row items-center justify-between gap-6">
          {/* Logo */}
          <div className="flex items-center gap-2">
            <span className="text-sm font-mono text-[var(--accent-secondary)]">&lt;</span>
            <span className="font-bold text-[var(--text-primary)] tracking-tight">tharun.nv</span>
            <span className="text-sm font-mono text-[var(--accent-secondary)]">/&gt;</span>
            <span className="text-xs text-[var(--text-muted)] ml-2">AI/ML · Backend · Full Stack</span>
          </div>

          {/* Nav links */}
          <div className="flex items-center gap-6 text-xs text-[var(--text-muted)]">
            {["#about", "#projects", "#skills", "#experience", "#contact"].map((href) => (
              <a
                key={href}
                href={href}
                className="hover:text-[var(--text-primary)] transition-colors capitalize"
              >
                {href.replace("#", "")}
              </a>
            ))}
          </div>

          {/* Social */}
          <div className="flex items-center gap-4">
            <a
              href="https://github.com/TharunvenkateshN"
              target="_blank"
              rel="noopener noreferrer"
              className="text-[var(--text-muted)] hover:text-[var(--text-primary)] transition-colors"
              aria-label="GitHub"
            >
              <GithubIcon size={17} />
            </a>
            <a
              href="https://www.linkedin.com/in/tharun-n-v"
              target="_blank"
              rel="noopener noreferrer"
              className="text-[var(--text-muted)] hover:text-[var(--text-primary)] transition-colors"
              aria-label="LinkedIn"
            >
              <LinkedinIcon size={17} />
            </a>
            <a
              href="mailto:tharunnv98@gmail.com"
              className="text-[var(--text-muted)] hover:text-[var(--text-primary)] transition-colors"
              aria-label="Email"
            >
              <Mail size={17} />
            </a>
          </div>
        </div>

        <div className="mt-8 pt-6 border-t border-[var(--border)] flex flex-col md:flex-row items-center justify-between gap-2 text-xs text-[var(--text-muted)]">
          <span>© 2024 Tharun N V · All rights reserved</span>
          <span className="flex items-center gap-1">
            Built with <Heart size={11} className="text-red-400 mx-0.5" fill="currentColor" /> using Next.js · TypeScript · Tailwind
          </span>
        </div>
      </div>
    </footer>
  );
}
