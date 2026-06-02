"use client";
import { useRef } from "react";
import { motion, useInView } from "framer-motion";
import { useCounter } from "../lib/useCounter";

const Spec = ({ value, suffix, label, sub, animate = true, target }: any) => {
  const ref = useRef(null);
  // once:false => re-fires every time the card scrolls into view
  const inView = useInView(ref, { once: false, margin: "-80px" });
  const v = useCounter(animate ? (target ?? 0) : 0, inView);
  const display = animate ? Math.round(v).toLocaleString() : value;

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5 }}
      className="p-7 rounded-xl border border-[var(--border)] bg-[var(--surface)]/60 hover:border-[var(--border-strong)] transition relative overflow-hidden"
    >
      <div className="absolute top-0 right-0 w-32 h-32 opacity-20 pointer-events-none"
        style={{ background: "radial-gradient(circle, var(--blue-glow), transparent 60%)" }} />
      <div className="relative">
        <div className="font-mono text-[10px] uppercase tracking-[0.22em] text-[var(--blue-soft)]">
          {label}
        </div>
        <div className="font-metric font-semibold text-[60px] text-white leading-none mt-2 tracking-tight">
          {display}
          {suffix && <span className="text-[var(--text-3)] text-[36px]">{suffix}</span>}
        </div>
        <div className="font-body text-[13.5px] text-[var(--text-3)] mt-3 leading-relaxed">{sub}</div>
      </div>
    </motion.div>
  );
};

export const SystemSpecs = () => (
  <section className="relative section-y border-t border-[var(--border)]">
    <div className="container-tight">
      <div className="text-center mb-12">
        <h2 className="font-display font-medium text-[clamp(30px,3.6vw,46px)] leading-[1.08] mt-5 text-white tracking-tight">
          How the system runs.
        </h2>
        <p className="font-body text-[15px] text-[var(--text-3)] mt-4 max-w-xl mx-auto">
          The system is designed to reduce missed opportunities, improve follow-up
          consistency, and create pipeline visibility. These are the operational
          specs that ship with every install.
        </p>
      </div>

      <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-3">
        <Spec animate target={12}  suffix="s"   label="Automated response"   sub="Inbound replies sent in seconds, around the clock." />
        <Spec animate={false} value="24/7"        label="Always-on coverage"    sub="The system answers when you can't — nights, weekends, on the job." />
        <Spec animate target={5}   suffix="+"   label="Follow-up touches"     sub="Multi-channel sequence: SMS, email, voicemail drops." />
        <Spec animate target={8}   suffix=""    label="Pipeline stages"       sub="Every opportunity tracked from new lead to won job." />
        <Spec animate target={1}   suffix=""    label="Unified inbox"         sub="Calls, forms, DMs, and GBP routed into one operational view." />
        <Spec animate target={30}  suffix="-day" label="Install support"      sub="Tuning, adjustments, and operational help after go-live." />
      </div>
    </div>
  </section>
);
