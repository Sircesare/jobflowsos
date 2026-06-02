"use client";
import React from "react";
import { motion } from "framer-motion";
import { Inbox, Workflow, TrendingUp, ArrowRight } from "lucide-react";

export const HowItWorks = () => {
  const steps = [
    { n: "01", t: "Leads come in",         d: "Calls, forms, DMs, GBP messages, referrals — routed into one inbox.", icon: Inbox },
    { n: "02", t: "Automation responds",   d: "SMS in seconds. Pipeline entry. Follow-up sequence. Booking link.", icon: Workflow },
    { n: "03", t: "More jobs get booked",  d: "Faster responses, consistent follow-up, and a tracked pipeline — turning more opportunities into booked appointments with less manual work.", icon: TrendingUp },
  ];

  return (
    <section className="relative section-y border-t border-[var(--border)] navy-wash">
      <div className="container-narrow">
        <div className="text-center mb-12">
          <h2 className="font-display font-medium text-[clamp(30px,3.6vw,46px)] leading-[1.08] mt-5 text-white tracking-tight">
            Three stages. One outcome.
          </h2>
        </div>

        <div className="grid md:grid-cols-3 gap-4 relative">
          <div className="hidden md:block absolute top-12 left-[16.6%] right-[16.6%] h-px">
            <svg className="w-full h-px overflow-visible">
              <line x1="0" y1="0.5" x2="100%" y2="0.5" stroke="var(--border-strong)" strokeWidth="1" />
              <line x1="0" y1="0.5" x2="100%" y2="0.5" stroke="var(--blue-soft)" strokeWidth="1"
                    className="dash-flow" opacity="0.8" />
            </svg>
          </div>

          {steps.map((s, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-80px" }}
              transition={{ duration: 0.6, delay: i * 0.15 }}
              className="relative"
            >
              <div className="flex justify-center">
                <div className="relative w-24 h-24 rounded-2xl bg-[var(--surface)] border border-[var(--border-strong)] flex items-center justify-center z-10 glow-card">
                  <s.icon className="w-8 h-8 text-[var(--blue-soft)]" strokeWidth={1.6} />
                  <div className="absolute -top-2 -right-2 px-2 py-0.5 rounded-md bg-[var(--bg-primary)] border border-[var(--blue)] font-mono text-[10px] text-[var(--blue-soft)]">
                    {s.n}
                  </div>
                </div>
              </div>
              <div className="text-center mt-6 px-4">
                <div className="font-display font-medium text-[20px] lg:text-[22px] text-white tracking-tight">{s.t}</div>
                <p className="font-body text-[14px] lg:text-[16px] text-[var(--text-3)] mt-2 leading-relaxed">{s.d}</p>
              </div>
            </motion.div>
          ))}
        </div>

        <div className="text-center mt-12">
          <a href="/demo"
             className="group inline-flex items-center gap-2 font-body font-medium text-[14px] text-white bg-[var(--blue)] hover:bg-[var(--blue-hover)] px-5 py-3.5 rounded-lg transition-all hover:shadow-[0_0_30px_-5px_var(--blue-glow-2)]">
            See it handle a real call
            <ArrowRight className="w-4 h-4 group-hover:translate-x-0.5 transition" />
          </a>
        </div>
      </div>
    </section>
  );
};
