"use client";
import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import {
  Phone, MessageSquare, Star, PhoneMissed, CalendarCheck, FileText,
  Play, Pause, Zap, ArrowRight, ChevronRight, CheckCircle2,
} from "lucide-react";
import { DemoNote } from "./primitives";
import { BOOKING_URL } from "../lib/photos";

const HERO_EVENTS = [
  { icon: Phone, color: "var(--blue-soft)", label: "Inbound call captured", meta: "Roofing inquiry · routed", time: "now" },
  { icon: MessageSquare, color: "var(--blue-soft)", label: "Auto-reply sent", meta: "Response in seconds", time: "5s" },
  { icon: PhoneMissed, color: "var(--warning)", label: "Missed call recovered", meta: "SMS text-back triggered", time: "22s" },
  { icon: CalendarCheck, color: "var(--success)", label: "Estimate booked", meta: "Scheduled in pipeline", time: "1m" },
  { icon: Star, color: "var(--gold-bright)", label: "Review request sent", meta: "Post-job automation", time: "3m" },
  { icon: FileText, color: "var(--info)", label: "Follow-up sent", meta: "Sequence active", time: "5m" },
];

const Sparkline = () => {
  const points = [22, 28, 24, 36, 32, 44, 38, 52, 48, 58, 54, 68, 62, 74];
  const max = Math.max(...points);
  const w = 200, h = 44;
  const path = points
    .map((p, i) => `${i === 0 ? "M" : "L"} ${(i / (points.length - 1)) * w} ${h - (p / max) * h}`)
    .join(" ");
  const area = `${path} L ${w} ${h} L 0 ${h} Z`;
  return (
    <svg width={w} height={h} className="overflow-visible">
      <defs>
        <linearGradient id="sparkFill" x1="0" x2="0" y1="0" y2="1">
          <stop offset="0" stopColor="var(--blue-soft)" stopOpacity="0.3"/>
          <stop offset="1" stopColor="var(--blue-soft)" stopOpacity="0"/>
        </linearGradient>
      </defs>
      <path d={area} fill="url(#sparkFill)" />
      <path d={path} fill="none" stroke="var(--blue-soft)" strokeWidth="1.5" strokeLinecap="round" />
      <circle cx={w} cy={h - (points[points.length - 1] / max) * h} r="3" fill="var(--blue-soft)" />
      <circle cx={w} cy={h - (points[points.length - 1] / max) * h} r="6" fill="var(--blue-soft)" opacity="0.3" className="pulse-dot" />
    </svg>
  );
};

