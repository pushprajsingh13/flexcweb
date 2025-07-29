import { Header } from "@/components/Header";
import { HeroSection } from "@/components/HeroSection";
import { ServicesGrid } from "@/components/ServicesGrid";
import { DigitalOfferingsSection } from "@/components/DigitalOfferingsSection";
import { WhyChooseSection } from "@/components/WhyChooseSection";
import { AIToolsSection } from "@/components/AIToolsSection";
import { TechStats } from "@/components/TechStats";
import { ProcessSection } from "@/components/ProcessSection";
import { CTASection } from "@/components/CTASection";

const Index = () => {
  return (
    <div className="min-h-screen bg-background">
      <Header />
      <HeroSection />
      <ServicesGrid />
      <DigitalOfferingsSection />
      <WhyChooseSection />
      <AIToolsSection />
      <TechStats />
      {/*<ProcessSection />*/}
      <CTASection />
    </div>
  );
};

export default Index;
