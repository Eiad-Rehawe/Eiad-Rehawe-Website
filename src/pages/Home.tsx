import { Hero } from "@/sections/Hero";
import { TrustStrip } from "@/sections/TrustStrip";
import { ClientProblems } from "@/sections/ClientProblems";
import { Services } from "@/sections/Services";
import { WhyWorkWithMe } from "@/sections/WhyWorkWithMe";
import { SelectedWork } from "@/sections/SelectedWork";
import { Technology } from "@/sections/Technology";
import { EngineeringPipeline } from "@/sections/EngineeringPipeline";
import { Process } from "@/sections/Process";
import { About } from "@/sections/About";
import { SocialProof } from "@/sections/SocialProof";
import { FinalCTA } from "@/sections/FinalCTA";

export function Home() {
  return (
    <>
      <Hero />
      <TrustStrip />
      <ClientProblems />
      <Services />
      <WhyWorkWithMe />
      <SelectedWork />
      <Technology />
      <EngineeringPipeline />
      <Process />
      <About />
      <SocialProof />
      <FinalCTA />
    </>
  );
}
