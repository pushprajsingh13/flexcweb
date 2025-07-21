import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { 
  Zap,
  Shield,
  Globe,
  Lightbulb,
  TrendingUp,
  Heart
} from "lucide-react";

const reasons = [
  {
    icon: Zap,
    title: "Lightning Fast Implementation",
    description: "Get your AI solutions deployed in weeks, not months, with our streamlined processes.",
    color: "primary"
  },
  {
    icon: Shield,
    title: "Enterprise Security",
    description: "Military-grade security protocols protecting your data and AI models at every level.",
    color: "secondary"
  },
  {
    icon: Globe,
    title: "Global Scalability",
    description: "Solutions that scale seamlessly across regions and handle millions of operations.",
    color: "accent"
  },
  {
    icon: Lightbulb,
    title: "Innovation First",
    description: "Cutting-edge research and development keeping you ahead of the competition.",
    color: "primary"
  },
  {
    icon: TrendingUp,
    title: "Proven ROI",
    description: "Average 300% ROI within the first year of AI implementation for our clients.",
    color: "secondary"
  },
  {
    icon: Heart,
    title: "24/7 Support",
    description: "Round-the-clock technical support and maintenance for uninterrupted operations.",
    color: "accent"
  }
];

export const WhyChooseSection = () => {
  return (
    <section className="py-24 relative bg-gradient-subtle">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <Badge className="bg-primary/10 text-primary border-primary/20 px-4 py-2 mb-4">
            Why Choose Us
          </Badge>
          <h2 className="text-4xl lg:text-6xl font-bold mb-6">
            <span className="bg-gradient-professional bg-clip-text text-transparent">
              Why Flex
            </span>
            <br />
            <span className="text-foreground">With Our Platform</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Experience the difference with our innovative approach to AI and cloud solutions. 
            We deliver exceptional results that drive your business forward.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {reasons.map((reason, index) => (
            <Card key={index} className="group hover:shadow-elevated transition-all duration-300 border-border/50">
              <CardContent className="p-8 space-y-6">
                <div className={`w-16 h-16 rounded-2xl bg-${reason.color}/10 flex items-center justify-center group-hover:scale-110 transition-transform duration-300`}>
                  <reason.icon className={`w-8 h-8 text-${reason.color}`} />
                </div>
                
                <div className="space-y-3">
                  <h3 className="text-xl font-semibold text-foreground group-hover:text-primary transition-colors">
                    {reason.title}
                  </h3>
                  <p className="text-muted-foreground leading-relaxed">
                    {reason.description}
                  </p>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        <div className="mt-16 text-center">
          <div className="inline-flex items-center gap-8 p-8 rounded-2xl bg-gradient-surface border border-border/50">
            <div className="text-center">
              <div className="text-3xl font-bold text-primary mb-1">500+</div>
              <div className="text-sm text-muted-foreground">Projects Delivered</div>
            </div>
            <div className="w-px h-12 bg-border"></div>
            <div className="text-center">
              <div className="text-3xl font-bold text-secondary mb-1">99.9%</div>
              <div className="text-sm text-muted-foreground">Uptime Guarantee</div>
            </div>
            <div className="w-px h-12 bg-border"></div>
            <div className="text-center">
              <div className="text-3xl font-bold text-accent mb-1">24/7</div>
              <div className="text-sm text-muted-foreground">Expert Support</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};