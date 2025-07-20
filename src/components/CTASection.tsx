import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { 
  Rocket, 
  MessageSquare, 
  Phone, 
  Mail, 
  Calendar,
  ArrowRight,
  Sparkles
} from "lucide-react";

export const CTASection = () => {
  return (
    <section className="py-24 relative overflow-hidden">
      {/* Animated Background */}
      <div className="absolute inset-0">
        <div className="absolute top-0 left-0 w-full h-full circuit-bg opacity-20"></div>
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] rounded-full bg-gradient-to-r from-primary/10 via-accent/10 to-secondary/10 blur-3xl animate-pulse"></div>
      </div>

      <div className="container mx-auto px-6 relative z-10">
        <div className="text-center mb-16">
          <Badge className="cyber-glow bg-primary/20 text-primary border-primary/30 px-4 py-2 mb-4">
            <Rocket className="w-4 h-4 mr-2" />
            Get Started Today
          </Badge>
          <h2 className="text-4xl lg:text-6xl font-bold mb-6">
            <span className="bg-gradient-to-r from-primary via-accent to-secondary bg-clip-text text-transparent">
              Transform Your Business
            </span>
            <br />
            <span className="text-foreground">with AI Excellence</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Ready to revolutionize your operations? Let's discuss how our AI solutions 
            can accelerate your digital transformation journey.
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12 items-start">
          {/* Contact Form */}
          <Card className="glass-card cyber-glow">
            <CardHeader>
              <CardTitle className="text-2xl font-bold flex items-center gap-3">
                <MessageSquare className="w-6 h-6 text-primary" />
                Start Your AI Journey
              </CardTitle>
            </CardHeader>
            <CardContent className="space-y-6">
              <div className="grid md:grid-cols-2 gap-4">
                <div className="space-y-2">
                  <label className="text-sm font-medium text-foreground">First Name</label>
                  <Input 
                    placeholder="Enter your first name" 
                    className="holo-border bg-input/50 backdrop-blur-sm"
                  />
                </div>
                <div className="space-y-2">
                  <label className="text-sm font-medium text-foreground">Last Name</label>
                  <Input 
                    placeholder="Enter your last name" 
                    className="holo-border bg-input/50 backdrop-blur-sm"
                  />
                </div>
              </div>
              
              <div className="space-y-2">
                <label className="text-sm font-medium text-foreground">Business Email</label>
                <Input 
                  type="email" 
                  placeholder="your.email@company.com" 
                  className="holo-border bg-input/50 backdrop-blur-sm"
                />
              </div>
              
              <div className="space-y-2">
                <label className="text-sm font-medium text-foreground">Company</label>
                <Input 
                  placeholder="Your company name" 
                  className="holo-border bg-input/50 backdrop-blur-sm"
                />
              </div>
              
              <div className="space-y-2">
                <label className="text-sm font-medium text-foreground">Project Details</label>
                <Textarea 
                  placeholder="Tell us about your AI requirements and goals..."
                  rows={4}
                  className="holo-border bg-input/50 backdrop-blur-sm resize-none"
                />
              </div>
              
              <Button className="w-full neural-pulse bg-gradient-to-r from-primary to-primary-glow">
                <Sparkles className="w-5 h-5 mr-2" />
                Get Free AI Consultation
                <ArrowRight className="w-5 h-5 ml-2" />
              </Button>
            </CardContent>
          </Card>

          {/* Contact Options */}
          <div className="space-y-8">
            <div className="space-y-6">
              <h3 className="text-2xl font-bold text-foreground">
                Multiple Ways to Connect
              </h3>
              <p className="text-muted-foreground">
                Choose the method that works best for you to start your AI transformation.
              </p>
            </div>

            <div className="space-y-4">
              {/* Direct Call */}
              <Card className="glass-card hover:cyber-glow transition-all duration-300 group cursor-pointer">
                <CardContent className="p-6 flex items-center gap-4">
                  <div className="p-3 rounded-xl bg-primary/20 group-hover:bg-primary/30 transition-colors">
                    <Phone className="w-6 h-6 text-primary" />
                  </div>
                  <div>
                    <h4 className="font-semibold text-foreground">Direct Call</h4>
                    <p className="text-sm text-muted-foreground">Speak with our AI experts</p>
                    <p className="text-primary font-medium">+1 (555) 123-4567</p>
                  </div>
                </CardContent>
              </Card>

              {/* Email Support */}
              <Card className="glass-card hover:cyber-glow transition-all duration-300 group cursor-pointer">
                <CardContent className="p-6 flex items-center gap-4">
                  <div className="p-3 rounded-xl bg-secondary/20 group-hover:bg-secondary/30 transition-colors">
                    <Mail className="w-6 h-6 text-secondary" />
                  </div>
                  <div>
                    <h4 className="font-semibold text-foreground">Email Support</h4>
                    <p className="text-sm text-muted-foreground">Get detailed responses</p>
                    <p className="text-secondary font-medium">ai-solutions@company.com</p>
                  </div>
                </CardContent>
              </Card>

              {/* Schedule Meeting */}
              <Card className="glass-card hover:cyber-glow transition-all duration-300 group cursor-pointer">
                <CardContent className="p-6 flex items-center gap-4">
                  <div className="p-3 rounded-xl bg-accent/20 group-hover:bg-accent/30 transition-colors">
                    <Calendar className="w-6 h-6 text-accent" />
                  </div>
                  <div>
                    <h4 className="font-semibold text-foreground">Schedule Meeting</h4>
                    <p className="text-sm text-muted-foreground">Book a strategy session</p>
                    <p className="text-accent font-medium">calendly.com/ai-consultation</p>
                  </div>
                </CardContent>
              </Card>
            </div>

            {/* Quick Stats */}
            <div className="grid grid-cols-2 gap-4 pt-8">
              <div className="glass-card p-4 text-center">
                <div className="text-2xl font-bold text-primary">&lt; 24h</div>
                <div className="text-sm text-muted-foreground">Response Time</div>
              </div>
              <div className="glass-card p-4 text-center">
                <div className="text-2xl font-bold text-secondary">Free</div>
                <div className="text-sm text-muted-foreground">Initial Consultation</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};