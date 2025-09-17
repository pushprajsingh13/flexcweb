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
import { BsCurrencyDollar } from "react-icons/bs";
import { GoPeople } from "react-icons/go";
import { TbCloudDollar } from "react-icons/tb";

const reasons = [
  {
    icon: BsCurrencyDollar,
    title: "Cost Visibility",
    description: "Analyze and reduce cloud costs.",
    color: "primary"
  },
  {
    icon: Shield,
    title: "Enterprise Security",
    description: "Military-grade security protocols protecting your data and AI models at every level.",
    color: "secondary"
  },
  {
    icon: TbCloudDollar,
    title: "Cloud Optimization",
    description: "Optimize cloud architecture.",
    color: "accent"
  },
  {
    icon: Lightbulb,
    title: "Proven ROI",
    description: "Maximize ROI on AI/ML workloads.",
    color: "primary"
  },
  {
    icon: GoPeople,
    title: "Business Alignment",
    description: "Drive governance and efficiency across multicloud setups.",
    color: "secondary"
  },
  {
    icon: Heart,
    title: "Lightning Fast Implementation",
    description: "Get your FinOps AI solutions deployed in weeks, not months, with our streamlined processes.",
    color: "accent"
  }
];

export const DigitalOffering = () => {
  return (
    <section id="why-choose" className="py-24 relative bg-gradient-subtle">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <Badge className="bg-primary/10 text-primary border-primary/20 px-4 py-2 mb-4">
            Cloud Operations Delivered
          </Badge>
          <h2 className="text-4xl lg:text-6xl font-bold mb-6">
            <span className="bg-gradient-professional bg-clip-text text-transparent">
              Why Flex
            </span>
            <br />
            <span className="text-foreground">Strategic Partnership: DigiUsher + FlexC Cloud and AI FinOps Reimagined</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            As an implementation and reseller partner of DigiUsher, FlexC delivers end-to-end FinOps solutions for cloud and AI workloads. Our joint offering helps enterprises:
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
              <div className="text-3xl font-bold text-primary mb-1">80%</div>
              <div className="text-sm text-muted-foreground">Efficiency</div>
            </div>
            <div className="w-px h-12 bg-border"></div>
            <div className="text-center">
              <div className="text-3xl font-bold text-secondary mb-1">25%</div>
              <div className="text-sm text-muted-foreground">Cost Savings</div>
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