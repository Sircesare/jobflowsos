"use client";
import { motion } from "framer-motion";
import { PhoneMissed, Hourglass, MailWarning, XCircle, EyeOff, Brain } from "lucide-react";

const PAINS = [
  { icon: PhoneMissed, t: "Missed calls",    d: "Inbound calls go unanswered during job hours and on weekends." },
  { icon: Hourglass,   t: "Slow response",   d: "Leads wait hours for a reply. By then they've called the next business." },
  { icon: MailWarning, t: "Lost estimates",  d: "Quotes get sent, then silence. No follow-up. No tracking." },
  { icon: XCircle,     t: "Weak follow-up",  d: "One text, one call, then forgotten. Most deals die in the gap." },
  { icon: EyeOff,      t: "No visibility",   d: "You can't see what's in motion, what's stalled, what's lost." },
  { icon: Brain,       t: "Owner overwhelm", d: "Running ops, sales, and follow-up alone — nothing gets full attention." },
];

export const TrustPain = () => (
  <section className="relative section-y slate-wash">
    <div className="container-tight">
      <div className="grid lg:grid-cols-[1fr,1.6fr] gap-10 lg:gap-12 mb-12">
        <div>
          <h2 className="font-display font-medium text-[clamp(30px,3.6vw,46px)] leading-[1.08] mt-5 text-white tracking-tight">
            Revenue leaks every hour you're not watching.
          </h2>
        </div>
        <div className="self-end">
          <p className="font-body text-[15px] lg:text-[16px] text-[var(--text-2)] leading-relaxed max-w-xl">
            Many local businesses lose opportunities through missed calls, delayed
            responses, and inconsistent follow-up. The problem usually isn't demand —
            it's the gap between when an opportunity arrives and when anything
            happens with it.
          </p>
        </div>
      </div>

      <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-3">
        {PAINS.map((p, i) => (
          <motion.div
            key={i}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-50px" }}
            transition={{ duration: 0.5, delay: i * 0.06 }}
            className="group p-6 rounded-xl border border-[var(--border)] bg-[var(--surface)]/50 hover:bg-[var(--surface)] hover:border-[var(--border-strong)] transition-all"
          >
            <div className="flex items-start gap-3">
              <div className="w-10 h-10 rounded-lg border border-[var(--border-strong)] bg-[var(--elevated)] flex items-center justify-center group-hover:border-[var(--blue-soft)] transition">
                <p.icon className="w-4 h-4 text-[var(--text-2)] group-hover:text-[var(--blue-soft)] transition" />
              </div>
              <div className="flex-1">
                <div className="font-display font-medium text-[17px] lg:text-[19px] text-white tracking-tight">{p.t}</div>
                <p className="font-body text-[13.5px] lg:text-[15px] text-[var(--text-3)] mt-1.5 leading-relaxed">{p.d}</p>
              </div>
            </div>
          </motion.div>
        ))}
      </div>

      <motion.div
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 0.8 }}
        className="mt-14 p-9 lg:p-12 rounded-2xl border border-[var(--border-strong)] bg-gradient-to-br from-[var(--surface)] to-[var(--bg-secondary)] relative overflow-hidden"
      >
        <div className="absolute right-0 top-0 w-[500px] h-[500px] opacity-15"
          style={{ background: "radial-gradient(circle, var(--gold-bright), transparent 60%)" }} />
        <div className="relative">
          <div className="font-mono text-[10px] uppercase tracking-[0.3em] text-[var(--gold-bright)] mb-4">
            The reframe
          </div>
          <p className="font-display font-medium text-[clamp(24px,3.2vw,40px)] leading-[1.15] text-white max-w-4xl tracking-tight">
            Most local businesses don't have a <span className="text-[var(--text-4)]">lead</span> problem.
            They have a <span style={{ color: "var(--gold-bright)" }}>systems</span> problem.
          </p>
        </div>
      </motion.div>
    </div>
  </section>
);
