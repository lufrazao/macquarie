import { SkipLink } from "@/components/SkipLink";
import { Header } from "@/components/Header";
import { Hero } from "@/components/Hero";
import { WhoItsFor } from "@/components/WhoItsFor";
import { Solution } from "@/components/Solution";
import { HowItWorks } from "@/components/HowItWorks";
import { UseCases } from "@/components/UseCases";
import { FAQ } from "@/components/FAQ";
import { Footer } from "@/components/Footer";

export default function Home() {
  return (
    <>
      <SkipLink />
      <Header />
      <main id="main" className="min-h-screen">
        <Hero />
        <WhoItsFor />
        <Solution />
        <HowItWorks />
        <UseCases />
        <FAQ />
        <Footer />
      </main>
    </>
  );
}
