import { Shield, Layers, ArrowRight, Link, Database, Clock, Eye, CheckCircle, QrCode, Activity } from "lucide-react";
import verificationImage from "@/assets/verification-illustration.png";

const SolutionSection = () => {
  const diagramSteps = [
    { icon: CheckCircle, label: "Results Finalised by Institution" },
    { icon: Shield, label: "Certificate Issued via Platform" },
    { icon: Database, label: "Issuance Record Anchored on Blockchain" },
    { icon: Clock, label: "Immutable Timestamp Created" },
    { icon: QrCode, label: "Public Verification Enabled (QR / Link)" },
    { icon: Activity, label: "Verification Activity Logged (Scan History Available to Issuer)" },
  ];

  return (
    <section id="solution" className="py-24 bg-cream-dark/30 relative overflow-hidden">
      {/* Background decoration */}
      <div className="absolute inset-0 opacity-30">
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] rounded-full border border-primary/10" />
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] rounded-full border border-primary/10" />
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[400px] h-[400px] rounded-full border border-primary/10" />
      </div>

      <div className="container mx-auto px-6 relative z-10">
        <div className="max-w-7xl mx-auto">
          <div className="grid lg:grid-cols-2 gap-16 items-start">
            {/* Left content */}
            <div>
              <span className="text-primary font-semibold text-sm tracking-wider uppercase mb-4 block">
                Our Approach
              </span>
              <h2 className="font-heading text-3xl md:text-4xl font-bold text-foreground mb-6">
                A Neutral, Immutable Trust Layer for Credentials
              </h2>
              <p className="text-muted-foreground text-lg mb-8 leading-relaxed">
                We provide a post-assessment credential issuance and verification platform that enables institutions to issue certificates that cannot be forged, altered, or backdated, and can be instantly verified.
              </p>
              
              <div className="space-y-6">
                {/* Point 1 */}
                <div className="flex items-start gap-4">
                  <div className="w-10 h-10 rounded-lg bg-primary/10 flex items-center justify-center flex-shrink-0 mt-1">
                    <Database className="w-5 h-5 text-primary" />
                  </div>
                  <div>
                    <p className="text-foreground leading-relaxed">
                      Each certificate issued through the platform is cryptographically recorded on a blockchain, creating an immutable proof of issuance that remains verifiable over time independent of documents, PDFs, or internal registers.
                    </p>
                  </div>
                </div>

                {/* Point 2 */}
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
                
                {/* Point 3 */}
                <div className="flex items-start gap-4">
                  <div className="w-10 h-10 rounded-lg bg-primary/10 flex items-center justify-center flex-shrink-0 mt-1">
                    <Layers className="w-5 h-5 text-primary" />
                  </div>
                  <div>
                    <p className="text-foreground font-medium">
                      Blockchain-backed and immutable by design
                    </p>
                    <p className="text-muted-foreground text-sm mt-1">
                      Once issued, records cannot be modified or deleted
                    </p>
                  </div>
                </div>

                {/* Point 4 */}
                <div className="flex items-start gap-4">
                  <div className="w-10 h-10 rounded-lg bg-primary/10 flex items-center justify-center flex-shrink-0 mt-1">
                    <Eye className="w-5 h-5 text-primary" />
                  </div>
                  <div>
                    <p className="text-foreground font-medium">
                      Institution-controlled verification visibility
                    </p>
                    <p className="text-muted-foreground text-sm mt-1">
                      Organisations can view verification activity and scan history for certificates they issue
                    </p>
                  </div>
                </div>
              </div>

              {/* Verification Image */}
              <div className="mt-10">
                <img 
                  src={verificationImage} 
                  alt="Certificate verification with QR code scanning showing successful verification" 
                  className="w-64 h-auto mx-auto lg:mx-0 rounded-xl shadow-soft"
                />
              </div>
            </div>

            {/* Right visual - Diagram */}
            <div className="relative">
              <div className="bg-card rounded-3xl p-8 border border-border shadow-elevated relative overflow-hidden">
                {/* Animated shield header */}
                <div className="flex justify-center mb-8">
                  <div className="relative">
                    <div className="w-20 h-20 rounded-full bg-primary/10 flex items-center justify-center animate-pulse-glow">
                      <Shield className="w-10 h-10 text-primary" />
                    </div>
                    <div className="absolute inset-0 rounded-full border-2 border-primary/30 animate-rotate-slow" />
                  </div>
                </div>

                {/* Visual flow */}
                <div className="space-y-3">
                  {diagramSteps.map((step, index) => (
                    <div key={index}>
                      <div className="flex items-center gap-4 p-4 rounded-xl bg-cream-light/50 border border-border/50 hover:border-primary/30 transition-all duration-300">
                        <div className="w-8 h-8 rounded-full bg-primary/10 flex items-center justify-center flex-shrink-0">
                          <step.icon className="w-4 h-4 text-primary" />
                        </div>
                        <span className="text-sm font-medium text-foreground">{step.label}</span>
                      </div>
                      {index < diagramSteps.length - 1 && (
                        <div className="flex justify-center">
                          <div className="w-px h-4 bg-primary/30" />
                        </div>
                      )}
                    </div>
                  ))}
                </div>

                {/* Final highlighted state */}
                <div className="mt-6 p-4 rounded-xl bg-primary/10 border border-primary/30">
                  <div className="flex items-center justify-center gap-3">
                    <Shield className="w-5 h-5 text-primary" />
                    <span className="text-sm font-bold text-foreground">Tamper-Proof, Verifiable Credential</span>
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