import { CheckCircle2, ArrowRight, ChevronRight } from "lucide-react";
import { PHOTO_TABLET_OPERATOR, BOOKING_URL } from "../lib/photos";

export const WhoThisIsFor = () => (
  <section className="relative section-y overflow-hidden" style={{ background: "var(--bg-light)" }}>
    <div className="absolute inset-0 dot-grid-light opacity-60" />
    <div className="absolute top-0 right-0 w-[600px] h-[600px] rounded-full opacity-20 pointer-events-none"
         style={{ background: "radial-gradient(circle, var(--gold-soft), transparent 70%)" }} />

    <div className="relative container-tight">
      <div className="grid lg:grid-cols-[1fr,1.1fr] gap-10 lg:gap-14 items-center">
        <div className="relative">
          <div className="relative aspect-[4/3] lg:aspect-[16/10] rounded-2xl overflow-hidden border border-[var(--border-light)] glow-card-light">
            <img
              src={PHOTO_TABLET_OPERATOR}
              alt="Local service business owner reviewing pipeline on phone"
              className="absolute inset-0 w-full h-full object-cover"
            />
            <div className="absolute inset-0"
                 style={{ background: "linear-gradient(180deg, transparent 50%, rgba(15,23,42,0.15))" }} />

            <div className="absolute bottom-5 right-5 p-3 rounded-lg bg-white shadow-lg border border-[var(--border-light)] w-[180px]">
              <div className="font-mono text-[9px] uppercase tracking-[0.22em] text-[var(--text-on-light-3)]">
                Owner view
              </div>
              <div className="flex items-baseline gap-1.5 mt-1">
                <span className="font-metric font-bold text-[28px] text-[var(--text-on-light-1)] leading-none">23</span>
                <span className="font-body text-[11px] text-[var(--text-on-light-2)]">jobs booked this week</span>
              </div>
              <div className="mt-2 h-1 rounded-full bg-[var(--border-light)] overflow-hidden">
                <div className="h-full w-3/4 rounded-full" style={{ background: "var(--blue)" }} />
              </div>
            </div>
          </div>
        </div>

        <div>
          <h2 className="font-display font-medium text-[clamp(30px,3.8vw,46px)] leading-[1.08] mt-5 tracking-tight"
              style={{ color: "var(--text-on-light-1)" }}>
            Not for big enterprise teams.<br />
            <span style={{ color: "var(--blue)" }}>For the owner running it all</span>.
          </h2>
          <p className="font-body text-[16px] lg:text-[17px] mt-7 leading-[1.65] max-w-xl"
             style={{ color: "var(--text-on-light-2)" }}>
            If you're a roofer who answers your own phone, a plumber who texts your
            own estimates, a landscaper whose crew calendar lives in your head — this
            is the system that takes the operational layer off you.
          </p>

          <ul className="mt-7 space-y-3 max-w-xl">
            {[
              "You're the owner, the dispatcher, and the salesperson",
              "Inbound is coming in faster than you can respond",
              "Follow-up depends on you remembering",
              "You can see the leaks but don't have time to fix them",
            ].map((line, i) => (
              <li key={i} className="flex items-start gap-3">
                <div className="w-5 h-5 rounded-full flex items-center justify-center flex-shrink-0 mt-0.5"
                     style={{ background: "var(--blue)" }}>
                  <CheckCircle2 className="w-3 h-3 text-white" strokeWidth={2.5} />
                </div>
                <span className="font-body text-[15px] leading-relaxed"
                      style={{ color: "var(--text-on-light-1)" }}>{line}</span>
              </li>
            ))}
          </ul>

          <div className="mt-9 flex flex-wrap items-center gap-3">
            <a href={BOOKING_URL} target="_blank" rel="noopener noreferrer"
               className="group inline-flex items-center gap-2 font-body font-medium text-[14px] text-white bg-[var(--blue)] hover:bg-[var(--blue-hover)] px-5 py-3.5 rounded-lg transition-all hover:shadow-[0_8px_30px_-5px_rgba(37,99,235,0.5)]">
              Book a Demo
              <ArrowRight className="w-4 h-4 group-hover:translate-x-0.5 transition" />
            </a>
            <a href="#pricing"
               className="inline-flex items-center gap-2 font-body font-medium text-[14px] px-5 py-3.5 rounded-lg transition border"
               style={{ color: "var(--text-on-light-1)", borderColor: "var(--border-light)", background: "var(--surface-light)" }}>
              See What's Included
              <ChevronRight className="w-4 h-4" />
            </a>
          </div>
        </div>
      </div>
    </div>
  </section>
);
