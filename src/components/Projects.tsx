import { useState } from "react";
import { Github, ExternalLink } from "lucide-react";
import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";

export const Projects = () => {
  const reactProjects = [
    {
      title: "Learnmate LMS",
      description: "Learning Management System with course enrollment, dashboards, and assessments.",
      github: "https://github.com/DilSenevirathna/Learnmate",
      demo: "https://dilsenevirathna.github.io/Learnmate/",
    },
    {
      title: "E-Store",
      description: "E-commerce platform with product listings, shopping cart, and secure checkout.",
      github: "https://github.com/DilSenevirathna/E-Store",
      demo: "https://dilsenevirathna.github.io/E-Store/",
    },
    {
      title: "Movie Explore",
      description: "React-based app using movie APIs to explore, search, and view movie details with sleek UI.",
      github: "https://github.com/DilSenevirathna/Movie-explore",
      demo: "https://dilsenevirathna.github.io/Movie-explore/",
    },
    {
      title: "Weather App",
      description: "Real-time weather updates with responsive design and location-based forecasts.",
      github: "https://github.com/DilSenevirathna/Weather-App",
      demo: "https://dilsenevirathna.github.io/Weather-App/",
    },
    {
      title: "User Management System",
      description: "Full CRUD system with authentication, including user list, update/delete, and search.",
      github: "https://github.com/DilSenevirathna/User-Management-app",
      demo: "https://dilsenevirathna.github.io/User-Management-app/",
    },
  ];

  const phpProjects = [
    {
      title: "Library Management System",
      description: "Complete library system built with PHP, MySQL. Features book management, member tracking, and circulation.",
      github: "https://github.com/DilSenevirathna/Library-Management-System",
      tech: "HTML5, CSS3, Bootstrap, JavaScript, PHP, MySQL",
    },
  ];

  const wordpressPlugins = [
    {
      title: "Doc2PDF Converter Plugin",
      description: "WordPress plugin for converting documents to PDF format. Perfect for bloggers, teachers, and business owners.",
      github: "https://github.com/DilSenevirathna/Doc2Pdf-wordpress-plugin/",
    },
    {
      title: "Smart Event Calendar",
      description: "A sleek and powerful WordPress plugin for marking, managing, and getting reminded of events.",
      github: "https://github.com/DilSenevirathna/Smart-Event-Calendar_Wordpress-Plugin/",
    },
  ];

  const wordpressProjects = [
    { title: "Avendy", description: "Corporate website for business consultancy firm with service pages and client testimonials.", url: "http://avendy.lk/" },
    { title: "Tasseoz", description: "Digital marketing agency website with portfolio showcase and lead generation forms.", url: "http://tasseoz.com/" },
    { title: "Aura Organic", description: "E-commerce platform for organic products with WooCommerce integration and secure payment.", url: "http://auraorganic1.com/" },
    { title: "Everesse", description: "Corporate website with multilingual support, team profiles, and case studies.", url: "https://everesse.lk/" },
    { title: "NTN Trading", description: "Import/export company website with product listings and company history.", url: "https://ntntrading.com/" },
    { title: "ICT VIP Lawaya", description: "Professional services website with appointment booking and client portal.", url: "https://ictviplawaya.lk/" },
    { title: "ABA Publication", description: "Publishing company website with book catalog and online ordering system.", url: "http://abapublication.lk/" },
    { title: "Susajee", description: "E-commerce platform for fashion with advanced filtering and wishlist functionality.", url: "https://susajee.com/" },
  ];

  return (
    <section id="projects" className="py-24 bg-background">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16 animate-fade-up">
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            Featured <span className="gradient-text">Projects</span>
          </h2>
          <div className="w-20 h-1 gradient-primary mx-auto rounded-full"></div>
          <p className="text-muted-foreground mt-4 text-lg">
            A showcase of my development work across different technologies
          </p>
        </div>

        <Tabs defaultValue="react" className="max-w-6xl mx-auto">
          <TabsList className="grid w-full grid-cols-2 md:grid-cols-4 mb-8">
            <TabsTrigger value="react">React Projects</TabsTrigger>
            <TabsTrigger value="php">PHP Projects</TabsTrigger>
            <TabsTrigger value="plugins">WP Plugins</TabsTrigger>
            <TabsTrigger value="wordpress">WordPress Sites</TabsTrigger>
          </TabsList>

          {/* React Projects */}
          <TabsContent value="react" className="space-y-6">
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
              {reactProjects.map((project, index) => (
                <Card
                  key={index}
                  className="p-6 border-2 hover:shadow-xl transition-all hover:-translate-y-2 group"
                >
                  <h3 className="text-xl font-bold mb-3 group-hover:text-primary transition-colors">
                    {project.title}
                  </h3>
                  <p className="text-muted-foreground mb-4 line-clamp-3">{project.description}</p>
                  <div className="flex gap-3">
                    <Button size="sm" variant="outline" className="gap-2" asChild>
                      <a href={project.github} target="_blank" rel="noopener noreferrer">
                        <Github className="h-4 w-4" />
                        Code
                      </a>
                    </Button>
                    {project.demo && (
                      <Button size="sm" className="gap-2" asChild>
                        <a href={project.demo} target="_blank" rel="noopener noreferrer">
                          <ExternalLink className="h-4 w-4" />
                          Demo
                        </a>
                      </Button>
                    )}
                  </div>
                </Card>
              ))}
            </div>
          </TabsContent>

          {/* PHP Projects */}
          <TabsContent value="php" className="space-y-6">
            <div className="grid md:grid-cols-2 gap-6">
              {phpProjects.map((project, index) => (
                <Card
                  key={index}
                  className="p-6 border-2 hover:shadow-xl transition-all hover:-translate-y-2 group"
                >
                  <h3 className="text-xl font-bold mb-3 group-hover:text-primary transition-colors">
                    {project.title}
                  </h3>
                  <p className="text-muted-foreground mb-3">{project.description}</p>
                  {project.tech && (
                    <p className="text-sm text-muted-foreground mb-4">
                      <span className="font-semibold">Tech Stack:</span> {project.tech}
                    </p>
                  )}
                  <Button size="sm" variant="outline" className="gap-2" asChild>
                    <a href={project.github} target="_blank" rel="noopener noreferrer">
                      <Github className="h-4 w-4" />
                      View Code
                    </a>
                  </Button>
                </Card>
              ))}
            </div>
          </TabsContent>

          {/* WordPress Plugins */}
          <TabsContent value="plugins" className="space-y-6">
            <div className="grid md:grid-cols-2 gap-6">
              {wordpressPlugins.map((project, index) => (
                <Card
                  key={index}
                  className="p-6 border-2 hover:shadow-xl transition-all hover:-translate-y-2 group"
                >
                  <h3 className="text-xl font-bold mb-3 group-hover:text-primary transition-colors">
                    {project.title}
                  </h3>
                  <p className="text-muted-foreground mb-4">{project.description}</p>
                  <Button size="sm" variant="outline" className="gap-2" asChild>
                    <a href={project.github} target="_blank" rel="noopener noreferrer">
                      <Github className="h-4 w-4" />
                      View Code
                    </a>
                  </Button>
                </Card>
              ))}
            </div>
          </TabsContent>

          {/* WordPress Sites */}
          <TabsContent value="wordpress" className="space-y-6">
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
              {wordpressProjects.map((project, index) => (
                <Card
                  key={index}
                  className="p-6 border-2 hover:shadow-xl transition-all hover:-translate-y-2 group"
                >
                  <h3 className="text-xl font-bold mb-3 group-hover:text-primary transition-colors">
                    {project.title}
                  </h3>
                  <p className="text-muted-foreground mb-4 line-clamp-3">{project.description}</p>
                  <Button size="sm" className="gap-2" asChild>
                    <a href={project.url} target="_blank" rel="noopener noreferrer">
                      <ExternalLink className="h-4 w-4" />
                      Visit Site
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
