"use client";

import { MapPin, Navigation } from "lucide-react";
import { FadeIn } from "./FadeIn";

const MAPS_URL = "https://maps.app.goo.gl/SuYkDe1gKfsexocr5";

export function LocationSection() {
  return (
    <section aria-labelledby="location-heading" className="space-y-3 sm:space-y-4">
      <FadeIn>
        <h2
          id="location-heading"
          className="font-serif text-section text-center font-semibold text-sage"
        >
          Mekân
        </h2>
      </FadeIn>

      <FadeIn delay={0.1}>
        <article className="glass-card overflow-hidden rounded-2xl shadow-xl sm:rounded-3xl">
          <div className="relative h-28 bg-sage/15 sm:h-44">
            <div
              className="absolute inset-0 opacity-40"
              style={{
                backgroundImage:
                  "linear-gradient(135deg, #3A5A40 0%, transparent 55%), linear-gradient(225deg, #EBE7DF 0%, transparent 50%)",
              }}
              aria-hidden
            />
            <div className="absolute inset-0 flex items-center justify-center">
              <span className="flex h-12 w-12 items-center justify-center rounded-full bg-cream/90 text-sage shadow-lg sm:h-14 sm:w-14">
                <MapPin className="h-5 w-5 sm:h-6 sm:w-6" strokeWidth={1.75} />
              </span>
            </div>
          </div>

          <div className="px-4 py-6 text-center sm:px-6 sm:py-7">
            <p className="text-[0.6rem] font-semibold uppercase tracking-[0.18em] text-sage sm:text-[0.65rem] sm:tracking-[0.2em]">
              Konum
            </p>
            <p className="font-serif mt-2 text-xl font-semibold text-ink sm:text-3xl">
              Pembe Köşk
            </p>
            <address className="mx-auto mt-3 max-w-[18rem] not-italic text-[0.8125rem] leading-relaxed text-ink-muted sm:max-w-none sm:text-sm">
              15 Temmuz Mah. 148060 Nolu Cad.
              <br />
              No:7 D:1, 27000 Şehitkamil / Gaziantep
            </address>

            <a
              href={MAPS_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="mt-5 inline-flex w-full min-h-12 touch-manipulation items-center justify-center gap-2 rounded-2xl bg-sage px-6 py-3.5 text-sm font-semibold text-cream shadow-xl transition-colors active:bg-sage-deep hover:bg-sage-deep focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-sage sm:mt-6 sm:w-auto sm:min-h-12 sm:py-3"
            >
              <Navigation className="h-4 w-4 shrink-0" strokeWidth={2} />
              Yol Tarifi Al
            </a>
          </div>
        </article>
      </FadeIn>
    </section>
  );
}
