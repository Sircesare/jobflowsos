"use client";
import { motion } from "framer-motion";

export const WhyLoseRevenue = () => {
  const principles = [
    { p: "First in wins",        d: "The business that responds first usually wins the job. Speed is the most under-priced edge in local service." },
    { p: "Speed compounds",      d: "The faster you respond, the better your chance of booking — and that advantage compounds across every inbound." },
    { p: "Calls slip",           d: "Inbound calls regularly go unanswered during active job hours. Every miss is a quiet revenue leak." },
    { p: "Follow-up is the job", d: "Most service jobs require multiple touches to close. One reach-out isn't a follow-up system." },
  ];

  return (
    <section className="relative section-y border-t border-[var(--border)] warm-wash">
      <div className="container-tight">
        <div className="grid lg:grid-cols-2 gap-10 lg:gap-14 items-start">
          <div>
            <h2 className="font-display font-medium text-[clamp(30px,3.6vw,46px)] leading-[1.08] mt-5 text-white tracking-tight">
              You're not losing deals on price. You're losing them on silence.
            </h2>
            <p className="font-body text-[15px] lg:text-[16px] text-[var(--text-2)] mt-7 leading-relaxed">
              The owner-operator running ops, sales, and field work simultaneously
              cannot be the response system. Calls get missed. Texts go unanswered.
              Estimates sit unopened in a thread that's already buried.
            </p>
            <p className="font-body text-[15px] lg:text-[16px] text-[var(--text-2)] mt-4 leading-relaxed">
              The work isn't hard. It's constant. And constant doesn't belong to a
              person — it belongs to a system.
            </p>
          </div>

          <div className="grid grid-cols-2 gap-3">
            {principles.map((s, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: i * 0.1 }}
                className="p-5 lg:p-6 rounded-xl border border-[var(--border)] bg-gradient-to-br from-[var(--surface)] to-[var(--bg-secondary)] relative overflow-hidden"
              >
                <div className="absolute inset-0 opacity-30 pointer-events-none"
                  style={{ background: "radial-gradient(80% 80% at 0% 0%, var(--gold-glow), transparent 60%)" }} />
                <div className="relative">
                  <div className="font-metric font-bold text-[24px] leading-[1.05] tracking-tight" style={{ color: "var(--gold-bright)" }}>
                    {s.p}
                  </div>
                  <div className="font-body text-[13px] text-[var(--text-3)] mt-3 leading-relaxed">{s.d}</div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};
