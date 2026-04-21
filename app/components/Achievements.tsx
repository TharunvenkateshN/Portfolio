"use client";

import { motion } from "framer-motion";
import { Trophy, Award, Star, Cpu, Lightbulb, BookOpen } from "lucide-react";

const achievements = [
  {
    icon: <Trophy size={22} />,
    title: "Hackfest 2.0 — Runner-up",
    org: "GDG Cloud New Delhi",
    year: "Mar 2026",
    credentialId: "CERT-2C20358D-E681-49F9",
    color: "rgba(245,158,11,1)",
    bgColor: "rgba(245,158,11,0.1)",
    borderColor: "rgba(245,158,11,0.25)",
    description:
      "Recognized as Runner-Up at HackFest 2.0, a national-level hackathon organized by Google Developer Groups (GDG) Delhi. Developed an innovative technology solution under time-constrained conditions, collaborating in a competitive environment with participants from multiple institutions.",
  },
];

// Curated: most impactful for internship & job opportunities
const certifications = [
  {
    title: "Application Development using Microservices and Serverless",
    issuer: "IBM",
    year: "Jun 2025",
    color: "rgba(6,182,212,1)",
    credentialId: "TQZQF6CXS589",
    skills: ["Microservices", "Serverless"],
  },
  {
    title: "Node.js & MongoDB: Developing Back-end Database Applications",
    issuer: "IBM",
    year: "Jun 2025",
    color: "rgba(124,58,237,1)",
    credentialId: "BKOLLNS0G53K",
    skills: ["MySQL", "Databases"],
  },
  {
    title: "Introduction to Containers w/ Docker, Kubernetes & OpenShift",
    issuer: "IBM",
    year: "Jun 2025",
    color: "rgba(16,185,129,1)",
    credentialId: "NXDWCZ98MGPN",
    skills: ["Docker", "Kubernetes"],
  },
  {
    title: "Developing Back-End Apps with Node.js and Express",
    issuer: "IBM",
    year: "Jun 2025",
    color: "rgba(245,158,11,1)",
    credentialId: "SUPS54F3MRLT",
    skills: ["Node.js", "Express"],
  },
  {
    title: "Developing Front-End Apps with React",
    issuer: "IBM",
    year: "May 2025",
    color: "rgba(6,182,212,1)",
    credentialId: "EFDXSTUSMU51",
    skills: ["React", "Frontend"],
  },
  {
    title: "PyTorch Workshop",
    issuer: "IETE",
    year: "Mar 2025",
    color: "rgba(239,68,68,1)",
    credentialId: null,
    skills: ["PyTorch", "Deep Learning"],
  },
  {
    title: "Introduction to Large Language Models (LLM)",
    issuer: "Google Cloud Skills Boost",
    year: "Dec 2024",
    color: "rgba(59,130,246,1)",
    credentialId: "13443311",
    skills: ["LLMs", "Generative AI"],
  },
  {
    title: "Introduction to Generative AI",
    issuer: "Google Cloud Skills Boost",
    year: "Dec 2024",
    color: "rgba(124,58,237,1)",
    credentialId: "13433131",
    skills: ["GenAI"],
  },
];

const activities = [
  {
    icon: <Cpu size={18} />,
    iconColor: "rgba(6,182,212,1)",
    title: "AIoT Engineer — Product Lead · Intel IoT Club",
    desc: "Leading full-stack smart rental platform development: dashboards, booking UI, real-time pricing & tracking",
  },
  {
    icon: <Lightbulb size={18} />,
    iconColor: "rgba(245,158,11,1)",
    title: "Hackathon Enthusiast",
    desc: "Regular participant in national-level hackathons and buildathons — Runner-up at Hackfest 2.0 (GDG Delhi)",
  },
  {
    icon: <BookOpen size={18} />,
    iconColor: "rgba(124,58,237,1)",
    title: "Continuous Learner",
    desc: "Self-driven learning across ML, system design, DevOps, and backend architecture",
  },
];

