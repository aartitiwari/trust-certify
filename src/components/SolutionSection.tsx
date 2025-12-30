import { Shield, Layers, ArrowRight } from "lucide-react";

const SolutionSection = () => {
  return (
    <section id="solution" className="py-24 bg-cream-dark/30 relative overflow-hidden">
      {/* Background decoration */}
      <div className="absolute inset-0 opacity-30">
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] rounded-full border border-primary/10" />
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] rounded-full border border-primary/10" />
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[400px] h-[400px] rounded-full border border-primary/10" />
      </div>

      <div className="container mx-auto px-6 relative z-10">
        <div className="max-w-6xl mx-auto">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            {/* Left content */}
            <div>
              <span className="text-primary font-semibold text-sm tracking-wider uppercase mb-4 block">
                Our Approach
              </span>
              <h2 className="font-heading text-3xl md:text-4xl font-bold text-foreground mb-6">
                A Neutral Trust Layer for Credentials
              </h2>
              <p className="text-muted-foreground text-lg mb-8 leading-relaxed">
                We provide a post-assessment credential issuance and verification platform that enables institutions to issue certificates that cannot be forged and can be instantly verified.
              </p>
              
              <div className="space-y-4">
                <div className="flex items-start gap-4">
                  <div className="w-10 h-10 rounded-lg bg-primary/10 flex items-center justify-center flex-shrink-0 mt-1">
                    <ArrowRight className="w-5 h-5 text-primary" />
                  </div>
                  <div>
                    <p className="text-foreground font-medium">
                      Operates strictly after results are finalised
                    </p>
                    <p className="text-muted-foreground text-sm mt-1">
                      Does not interfere with existing examination or assessment systems
                    </p>
                  </div>
                </div>
                
                <div className="flex items-start gap-4">
                  <div className="w-10 h-10 rounded-lg bg-primary/10 flex items-center justify-center flex-shrink-0 mt-1">
                    <Layers className="w-5 h-5 text-primary" />
                  </div>
                  <div>
                    <p className="text-foreground font-medium">
                      Functions as a neutral issuance layer
                    </p>
                    <p className="text-muted-foreground text-sm mt-1">
                      Builds trust without replacing existing infrastructure
                    </p>
                  </div>
                </div>
              </div>
            </div>

            {/* Right visual */}
            <div className="relative">
              <div className="bg-card rounded-3xl p-8 border border-border shadow-elevated relative overflow-hidden">
                {/* Animated shield */}
                <div className="flex justify-center mb-8">
                  <div className="relative">
                    <div className="w-32 h-32 rounded-full bg-primary/10 flex items-center justify-center animate-pulse-glow">
                      <Shield className="w-16 h-16 text-primary" />
                    </div>
                    <div className="absolute inset-0 rounded-full border-2 border-primary/30 animate-rotate-slow" />
                  </div>
                </div>

                {/* Visual flow */}
                <div className="space-y-4">
                  <div className="flex items-center gap-4 p-4 rounded-xl bg-cream-light/50 border border-border/50">
                    <div className="w-3 h-3 rounded-full bg-primary animate-pulse" />
                    <span className="text-sm font-medium text-foreground">Results Finalized</span>
                  </div>
                  <div className="flex justify-center">
                    <div className="w-px h-8 bg-primary/30" />
                  </div>
                  <div className="flex items-center gap-4 p-4 rounded-xl bg-cream-light/50 border border-border/50">
                    <div className="w-3 h-3 rounded-full bg-primary animate-pulse" style={{ animationDelay: '0.5s' }} />
                    <span className="text-sm font-medium text-foreground">Certificate Issued Securely</span>
                  </div>
                  <div className="flex justify-center">
                    <div className="w-px h-8 bg-primary/30" />
                  </div>
                  <div className="flex items-center gap-4 p-4 rounded-xl bg-primary/10 border border-primary/30">
                    <div className="w-3 h-3 rounded-full bg-primary" />
                    <span className="text-sm font-medium text-foreground">Instant Verification Available</span>
                  </div>
                </div>
              </div>

              {/* Decorative elements */}
              <div className="absolute -top-4 -right-4 w-24 h-24 bg-primary/5 rounded-full blur-2xl" />
              <div className="absolute -bottom-4 -left-4 w-32 h-32 bg-primary/5 rounded-full blur-2xl" />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default SolutionSection;
