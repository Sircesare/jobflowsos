"use client";
import { useState, useEffect } from "react";

export const useCounter = (target: number, inView: boolean, duration = 1600) => {
  const [val, setVal] = useState(0);
  useEffect(() => {
    // When the element leaves view, reset to 0 so it re-counts on next entry
    if (!inView) {
      setVal(0);
      return;
    }
    const start = performance.now();
    let raf: number;
    const tick = (t: number) => {
      const p = Math.min(1, (t - start) / duration);
      const eased = 1 - Math.pow(1 - p, 3);
      setVal(target * eased);
      if (p < 1) raf = requestAnimationFrame(tick);
    };
    raf = requestAnimationFrame(tick);
    return () => cancelAnimationFrame(raf);
  }, [inView, target, duration]);
  return val;
};
