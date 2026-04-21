"use client";

import { useEffect, useRef, useState } from "react";
import { motion } from "framer-motion";
import { ArrowDown, Mail, ChevronRight, Download, Activity } from "lucide-react";
import { GithubIcon, LinkedinIcon } from "./Icons";
import ParticleNetwork from "./ParticleNetwork";

const roles = [
  "AI/ML Engineer",
  "Backend Engineer",
  "Full Stack Developer",
  "Systems Builder",
];

const terminalLines = [
  { delay: 0.2,  type: "cmd",     text: "python3 engineer.py --init 'Tharun N V'" },
  { delay: 0.9,  type: "info",    text: "> Bootstrapping profile..." },
  { delay: 1.5,  type: "success", text: "✓  ML Pipeline          [FastAPI · Scikit-learn]" },
  { delay: 2.0,  type: "success", text: "✓  Backend APIs         [<300ms avg latency]" },
  { delay: 2.5,  type: "success", text: "✓  Full Stack           [Next.js · React · TypeScript]" },
  { delay: 3.0,  type: "success", text: "✓  Edge AI              [8.5× speed improvement]" },
  { delay: 3.6,  type: "cmd",     text: "cat projects/sla_guard.metrics" },
  { delay: 4.1,  type: "json",    text: '{ "breach_prediction": "15min ahead", "api_latency": "<120ms" }' },
  { delay: 4.8,  type: "cmd",     text: "echo $HIRE_STATUS" },
  { delay: 5.3,  type: "highlight", text: "OPEN_TO_HIRE=true  |  AVAILABLE_IMMEDIATELY=true" },
];

function TerminalCard() {
  const [visibleLines, setVisibleLines] = useState(0);

  useEffect(() => {
    terminalLines.forEach((line, i) => {
      const t = setTimeout(() => setVisibleLines(i + 1), line.delay * 1000);
      return () => clearTimeout(t);
    });
  }, []);

  const colorMap: Record<string, string> = {
    cmd:       "text-[var(--text-primary)]",
    info:      "text-[var(--text-muted)]",
    success:   "text-[var(--accent-green)]",
    json:      "text-[var(--accent-secondary)]",
    highlight: "text-[var(--accent-primary)] font-bold",
  };

  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.7, delay: 0.6 }}
      className="w-full max-w-2xl mx-auto"
    >
      {/* Terminal window */}
      <div
        className="rounded-2xl overflow-hidden border border-[rgba(124,58,237,0.3)]"
        style={{ background: "rgba(10,10,20,0.95)", boxShadow: "0 0 60px rgba(124,58,237,0.15), 0 24px 48px rgba(0,0,0,0.5)" }}
      >
        {/* Title bar */}
        <div
          className="flex items-center gap-2 px-4 py-3 border-b border-[rgba(255,255,255,0.05)]"
          style={{ background: "rgba(20,20,35,0.8)" }}
        >
          <span className="w-3 h-3 rounded-full bg-[#ff5f57]" />
          <span className="w-3 h-3 rounded-full bg-[#febc2e]" />
          <span className="w-3 h-3 rounded-full bg-[#28c840]" />
          <span className="ml-4 text-xs font-mono text-[var(--text-muted)] flex-1 text-center">
            tharun@portfolio: ~/engineering
          </span>
          <Activity size={12} className="text-[var(--accent-green)]" />
        </div>

        {/* Terminal body */}
        <div className="p-5 font-mono text-[0.78rem] leading-7 min-h-[220px]">
          {terminalLines.slice(0, visibleLines).map((line, i) => (
            <div key={i} className={`flex gap-2 ${colorMap[line.type] || "text-white"}`}>
              {line.type === "cmd" ? (
                <>
                  <span className="text-[var(--accent-green)] select-none">$</span>
                  <span>{line.text}</span>
                </>
              ) : (
                <>
                  <span className="opacity-0 select-none">$</span>
                  <span>{line.text}</span>
                </>
              )}
            </div>
          ))}
          {/* Blinking cursor after last visible line */}
          {visibleLines < terminalLines.length && (
            <div className="flex gap-2 text-[var(--text-muted)]">
              {terminalLines[visibleLines]?.type === "cmd" ? (
                <span className="text-[var(--accent-green)] select-none">$</span>
              ) : (
                <span className="opacity-0 select-none">$</span>
              )}
              <span className="cursor-blink text-[var(--accent-primary)]">▊</span>
            </div>
          )}
        </div>
      </div>
    </motion.div>
  );
}

