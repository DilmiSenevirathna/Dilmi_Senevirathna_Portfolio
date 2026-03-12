import { GraduationCap, Award, FileCheck } from "lucide-react";
import { Card } from "@/components/ui/card";

export const Education = () => {
  return (
    <section id="education" className="py-24 bg-muted/30">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16 animate-fade-up">
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            Education & <span className="gradient-text">Certifications</span>
          </h2>
          <div className="w-20 h-1 gradient-primary mx-auto rounded-full"></div>
        </div>

        <div className="max-w-5xl mx-auto space-y-6">
          {/* University Degree */}
          <Card className="p-8 border-2 hover:shadow-lg transition-all hover:-translate-y-1">
            <div className="flex items-start gap-6">
              <div className="flex-shrink-0">
                <div className="w-16 h-16 rounded-full gradient-primary flex items-center justify-center">
                  <GraduationCap className="h-8 w-8 text-white" />
                </div>
              </div>
              <div className="flex-1">
                <h3 className="text-2xl font-bold mb-2">Bachelor of Software Engineering (Honours)</h3>
                <p className="text-primary font-semibold mb-2">Open University Sri Lanka</p>
                <p className="text-muted-foreground mb-2">2021 - Present</p>
                <p className="text-muted-foreground">
                  Currently pursuing degree with focus on software development methodologies, algorithms, and system design.
                </p>
              </div>
            </div>
          </Card>

          {/* BA in HRM */}
          <Card className="p-8 border-2 hover:shadow-lg transition-all hover:-translate-y-1">
            <div className="flex items-start gap-6">
              <div className="flex-shrink-0">
                <div className="w-16 h-16 rounded-full gradient-primary flex items-center justify-center">
                  <GraduationCap className="h-8 w-8 text-white" />
                </div>
              </div>
              <div className="flex-1">
                <h3 className="text-2xl font-bold mb-2">Bachelor of Arts in Human Resources Management (HND Level)</h3>
                <p className="text-primary font-semibold mb-2">IMBS Green Campus</p>
              </div>
            </div>
          </Card>

          {/* ISTQB Certificate */}
          <Card className="p-8 border-2 hover:shadow-lg transition-all hover:-translate-y-1">
            <div className="flex items-start gap-6">
              <div className="flex-shrink-0">
                <div className="w-16 h-16 rounded-full gradient-primary flex items-center justify-center">
                  <FileCheck className="h-8 w-8 text-white" />
                </div>
              </div>
              <div className="flex-1">
                <h3 className="text-2xl font-bold mb-2">ISTQB Foundation Level Certificate</h3>
                <p className="text-primary font-semibold mb-2">S L Software Testing Board</p>
                <p className="text-muted-foreground mb-2">Reading</p>
                <p className="text-muted-foreground">Preparing for September exam</p>
              </div>
            </div>
          </Card>

          {/* Diplomas */}
          <Card className="p-8 border-2 hover:shadow-lg transition-all hover:-translate-y-1">
            <div className="flex items-start gap-6">
              <div className="flex-shrink-0">
                <div className="w-16 h-16 rounded-full gradient-primary flex items-center justify-center">
                  <Award className="h-8 w-8 text-white" />
                </div>
              </div>
              <div className="flex-1">
                <h3 className="text-2xl font-bold mb-4">Diplomas</h3>
                <ul className="grid md:grid-cols-2 gap-3">
                  {[
                    "Diploma in Human Resources Management - IMBS Green Campus",
                    "Diploma in English - IMBS Green Campus",
                    "Diploma in Cyber Security and Ethical Hacking - SITC Campus",
                    "Diploma in Software Testing",
                  ].map((diploma, index) => (
                    <li key={index} className="flex items-start gap-2">
                      <span className="text-primary mt-1">•</span>
                      <span className="text-muted-foreground">{diploma}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </Card>

          {/* Certificates */}
          <Card className="p-8 border-2 hover:shadow-lg transition-all hover:-translate-y-1">
            <div className="flex items-start gap-6">
              <div className="flex-shrink-0">
                <div className="w-16 h-16 rounded-full gradient-primary flex items-center justify-center">
                  <Award className="h-8 w-8 text-white" />
                </div>
              </div>
              <div className="flex-1">
                <h3 className="text-2xl font-bold mb-4">Professional Certificates</h3>
                <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-3">
                  {[
                    "Quality Assurance (QA) Techniques",
                    "Test Automation Foundation",
                    "API Test Automation",
                    "Continuous Testing",
                    "Web Element Locator Strategies",
                    "Selenium IDE Automation",
                  ].map((cert, index) => (
                    <div
                      key={index}
                      className="px-4 py-2 bg-muted rounded-lg text-center hover:bg-primary hover:text-primary-foreground transition-colors cursor-default"
                    >
                      {cert}
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </Card>
        </div>
      </div>
    </section>
  );
};
