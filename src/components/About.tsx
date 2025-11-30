import { Code, TestTube, Globe } from "lucide-react";
import { Card } from "@/components/ui/card";

export const About = () => {
  const highlights = [
    {
      icon: TestTube,
      title: "Test Automation",
      description: "Expert in Playwright, Selenium & automated testing frameworks",
    },
    {
      icon: Code,
      title: "Performance Testing",
      description: "Load testing & performance validation using JMeter",
    },
    {
      icon: Globe,
      title: "Quality Engineering",
      description: "Manual & automated QA with comprehensive test coverage",
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
              Quality Assurance Engineer with over 1.5 years of hands-on experience in software testing, 
              test automation, and performance validation. Specialized in creating robust test frameworks 
              using Playwright, Selenium, and JMeter to ensure software reliability and quality. Proficient 
              in both manual and automated testing methodologies, with a strong focus on delivering 
              bug-free, high-performance applications. Passionate about continuous testing, quality metrics, 
              and implementing best practices in QA processes.
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