export default function Hero() {
  const [roleIndex, setRoleIndex] = useState(0);
  const [displayed, setDisplayed] = useState("");
  const [isDeleting, setIsDeleting] = useState(false);
  const timerRef = useRef<ReturnType<typeof setTimeout> | null>(null);

  useEffect(() => {
    const targetRole = roles[roleIndex];
    const speed = isDeleting ? 40 : 80;

    timerRef.current = setTimeout(() => {
      if (!isDeleting) {
        if (displayed.length < targetRole.length) {
          setDisplayed(targetRole.slice(0, displayed.length + 1));
        } else {
          setTimeout(() => setIsDeleting(true), 1800);
        }
      } else {
        if (displayed.length > 0) {
          setDisplayed(displayed.slice(0, -1));
        } else {
          setIsDeleting(false);
          setRoleIndex((prev) => (prev + 1) % roles.length);
        }
      }
    }, speed);

    return () => {
      if (timerRef.current) clearTimeout(timerRef.current);
    };
  }, [displayed, isDeleting, roleIndex]);

  return (
    <section
      id="hero"
      className="relative min-h-screen flex items-center justify-center overflow-hidden pt-20"
    >
      {/* Interactive Particle Network Background */}
      <ParticleNetwork />

      {/* Grid pattern overlay */}
      <div
        className="absolute inset-0 pointer-events-none z-[1]"
        style={{
          backgroundImage: `linear-gradient(rgba(255,255,255,0.02) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.02) 1px, transparent 1px)`,
          backgroundSize: "60px 60px",
          maskImage: "radial-gradient(ellipse at center, black 40%, transparent 80%)",
          WebkitMaskImage: "radial-gradient(ellipse at center, black 40%, transparent 80%)",
        }}
      />

      <div className="section-container relative z-10 text-center">
        {/* Status badge */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="inline-flex items-center gap-2 mb-10 px-5 py-2.5 rounded-full border border-[rgba(16,185,129,0.3)] bg-[rgba(16,185,129,0.06)]"
        >
          <span className="status-dot" />
          <span className="text-xs font-mono text-[var(--accent-green)] font-medium">
            Open to Internships &amp; Entry-Level Roles
          </span>
        </motion.div>

        {/* Name */}
        <motion.h1
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.1 }}
          className="text-5xl md:text-7xl font-black mb-6 leading-none tracking-tight"
        >
          <span className="text-[var(--text-primary)]">Tharun </span>
          <span className="gradient-text">N V</span>
        </motion.h1>

        {/* Dynamic role */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="text-xl md:text-3xl font-semibold text-[var(--text-secondary)] mb-8 h-12 flex items-center justify-center gap-2"
        >
          <span className="mono text-[var(--accent-secondary)]">{displayed}</span>
          <span className="cursor-blink text-[var(--accent-primary)]">|</span>
        </motion.div>

        {/* Positioning statement */}
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.3 }}
          className="text-base md:text-lg text-[var(--text-muted)] max-w-2xl mx-auto mb-12 leading-loose"
        >
          I build{" "}
          <span className="text-[var(--text-secondary)]">production-grade ML systems</span>,{" "}
          <span className="text-[var(--text-secondary)]">high-performance APIs</span>, and{" "}
          <span className="text-[var(--text-secondary)]">scalable full-stack applications</span>{" "}
          — combining real-time intelligence with engineering rigor.
        </motion.p>

        {/* CTA buttons */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="flex flex-wrap items-center justify-center gap-4 mb-14"
        >
          <a href="#projects" className="btn-primary">
            View Projects
            <ChevronRight size={16} />
          </a>
          <a href="#contact" className="btn-outline">
            <Mail size={15} />
            Hire Me
          </a>
          <a
            href="/resume.pdf"
            download
            className="flex items-center gap-2 px-5 py-3 rounded-lg text-sm font-semibold text-[var(--text-secondary)] border border-[var(--border)] hover:border-[var(--accent-secondary)] hover:text-[var(--accent-secondary)] transition-all"
          >
            <Download size={14} />
            Resume
          </a>
          <a
            href="https://github.com/TharunvenkateshN"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-2 text-sm text-[var(--text-muted)] hover:text-[var(--text-primary)] transition-colors"
          >
            <GithubIcon size={16} />
            GitHub
          </a>
          <a
            href="https://www.linkedin.com/in/tharun-n-v"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-2 text-sm text-[var(--text-muted)] hover:text-[var(--text-primary)] transition-colors"
          >
            <LinkedinIcon size={16} />
            LinkedIn
          </a>
        </motion.div>

        {/* Quick stats */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.5 }}
          className="grid grid-cols-3 gap-5 max-w-xl mx-auto mb-14"
        >
          {[
            { value: "8.87", label: "CGPA" },
            { value: "4+",   label: "ML/Full Stack Projects" },
            { value: "8.5×", label: "Max Performance Gain" },
          ].map((stat, i) => (
            <div
              key={i}
              className="glass-card rounded-xl p-6 text-center"
              style={{ border: "1px solid rgba(124,58,237,0.2)" }}
            >
              <div className="text-3xl font-black gradient-text mb-2">{stat.value}</div>
              <div className="text-xs text-[var(--text-muted)] leading-snug">{stat.label}</div>
            </div>
          ))}
        </motion.div>

        {/* Terminal card */}
        <TerminalCard />

        {/* Scroll cue */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1, delay: 6 }}
          className="flex flex-col items-center gap-3 text-[var(--text-muted)] mt-14"
        >
          <span className="text-xs mono">scroll to explore</span>
          <motion.div animate={{ y: [0, 6, 0] }} transition={{ repeat: Infinity, duration: 1.5 }}>
            <ArrowDown size={16} />
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}
