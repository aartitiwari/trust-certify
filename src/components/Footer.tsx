import { Shield } from "lucide-react";

const Footer = () => {
  return (
    <footer className="py-12 bg-cream-dark/50 border-t border-border">
      <div className="container mx-auto px-6">
        <div className="flex flex-col md:flex-row items-center justify-between gap-6">
          {/* Logo */}
          <div className="flex items-center gap-3">
            <Shield className="w-6 h-6 text-primary" />
            <span className="font-heading text-lg font-bold text-foreground">
              CertifySecure
            </span>
          </div>

          {/* Links */}
          <div className="flex items-center gap-8">
            <a href="#problem" className="text-sm text-muted-foreground hover:text-foreground transition-colors">
              Problem
            </a>
            <a href="#solution" className="text-sm text-muted-foreground hover:text-foreground transition-colors">
              Solution
            </a>
            <a href="#features" className="text-sm text-muted-foreground hover:text-foreground transition-colors">
              Features
            </a>
            <a href="#value" className="text-sm text-muted-foreground hover:text-foreground transition-colors">
              Value
            </a>
          </div>

          {/* Copyright */}
          <p className="text-sm text-muted-foreground">
            © 2024 CertifySecure. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
