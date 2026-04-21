"use client";

import { motion } from "framer-motion";
import { ExternalLink, TrendingUp, Zap, Shield, BarChart3 } from "lucide-react";
import { GithubIcon } from "./Icons";

interface Project {
  id: string;
  title: string;
  subtitle: string;
  icon: React.ReactNode;
  accentColor: string;
  problem: string;
  solution: string;
  metrics: string[];
  tech: string[];
  featured?: boolean;
  github?: string;
  demo?: string;
}

const projects: Project[] = [
  {
    id: "sla-guard",
    title: "SLA-Guard AI",
    subtitle: "Predictive SLA Monitoring System",
    icon: <TrendingUp size={22} />,
    accentColor: "rgba(124,58,237,1)",
    featured: true,
    problem:
      "Service-level agreements breach silently — teams react after the damage is done. Traditional threshold alerts miss subtle degradation patterns in production systems.",
    solution:
      "Built a real-time ML pipeline that predicts SLA breach probability up to 15 minutes ahead. Uses time-series features like latency trends, error acceleration, and throughput variance. Includes a full explainability module so engineers understand *why* the system is predicting a violation.",
    metrics: [
      "Real-time breach prediction APIs",
      "Time-series feature engineering",
      "Explainability module built-in",
      "FastAPI endpoints < 120ms",
    ],
    tech: ["Python", "FastAPI", "Scikit-learn", "Logistic Regression", "Pandas", "NumPy", "REST API"],
    github: "https://github.com/TharunvenkateshN/sla-guard-ai",
  },
  {
    id: "lexinel",
    title: "Lexinel",
    subtitle: "AI Compliance Monitoring System",
    icon: <Shield size={22} />,
    accentColor: "rgba(6,182,212,1)",
    featured: true,
    problem:
      "Financial compliance teams had to manually sift through 10,000+ transaction records per audit cycle — slow, error-prone, and unscalable.",
    solution:
      "Engineered a full-stack compliance monitoring platform. Backend optimized for bulk record processing with async patterns and query optimization. Next.js frontend gives compliance teams a real-time audit dashboard.",
    metrics: [
      "10,000+ records processed efficiently",
      "Significant backend perf optimization",
      "Async processing pipeline",
      "Real-time audit dashboard",
    ],
    tech: ["FastAPI", "Next.js", "TypeScript", "PostgreSQL", "Python", "REST APIs"],
    github: "https://github.com/TharunvenkateshN/Lexinel",
  },
  {
    id: "ryzen-shield",
    title: "RyzenShield",
    subtitle: "Edge AI Data Protection",
    icon: <Shield size={22} />,
    accentColor: "rgba(16,185,129,1)",
    problem:
      "Sensitive data exposure during document processing was a compliance risk. Existing tools were too slow for real-time use — making live redaction impractical.",
    solution:
      "Built an edge AI pipeline that detects and masks sensitive data in real time during document processing. Aggressively optimized the processing algorithm achieving a major speedup without sacrificing detection accuracy.",
    metrics: [
      "8.5× processing speed improvement",
      "Real-time detection & masking",
      "Edge-capable — no cloud dependency",
      "Zero accuracy degradation",
    ],
    tech: ["React.js", "Node.js", "JavaScript", "Edge AI", "NLP", "REST APIs"],
    github: "https://github.com/TharunvenkateshN/RyzenShield",
  },
  {
    id: "policy-guard",
    title: "PolicyGuard AI",
    subtitle: "Low-Latency Compliance API Engine",
    icon: <BarChart3 size={22} />,
    accentColor: "rgba(245,158,11,1)",
    problem:
      "Compliance checks in existing systems were slow and synchronous — blocking user workflows and degrading experience at scale.",
    solution:
      "Designed and built a scalable compliance monitoring backend with sub-300ms API response times. Architecture prioritizes horizontal scaling and low-latency request handling.",
    metrics: [
      "< 300ms API latency",
      "Horizontally scalable architecture",
      "Production-grade compliance APIs",
      "High-throughput design",
    ],
    tech: ["FastAPI", "Python", "PostgreSQL", "REST APIs", "Async I/O"],
    github: "https://github.com/TharunvenkateshN/PolicyGuard-AI",
  },
];

