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
          <article className="glass-card flex min-h-[8.5rem] flex-col items-center justify-center rounded-2xl p-3.5 text-center shadow-xl sm:min-h-[9.5rem] sm:rounded-3xl sm:p-6">
            <span className="mb-2 flex h-9 w-9 items-center justify-center rounded-xl bg-sage/10 text-sage sm:mb-3 sm:h-10 sm:w-10 sm:rounded-2xl">
              <CalendarDays className="h-4 w-4 sm:h-5 sm:w-5" strokeWidth={1.75} />
            </span>
            <span className="text-[0.6rem] font-semibold uppercase tracking-[0.16em] text-sage sm:text-[0.65rem] sm:tracking-[0.2em]">
              Tarih
            </span>
            <p className="font-serif mt-1.5 text-base font-semibold leading-snug text-ink sm:mt-2 sm:text-2xl">
              1 Kasım Pazar
            </p>
            <p className="mt-0.5 text-xs text-ink-muted sm:mt-1 sm:text-sm">
              2026
            </p>
          </article>
        </FadeIn>

        <FadeIn delay={0.16}>
          <article className="glass-card flex min-h-[8.5rem] flex-col items-center justify-center rounded-2xl p-3.5 text-center shadow-xl sm:min-h-[9.5rem] sm:rounded-3xl sm:p-6">
            <span className="mb-2 flex h-9 w-9 items-center justify-center rounded-xl bg-sage/10 text-sage sm:mb-3 sm:h-10 sm:w-10 sm:rounded-2xl">
              <Clock3 className="h-4 w-4 sm:h-5 sm:w-5" strokeWidth={1.75} />
            </span>
            <span className="text-[0.6rem] font-semibold uppercase tracking-[0.16em] text-sage sm:text-[0.65rem] sm:tracking-[0.2em]">
              Saat
            </span>
            <p className="font-serif mt-1.5 text-base font-semibold leading-snug text-ink sm:mt-2 sm:text-2xl">
              14:00 – 17:00
            </p>
            <p className="mt-0.5 text-xs text-ink-muted sm:mt-1 sm:text-sm">
              Öğleden sonra
            </p>
          </article>
        </FadeIn>
      </div>
    </section>
  );
}
