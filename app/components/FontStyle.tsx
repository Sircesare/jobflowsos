export const FontStyle = () => (
  <style>{`
    @import url('https://fonts.googleapis.com/css2?family=Geist:wght@300..700&family=Inter:wght@300;400;500;600;700;800&family=Barlow+Condensed:wght@400;500;600;700&family=Geist+Mono:wght@400;500&display=swap');

    :root {
      --bg-primary:   #07090F;
      --bg-secondary: #0B1020;
      --bg-warm-dark: #0F1426;
      --bg-slate:     #131A2C;
      --surface:      #111827;
      --elevated:     #1A2333;

      --bg-light:        #E8ECF3;
      --bg-light-2:      #F1F4F9;
      --surface-light:   #FFFFFF;
      --border-light:    #CBD5E1;
      --text-on-light-1: #0F172A;
      --text-on-light-2: #334155;
      --text-on-light-3: #64748B;

      --border:       #1f2937;
      --border-strong:#2a3447;
      --hairline:     rgba(203,213,225,0.08);

      --blue:         #2563EB;
      --blue-hover:   #3B82F6;
      --blue-soft:    #60A5FA;
      --blue-glow:    rgba(37,99,235,0.18);
      --blue-glow-2:  rgba(96,165,250,0.45);

      --gold:         #D6A84F;
      --gold-bright:  #F5C542;
      --gold-soft:    #E9C46A;
      --gold-glow:    rgba(214,168,79,0.18);
      --gold-warm:    rgba(245,197,66,0.10);

      /* Father's Day promo accents — temporary, remove after June 19 */
      --fd-coral:       #D85A30;
      --fd-coral-soft:  #F0997B;
      --fd-amber:       #EF9F27;
      --fd-amber-soft:  #FAC775;
      --fd-coral-glow:  rgba(216,90,48,0.35);
      --fd-coral-wash:  rgba(216,90,48,0.10);
      --fd-amber-deep:  #412402;

      --text-1:       #F8FAFC;
      --text-2:       #CBD5E1;
      --text-3:       #94A3B8;
      --text-4:       #64748B;

      --success:      #10B981;
      --warning:      #F59E0B;
      --error:        #EF4444;
      --info:         #06B6D4;

      /* Desktop rhythm */
      --section-pad-mobile: 4rem;   /* 64px */
      --section-pad-desk:   5.5rem; /* 88px - tighter than 96 */
    }

    html, body { background: var(--bg-primary); }

    .font-display { font-family: 'Geist', sans-serif; letter-spacing: -0.02em; }
    .font-body    { font-family: 'Inter', sans-serif; }
    .font-metric  { font-family: 'Barlow Condensed', sans-serif; font-feature-settings: "tnum"; }
    .font-mono    { font-family: 'Geist Mono', monospace; }

    /* Section padding system — tighter desktop rhythm */
    .section-y { padding-top: var(--section-pad-mobile); padding-bottom: var(--section-pad-mobile); }
    @media (min-width: 1024px) {
      .section-y { padding-top: var(--section-pad-desk); padding-bottom: var(--section-pad-desk); }
    }

    /* Container variants — desktop framing */
    .container-tight { max-width: 80rem; margin-left: auto; margin-right: auto; padding-left: 1.5rem; padding-right: 1.5rem; }
    .container-narrow { max-width: 64rem; margin-left: auto; margin-right: auto; padding-left: 1.5rem; padding-right: 1.5rem; }
    .container-text { max-width: 48rem; margin-left: auto; margin-right: auto; padding-left: 1.5rem; padding-right: 1.5rem; }

    .dot-grid {
      background-image: radial-gradient(circle, rgba(148,163,184,0.08) 1px, transparent 1px);
      background-size: 28px 28px;
    }
    .dot-grid-light {
      background-image: radial-gradient(circle, rgba(15,23,42,0.07) 1px, transparent 1px);
      background-size: 28px 28px;
    }
    .navy-wash {
      background:
        radial-gradient(ellipse 80% 50% at 50% 0%, rgba(37,99,235,0.08), transparent 60%),
        linear-gradient(180deg, var(--bg-primary), var(--bg-secondary) 40%, var(--bg-primary));
    }
    .warm-wash {
      background:
        radial-gradient(ellipse 60% 50% at 20% 30%, rgba(245,197,66,0.06), transparent 60%),
        radial-gradient(ellipse 60% 50% at 80% 70%, rgba(37,99,235,0.06), transparent 60%),
        linear-gradient(180deg, var(--bg-warm-dark), var(--bg-slate) 50%, var(--bg-warm-dark));
    }
    .slate-wash {
      background: linear-gradient(180deg, var(--bg-secondary), var(--bg-slate));
    }

    .glow-blue {
      box-shadow:
        0 0 0 1px rgba(37,99,235,0.3),
        0 0 40px -10px var(--blue-glow-2),
        inset 0 1px 0 rgba(255,255,255,0.04);
    }
    .glow-gold {
      box-shadow:
        0 0 0 1px rgba(214,168,79,0.35),
        0 0 50px -10px rgba(245,197,66,0.4),
        inset 0 1px 0 rgba(255,255,255,0.05);
    }
    /* Father's Day promo — temporary, remove after June 19 */
    .glow-fd {
      box-shadow:
        0 0 0 1px var(--fd-coral-glow),
        0 0 50px -10px rgba(216,90,48,0.4),
        inset 0 1px 0 rgba(255,255,255,0.05);
    }
    .fd-banner {
      background: linear-gradient(90deg, var(--fd-coral) 0%, var(--fd-amber) 100%);
    }
    .glow-card {
      box-shadow:
        0 0 0 1px var(--border),
        0 20px 60px -30px rgba(37,99,235,0.25),
        inset 0 1px 0 rgba(255,255,255,0.025);
    }
    .glow-card-light {
      box-shadow:
        0 0 0 1px var(--border-light),
        0 20px 50px -25px rgba(15,23,42,0.18);
    }
    .glow-hero-dashboard {
      box-shadow:
        0 0 0 1px var(--border-strong),
        0 40px 100px -30px rgba(37,99,235,0.45),
        0 20px 60px -20px rgba(0,0,0,0.5),
        inset 0 1px 0 rgba(255,255,255,0.04);
    }

    .hairline-h { background: linear-gradient(90deg, transparent, var(--border-strong), transparent); }

    .dash-flow { stroke-dasharray: 4 6; animation: dashmove 1.6s linear infinite; }
    @keyframes dashmove { to { stroke-dashoffset: -40; } }

    .pulse-dot { animation: pulseDot 1.8s ease-in-out infinite; }
    @keyframes pulseDot {
      0%,100% { opacity:.45; transform: scale(0.85);}
      50%     { opacity:1;  transform: scale(1.15);}
    }

    ::selection { background: var(--blue); color: #fff; }

    .no-scrollbar::-webkit-scrollbar { display:none; }
    .no-scrollbar { scrollbar-width:none; }

    .grain::before {
      content:""; position:absolute; inset:0; pointer-events:none; opacity:.04; mix-blend-mode: overlay;
      background-image: url("data:image/svg+xml;utf8,<svg xmlns='http://www.w3.org/2000/svg' width='160' height='160'><filter id='n'><feTurbulence type='fractalNoise' baseFrequency='0.85'/></filter><rect width='100%25' height='100%25' filter='url(%23n)'/></svg>");
    }

    .photo-treatment { filter: brightness(0.85) contrast(1.05) saturate(0.95); }
    .photo-overlay-dark {
      background: linear-gradient(135deg, rgba(7,9,15,0.55) 0%, rgba(15,20,38,0.4) 50%, rgba(7,9,15,0.85) 100%);
    }
    .photo-overlay-warm {
      background:
        radial-gradient(ellipse at 20% 80%, rgba(245,197,66,0.15), transparent 50%),
        linear-gradient(135deg, rgba(7,9,15,0.7) 0%, rgba(15,20,38,0.5) 60%, rgba(7,9,15,0.9) 100%);
    }
  `}</style>
);
