"use celient"
import Hero from "../components/layouts/hero";
// ANIMATION FROM FRAMER MOTION
import { AnimatePresence } from "framer-motion";


export default function Home() {
  return (
    
      <main className="bg-white" >
        <AnimatePresence mode="wait" initial={false}>
      
        <Hero/>
          
        </AnimatePresence>
      </main>
  
  );
}
