"use client";

import { motion } from "framer-motion";
import { GraduationCap, MapPin, Code2, Cpu } from "lucide-react";

export default function About() {
  return (
    <section id="about" className="py-28">
      <div className="section-container">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <p className="section-label">// about me</p>
          <h2 className="section-title mb-6">
            Engineer by mindset.{" "}
            <span className="gradient-text">Builder by instinct.</span>
          </h2>
        </motion.div>

        <div className="mt-16 grid md:grid-cols-2 gap-14 items-start">
          {/* Left: Bio */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="space-y-7"
          >
            <p className="text-[var(--text-secondary)] leading-loose text-base">
              I'm a <span className="text-[var(--text-primary)] font-semibold">B.Tech Computer and Communication Engineering</span> student 
              at Amrita Vishwa Vidyapeetham (CGPA: 8.87), focused on building systems that operate at the intersection of 
              <span className="text-[var(--accent-secondary)]"> machine learning</span>, 
              <span className="text-[var(--accent-primary)]"> backend infrastructure</span>, and 
              <span className="text-[var(--accent-green)]"> real-time data processing</span>.
            </p>
            <p className="text-[var(--text-secondary)] leading-loose text-base">
              My work goes beyond prototypes — I obsess over{" "}
              <span className="text-[var(--text-primary)] font-medium">latency, throughput, and real-world impact</span>. 
              Every project I ship includes measurable performance improvements, 
              whether that's an 8.5× processing speedup or a 300ms API response.
            </p>
            <p className="text-[var(--text-secondary)] leading-loose text-base">
              I'm actively looking for <span className="text-[var(--text-primary)] font-semibold">AI/ML, Backend, or Full Stack roles</span> at 
              startups and product companies where I can contribute to real systems, not just internal tools.
            </p>

            {/* Education card */}
            <div
              className="glass-card rounded-xl p-6 mt-8"
              style={{ borderColor: "rgba(124,58,237,0.25)" }}
            >
              <div className="flex items-start gap-4">
                <div
                  className="p-2 rounded-lg mt-0.5"
                  style={{ background: "rgba(124,58,237,0.15)" }}
                >
                  <GraduationCap size={18} className="text-[var(--accent-primary)]" />
                </div>
                <div>
                  <div className="font-semibold text-[var(--text-primary)] text-sm">
                    Amrita Vishwa Vidyapeetham
                  </div>
                  <div className="text-xs text-[var(--text-muted)] mt-0.5">
                    B.Tech — Computer & Communication Engineering
                  </div>
                  <div className="flex items-center gap-3 mt-3">
                    <span className="metric-badge text-xs">CGPA: 8.87</span>
                    <span className="flex items-center gap-1 text-xs text-[var(--text-muted)]">
                      <MapPin size={11} /> Coimbatore, India
                    </span>
                  </div>
                </div>
              </div>
            </div>
          </motion.div>

          {/* Right: What I do cards */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="grid grid-cols-1 gap-5"
          >
            {[
              {
                icon: <Cpu size={20} className="text-[var(--accent-primary)]" />,
                title: "ML Engineering",
                desc: "Predictive systems, feature engineering, time-series ML, explainability modules. From prototype to production APIs.",
                tags: ["Logistic Regression", "FastAPI", "Sklearn"],
              },
              {
                icon: <Code2 size={20} className="text-[var(--accent-secondary)]" />,
                title: "Backend Engineering",
                desc: "High-throughput REST APIs, performance optimization, database architecture with PostgreSQL, MongoDB & Firebase.",
                tags: ["FastAPI", "Node.js", "PostgreSQL"],
              },
              {
                icon: <MapPin size={20} className="text-[var(--accent-green)]" />,
                title: "Full Stack Development",
                desc: "End-to-end applications with React.js and Next.js frontends driven by robust backend systems.",
                tags: ["React.js", "Next.js", "TypeScript"],
              },
            ].map((card, i) => (
              <div
                key={i}
                className="glass-card rounded-xl p-6"
                style={{ borderColor: "rgba(30,30,46,0.8)" }}
              >
                <div className="flex items-start gap-4">
                  <div className="p-2 rounded-lg" style={{ background: "rgba(255,255,255,0.04)" }}>
                    {card.icon}
                  </div>
                  <div className="flex-1 min-w-0">
                    <div className="font-semibold text-[var(--text-primary)] text-sm mb-2">
                      {card.title}
                    </div>
                    <p className="text-xs text-[var(--text-muted)] leading-relaxed mb-4">
                      {card.desc}
                    </p>
                    <div className="flex flex-wrap gap-1.5">
                      {card.tags.map((t) => (
                        <span key={t} className="tech-tag">{t}</span>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  );
}
