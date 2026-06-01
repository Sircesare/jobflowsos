"use client";
import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import {
  Bell, MessageSquare, Target, Layers, Signal, Wifi, BatteryFull,
  Inbox, CalendarCheck, Smartphone,
} from "lucide-react";
import { DemoNote } from "./primitives";
import { SAMPLE_LEADS } from "../lib/data";

export const MobileApp = () => {
  const [screen, setScreen] = useState(0);
  useEffect(() => {
    const id = setInterval(() => setScreen((s) => (s + 1) % 3), 3500);
    return () => clearInterval(id);
  }, []);

  return (
    <section className="relative section-y border-t border-[var(--border)] overflow-hidden navy-wash">
      <div className="absolute right-0 top-1/2 -translate-y-1/2 w-[700px] h-[700px] opacity-20 pointer-events-none"
        style={{ background: "radial-gradient(circle, var(--blue-glow-2), transparent 60%)" }} />

      <div className="container-tight grid lg:grid-cols-2 gap-10 lg:gap-14 items-center relative">
        <div>
          <h2 className="font-display font-medium text-[clamp(30px,3.6vw,46px)] leading-[1.08] mt-5 text-white tracking-tight">
            Run the operation from the truck.
          </h2>
          <p className="font-body text-[15px] lg:text-[16px] text-[var(--text-2)] mt-6 leading-relaxed max-w-lg">
            The whole system in your pocket. Approve replies. Move leads. Send estimates.
            See exactly what's happening — without opening a laptop.
          </p>

          <div className="mt-7 space-y-3">
            {[
              { icon: Bell,          t: "Push notifications",  d: "Every new lead, every reply, every booking — in real time." },
              { icon: MessageSquare, t: "Reply from anywhere", d: "Two-way SMS without using your personal number." },
              { icon: Target,        t: "One-tap actions",     d: "Move stage, send estimate, mark won — with a thumb." },
            ].map((b, i) => (
              <div key={i} className="flex items-start gap-3 p-4 rounded-lg border border-[var(--border)] bg-[var(--surface)]/60">
                <div className="w-9 h-9 rounded-lg bg-[var(--elevated)] border border-[var(--border-strong)] flex items-center justify-center flex-shrink-0">
                  <b.icon className="w-4 h-4 text-[var(--blue-soft)]" strokeWidth={1.8} />
                </div>
                <div>
                  <div className="font-display font-medium text-[15px] text-white tracking-tight">{b.t}</div>
                  <div className="font-body text-[13px] text-[var(--text-3)] mt-0.5">{b.d}</div>
                </div>
              </div>
            ))}
          </div>
        </div>

        <div className="flex flex-col items-center">
          <div className="relative">
            <div className="relative w-[280px] lg:w-[300px] h-[570px] lg:h-[610px] rounded-[44px] bg-[#06070d] border-[10px] border-[#13182a] shadow-[0_30px_80px_-20px_rgba(37,99,235,0.4)]">
              <div className="absolute top-2.5 left-1/2 -translate-x-1/2 w-24 h-6 rounded-full bg-black z-10" />
              <div className="relative w-full h-full rounded-[34px] overflow-hidden bg-[var(--bg-primary)]">
                <div className="flex items-center justify-between px-6 pt-3 pb-1 text-[10px] text-white font-mono">
                  <span>9:41</span>
                  <div className="flex items-center gap-1">
                    <Signal className="w-3 h-3" />
                    <Wifi className="w-3 h-3" />
                    <BatteryFull className="w-3.5 h-3.5" />
                  </div>
                </div>
                <div className="px-5 pt-4 pb-3">
                  <div className="flex items-center justify-between">
                    <div>
                      <div className="font-display font-semibold text-[16px] text-white tracking-tight">Command</div>
                      <div className="font-mono text-[9px] uppercase tracking-[0.2em] text-[var(--text-4)] mt-0.5">
                        morning, operator
                      </div>
                    </div>
                    <div className="relative w-9 h-9 rounded-md bg-[var(--blue)] flex items-center justify-center">
                      <Layers className="w-4 h-4 text-white" strokeWidth={2.2} />
                      <div className="absolute -top-0.5 -right-0.5 w-2 h-2 rounded-full bg-[var(--gold-bright)] ring-2 ring-[var(--bg-primary)]" />
                    </div>
                  </div>
                </div>

                <div className="px-5 relative h-[440px] lg:h-[480px]">
                  <AnimatePresence mode="wait">
                    {screen === 0 && (
                      <motion.div key="p0" initial={{ opacity: 0, x: 20 }} animate={{ opacity: 1, x: 0 }} exit={{ opacity: 0, x: -20 }} transition={{ duration: 0.4 }}>
                        <div className="grid grid-cols-2 gap-2 mb-3">
                          <div className="p-2.5 rounded-lg bg-[var(--surface)] border border-[var(--border)]">
                            <div className="font-mono text-[8px] uppercase tracking-wider text-[var(--text-4)]">inbound</div>
                            <div className="font-metric font-semibold text-[22px] text-white">47</div>
                          </div>
                          <div className="p-2.5 rounded-lg bg-[var(--surface)] border border-[var(--border)]">
                            <div className="font-mono text-[8px] uppercase tracking-wider text-[var(--text-4)]">booked</div>
                            <div className="font-metric font-semibold text-[22px] text-[var(--blue-soft)]">23</div>
                          </div>
                        </div>
                        <div className="font-mono text-[9px] uppercase tracking-[0.22em] text-[var(--text-4)] mb-2">Pipeline</div>
                        <div className="space-y-1.5">
                          {SAMPLE_LEADS.slice(0, 5).map((l, i) => (
                            <div key={i} className="p-2.5 rounded-lg bg-[var(--surface)] border border-[var(--border)] flex items-center justify-between">
                              <div>
                                <div className="font-body font-semibold text-[11px] text-white">{l.name}</div>
                                <div className="font-mono text-[8px] uppercase tracking-wider text-[var(--text-4)]">{l.city} · {l.src}</div>
                              </div>
                              <div className="font-metric text-[13px] font-semibold text-[var(--blue-soft)]">${(l.value/1000).toFixed(1)}k</div>
                            </div>
                          ))}
                        </div>
                      </motion.div>
                    )}
                    {screen === 1 && (
                      <motion.div key="p1" initial={{ opacity: 0, x: 20 }} animate={{ opacity: 1, x: 0 }} exit={{ opacity: 0, x: -20 }} transition={{ duration: 0.4 }}>
                        <div className="p-3 rounded-lg border border-[var(--blue-soft)] bg-[var(--surface)] mb-3 glow-blue">
                          <div className="flex items-center justify-between">
                            <div className="font-display font-semibold text-[14px] text-white">Patricia O.</div>
                            <span className="font-metric text-[14px] font-semibold text-[var(--blue-soft)]">$22.5k</span>
                          </div>
                          <div className="font-mono text-[9px] uppercase tracking-wider text-[var(--text-4)] mt-0.5">
                            Temple City · GBP
                          </div>
                        </div>
                        <div className="font-mono text-[9px] uppercase tracking-[0.22em] text-[var(--text-4)] mb-2">Thread</div>
                        <div className="space-y-2">
                          <div className="p-2.5 rounded-lg bg-[var(--surface)] border border-[var(--border)] text-[11px] font-body text-[var(--text-2)]">
                            Need a roof inspection. Saw a leak this morning.
                          </div>
                          <div className="ml-6 p-2.5 rounded-lg bg-[var(--blue)]/15 border border-[var(--blue)]/40 text-[11px] font-body text-white">
                            Hi Patricia — sorry to hear. We can be out today at 2pm or tomorrow 9am. Which works?
                            <div className="font-mono text-[8px] text-[var(--blue-soft)] mt-1">automated reply</div>
                          </div>
                          <div className="p-2.5 rounded-lg bg-[var(--surface)] border border-[var(--border)] text-[11px] font-body text-[var(--text-2)]">
                            Today 2pm works. Address is...
                          </div>
                        </div>
                        <button className="w-full mt-3 py-2.5 rounded-lg bg-[var(--blue)] text-white font-body font-medium text-[12px]">
                          Confirm booking
                        </button>
                      </motion.div>
                    )}
                    {screen === 2 && (
                      <motion.div key="p2" initial={{ opacity: 0, x: 20 }} animate={{ opacity: 1, x: 0 }} exit={{ opacity: 0, x: -20 }} transition={{ duration: 0.4 }}>
                        <div className="font-mono text-[9px] uppercase tracking-[0.22em] text-[var(--text-4)] mb-2">This week</div>
                        <div className="space-y-1.5">
                          {[
                            { d: "Mon", a: "9 jobs",  v: "$42k" },
                            { d: "Tue", a: "7 jobs",  v: "$31k" },
                            { d: "Wed", a: "11 jobs", v: "$58k" },
                            { d: "Thu", a: "8 jobs",  v: "$38k" },
                            { d: "Fri", a: "5 jobs",  v: "$22k" },
                          ].map((d, i) => (
                            <div key={i} className="flex items-center gap-3 p-2.5 rounded-lg bg-[var(--surface)] border border-[var(--border)]">
                              <div className="w-8 h-8 rounded-md bg-[var(--elevated)] flex flex-col items-center justify-center">
                                <span className="font-display font-semibold text-[10px] text-white">{d.d}</span>
                              </div>
                              <div className="flex-1">
                                <div className="font-body font-medium text-[11px] text-white">{d.a}</div>
                                <div className="font-mono text-[9px] text-[var(--text-4)] uppercase tracking-wider">scheduled</div>
                              </div>
                              <div className="font-metric text-[13px] font-semibold text-[var(--blue-soft)]">{d.v}</div>
                            </div>
                          ))}
                        </div>
                      </motion.div>
                    )}
                  </AnimatePresence>
                </div>

                <div className="absolute bottom-3 left-5 right-5 flex justify-around p-2 rounded-2xl bg-[var(--surface)] border border-[var(--border)]">
                  {[Inbox, Layers, CalendarCheck, Smartphone].map((Icon, i) => (
                    <div key={i} className={`p-2 rounded-lg ${i === screen ? "bg-[var(--blue)]/20" : ""}`}>
                      <Icon className={`w-4 h-4 ${i === screen ? "text-[var(--blue-soft)]" : "text-[var(--text-4)]"}`} strokeWidth={1.8} />
                    </div>
                  ))}
                </div>
              </div>
            </div>
            <div className="absolute -inset-6 rounded-[60px] -z-10 opacity-50"
              style={{ background: "radial-gradient(circle, var(--blue-glow), transparent 70%)" }} />
          </div>
          <DemoNote />
        </div>
      </div>
    </section>
  );
};
