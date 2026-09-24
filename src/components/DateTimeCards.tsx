"use client";

import { CalendarDays, Clock3 } from "lucide-react";
import { FadeIn } from "./FadeIn";

export function DateTimeCards() {
  return (
    <section aria-labelledby="datetime-heading" className="space-y-3 sm:space-y-4">
      <FadeIn>
        <h2
          id="datetime-heading"
          className="font-serif text-section text-center font-semibold text-sage"
        >
          Tarih & Saat
        </h2>
      </FadeIn>

      <div className="grid grid-cols-2 gap-3 sm:gap-4">
        <FadeIn delay={0.08}>
          <article className="glass-card flex min-h-[9rem] flex-col items-center justify-center rounded-2xl p-4 text-center shadow-xl sm:min-h-[10rem] sm:rounded-3xl sm:p-6">
            <span className="mb-2.5 flex h-9 w-9 items-center justify-center rounded-xl bg-sage/10 text-sage sm:mb-3 sm:h-10 sm:w-10 sm:rounded-2xl">
              <CalendarDays className="h-4 w-4 sm:h-5 sm:w-5" strokeWidth={1.75} />
            </span>
            <span className="text-[0.65rem] font-bold uppercase tracking-[0.18em] text-sage">
              Tarih
            </span>
            <p className="mt-2 text-lg font-bold leading-tight text-ink sm:text-xl">
              1 Kasım
            </p>
            <p className="mt-0.5 text-sm font-semibold text-sage sm:text-base">
              Pazar
            </p>
            <p className="mt-1 text-xs font-medium text-ink-muted">2026</p>
          </article>
        </FadeIn>

        <FadeIn delay={0.16}>
          <article className="glass-card flex min-h-[9rem] flex-col items-center justify-center rounded-2xl p-4 text-center shadow-xl sm:min-h-[10rem] sm:rounded-3xl sm:p-6">
            <span className="mb-2.5 flex h-9 w-9 items-center justify-center rounded-xl bg-sage/10 text-sage sm:mb-3 sm:h-10 sm:w-10 sm:rounded-2xl">
              <Clock3 className="h-4 w-4 sm:h-5 sm:w-5" strokeWidth={1.75} />
            </span>
            <span className="text-[0.65rem] font-bold uppercase tracking-[0.18em] text-sage">
              Saat
            </span>
            <p className="mt-2 text-lg font-bold leading-tight tabular-nums text-ink sm:text-xl">
              14:00 – 17:00
            </p>
            <p className="mt-1 text-xs font-medium text-ink-muted">
              Öğleden sonra
            </p>
          </article>
        </FadeIn>
      </div>
    </section>
  );
}
