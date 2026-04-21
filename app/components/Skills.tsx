"use client";

import { motion } from "framer-motion";
import { Cpu, Server, Monitor, Code2, Wrench } from "lucide-react";

interface SkillGroup {
  category: string;
  icon: React.ReactNode;
  color: string;
  skills: { name: string; level: number }[];
}

const skillGroups: SkillGroup[] = [
  {
    category: "Machine Learning",
    icon: <Cpu size={20} />,
    color: "var(--accent-primary)",
    skills: [
      { name: "Scikit-learn", level: 88 },
      { name: "Logistic Regression", level: 90 },
      { name: "Feature Engineering", level: 85 },
      { name: "Time-Series ML", level: 82 },
      { name: "Predictive Modeling", level: 87 },
      { name: "ML Explainability (SHAP)", level: 78 },
    ],
  },
  {
    category: "Backend Engineering",
    icon: <Server size={20} />,
    color: "var(--accent-secondary)",
    skills: [
      { name: "FastAPI", level: 92 },
      { name: "Node.js", level: 85 },
      { name: "REST API Design", level: 90 },
      { name: "Async I/O", level: 83 },
      { name: "PostgreSQL", level: 84 },
      { name: "MongoDB", level: 80 },
    ],
  },
  {
    category: "Frontend & Full Stack",
    icon: <Monitor size={20} />,
    color: "var(--accent-green)",
    skills: [
      { name: "React.js", level: 88 },
      { name: "Next.js", level: 85 },
      { name: "TypeScript", level: 82 },
      { name: "Tailwind CSS", level: 90 },
      { name: "Firebase", level: 78 },
      { name: "Responsive Design", level: 87 },
    ],
  },
  {
    category: "Core Languages",
    icon: <Code2 size={20} />,
    color: "rgba(245,158,11,1)",
    skills: [
      { name: "Python", level: 92 },
      { name: "JavaScript", level: 88 },
      { name: "TypeScript", level: 82 },
      { name: "SQL", level: 84 },
      { name: "HTML/CSS", level: 90 },
    ],
  },
];

const toolsAndPlatforms = [
  "Git & GitHub", "Docker", "Vercel", "Hugging Face", "Postman",
  "VS Code", "Linux", "AWS (basics)", "Firebase", "Pandas", "NumPy", "Matplotlib",
];

function SkillBar({ name, level, color, delay }: { name: string; level: number; color: string; delay: number }) {
  return (
    <motion.div
      initial={{ opacity: 0, x: -10 }}
      whileInView={{ opacity: 1, x: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.4, delay }}
      className="space-y-2"
    >
      <div className="flex justify-between items-center">
        <span className="text-xs text-[var(--text-secondary)] font-medium">{name}</span>
        <span className="text-xs font-mono text-[var(--text-muted)]">{level}%</span>
      </div>
      <div className="skill-bar">
        <motion.div
          className="skill-bar-fill"
          initial={{ scaleX: 0 }}
          whileInView={{ scaleX: level / 100 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: delay + 0.2, ease: "easeOut" }}
          style={{ background: `linear-gradient(to right, ${color}, var(--accent-secondary))` }}
        />
      </div>
    </motion.div>
  );
}

export default function Skills() {
  return (
    <section id="skills" className="py-28">
      <div className="section-container">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="mb-16"
        >
          <p className="section-label">// technical expertise</p>
          <h2 className="section-title">
            Skills &amp; <span className="gradient-text">Tech Stack</span>
          </h2>
          <p className="text-[var(--text-muted)] text-sm mt-3 max-w-xl">
            Proficiency across the ML-to-production stack — from model training to deployment.
          </p>
        </motion.div>

        {/* Skill groups */}
        <div className="grid md:grid-cols-2 gap-8 mb-8">
          {skillGroups.map((group, gi) => (
            <motion.div
              key={group.category}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: gi * 0.1 }}
              className="glass-card rounded-2xl p-8"
            >
              <div className="flex items-center gap-3 mb-7">
                <div
                  className="p-2 rounded-lg"
                  style={{ color: group.color, background: `${group.color}18`, border: `1px solid ${group.color}30` }}
                >
                  {group.icon}
                </div>
                <h3 className="font-bold text-[var(--text-primary)] text-sm">{group.category}</h3>
              </div>
              <div className="space-y-5">
                {group.skills.map((skill, si) => (
                  <SkillBar
                    key={skill.name}
                    name={skill.name}
                    level={skill.level}
                    color={group.color}
                    delay={gi * 0.1 + si * 0.05}
                  />
                ))}
              </div>
            </motion.div>
          ))}
        </div>

        {/* Tools & Platforms */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.3 }}
          className="glass-card rounded-2xl p-8"
        >
          <div className="flex items-center gap-3 mb-6">
            <div
              className="p-2 rounded-lg"
              style={{ color: "var(--accent-secondary)", background: "rgba(6,182,212,0.1)", border: "1px solid rgba(6,182,212,0.25)" }}
            >
              <Wrench size={18} />
            </div>
            <h3 className="font-bold text-[var(--text-primary)] text-sm">Tools &amp; Platforms</h3>
          </div>
          <div className="flex flex-wrap gap-3">
            {toolsAndPlatforms.map((tool) => (
              <span
                key={tool}
                className="px-3 py-1.5 text-xs font-mono rounded-lg border border-[var(--border)] text-[var(--text-secondary)] hover:border-[rgba(124,58,237,0.4)] hover:text-[var(--text-primary)] transition-all cursor-default"
                style={{ background: "rgba(255,255,255,0.02)" }}
              >
                {tool}
              </span>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
}
