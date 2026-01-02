import { LayoutDashboard, Link2, FileSpreadsheet, Paintbrush } from "lucide-react";

const implementationFeatures = [
  {
    icon: LayoutDashboard,
    title: "Organisation-Wide Credential Dashboard",
    description: "A centralised platform to monitor and manage certificates and verifications.",
  },
  {
    icon: Link2,
    title: "Integration with Existing Result Systems",
    description: "Easily integrates with current academic systems for seamless certificate issuance.",
  },
  {
    icon: FileSpreadsheet,
    title: "Excel Uploads with Custom Templates",
    description: "Simple bulk data uploads using custom Excel templates for results and certificates.",
  },
  {
    icon: Paintbrush,
    title: "White-Label Deployment",
    description: "Fully customisable to align with institutional branding and experience.",
  },
];

const ImplementationSection = () => {
  return (
    <section id="implementation" className="py-24 bg-cream-dark/30 relative overflow-hidden">
      {/* Background elements */}
      <div className="absolute top-0 right-0 w-96 h-96 bg-primary/5 rounded-full blur-3xl" />
      <div className="absolute bottom-0 left-0 w-80 h-80 bg-primary/5 rounded-full blur-3xl" />

      <div className="container mx-auto px-6 relative z-10">
        <div className="max-w-3xl mx-auto text-center mb-16">
          <span className="text-primary font-semibold text-sm tracking-wider uppercase mb-4 block">
            Implementation
          </span>
          <h2 className="font-heading text-3xl md:text-4xl font-bold text-foreground mb-6">
            How Institutions Deploy EmerCerts
          </h2>
          <p className="text-muted-foreground text-lg">
            EmerCerts integrates seamlessly with existing institutional systems and workflows, without requiring changes to examinations, assessments, or result-generation processes. Integrates seamlessly with existing systems without vendor lock-in or dependency on proprietary registries.
          </p>
        </div>

        {/* Features grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 max-w-7xl mx-auto">
          {implementationFeatures.map((feature, index) => (
            <div
              key={index}
              className="group bg-card rounded-2xl p-6 border border-border/50 hover:border-primary/30 hover:shadow-elevated transition-all duration-500"
            >
              <div className="w-14 h-14 rounded-2xl bg-primary/10 flex items-center justify-center mb-5 group-hover:scale-110 group-hover:bg-primary/20 transition-all duration-300">
                <feature.icon className="w-7 h-7 text-primary" />
              </div>
              <h3 className="font-heading text-lg font-bold text-foreground mb-3">
                {feature.title}
              </h3>
              <p className="text-muted-foreground text-sm leading-relaxed font-body">
                {feature.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ImplementationSection;