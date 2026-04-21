"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import { Mail, Send, MapPin, ChevronRight, Activity } from "lucide-react";
import { GithubIcon, LinkedinIcon } from "./Icons";

export default function Contact() {
  const [form, setForm] = useState({ name: "", email: "", message: "" });
  const [status, setStatus] = useState<"idle" | "sending" | "sent" | "error">("idle");

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setStatus("sending");

    try {
      const res = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(form),
      });

      if (res.ok) {
        setStatus("sent");
        setForm({ name: "", email: "", message: "" });
      } else {
        setStatus("error");
      }
    } catch {
      setStatus("error");
    }
  };

  return (
    <section id="contact" className="py-28">
      <div className="section-container">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <p className="section-label">// get in touch</p>
          <h2 className="section-title mb-5">
            Let&apos;s build something{" "}
            <span className="gradient-text">impactful</span>
          </h2>
          <p className="text-[var(--text-muted)] text-sm max-w-lg mx-auto leading-relaxed">
            I&apos;m actively looking for{" "}
            <span className="text-[var(--text-secondary)]">AI/ML, Backend, and Full Stack internships</span>{" "}
            and entry-level opportunities. Drop me a message — I respond within 24 hours.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-12 max-w-4xl mx-auto">
          {/* Contact info */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="space-y-7"
          >
            <div className="glass-card rounded-2xl p-8 space-y-6">
              {[
                {
                  icon: <Mail size={18} />,
                  label: "Email",
                  value: "tharunnv98@gmail.com",
                  href: "mailto:tharunnv98@gmail.com",
                  color: "var(--accent-primary)",
                },
                {
                  icon: <GithubIcon size={18} />,
                  label: "GitHub",
                  value: "github.com/TharunvenkateshN",
                  href: "https://github.com/TharunvenkateshN",
                  color: "var(--text-secondary)",
                },
                {
                  icon: <LinkedinIcon size={18} />,
                  label: "LinkedIn",
                  value: "linkedin.com/in/tharun-n-v",
                  href: "https://www.linkedin.com/in/tharun-n-v",
                  color: "rgba(10,102,194,1)",
                },
                {
                  icon: <MapPin size={18} />,
                  label: "Location",
                  value: "Coimbatore, India",
                  href: null,
                  color: "var(--accent-green)",
                },
              ].map((item, i) => (
                <div key={i} className="flex items-center gap-4">
                  <div
                    className="p-2.5 rounded-xl flex-shrink-0"
                    style={{
                      background: `${item.color}15`,
                      border: `1px solid ${item.color}30`,
                      color: item.color,
                    }}
                  >
                    {item.icon}
                  </div>
                  <div>
                    <div className="text-xs text-[var(--text-muted)] mb-0.5">{item.label}</div>
                    {item.href ? (
                      <a
                        href={item.href}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-sm text-[var(--text-secondary)] hover:text-[var(--text-primary)] transition-colors"
                      >
                        {item.value}
                      </a>
                    ) : (
                      <div className="text-sm text-[var(--text-secondary)]">{item.value}</div>
                    )}
                  </div>
                </div>
              ))}
            </div>

            {/* CTA card */}
            <div
              className="glass-card rounded-2xl p-8"
              style={{
                background: "linear-gradient(135deg, rgba(124,58,237,0.08) 0%, rgba(6,182,212,0.05) 100%)",
                borderColor: "rgba(124,58,237,0.25)",
              }}
            >
              <div className="flex items-center gap-2 mb-3">
                <Activity size={16} className="text-[var(--accent-green)]" />
                <h3 className="font-bold text-[var(--text-primary)] text-sm">Currently Available</h3>
              </div>
              <p className="text-xs text-[var(--text-muted)] leading-relaxed mb-6">
                Looking for internships and entry-level roles in AI/ML Engineering,
                Backend Development, or Full Stack Development.
                Preferably at product-based startups.
              </p>
              <a
                href="mailto:tharunnv98@gmail.com"
                className="btn-primary w-full justify-center"
                style={{ padding: "10px 20px", fontSize: "0.8rem" }}
              >
                <Mail size={14} />
                Send Email Directly
                <ChevronRight size={14} />
              </a>
            </div>
          </motion.div>

          {/* Contact form */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            <form onSubmit={handleSubmit} className="glass-card rounded-2xl p-8 space-y-6">
              <h3 className="font-bold text-[var(--text-primary)] text-sm mb-3">
                Send a Message
              </h3>

              <div>
                <label className="text-xs text-[var(--text-muted)] font-medium block mb-2" htmlFor="contact-name">
                  Your Name
                </label>
                <input
                  id="contact-name"
                  type="text"
                  required
                  value={form.name}
                  onChange={(e) => setForm({ ...form, name: e.target.value })}
                  placeholder="John Doe"
                  className="w-full px-4 py-3.5 rounded-lg text-sm text-[var(--text-primary)] placeholder-[var(--text-muted)] bg-[rgba(255,255,255,0.03)] border border-[var(--border)] focus:border-[var(--accent-primary)] focus:outline-none focus:ring-1 focus:ring-[rgba(124,58,237,0.3)] transition-all"
                />
              </div>

              <div>
                <label className="text-xs text-[var(--text-muted)] font-medium block mb-2" htmlFor="contact-email">
                  Email Address
                </label>
                <input
                  id="contact-email"
                  type="email"
                  required
                  value={form.email}
                  onChange={(e) => setForm({ ...form, email: e.target.value })}
                  placeholder="john@company.com"
                  className="w-full px-4 py-3.5 rounded-lg text-sm text-[var(--text-primary)] placeholder-[var(--text-muted)] bg-[rgba(255,255,255,0.03)] border border-[var(--border)] focus:border-[var(--accent-primary)] focus:outline-none focus:ring-1 focus:ring-[rgba(124,58,237,0.3)] transition-all"
                />
              </div>

              <div>
                <label className="text-xs text-[var(--text-muted)] font-medium block mb-2" htmlFor="contact-message">
                  Message
                </label>
                <textarea
                  id="contact-message"
                  required
                  rows={6}
                  value={form.message}
                  onChange={(e) => setForm({ ...form, message: e.target.value })}
                  placeholder="Hi Tharun, I'd like to discuss an opportunity..."
                  className="w-full px-4 py-3.5 rounded-lg text-sm text-[var(--text-primary)] placeholder-[var(--text-muted)] bg-[rgba(255,255,255,0.03)] border border-[var(--border)] focus:border-[var(--accent-primary)] focus:outline-none focus:ring-1 focus:ring-[rgba(124,58,237,0.3)] transition-all resize-none"
                />
              </div>

              <button
                type="submit"
                disabled={status === "sending" || status === "sent"}
                className="btn-primary w-full justify-center disabled:opacity-60 disabled:cursor-not-allowed"
              >
                {status === "sending" ? (
                  <>
                    <span className="animate-spin inline-block w-4 h-4 border-2 border-white border-t-transparent rounded-full" />
                    Sending...
                  </>
                ) : status === "sent" ? (
                  <>
                    <Send size={14} />
                    Message Sent!
                  </>
                ) : (
                  <>
                    <Send size={14} />
                    Send Message
                  </>
                )}
              </button>

              {status === "error" && (
                <p className="text-xs text-red-400 text-center">
                  Something went wrong. Please email me at{" "}
                  <a href="mailto:tharunnv98@gmail.com" className="underline">
                    tharunnv98@gmail.com
                  </a>
                </p>
              )}
            </form>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
