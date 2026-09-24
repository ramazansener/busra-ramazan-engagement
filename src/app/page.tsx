import { Countdown } from "@/components/Countdown";
import { DateTimeCards } from "@/components/DateTimeCards";
import { Hero } from "@/components/Hero";
import { LocationSection } from "@/components/LocationSection";

export default function Home() {
  return (
    <main className="relative mx-auto flex w-full max-w-lg flex-col px-[max(1rem,env(safe-area-inset-left))] pr-[max(1rem,env(safe-area-inset-right))] pt-[max(1.25rem,env(safe-area-inset-top))] pb-[max(1.5rem,env(safe-area-inset-bottom))] sm:max-w-xl sm:px-6 sm:pt-10 sm:pb-10">
      <div className="flex flex-1 flex-col gap-6 sm:gap-10">
        <Hero />
        <DateTimeCards />
        <Countdown />
        <LocationSection />
      </div>

      <footer className="mt-10 pb-2 text-center sm:mt-12 sm:pb-4">
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
