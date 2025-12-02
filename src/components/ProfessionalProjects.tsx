import { Briefcase, Github } from "lucide-react";
import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";

export const ProfessionalProjects = () => {
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

  return (
    <section id="professional-projects" className="py-24 bg-background">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16 animate-fade-up">
          <div className="inline-block px-6 py-2 bg-primary/10 backdrop-blur-sm rounded-full text-sm font-semibold mb-4 text-primary border border-primary/20">
            💼 Professional Work
          </div>
          <h2 className="text-4xl md:text-6xl font-bold mb-4">
            Professional <span className="gradient-text">Projects</span>
          </h2>
          <div className="w-24 h-1.5 gradient-primary mx-auto rounded-full"></div>
          <p className="text-muted-foreground mt-6 text-lg max-w-3xl mx-auto">
            Real-world projects and quality assurance work completed during professional employment
          </p>
        </div>

        {professionalProjects.length === 0 ? (
          <Card className="p-12 text-center border-2 border-dashed max-w-2xl mx-auto">
            <div className="w-16 h-16 rounded-full bg-muted flex items-center justify-center mx-auto mb-4">
              <Briefcase className="h-8 w-8 text-muted-foreground" />
            </div>
            <h3 className="text-xl font-bold mb-2">Professional Projects Coming Soon</h3>
            <p className="text-muted-foreground">
              Real-world projects worked on during employment will be showcased here
            </p>
          </Card>
        ) : (
          <div className="grid lg:grid-cols-2 gap-6 max-w-6xl mx-auto">
            {professionalProjects.map((project, index) => (
              <Card
                key={index}
                className="p-6 border-2 hover:shadow-xl transition-all group animate-fade-up"
                style={{ animationDelay: `${index * 100}ms` }}
              >
                <div className="space-y-6">
                  {/* Video Section */}
                  {project.videoUrl && (
                    <div className="relative rounded-lg overflow-hidden shadow-lg bg-muted aspect-video">
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
                  <div className="space-y-4">
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

                    {project.github && (
                      <Button size="sm" variant="outline" className="gap-2 w-full" asChild>
                        <a href={project.github} target="_blank" rel="noopener noreferrer">
                          <Github className="h-4 w-4" />
                          View GitHub Repository
                        </a>
                      </Button>
                    )}
                  </div>
                </div>
              </Card>
            ))}
          </div>
        )}
      </div>
    </section>
  );
};