export default function Achievements() {
  return (
    <section id="achievements" className="py-28">
      <div className="section-container">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="mb-14"
        >
          <p className="section-label">// recognition &amp; growth</p>
          <h2 className="section-title">
            Achievements &amp;{" "}
            <span className="gradient-text">Certifications</span>
          </h2>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-10">
          {/* Left column: Awards + Activities */}
          <div className="space-y-5">
            <h3 className="font-semibold text-[var(--text-primary)] text-sm flex items-center gap-2">
              <Trophy size={16} className="text-yellow-400" />
              Competitions &amp; Awards
            </h3>
            {achievements.map((a, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: i * 0.1 }}
                className="glass-card rounded-xl overflow-hidden"
                style={{ border: `1px solid ${a.borderColor}` }}
              >
                <div className="h-0.5" style={{ background: a.color }} />
                <div className="p-6">
                  <div className="flex items-start gap-4">
                    <div
                      className="p-2.5 rounded-xl flex-shrink-0"
                      style={{ background: a.bgColor, border: `1px solid ${a.borderColor}`, color: a.color }}
                    >
                      {a.icon}
                    </div>
                    <div className="flex-1">
                      <h4 className="font-bold text-[var(--text-primary)] text-sm">{a.title}</h4>
                      <div className="flex items-center gap-2 mt-1.5 flex-wrap">
                        <span className="text-xs font-semibold" style={{ color: a.color }}>{a.org}</span>
                        <span className="text-xs text-[var(--text-muted)]">· {a.year}</span>
                      </div>
                      <p className="text-xs text-[var(--text-muted)] mt-3 leading-relaxed">{a.description}</p>
                      {a.credentialId && (
                        <div className="mt-3 text-xs font-mono text-[var(--text-muted)] opacity-60">
                          ID: {a.credentialId}
                        </div>
                      )}
                    </div>
                  </div>
                </div>
              </motion.div>
            ))}

            {/* Activities */}
            <h3 className="font-semibold text-[var(--text-primary)] text-sm flex items-center gap-2 pt-4">
              <Star size={16} className="text-[var(--accent-secondary)]" />
              Activities &amp; Involvement
            </h3>
            {activities.map((act, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 15 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: i * 0.08 }}
                className="glass-card rounded-xl p-5 flex items-start gap-4"
              >
                <div
                  className="p-2 rounded-lg flex-shrink-0 mt-0.5"
                  style={{ color: act.iconColor, background: `${act.iconColor}18`, border: `1px solid ${act.iconColor}30` }}
                >
                  {act.icon}
                </div>
                <div>
                  <div className="font-semibold text-[var(--text-primary)] text-sm">{act.title}</div>
                  <div className="text-xs text-[var(--text-muted)] mt-1 leading-relaxed">{act.desc}</div>
                </div>
              </motion.div>
            ))}
          </div>

          {/* Right column: Certifications */}
          <div>
            <h3 className="font-semibold text-[var(--text-primary)] text-sm flex items-center gap-2 mb-5">
              <Award size={16} className="text-[var(--accent-primary)]" />
              Certifications &amp; Courses
            </h3>
            <div className="space-y-3">
              {certifications.map((cert, i) => (
                <motion.div
                  key={i}
                  initial={{ opacity: 0, x: 20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.4, delay: i * 0.06 }}
                  className="glass-card rounded-xl p-4 flex items-start gap-3"
                >
                  <div
                    className="w-1 self-stretch rounded-full flex-shrink-0 mt-0.5"
                    style={{ background: cert.color, minHeight: "36px" }}
                  />
                  <div className="flex-1 min-w-0">
                    <div className="font-semibold text-[var(--text-primary)] text-xs leading-snug">{cert.title}</div>
                    <div className="text-xs text-[var(--text-muted)] mt-1">{cert.issuer} · {cert.year}</div>
                    <div className="flex flex-wrap gap-1.5 mt-2">
                      {cert.skills.map((s) => (
                        <span
                          key={s}
                          className="text-[10px] px-1.5 py-0.5 rounded font-mono border border-[var(--border)] text-[var(--text-muted)]"
                          style={{ background: "rgba(255,255,255,0.02)" }}
                        >
                          {s}
                        </span>
                      ))}
                    </div>
                  </div>
                  <div className="text-[10px] font-mono text-[var(--text-muted)] opacity-50 shrink-0 pt-0.5">{cert.year.split(" ")[1]}</div>
                </motion.div>
              ))}
            </div>

          </div>
        </div>
      </div>
    </section>
  );
}
