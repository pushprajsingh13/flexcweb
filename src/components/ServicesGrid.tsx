import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { useState } from "react";
import { ServiceDetailsModal } from "./ServiceDetailsModal";
import { 
  Brain, 
  Cloud, 
  Cog, 
  Database,
  Cpu,
  ListChecks,
  TrendingUpDown,
  Zap,
  Factory,
  TrendingUp,
  Building,
  BarChart
} from "lucide-react";
import { Shield } from "lucide-react";

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

const categories = [
  {
    icon: TrendingUp,
    tagline:"TRUST POCKET",
    title: "AI FinOps & GPU Cost Governance",
    description: "Stop bleeding budget on unoptimized LLM queries and idle compute. Take control of your AI cloud spend before it controls you.",
    color: "primary",
    details: {
      overview: "As enterprises scale from AI validation to multi-model production environments, compute architecture costs scale unpredictably. Our specialized AI FinOps service introduces systemic governance, token-level multi-tenant tracking, and deep cloud optimization infrastructure. We ensure data engineering teams maximize GPU throughput and algorithmic performance under precise fiscal controls.",
      capabilities: [
        { title: "Token-Level Tracking & Multi-Tenancy", description: "Real-time granularity mapping LLM API consumption and token volumes back to dedicated business units." },
        { title: "GPU Compute Optimization", description: "Dynamic orchestration and scheduling frameworks designed to mitigate waste and minimize idle time on high-cost infrastructure." },
        { title: "Predictive Spend Modeling", description: "Machine learning forecasting mechanisms that model inference consumption to eliminate cloud invoice anomalies." },
        { title: "Model Tiering Architectures", description: "Pragmatic tiering engines routing workloads dynamically between frontier foundational systems and highly targeted Small Language Models (SLMs)." }
      ],
      portfolio: [
        {
          title: "Featured Architecture Portfolio: Digiusher Integration",
          description: "Through our core technology partnership and deep integration with the Digiusher Cloud FinOps framework, we engineered optimized structural cloud mechanics for highly complex infrastructure environments. By establishing proactive governance, predictive cluster right-sizing, and automated idle waste deprecation, we transform speculative AI computing overhead into an engineered, predictable performance line-item with measurable cloud ROI."
        }
      ]
    }
  },
  {
    icon: Shield,
    tagline:"NEW POCKETS/BUILD",
    title: "Physical AI, Edge Computing & Digital Twins",
    description: "Bridge the gap between the digital mind and the physical world. We build edge-native architectures that power smart mobility, IoT telemetry, and real-time operational intelligence.",
    color: "secondary",
    details: {
      overview: "Bringing intelligent capabilities to edge devices mandates exceptionally low latency, highly resilient streaming infrastructure, and reliable physical-to-cloud telemetry pipelines. FlexC designs, deploys, and maintains complete operational Edge AI systems—building the frameworks required to process, interpret, and securely act on dynamic live sensor matrices directly on the field.",
      capabilities: [
        { title: "Edge Data Orchestration", description: "Building high-throughput, fault-tolerant transport layers optimized for streaming telemetry from distributed real-world endpoints." },
        { title: "On-Device Anomaly Detection", description: "Embedding mathematical processing models and diagnostic logic natively onto device chipsets for localized safety and condition-monitoring." },
        { title: "Multi-Persona Control Planes", description: "Creating dedicated B2B fleet orchestration software and highly responsive consumer-facing digital applications." },
        { title: "Digital Twins & Spatial Telemetry", description: " Engineering live-updating digital replicas of operational assets to enable predictive maintenance and proactive lifecycle modeling." }
      ],
      portfolio: [
        {
          title: "Proven Delivery: 2W EV Manufacturing Ecosystem Architecture",
          description: "FlexC acted as the core technology architect for a major electric vehicle platform. We designed and built an interconnected mobility network spanning field-level vehicle integrations, live telematics streaming, and responsive cloud services. By capturing, piping, and visualizing continuous operational telemetry—including State of Charge (SOC) and State of Health (SOH)—we established an enterprise blueprint for reliable Physical AI execution at scale."
        }
      ]
    }
  },
  {
    icon: Zap,
    tagline:"MODERNIZE / EXPANSION POCKET",
    title: "GenAI Workflow Automation & Labour-to-Tech Substitution",
    description: "Turn complex, multi-day manual workflows into minutes. We build intelligent GenAI engines that extract, analyze, and generate mission-critical enterprise data at scale",
    color: "accent",
    details: {
      overview: "Massive operational bottlenecks exist where highly skilled labor is tied up in scanning, processing, and validating voluminous legal or technical specifications. FlexC designs and integrates structured GenAI automation layers that act as specialized digital personnel, safely converting slow document review tasks into automated, high-precision software executions.",
      capabilities: [
        { title: "Intelligent Parsing Systems", description: "Structuring context-aware semantic extraction pipelines tailored to analyze dense compliance forms and heavy engineering datasheets." },
        { title: "Automated B2B Proposal Synthesis", description: "Building smart compilation frameworks that reference deep internal knowledge records to instantly generate contextual business responses." },
        { title: "Cognitive Search Systems", description: "Formulating enterprise-grade Retrieval-Augmented Generation (RAG) architectures to facilitate precise data querying across legacy document repositories." },
        { title: "Human-in-the-Loop (HITL) Controls", description: " Integrating robust validation checkpoints ensuring AI drafts undergo clear verification before final enterprise sign-off." }
      ],
      portfolio: [
        {
          title: "Proven Delivery: High-Volume Commercial RFP Automator",
          description: "To eliminate manual bottlenecks for an enterprise client handling technical inquiries, FlexC deployed a comprehensive Generative AI platform. The system ingests intensive, highly detailed commercial requests, isolates deep compliance parameters, and drafts structured, hyper-accurate business proposals. This shifted a multi-day engineering overhead process into an automated, high-velocity operational pipeline."
        }
      ]
    }
  },
  {
    icon: Factory,
    tagline:"NEW POCKETS / VERTICAL AI",
    title: "Vertical AI Factories & Domain-Specific SLMs",
    description: "Move past generic AI. We build hyper-specialized, domain-expert language models tailored to the exact taxonomy, precision, and compliance of your industry.",
    color: "primary",
    details: {
      overview: "General-purpose public artificial intelligence models fall short when navigating highly specialized industrial fields, complex mathematical parameters, and strict regulatory environments. FlexC’s Vertical AI Factory service designs, calibrates, and hosts dedicated Small Language Models (SLMs) trained explicitly on the proprietary language, internal logic, and strict operational standards of your industry vertical.",
      capabilities: [
        { title: "Targeted Weight Fine-Tuning", description: "Optimizing open-weight models (including Llama, Mistral, and specialized SLMs) utilizing your organization's internal document history and blueprints." },
        { title: "Knowledge Graph Intertwining", description: "Merging custom language reasoning capabilities directly with deterministic knowledge databases to systematically eradicate model hallucinations." },
        { title: "Technical Logic Hardening", description: "Conditioning models to flawlessly compute rigorous mathematical, procedural, and compliance parameters unique to your industry sector." },
        { title: "Isolated Private Cloud Deployments", description: " Implementing custom localized environments to ensure complete data sovereignty, total security, and data protection." }
      ],
      portfolio: [
        {
          title: "Proven Delivery: Advanced Aerospace Domain Expert",
          description: "To eliminate the factual volatility of public foundational models, FlexC engineered a dedicated Vertical AI solution for an international Aerospace Engineering organization. By tuning and training systems explicitly around aerospace taxonomies, complex technical blueprints, and rigorous aviation requirements, we created a localized domain-expert platform. The platform handles highly technical reviews with precision and flawless industrial compliance."
        }
      ]
    }
  },
  {
    icon: Building,
    tagline:"MODERNIZE / SAAS REPLACEMENT",
    title: " Intelligent SaaS Replacement & Custom Enterprise Platforms",
    description: "Outgrow the constraints of rigid, one-size-fits-all SaaS. We build high-performance, domain-specific enterprise platforms engineered for your exact operational workflows.",
    color: "secondary",
    details: {
      overview: "Standard horizontal software suites inevitably fail to capture the real-world operational nuances of high stakes, hyper-dynamic industries. FlexC custom-builds modern, AI-integrated software foundations to displace bloated legacy systems and per-seat licensing costs, giving you complete architectural control and fluid data ownership built for your precise workflow needs.",
      capabilities: [
        { title: "Bespoke Operational ERPs", description: " Architecting native platforms crafted around complex internal billing logic, material allocation, and scheduling structures." },
        { title: "Real-Time Routing & Dispatch Engines", description: "Developing intelligent predictive allocation algorithms to schedule distribution resources fluidly amid shifting conditions." },
        { title: "Unified Operations Dashboards", description: "Building performant multi-tier user interfaces connecting back-office admin teams, external vendors, and end clients." },
        { title: "Silo Defragmentation", description: "Merging disconnected legacy systems and APIs into a unified, secure, cloud native data landscape." }
      ],
      portfolio: [
        {
          title: "Case Portfolio A: Pharma Logistics & Compliance Network",
          description: "FlexC built an end-to-end B2B/B2C fulfillment network for the specialized medical sector. Replacing disconnected, off-the-shelf logistics software, this custom platform manages complex prescription dispatch tasks, tracks real-time cold-chain parameters, and automates delivery routes to guarantee absolute pharmaceutical compliance and schedule tracking."
        },
        {
          title: "Case Portfolio B: Enterprise Sports Event Management Infrastructure",
          description: "To scale past the functional limits of rigid off-the-shelf business software, FlexC engineered a unified tournament ERP for a major sports operations enterprise. The software handles tournament configurations, stadium management, operational resource assignments, and multi-tier stakeholder needs, bringing stability and operational automation to live sports environments."
        }
      ]
    }
  },
  {
    icon: BarChart,
    tagline:"NEW POCKETS / ANALYTICS",
    title: "Decision Intelligence & Advanced Data Analytics",
    description: "Move from retrospective reporting to predictive execution. We transform raw data into a competitive asset, powering high-stakes strategic choices with mathematical precision.",
    color: "accent",
    details: {
      overview: "True enterprise advantage comes from transitioning data structures away from historic charts and into proactive, analytical decision models. FlexC's Decision Intelligence practice develops advanced scoring engines, custom statistical models, and scenario simulators that screen multi-variable data points, turning latent data lakes into direct tactical guides.",
      capabilities: [
        { title: "Predictive Analytics & Metric Scoring", description: "Developing mathematical data models that process historic performance inputs to output precise trend trajectories." },
        { title: "Granular Attribute Profiling", description: "Deconstructing complex entities—whether financial instruments, organizational competencies, or talent parameters—into explicit measurable data vectors." },
        { title: "Probabilistic Scenario Simulation", description: "Building data Sandboxes allowing enterprise executives to test alternative resource plans and isolate outcomes prior to asset allocation." },
        { title: "High-Fidelity Executive Dashboards", description: "Designing crisp, highly intuitive analytical interfaces that distill heavy mathematical modeling into clean strategic execution steps" }
      ],
      portfolio: [
        {
          title: "Proven Delivery: Predictive Player Analytics & Scout Platform",
          description: "FlexC designed and built an advanced performance analytics engine to optimize talent evaluation and scouting mechanics for a premier professional pickleball league. The software analyzes deep, multi-axis player attributes and historical competitive data, outputting clear, predictive capability scores. This system allows stakeholders to make strategic personnel investments based on rigorous data science and statistical evidence."
        }
      ]
    }
  }
];

