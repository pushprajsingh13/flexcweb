import { useEffect, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import "./GCC.css";
import logo from "../assets/flexc_logo.png";
import { CheckCircle, ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import Footer from "@/components/Footer";

const whyIndiaCards = [
  {
    title: "5M+ Tech Graduates",
    body: "India produces one of the largest annual cohorts of STEM graduates, creating a deep and continuously replenishing talent pipeline.",
  },
  {
    title: "Significant Cost Advantage",
    body: "Build high-performing teams at a fraction of US hiring costs without compromising on quality or delivery.",
  },
  {
    title: "Favorable Time Zones",
    body: "IST (UTC+5:30) enables meaningful overlap with US business hours for real-time collaboration.",
  },
  {
    title: "Mature IT Ecosystem",
    body: "Established tech hubs in Bangalore, Hyderabad, Pune, and Chennai with strong infrastructure and talent density.",
  },
];

const options = [
  {
    number: "Option 01",
    title: "Pure Employer of Record",
    desc: "The fastest route to legal employment in India. Ideal for teams that want to hire immediately without entity registration complexity.",
    features: [
      "Full legal employment framework under FlexC EOR",
      "Accurate payroll processing with tax deductions",
      "PF and ESI administration",
      "Employment contracts aligned with Indian labor law",
      "Ongoing regulatory updates and compliance notifications",
      "You retain complete day-to-day operational control",
    ],
  },
  {
    number: "Option 02",
    title: "EOR + HR Administration",
    desc: "All the benefits of EOR, plus a complete HR operations layer for growing teams.",
    badge: "Most Popular",
    features: [
      "Everything in Pure EOR",
      "Structured onboarding for day-one readiness",
      "Performance support and goal frameworks",
      "Integrated leave and attendance tracking",
      "AI-powered compliance alerts",
      "Dedicated support for employee operations",
    ],
  },
  {
    number: "Option 03",
    title: "Full India Office Setup",
    desc: "For companies ready to establish a permanent India presence with office, legal, and operations support.",
    features: [
      "Location and office space advisory",
      "Lease coordination and workspace planning",
      "Company registration and legal setup",
      "Tax filings, bank setup, and audit support",
      "Office administration and facilities operations",
      "Local HR operations and vendor coordination",
    ],
  },
];

const steps = [
  "Discovery Call",
  "Tailored Proposal",
  "Onboarding Setup",
  "Hire and Scale",
];

  const GCC = () => {
  useEffect(() => {
  window.scrollTo(0, 0);

  const handleScroll = () => {
    const scrollPosition = window.scrollY;
    const sections = navigation.map(item => item.href.slice(1));
    const scrollPositionWithOffset = scrollPosition + 100;

    for (const section of sections) {
      const element = document.getElementById(section);

      if (element) {
        const offsetTop = element.offsetTop;
        const offsetBottom = offsetTop + element.offsetHeight;

        if (
          scrollPositionWithOffset >= offsetTop &&
          scrollPositionWithOffset < offsetBottom
        ) {
          setActiveSection(section);
          break;
        }
      }
    }
  };

  window.addEventListener("scroll", handleScroll);

  return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navigate = useNavigate();
  const [activeSection, setActiveSection] = useState("why-india");

  const scrollToSection = (href: string) => {
    const elementId = href.slice(1);
    const element = document.getElementById(elementId);

    if (element) {
      const headerOffset = 80;
      const elementPosition =
        element.getBoundingClientRect().top + window.pageYOffset;

      const offsetPosition = elementPosition - headerOffset;

      window.scrollTo({
        top: offsetPosition,
        behavior: "smooth",
      });
    }
  };

const benefits = [
  "No entity registration required",
  "Full PF, ESI & labour law compliance", 
  "Hire across all major Indian cities",
  "AI-powered payroll & compliance platform"
];

const navigation = [
  { name: "Why India", href: "#why-india" },
  { name: "Our Options", href: "#options" },
  { name: "How It Works", href: "#how-it-works" },
  { name: "Compliance", href: "#compliance" },
  { name: "Why FlexC", href: "#why-flexc" },
  { name: "Get a Proposal", href: "#contact", isContact: true },
];

  return (
    <div className="gcc-page">
      <nav className="gcc-nav">
        <div className="gcc-nav-inner">
          <a href="https://flexc.work" className="gcc-nav-logo" target="_blank" rel="noreferrer">
            <img src={logo} alt="FlexC" className="gcc-nav-logo-image" />
          </a>
            <nav className="gcc-nav-links">
              {navigation.map((item) => (
                <button
                  key={item.name}
                  onClick={() => scrollToSection(item.href)}
                  className={`gcc-nav-tab ${
                    item.isContact
                      ? "gcc-nav-tab-contact"
                      : activeSection === item.href.slice(1)
                      ? "gcc-nav-tab-active"
                      : ""
                  }`}
                >
                  {item.name}
                </button>
              ))}
            </nav>
        </div>
      </nav>

      <section className="gcc-hero">
      <div className="gcc-container">

        <div className="gcc-section-top-wrapper">
          <div className="gcc-section-eyebrow gcc-section-eyebrow-top">
            India GCC Setup
          </div>
        </div>

       <div className="float-animation">
         <div className="gcc-hero-content p-5 rounded-2xl neural-pulse">
          <div> 
            <h1 className="text-5xl lg:text-6xl font-bold leading-tight">
                <span className="matrix-text bg-gradient-to-r from-primary via-accent to-secondary bg-clip-text text-transparent">
                  Build your Global Capability Centre
                </span>
                <br />
                <span className="text-foreground">in India - the right way</span>
              </h1>
          <p className="gcc-hero-sub">
            From your first hire to a fully operational office, FlexC provides the legal framework, compliance infrastructure, and local expertise to make your India expansion seamless and risk-free.
          </p>
          <div className="gcc-hero-actions">
            <button
              onClick={() => navigate("/")}
              className="w-50 neural-pulse bg-gradient-to-r from-primary to-primary-glow w-fit inline-flex items-center justify-center gcc-btn"
            >
              Explore Options
            </button>
              <Link
                to="/"
                state={{ scrollToContact: true }}
                className="w-50 neural-pulse bg-gradient-to-r from-primary to-primary-glow w-fit inline-flex items-center justify-center gcc-btn"
              >
                Talk to an Expert
              </Link>
          </div>
          </div>
            {/* Right Content - Cards Grid */}
          <div className="space-y-5 gcc-benefits">
              {benefits.map((benefit, index) => (
                <div key={index} className="flex items-center gap-3">
                  <CheckCircle className="w-6 h-6 text-black flex-shrink-0" />
                  <span className="text-black/90 text-lg">{benefit}</span>
                </div>
              ))}
          </div>
          </div>
       </div>
        </div>
      </section>

    <section className="gcc-section" id="why-india">
      <div className="gcc-container">

      <div className="gcc-section-eyebrow gcc-section-eyebrow-top">
        Why India
      </div>

      <div className="gcc-why-grid">
        <div>
        <h2 className="text-4xl lg:text-5xl font-bold mb-6">
            <span className="bg-gradient-to-r from-primary via-accent to-secondary bg-clip-text text-transparent">
              India is the world's leading
            </span>
            <br />
            destination for GCCs
          </h2>
              <p className="gcc-section-sub">
                Access exceptional talent in engineering, product, analytics, and operations at globally competitive rates. India hosts one of the world&apos;s most mature ecosystems for global capability building.
              </p>
            <Button className="w-50 neural-pulse bg-gradient-to-r from-primary to-primary-glow" onClick={() => scrollToSection("#options")}>
              Explore GCC Setup
              <ArrowRight className="w-5 h-5 ml-2" />
              </Button>
              
            </div>
            <div className="gcc-why-right">
              {whyIndiaCards.map((card) => (
                <article key={card.title} className="gcc-card">
                  <h3>{card.title}</h3>
                  <p>{card.body}</p>
                </article>
              ))}
            </div>
          </div>
        </div>
      </section>

  <section className="gcc-section gcc-section-alt" id="options">
    <div className="gcc-container">

      <div className="gcc-section-eyebrow gcc-section-eyebrow-top">
        Engagement Options
      </div>

          <h2 className="text-center text-4xl lg:text-5xl font-bold mb-6">
            <span className="bg-gradient-to-r from-primary via-accent to-secondary bg-clip-text text-transparent">
              Three paths to your India GCC
            </span>
          </h2>
          <p className="gcc-section-sub">Whether you need your first hire now or a full office next quarter, we have a model for your stage and goals.</p>
          <div className="gcc-options-grid">
            {options.map((option) => (
              <article key={option.number} className="gcc-option-card">
                <div className="gcc-option-head">
                  {option.badge ? <div className="gcc-option-badge">{option.badge}</div> : null}
                  <div className="gcc-option-number">{option.number}</div>
                  <h3 className="gcc-option-title">{option.title}</h3>
                </div>
                <div className="gcc-option-body">
                  <p>{option.desc}</p>
                  <div className="gcc-feature-list">
                    {option.features.map((feature) => (
                      <div key={feature} className="gcc-feature-item">
                        <CheckCircle className="gcc-feature-icon" />
                        <span>{feature}</span>
                      </div>
                    ))}
                  </div>
                 <button
                  onClick={() => scrollToSection("#why-flexc")}
                  className="gcc-option-link"
                >
                  Get Started
                  <ArrowRight size={16} />
                </button>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="gcc-section" id="how-it-works">
        <div className="gcc-container">
        <div className="gcc-section-eyebrow gcc-section-eyebrow-top">Process</div>
          <h2 className="text-center text-4xl lg:text-5xl font-bold mb-6">
            <span className="bg-gradient-to-r from-primary via-accent to-secondary bg-clip-text text-transparent">
              From conversation to hire - fast
            </span>
          </h2>
          <p className="gcc-section-sub">Our pre-built compliance infrastructure removes traditional expansion delays.</p>
          <div className="gcc-steps">
            {steps.map((step, idx) => (
              <article key={step} className="gcc-step">
                <div className="gcc-step-circle">
              <span className="gcc-step-num">{idx + 1}</span>
            </div>
                
                <h3>{step}</h3>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="gcc-section gcc-section-dark" id="compliance">
        <div className="gcc-container">
          <div className="gcc-section-eyebrow gcc-section-eyebrow-top">Compliance and Risk</div>
          <h2 className="gcc-section-heading gcc-light">Every compliance risk - covered.</h2>
          <p className="gcc-section-sub gcc-light-sub">India&apos;s labor law framework is broad and evolving. FlexC keeps your operations compliant without overhead.</p>
          <div className="gcc-grid-2">
            <article className="gcc-dark-card"><h3>Permanent Establishment Protection</h3><p>Structured EOR framework helps maintain clear separation and reduce PE risks.</p></article>
            <article className="gcc-dark-card"><h3>Correct Employee Classification</h3><p>Every employee is correctly classified under Indian standards from day one.</p></article>
            <article className="gcc-dark-card"><h3>Complete Labor Law Adherence</h3><p>Coverage of working hours, leave, PF, ESI, and mandatory statutory benefits.</p></article>
            <article className="gcc-dark-card"><h3>Transparent Reporting</h3><p>Monthly reports and audit-ready records for payroll and compliance visibility.</p></article>
          </div>
        </div>
      </section>

      <section className="gcc-section" id="why-flexc">
        <div className="gcc-container">
          <div className="gcc-section-eyebrow gcc-section-eyebrow-top">Why FlexC</div>
          <h2 className="text-center text-4xl lg:text-5xl font-bold mb-6">
            <span className="bg-gradient-to-r from-primary via-accent to-secondary bg-clip-text text-transparent">
              Built for US companies expanding to India
            </span>
          </h2>
          <p className="gcc-section-sub">India-focused execution with deep local expertise and flexible engagement models.</p>
          <div className="gcc-grid-2">
            <article className="gcc-card"><h3>Deep Local Expertise</h3><p>Years of experience navigating India labor laws and compliance updates.</p></article>
            <article className="gcc-card"><h3>AI-Powered Platform</h3><p>Automated payroll, compliance monitoring, and streamlined operations.</p></article>
            <article className="gcc-card"><h3>Proven Track Record</h3><p>Success supporting global teams operating in India without entity risk.</p></article>
            <article className="gcc-card"><h3>Flexible Engagement Models</h3><p>Scale from one strategic hire to a fully established office setup.</p></article>
          </div>
        </div>
      </section>

      <section className="gcc-section" id="contact">
        <div className="gcc-container">
          <div className="gcc-final-cta">
            <h2>Ready to build your India team with confidence?</h2>
            <p>Share your requirements and we will send a tailored GCC setup proposal with recommended model and timeline.</p>
            <div className="gcc-final-actions">
              
            <Link
              to="/"
              state={{ scrollToContact: true }}
              className="gcc-btn gcc-btn-final"
            >
              Get a Custom Proposal
            </Link>

            <Link
              to="/"
              className="gcc-btn gcc-btn-final"
            >
              Back to FlexC Home
            </Link>
            </div>
          </div>
        </div>
      </section>
      <Footer />
    </div>
  );
};

export default GCC;
