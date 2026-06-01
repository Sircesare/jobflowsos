"use client";
import { motion } from "framer-motion";
import {
  Inbox, MessageSquare, Database, GitBranch, FileText, CalendarCheck, ThumbsUp,
} from "lucide-react";

export const CoreAutomations = () => {
  const nodes = [
    { x: 60,  y: 130, label: "Lead Source",     sub: "Call · form · DM",        icon: Inbox },
    { x: 230, y: 70,  label: "Instant SMS",     sub: "Automated reply",          icon: MessageSquare },
    { x: 230, y: 200, label: "CRM Entry",       sub: "Stage · value · source",   icon: Database },
    { x: 420, y: 130, label: "Follow-Up",       sub: "Multi-day sequence",       icon: GitBranch },
    { x: 610, y: 70,  label: "Estimate Sent",   sub: "Tracked · open · click",   icon: FileText },
    { x: 610, y: 200, label: "Booking",         sub: "Self-scheduled",           icon: CalendarCheck },
    { x: 800, y: 130, label: "Review Request",  sub: "Auto · post-job",          icon: ThumbsUp },
  ];
  const edges = [[0, 1], [0, 2], [1, 3], [2, 3], [3, 4], [3, 5], [4, 6], [5, 6]];

  return (
    <section id="automations" className="relative section-y border-t border-[var(--border)] overflow-hidden">
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[400px] opacity-20 pointer-events-none"
        style={{ background: "radial-gradient(50% 50% at 50% 50%, var(--blue-glow), transparent)" }} />

      <div className="container-narrow relative">
        <div className="text-center mb-10">
          <h2 className="font-display font-medium text-[clamp(30px,3.6vw,46px)] leading-[1.08] mt-5 text-white tracking-tight">
            The infrastructure under the hood.
          </h2>
          <p className="font-body text-[15px] text-[var(--text-3)] mt-4 max-w-xl mx-auto">
            Every inbound flows through a defined, observable workflow.
            Nothing gets missed because nothing depends on a person remembering.
          </p>
        </div>

        <div className="relative rounded-2xl border border-[var(--border-strong)] bg-[var(--surface)]/60 backdrop-blur p-6 overflow-x-auto no-scrollbar">
          <div className="min-w-[920px] relative h-[300px]">
            <svg className="absolute inset-0 w-full h-full" viewBox="0 0 920 300">
              <defs>
                <linearGradient id="edgeGrad" x1="0" x2="1">
                  <stop offset="0" stopColor="var(--blue)" stopOpacity="0.3"/>
                  <stop offset="1" stopColor="var(--blue-soft)" stopOpacity="0.9"/>
                </linearGradient>
              </defs>
              {edges.map(([a, b], i) => {
                const A = nodes[a], B = nodes[b];
                const midX = (A.x + B.x) / 2;
                const d = `M ${A.x + 50} ${A.y} C ${midX} ${A.y}, ${midX} ${B.y}, ${B.x - 50} ${B.y}`;
                return (
                  <g key={i}>
                    <path d={d} stroke="var(--border-strong)" strokeWidth="1.5" fill="none"/>
                    <path d={d} stroke="url(#edgeGrad)" strokeWidth="1.5" fill="none"
                          className="dash-flow" opacity="0.9"/>
                    <circle r="3" fill="var(--blue-soft)">
                      <animateMotion dur={`${2.5 + i * 0.3}s`} repeatCount="indefinite" path={d}/>
                    </circle>
                  </g>
                );
              })}
            </svg>

            {nodes.map((n, i) => {
              const Icon = n.icon;
              return (
                <motion.div
                  key={i}
                  initial={{ opacity: 0, scale: 0.85 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: i * 0.08 }}
                  className="absolute"
                  style={{ left: n.x, top: n.y, transform: "translate(-50%, -50%)" }}
                >
                  <div className="relative w-[120px] rounded-lg border border-[var(--border-strong)] bg-[var(--elevated)] px-3 py-2.5 hover:border-[var(--blue-soft)] transition glow-card">
                    <div className="flex items-center gap-2">
                      <div className="w-7 h-7 rounded-md flex items-center justify-center flex-shrink-0 bg-[var(--blue)]/15 border border-[var(--blue)]/30">
                        <Icon className="w-3.5 h-3.5 text-[var(--blue-soft)]" strokeWidth={1.8}/>
                      </div>
                      <div className="min-w-0">
                        <div className="font-body font-semibold text-[11px] text-white truncate">{n.label}</div>
                        <div className="font-mono text-[8.5px] uppercase tracking-wider text-[var(--text-4)] truncate">{n.sub}</div>
                      </div>
                    </div>
                  </div>
                </motion.div>
              );
            })}
          </div>
        </div>

        <div className="grid sm:grid-cols-3 gap-3 mt-4">
          {[
            { l: "Defined",    d: "Every path is mapped. Nothing is improvised." },
            { l: "Observable", d: "Every step logged, timestamped, attributable." },
            { l: "Adjustable", d: "Any node can be paused, replayed, or rerouted." },
          ].map((x, i) => (
            <div key={i} className="p-4 rounded-xl border border-[var(--border)] bg-[var(--surface)]/60">
              <div className="font-mono text-[10px] lg:text-[12px] uppercase tracking-[0.22em] text-[var(--blue-soft)]">{x.l}</div>
              <div className="font-body text-[13px] lg:text-[15px] text-[var(--text-3)] mt-1.5">{x.d}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
