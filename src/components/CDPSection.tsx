import { Shield, Fingerprint, Bot, Layers, Eye } from "lucide-react";

const cdpFeatures = [
  {
    icon: Fingerprint,
    title: "What is CDP?",
    subtitle: "Security beyond standard QR codes",
    description: "A Copy Detection Pattern is a cryptographic, noise-based pattern that degrades when copied or reproduced, allowing authenticity checks to distinguish original certificates from duplicates or forgeries.",
  },
  {
    icon: Bot,
    title: "Protection Against AI-Generated Counterfeits",
    subtitle: "Designed for the AI era",
    description: "Unlike standard QR codes or PDFs, CDP-backed QR codes cannot be reliably recreated by generative AI tools, scanners, or image-editing software.",
  },
  {
    icon: Layers,
    title: "Layered with Blockchain Verification",
    subtitle: "Physical + digital trust",
    description: "CDP secures the physical certificate, while blockchain anchoring secures the issuance record—creating a dual-layer defence against both document forgery and data manipulation.",
  },
  {
    icon: Eye,
    title: "Invisible to Users, Powerful for Institutions",
    subtitle: "No change to user experience",
    description: "CDP operates seamlessly in the background. Institutions gain stronger anti-counterfeit protection without adding friction for certificate holders or verifiers.",
  },
];

const CDPSection = () => {
  return (
    <section id="cdp" className="py-24 relative">
      <div className="container mx-auto px-6">
        <div className="max-w-3xl mx-auto text-center mb-16">
          <span className="text-primary font-semibold text-sm tracking-wider uppercase mb-4 block">
            Certificate Security
          </span>
          <h2 className="font-heading text-3xl md:text-4xl font-bold text-foreground mb-6">
            Copy Detection Pattern (CDP)–Backed QR Codes
          </h2>
          <p className="text-muted-foreground text-lg leading-relaxed">
            EmerCerts enhances certificate security by embedding Copy Detection Pattern (CDP) technology into QR codes issued on certificates.
          </p>
          <p className="text-muted-foreground text-lg mt-4 leading-relaxed">
            CDP ensures that QR codes cannot be accurately copied, reprinted, or digitally replicated, even using high-resolution scans or AI-generated reproductions.
          </p>
        </div>

        {/* Features grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 max-w-7xl mx-auto">
          {cdpFeatures.map((feature, index) => (
            <div
              key={index}
              className="group bg-card rounded-2xl p-6 border border-border/50 hover:border-primary/30 hover:shadow-soft transition-all duration-300"
            >
              <div className="w-14 h-14 rounded-2xl bg-primary/10 flex items-center justify-center mb-5 group-hover:scale-110 group-hover:bg-primary/20 transition-all duration-300">
                <feature.icon className="w-7 h-7 text-primary" />
              </div>
              <h3 className="font-heading text-lg font-bold text-foreground mb-1">
                {feature.title}
              </h3>
              <p className="text-primary text-sm font-medium mb-3">
                {feature.subtitle}
              </p>
              <p className="text-muted-foreground text-sm leading-relaxed">
                {feature.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default CDPSection;