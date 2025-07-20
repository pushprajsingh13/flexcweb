import { Badge } from "@/components/ui/badge";
import { Progress } from "@/components/ui/progress";
import { TrendingUp, Users, Clock, Award } from "lucide-react";

const stats = [
  {
    icon: TrendingUp,
    value: "500+",
    label: "AI Models Deployed",
    description: "Advanced machine learning models running in production",
    progress: 95,
    color: "primary"
  },
  {
    icon: Users,
    value: "10K+",
    label: "Clients Served",
    description: "Businesses transformed with our AI solutions",
    progress: 88,
    color: "secondary"
  },
  {
    icon: Clock,
    value: "99.9%",
    label: "System Uptime",
    description: "Reliable cloud infrastructure with minimal downtime",
    progress: 99,
    color: "accent"
  },
  {
    icon: Award,
    value: "24/7",
    label: "AI Monitoring",
    description: "Continuous monitoring and optimization of AI systems",
    progress: 100,
    color: "primary"
  }
];

export const TechStats = () => {
  return (
    <section className="py-24 relative overflow-hidden">
      {/* Background Elements */}
      <div className="absolute inset-0 opacity-30">
        <div className="absolute top-0 left-1/4 w-72 h-72 rounded-full bg-primary/10 blur-3xl"></div>
        <div className="absolute bottom-0 right-1/4 w-96 h-96 rounded-full bg-secondary/10 blur-3xl"></div>
      </div>

      <div className="container mx-auto px-6 relative z-10">
        <div className="text-center mb-16">
          <Badge className="cyber-glow bg-accent/20 text-accent border-accent/30 px-4 py-2 mb-4">
            <TrendingUp className="w-4 h-4 mr-2" />
            Performance Metrics
          </Badge>
          <h2 className="text-4xl lg:text-5xl font-bold mb-6">
            <span className="bg-gradient-to-r from-accent via-primary to-secondary bg-clip-text text-transparent">
              Proven Results
            </span>
            <br />
            <span className="text-foreground">Across Industries</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Our cutting-edge AI and cloud solutions deliver measurable impact 
            with industry-leading performance metrics and reliability.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {stats.map((stat, index) => (
            <div 
              key={stat.label} 
              className="glass-card p-8 rounded-2xl cyber-glow group hover:neural-pulse transition-all duration-500"
              style={{ animationDelay: `${index * 200}ms` }}
            >
              <div className="space-y-6">
                {/* Icon and Value */}
                <div className="flex items-center justify-between">
                  <div className={`p-3 rounded-xl bg-${stat.color}/20`}>
                    <stat.icon className={`w-8 h-8 text-${stat.color}`} />
                  </div>
                  <div className="text-right">
                    <div className={`text-3xl font-bold text-${stat.color} matrix-text`}>
                      {stat.value}
                    </div>
                  </div>
                </div>

                {/* Label and Description */}
                <div>
                  <h3 className="text-xl font-semibold text-foreground mb-2">
                    {stat.label}
                  </h3>
                  <p className="text-sm text-muted-foreground leading-relaxed">
                    {stat.description}
                  </p>
                </div>

                {/* Progress Bar */}
                <div className="space-y-2">
                  <div className="flex justify-between text-sm">
                    <span className="text-muted-foreground">Performance</span>
                    <span className={`text-${stat.color} font-medium`}>{stat.progress}%</span>
                  </div>
                  <Progress 
                    value={stat.progress} 
                    className="h-2 holo-border"
                  />
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Additional Metrics */}
        <div className="mt-16 grid md:grid-cols-3 gap-8">
          <div className="glass-card p-6 rounded-xl text-center space-y-3">
            <div className="text-2xl font-bold text-primary">50TB+</div>
            <div className="text-sm text-muted-foreground">Data Processed Daily</div>
          </div>
          <div className="glass-card p-6 rounded-xl text-center space-y-3">
            <div className="text-2xl font-bold text-secondary">95%</div>
            <div className="text-sm text-muted-foreground">Cost Reduction Average</div>
          </div>
          <div className="glass-card p-6 rounded-xl text-center space-y-3">
            <div className="text-2xl font-bold text-accent">3.5x</div>
            <div className="text-sm text-muted-foreground">Productivity Increase</div>
          </div>
        </div>
      </div>
    </section>
  );
};