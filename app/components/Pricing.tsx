import { CheckCircle2, ArrowRight, ChevronRight } from "lucide-react";
import { BOOKING_URL } from "../lib/photos";

export const Pricing = () => {
  const items = [
    "CRM pipeline setup",
    "Missed call text-back",
    "Instant lead response",
    "Follow-up automation",
    "Review request automation",
    "Basic lead source tracking",
    "Mobile app setup",
    "30-day install support",
  ];

  return (
    <section id="pricing" className="relative section-y border-t border-[var(--border)] warm-wash">
      <div className="container-tight">
        <div className="text-center mb-10">
          <h2 className="font-display font-medium text-[clamp(30px,3.6vw,46px)] leading-[1.08] mt-5 text-white tracking-tight">
            One install. Everything running.
          </h2>
          <p className="font-body text-[15px] text-[var(--text-3)] mt-4 max-w-xl mx-auto">
            This is an install service — a one-time setup that configures the full
            operational system inside your business. Not custom software, not a SaaS subscription.
          </p>
        </div>

        <div className="grid lg:grid-cols-[1.4fr,1fr] gap-4 max-w-5xl mx-auto">
          <div className="relative p-8 lg:p-10 rounded-2xl border-2 bg-gradient-to-br from-[var(--surface)] via-[var(--bg-secondary)] to-[var(--bg-primary)] overflow-hidden glow-card"
               style={{ borderColor: "var(--blue)" }}>
            <div className="absolute -top-20 -right-20 w-72 h-72 opacity-30 pointer-events-none"
              style={{ background: "radial-gradient(circle, var(--blue-soft), transparent 60%)" }} />
            <div className="relative">
              <div className="flex flex-wrap items-center gap-2 mb-2">
                <span className="px-2.5 py-1 rounded-md border font-mono text-[9px] uppercase tracking-[0.22em]"
                      style={{
                        background: "rgba(37,99,235,0.12)",
                        borderColor: "var(--blue)",
                        color: "var(--blue-soft)"
                      }}>
                  Standard Pricing
                </span>
              </div>
              <div className="font-display font-semibold text-[26px] text-white tracking-tight mt-2">
                Starter Revenue System
              </div>
              <p className="font-body text-[14px] text-[var(--text-3)] mt-2 max-w-md">
                The full operational stack installed and live in your business within 7 days.
              </p>

              <div className="mt-6">
                {/* Active Regular Pricing Card */}
                <div className="relative p-5 rounded-xl border-2 overflow-hidden"
                     style={{
                       borderColor: "var(--blue)",
                       background: "linear-gradient(135deg, rgba(37,99,235,0.10) 0%, rgba(37,99,235,0.02) 100%)"
                     }}>
                  <div className="absolute top-0 left-0 right-0 h-[2px]"
                       style={{ background: "linear-gradient(90deg, transparent, var(--blue-soft), transparent)" }} />
                  <div className="font-mono text-[9px] uppercase tracking-[0.22em] mb-3"
                       style={{ color: "var(--blue-soft)" }}>
                    Current Pricing
                  </div>
                  <div className="flex items-baseline gap-2">
                    <span className="font-metric font-bold text-[56px] lg:text-[64px] text-white leading-none tracking-tight">$2,400</span>
                  </div>
                  <div className="font-mono text-[10px] uppercase tracking-[0.18em] text-[var(--text-3)] mt-1.5">
                    one-time install
                  </div>
                  <div className="flex items-baseline gap-2 mt-4 pt-4 border-t border-dashed"
                       style={{ borderColor: "rgba(37,99,235,0.25)" }}>
                    <span className="font-metric font-bold text-[28px] lg:text-[32px] text-white leading-none tracking-tight">
                      + $675<span className="text-[16px] text-[var(--text-3)] font-medium">/mo</span>
                    </span>
                  </div>
                  <div className="font-mono text-[10px] uppercase tracking-[0.18em] text-[var(--text-3)] mt-1.5">
                    infrastructure & support
                  </div>
                </div>
              </div>

              <div className="font-body text-[13px] text-[var(--text-3)] mt-5">
                One recovered install opportunity can pay for the entire system.
              </div>

              <div className="grid sm:grid-cols-2 gap-x-6 gap-y-2.5 mt-7">
                {items.map((it, i) => (
                  <div key={i} className="flex items-start gap-2">
                    <CheckCircle2 className="w-4 h-4 flex-shrink-0 mt-0.5" style={{ color: "var(--blue-soft)" }} />
                    <span className="font-body text-[13px] text-[var(--text-1)]">{it}</span>
                  </div>
                ))}
              </div>

              <a href={BOOKING_URL} target="_blank" rel="noopener noreferrer"
                 className="group mt-8 inline-flex items-center gap-2 font-body font-medium text-[14px] text-white bg-[var(--blue)] hover:bg-[var(--blue-hover)] px-5 py-3.5 rounded-lg transition-all hover:shadow-[0_0_30px_-5px_var(--blue-glow-2)]">
                Book a Demo
                <ArrowRight className="w-4 h-4 group-hover:translate-x-0.5 transition" />
              </a>
            </div>
          </div>

          <div className="space-y-4">
            <div className="p-6 rounded-2xl border border-[var(--border-strong)] bg-[var(--surface)]/60">
              <div className="font-mono text-[10px] lg:text-[12px] uppercase tracking-[0.22em] text-[var(--blue-soft)]">$675/month covers</div>
              <div className="font-display font-medium text-[18px] lg:text-[20px] text-white tracking-tight mt-2">Infrastructure & support</div>
              <p className="font-body text-[13px] text-[var(--text-3)] mt-2 leading-relaxed">
                System access, workflow maintenance, SMS infrastructure, AI follow-up support,
                ongoing updates, and operational monitoring. Not a software subscription — it's
                the team and infrastructure keeping the system running.
              </p>
            </div>
            <div className="p-6 rounded-2xl border border-[var(--border)] bg-[var(--surface)]/60">
              <div className="font-mono text-[10px] lg:text-[12px] uppercase tracking-[0.22em] text-[var(--text-4)]">Not sure yet?</div>
              <div className="font-display font-medium text-[18px] lg:text-[20px] text-white tracking-tight mt-2">See what's included</div>
              <p className="font-body text-[13px] text-[var(--text-3)] mt-2 leading-relaxed">
                A 15-minute demo walks you through the system and how it would
                configure around your specific business.
              </p>
              <a href={BOOKING_URL} target="_blank" rel="noopener noreferrer"
                 className="mt-4 inline-flex items-center gap-1.5 font-body text-[13px] text-[var(--blue-soft)] hover:text-[var(--blue-hover)] transition">
                Book a Demo <ChevronRight className="w-4 h-4" />
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
