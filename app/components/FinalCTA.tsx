import { ArrowRight, ChevronRight } from "lucide-react";
import { BOOKING_URL } from "../lib/photos";

export const FinalCTA = () => (
  <section id="cta" className="relative py-28 lg:py-32 border-t border-[var(--border)] overflow-hidden">
    <div className="absolute inset-0 dot-grid opacity-40" />
    <div className="absolute inset-0 pointer-events-none">
      <div className="absolute inset-0 opacity-40"
        style={{ background: "radial-gradient(ellipse at 50% 50%, var(--blue-glow-2), transparent 60%)" }} />
      <div className="absolute inset-x-0 top-0 h-px hairline-h" />
      <div className="absolute inset-x-0 bottom-0 h-px hairline-h" />
    </div>

    <div className="relative container-narrow text-center">
      <h2 className="font-display font-medium text-[clamp(36px,5.5vw,72px)] leading-[1.04] text-white mt-7 tracking-tight">
        Your business needs <span style={{ color: "var(--blue-soft)" }}>systems</span> —
        <br />not more chaos.
      </h2>
      <p className="font-body text-[16px] lg:text-[17px] text-[var(--text-2)] mt-7 max-w-2xl mx-auto leading-relaxed">
        Stop being the response system. Stop being the follow-up system.
        Stop being the part of the business that breaks when you take a day off.
      </p>

      <div className="flex flex-wrap items-center justify-center gap-3 mt-9">
        <a href={BOOKING_URL} target="_blank" rel="noopener noreferrer"
           className="group inline-flex items-center gap-2 font-body font-medium text-[15px] text-white bg-[var(--blue)] hover:bg-[var(--blue-hover)] px-6 py-4 rounded-lg transition-all hover:shadow-[0_0_40px_-5px_var(--blue-glow-2)]">
          Book a Demo
          <ArrowRight className="w-4 h-4 group-hover:translate-x-0.5 transition" />
        </a>
        <a href="#pricing"
           className="inline-flex items-center gap-2 font-body font-medium text-[14px] text-white border border-[var(--border-strong)] bg-[var(--surface)]/60 backdrop-blur px-5 py-3.5 rounded-lg hover:border-[var(--blue-soft)] transition">
          See What's Included
          <ChevronRight className="w-4 h-4" />
        </a>
      </div>

      <div className="flex flex-wrap items-center justify-center gap-x-8 gap-y-3 mt-10 text-[var(--text-3)] font-mono text-[10px] uppercase tracking-[0.22em]">
        <div>7-day install</div>
        <div className="w-1 h-1 rounded-full bg-[var(--border-strong)]" />
        <div>No long contracts</div>
        <div className="w-1 h-1 rounded-full bg-[var(--border-strong)]" />
        <div>Operator-owned</div>
      </div>
    </div>
  </section>
);
