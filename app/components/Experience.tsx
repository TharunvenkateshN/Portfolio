"use client";

import { motion } from "framer-motion";
import { Calendar, MapPin, ExternalLink } from "lucide-react";

interface Experience {
  role: string;
  company: string;
  type: string;
  period: string;
  location: string;
  accentColor: string;
  highlights: string[];
  tech: string[];
  current?: boolean;
}

const experiences: Experience[] = [
  {
    role: "AIoT Engineer — Product Lead",
    company: "Intel IoT Club",
    type: "Club Role",
    period: "Feb 2025 – Present",
    location: "Amrita Vishwa Vidyapeetham",
    accentColor: "rgba(6,182,212,1)",
    current: true,
    highlights: [
      "Led development of a full-stack smart rental platform, designing frontend dashboards and user workflows",
      "Built interactive booking interface with real-time validation and seamless user flow",
      "Developed dynamic pricing and wallet UI with real-time updates and transaction handling",
      "Designed real-time dashboards with tracking, alerts, and performance-focused rendering",
    ],
    tech: ["React.js", "Node.js", "Full Stack", "Real-time Systems", "Dashboard UI", "IoT"],
  },
  {
    role: "Web Development Intern",
    company: "ShadowFox",
    type: "Internship",
    period: "Nov 2025 – Dec 2025",
    location: "Remote",
    accentColor: "rgba(124,58,237,1)",
    highlights: [
      "Built responsive UI components and pages using React.js and Tailwind CSS, improving usability and consistency",
      "Optimized frontend performance, reducing load time and improving overall user experience",
      "Developed and integrated REST APIs using Node.js, improving system efficiency by 20%",
    ],
    tech: ["React.js", "Tailwind CSS", "Node.js", "REST APIs", "JavaScript", "Performance Optimization"],
  },
];

export default function Experience() {
  return (
    <section id="experience" className="py-28">
      <div className="section-container">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="mb-14"
        >
          <p className="section-label">// work experience</p>
          <h2 className="section-title">
            Where I&apos;ve{" "}
            <span className="gradient-text">contributed</span>
          </h2>
        </motion.div>

        <div className="space-y-8">
          {experiences.map((exp, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: i * 0.15 }}
              className="glass-card rounded-2xl overflow-hidden"
            >
              {/* Left accent */}
              <div className="flex">
                <div
                  className="w-1 flex-shrink-0 rounded-l-2xl"
                  style={{ background: exp.accentColor }}
                />
                <div className="flex-1 p-8 md:p-10">
                  {/* Header */}
                  <div className="flex flex-wrap items-start justify-between gap-4 mb-7">
                    <div>
                      <div className="flex items-center gap-3 flex-wrap">
                        <h3 className="font-bold text-[var(--text-primary)] text-lg">
                          {exp.role}
                        </h3>
                        {exp.current && (
                          <span className="inline-flex items-center gap-1.5 text-xs font-mono px-2.5 py-0.5 rounded-full bg-[rgba(16,185,129,0.1)] border border-[rgba(16,185,129,0.25)] text-[var(--accent-green)]">
                            <span className="w-1.5 h-1.5 rounded-full bg-[var(--accent-green)] animate-pulse" />
                            Current
                          </span>
                        )}
                      </div>
                      <div className="flex items-center gap-2 mt-2">
                        <span
                          className="font-semibold text-sm"
                          style={{ color: exp.accentColor }}
                        >
                          {exp.company}
                        </span>
                        <span className="text-xs text-[var(--text-muted)] px-2 py-0.5 rounded-full border border-[var(--border)]">
                          {exp.type}
                        </span>
                      </div>
                    </div>
                    <div className="text-right text-xs text-[var(--text-muted)] space-y-1.5">
                      <div className="flex items-center gap-1.5 justify-end">
                        <Calendar size={11} />
                        <span>{exp.period}</span>
                      </div>
                      <div className="flex items-center gap-1.5 justify-end">
                        <MapPin size={11} />
                        <span>{exp.location}</span>
                      </div>
                    </div>
                  </div>

                  {/* Highlights */}
                  <ul className="space-y-4 mb-8">
                    {exp.highlights.map((h, hi) => (
                      <li key={hi} className="flex items-start gap-3">
                        <span
                          className="w-1.5 h-1.5 rounded-full flex-shrink-0 mt-[7px]"
                          style={{ background: exp.accentColor }}
                        />
                        <span className="text-sm text-[var(--text-secondary)] leading-relaxed">
                          {h}
                        </span>
                      </li>
                    ))}
                  </ul>

                  {/* Tech */}
                  <div className="flex flex-wrap gap-2 pt-6 border-t border-[var(--border)]">
                    {exp.tech.map((t) => (
                      <span key={t} className="tech-tag">
                        {t}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
