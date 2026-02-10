import { Briefcase } from "lucide-react";
import { Card } from "@/components/ui/card";

export const Experience = () => {
  const experiences = [
    {
      year: "2025 - 2026",
      roles: [
        {
          title: "Quality Assurance Engineer",
          company: "Commercializer (Private) Limited",
          responsibilities: [
            "Performing comprehensive QA activities for products including Sufra OS, ArivPay, and Intaj",
            "Designing and executing test plans, test cases, and test scripts for web and mobile applications",
            "Conducting functional, regression, and integration testing to ensure product quality",
            "Identifying, documenting, and tracking defects using bug tracking tools",
            "Collaborating with cross-functional development teams to ensure timely delivery of high-quality software",
            "Participating in sprint planning and daily stand-ups within Agile/Scrum methodology",
          ],
        },
      ],
    },
    {
      year: "2024 - 2025",
      roles: [
        {
          title: "Quality Assurance Engineer",
          company: "eSupport Technologies",
          responsibilities: [
            "Designed and executed comprehensive test plans for web applications ensuring quality standards",
            "Developed automated test scripts using Playwright and Selenium, reducing testing time by 60%",
            "Performed load and performance testing using Apache JMeter to identify system bottlenecks",
            "Created detailed test reports and documentation, tracking defects through Jira",
            "Collaborated with development teams in Agile/Scrum environment for continuous testing",
            "Conducted API testing using Postman to validate backend functionality",
            "Implemented test frameworks following Page Object Model (POM) for maintainability",
          ],
        },
        {
          title: "Quality Assurance Engineer Intern",
          company: "eSupport Technologies",
          responsibilities: [
            "Executed manual testing for web applications, identifying and documenting critical bugs",
            "Participated in automation testing initiatives using Selenium and Playwright",
            "Assisted in creating test cases and test scenarios for various project modules",
          ],
        },
      ],
    },
    {
      year: "2023 - 2024",
      roles: [
        {
          title: "Frontend Developer",
          company: "Realpos pvt ltd",
          responsibilities: [
            "Dynamic and detail-oriented Frontend Developer with hands-on experience in building responsive and interactive web applications",
            "Proficient in modern frontend technologies including React, JavaScript, HTML, and CSS",
            "Skilled in translating and developing UI/UX designs into high-quality code while optimizing performance and user experience",
          ],
        },
      ],
    },
    {
      year: "2023",
      roles: [
        {
          title: "WordPress Developer",
          company: "Freelance",
          responsibilities: [
            "Developed 10+ WordPress websites for various clients",
            "Customized themes and plugins to meet client requirements",
            "Optimized websites for performance and SEO",
          ],
        },
      ],
    },
  ];

  return (
    <section id="experience" className="py-24 bg-background">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16 animate-fade-up">
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            Work <span className="gradient-text">Experience</span>
          </h2>
          <div className="w-20 h-1 gradient-primary mx-auto rounded-full"></div>
        </div>

        <div className="max-w-4xl mx-auto space-y-8">
          {experiences.map((exp, index) => (
            <div
              key={index}
              className="relative pl-8 md:pl-12 border-l-4 border-primary/30 animate-fade-up"
              style={{ animationDelay: `${index * 100}ms` }}
            >
              {/* Timeline dot */}
              <div className="absolute left-0 top-0 transform -translate-x-1/2">
                <div className="w-8 h-8 rounded-full gradient-primary flex items-center justify-center shadow-glow">
                  <Briefcase className="h-4 w-4 text-white" />
                </div>
              </div>

              {/* Year badge */}
              <div className="inline-block px-4 py-1 bg-primary text-primary-foreground rounded-full text-sm font-semibold mb-4">
                {exp.year}
              </div>

              {/* Roles */}
              {exp.roles.map((role, roleIndex) => (
                <Card key={roleIndex} className="p-6 mb-4 border-2 hover:shadow-lg transition-shadow">
                  <h3 className="text-xl font-bold mb-1">{role.title}</h3>
                  <p className="text-primary font-semibold mb-4">{role.company}</p>
                  <ul className="space-y-2">
                    {role.responsibilities.map((resp, respIndex) => (
                      <li key={respIndex} className="flex items-start gap-2 text-muted-foreground">
                        <span className="text-primary mt-1">▹</span>
                        <span>{resp}</span>
                      </li>
                    ))}
                  </ul>
                </Card>
              ))}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
