import { PhoneMissed, Clock, FileText, Smartphone, Quote } from "lucide-react";
import { PHOTO_OPERATOR_PHONE } from "../lib/photos";

export const BuiltForRealOperators = () => (
  <section className="relative section-y warm-wash overflow-hidden">
    <div className="absolute top-0 left-1/4 w-[500px] h-[500px] rounded-full opacity-10 pointer-events-none"
         style={{ background: "radial-gradient(circle, var(--gold-bright), transparent 60%)" }} />

    <div className="container-tight relative">
      <div className="grid lg:grid-cols-[1.2fr,1fr] gap-10 lg:gap-14 items-center">
        <div>
          <h2 className="font-display font-medium text-[clamp(30px,3.8vw,46px)] leading-[1.08] mt-5 text-white tracking-tight">
            For the owners answering the phone <span style={{ color: "var(--gold-soft)" }}>from the truck</span>.
          </h2>
          <p className="font-body text-[16px] lg:text-[17px] text-[var(--text-2)] mt-6 leading-[1.65] max-w-xl">
            You're running estimates in the morning, leading a crew in the afternoon,
            and answering "can someone come look at my roof?" between every other thing.
            Your phone never stops. Three calls come in while you're on a ladder.
            One of them doesn't get a callback until tomorrow — and by then they've
            already hired your competitor.
          </p>
          <p className="font-body text-[16px] lg:text-[17px] text-[var(--text-2)] mt-4 leading-[1.65] max-w-xl">
            This system isn't built for tech companies. It's built for the owner
            who's been on his own back-end since day one — and finally needs the
            response, follow-up, and tracking off his plate.
          </p>

          <div className="grid sm:grid-cols-2 gap-3 mt-8 max-w-xl">
            {[
              { icon: PhoneMissed, t: "The calls you miss",  d: "Get answered automatically — even on the job." },
              { icon: Clock,       t: "The follow-up gap",    d: "Closed by a sequence that doesn't forget." },
              { icon: FileText,    t: "The estimates",        d: "Sent, tracked, and reminded — without you chasing." },
              { icon: Smartphone,  t: "The whole operation",  d: "Visible on your phone from anywhere." },
            ].map((b, i) => (
              <div key={i} className="flex items-start gap-3 p-3.5 rounded-lg border border-[var(--border)] bg-[var(--surface)]/70 backdrop-blur">
                <div className="w-9 h-9 rounded-lg bg-[var(--elevated)] border border-[var(--border-strong)] flex items-center justify-center flex-shrink-0">
                  <b.icon className="w-4 h-4 text-[var(--gold-soft)]" strokeWidth={1.8} />
                </div>
                <div>
                  <div className="font-display font-medium text-[14px] text-white tracking-tight">{b.t}</div>
                  <div className="font-body text-[12.5px] text-[var(--text-3)] mt-0.5 leading-snug">{b.d}</div>
                </div>
              </div>
            ))}
          </div>
        </div>

        <div className="relative">
          <div className="relative aspect-[4/3] lg:aspect-[16/10] rounded-2xl overflow-hidden border border-[var(--border-strong)] glow-card">
            <img
              src={PHOTO_OPERATOR_PHONE}
              alt="Local service business owner on phone"
              className="absolute inset-0 w-full h-full object-cover photo-treatment"
            />
            <div className="absolute inset-0 photo-overlay-warm" />

            <div className="absolute bottom-5 left-5 right-5 rounded-xl border border-[var(--border-strong)] bg-[var(--bg-primary)]/85 backdrop-blur-xl p-4">
              <Quote className="w-4 h-4 text-[var(--gold-soft)] mb-2" />
              <div className="font-display text-[14px] lg:text-[15px] text-white leading-[1.4]">
                "I was missing calls every single day and had no idea what was in the
                pipeline. That's the part that was actually costing me money."
              </div>
              <div className="font-mono text-[9px] uppercase tracking-[0.22em] text-[var(--text-4)] mt-3">
                — every local operator we've talked to
              </div>
            </div>

            <div className="absolute top-4 left-4 flex items-center gap-2 px-2.5 py-1.5 rounded-md bg-[var(--bg-primary)]/80 backdrop-blur border border-[var(--border)]">
              <span className="w-1.5 h-1.5 rounded-full bg-[var(--gold-bright)] pulse-dot" />
              <span className="font-mono text-[9px] uppercase tracking-[0.22em] text-[var(--gold-soft)]">
                On the ground
              </span>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
);
