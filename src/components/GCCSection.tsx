import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { ArrowRight, BriefcaseBusiness, Building2, Users } from "lucide-react";
import { useNavigate } from "react-router-dom";

const gccStats = [
  {
    value: "0%",
    label: "Entity registration required - hire legally from day one",
  },
  {
    value: "100%",
    label: "Compliance coverage - labour law, PF, ESI and more",
  },
  {
    value: "3+",
    label: "Engagement models - from EOR to full office setup",
  },
];

const gccOptions = [
  {
    option: "Option 01",
    title: "Pure Employer of Record",
    description:
      "Hire Indian talent immediately with full legal employment coverage. We handle contracts, payroll, PF, ESI and every compliance updates - you retain complete operational control.",
    icon: BriefcaseBusiness,
  },
  {
    option: "Option 02",
    title: "EOR + HR Administration",
    description:
      "Everything in EOR, plus structured onboarding, AI-powered compliance monitoring, performance management support, and a dedicated HR team to keep your employees happy from day one.",
    icon: Users,
  },
  {
    option: "Option 03",
    title: "Full India Office Setup",
    description:
      "End-to-end physical GCC establishment — location selection, lease negotiations, company registration, bank accounts, and ongoing office administration for a complete, permanent India presence.",
    icon: Building2,
  },
];

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

export const GCCSection = () => {
  const navigate = useNavigate();

  return (
    <section id="gcc" className="py-24 relative overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-b from-background via-muted/20 to-background" />
      <div className="absolute top-10 left-1/3 w-72 h-72 rounded-full bg-primary/10 blur-3xl" />
      <div className="absolute bottom-8 right-1/4 w-96 h-96 rounded-full bg-secondary/10 blur-3xl" />

      <div className="container mx-auto px-6 relative z-10">
        <div className="mb-14 text-center">
          <Badge className="bg-primary/10 text-primary border-primary/20 px-4 py-2 mb-4">
            India GCC Setup
          </Badge>

          <div className="grid lg:grid-cols-[1fr_auto] gap-8 items-end">
            <div>
              <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold leading-tight text-foreground">
                Launch your India GCC - <span className="text-accent">without</span>
                <br />
                the entity complexity
              </h2>
              <p className="text-lg text-muted-foreground max-w-3xl mx-auto mt-6 leading-relaxed text-center">
                FlexC acts as your Employer of Record, handling legal, payroll and compliance obligations so your global team can focus on hiring and building, not paperwork.
              </p>
            </div>

             <Button className="w-full neural-pulse bg-gradient-to-r from-primary to-primary-glow" onClick={() => navigate("/gcc")}>
              Explore GCC Setup
              <ArrowRight className="w-5 h-5 ml-2" />
              </Button>
          </div>
        </div>

        <div className="mb-12 flex justify-center">
          <div className="inline-flex flex-col md:flex-row md:items-center gap-6 md:gap-8 p-8 rounded-2xl bg-gradient-surface border border-border/50 w-full max-w-5xl">
            {gccStats.map((stat, index) => (
              <div key={stat.label} className="flex items-center gap-6 md:gap-8 flex-1">
                {index > 0 && <div className="hidden md:block w-px h-12 bg-border" />}
                <div className="text-center flex-1">
                  <div className={`text-3xl font-bold mb-1 ${index === 0 ? "text-primary" : index === 1 ? "text-secondary" : "text-accent"}`}>
                    {stat.value}
                  </div>
                  <div className="text-sm text-muted-foreground">{stat.label}</div>
                </div>
              </div>
            ))}
          </div>
        </div>

        <div className="grid lg:grid-cols-3 gap-5 mb-12">
          {gccOptions.map((item) => (
            <Card
              key={item.option}
              className="group border-border/70 bg-card/80 hover:border-accent/60 hover:shadow-lg hover:shadow-accent/10 transition-all duration-300"
            >
              <CardContent className="p-7 flex flex-col gap-4 h-full">
                <div className="w-11 h-11 rounded-xl bg-muted flex items-center justify-center group-hover:bg-accent/10 transition-colors">
                  <item.icon className="w-5 h-5 text-accent" />
                </div>
                <Badge variant="outline" className="w-fit text-[11px] uppercase tracking-wider border-accent/30 text-accent">
                  {item.option}
                </Badge>
                <h3 className="text-xl font-semibold text-foreground">{item.title}</h3>
                <p className="text-sm text-muted-foreground leading-relaxed flex-1">{item.description}</p>
              </CardContent>
            </Card>
          ))}
        </div>

        <div className="rounded-2xl p-8 md:p-10 bg-foreground text-background flex flex-col md:flex-row md:items-center md:justify-between gap-5">
          <div>
            <h3 className="text-2xl font-semibold">Ready to build your India team?</h3>
            <p className="text-background/70 mt-1">No entity. No delays. Just compliant hiring from day one.</p>
          </div>
          <div className="flex flex-col sm:flex-row gap-3">
            <Button
              variant="outline"
              className="border-background/30 text-background bg-transparent hover:bg-background/10"
              onClick={() => scrollToSection("#services")}
            >
              See full approach
              <ArrowRight className="w-4 h-4 ml-2" />
            </Button>
            <Button onClick={() => scrollToSection("#contact")} className="bg-accent text-accent-foreground hover:bg-accent/90">
              Talk to us
              <ArrowRight className="w-4 h-4 ml-2" />
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};
