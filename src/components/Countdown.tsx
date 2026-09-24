"use client";

import { useEffect, useState } from "react";
import { FadeIn } from "./FadeIn";

/** 1 Kasım 2026, 14:00 — Türkiye saati (UTC+3) */
const TARGET_MS = new Date("2026-11-01T14:00:00+03:00").getTime();

type TimeLeft = {
  days: number;
  hours: number;
  minutes: number;
  seconds: number;
  done: boolean;
};

function getTimeLeft(now: number): TimeLeft {
  const diff = Math.max(0, TARGET_MS - now);
  const done = diff === 0;

  const days = Math.floor(diff / (1000 * 60 * 60 * 24));
  const hours = Math.floor((diff / (1000 * 60 * 60)) % 24);
  const minutes = Math.floor((diff / (1000 * 60)) % 60);
  const seconds = Math.floor((diff / 1000) % 60);

  return { days, hours, minutes, seconds, done };
}

function pad(n: number) {
  return String(n).padStart(2, "0");
}

const UNITS: { key: keyof Omit<TimeLeft, "done">; label: string; short: string }[] =
  [
    { key: "days", label: "Gün", short: "Gün" },
    { key: "hours", label: "Saat", short: "Saat" },
    { key: "minutes", label: "Dakika", short: "Dk" },
    { key: "seconds", label: "Saniye", short: "Sn" },
  ];

export function Countdown() {
  const [timeLeft, setTimeLeft] = useState<TimeLeft | null>(null);

  useEffect(() => {
    setTimeLeft(getTimeLeft(Date.now()));
    const id = window.setInterval(() => {
      setTimeLeft(getTimeLeft(Date.now()));
    }, 1000);
    return () => window.clearInterval(id);
  }, []);

  return (
    <section aria-labelledby="countdown-heading" className="space-y-3 sm:space-y-4">
      <FadeIn>
        <h2
          id="countdown-heading"
          className="font-serif text-section text-center font-semibold text-sage"
        >
          Nişana Kalan Süre
        </h2>
        <p className="mt-1 text-center text-xs text-ink-muted sm:text-sm">
          1 Kasım 2026 · 14:00
        </p>
      </FadeIn>

      <FadeIn delay={0.1}>
        <div
          className="glass-card grid grid-cols-4 gap-1.5 rounded-2xl p-3 shadow-xl sm:gap-3 sm:rounded-3xl sm:p-6"
          role="timer"
          aria-live="polite"
          aria-atomic="true"
        >
          {UNITS.map(({ key, label, short }) => (
            <div
              key={key}
              className="flex min-h-[4.75rem] min-w-0 flex-col items-center justify-center rounded-xl border border-sage/10 bg-cream/80 px-0.5 py-2.5 sm:min-h-[6.5rem] sm:rounded-2xl sm:px-2 sm:py-3"
            >
              <span className="font-serif text-countdown tabular-nums font-semibold leading-none text-sage">
                {timeLeft
                  ? key === "days"
                    ? timeLeft[key]
                    : pad(timeLeft[key])
                  : "—"}
              </span>
              <span className="mt-1.5 text-[0.55rem] font-semibold uppercase tracking-[0.08em] text-ink-muted sm:mt-2 sm:text-[0.65rem] sm:tracking-[0.14em]">
                <span className="sm:hidden">{short}</span>
                <span className="hidden sm:inline">{label}</span>
              </span>
            </div>
          ))}
        </div>

        {timeLeft?.done && (
          <p className="mt-3 text-center font-serif text-base italic text-sage sm:text-lg">
            Bugün mutlu günümüz!
          </p>
        )}
      </FadeIn>
    </section>
  );
}
