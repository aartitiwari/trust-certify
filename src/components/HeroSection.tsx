import { Button } from "./ui/button";
import { ArrowRight, ShieldCheck } from "lucide-react";
import FloatingOrbs from "./FloatingOrbs";

const HeroSection = () => {
  return (
    <section className="relative min-h-screen flex items-center justify-center pt-20 overflow-hidden">
      <FloatingOrbs />
      
      <div className="container mx-auto px-6 py-20 relative z-10">
        <div className="max-w-4xl mx-auto text-center">
          {/* Badge */}
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-cream-dark/50 border border-primary/20 mb-8 animate-fade-in">
            <ShieldCheck className="w-4 h-4 text-primary" />
            <span className="text-sm font-medium text-foreground">
              Trusted by Government & Institutions
            </span>
          </div>

          {/* Main Headline */}
          <h1 className="font-heading text-4xl md:text-5xl lg:text-6xl font-bold text-foreground leading-tight mb-6 animate-slide-up">
            We enable institutions to issue certificates that{" "}
            <span className="text-gradient">cannot be forged</span> and can be{" "}
            <span className="text-gradient">instantly verified</span>.
          </h1>

          {/* Subheadline */}
          <p className="text-lg md:text-xl text-muted-foreground max-w-3xl mx-auto mb-10 animate-slide-up stagger-2 opacity-0" style={{ animationFillMode: 'forwards' }}>
            A secure issuance and verification layer for institutional credentials — without changing how exams, assessments, or courses are conducted.
          </p>

          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center animate-slide-up stagger-3 opacity-0" style={{ animationFillMode: 'forwards' }}>
            <Button variant="hero" size="xl">
              Request a Demo
              <ArrowRight className="w-5 h-5" />
            </Button>
            <Button variant="heroOutline" size="xl">
              Learn More
            </Button>
          </div>

        </div>
      </div>

      {/* Bottom gradient fade */}
      <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-background to-transparent" />
    </section>
  );
};

export default HeroSection;