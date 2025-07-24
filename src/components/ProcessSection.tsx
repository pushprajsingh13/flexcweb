import { Badge } from "@/components/ui/badge";
import { Card, CardContent } from "@/components/ui/card";
import { 
  Search, 
  Lightbulb, 
  Code, 
  Rocket, 
  BarChart3, 
  RefreshCw,
  ArrowRight 
} from "lucide-react";

const processSteps = [
  {
    icon: Search,
    title: "Discovery & Analysis",
    description: "We analyze your business requirements and identify AI opportunities",
    details: [
      "Business process audit",
      "Data assessment",
      "ROI analysis",
      "Technology roadmap"
    ],
    color: "primary"
  },
  {
    icon: Lightbulb,
    title: "Strategy & Planning",
    description: "Develop comprehensive AI strategy aligned with your business goals",
    details: [
      "Solution architecture",
      "Implementation timeline",
      "Resource planning",
      "Risk assessment"
    ],
    color: "accent"
  },
  {
    icon: Code,
    title: "Development & Training",
    description: "Build and train custom AI models using cutting-edge technology",
    details: [
      "Model development",
      "Data preprocessing",
      "Algorithm optimization",
      "Quality assurance"
    ],
    color: "secondary"
  },
  {
    icon: Rocket,
    title: "Deployment & Integration",
    description: "Seamlessly integrate AI solutions into your existing infrastructure",
    details: [
      "Cloud deployment",
      "System integration",
      "Performance testing",
      "User training"
    ],
    color: "primary"
  },
  {
    icon: BarChart3,
    title: "Monitoring & Analytics",
    description: "Continuous monitoring and performance optimization of AI systems",
    details: [
      "Real-time monitoring",
      "Performance metrics",
      "Anomaly detection",
      "Automated reporting"
    ],
    color: "accent"
  },
  {
    icon: RefreshCw,
    title: "Optimization & Scale",
    description: "Ongoing optimization and scaling based on performance insights",
    details: [
      "Model refinement",
      "Scalability planning",
      "Feature updates",
      "Continuous improvement"
    ],
    color: "secondary"
  }
];

export const ProcessSection = () => {
  return (
    <section id="process" className="py-24 relative">
      {/* Background Pattern */}
      <div className="absolute inset-0 circuit-bg opacity-10"></div>
      
      <div className="container mx-auto px-6 relative z-10">
        <div className="text-center mb-16">
          <Badge className="cyber-glow bg-secondary/20 text-secondary border-secondary/30 px-4 py-2 mb-4">
            <RefreshCw className="w-4 h-4 mr-2" />
            Our Process
          </Badge>
          <h2 className="text-4xl lg:text-5xl font-bold mb-6">
            <span className="bg-gradient-to-r from-secondary via-accent to-primary bg-clip-text text-transparent">
              Systematic Approach
            </span>
            <br />
            <span className="text-foreground">to AI Implementation</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Our proven 6-step methodology ensures successful AI implementation 
            with measurable results and seamless integration.
          </p>
        </div>

        {/* Process Timeline */}
        <div className="relative">
          {/* Central Timeline Line */}
          <div className="hidden lg:block absolute left-1/2 transform -translate-x-1/2 w-1 h-full bg-gradient-to-b from-primary via-accent to-secondary opacity-30 rounded-full"></div>
          
          <div className="space-y-16">
            {processSteps.map((step, index) => (
              <div key={step.title} className="relative">
                {/* Timeline Connector */}
                <div className="hidden lg:block absolute left-1/2 transform -translate-x-1/2 w-4 h-4 rounded-full bg-background border-4 border-primary cyber-glow"></div>
                
                <div className={`grid lg:grid-cols-2 gap-8 items-center ${
                  index % 2 === 0 ? '' : 'lg:direction-rtl'
                }`}>
                  {/* Content Card */}
                  <Card className={`glass-card hover:cyber-glow transition-all duration-500 ${
                    index % 2 === 0 ? 'lg:ml-8' : 'lg:mr-8 lg:text-right'
                  }`}>
                    <CardContent className="p-8 space-y-6">
                      <div className={`flex items-center gap-4 ${
                        index % 2 === 0 ? '' : 'lg:flex-row-reverse'
                      }`}>
                        <div className={`p-4 rounded-xl bg-${step.color}/20 cyber-glow`}>
                          <step.icon className={`w-8 h-8 text-${step.color}`} />
                        </div>
                        <div>
                          <Badge className={`bg-${step.color}/20 text-${step.color} border-${step.color}/30 mb-2`}>
                            Step {index + 1}
                          </Badge>
                          <h3 className="text-2xl font-bold text-foreground">
                            {step.title}
                          </h3>
                        </div>
                      </div>
                      
                      <p className="text-muted-foreground text-lg leading-relaxed">
                        {step.description}
                      </p>
                      
                      <div className="space-y-3">
                        <h4 className="text-sm font-semibold text-foreground">Key Activities:</h4>
                        <div className={`grid grid-cols-2 gap-2 ${
                          index % 2 === 0 ? '' : 'lg:text-right'
                        }`}>
                          {step.details.map((detail) => (
                            <div key={detail} className="flex items-center gap-2 text-sm text-muted-foreground">
                              <ArrowRight className="w-3 h-3 text-primary" />
                              <span>{detail}</span>
                            </div>
                          ))}
                        </div>
                      </div>
                    </CardContent>
                  </Card>
                  
                  {/* Visual Element */}
                  <div className={`${index % 2 === 0 ? 'lg:mr-8' : 'lg:ml-8'}`}>
                    <div className="glass-card p-8 rounded-2xl neural-pulse float-animation">
                      <div className="w-24 h-24 mx-auto rounded-full bg-gradient-to-br from-primary/20 via-accent/20 to-secondary/20 flex items-center justify-center">
                        <step.icon className={`w-12 h-12 text-${step.color}`} />
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};