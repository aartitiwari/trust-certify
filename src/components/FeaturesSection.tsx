import { ShieldCheck, Clock, QrCode, Globe, Check, X } from "lucide-react";

const enablesFeatures = [
  {
    icon: ShieldCheck,
    title: "Secure issuance of official certificates",
  },
  {
    icon: Clock,
    title: "Tamper-proof recording of certificate data and issuance timestamp",
  },
  {
    icon: QrCode,
    title: "QR code and link-based public verification",
  },
  {
    icon: Globe,
    title: "Independent verification without institutional intervention",
  },
];

const doesNotDo = [
  "Conduct examinations or assessments",
  "Manage training delivery or coursework",
  "Replace existing academic or ERP systems",
];

const FeaturesSection = () => {
  return (
    <section id="features" className="py-24 relative">
      <div className="container mx-auto px-6">
        <div className="max-w-3xl mx-auto text-center mb-16">
          <span className="text-primary font-semibold text-sm tracking-wider uppercase mb-4 block">
            Capabilities
          </span>
          <h2 className="font-heading text-3xl md:text-4xl font-bold text-foreground mb-6">
            What the Platform Enables
          </h2>
          <p className="text-muted-foreground text-lg">
            Certificates can be verified by any third party with a single scan or link.
          </p>
        </div>

        {/* Features grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 max-w-6xl mx-auto mb-20">
          {enablesFeatures.map((feature, index) => (
            <div
              key={index}
              className="group text-center p-6 rounded-2xl bg-card border border-border/50 hover:border-primary/30 hover:shadow-soft transition-all duration-300"
            >
              <div className="w-16 h-16 rounded-2xl bg-primary/10 flex items-center justify-center mx-auto mb-5 group-hover:scale-110 group-hover:bg-primary/20 transition-all duration-300">
                <feature.icon className="w-8 h-8 text-primary" />
              </div>
              <p className="text-foreground font-medium leading-relaxed">
                {feature.title}
              </p>
            </div>
          ))}
        </div>

        {/* What we don't do */}
        <div className="max-w-3xl mx-auto">
          <div className="bg-cream-dark/50 rounded-2xl p-8 border border-border/50">
            <h3 className="font-heading text-2xl font-bold text-foreground mb-2 text-center">
              What the Platform Does Not Do
            </h3>
            <p className="text-muted-foreground text-center mb-8">
              The institution retains full ownership of curriculum, evaluation, and certification decisions.
            </p>
            
            <div className="grid md:grid-cols-3 gap-4">
              {doesNotDo.map((item, index) => (
                <div
                  key={index}
                  className="flex items-center gap-3 p-4 rounded-xl bg-background/50 border border-border/30"
                >
                  <div className="w-8 h-8 rounded-full bg-muted flex items-center justify-center flex-shrink-0">
                    <X className="w-4 h-4 text-muted-foreground" />
                  </div>
                  <span className="text-sm text-muted-foreground">
                    {item}
                  </span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default FeaturesSection;
