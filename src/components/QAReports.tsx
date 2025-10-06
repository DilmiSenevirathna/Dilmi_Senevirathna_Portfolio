import { FileCheck, Github, ExternalLink, Award } from "lucide-react";
import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";

export const QAReports = () => {
  const testReports = [
    {
      title: "Manual Testing – LankaJobs.lk",
      description: "Manual testing report for LankaJobs job portal validating core user journeys like registration and CV upload.",
      reportUrl: "https://github.com/DilSenevirathna/QA-testing-samples",
      github: "https://github.com/DilSenevirathna/QA-testing-samples",
    },
    {
      title: "Selenium Testing – PickMe.lk",
      description: "Automated Selenium test for login, booking, and payment functionalities on PickMe ride sharing platform.",
      reportUrl: "https://github.com/DilSenevirathna/QA-testing-samples",
      github: "https://github.com/DilSenevirathna/QA-testing-samples",
    },
    {
      title: "Manual Testing – Takas.lk",
      description: "Test report covering checkout and cart behavior on Takas.lk shopping platform.",
      reportUrl: "https://github.com/DilSenevirathna/QA-testing-samples",
      github: "https://github.com/DilSenevirathna/QA-testing-samples",
    },
    {
      title: "Selenium Testing – MyDeal.lk",
      description: "Automated UI verification for deals, countdowns, and filters on MyDeal.lk platform.",
      reportUrl: "https://github.com/DilSenevirathna/QA-testing-samples",
      github: "https://github.com/DilSenevirathna/QA-testing-samples",
    },
    {
      title: "Hybrid Testing – Kapruka.com",
      description: "Combination of manual and Selenium testing on gift ordering and delivery modules.",
      reportUrl: "https://github.com/DilSenevirathna/QA-testing-samples",
      github: "https://github.com/DilSenevirathna/QA-testing-samples",
    },
    {
      title: "Learnmate QA Test Report",
      description: "Detailed quality assurance testing documentation including test cases, results, and automation scripts.",
      reportUrl: "https://drive.google.com/file/d/1ba11nbUt2g39Y8L07CngGnT9NKc304pX/view?usp=sharing",
      github: "https://github.com/DilSenevirathna/QA-testing-samples",
    },
    {
      title: "Test Automation – Library Management System",
      description: "Comprehensive test automation documentation for LMS with manual and Selenium testing.",
      reportUrl: "https://drive.google.com/file/d/1JcMnGuUIzz-gPlRH4rsASdQzEtVqge0O/view?usp=drive_link",
      github: "https://github.com/DilSenevirathna/QA-testing-samples",
    },
  ];

  const certifications = [
    {
      title: "Cost of Software Quality",
      date: "February 2024",
      url: "https://drive.google.com/file/d/1U2e58T7ftRppektEqXWGoglfTYcX42TF/view?usp=sharing",
    },
    {
      title: "Foundation of Successful Automation",
      date: "February 2024",
      url: "https://drive.google.com/file/d/1sT6MziIed9BOd8noZjXYcWtLX5Oebyva/view?usp=drive_link",
    },
    {
      title: "Quality Assurance Techniques and Methodologies",
      date: "March 2024",
      url: "https://drive.google.com/file/d/1PZL21BNbwgvXv4c8fH0CLqsDrl6BB6yF/view?usp=drive_link",
    },
    {
      title: "API Test Automation with Postman",
      date: "March 2024",
      url: "https://drive.google.com/file/d/1GB0VlYlKxwMhawa7nO9gJW4rj2V8JCyt/view?usp=drive_link",
    },
    {
      title: "Continuous Testing",
      date: "March 2024",
      url: "https://drive.google.com/file/d/1DQEADRzn0jwHyMb4fj1rB34gfXvaHarN/view?usp=drive_link",
    },
    {
      title: "Web Element Locator Strategies",
      date: "April 2024",
      url: "https://drive.google.com/file/d/19afDi6S2fz9Ap6jayPIEI161zcIUEYnp/view?usp=drive_link",
    },
    {
      title: "Codeless Test Automation with Selenium IDE",
      date: "April 2024",
      url: "https://drive.google.com/file/d/1SP_2bj1oMv2kpwrRVRHhrE0UstGKHgv-/view?usp=drive_link",
    },
  ];

  return (
    <section id="qa-reports" className="py-24 bg-muted/30">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16 animate-fade-up">
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            QA Reports & <span className="gradient-text">Certifications</span>
          </h2>
          <div className="w-20 h-1 gradient-primary mx-auto rounded-full"></div>
          <p className="text-muted-foreground mt-4 text-lg">
            Quality assurance documentation and professional certifications
          </p>
        </div>

        <Tabs defaultValue="reports" className="max-w-6xl mx-auto">
          <TabsList className="grid w-full grid-cols-2 mb-8">
            <TabsTrigger value="reports">Test Reports</TabsTrigger>
            <TabsTrigger value="certifications">Certifications</TabsTrigger>
          </TabsList>

          {/* Test Reports */}
          <TabsContent value="reports" className="space-y-6">
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
              {testReports.map((report, index) => (
                <Card
                  key={index}
                  className="p-6 border-2 hover:shadow-xl transition-all hover:-translate-y-2 group"
                >
                  <div className="w-12 h-12 rounded-full gradient-primary flex items-center justify-center mb-4 group-hover:animate-pulse-glow">
                    <FileCheck className="h-6 w-6 text-white" />
                  </div>
                  <h3 className="text-lg font-bold mb-3 group-hover:text-primary transition-colors">
                    {report.title}
                  </h3>
                  <p className="text-muted-foreground mb-4 text-sm line-clamp-3">
                    {report.description}
                  </p>
                  <div className="flex gap-2">
                    <Button size="sm" variant="outline" className="gap-2 flex-1" asChild>
                      <a href={report.reportUrl} target="_blank" rel="noopener noreferrer">
                        <ExternalLink className="h-4 w-4" />
                        View
                      </a>
                    </Button>
                    <Button size="sm" variant="outline" className="gap-2" asChild>
                      <a href={report.github} target="_blank" rel="noopener noreferrer">
                        <Github className="h-4 w-4" />
                      </a>
                    </Button>
                  </div>
                </Card>
              ))}
            </div>
          </TabsContent>

          {/* Certifications */}
          <TabsContent value="certifications" className="space-y-6">
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
              {certifications.map((cert, index) => (
                <Card
                  key={index}
                  className="p-6 border-2 hover:shadow-xl transition-all hover:-translate-y-2 group"
                >
                  <div className="w-12 h-12 rounded-full gradient-primary flex items-center justify-center mb-4 group-hover:animate-pulse-glow">
                    <Award className="h-6 w-6 text-white" />
                  </div>
                  <h3 className="text-lg font-bold mb-2 group-hover:text-primary transition-colors">
                    {cert.title}
                  </h3>
                  <p className="text-sm text-muted-foreground mb-4">{cert.date}</p>
                  <Button size="sm" className="gap-2 w-full" asChild>
                    <a href={cert.url} target="_blank" rel="noopener noreferrer">
                      <ExternalLink className="h-4 w-4" />
                      View Certificate
                    </a>
                  </Button>
                </Card>
              ))}
            </div>
          </TabsContent>
        </Tabs>
      </div>
    </section>
  );
};
