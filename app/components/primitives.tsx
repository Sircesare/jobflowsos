import React from "react";

export const Tag = ({ children, tone = "blue" }: { children: React.ReactNode; tone?: string }) => (
  <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full border border-[var(--border)] bg-[var(--surface)]/60 backdrop-blur">
    <span className="w-1.5 h-1.5 rounded-full pulse-dot"
          style={{ background: tone === "gold" ? "var(--gold-bright)" : "var(--blue-soft)" }} />
    <span className="font-mono text-[10px] uppercase tracking-[0.22em] text-[var(--text-3)]">
      {children}
    </span>
  </div>
);

export const TagLight = ({ children, tone = "blue" }: { children: React.ReactNode; tone?: string }) => (
  <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full border border-[var(--border-light)] bg-white">
    <span className="w-1.5 h-1.5 rounded-full pulse-dot"
          style={{ background: tone === "gold" ? "var(--gold)" : "var(--blue)" }} />
    <span className="font-mono text-[10px] uppercase tracking-[0.22em] text-[var(--text-on-light-3)]">
      {children}
    </span>
  </div>
);

export const DemoNote = ({ className = "" }: { className?: string }) => (
  <div className={`flex items-center justify-center gap-2 mt-3 ${className}`}>
    <div className="w-1 h-1 rounded-full bg-[var(--text-4)]" />
    <span className="font-mono text-[10px] uppercase tracking-[0.2em] text-[var(--text-4)]">
      Demo interface · final setup customized per business
    </span>
  </div>
);
