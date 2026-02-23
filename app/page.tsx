import { SkipLink } from "@/components/SkipLink";
import { Header } from "@/components/Header";
import { Hero } from "@/components/Hero";
import { Problem } from "@/components/Problem";
import { Solution } from "@/components/Solution";
import { HowItWorks } from "@/components/HowItWorks";
import { WhyNow } from "@/components/WhyNow";
import { UseCases } from "@/components/UseCases";
import { Progress } from "@/components/Progress";
import { Credibility } from "@/components/Credibility";
import { Footer } from "@/components/Footer";

export default function Home() {
  return (
    <>
      <SkipLink />
      <Header />
      <main id="main" className="min-h-screen">
        <Hero />
        <Problem />
        <Solution />
        <HowItWorks />
        <WhyNow />
        <UseCases />
        <Progress />
        <Credibility />
        <Footer />
      </main>
    </>
  );
}
