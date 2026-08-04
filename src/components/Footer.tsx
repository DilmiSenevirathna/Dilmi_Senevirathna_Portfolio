import { Github, Linkedin, Mail, Phone } from "lucide-react";

export const Footer = () => {
  return (
    <footer className="bg-muted/50 py-12 border-t">
      <div className="container mx-auto px-4">
        <div className="flex flex-col md:flex-row justify-between items-center gap-6">
          {/* Copyright */}
          <div className="text-center md:text-left">
            <p className="text-muted-foreground">
              © {new Date().getFullYear()} Dilmi Senevirathna. All rights reserved.
            </p>
            <p className="text-sm text-muted-foreground mt-1">
              Built with React, TypeScript & Tailwind CSS
            </p>
          </div>

          {/* Social Links */}
          <div className="flex gap-4">
            <a
              href="https://github.com/DilSenevirathna"
              target="_blank"
              rel="noopener noreferrer"
              className="p-3 rounded-full bg-background border-2 hover:border-primary hover:shadow-lg transition-all"
              aria-label="GitHub"
            >
              <Github className="h-5 w-5" />
            </a>
            <a
              href="https://www.linkedin.com/in/dilmi-senevirathna-6b6933228"
              target="_blank"
              rel="noopener noreferrer"
              className="p-3 rounded-full bg-background border-2 hover:border-primary hover:shadow-lg transition-all"
              aria-label="LinkedIn"
            >
              <Linkedin className="h-5 w-5" />
            </a>
            <a
              href="mailto:chathuryadilmi@gmail.com"
              className="p-3 rounded-full bg-background border-2 hover:border-primary hover:shadow-lg transition-all"
              aria-label="Email"
            >
              <Mail className="h-5 w-5" />
            </a>
            <a
              href="tel:+94775765299"
              className="p-3 rounded-full bg-background border-2 hover:border-primary hover:shadow-lg transition-all"
              aria-label="Phone"
            >
              <Phone className="h-5 w-5" />
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};
