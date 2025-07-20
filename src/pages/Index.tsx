import { HeroSection } from "@/components/HeroSection";
import { ServicesGrid } from "@/components/ServicesGrid";
import { TechStats } from "@/components/TechStats";
import { ProcessSection } from "@/components/ProcessSection";
import { CTASection } from "@/components/CTASection";

const Index = () => {
  return (
    <div className="min-h-screen bg-background">
      <HeroSection />
      <ServicesGrid />
      <TechStats />
      <ProcessSection />
      <CTASection />
    </div>
  );
};

export default Index;
