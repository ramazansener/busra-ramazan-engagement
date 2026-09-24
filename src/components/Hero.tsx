"use client";

import { motion } from "framer-motion";
import { Heart } from "lucide-react";

export function Hero() {
  return (
    <header className="relative overflow-hidden rounded-3xl bg-sage px-5 py-10 text-center text-cream shadow-xl sm:rounded-[1.75rem] sm:px-10 sm:py-16">
      <div
        className="pointer-events-none absolute inset-0 opacity-[0.07]"
        style={{
          backgroundImage:
            "radial-gradient(circle at 20% 20%, #fff 1px, transparent 1px), radial-gradient(circle at 80% 60%, #fff 1px, transparent 1px)",
          backgroundSize: "28px 28px",
        }}
        aria-hidden
      />

      <motion.div
        initial={{ opacity: 0, y: 12 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
        className="relative"
      >
        <span className="inline-flex max-w-full items-center gap-1.5 rounded-full border border-cream/25 bg-cream/10 px-3 py-1.5 text-[0.625rem] font-semibold uppercase tracking-[0.18em] text-cream/95 backdrop-blur-sm sm:gap-2 sm:px-4 sm:text-[0.7rem] sm:tracking-[0.22em]">
          <Heart
            className="h-3 w-3 shrink-0 fill-current opacity-80"
            strokeWidth={1.5}
          />
          Nişan Davetiyesi
        </span>

        <h1 className="font-serif text-hero mt-5 font-semibold tracking-tight sm:mt-6">
          Büşra{" "}
          <span className="inline-block font-normal italic text-cream/75">
            &
          </span>{" "}
          Ramazan
        </h1>

        <div className="mx-auto mt-5 h-px w-12 bg-cream/30 sm:mt-6 sm:w-16" aria-hidden />

        <p className="mx-auto mt-5 max-w-[22rem] font-serif text-base italic leading-relaxed text-cream/90 sm:mt-6 sm:max-w-md sm:text-xl">
          &ldquo;Bu mutlu günümüzde sizleri de aramızda görmekten onur
          duyarız.&rdquo;
        </p>
      </motion.div>
    </header>
  );
}
