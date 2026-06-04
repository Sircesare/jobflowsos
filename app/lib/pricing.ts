// Single source of truth for all pricing across the site.
// Change prices / promos HERE — every component that imports from this file updates at once.
//
// Consumers:
//   - app/components/Pricing.tsx        (the pricing section card)
//   - app/components/Nav.tsx            (the promo banner + button)
//   - public/calculator/index.html      (STATIC HTML — cannot import this; see note at bottom)

export interface PricePoint {
  /** Numeric value, used for any math (payback, comparisons). */
  amount: number;
  /** Pre-formatted display string, e.g. "$4,000". */
  display: string;
}

export interface Promo {
  /** Master switch. Set false to instantly revert the whole site to standard pricing. */
  active: boolean;
  /** Short name shown on badges, e.g. "Father's Day Special". */
  name: string;
  /** Deadline copy shown to users, e.g. "Ends Fri June 19". */
  deadlineLabel: string;
  /** ISO date the promo ends (for reference / future automation). */
  deadlineISO: string;
  /** Promo setup fee + monthly. */
  setup: PricePoint;
  monthly: PricePoint;
  /** One-line grandfather / urgency note shown on the card. Empty string to hide. */
  grandfatherNote: string;
}

// ─────────────────────────────────────────────────────────────
// STANDARD PRICING — the real, post-promo price.
// ─────────────────────────────────────────────────────────────
export const STANDARD = {
  setup:   { amount: 4000, display: "$4,000" } as PricePoint,
  monthly: { amount: 800,  display: "$800"   } as PricePoint,
};

// ─────────────────────────────────────────────────────────────
// CURRENT PROMO — flip `active` to false to revert site-wide.
// ─────────────────────────────────────────────────────────────
export const PROMO: Promo = {
  active: true,
  name: "Father's Day Special",
  deadlineLabel: "Ends Fri June 19",
  deadlineISO: "2026-06-19",
  setup:   { amount: 2400, display: "$2,400" },
  monthly: { amount: 650,  display: "$650"   },
  grandfatherNote:
    "Start before Fri June 19 and your $650/mo rate locks in for life — even after it returns to $800.",
};

// ─────────────────────────────────────────────────────────────
// DERIVED HELPERS — components read these, not the raw objects.
// When the promo is off, "active" prices fall back to standard,
// and the struck-through originals disappear.
// ─────────────────────────────────────────────────────────────

/** The price the customer pays right now (promo if active, else standard). */
export const activeSetup   = PROMO.active ? PROMO.setup   : STANDARD.setup;
export const activeMonthly = PROMO.active ? PROMO.monthly : STANDARD.monthly;

/** The struck-through "was" price — only shown during a promo. null when off. */
export const struckSetup   = PROMO.active ? STANDARD.setup   : null;
export const struckMonthly = PROMO.active ? STANDARD.monthly : null;

/** Convenience flag for conditional promo UI (badges, banner, grandfather note). */
export const promoActive = PROMO.active;
