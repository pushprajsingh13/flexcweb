import { Header } from "@/components/Header";
import { HeroSection } from "@/components/HeroSection";
import { ServicesGrid } from "@/components/ServicesGrid";
import { DigitalOffering } from "@/components/DigitalOffering";
import { AIToolsSection } from "@/components/AIToolsSection";
import { TechStats } from "@/components/TechStats";
import { ProcessSection } from "@/components/ProcessSection";
import { CTASection } from "@/components/CTASection";
import { WhyChooseUs } from "@/components/WhyChooseUs";
import Footer from "@/components/Footer";

const Index = () => {
  return (
    <div className="min-h-screen bg-background">
      <Header />
      <HeroSection />
      <ServicesGrid />
      <WhyChooseUs />
      <DigitalOffering />
      <AIToolsSection />
      <TechStats />
      <ProcessSection />
      <CTASection />
      <Footer />
    </div>
  );
};

export default Index;