function ProjectCard({ project, index }: { project: Project; index: number }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 40 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.6, delay: index * 0.1 }}
      className="glass-card rounded-2xl overflow-hidden group"
      style={{
        border: project.featured
          ? `1px solid rgba(124,58,237,0.3)`
          : "1px solid var(--border)",
      }}
    >
      {/* Top accent bar */}
      <div
        className="h-1"
        style={{
          background: `linear-gradient(to right, ${project.accentColor}, transparent)`,
        }}
      />

      <div className="p-7 md:p-10">
        {/* Header */}
        <div className="flex items-start justify-between mb-8">
          <div className="flex items-center gap-4">
            <div
              className="p-2.5 rounded-xl"
              style={{
                background: `${project.accentColor.replace("1)", "0.12)")}`,
                border: `1px solid ${project.accentColor.replace("1)", "0.25)")}`,
                color: project.accentColor,
              }}
            >
              {project.icon}
            </div>
            <div>
              <h3 className="font-bold text-[var(--text-primary)] text-lg leading-tight">
                {project.title}
              </h3>
              <p className="text-xs text-[var(--text-muted)] mt-0.5">{project.subtitle}</p>
            </div>
          </div>
          {project.featured && (
            <span className="text-xs font-mono px-2 py-0.5 rounded-full bg-[rgba(124,58,237,0.1)] border border-[rgba(124,58,237,0.25)] text-[var(--accent-primary)]">
              Featured
            </span>
          )}
        </div>

        {/* Problem → Solution */}
        <div className="space-y-6 mb-8">
          <div>
            <span className="text-xs font-semibold font-mono text-[var(--accent-primary)] uppercase tracking-wider">
              Problem
            </span>
            <p className="text-sm text-[var(--text-muted)] mt-2 leading-relaxed">
              {project.problem}
            </p>
          </div>
          <div>
            <span className="text-xs font-semibold font-mono text-[var(--accent-secondary)] uppercase tracking-wider">
              Solution
            </span>
            <p className="text-sm text-[var(--text-secondary)] mt-2 leading-relaxed">
              {project.solution}
            </p>
          </div>
        </div>

        {/* Metrics */}
        <div className="mb-8">
          <span className="text-xs font-semibold font-mono text-[var(--accent-green)] uppercase tracking-wider mb-3 block">
            Impact &amp; Metrics
          </span>
          <div className="grid grid-cols-2 gap-3">
            {project.metrics.map((metric, i) => (
              <div
                key={i}
                className="flex items-start gap-2 text-xs text-[var(--text-secondary)] bg-[rgba(16,185,129,0.05)] border border-[rgba(16,185,129,0.1)] rounded-lg p-3"
              >
                <Zap
                  size={11}
                  className="text-[var(--accent-green)] flex-shrink-0 mt-0.5"
                />
                <span>{metric}</span>
              </div>
            ))}
          </div>
        </div>

        {/* Tech stack */}
        <div className="flex flex-wrap gap-2 pt-6 border-t border-[var(--border)]">
          {project.tech.map((t) => (
            <span key={t} className="tech-tag">
              {t}
            </span>
          ))}
        </div>

        {/* Links */}
        {project.github && (
          <div className="flex gap-3 mt-5">
            <a
              href={project.github}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-1.5 text-xs text-[var(--text-muted)] hover:text-[var(--text-primary)] transition-colors"
            >
              <GithubIcon size={13} /> Source
            </a>
          </div>
        )}
      </div>
    </motion.div>
  );
}

export default function Projects() {
  return (
    <section id="projects" className="py-28">
      <div className="section-container">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="mb-16"
        >
          <p className="section-label">// what I&apos;ve built</p>
          <h2 className="section-title">
            Projects with{" "}
            <span className="gradient-text">real-world impact</span>
          </h2>
          <p className="text-[var(--text-muted)] text-sm mt-3 max-w-xl">
            Every project ships with measurable results. Here&apos;s the evidence.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-8">
          {projects.map((project, i) => (
            <ProjectCard key={project.id} project={project} index={i} />
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ delay: 0.4 }}
          className="text-center mt-16"
        >
          <a
            href="https://github.com/TharunvenkateshN"
            target="_blank"
            rel="noopener noreferrer"
            className="btn-outline"
          >
            <GithubIcon size={16} />
            View All on GitHub
          </a>
        </motion.div>
      </div>
    </section>
  );
}
