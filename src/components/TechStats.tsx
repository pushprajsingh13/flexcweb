import { Badge } from "@/components/ui/badge";
import { Progress } from "@/components/ui/progress";
import { TrendingUp, Users, Clock, Award } from "lucide-react";
import aeroEngg from "../assets/aero.jpg";
import evMan from "../assets/evBike.jpeg";
import sports from "../assets/sports.jpg";
import pharma from "../assets/doctor.jpg";

const stats = [
  {
    image: aeroEngg,
    value: "500+",
    label: "Aero Engineering Company",
    description: "Automation of RFQ and Manufacturing Engineering Process. Extraction of BOM from RFQ documents, mapping the pricing of each part number to improve the turn around for RFQ and during project execution, mapping and creating the Work Instructions using GenAI and historical Data.",
    progress: 95,
    color: "primary"
  },
  {
    image: evMan,
    value: "10K+",
    label: "2W EV Manufacturer",
    description: "End to End Consulting to Technology Partner for Architecture, Design and Implementation for Mobile App, Web Application, Vehicle Data Integration for SOC/SOH, tracking monitoring, configuring the vehicles for B2C and B2B user personas.",
    progress: 88,
    color: "secondary"
  },
  {
    image: sports,
    value: "99.9%",
    label: "Sports and Events",
    description: "E2E Consulting and Implementation for Pickle Ball League Player and Tournament software and also Event Management System for UK company.",
    progress: 99,
    color: "accent"
  },
  {
    image: pharma,
    value: "24/7",
    label: "Healthcare and Pharma Specialty Medicine Delivery",
    description: "Pharma Major manufactures Cancer treatment which loses 50% life in 3 days. Hospitals would like the delivery of product just before treatment date leading to creating complete custom system for Order Management, Build Plan, Logistics and inventory management for this pharma player.",
    progress: 100,
    color: "primary"
  },
];

export const TechStats = () => {
  return (
    <section id="tech-stats" className="py-24 relative overflow-hidden">
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
            Whether you're scaling AI infrastructure or optimizing legacy cloud spend — we bring the tools, expertise, and agility to transform your cloud economics.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {stats.map((stat, index) => (
            <div 
              key={stat.label} 
              className="glass-card p-8 rounded-2xl cyber-glow group "
              style={{ animationDelay: `${index * 200}ms` }}
            >
              <div className="space-y-6">
                {/* Icon and Value */}
                <div className="flex items-center justify-between">
                  {/* <div className={`p-3 rounded-xl bg-${stat.color}/20`}> */}
                    <img
                      src={stat.image}
                      alt={stat.label}
                      className="w-12 h-12 rounded-full object-cover"
                    />
                </div>

                {/* Label and Description */}
                <div>
                  <h3 className="text-xl font-semibold text-foreground mb-2">
                    {stat.label}
                  </h3>
                <p className="text-sm text-muted-foreground leading-relaxed text-justify">
                  {stat.description}
                </p>
                </div>

              </div>
            </div>
          ))}
        </div>

        {/* Additional Metrics */}
        <div className="mt-16 grid md:grid-cols-3 gap-8">
          <div className="glass-card p-6 rounded-xl text-center space-y-3">
            <div className="text-2xl font-bold text-primary">25-35%</div>
            <div className="text-sm text-muted-foreground">Cost Savings</div>
          </div>
          <div className="glass-card p-6 rounded-xl text-center space-y-3">
            <div className="text-2xl font-bold text-secondary">100%</div>
            <div className="text-sm text-muted-foreground">Quality Delivered</div>
          </div>
          <div className="glass-card p-6 rounded-xl text-center space-y-3">
            <div className="text-2xl font-bold text-accent">100%</div>
            <div className="text-sm text-muted-foreground">Net Promoter Score</div>
          </div>
        </div>
      </div>
    </section>
  );
};