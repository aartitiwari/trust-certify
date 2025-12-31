import { ShieldCheck, Ban, Database, Eye } from "lucide-react";
import cdpIllustration from "@/assets/cdp-qr-illustration.png";

const cdpFeatures = [
  {
    icon: ShieldCheck,
    title: "Ensures Authenticity",
    description: "CDP embedded in QR codes allows institutions to verify the authenticity of certificates easily.",
  },
  {
    icon: Ban,
    title: "Prevents Digital Replication",
    description: "Unlike standard QR codes, CDP ensures the QR code cannot be copied or digitally replicated, even with high-resolution scanners or AI tools.",
  },
  {
    icon: Database,
    title: "Blockchain-Backed Security",
    description: "CDP is integrated with blockchain verification, adding a layer of tamper-proof record-keeping that anchors both physical and digital elements of the certificate.",
  },
  {
    icon: Eye,
    title: "Invisible Protection for Users",
    description: "The CDP operates seamlessly in the background, enhancing security without changing the user experience or adding friction for certificate holders.",
  },
];

const CDPSection = () => {
  return (
    <section id="cdp" className="py-24 bg-cream-dark/30 relative overflow-hidden">
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
                Certificate Security
              </span>
              <h2 className="font-heading text-3xl md:text-4xl font-bold text-foreground mb-6">
                Copy Detection Pattern (CDP) for Certificates
              </h2>
              <p className="text-muted-foreground text-lg mb-8 leading-relaxed">
                We provide an advanced security layer for QR codes using Copy Detection Pattern (CDP) technology, designed to protect certificates from counterfeiting.
              </p>
              
              <div className="space-y-6">
                {cdpFeatures.map((feature, index) => (
                  <div key={index} className="flex items-start gap-4">
                    <div className="w-10 h-10 rounded-lg bg-primary/10 flex items-center justify-center flex-shrink-0 mt-1">
                      <feature.icon className="w-5 h-5 text-primary" />
                    </div>
                    <div>
                      <p className="text-foreground font-medium">
                        {feature.title}
                      </p>
                      <p className="text-muted-foreground text-sm mt-1">
                        {feature.description}
                      </p>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Right visual - CDP Illustration */}
            <div className="relative">
              <div className="bg-card rounded-3xl p-8 border border-border shadow-elevated relative overflow-hidden">
                <div className="flex justify-center items-center">
                  <img 
                    src={cdpIllustration} 
                    alt="QR Code with Copy Detection Pattern overlay showing the security enhancement process"
                    className="max-w-full h-auto max-h-[500px] object-contain"
                  />
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

export default CDPSection;
