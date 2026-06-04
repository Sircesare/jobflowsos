// Site-wide decorative theme switch — the SECOND independent lever.
// (The first is PROMO in app/lib/pricing.ts, which controls pricing + the card.)
//
// This controls DECORATIVE accents only — headline underline, CTA color, background
// glows, section kickers, trust checkmarks. It does NOT touch functional/semantic
// colors (--success, --warning, --info, pipeline status, sparkline) — those keep
// their meaning regardless of season.
//
// HOW IT WORKS:
//   FontStyle.tsx defines semantic accent vars (--accent, --accent-soft, etc.)
//   that normally resolve to the brand blue. When FESTIVE.active is true, FontStyle
//   adds a .festive class to <html> and those same vars re-point to the festive
//   palette below. Components never change — only what the vars resolve to changes.
//
// TO LAUNCH JULY 4TH:  set active: true   (and ensure FontStyle reads this flag)
// TO REVERT AFTER:     set active: false  — whole site de-paints in one edit.

export interface FestiveTheme {
  /** Master switch. false = normal brand colors site-wide. */
  active: boolean;
  /** Internal name, for clarity. */
  name: string;
  /** The festive accent palette (Option 2 — Bright Firework). */
  palette: {
    accent: string;        // primary festive accent (vivid red)
    accentHover: string;   // hover state for accent buttons
    accentSoft: string;    // lighter accent (checkmarks, secondary borders)
    glowPrimary: string;   // left hero glow (rgba)
    glowSecondary: string; // right hero glow (rgba)
  };
}

export const FESTIVE: FestiveTheme = {
  active: false, // ← flip to true on June 24 to launch July 4th
  name: "July 4th — Bright Firework",
  palette: {
    accent:        "#EF2B3B",
    accentHover:   "#FF4555",
    accentSoft:    "#7FB2FF",
    glowPrimary:   "rgba(239,43,59,0.45)",
    glowSecondary: "rgba(59,130,246,0.50)",
  },
};

/** Convenience flag for any component that wants to conditionally render festive extras. */
export const festiveActive = FESTIVE.active;
