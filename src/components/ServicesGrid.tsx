import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { 
  Brain, 
  Cloud, 
  Shield, 
  Cog, 
  Link, 
  Database,
  Cpu,
  Network,
  Bot,
  Zap,
  ArrowUpRight
} from "lucide-react";
import cloudDatacenter from "@/assets/cloud-datacenter.jpg";
import mlAlgorithms from "@/assets/ml-algorithms.jpg";
import cybersecurity from "@/assets/cybersecurity.jpg";
import automation from "@/assets/automation.jpg";
import blockchain from "@/assets/blockchain.jpg";

const services = [
  {
    category: "Artificial Intelligence",
    icon: Brain,
    services: [
      {
        title: "AI Solutions",
        description: "Harness the power of advanced AI platforms — including LLMs and agentic models — to automate processes, create intelligent conversational interfaces, and drive business insights.",
        features: ["Deep Learning", "Neural Networks", "Computer Vision", "NLP Processing"],
      },
    ],
  },
  {
    category: "Data Engineering & Analytics",
    icon: Database,
    services: [
      {
        title: "Data Engineering & Analytics",
        description:
          "Build robust, scalable data architectures and pipelines. Our analytics solutions enable better decisions through real-time insights and powerful data visualizations.",
        features: ["24/7 Support", "Multi-language", "Context Aware", "Custom Training"],
      },
    ],
  },
  {
    category: "Enterprise Platforms",
    icon: Cloud,
    services: [
      {
        title: "Enterprise Platform Implementation",
        description: "Accelerate digital transformation through implementation of enterprise-grade platforms like",
        features: ["Salesforce", "E42.ai", "Nvidia Omniverse", "Robotic Process Automation (RPA)","DigiUsher (Cloud & AI FinOps)"],
      },
    ],
  },
  {
    category: "Application Development",
    icon: Cog,
    services: [
      {
        title: "Full Stack Web & App Development",
        description: "We develop responsive, modern web and mobile applications using today’s leading frameworks — ensuring performance, usability, and scalability.",
        features: ["Real-time Data", "Custom Dashboards", "Risk Assessment", "Performance Metrics"],
      },
    ],
  },
];


export const ServicesGrid = () => {
  return (
    <section id="services" className="py-24 relative">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <Badge className="cyber-glow bg-primary/20 text-primary border-primary/30 px-4 py-2 mb-4">
            <Cpu className="w-4 h-4 mr-2" />
            Our Services
          </Badge>
          <h2 className="text-4xl lg:text-6xl font-bold mb-6">
            <span className="bg-gradient-to-r from-primary via-accent to-secondary bg-clip-text text-transparent">
              Cutting-Edge
            </span>
            <br />
            IT Services
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            At FlexC, every engagement is driven by a product-centric approach. Our teams engineer scalable, high-impact solutions — from strategy to execution — ensuring value creation, agility, and long-term performance.
          </p>
        </div>

        {/* All Services in Single Grid */}
       <div className="grid md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8">
        {services.map((category) =>
          category.services.map((service) => (
            <Card
              key={`${category.category}-${service.title}`}
              className="glass-card hover:cyber-glow transition-all duration-300 group"
            >
              <CardHeader className="space-y-4">
                <div className="flex items-center gap-3 mb-2">
                  <div className="p-2 rounded-lg bg-gradient-to-br from-primary/20 to-secondary/20">
                    <category.icon className="w-6 h-6 text-primary" />
                  </div>
                  <Badge variant="outline" className="text-xs">
                    {category.category}
                  </Badge>
                </div>

                <div className="flex items-start justify-between">
                  <CardTitle className="text-xl">
                    {service.title}
                  </CardTitle>
                  {/* <ArrowUpRight className="w-5 h-5 text-muted-foreground group-hover:text-primary transition-colors" /> */}
                </div>

                <CardDescription className="text-muted-foreground">
                  {service.description}
                </CardDescription>
              </CardHeader>

              <CardContent className="space-y-6">
                <div className="space-y-3">
                  <h4 className="text-sm font-semibold text-foreground">Key Features:</h4>
                  <div className="grid grid-cols-1 gap-2">
                    {service.features.slice(0, 5).map((feature) => (
                      <Badge
                        key={feature}
                        variant="outline"
                        className="text-xs border-border/30 hover:border-primary/50 transition-colors justify-start"
                      >
                        {feature}
                      </Badge>
                    ))}
                  </div>
                </div>
              </CardContent>
            </Card>
          ))
        )}
      </div>

      </div>
    </section>
  );
};