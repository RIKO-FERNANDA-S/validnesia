"use celient";
import Hero from "../components/layouts/hero";
// ANIMATION FROM FRAMER MOTION
import { AnimatePresence } from "framer-motion";

// Next auth
import { SessionProvider } from "next-auth/react";

export default function Home() {
  return (
    <SessionProvider>
      <main className="bg-white">
        <AnimatePresence mode="wait" initial={false}>
          <Hero />
        </AnimatePresence>
      </main>
    </SessionProvider>
  );
}