const HeroDashboard = ({ feed, paused, setPaused }: any) => (
  <div className="relative rounded-xl border border-[var(--border-strong)] bg-[var(--surface)] glow-hero-dashboard overflow-hidden">
    <div className="flex items-center justify-between px-4 py-3 border-b border-[var(--border)] bg-[var(--elevated)]/60">
      <div className="flex items-center gap-3">
        <div className="flex gap-1.5">
          <div className="w-2.5 h-2.5 rounded-full bg-[var(--border-strong)]" />
          <div className="w-2.5 h-2.5 rounded-full bg-[var(--border-strong)]" />
          <div className="w-2.5 h-2.5 rounded-full bg-[var(--success)]" />
        </div>
        <div className="font-mono text-[10px] uppercase tracking-[0.2em] text-[var(--text-3)]">
          command · pipeline
        </div>
      </div>
      <div className="flex items-center gap-2">
        <span className="flex items-center gap-1.5">
          <span className="w-1.5 h-1.5 rounded-full bg-[var(--gold-bright)] pulse-dot" />
          <span className="font-mono text-[9px] uppercase tracking-[0.2em] text-[var(--gold-soft)]">demo</span>
        </span>
        <button
          onClick={() => setPaused((p: boolean) => !p)}
          className="text-[var(--text-3)] hover:text-white transition"
          aria-label={paused ? "Resume demo" : "Pause demo"}
        >
          {paused ? <Play className="w-3 h-3" /> : <Pause className="w-3 h-3" />}
        </button>
      </div>
    </div>

    <div className="grid lg:grid-cols-[1.3fr,1fr]">
      <div className="border-b lg:border-b-0 lg:border-r border-[var(--border)]">
        <div className="grid grid-cols-3 border-b border-[var(--border)]">
          {[
            { l: "Inbound today",  v: "47", d: "live" },
            { l: "Avg response",   v: "11", u: "s", d: "automated" },
            { l: "Booked / wk",    v: "23", d: "tracked" },
          ].map((m, i) => (
            <div key={i} className={`p-4 ${i < 2 ? "border-r border-[var(--border)]" : ""}`}>
              <div className="font-mono text-[9px] uppercase tracking-[0.2em] text-[var(--text-4)]">{m.l}</div>
              <div className="flex items-baseline gap-1 mt-1">
                <span className="font-metric font-semibold text-[26px] text-white leading-none">{m.v}</span>
                {m.u && <span className="font-metric text-[14px] text-[var(--text-3)]">{m.u}</span>}
              </div>
              <div className="font-mono text-[10px] text-[var(--text-3)] mt-1">{m.d}</div>
            </div>
          ))}
        </div>

        <div className="px-4 py-3 border-b border-[var(--border)] flex items-center justify-between">
          <div>
            <div className="font-mono text-[9px] uppercase tracking-[0.22em] text-[var(--text-4)]">Lead flow · 14d</div>
            <div className="font-metric font-semibold text-[18px] text-white mt-0.5 leading-none">Trending up</div>
          </div>
          <Sparkline />
        </div>

        <div className="p-4 bg-[var(--bg-secondary)]/40">
          <div className="flex items-center justify-between mb-2">
            <div className="font-mono text-[10px] uppercase tracking-[0.22em] text-[var(--text-4)]">
              Pipeline view
            </div>
            <div className="font-mono text-[10px] text-[var(--text-3)]">5 stages</div>
          </div>
          <div className="grid grid-cols-5 gap-2">
            {[
              { l: "New",   v: 8,  c: "var(--blue-soft)" },
              { l: "Qual",  v: 14, c: "var(--info)" },
              { l: "Est",   v: 6,  c: "var(--blue)" },
              { l: "Sched", v: 11, c: "var(--warning)" },
              { l: "Won",   v: 8,  c: "var(--success)" },
            ].map((s, i) => (
              <div key={i}>
                <div className="h-1 rounded-full bg-[var(--bg-primary)] overflow-hidden">
                  <motion.div
                    initial={{ width: 0 }}
                    animate={{ width: `${s.v * 7}%` }}
                    transition={{ duration: 1.1, delay: 0.3 + i * 0.08, ease: "easeOut" }}
                    className="h-full"
                    style={{ background: s.c }}
                  />
                </div>
                <div className="font-mono text-[9px] text-[var(--text-4)] uppercase mt-1.5">{s.l}</div>
                <div className="font-metric text-[16px] font-semibold text-white leading-none mt-0.5">{s.v}</div>
              </div>
            ))}
          </div>
        </div>
      </div>

      <div className="p-3">
        <div className="flex items-center justify-between mb-2 px-1">
          <div className="font-mono text-[10px] uppercase tracking-[0.22em] text-[var(--text-4)]">
            Activity stream
          </div>
          <div className="flex items-center gap-1.5">
            <span className="w-1.5 h-1.5 rounded-full bg-[var(--success)] pulse-dot" />
            <span className="font-mono text-[10px] text-[var(--text-3)]">streaming</span>
          </div>
        </div>
        <div className="space-y-2 h-[260px] overflow-hidden">
          <AnimatePresence initial={false}>
            {feed.map((idx: number, pos: number) => {
              const ev = HERO_EVENTS[idx];
              const Icon = ev.icon;
              return (
                <motion.div
                  key={`${idx}-${pos}`}
                  layout
                  initial={{ opacity: 0, y: -10, scale: 0.98 }}
                  animate={{ opacity: 1 - pos * 0.28, y: 0, scale: 1 }}
                  exit={{ opacity: 0 }}
                  transition={{ duration: 0.5 }}
                  className="flex items-center gap-3 p-2.5 rounded-lg border border-[var(--border)] bg-[var(--elevated)]/70"
                >
                  <div className="w-8 h-8 rounded-md flex items-center justify-center flex-shrink-0"
                    style={{ background: `color-mix(in srgb, ${ev.color} 15%, transparent)`, border: `1px solid color-mix(in srgb, ${ev.color} 30%, transparent)` }}>
                    <Icon className="w-3.5 h-3.5" style={{ color: ev.color }} />
                  </div>
                  <div className="flex-1 min-w-0">
                    <div className="font-body font-medium text-[12.5px] text-white truncate">{ev.label}</div>
                    <div className="font-mono text-[10px] text-[var(--text-4)] uppercase tracking-wider truncate">
                      {ev.meta}
                    </div>
                  </div>
                  <div className="font-mono text-[10px] text-[var(--text-4)]">{ev.time}</div>
                </motion.div>
              );
            })}
          </AnimatePresence>
        </div>
      </div>
    </div>
  </div>
);

