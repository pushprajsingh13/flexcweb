import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { 
  Brain,
  Eye,
  MessageSquare,
  BarChart3,
  FileText,
  Camera,
  ArrowRight
} from "lucide-react";
import mlAlgorithms from "@/assets/ml-algorithms.jpg";
import aiNeuralHero from "@/assets/ai-neural-hero.jpg";
import automation from "@/assets/automation.jpg";

const aiTools = [
  {
    icon: Brain,
    title: "Machine Learning Engine",
    description: "Advanced neural networks for predictive analytics and pattern recognition with real-time processing capabilities.",
    features: ["Deep Learning", "Real-time Analytics", "Pattern Recognition"],
    image: mlAlgorithms,
    category: "Core AI"
  },
  {
    icon: Eye,
    title: "Computer Vision Suite",
    description: "Comprehensive image and video analysis tools for object detection, facial recognition, and visual inspection.",
    features: ["Object Detection", "Facial Recognition", "Quality Inspection"],
    image: aiNeuralHero,
    category: "Vision AI"
  },
  {
    icon: MessageSquare,
    title: "Natural Language Processing",
    description: "Advanced text analysis, sentiment detection, and conversational AI for intelligent communication.",
    features: ["Text Analysis", "Sentiment Detection", "Chatbot Engine"],
    image: automation,
    category: "Language AI"
  },
  {
    icon: BarChart3,
    title: "Predictive Analytics",
    description: "Forecast trends and outcomes using advanced statistical models and machine learning algorithms.",
    features: ["Trend Forecasting", "Risk Assessment", "Business Intelligence"],
    image: mlAlgorithms,
    category: "Analytics"
  },
  {
    icon: FileText,
    title: "Document Intelligence",
    description: "Extract insights from documents with OCR, data extraction, and intelligent document processing.",
    features: ["OCR Technology", "Data Extraction", "Document Classification"],
    image: aiNeuralHero,
    category: "Document AI"
  },
  {
    icon: Camera,
    title: "Media Analysis Platform",
    description: "Analyze images, videos, and audio content for content moderation and media intelligence.",
    features: ["Content Moderation", "Media Processing", "Audio Analysis"],
    image: automation,
    category: "Media AI"
  }
];


export const AIToolsSection = () => {
      const scrollToSection = (href: string) => {
      const elementId = href.startsWith("#") ? href.slice(1) : href;
      const element = document.getElementById(elementId);

      if (element) {
        const headerOffset = 80; 
        const elementPosition = element.getBoundingClientRect().top + window.pageYOffset;
        const offsetPosition = elementPosition - headerOffset;

        window.scrollTo({
          top: offsetPosition,
          behavior: "smooth",
        });
      }
    };

  return (
    <section id="ai-tools" className="py-24 relative">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <Badge className="bg-primary/10 text-primary border-primary/20 px-4 py-2 mb-4">
            AI Tools Arsenal
          </Badge>
          <h2 className="text-4xl lg:text-6xl font-bold mb-6">
            <span className="bg-gradient-professional bg-clip-text text-transparent">
              Comprehensive AI Tools
            </span>
            <br />
            <span className="text-foreground">For Every Business Need</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Discover our complete suite of AI-powered tools designed to automate processes, 
            enhance decision-making, and drive innovation across your organization.
          </p>
        </div>

        <div className="space-y-16">
          {aiTools.map((tool, index) => (
            <Card key={index} className="group hover:shadow-elevated transition-all duration-300 overflow-hidden">
              <div className={`lg:flex items-center ${index % 2 === 1 ? 'lg:flex-row-reverse' : ''}`}>
                {/* Content Side */}
                <div className="lg:w-1/2 p-8 lg:p-12 flex flex-col justify-center">
                  <div className="space-y-6">
                    <div className="flex items-center gap-4">
                      <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center">
                        <tool.icon className="w-6 h-6 text-primary" />
                      </div>
                      <Badge variant="outline" className="text-xs">
                        {tool.category}
                      </Badge>
                    </div>
                    
                    <div className="space-y-4">
                      <h3 className="text-2xl lg:text-3xl font-bold text-foreground group-hover:text-primary transition-colors">
                        {tool.title}
                      </h3>
                      <p className="text-muted-foreground text-lg leading-relaxed">
                        {tool.description}
                      </p>
                    </div>
                    
                    <div className="space-y-3">
                      <h4 className="text-sm font-semibold text-foreground">Key Capabilities:</h4>
                      <div className="flex flex-wrap gap-2">
                        {tool.features.map((feature, featureIndex) => (
                          <Badge 
                            key={featureIndex}
                            variant="outline" 
                            className="text-xs border-border/30 hover:border-primary/50 transition-colors"
                          >
                            {feature}
                          </Badge>
                        ))}
                      </div>
                    </div>
                    <a className="mt-6 inline-block"  onClick={(e) => {
                        e.preventDefault(); 
                        scrollToSection("#contact");
                      }}>
                     <Button className="w-fit group/btn">
                        Request Demo
                        <ArrowRight className="w-4 h-4 ml-2 group-hover/btn:translate-x-1 transition-transform" />
                      </Button>
                    </a>
                   
                  </div>
                </div>
                
                {/* Image Side */}
                <div className="lg:w-1/2 relative overflow-hidden">
                  <div className="absolute inset-0 bg-gradient-to-t from-background/20 to-transparent z-10"></div>
                  <img 
                    src={tool.image}
                    alt={tool.title}
                    className="w-full h-80 lg:h-96 object-cover group-hover:scale-105 transition-transform duration-500 rounded-lg lg:rounded-none"
                  />
                  <div className="absolute top-6 right-6 z-20">
                    <div className="w-3 h-3 rounded-full bg-green-400 animate-pulse"></div>
                  </div>
                </div>
              </div>
            </Card>
          ))}
        </div>

        <div className="mt-16 text-center">
          <Card className="inline-block bg-gradient-surface border-border/50">
            <CardContent className="p-8">
              <div className="flex items-center gap-6">
                <div className="text-center">
                  <div className="text-2xl font-bold text-primary mb-1">15+</div>
                  <div className="text-sm text-muted-foreground">AI Tools</div>
                </div>
                <div className="w-px h-8 bg-border"></div>
                <div className="text-center">
                  <div className="text-2xl font-bold text-secondary mb-1">1M+</div>
                  <div className="text-sm text-muted-foreground">API Calls/Day</div>
                </div>
                <div className="w-px h-8 bg-border"></div>
                <div className="text-center">
                  <div className="text-2xl font-bold text-accent mb-1">80-90%</div>
                  <div className="text-sm text-muted-foreground">Accuracy Rate</div>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  );
};