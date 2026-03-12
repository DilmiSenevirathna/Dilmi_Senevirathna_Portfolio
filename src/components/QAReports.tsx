import { FileCheck, Github, ExternalLink, Award, Play, Briefcase } from "lucide-react";
import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";

export const QAReports = () => {
  const professionalProjects = [
    // Add your real-world professional projects here
    // Example structure:
    // {
    //   title: "Project Name",
    //   company: "Company Name",
    //   description: "Project description and what you accomplished",
    //   videoUrl: "/videos/project_video.webm",
    //   github: "https://github.com/username/repo",
    //   details: {
    //     workedOn: [
    //       "Task 1",
    //       "Task 2"
    //     ],
    //     learnings: [
    //       "Learning 1",
    //       "Learning 2"
    //     ]
    //   }
    // }
  ];

  const automationProjects = [
    {
      title: "Sufra OS - Full Performance Testing Project",
      description: "This project helped me strengthen my skills in ensuring software reliability, responsiveness, and stability under varying user loads.",
      videoUrl: "/videos/sufra_os.webm",
      reportUrl: "https://dilsenevirathna.github.io/Sufra_OS_Full-Testing-Project/index.html",
      github: "https://github.com/DilSenevirathna/Sufra_OS_Full-Testing-Project",
      details: {
        workedOn: [
          "Designed and executed load and stress tests using Apache JMeter",
          "Measured response time, throughput, and error rate under different conditions",
          "Analyzed performance bottlenecks and suggested improvements",
          "Created detailed performance reports to visualize results and insights"
        ],
        learnings: [
          "Improved understanding of performance testing lifecycle",
          "Learned to interpret metrics to evaluate system health",
          "Strengthened analytical mindset in identifying and solving performance issues"
        ]
      }
    },
    {
      title: "ArivPay Sign-Up Process - Playwright Test Automation",
      description: "This project helped me strengthen my skills in UI automation, test design, and validation of multi-step registration workflows — key areas in ensuring a smooth and reliable user experience.",
      videoUrl: "/videos/ariv_pay.webm",
      reportUrl: "https://dilsenevirathna.github.io/ArivPay_SignUp_process_PlaywrightsTest/",
      github: "https://github.com/DilSenevirathna/ArivPay_SignUp_process_PlaywrightsTestrepo",
      details: {
        workedOn: [
          "Automated the four-step registration process of ArivPay using Playwright",
          "Validated input fields, error handling, and user feedback messages",
          "Implemented end-to-end tests covering both valid and invalid scenarios",
          "Designed test structure and scripts following the Page Object Model (POM) for scalability",
          "Generated and hosted test execution reports using GitHub Pages",
          "Tools: Playwright, TypeScript/JavaScript, GitHub Actions, HTML Reports"
        ],
        learnings: [
          "Enhanced understanding of modern automation frameworks",
          "Practiced modular test design and data-driven testing approaches",
          "Gained experience in reporting and version control using GitHub"
        ]
      }
    }
  ];

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
    <section id="qa-reports" className="py-24 bg-gradient-to-b from-background via-muted/30 to-background">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16 animate-fade-up">
          <div className="inline-block px-6 py-2 bg-primary/10 backdrop-blur-sm rounded-full text-sm font-semibold mb-4 text-primary border border-primary/20">
            🎯 Quality Assurance Expertise
          </div>
          <h2 className="text-4xl md:text-6xl font-bold mb-4">
            QA Reports & <span className="gradient-text">Certifications</span>
          </h2>
          <div className="w-24 h-1.5 gradient-primary mx-auto rounded-full"></div>
          <p className="text-muted-foreground mt-6 text-lg max-w-3xl mx-auto">
            Comprehensive quality assurance portfolio showcasing automated testing, performance validation, and professional certifications in software testing methodologies
          </p>
        </div>

        <Tabs defaultValue="professional" className="max-w-6xl mx-auto">
          <TabsList className="grid w-full grid-cols-4 mb-8">
            <TabsTrigger value="professional">Professional Projects</TabsTrigger>
            <TabsTrigger value="automation">Automation Testing</TabsTrigger>
            <TabsTrigger value="reports">Test Reports</TabsTrigger>
            <TabsTrigger value="certifications">Certifications</TabsTrigger>
          </TabsList>

          {/* Professional Projects */}
          <TabsContent value="professional" className="space-y-6">
            {professionalProjects.length === 0 ? (
              <Card className="p-12 text-center border-2 border-dashed">
                <div className="w-16 h-16 rounded-full bg-muted flex items-center justify-center mx-auto mb-4">
                  <Briefcase className="h-8 w-8 text-muted-foreground" />
                </div>
                <h3 className="text-xl font-bold mb-2">Professional Projects Coming Soon</h3>
                <p className="text-muted-foreground">
                  Real-world projects worked on during employment will be showcased here
                </p>
              </Card>
            ) : (
              <div className="grid lg:grid-cols-2 gap-6">
                {professionalProjects.map((project, index) => (
                  <Card
                    key={index}
                    className="p-6 border-2 hover:shadow-xl transition-all group flex flex-col"
                  >
                    <div className="space-y-6 flex-1 flex flex-col">
                      {/* Video Section */}
                      {project.videoUrl && (
                        <div className="relative rounded-lg overflow-hidden shadow-lg bg-muted aspect-video mb-4">
                          <video
                            controls
                            className="w-full h-full object-cover"
                            poster="/placeholder.svg"
                          >
                            <source src={project.videoUrl} type="video/webm" />
                            Your browser does not support the video tag.
                          </video>
                        </div>
                      )}

                      {/* Content Section */}
                      <div className="space-y-4 flex-1">
                        <div>
                          <div className="w-12 h-12 rounded-full gradient-primary flex items-center justify-center mb-3 group-hover:animate-pulse-glow">
                            <Briefcase className="h-6 w-6 text-white" />
                          </div>
                          <h3 className="text-xl font-bold mb-1 group-hover:text-primary transition-colors">
                            {project.title}
                          </h3>
                          <p className="text-primary font-semibold mb-2">{project.company}</p>
                          <p className="text-muted-foreground text-sm">
                            {project.description}
                          </p>
                        </div>

                        <div>
                          <h4 className="font-semibold mb-2">🧩 What I Worked On:</h4>
                          <ul className="space-y-1 text-muted-foreground text-sm">
                            {project.details.workedOn.map((item, i) => (
                              <li key={i} className="flex items-start gap-2">
                                <span className="text-primary mt-1">•</span>
                                <span>{item}</span>
                              </li>
                            ))}
                          </ul>
                        </div>

                        <div>
                          <h4 className="font-semibold mb-2">🧠 Key Learnings:</h4>
                          <ul className="space-y-1 text-muted-foreground text-sm">
                            {project.details.learnings.map((item, i) => (
                              <li key={i} className="flex items-start gap-2">
                                <span className="text-primary mt-1">•</span>
                                <span>{item}</span>
                              </li>
                            ))}
                          </ul>
                        </div>

                        <div className="flex gap-2 mt-auto pt-4">
                          {project.github && (
                            <Button size="sm" variant="outline" className="gap-2 flex-1" asChild>
                              <a href={project.github} target="_blank" rel="noopener noreferrer">
                                <Github className="h-4 w-4" />
                                View GitHub
                              </a>
                            </Button>
                          )}
                        </div>
                      </div>
                    </div>
                  </Card>
                ))}
              </div>
            )}
          </TabsContent>

          {/* Automation Testing */}
          <TabsContent value="automation" className="space-y-6">
            <div className="grid lg:grid-cols-2 gap-6">
              {automationProjects.map((project, index) => (
                <Card
                  key={index}
                  className="p-6 border-2 hover:shadow-xl transition-all group flex flex-col"
                >
                  <div className="space-y-6 flex-1 flex flex-col">
                    {/* Video Section */}
                    {project.videoUrl && (
                      <div className="relative rounded-lg overflow-hidden shadow-lg bg-muted aspect-video mb-4">
                        <video
                          controls
                          className="w-full h-full object-cover"
                          poster="/placeholder.svg"
                        >
                          <source src={project.videoUrl} type="video/webm" />
                          Your browser does not support the video tag.
                        </video>
                      </div>
                    )}

                    {/* Content Section */}
                    <div className="space-y-4 flex-1">
                      <div>
                        <div className="w-12 h-12 rounded-full gradient-primary flex items-center justify-center mb-3 group-hover:animate-pulse-glow">
                          <Play className="h-6 w-6 text-white" />
                        </div>
                        <h3 className="text-xl font-bold mb-2 group-hover:text-primary transition-colors">
                          {project.title}
                        </h3>
                        <p className="text-muted-foreground mb-4 text-sm">
                          {project.description}
                        </p>
                      </div>

                      <div>
                        <h4 className="font-semibold mb-2">🧩 What I Worked On:</h4>
                        <ul className="space-y-1 text-muted-foreground text-sm">
                          {project.details.workedOn.map((item, i) => (
                            <li key={i} className="flex items-start gap-2">
                              <span className="text-primary mt-1">•</span>
                              <span>{item}</span>
                            </li>
                          ))}
                        </ul>
                      </div>

                      <div>
                        <h4 className="font-semibold mb-2">🧠 Key Learnings:</h4>
                        <ul className="space-y-1 text-muted-foreground text-sm">
                          {project.details.learnings.map((item, i) => (
                            <li key={i} className="flex items-start gap-2">
                              <span className="text-primary mt-1">•</span>
                              <span>{item}</span>
                            </li>
                          ))}
                        </ul>
                      </div>

                      <div className="flex gap-2 mt-auto pt-4">
                        <Button size="sm" variant="outline" className="gap-2 flex-1" asChild>
                          <a href={project.reportUrl} target="_blank" rel="noopener noreferrer">
                            <ExternalLink className="h-4 w-4" />
                            View Report
                          </a>
                        </Button>
                        <Button size="sm" variant="outline" className="gap-2" asChild>
                          <a href={project.github} target="_blank" rel="noopener noreferrer">
                            <Github className="h-4 w-4" />
                          </a>
                        </Button>
                      </div>
                    </div>
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
