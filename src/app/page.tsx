import { Countdown } from "@/components/Countdown";
import { DateTimeCards } from "@/components/DateTimeCards";
import { Hero } from "@/components/Hero";
import { LocationSection } from "@/components/LocationSection";

export default function Home() {
  return (
    <main className="relative mx-auto w-full max-w-lg px-4 pt-5 pb-6 sm:max-w-xl sm:px-6 sm:pt-8 sm:pb-8">
      <div className="flex flex-col gap-5 sm:gap-7">
        <Hero />
        <DateTimeCards />
        <Countdown />
        <LocationSection />
      </div>

      <footer className="mt-6 text-center sm:mt-8">
        <p className="font-serif text-base text-sage sm:text-lg">
          Büşra & Ramazan
        </p>
        <p className="mt-1 px-2 text-[0.7rem] leading-relaxed tracking-wide text-ink-muted sm:text-xs">
          1 Kasım 2026 · Pembe Köşk · Şehitkamil / Gaziantep
        </p>
      </footer>
    </main>
  );
}
