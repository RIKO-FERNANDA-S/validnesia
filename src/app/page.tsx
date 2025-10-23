import { Metadata } from "next";
import Hero from "./components/layouts/hero";

export const metadata: Metadata = {
  title: "Validnesia",
  description: "",
};

export default function Home() {
  return (
      <main className="bg-white" >
        <Hero></Hero>
      </main>
  
  );
}
