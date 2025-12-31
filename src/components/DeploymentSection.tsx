import { Landmark, Award, GraduationCap, BadgeCheck } from "lucide-react";

const applicableFor = [
  { icon: Landmark, text: "Government and autonomous institutes" },
  { icon: Award, text: "Certification and awarding bodies" },
  { icon: GraduationCap, text: "Skill development and training authorities" },
  { icon: BadgeCheck, text: "Professional and product certification organisations" },
];

const DeploymentSection = () => {
  return (
    <section id="deployment" className="py-24 relative">
      <div className="container mx-auto px-6">
        <div className="max-w-3xl mx-auto text-center mb-16">
          <span className="text-primary font-semibold text-sm tracking-wider uppercase mb-4 block">
            Applicability
          </span>
          <h2 className="font-heading text-3xl md:text-4xl font-bold text-foreground mb-6">
            Deployment & Use Cases
          </h2>
          <p className="text-muted-foreground text-lg font-body">
            The platform is suitable for a wide range of institutional and official credential issuance.
          </p>
        </div>

        {/* Applicable for */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6 max-w-5xl mx-auto">
          {applicableFor.map((item, index) => (
            <div
              key={index}
              className="group flex flex-col items-center text-center p-6 rounded-2xl bg-card border border-border/50 hover:border-primary/30 hover:shadow-soft transition-all duration-300"
            >
              <div className="w-14 h-14 rounded-2xl bg-primary/10 flex items-center justify-center mb-4 group-hover:scale-110 transition-transform duration-300">
                <item.icon className="w-7 h-7 text-primary" />
              </div>
              <p className="text-foreground font-medium text-sm font-body">
                {item.text}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default DeploymentSection;