import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { 
  CheckCircle, 
  ArrowRight,
  Target,
  Users,
  Clock,
  Award
} from "lucide-react";

const offerings = [
  {
    icon: Target,
    title: "Proven Track Record",
    description: "Over 500 successful AI implementations with measurable ROI for our clients."
  },
  {
    icon: Users,
    title: "Expert Team",
    description: "PhD-level AI researchers and experienced engineers working on your projects."
  },
  {
    icon: Clock,
    title: "Rapid Deployment",
    description: "Fast implementation with our proven methodologies and pre-built frameworks."
  },
  {
    icon: Award,
    title: "Industry Recognition",
    description: "Award-winning solutions recognized by leading technology organizations."
  }
];

const benefits = [
  "End-to-end AI solution development",
  "24/7 support and maintenance", 
  "Scalable and secure infrastructure",
  "Custom training and knowledge transfer"
];

export const DigitalOfferingsSection = () => {
  return (
    <section className="py-24 relative bg-gradient-to-r from-secondary to-accent">
      <div className="container mx-auto px-6">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Left Content */}
          <div className="space-y-8">
            <Badge className="bg-white/20 text-white border-white/30 px-4 py-2">
              Why Choose TechFlow
            </Badge>
            
            <div className="space-y-6">
              <h2 className="text-4xl lg:text-5xl font-bold text-white leading-tight">
                Your Trusted AI Partner for
                <br />
                <span className="text-white/90">Digital Transformation</span>
              </h2>
              
              <p className="text-xl text-white/80 leading-relaxed">
                We don't just deliver AI solutions – we partner with you to ensure long-term 
                success and continuous innovation in your digital journey.
              </p>
            </div>
            
            <div className="space-y-4">
              {benefits.map((benefit, index) => (
                <div key={index} className="flex items-center gap-3">
                  <CheckCircle className="w-6 h-6 text-white flex-shrink-0" />
                  <span className="text-white/90 text-lg">{benefit}</span>
                </div>
              ))}
            </div>
            
            <Button 
              size="lg" 
              className="bg-white text-secondary hover:bg-white/90 group"
            >
              Start Your Project
              <ArrowRight className="w-5 h-5 ml-2 group-hover:translate-x-1 transition-transform" />
            </Button>
          </div>
          
          {/* Right Content - Cards Grid */}
          <div className="grid grid-cols-2 gap-6">
            {offerings.map((offering, index) => (
              <Card key={index} className="bg-white/10 backdrop-blur-sm border-white/20 hover:bg-white/20 transition-all duration-300">
                <CardContent className="p-6 space-y-4">
                  <div className="w-12 h-12 rounded-lg bg-white/20 flex items-center justify-center">
                    <offering.icon className="w-6 h-6 text-white" />
                  </div>
                  <div className="space-y-2">
                    <h3 className="text-xl font-semibold text-white">
                      {offering.title}
                    </h3>
                    <p className="text-white/70 text-sm leading-relaxed">
                      {offering.description}
                    </p>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};