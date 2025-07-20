import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Brain, Cloud, Zap, ArrowRight } from "lucide-react";
import heroImage from "@/assets/ai-neural-hero.jpg";

export const HeroSection = () => {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden circuit-bg">
      {/* Animated Background Elements */}
      <div className="absolute inset-0">
        <div className="absolute top-1/4 left-1/4 w-64 h-64 rounded-full bg-primary/10 blur-3xl animate-pulse"></div>
        <div className="absolute bottom-1/4 right-1/4 w-96 h-96 rounded-full bg-secondary/10 blur-3xl animate-pulse delay-1000"></div>
        <div className="absolute top-3/4 left-1/2 w-48 h-48 rounded-full bg-accent/10 blur-3xl animate-pulse delay-500"></div>
      </div>

      <div className="container mx-auto px-6 relative z-10">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Left Content */}
          <div className="space-y-8">
            <div className="space-y-4">
              <Badge className="cyber-glow bg-primary/20 text-primary border-primary/30 px-4 py-2">
                <Brain className="w-4 h-4 mr-2" />
                Next-Gen AI Solutions
              </Badge>
              
              <h1 className="text-5xl lg:text-7xl font-bold leading-tight">
                <span className="matrix-text bg-gradient-to-r from-primary via-accent to-secondary bg-clip-text text-transparent">
                  AI Powered
                </span>
                <br />
                <span className="text-foreground">IT Services</span>
              </h1>
              
              <p className="text-xl text-muted-foreground leading-relaxed max-w-lg">
                Revolutionize your business with cutting-edge artificial intelligence, 
                cloud computing, and advanced automation solutions that drive innovation 
                and accelerate digital transformation.
              </p>
            </div>

            <div className="flex flex-wrap gap-4">
              <Button size="lg" className="cyber-glow neural-pulse group bg-gradient-to-r from-primary to-primary-glow">
                Explore Services
                <ArrowRight className="w-5 h-5 ml-2 group-hover:translate-x-1 transition-transform" />
              </Button>
              
              <Button size="lg" variant="outline" className="holo-border border-primary/30 hover:bg-primary/10">
                <Cloud className="w-5 h-5 mr-2" />
                Cloud Solutions
              </Button>
            </div>

            {/* Stats */}
            <div className="grid grid-cols-3 gap-6 pt-8">
              <div className="text-center">
                <div className="text-3xl font-bold text-primary">500+</div>
                <div className="text-sm text-muted-foreground">AI Models Deployed</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold text-secondary">99.9%</div>
                <div className="text-sm text-muted-foreground">Cloud Uptime</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold text-accent">24/7</div>
                <div className="text-sm text-muted-foreground">AI Monitoring</div>
              </div>
            </div>
          </div>

          {/* Right Content - Hero Image */}
          <div className="relative">
            <div className="float-animation">
              <div className="glass-card p-8 rounded-2xl neural-pulse">
                <img 
                  src={heroImage} 
                  alt="AI Neural Network"
                  className="w-full h-auto rounded-xl"
                />
              </div>
            </div>
            
            {/* Floating Elements */}
            <div className="absolute -top-4 -right-4 glass-card p-4 rounded-xl cyber-glow">
              <Zap className="w-8 h-8 text-accent" />
            </div>
            <div className="absolute -bottom-4 -left-4 glass-card p-4 rounded-xl cyber-glow">
              <Brain className="w-8 h-8 text-primary" />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};