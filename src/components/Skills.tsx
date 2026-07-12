import { Card } from "@/components/ui/card";
import mablLogo from "@/assets/mabl-logo.png";

export const Skills = () => {
  const qaSkills = [
    { name: "Playwright", icon: "playwright", color: "#2EAD33" },
    { name: "Selenium", icon: "selenium", color: "#43B02A" },
    { name: "Cypress", icon: "cypressio", color: "#69D3A7" },
    { name: "Appium", icon: "android", color: "#662D91" },
    { name: "pytest", icon: "pytest", color: "#0A9EDC" },
    { name: "JMeter", icon: "apachejmeter", color: "#D22128" },
    { name: "Jira", icon: "jira", color: "#0052CC" },
    { name: "Postman", icon: "postman", color: "#FF6C37" },
    { name: "Mabl", icon: "mabl", color: "#4A154B", customLogo: true },
    { name: "BrowserStack", icon: "browserstack", color: "#F5B914" },
  ];

  const developmentSkills = [
    { name: "JavaScript", icon: "javascript", color: "#F7DF1E" },
    { name: "React", icon: "react", color: "#61DAFB" },
    { name: "HTML", icon: "html5", color: "#E34F26" },
    { name: "CSS", icon: "css3", color: "#1572B6" },
    { name: "PHP", icon: "php", color: "#777BB4" },
    { name: "Node.js", icon: "nodejs", color: "#339933" },
    { name: "SQL", icon: "mysql", color: "#4479A1" },
    { name: "Java", icon: "java", color: "#007396" },
    { name: "Python", icon: "python", color: "#3776AB" },
    { name: "Vue.js", icon: "vuejs", color: "#4FC08D" },
    { name: "jQuery", icon: "jquery", color: "#0769AD" },
    { name: "React Native", icon: "react", color: "#61DAFB" },
    { name: "WordPress", icon: "wordpress", color: "#21759B" },
    { name: "Android Studio", icon: "androidstudio", color: "#3DDC84" },
    { name: "Figma", icon: "figma", color: "#F24E1E" },
  ];

  return (
    <section id="skills" className="py-24 bg-muted/30">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16 animate-fade-up">
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            Skills & <span className="gradient-text">Technologies</span>
          </h2>
          <div className="w-20 h-1 gradient-primary mx-auto rounded-full"></div>
          <p className="text-muted-foreground mt-4 text-lg">
            Specialized in QA automation tools and modern development technologies
          </p>
        </div>

        <div className="max-w-6xl mx-auto space-y-12">
          {/* QA & Testing Tools - Primary Focus */}
          <div className="space-y-6">
            <div className="text-center">
              <div className="inline-block px-6 py-2 bg-primary/10 backdrop-blur-sm rounded-full text-sm font-semibold mb-4 text-primary border border-primary/20">
                🎯 QA & Testing Tools
              </div>
            </div>
            <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-5 gap-6">
              {qaSkills.map((skill, index) => (
                <Card
                  key={index}
                  className="p-6 flex flex-col items-center justify-center gap-3 hover:shadow-lg transition-all hover:-translate-y-2 border-2 group cursor-pointer"
                  style={{ animationDelay: `${index * 50}ms` }}
                >
                  <div className="text-4xl group-hover:scale-110 transition-transform">
                    {skill.customLogo ? (
                      <img src={mablLogo} alt={skill.name} className="w-10 h-10 object-contain" />
                    ) : (
                      <i
                        className={`devicon-${skill.icon}-plain colored`}
                        style={{ color: skill.color }}
                      ></i>
                    )}
                  </div>
                  <span className="font-medium text-sm text-center">{skill.name}</span>
                </Card>
              ))}
            </div>
          </div>

          {/* Development Skills */}
          <div className="space-y-6">
            <div className="text-center">
              <div className="inline-block px-6 py-2 bg-muted/50 backdrop-blur-sm rounded-full text-sm font-semibold mb-4 text-muted-foreground border border-muted">
                💻 Development Skills
              </div>
            </div>
            <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-6">
              {developmentSkills.map((skill, index) => (
                <Card
                  key={index}
                  className="p-6 flex flex-col items-center justify-center gap-3 hover:shadow-lg transition-all hover:-translate-y-2 border-2 group cursor-pointer"
                  style={{ animationDelay: `${index * 50}ms` }}
                >
                  <div className="text-4xl group-hover:scale-110 transition-transform">
                    <i
                      className={`devicon-${skill.icon}-plain colored`}
                      style={{ color: skill.color }}
                    ></i>
                  </div>
                  <span className="font-medium text-sm text-center">{skill.name}</span>
                </Card>
              ))}
            </div>
          </div>
        </div>

        {/* Add devicon CDN */}
        <link
          rel="stylesheet"
          href="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/devicon.min.css"
        />
      </div>
    </section>
  );
};
