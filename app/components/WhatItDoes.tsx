"use client";
import { motion } from "framer-motion";
import {
  Zap, PhoneMissed, Send, Layers, Star, Activity, CalendarCheck, Smartphone,
} from "lucide-react";

const FEATURES = [
  { icon: Zap,           t: "Instant Lead Response",    d: "Every form, call, and DM gets a personal reply automatically — 24/7." },
  { icon: PhoneMissed,   t: "Missed Call Text-Back",    d: "Unanswered calls trigger an immediate SMS so the lead doesn't go cold." },
  { icon: Send,          t: "Automated Follow-Up",      d: "Multi-channel sequences across SMS, email, and voicemail until they respond." },
  { icon: Layers,        t: "CRM Pipeline",             d: "Every opportunity organized by stage, value, source, and last activity." },
  { icon: Star,          t: "Review Automation",        d: "Post-job review requests sent automatically after each completed job." },
  { icon: Activity,      t: "Lead Tracking",            d: "See every source, every touchpoint, every conversion in one view." },
  { icon: CalendarCheck, t: "Booking Automation",       d: "Self-service scheduling that respects your crew calendar and route." },
  { icon: Smartphone,    t: "Mobile Visibility",        d: "Full operational control from the truck, the site, or the couch." },
];

const FeatureCard = ({ f, i }: any) => (
  <motion.div
    initial={{ opacity: 0, y: 20 }}
    whileInView={{ opacity: 1, y: 0 }}
    viewport={{ once: true, margin: "-50px" }}
    transition={{ duration: 0.5, delay: i * 0.04 }}
    className="group relative p-6 rounded-xl border border-[var(--border)] bg-[var(--surface)]/60 hover:bg-[var(--surface)] transition overflow-hidden"
  >
    <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition pointer-events-none"
      style={{ background: "radial-gradient(circle at 50% 0%, var(--blue-glow), transparent 60%)" }} />
    <div className="absolute inset-0 rounded-xl opacity-0 group-hover:opacity-100 transition"
      style={{ boxShadow: "inset 0 0 0 1px rgba(96,165,250,0.3)" }} />

    <div className="relative">
      <div className="w-11 h-11 rounded-lg bg-[var(--elevated)] border border-[var(--border-strong)] flex items-center justify-center group-hover:border-[var(--blue-soft)] transition">
        <f.icon className="w-5 h-5 text-[var(--blue-soft)]" strokeWidth={1.8} />
      </div>
      <div className="font-display font-medium text-[17px] text-white tracking-tight mt-4">{f.t}</div>
      <p className="font-body text-[13.5px] text-[var(--text-3)] mt-1.5 leading-relaxed">{f.d}</p>

      <div className="mt-5 h-10 rounded-md border border-[var(--border)] bg-[var(--bg-secondary)]/50 p-1.5 flex items-end gap-[2px] overflow-hidden">
        {[...Array(24)].map((_, j) => (
          <div
            key={j}
            className="flex-1 rounded-[1px]"
            style={{
              height: `${15 + ((i * 7 + j * 11) % 70)}%`,
              background: j === 23 ? "var(--blue-soft)" : `rgba(96,165,250,${0.08 + (j / 30)})`,
            }}
          />
        ))}
      </div>
    </div>
  </motion.div>
);

export const WhatItDoes = () => (
  <section id="system" className="relative section-y border-t border-[var(--border)]">
    <div className="container-tight">
      <div className="flex flex-col lg:flex-row lg:items-end justify-between gap-6 mb-12">
        <div>
          <h2 className="font-display font-medium text-[clamp(30px,3.6vw,46px)] leading-[1.08] mt-5 text-white tracking-tight">
            Eight layers working in sync.
          </h2>
        </div>
        <p className="font-body text-[15px] text-[var(--text-3)] max-w-md leading-relaxed">
          Each layer handles one job. Together they form the operational membrane
          between your business and every inbound opportunity.
        </p>
      </div>

      <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-3">
        {FEATURES.map((f, i) => <FeatureCard key={i} f={f} i={i} />)}
      </div>
    </div>
  </section>
);
