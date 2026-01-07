import { Download, Github, Linkedin, Mail } from "lucide-react";
import { Button } from "@/components/ui/button";
import profilePicture from "@/assets/profile-picture.png";

export const Hero = () => {
  return (
    <section className="min-h-screen flex items-center justify-center gradient-hero relative overflow-hidden pt-20">
      {/* Animated background elements */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute w-96 h-96 bg-white/10 rounded-full blur-3xl -top-48 -left-48 animate-pulse-glow"></div>
        <div className="absolute w-96 h-96 bg-white/10 rounded-full blur-3xl -bottom-48 -right-48 animate-pulse-glow delay-1000"></div>
      </div>

      <div className="container mx-auto px-4 relative z-10">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          {/* Left content */}
          <div className="text-white space-y-6 animate-fade-up">
            <div className="inline-block px-4 py-2 bg-white/20 backdrop-blur-sm rounded-full text-sm font-medium mb-4">
              👋 Welcome to my portfolio
            </div>
            
            <h1 className="text-5xl md:text-7xl font-bold leading-tight">
              Dilmi
              <br />
              <span className="text-white/90">Senevirathna</span>
            </h1>
            
            <p className="text-xl md:text-2xl text-white/90 font-light">
              QA Engineer | Software Engineer | Web Developer
            </p>
            
            <p className="text-lg text-white/80 max-w-xl">
              Quality Assurance Engineer with over 1.5 years of experience specializing in test automation, performance testing, and software quality validation. Skilled in Playwright, Selenium, JMeter, and modern testing methodologies.
            </p>

            <div className="flex flex-wrap gap-4 pt-4">
              <Button
                size="lg"
                variant="secondary"
                className="gap-2 shadow-lg hover:shadow-xl transition-shadow"
              >
                <Download className="h-5 w-5" />
                Download CV
              </Button>
              
              <Button
                size="lg"
                variant="outline"
                className="gap-2 border-white/20 bg-white/10 text-white hover:bg-white/20 backdrop-blur-sm"
                onClick={() => document.querySelector("#contact")?.scrollIntoView({ behavior: "smooth" })}
              >
                <Mail className="h-5 w-5" />
                Get in Touch
              </Button>
            </div>

            {/* Social Links */}
            <div className="flex gap-4 pt-4">
              <a
                href="https://github.com/DilSenevirathna"
                target="_blank"
                rel="noopener noreferrer"
                className="p-3 bg-white/10 backdrop-blur-sm rounded-full hover:bg-white/20 transition-colors"
              >
                <Github className="h-5 w-5 text-white" />
              </a>
              <a
                href="#"
                target="_blank"
                rel="noopener noreferrer"
                className="p-3 bg-white/10 backdrop-blur-sm rounded-full hover:bg-white/20 transition-colors"
              >
                <Linkedin className="h-5 w-5 text-white" />
              </a>
              <a
                href="mailto:chathuryadilmi@gmail.com"
                className="p-3 bg-white/10 backdrop-blur-sm rounded-full hover:bg-white/20 transition-colors"
              >
                <Mail className="h-5 w-5 text-white" />
              </a>
            </div>
          </div>

          {/* Right content - Profile Image */}
          <div className="flex justify-center animate-fade-in">
            <div className="relative">
              <div className="w-80 h-80 md:w-96 md:h-96 rounded-3xl overflow-hidden border-4 border-white/20 shadow-2xl animate-float">
                <img 
                  src={profilePicture} 
                  alt="Dilmi Senevirathna" 
                  className="w-full h-full object-cover"
                />
              </div>
              {/* Decorative elements */}
              <div className="absolute -top-4 -right-4 w-24 h-24 bg-accent/30 rounded-full blur-2xl"></div>
              <div className="absolute -bottom-4 -left-4 w-32 h-32 bg-primary/30 rounded-full blur-2xl"></div>
            </div>
          </div>
        </div>
      </div>

      {/* Scroll indicator */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
        <div className="w-6 h-10 border-2 border-white/30 rounded-full flex justify-center pt-2">
          <div className="w-1 h-2 bg-white/50 rounded-full"></div>
        </div>
      </div>
    </section>
  );
};
