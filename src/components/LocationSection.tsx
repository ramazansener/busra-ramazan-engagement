"use client";

import Image from "next/image";
import { MapPin, Navigation } from "lucide-react";
import { FadeIn } from "./FadeIn";

const MAPS_URL = "https://maps.app.goo.gl/SuYkDe1gKfsexocr5";

export function LocationSection() {
  return (
    <section aria-labelledby="location-heading" className="space-y-3">
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
          <div className="relative aspect-[16/10] w-full overflow-hidden sm:aspect-[16/9]">
            <Image
              src="/images/mekan-harita.png"
              alt="Pembe Köşk konum haritası"
              fill
              sizes="(max-width: 640px) 100vw, 576px"
              className="object-cover object-center"
              priority={false}
            />
            <div
              className="absolute inset-x-0 bottom-0 h-16 bg-gradient-to-t from-black/25 to-transparent"
              aria-hidden
            />
            <div className="absolute bottom-3 left-1/2 z-10 -translate-x-1/2">
              <span className="flex h-10 w-10 items-center justify-center rounded-full bg-cream/95 text-sage shadow-lg ring-1 ring-sage/10">
                <MapPin className="h-4 w-4" strokeWidth={1.75} />
              </span>
            </div>
          </div>

          <div className="px-4 py-5 text-center sm:px-6 sm:py-6">
            <p className="text-[0.65rem] font-semibold uppercase tracking-[0.2em] text-sage">
              Konum
            </p>
            <p className="font-serif mt-1.5 text-2xl font-semibold text-ink sm:text-3xl">
              Pembe Köşk
            </p>
            <address className="mx-auto mt-2 max-w-[20rem] not-italic text-sm leading-relaxed text-ink-muted sm:max-w-none">
              15 Temmuz Mah. 148060 Nolu Cad.
              <br />
              No:7 D:1, 27000 Şehitkamil / Gaziantep
            </address>

            <a
              href={MAPS_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="mt-4 inline-flex w-full min-h-12 touch-manipulation items-center justify-center gap-2 rounded-2xl bg-sage px-6 py-3 text-sm font-semibold text-cream shadow-xl transition-colors active:bg-sage-deep hover:bg-sage-deep focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-sage sm:mt-5 sm:w-auto"
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