export const Hero = () => {
  const [feed, setFeed] = useState([0, 1, 2]);
  const [paused, setPaused] = useState(false);

  useEffect(() => {
    if (paused) return;
    const id = setInterval(() => {
      setFeed((prev) => {
        const next = (prev[0] + 1) % HERO_EVENTS.length;
        return [next, prev[0], prev[1]];
      });
    }, 2400);
    return () => clearInterval(id);
  }, [paused]);

  return (
    <section id="top" className="relative pt-32 pb-16 lg:pt-36 lg:pb-20 overflow-hidden navy-wash grain">
      <div className="absolute inset-0 dot-grid opacity-50" />
      <div className="absolute inset-x-0 bottom-0 h-px hairline-h" />

      <div className="absolute -top-40 -left-40 w-[600px] h-[600px] rounded-full opacity-30 pointer-events-none"
        style={{ background: "radial-gradient(circle, var(--blue-glow), transparent 70%)" }} />
      <div className="absolute -top-40 -right-40 w-[600px] h-[600px] rounded-full opacity-20 pointer-events-none"
        style={{ background: "radial-gradient(circle, var(--gold-glow), transparent 70%)" }} />

      <div className="relative container-tight">
        <div className="text-center max-w-4xl mx-auto">
          <h1 className="font-display font-medium text-[clamp(38px,6vw,76px)] leading-[1.04] mt-6 text-white tracking-tight">
            Operational revenue infrastructure
            <br />
            for{" "}
            <span className="relative inline-block">
              local operators
              <svg className="absolute -bottom-2 left-0 w-full" height="6" viewBox="0 0 300 6" preserveAspectRatio="none">
                <path d="M0 3 Q 75 0, 150 3 T 300 3" stroke="var(--blue)" strokeWidth="2" fill="none" />
              </svg>
            </span>
            .
          </h1>

          <p className="font-body text-[16px] lg:text-[18px] leading-[1.6] text-[var(--text-2)] mt-7 max-w-2xl mx-auto">
            We install automated systems that help local service businesses capture
            inbound leads, respond faster, recover missed calls, automate follow-up,
            and manage opportunities in one pipeline.
          </p>

          <div className="flex flex-wrap items-center justify-center gap-3 mt-9">
            <a href={BOOKING_URL} target="_blank" rel="noopener noreferrer"
               className="group inline-flex items-center gap-2 font-body font-medium text-[14px] text-white bg-[var(--blue)] hover:bg-[var(--blue-hover)] px-5 py-3.5 rounded-lg transition-all hover:shadow-[0_0_30px_-5px_var(--blue-glow-2)]">
              Book a Demo
              <ArrowRight className="w-4 h-4 group-hover:translate-x-0.5 transition" />
            </a>
            <a href="#pricing"
               className="inline-flex items-center gap-2 font-body font-medium text-[14px] text-white border border-[var(--border-strong)] bg-[var(--surface)]/60 backdrop-blur px-5 py-3.5 rounded-lg hover:border-[var(--blue-soft)] transition">
              See What's Included
              <ChevronRight className="w-4 h-4" />
            </a>
          </div>

          <div className="flex flex-wrap items-center justify-center gap-x-6 gap-y-3 mt-8 text-[var(--text-3)] font-mono text-[10px] uppercase tracking-[0.2em]">
            <div className="flex items-center gap-1.5">
              <CheckCircle2 className="w-3.5 h-3.5 text-[var(--blue-soft)]" />
              7-day install
            </div>
            <div className="flex items-center gap-1.5">
              <CheckCircle2 className="w-3.5 h-3.5 text-[var(--blue-soft)]" />
              No long contracts
            </div>
            <div className="flex items-center gap-1.5">
              <CheckCircle2 className="w-3.5 h-3.5 text-[var(--blue-soft)]" />
              Built for operators
            </div>
          </div>
        </div>

        <div className="relative mt-14 lg:mt-20 max-w-6xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.9, delay: 0.2 }}
          >
            <HeroDashboard feed={feed} paused={paused} setPaused={setPaused} />
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: -30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.8, duration: 0.7 }}
            className="absolute -left-4 lg:-left-16 top-[35%] hidden md:block z-10"
          >
            <div className="rounded-xl border border-[var(--border-strong)] bg-[var(--surface)]/95 backdrop-blur-xl p-3 w-[220px] glow-card">
              <div className="flex items-center gap-2 mb-2">
                <div className="w-5 h-5 rounded-md bg-[var(--blue)]/15 border border-[var(--blue)]/30 flex items-center justify-center">
                  <Zap className="w-3 h-3 text-[var(--blue-soft)]" />
                </div>
                <span className="font-mono text-[9px] uppercase tracking-[0.22em] text-[var(--text-3)]">
                  Auto-response
                </span>
              </div>
              <div className="font-body text-[12px] text-white leading-snug">
                "Hey — thanks for reaching out about your roof. We can come by
                Thursday at 2pm or Friday at 10am. Which works?"
              </div>
              <div className="flex items-center justify-between mt-2.5 pt-2.5 border-t border-[var(--border)]">
                <span className="font-mono text-[9px] uppercase tracking-wider text-[var(--text-4)]">sent automatically</span>
                <CheckCircle2 className="w-3 h-3 text-[var(--success)]" />
              </div>
            </div>
          </motion.div>

          <DemoNote />
        </div>
      </div>
    </section>
  );
};
