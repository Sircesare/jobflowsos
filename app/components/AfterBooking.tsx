"use client";
import React from "react";
import { motion } from "framer-motion";
import { Phone, FileText, Workflow, CheckCircle2, ArrowRight } from "lucide-react";
import { BOOKING_URL } from "../lib/photos";

export const AfterBooking = () => {
  const steps = [
    { n: "01", t: "15-minute demo",                d: "We walk through the system and how it would configure for your business.",            icon: Phone,        time: "Day 0" },
    { n: "02", t: "Intake & process review",       d: "We map your current intake, follow-up, and pipeline — find the gaps to fill.",       icon: FileText,     time: "Day 1–2" },
    { n: "03", t: "7-day system install",          d: "We build the CRM, automations, integrations, and review the live setup with you.",  icon: Workflow,     time: "Day 3–7" },
    { n: "04", t: "Go-live & 30-day support",      d: "System turns on. You get 30 days of install support, tuning, and adjustments.",      icon: CheckCircle2, time: "Day 7+" },
  ];

  return (
    <section className="relative section-y border-t border-[var(--border)] slate-wash">
      <div className="container-tight">
        <div className="flex flex-col lg:flex-row lg:items-end justify-between gap-6 mb-10">
          <div>
            <h2 className="font-display font-medium text-[clamp(30px,3.6vw,46px)] leading-[1.08] mt-5 text-white tracking-tight">
              What happens next.
            </h2>
          </div>
          <p className="font-body text-[15px] text-[var(--text-3)] max-w-md leading-relaxed">
            A defined onboarding process. No mystery, no drawn-out timeline —
            seven days from kickoff to a live system.
          </p>
        </div>

        <div className="hidden md:flex items-center gap-2 mb-6 max-w-3xl mx-auto">
          {steps.map((_, i) => (
            <React.Fragment key={i}>
              <div className="flex items-center gap-2">
                <div className="w-6 h-6 rounded-full border-2 border-[var(--blue)] bg-[var(--bg-primary)] flex items-center justify-center">
                  <div className="w-2 h-2 rounded-full bg-[var(--blue-soft)] pulse-dot" />
                </div>
                <span className="font-mono text-[10px] uppercase tracking-[0.22em] text-[var(--text-3)]">
                  Step {i + 1}
                </span>
              </div>
              {i < steps.length - 1 && (
                <div className="flex-1 h-px bg-gradient-to-r from-[var(--blue)] via-[var(--border-strong)] to-[var(--border-strong)]" />
              )}
            </React.Fragment>
          ))}
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-3">
          {steps.map((s, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.5, delay: i * 0.08 }}
              className="relative p-6 rounded-xl border border-[var(--border)] bg-[var(--surface)]/60 hover:bg-[var(--surface)] hover:border-[var(--border-strong)] transition overflow-hidden"
            >
              <div className="flex items-start justify-between mb-4">
                <div className="w-10 h-10 rounded-lg bg-[var(--elevated)] border border-[var(--border-strong)] flex items-center justify-center">
                  <s.icon className="w-4 h-4 text-[var(--blue-soft)]" strokeWidth={1.8} />
                </div>
                <span className="font-mono text-[9px] uppercase tracking-[0.22em] text-[var(--text-4)] mt-1">
                  {s.time}
                </span>
              </div>
              <div className="font-mono text-[10px] uppercase tracking-[0.22em] text-[var(--blue-soft)] mb-2">
                Step {s.n}
              </div>
              <div className="font-display font-medium text-[17px] text-white tracking-tight">{s.t}</div>
              <p className="font-body text-[13px] text-[var(--text-3)] mt-2 leading-relaxed">{s.d}</p>
            </motion.div>
          ))}
        </div>

        <div className="mt-8 flex justify-center">
          <a href={BOOKING_URL} target="_blank" rel="noopener noreferrer"
             className="group inline-flex items-center gap-2 font-body font-medium text-[14px] text-white bg-[var(--blue)] hover:bg-[var(--blue-hover)] px-5 py-3.5 rounded-lg transition-all hover:shadow-[0_0_30px_-5px_var(--blue-glow-2)]">
            Book a Demo
            <ArrowRight className="w-4 h-4 group-hover:translate-x-0.5 transition" />
          </a>
        </div>
      </div>
    </section>
  );
};
