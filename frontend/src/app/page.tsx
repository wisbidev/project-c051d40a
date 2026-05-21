import HeroSection from "@/components/HeroSection";
import PipelineSection from "@/components/PipelineSection";
import AgentsSection from "@/components/AgentsSection";
import FeaturesSection from "@/components/FeaturesSection";
import TechStackSection from "@/components/TechStackSection";

export default function Home() {
  return (
    <main>
      <HeroSection />
      <PipelineSection />
      <AgentsSection />
      <FeaturesSection />
      <TechStackSection />
    </main>
  );
}
