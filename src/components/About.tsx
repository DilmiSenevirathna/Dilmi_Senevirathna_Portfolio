import { Code, TestTube, Globe } from "lucide-react";
import { Card } from "@/components/ui/card";

export const About = () => {
  const highlights = [
    {
      icon: Code,
      title: "Full-Stack Development",
      description: "Building responsive and scalable web applications",
    },
    {
      icon: TestTube,
      title: "Quality Assurance",
      description: "Ensuring software quality through rigorous testing",
    },
    {
      icon: Globe,
      title: "Web Technologies",
      description: "Expert in React, PHP, WordPress & modern frameworks",
    },
  ];

  return (
    <section id="about" className="py-24 bg-background">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16 animate-fade-up">
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            About <span className="gradient-text">Me</span>
          </h2>
          <div className="w-20 h-1 gradient-primary mx-auto rounded-full"></div>
        </div>

        <div className="max-w-4xl mx-auto mb-16">
          <Card className="p-8 md:p-12 border-2 hover:shadow-xl transition-shadow">
            <p className="text-lg text-muted-foreground leading-relaxed">
              Software Engineer and Quality Assurance Engineer with over 1.5 years of experience 
              in front-end development and software testing. Skilled in building responsive and 
              high-performance web applications using modern technologies. Passionate about learning, 
              collaboration, and delivering scalable solutions that make a difference.
            </p>
          </Card>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {highlights.map((item, index) => (
            <Card
              key={index}
              className="p-8 text-center hover:shadow-lg transition-all hover:-translate-y-2 border-2 group"
              style={{ animationDelay: `${index * 100}ms` }}
            >
              <div className="inline-flex items-center justify-center w-16 h-16 rounded-full gradient-primary mb-4 group-hover:animate-pulse-glow">
                <item.icon className="h-8 w-8 text-white" />
              </div>
              <h3 className="text-xl font-semibold mb-2">{item.title}</h3>
              <p className="text-muted-foreground">{item.description}</p>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};
