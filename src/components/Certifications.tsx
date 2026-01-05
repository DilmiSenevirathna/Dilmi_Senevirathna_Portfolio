import { FileText } from "lucide-react";
import { Card } from "@/components/ui/card";
import esupportServiceLetter from "@/assets/certificates/esupport-service-letter.jpg";

export const Certifications = () => {
  const documents = [
    {
      title: "Internship Service Letter",
      organization: "eSupport Technologies (Pvt) Ltd",
      date: "March 2024 - March 2025",
      description: "Successfully completed one year internship as Intern Software Engineer in the Development Department.",
      image: esupportServiceLetter,
    },
  ];

  return (
    <section id="certifications" className="py-24 bg-muted/30">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16 animate-fade-up">
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            Service Letters & <span className="gradient-text">Certificates</span>
          </h2>
          <div className="w-20 h-1 gradient-primary mx-auto rounded-full"></div>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
          {documents.map((doc, index) => (
            <Card
              key={index}
              className="overflow-hidden border-2 hover:shadow-lg transition-all duration-300 hover:-translate-y-1 animate-fade-up"
              style={{ animationDelay: `${index * 100}ms` }}
            >
              <div className="aspect-[3/4] overflow-hidden bg-muted">
                <img
                  src={doc.image}
                  alt={doc.title}
                  className="w-full h-full object-cover hover:scale-105 transition-transform duration-300"
                />
              </div>
              <div className="p-6">
                <div className="flex items-center gap-2 mb-2">
                  <FileText className="h-5 w-5 text-primary" />
                  <h3 className="text-lg font-bold">{doc.title}</h3>
                </div>
                <p className="text-primary font-semibold text-sm mb-1">{doc.organization}</p>
                <p className="text-muted-foreground text-sm mb-2">{doc.date}</p>
                <p className="text-muted-foreground text-sm">{doc.description}</p>
              </div>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};
