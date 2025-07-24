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
    color: "primary",
    image: mlAlgorithms,
    services: [
      {
        title: "Machine Learning Solutions",
        description: "Custom ML models for predictive analytics, pattern recognition, and intelligent automation",
        features: ["Deep Learning", "Neural Networks", "Computer Vision", "NLP Processing"],
        price: "From $5,000/month"
      },
      {
        title: "AI Chatbots & Assistants",
        description: "Intelligent conversational AI powered by advanced language models",
        features: ["24/7 Support", "Multi-language", "Context Aware", "Custom Training"],
        price: "From $2,500/month"
      },
      {
        title: "Predictive Analytics",
        description: "Advanced forecasting and trend analysis using AI algorithms",
        features: ["Real-time Data", "Custom Dashboards", "Risk Assessment", "Performance Metrics"],
        price: "From $3,500/month"
      }
    ]
  },
  {
    category: "Cloud Computing",
    icon: Cloud,
    color: "secondary",
    image: cloudDatacenter,
    services: [
      {
        title: "Cloud Migration Services",
        description: "Seamless migration of your infrastructure to cloud platforms",
        features: ["AWS", "Azure", "Google Cloud", "Multi-cloud Strategy"],
        price: "From $10,000/project"
      },
      {
        title: "Serverless Architecture",
        description: "Build scalable applications with serverless computing",
        features: ["Auto-scaling", "Pay-per-use", "High Availability", "Microservices"],
        price: "From $4,000/month"
      },
      {
        title: "Cloud Security",
        description: "Comprehensive security solutions for cloud environments",
        features: ["Identity Management", "Data Encryption", "Compliance", "Monitoring"],
        price: "From $6,000/month"
      }
    ]
  },
  {
    category: "Cybersecurity",
    icon: Shield,
    color: "accent",
    image: cybersecurity,
    services: [
      {
        title: "AI-Powered Threat Detection",
        description: "Advanced threat detection using machine learning algorithms",
        features: ["Real-time Monitoring", "Behavioral Analysis", "Automated Response", "Threat Intelligence"],
        price: "From $8,000/month"
      },
      {
        title: "Zero Trust Architecture",
        description: "Implement comprehensive zero trust security framework",
        features: ["Identity Verification", "Device Security", "Network Segmentation", "Continuous Monitoring"],
        price: "From $12,000/project"
      },
      {
        title: "Compliance & Auditing",
        description: "Ensure regulatory compliance with automated auditing",
        features: ["GDPR", "HIPAA", "SOC 2", "Automated Reports"],
        price: "From $5,000/month"
      }
    ]
  },
  {
    category: "Process Automation",
    icon: Cog,
    color: "primary",
    image: automation,
    services: [
      {
        title: "Robotic Process Automation",
        description: "Automate repetitive tasks with intelligent bots",
        features: ["Workflow Automation", "Document Processing", "Data Entry", "Task Scheduling"],
        price: "From $3,000/month"
      },
      {
        title: "AI-Driven Analytics",
        description: "Automated data analysis and insight generation",
        features: ["Data Mining", "Pattern Recognition", "Automated Reporting", "Business Intelligence"],
        price: "From $4,500/month"
      },
      {
        title: "DevOps Automation",
        description: "Streamline development and deployment processes",
        features: ["CI/CD Pipelines", "Infrastructure as Code", "Monitoring", "Auto-scaling"],
        price: "From $6,500/month"
      }
    ]
  },
  {
    category: "Blockchain & Web3",
    icon: Link,
    color: "secondary",
    image: blockchain,
    services: [
      {
        title: "Smart Contract Development",
        description: "Custom smart contracts for decentralized applications",
        features: ["Ethereum", "Polygon", "Solana", "Security Audits"],
        price: "From $15,000/project"
      },
      {
        title: "DeFi Solutions",
        description: "Decentralized finance platforms and protocols",
        features: ["Lending Protocols", "DEX Development", "Yield Farming", "Tokenization"],
        price: "From $25,000/project"
      },
      {
        title: "NFT Marketplaces",
        description: "End-to-end NFT marketplace development",
        features: ["Minting Platform", "Trading Features", "Royalty System", "Multi-chain Support"],
        price: "From $20,000/project"
      }
    ]
  }
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
            Technology Solutions
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Explore our comprehensive suite of AI and cloud services designed to transform 
            your business operations and drive unprecedented growth.
          </p>
        </div>

        {/* All Services in Single Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8">
          {services.map((category) => 
            category.services.map((service, serviceIndex) => (
              <Card key={`${category.category}-${service.title}`} className="glass-card hover:cyber-glow transition-all duration-300 group">
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
                    <CardTitle className="text-xl group-hover:text-primary transition-colors">
                      {service.title}
                    </CardTitle>
                    <ArrowUpRight className="w-5 h-5 text-muted-foreground group-hover:text-primary transition-colors" />
                  </div>
                  
                  <CardDescription className="text-muted-foreground">
                    {service.description}
                  </CardDescription>
                </CardHeader>
                
                <CardContent className="space-y-6">
                  <div className="space-y-3">
                    <h4 className="text-sm font-semibold text-foreground">Key Features:</h4>
                    <div className="grid grid-cols-1 gap-2">
                      {service.features.slice(0, 3).map((feature) => (
                        <Badge 
                          key={feature} 
                          variant="outline" 
                          className="text-xs border-border/30 hover:border-primary/50 transition-colors justify-start"
                        >
                          {feature}
                        </Badge>
                      ))}
                      {service.features.length > 3 && (
                        <Badge variant="outline" className="text-xs opacity-50">
                          +{service.features.length - 3} more
                        </Badge>
                      )}
                    </div>
                  </div>
                  
                  <div className="pt-4 border-t border-border/20">
                    <div className="flex items-center justify-between">
                      <span className="text-lg font-bold text-primary">{service.price}</span>
                      <Button size="sm" className="neural-pulse">
                        Get Quote
                      </Button>
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