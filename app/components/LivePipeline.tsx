"use client";
import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Signal, Activity, Clock } from "lucide-react";
import { DemoNote } from "./primitives";
import { SAMPLE_LEADS, STAGES } from "../lib/data";

export const LivePipeline = () => {
  const [tick, setTick] = useState(0);
  useEffect(() => {
    const id = setInterval(() => setTick((t) => t + 1), 3200);
    return () => clearInterval(id);
  }, []);

  const distribution = STAGES.map((_, sIdx) =>
    SAMPLE_LEADS.filter((_, lIdx) => ((lIdx + tick) % STAGES.length) === sIdx)
  );

  return (
    <section id="pipeline" className="relative section-y border-t border-[var(--border)]">
      <div className="container-tight">
        <div className="flex flex-col lg:flex-row lg:items-end justify-between gap-6 mb-8">
          <div>
            <h2 className="font-display font-medium text-[clamp(30px,3.6vw,46px)] leading-[1.08] mt-5 text-white tracking-tight">
              One command center.
            </h2>
          </div>
          <p className="font-body text-[15px] text-[var(--text-3)] max-w-md leading-relaxed">
            Every inbound, every estimate, every scheduled job — visible at a glance.
            Built so an owner can run the entire operation from a phone.
          </p>
        </div>

        <div className="max-w-6xl mx-auto rounded-2xl border border-[var(--border-strong)] bg-[var(--surface)] overflow-hidden glow-card">
          <div className="flex items-center justify-between px-5 py-3 border-b border-[var(--border)] bg-[var(--elevated)]/60">
            <div className="flex items-center gap-3">
              <div className="flex gap-1.5">
                <div className="w-2.5 h-2.5 rounded-full bg-[var(--border-strong)]" />
                <div className="w-2.5 h-2.5 rounded-full bg-[var(--border-strong)]" />
                <div className="w-2.5 h-2.5 rounded-full bg-[var(--success)]" />
              </div>
              <div className="font-mono text-[10px] uppercase tracking-[0.22em] text-[var(--text-3)]">
                command / pipeline
              </div>
            </div>
            <div className="hidden sm:flex items-center gap-2">
              <span className="w-1.5 h-1.5 rounded-full bg-[var(--gold-bright)] pulse-dot" />
              <span className="font-mono text-[10px] uppercase tracking-[0.22em] text-[var(--gold-soft)]">demo mode</span>
            </div>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-4 border-b border-[var(--border)]">
            {[
              { l: "Pipeline value",  v: "$116k",  sub: "8 active leads" },
              { l: "Response time",   v: "~12s",   sub: "automated" },
              { l: "Stages tracked",  v: "5",      sub: "configurable" },
              { l: "Touchpoints",     v: "5+",     sub: "per sequence" },
            ].map((m, i) => (
              <div key={i} className={`p-5 ${i < 3 ? "md:border-r" : ""} ${i % 2 === 0 ? "border-r" : ""} ${i < 2 ? "border-b md:border-b-0" : ""} border-[var(--border)]`}>
                <div className="font-mono text-[9px] uppercase tracking-[0.25em] text-[var(--text-4)]">{m.l}</div>
                <div className="flex items-baseline gap-2 mt-2">
                  <span className="font-metric font-semibold text-[32px] text-white leading-none">{m.v}</span>
                </div>
                <div className="font-mono text-[10px] text-[var(--text-3)] mt-1">{m.sub}</div>
              </div>
            ))}
          </div>

          <div className="p-4 overflow-x-auto no-scrollbar bg-[var(--bg-secondary)]/30">
            <div className="grid grid-cols-5 gap-3 min-w-[820px]">
              {STAGES.map((stage, sIdx) => (
                <div key={stage.id}>
                  <div className="flex items-center justify-between mb-3 px-1">
                    <div className="flex items-center gap-2">
                      <span className="w-1.5 h-1.5 rounded-full" style={{ background: stage.color }} />
                      <span className="font-mono text-[10px] uppercase tracking-[0.2em] text-[var(--text-2)]">
                        {stage.label}
                      </span>
                    </div>
                    <span className="font-metric font-semibold text-[14px] text-[var(--text-3)]">{distribution[sIdx].length}</span>
                  </div>
                  <div className="space-y-2 min-h-[180px]">
                    <AnimatePresence>
                      {distribution[sIdx].map((lead) => (
                        <motion.div
                          key={`${stage.id}-${lead.name}`}
                          layout
                          initial={{ opacity: 0, scale: 0.95 }}
                          animate={{ opacity: 1, scale: 1 }}
                          exit={{ opacity: 0, scale: 0.95 }}
                          transition={{ duration: 0.4 }}
                          className="p-3 rounded-lg border border-[var(--border)] bg-[var(--elevated)] hover:border-[var(--blue-soft)] transition cursor-pointer"
                        >
                          <div className="flex items-center justify-between mb-1.5">
                            <span className="font-body font-semibold text-[12px] text-white">{lead.name}</span>
                            <span className="font-metric text-[13px] font-semibold text-[var(--blue-soft)]">
                              ${(lead.value / 1000).toFixed(1)}k
                            </span>
                          </div>
                          <div className="flex items-center justify-between">
                            <span className="font-mono text-[9px] uppercase tracking-wider text-[var(--text-4)]">{lead.city}</span>
                            <span className="font-mono text-[9px] text-[var(--text-3)]">{lead.src}</span>
                          </div>
                        </motion.div>
                      ))}
                    </AnimatePresence>
                  </div>
                </div>
              ))}
            </div>
          </div>

          <div className="border-t border-[var(--border)] px-5 py-3 flex flex-wrap items-center justify-between gap-3 bg-[var(--elevated)]/60">
            <div className="flex items-center gap-4 font-mono text-[10px] uppercase tracking-[0.22em] text-[var(--text-3)]">
              <div className="flex items-center gap-1.5">
                <Signal className="w-3 h-3 text-[var(--success)]" />
                Webhook · OK
              </div>
              <div className="flex items-center gap-1.5">
                <Activity className="w-3 h-3 text-[var(--blue-soft)]" />
                Auto-cycling
              </div>
              <div className="hidden sm:flex items-center gap-1.5">
                <Clock className="w-3 h-3 text-[var(--text-2)]" />
                Configurable stages
              </div>
            </div>
            <div className="font-mono text-[10px] uppercase tracking-[0.22em] text-[var(--text-4)]">
              illustrative data
            </div>
          </div>
        </div>

        <DemoNote />
      </div>
    </section>
  );
};
