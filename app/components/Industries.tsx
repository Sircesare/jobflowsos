"use client";
import { motion } from "framer-motion";
import { Home, Wrench, Droplets, Trees, Sun, Sparkles, Truck, HardHat } from "lucide-react";

const INDUSTRIES = [
  { icon: Home,      t: "Roofing",      d: "Insurance · retail · repair" },
  { icon: Wrench,    t: "HVAC",         d: "Service · install · maintenance" },
  { icon: Droplets,  t: "Plumbing",     d: "Residential · emergency" },
  { icon: Trees,     t: "Landscaping",  d: "Design · maintenance · install" },
  { icon: Sun,       t: "Solar",        d: "Residential · commercial" },
  { icon: Sparkles,  t: "Med Spas",     d: "Injectables · laser · aesthetics" },
  { icon: Truck,     t: "Junk Removal", d: "Residential · commercial" },
  { icon: HardHat,   t: "Contractors",  d: "GC · remodel · specialty" },
];

export const Industries = () => (
  <section id="industries" className="relative section-y border-t border-[var(--border)] slate-wash">
    <div className="container-tight">
      <div className="flex flex-col lg:flex-row lg:items-end justify-between gap-6 mb-10">
        <div>
          <h2 className="font-display font-medium text-[clamp(30px,3.6vw,46px)] leading-[1.08] mt-5 text-white tracking-tight">
            Operators who actually do the work.
          </h2>
        </div>
        <p className="font-body text-[15px] text-[var(--text-3)] max-w-md leading-relaxed">
          The same operational core, configured for the rhythm of each trade.
        </p>
      </div>

      <div className="grid grid-cols-2 md:grid-cols-4 gap-3">
        {INDUSTRIES.map((ind, i) => (
          <motion.div
            key={i}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-50px" }}
            transition={{ duration: 0.4, delay: i * 0.04 }}
            className="group relative p-6 rounded-xl border border-[var(--border)] bg-[var(--surface)]/60 hover:bg-[var(--surface)] hover:border-[var(--blue-soft)] transition overflow-hidden"
          >
            <div className="absolute top-0 right-0 w-24 h-24 opacity-0 group-hover:opacity-100 transition pointer-events-none"
              style={{ background: "radial-gradient(circle, var(--blue-glow), transparent 70%)" }} />
            <div className="relative">
              <ind.icon className="w-7 h-7 text-[var(--blue-soft)]" strokeWidth={1.5} />
              <div className="font-display font-medium text-[18px] text-white tracking-tight mt-5">{ind.t}</div>
              <div className="font-mono text-[10px] uppercase tracking-[0.18em] text-[var(--text-4)] mt-1.5">{ind.d}</div>
            </div>
          </motion.div>
        ))}
      </div>

      <div className="mt-10 p-6 rounded-xl border border-[var(--border)] bg-[var(--surface)]/40 text-center max-w-3xl mx-auto">
        <p className="font-body text-[15px] text-[var(--text-2)] leading-relaxed">
          If your business depends on inbound calls, estimates, appointments, or
          follow-up, this system can be configured around your workflow.
        </p>
      </div>
    </div>
  </section>
);
