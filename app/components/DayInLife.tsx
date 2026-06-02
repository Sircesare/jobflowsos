import { PHOTO_JOBSITE } from "../lib/photos";

export const DayInLife = () => (
  <section className="relative">
    <div className="relative h-[400px] md:h-[460px] lg:h-[480px] overflow-hidden">
      <img
        src={PHOTO_JOBSITE}
        alt="Local service business jobsite"
        className="absolute inset-0 w-full h-full object-cover photo-treatment"
      />
      <div className="absolute inset-0 photo-overlay-dark" />

      <div className="absolute -top-20 -right-20 w-[600px] h-[600px] rounded-full opacity-30 pointer-events-none"
           style={{ background: "radial-gradient(circle, var(--gold-warm), transparent 60%)" }} />

      <div className="relative h-full container-tight flex flex-col justify-end pb-12 lg:pb-14">
        <div className="max-w-3xl">
          <h2 className="font-display font-medium text-[clamp(32px,4.5vw,58px)] leading-[1.04] mt-5 text-white tracking-tight">
            Your phone rings 40 times.<br />
            <span style={{ color: "var(--gold-soft)" }}>You answer twelve</span>.
          </h2>
          <p className="font-body text-[15px] md:text-[16px] lg:text-[17px] text-[var(--text-2)] mt-6 max-w-2xl leading-[1.6]">
            That's not a complaint — that's what it looks like to run a real business.
            You can't be on the ladder and on the phone at the same time.
            That's exactly the gap this system was built to close.
          </p>
          <a href="/calculator"
             className="inline-flex items-center gap-2 mt-7 font-body font-medium text-[14px] text-white bg-[var(--blue)] hover:bg-[var(--blue-hover)] px-5 py-3.5 rounded-lg transition-all hover:shadow-[0_0_30px_-5px_var(--blue-glow-2)]">
            Calculate what that's costing you
          </a>
        </div>
      </div>
    </div>
  </section>
);
