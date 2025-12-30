import { AlertTriangle, Mail, Clock, Bot } from "lucide-react";

const problems = [
  {
    icon: AlertTriangle,
    title: "Loss of control after issuance",
    description: "Certificates leave institutional systems and circulate externally, with limited ability to ensure authenticity.",
  },
  {
    icon: Mail,
    title: "Manual and inefficient verification",
    description: "Verification requests rely on emails, phone calls, or internal registers — wasting valuable administrative time.",
  },
  {
    icon: Clock,
    title: "Inability to prove issuance details",
    description: "Establishing when a certificate was issued, and whether it was altered, becomes difficult over time.",
  },
  {
    icon: Bot,
    title: "AI-enabled certificate counterfeiting",
    description: "Recent years have seen multiple reported cases globally where forged degree certificates and professional credentials purportedly issued by well-known universities and institutes were generated using advanced digital and AI tools. These documents closely replicate official formats, seals, and signatures, making visual inspection ineffective.",
  },
];

const ProblemSection = () => {
  return (
    <section id="problem" className="py-24 relative">
      <div className="container mx-auto px-6">
        <div className="max-w-3xl mx-auto text-center mb-16">
          <span className="text-primary font-semibold text-sm tracking-wider uppercase mb-4 block">
            The Challenge
          </span>
          <h2 className="font-heading text-3xl md:text-4xl font-bold text-foreground mb-6">
            The Problem We Address
          </h2>
          <p className="text-muted-foreground text-lg">
            These issues directly impact institutional reputation and administrative efficiency.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 max-w-7xl mx-auto">
          {problems.map((problem, index) => (
            <div
              key={index}
              className="group relative bg-card rounded-2xl p-8 border border-border/50 hover:border-primary/30 transition-all duration-500 hover:shadow-elevated"
            >
              {/* Glow effect on hover */}
              <div className="absolute inset-0 rounded-2xl bg-primary/5 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
              
              <div className="relative z-10">
                <div className="w-14 h-14 rounded-xl bg-primary/10 flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300">
                  <problem.icon className="w-7 h-7 text-primary" />
                </div>
                
                <h3 className="font-heading text-xl font-bold text-foreground mb-4">
                  {problem.title}
                </h3>
                
                <p className="text-muted-foreground leading-relaxed">
                  {problem.description}
                </p>
              </div>

              {/* Decorative corner */}
              <div className="absolute top-0 right-0 w-20 h-20 overflow-hidden rounded-tr-2xl">
                <div className="absolute -top-10 -right-10 w-20 h-20 bg-primary/5 rotate-45 group-hover:bg-primary/10 transition-colors" />
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ProblemSection;