export const ServicesGrid = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [selectedService, setSelectedService] = useState<any>(null);

  const handleOpenModal = (service: any) => {
    setSelectedService({ ...service, category: service.tagline, title: service.title });
    setIsModalOpen(true);
  };

  const handleCloseModal = () => {
    setIsModalOpen(false);
    setSelectedService(null);
  };

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
              className="group hover:shadow-elevated transition-all duration-300 border-border/50 flex flex-col h-full"            >
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
            {/* service catalogue */}
              <CardContent className="space-y-6">
                <div className="space-y-3">
                  <div className="flex items-center gap-2">
                    <ListChecks className="w-4 h-4 text-muted-foreground" />
                    <h4 className="text-sm font-semibold text-foreground">Key Features:</h4>
                  </div>
                  <div className="grid grid-cols-2 gap-2">
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

      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mt-10">
        {categories.map((reason, index) => (
          <Card key={index}  className="group hover:shadow-elevated transition-all duration-300 border-border/50 flex flex-col h-full">
            <CardContent className="p-8 flex flex-col flex-1 h-full">
                      
              <div className="space-y-3">
                <div className="flex items-center gap-3 mb-2">
                  <div className="p-2 rounded-lg bg-gradient-to-br from-primary/20 to-secondary/20">
                    <reason.icon className="w-6 h-6 text-primary" />
                  </div>
                  <Badge 
                    className={`text-xs border-border/30
                      ${reason.color === 'primary' && 'bg-primary/10 text-primary border-primary/20'}
                      ${reason.color === 'secondary' && 'bg-secondary/10 text-secondary border-secondary/20'}
                      ${reason.color === 'accent' && 'bg-accent/10 text-accent border-accent/20'}
                    `}
                  >
                    {reason.tagline}
                  </Badge>
                </div>
                <h5 className="text-foreground m-0">{reason.title}</h5>
                <p className="text-muted-foreground leading-relaxed">
                  {reason.description}
                </p>
              </div>
              <div className="mt-auto flex justify-end pt-6">   
                 <p className="text-primary cursor-pointer hover:underline" onClick={() => handleOpenModal(reason)}>
                    More Details
                 </p>
              </div>
            </CardContent>
          </Card>
        ))}
      </div>
      <ServiceDetailsModal
        isOpen={isModalOpen}
        onClose={handleCloseModal}
        service={selectedService}
      />
      </div>
    </section>
  );
};