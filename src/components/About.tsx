import { Code, TestTube, Globe, CheckCircle2 } from "lucide-react";
import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";

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

        {/* Good-to-have QA skills in demand */}
        <div className="max-w-5xl mx-auto mb-16">
          <Card className="p-8 md:p-10 border-2 hover:shadow-xl transition-shadow">
            <div className="flex items-center gap-3 mb-6">
              <div className="inline-flex items-center justify-center w-10 h-10 rounded-full gradient-primary">
                <CheckCircle2 className="h-5 w-5 text-white" />
              </div>
              <h3 className="text-2xl font-bold">
                In-Demand QA Skills
              </h3>
            </div>
            <p className="text-muted-foreground mb-6">
              Trending manual & automation QA skills currently sought after in the job market.
            </p>

            <div className="grid md:grid-cols-2 gap-8">
              <div>
                <h4 className="text-lg font-semibold mb-4 flex items-center gap-2">
                  🧪 Manual Testing
                </h4>
                <div className="flex flex-wrap gap-2">
                  {[
                    "Exploratory Testing",
                    "Risk-Based Testing",
                    "Accessibility (WCAG)",
                    "Cross-Browser Testing",
                    "Mobile Testing",
                    "API Testing (Postman)",
                    "SQL & DB Validation",
                    "Agile / Scrum",
                    "Jira & TestRail",
                    "Bug Triage & RCA",
                    "Usability Testing",
                    "Security Testing Basics",
                  ].map((skill) => (
                    <Badge
                      key={skill}
                      variant="secondary"
                      className="text-sm py-1.5 px-3 hover:bg-primary hover:text-primary-foreground transition-colors cursor-default"
                    >
                      {skill}
                    </Badge>
                  ))}
                </div>
              </div>

              <div>
                <h4 className="text-lg font-semibold mb-4 flex items-center gap-2">
                  🤖 Automation Testing
                </h4>
                <div className="flex flex-wrap gap-2">
                  {[
                    "Playwright",
                    "Cypress",
                    "Selenium WebDriver",
                    "Mabl AI",
                    "TestNG / JUnit",
                    "REST Assured",
                    "CI/CD (GitHub Actions, Jenkins)",
                    "Docker Basics",
                    "Git & GitHub",
                    "Page Object Model",
                    "BDD (Cucumber)",
                    "Performance (JMeter / k6)",
                    "AI-Assisted Testing",
                    "TypeScript / Python",
                  ].map((skill) => (
                    <Badge
                      key={skill}
                      variant="secondary"
                      className="text-sm py-1.5 px-3 hover:bg-primary hover:text-primary-foreground transition-colors cursor-default"
                    >
                      {skill}
                    </Badge>
                  ))}
                </div>
              </div>
            </div>
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
