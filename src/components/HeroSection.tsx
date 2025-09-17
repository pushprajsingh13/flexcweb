import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Brain, Cloud, Zap, ArrowRight } from "lucide-react";
import heroImage from "@/assets/ai-neural-hero.jpg";

export const HeroSection = () => {
  return (
    <section id="hero" className="relative min-h-screen flex items-center justify-center overflow-hidden circuit-bg pt-16 mt-8">
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
              {/* <Badge className="cyber-glow bg-primary/20 text-primary border-primary/30 px-4 py-2">
                <Brain className="w-4 h-4 mr-2" />
                Next-Gen AI Solutions
              </Badge> */}
              
              <h1 className="text-5xl lg:text-7xl font-bold leading-tight">
                <span className="matrix-text bg-gradient-to-r from-primary via-accent to-secondary bg-clip-text text-transparent">
                  Engineering the Future of Work
                </span>
                <br />
                <span className="text-foreground">Through Technology</span>
              </h1>
              
              <p className="text-xl text-muted-foreground leading-relaxed max-w-lg">
                Product-led IT Services | Cloud FinOps | AI Solutions | Platform Expertise
                Empowering businesses with cutting-edge technology services driven by a product mindset and deep engineering expertise.
              </p>
            </div>

            <div className="flex flex-wrap gap-4">
              <a href="#services">
                <Button size="lg" className="cyber-glow neural-pulse group bg-gradient-to-r from-primary to-primary-glow">
                Explore Services
                <ArrowRight className="w-5 h-5 ml-2 group-hover:translate-x-1 transition-transform" />
              </Button >
              </a>
              
            <a href="https://www.flexc.work/contact-us" target="_blank" rel="noopener noreferrer">
               <Button size="lg" variant="outline" className="holo-border border-primary/30 hover:bg-primary/10">
                <Cloud className="w-5 h-5 mr-2" />
                  Contact Us
              </Button>
            </a>
             
            </div>

            {/* Stats */}
            <div className="grid grid-cols-3 gap-6 pt-8">
              <div className="text-center">
                <div className="text-3xl font-bold text-secondary">50+</div>
                <div className="text-sm text-muted-foreground">Satisfied Clients</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold text-accent">100+</div>
                <div className="text-sm text-muted-foreground">AI Model Deployed</div>
              </div>
               <div className="text-center">
                <div className="text-3xl font-bold text-accent">25%-50%</div>
                <div className="text-sm text-muted-foreground">Cost Savings</div>
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