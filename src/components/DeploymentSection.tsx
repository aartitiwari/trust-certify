import { Landmark, Award, GraduationCap, BadgeCheck, Building } from "lucide-react";

const applicableFor = [
  { icon: Landmark, text: "Government and autonomous institutes" },
  { icon: Award, text: "Certification and awarding bodies" },
  { icon: GraduationCap, text: "Skill development and training authorities" },
  { icon: BadgeCheck, text: "Professional and product certification organisations" },
];

const deployedWith = [
  {
    name: "IRMRI",
    description: "Institutional credential issuance",
  },
  {
    name: "Konkan Bhavan",
    description: "Official certificate verification",
  },
  {
    name: "Navi Mumbai Municipal Corporation",
    description: "Government credential management",
  },
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
          <p className="text-muted-foreground text-lg">
            The platform is suitable for a wide range of institutional and official credential issuance.
          </p>
        </div>

        {/* Applicable for */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6 max-w-5xl mx-auto mb-20">
          {applicableFor.map((item, index) => (
            <div
              key={index}
              className="group flex flex-col items-center text-center p-6 rounded-2xl bg-card border border-border/50 hover:border-primary/30 hover:shadow-soft transition-all duration-300"
            >
              <div className="w-14 h-14 rounded-2xl bg-primary/10 flex items-center justify-center mb-4 group-hover:scale-110 transition-transform duration-300">
                <item.icon className="w-7 h-7 text-primary" />
              </div>
              <p className="text-foreground font-medium text-sm">
                {item.text}
              </p>
            </div>
          ))}
        </div>

        {/* Deployed with */}
        <div className="max-w-4xl mx-auto">
          <h3 className="font-heading text-2xl font-bold text-foreground text-center mb-8">
            Trusted by Leading Organisations
          </h3>
          
          <div className="grid md:grid-cols-3 gap-6">
            {deployedWith.map((org, index) => (
              <div
                key={index}
                className="relative group bg-gradient-card rounded-2xl p-6 border border-border/50 hover:border-primary/30 transition-all duration-300 overflow-hidden"
              >
                {/* Decorative accent */}
                <div className="absolute top-0 left-0 w-full h-1 bg-gradient-purple opacity-0 group-hover:opacity-100 transition-opacity" />
                
                <div className="flex items-center gap-3 mb-3">
                  <Building className="w-5 h-5 text-primary" />
                  <h4 className="font-heading text-lg font-bold text-foreground">
                    {org.name}
                  </h4>
                </div>
                <p className="text-muted-foreground text-sm">
                  {org.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default DeploymentSection;
