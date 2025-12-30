import Navigation from "@/components/Navigation";
import HeroSection from "@/components/HeroSection";
import ProblemSection from "@/components/ProblemSection";
import SolutionSection from "@/components/SolutionSection";
import FeaturesSection from "@/components/FeaturesSection";
import CDPSection from "@/components/CDPSection";
import ImplementationSection from "@/components/ImplementationSection";
import ValueSection from "@/components/ValueSection";
import DeploymentSection from "@/components/DeploymentSection";
import CTASection from "@/components/CTASection";
import Footer from "@/components/Footer";

const Index = () => {
  return (
    <div className="min-h-screen bg-background">
      <Navigation />
      <main>
        <HeroSection />
        <ProblemSection />
        <SolutionSection />
        <FeaturesSection />
        <CDPSection />
        <ImplementationSection />
        <ValueSection />
        <DeploymentSection />
        <CTASection />
      </main>
      <Footer />
    </div>
  );
};

export default Index;