import { Building2, UserCheck, Check } from "lucide-react";

const institutionBenefits = [
  "Protection of institutional credibility",
  "Elimination of certificate forgery risk",
  "Reduced verification-related administrative workload",
  "Permanent, audit-ready issuance records",
];

const verifierBenefits = [
  "Instant authenticity checks",
  "No dependency on emails or intermediaries",
  "Clear proof of legitimacy and issuance time",
];

const ValueSection = () => {
  return (
    <section id="value" className="py-24 bg-cream-dark/30 relative overflow-hidden">
      {/* Background elements */}
      <div className="absolute top-0 right-0 w-96 h-96 bg-primary/5 rounded-full blur-3xl" />
      <div className="absolute bottom-0 left-0 w-80 h-80 bg-primary/5 rounded-full blur-3xl" />

      <div className="container mx-auto px-6 relative z-10">
        <div className="max-w-3xl mx-auto text-center mb-16">
          <span className="text-primary font-semibold text-sm tracking-wider uppercase mb-4 block">
            Benefits
          </span>
          <h2 className="font-heading text-3xl md:text-4xl font-bold text-foreground mb-6">
            Value Delivered
          </h2>
        </div>

        <div className="grid lg:grid-cols-2 gap-8 max-w-5xl mx-auto">
          {/* For Institutions */}
          <div className="bg-card rounded-3xl p-8 border border-border shadow-soft hover:shadow-elevated transition-shadow duration-500">
            <div className="flex items-center gap-4 mb-8">
              <div className="w-14 h-14 rounded-2xl bg-primary/10 flex items-center justify-center">
                <Building2 className="w-7 h-7 text-primary" />
              </div>
              <h3 className="font-heading text-2xl font-bold text-foreground">
                For Institutions
              </h3>
            </div>

            <ul className="space-y-4">
              {institutionBenefits.map((benefit, index) => (
                <li key={index} className="flex items-start gap-4">
                  <div className="w-6 h-6 rounded-full bg-primary/10 flex items-center justify-center flex-shrink-0 mt-0.5">
                    <Check className="w-4 h-4 text-primary" />
                  </div>
                  <span className="text-foreground">{benefit}</span>
                </li>
              ))}
            </ul>
          </div>

          {/* For Verifiers */}
          <div className="bg-card rounded-3xl p-8 border border-border shadow-soft hover:shadow-elevated transition-shadow duration-500">
            <div className="flex items-center gap-4 mb-8">
              <div className="w-14 h-14 rounded-2xl bg-primary/10 flex items-center justify-center">
                <UserCheck className="w-7 h-7 text-primary" />
              </div>
              <h3 className="font-heading text-2xl font-bold text-foreground">
                For Verifiers
              </h3>
            </div>

            <ul className="space-y-4">
              {verifierBenefits.map((benefit, index) => (
                <li key={index} className="flex items-start gap-4">
                  <div className="w-6 h-6 rounded-full bg-primary/10 flex items-center justify-center flex-shrink-0 mt-0.5">
                    <Check className="w-4 h-4 text-primary" />
                  </div>
                  <span className="text-foreground">{benefit}</span>
                </li>
              ))}
            </ul>

            {/* Extra visual element */}
            <div className="mt-8 p-4 rounded-xl bg-cream-light/50 border border-border/50">
              <p className="text-sm text-muted-foreground text-center">
                Verify any certificate with a <span className="text-primary font-semibold">single scan</span>
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ValueSection;
