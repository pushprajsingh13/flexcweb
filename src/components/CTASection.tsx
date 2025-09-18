import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import Swal from "sweetalert2";
import {
  Rocket,
  MessageSquare,
  Phone,
  Mail,
  ArrowRight,
  Sparkles,
} from "lucide-react";
import { MdLocationOn } from "react-icons/md";

export const CTASection = () => {
  const [formData, setFormData] = useState({
    fname: "",
    lname: "",
    email: "",
    cname: "",
    choose: "",
    phone: "",
    message: "",
  });

  const [loading, setLoading] = useState(false);

  // handle input changes
  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  // handle submit
  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    try {
      // Change this API endpoint as needed
      const response = await fetch(
        "https://flexc.work/backend/api/ProjectPreview",
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify(formData),
        }
      );

      if (response.ok) {
         Swal.fire({
          icon: "success",
          title: "Submitted successfully!",
          text: "We will get back to you soon",
          showConfirmButton: false,
          timer: 2000, 
        });
        setFormData({
          fname: "",
          lname: "",
          email: "",
          cname: "",
          choose: "",
          phone: "",
          message: ""
        });
      } else {
         Swal.fire({
          icon: "error",
          title: "Error!",
          text: "Submission failed!",
          showConfirmButton: false,
          timer: 2000, 
        });
      }
    } catch (error) {
      console.error(error);
       Swal.fire({
          icon: "error",
          title: "Error!",
          text: "Submission failed!",
          showConfirmButton: false,
          timer: 2000, 
        });
    } finally {
      setLoading(false);
    }
  };

  return (
    <section id="contact" className="py-24 relative overflow-hidden">
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
            Looking to build, scale, or optimize your tech stack? Partner with
            FlexC — your trusted ally in engineering innovation.
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
              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="grid md:grid-cols-2 gap-4">
                  <div className="space-y-2">
                    <label className="text-sm font-medium text-foreground">
                      First Name
                    </label>
                    <Input
                      placeholder="Enter your first name"
                      className="holo-border bg-input/50 backdrop-blur-sm"
                      name="fname"
                      value={formData.fname}
                      onChange={handleChange}
                      required
                    />
                  </div>
                  <div className="space-y-2">
                    <label className="text-sm font-medium text-foreground">
                      Last Name
                    </label>
                    <Input
                      placeholder="Enter your last name"
                      className="holo-border bg-input/50 backdrop-blur-sm"
                      name="lname"
                      value={formData.lname}
                      onChange={handleChange}
                      required
                    />
                  </div>
                </div>

                <div className="grid md:grid-cols-2 gap-4">
                  <div className="space-y-2">
                  <label className="text-sm font-medium text-foreground">
                    Business Email
                  </label>
                  <Input
                    type="email"
                    placeholder="your.email@company.com"
                    className="holo-border bg-input/50 backdrop-blur-sm"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    required
                  />
                </div>
                  <div className="space-y-2">
                    <label className="text-sm font-medium text-foreground">
                      Telephone
                    </label>
                    <Input
                      type="tel"
                      placeholder="Enter your telephone number"
                      className="holo-border bg-input/50 backdrop-blur-sm"
                      name="phone"
                      value={formData.phone}
                      onChange={handleChange}
                      maxLength={10}      
                      pattern="[0-9]{10}"  
                      required
                    />
                  </div>
                </div>

 <div className="space-y-2">
                    <label className="text-sm font-medium text-foreground">
                      Subject
                    </label>
                    <Input
                      type="text"
                      placeholder="Enter subject"
                      className="holo-border bg-input/50 backdrop-blur-sm"
                      name="choose"
                      value={formData.choose}
                      onChange={handleChange}
                      required
                    />
                  </div>

                <div className="space-y-2">
                  <label className="text-sm font-medium text-foreground">
                    Company
                  </label>
                  <Input
                    placeholder="Your company name"
                    className="holo-border bg-input/50 backdrop-blur-sm"
                    name="cname"
                    value={formData.cname}
                    onChange={handleChange}
                    required
                  />
                </div>

                <div className="space-y-2">
                  <label className="text-sm font-medium text-foreground">
                    Project Details
                  </label>
                  <Textarea
                    placeholder="Tell us about your AI requirements and goals..."
                    rows={4}
                    className="holo-border bg-input/50 backdrop-blur-sm resize-none"
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    required
                  />
                </div>

                <Button className="w-full neural-pulse bg-gradient-to-r from-primary to-primary-glow">
                  <Sparkles className="w-5 h-5 mr-2" />
                  {loading ? "Submitting..." : "Get Free AI Consultation"}
                  <ArrowRight className="w-5 h-5 ml-2" />
                </Button>
              </form>
            </CardContent>
          </Card>

          {/* Contact Options */}
          <div className="space-y-8">
            <div className="space-y-6">
              <h3 className="text-2xl font-bold text-foreground">
                Multiple Ways to Connect
              </h3>
              <p className="text-muted-foreground">
                Choose the method that works best for you to start your AI
                transformation.
              </p>
            </div>

            <div className="space-y-4">
              {/* Email Support */}
              <Card className="glass-card hover:cyber-glow transition-all duration-300 group cursor-pointer">
                <CardContent className="p-6 flex items-center gap-4">
                  <div className="p-3 rounded-xl bg-secondary/20 group-hover:bg-secondary/30 transition-colors">
                    <Mail className="w-6 h-6 text-secondary" />
                  </div>
                  <div>
                    <h4 className="font-semibold text-foreground">
                      Email Support
                    </h4>
                    <p className="text-sm text-muted-foreground">
                      Got a screen to share with us?
                    </p>
                    <p className="text-sm text-muted-foreground">
                      Mail us your account queries at:
                    </p>
                    <p className="text-secondary font-medium">
                      contact@flexc.work
                    </p>
                  </div>
                </CardContent>
              </Card>

              {/* Pune Office */}
              <Card className="glass-card hover:cyber-glow transition-all duration-300 group cursor-pointer">
                <CardContent className="p-6 flex items-center gap-4">
                  <div className="p-3 rounded-xl bg-accent/20 group-hover:bg-accent/30 transition-colors">
                    <MdLocationOn className="w-6 h-6 text-accent" />
                  </div>
                  <div>
                    <h4 className="font-semibold text-foreground">
                      Pune, Maharashtra, India
                    </h4>
                    <p className="text-sm text-muted-foreground">
                      4th Floor, The Minar Apartment, D2, Law College Road,
                    </p>
                    <p className="text-sm text-muted-foreground">
                      Opp. Maruti Suzuki Showroom, Shanti Sheela Society,
                    </p>
                    <p className="text-sm text-muted-foreground">
                      Apex Colony, Erandwane, Pune, Maharashtra 411038
                    </p>
                  </div>
                </CardContent>
              </Card>

              {/* Gurugram Office */}
              <Card className="glass-card hover:cyber-glow transition-all duration-300 group cursor-pointer">
                <CardContent className="p-6 flex items-center gap-4">
                  <div className="p-3 rounded-xl bg-accent/20 group-hover:bg-accent/30 transition-colors">
                    <MdLocationOn className="w-6 h-6 text-accent" />
                  </div>
                  <div>
                    <h4 className="font-semibold text-foreground">
                      Gurugram, Haryana, India
                    </h4>
                    <p className="text-sm text-muted-foreground">
                      Encubate Tech Pvt. Ltd.,
                    </p>
                    <p className="text-sm text-muted-foreground">944, Block C,</p>
                    <p className="text-sm text-muted-foreground">
                      Sushant Lok Phase 01,
                    </p>
                    <p className="text-sm text-muted-foreground">
                      Gurugram, Haryana - 122001
                    </p>
                  </div>
                </CardContent>
              </Card>

              {/* Company Info */}
              <Card className="glass-card hover:cyber-glow transition-all duration-300 group cursor-pointer">
                <CardContent className="p-6 flex items-center gap-4">
                  <div>
                    <h4 className="font-semibold text-foreground">
                      CIN - U72900HR2020PTC086931
                    </h4>
                    <h4 className="font-semibold text-foreground">
                      GSTIN - 06AAFCE9358P1ZV
                    </h4>
                    <h4 className="font-semibold text-foreground">
                      PAN - AAFCE9358P
                    </h4>
                  </div>
                </CardContent>
              </Card>
            </div>

            {/* Quick Stats */}
            <div className="grid grid-cols-2 gap-4 pt-8">
              <div className="glass-card p-4 text-center">
                <div className="text-2xl font-bold text-primary">&lt; 24h</div>
                <div className="text-sm text-muted-foreground">
                  Response Time
                </div>
              </div>
              <div className="glass-card p-4 text-center">
                <div className="text-2xl font-bold text-secondary">Free</div>
                <div className="text-sm text-muted-foreground">
                  Initial Consultation
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
