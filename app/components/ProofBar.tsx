import { Workflow, PhoneMissed, Layers, HardHat } from "lucide-react";

export const ProofBar = () => {
  const points = [
    { icon: Workflow, t: "7-day install", d: "From kickoff to go-live" },
    { icon: PhoneMissed, t: "Missed call recovery", d: "Built into the system" },
    { icon: Layers, t: "CRM + pipeline included", d: "No extra subscription" },
    { icon: HardHat, t: "Built for operators", d: "Contractors & local services" },
  ];
  return (
    <section className="relative border-y border-[var(--border)] bg-[var(--bg-secondary)]/30 py-8">
      <div className="container-tight">
        <div className="flex flex-col md:flex-row items-center justify-between gap-6">
          <div className="font-mono text-[10px] lg:text-[12px] uppercase tracking-[0.25em] text-[var(--text-3)] flex items-center gap-2">
            <span className="w-1.5 h-1.5 rounded-full bg-[var(--blue-soft)] pulse-dot" />
            Built for owner-operated local service businesses
          </div>
          <div className="flex items-center gap-x-8 gap-y-4 flex-wrap justify-center">
            {points.map((p, i) => (
              <div key={i} className="flex items-center gap-2.5">
                <div className="w-7 h-7 rounded-md border border-[var(--border-strong)] bg-[var(--surface)]/60 flex items-center justify-center">
                  <p.icon className="w-3.5 h-3.5 text-[var(--blue-soft)]" strokeWidth={1.8} />
                </div>
                <div className="leading-tight">
                  <div className="font-body font-medium text-[12.5px] lg:text-[15px] text-white">{p.t}</div>
                  <div className="font-mono text-[9px] lg:text-[11px] uppercase tracking-[0.18em] text-[var(--text-4)] mt-0.5">{p.d}</div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};
