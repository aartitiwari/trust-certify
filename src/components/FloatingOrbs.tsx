import { Shield, ShieldCheck, Lock } from "lucide-react";

const FloatingOrbs = () => {
  return (
    <div className="absolute inset-0 overflow-hidden pointer-events-none">
      {/* Large gradient orb - top right */}
      <div 
        className="absolute -top-40 -right-40 w-96 h-96 rounded-full bg-purple/10 blur-3xl animate-pulse-glow"
      />
      
      {/* Medium orb - bottom left */}
      <div 
        className="absolute -bottom-20 -left-20 w-72 h-72 rounded-full bg-purple/8 blur-2xl animate-pulse-glow"
        style={{ animationDelay: '2s' }}
      />
      
      {/* Small floating shields */}
      <div className="absolute top-1/4 right-1/4 animate-float opacity-20">
        <Shield className="w-12 h-12 text-primary" />
      </div>
      
      <div className="absolute top-1/2 left-1/6 animate-float-delayed opacity-15">
        <ShieldCheck className="w-8 h-8 text-primary" />
      </div>
      
      <div className="absolute bottom-1/4 right-1/6 animate-float opacity-10" style={{ animationDelay: '4s' }}>
        <Lock className="w-10 h-10 text-primary" />
      </div>

      {/* Decorative circles */}
      <div className="absolute top-20 left-1/3 w-2 h-2 rounded-full bg-primary/30 animate-pulse" />
      <div className="absolute top-1/3 right-1/3 w-3 h-3 rounded-full bg-primary/20 animate-pulse" style={{ animationDelay: '1s' }} />
      <div className="absolute bottom-1/3 left-1/4 w-2 h-2 rounded-full bg-primary/25 animate-pulse" style={{ animationDelay: '1.5s' }} />
    </div>
  );
};

export default FloatingOrbs;
