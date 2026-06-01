import { Layers } from "lucide-react";
import { BOOKING_URL } from "../lib/photos";

export const Footer = () => (
  <footer className="border-t border-[var(--border)] bg-[var(--bg-primary)]">
    <div className="container-tight py-12 lg:py-14">
      <div className="grid md:grid-cols-[2fr,1fr,1fr,1fr] gap-10">
        <div>
          <div className="flex items-center gap-2.5">
            <div className="relative w-8 h-8 rounded-md bg-[var(--blue)] flex items-center justify-center">
              <Layers className="w-4 h-4 text-white" strokeWidth={2.2} />
              <div className="absolute -top-0.5 -right-0.5 w-2 h-2 rounded-full bg-[var(--gold-bright)] ring-2 ring-[var(--bg-primary)]" />
            </div>
            <div>
              <div className="font-display font-semibold text-[14px] text-white tracking-tight">JobflowsOS</div>
              <div className="font-mono text-[9px] uppercase tracking-[0.25em] text-[var(--text-4)] mt-0.5">
                For local service businesses
              </div>
            </div>
          </div>
          <p className="font-body text-[13px] text-[var(--text-3)] mt-4 max-w-sm leading-relaxed">
            Operational revenue infrastructure for local service businesses.
            Built by operators, for operators.
          </p>
        </div>
        <div>
          <div className="font-mono text-[10px] lg:text-[12px] uppercase tracking-[0.22em] text-[var(--text-4)]">System</div>
          <ul className="mt-4 space-y-2.5">
            <li><a href="#system"      className="font-body text-[13px] lg:text-[14px] text-[var(--text-3)] hover:text-white transition">The System</a></li>
            <li><a href="#automations" className="font-body text-[13px] lg:text-[14px] text-[var(--text-3)] hover:text-white transition">Automations</a></li>
            <li><a href="#pipeline"    className="font-body text-[13px] lg:text-[14px] text-[var(--text-3)] hover:text-white transition">Live View</a></li>
            <li><a href="#industries"  className="font-body text-[13px] lg:text-[14px] text-[var(--text-3)] hover:text-white transition">Industries</a></li>
          </ul>
        </div>
        <div>
          <div className="font-mono text-[10px] lg:text-[12px] uppercase tracking-[0.22em] text-[var(--text-4)]">Offer</div>
          <ul className="mt-4 space-y-2.5">
            <li><a href="#pricing" className="font-body text-[13px] lg:text-[14px] text-[var(--text-3)] hover:text-white transition">Founder Offer</a></li>
            <li><a href={BOOKING_URL} target="_blank" rel="noopener noreferrer"     className="font-body text-[13px] lg:text-[14px] text-[var(--text-3)] hover:text-white transition">Book a Demo</a></li>
            <li><a href="#cta"     className="font-body text-[13px] lg:text-[14px] text-[var(--text-3)] hover:text-white transition">Contact</a></li>
          </ul>
        </div>
        <div>
          <div className="font-mono text-[10px] lg:text-[12px] uppercase tracking-[0.22em] text-[var(--text-4)]">Legal</div>
          <ul className="mt-4 space-y-2.5">
            <li><a href="/privacy" className="font-body text-[13px] lg:text-[14px] text-[var(--text-3)] hover:text-white transition">Privacy</a></li>
            <li><a href="/terms" className="font-body text-[13px] lg:text-[14px] text-[var(--text-3)] hover:text-white transition">Terms</a></li>
          </ul>
        </div>
      </div>
      <div className="mt-12 pt-6 border-t border-[var(--border)] flex flex-wrap items-center justify-between gap-4">
        <div className="font-mono text-[10px] uppercase tracking-[0.22em] text-[var(--text-4)]">
          © {new Date().getFullYear()} JobflowsOS · All rights reserved
        </div>
        <div className="font-mono text-[10px] uppercase tracking-[0.22em] text-[var(--text-4)]">
          Built for owner-operators
        </div>
      </div>
    </div>
    <div className="mt-12 pt-6 border-t border-white/10">
      <div className="container-tight flex flex-wrap items-center gap-x-4 gap-y-2 font-mono text-[11px] text-[var(--text-4)]">
        <span>&copy; 2026 EquityBridge Holdings LLC</span>
        <span>&middot;</span>
        <span>dba JobflowsOS</span>
        <span>&middot;</span>
        <span>9229 Key West St, Temple City, CA 91780</span>
        <span>&middot;</span>
        <a href="tel:+16265900148" className="hover:text-white transition">(626) 590-0148</a>
        <span>&middot;</span>
        <a href="mailto:cesar@jobflowsos.com" className="hover:text-white transition">cesar@jobflowsos.com</a>
      </div>
    </div>
  </footer>
);
