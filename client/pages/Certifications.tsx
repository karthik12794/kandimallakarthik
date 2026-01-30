import { useEffect, useState } from "react";
import Navigation from "@/components/Navigation";
import { Award, BookOpen, CheckCircle2 } from "lucide-react";

const certificationsData = [
  {
    title: "Full Stack Development",
    issuer: "Self-Initiated Learning",
    date: "2024 - Present",
    icon: "🚀",
    description: "Comprehensive study of modern web technologies including React, Node.js, and cloud deployment",
  },
  {
    title: "Cybersecurity & Data Privacy",
    issuer: "Professional Development",
    date: "2024",
    icon: "🔒",
    description: "Advanced understanding of security principles, ethical hacking, and data protection",
  },
  {
    title: "Ethical Hacking Fundamentals",
    issuer: "Technology Education",
    date: "2023 - 2024",
    icon: "🛡️",
    description: "Security awareness and ethical hacking practices for building secure applications",
  },
  {
    title: "Problem Solving & Algorithm Design",
    issuer: "Computer Science Studies",
    date: "2023 - Present",
    icon: "🧩",
    description: "Data structures, algorithms, and computational problem-solving techniques",
  },
  {
    title: "Operations & Project Management",
    issuer: "Professional Experience",
    date: "2023 - Present",
    icon: "📊",
    description: "Project planning, team coordination, and operational excellence practices",
  },
  {
    title: "Technology & Innovation Leadership",
    issuer: "Continuous Learning",
    date: "2024 - Present",
    icon: "💡",
    description: "Staying updated with latest technologies and innovation in the tech industry",
  },
];

export default function Certifications() {
  const [isLoaded, setIsLoaded] = useState(false);

  useEffect(() => {
    setIsLoaded(true);
  }, []);

  return (
    <div className="w-full bg-background text-foreground min-h-screen">
      <Navigation />

      {/* Hero Section */}
      <section className="relative py-24 md:py-32 pt-32">
        <div className="absolute inset-0 -z-10">
          <div className="absolute bottom-0 left-1/4 w-96 h-96 bg-accent/20 rounded-full blur-3xl animate-glow"></div>
        </div>

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h1 className="text-5xl md:text-6xl font-bold mb-6 gradient-text animate-slide-in-down">
              Certifications & Achievements
            </h1>
            <p className="text-lg text-foreground/70 max-w-2xl mx-auto animate-slide-in-up">
              Continuous learning and professional development through certifications and specialized training
            </p>
          </div>
        </div>
      </section>

      {/* Timeline Section */}
      <section className="py-20 border-t border-accent/20">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="space-y-8">
            {certificationsData.map((cert, index) => (
              <div
                key={index}
                className="group relative animate-slide-in-up"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                {/* Timeline line */}
                {index !== certificationsData.length - 1 && (
                  <div className="absolute left-8 top-20 w-0.5 h-20 bg-gradient-to-b from-accent to-transparent group-hover:from-primary transition-colors" />
                )}

                <div className="flex gap-6">
                  {/* Timeline dot */}
                  <div className="flex-shrink-0 flex items-start">
                    <div className="flex items-center justify-center h-16 w-16 rounded-full bg-card border-2 border-accent group-hover:border-primary group-hover:shadow-lg group-hover:shadow-accent/30 transition-all duration-300">
                      <span className="text-2xl">{cert.icon}</span>
                    </div>
                  </div>

                  {/* Content */}
                  <div className="flex-grow pt-2">
                    <div className="p-6 rounded-2xl bg-card border border-accent/30 group-hover:border-accent/60 group-hover:shadow-lg group-hover:shadow-accent/20 transition-all duration-300">
                      <div className="flex items-start justify-between mb-3">
                        <div>
                          <h3 className="text-2xl font-bold text-foreground group-hover:gradient-text transition-all">
                            {cert.title}
                          </h3>
                          <p className="text-accent font-semibold mt-1">{cert.issuer}</p>
                        </div>
                        <Award className="h-6 w-6 text-accent opacity-60 group-hover:opacity-100 transition-opacity flex-shrink-0" />
                      </div>

                      <p className="text-foreground/70 mb-3">{cert.description}</p>

                      <div className="flex items-center gap-2 text-sm text-foreground/60">
                        <span className="w-1.5 h-1.5 rounded-full bg-accent"></span>
                        {cert.date}
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Skills Developed */}
      <section className="py-20 border-t border-accent/20 bg-card/30">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-4xl font-bold mb-12 text-center gradient-text animate-slide-in-down">
            Skills & Knowledge Gained
          </h2>

          <div className="grid md:grid-cols-2 gap-6">
            {[
              "Modern Web Technologies",
              "Security & Cybersecurity",
              "Full Stack Development",
              "Database Design",
              "Cloud Computing",
              "System Architecture",
              "Problem Solving",
              "Team Leadership",
              "Project Management",
              "Data Privacy",
              "Software Best Practices",
              "Continuous Integration",
            ].map((skill, index) => (
              <div
                key={index}
                className="flex items-center gap-3 p-4 rounded-lg bg-card border border-accent/20 hover:border-accent/50 transition-all animate-slide-in-up"
                style={{ animationDelay: `${index * 0.05}s` }}
              >
                <CheckCircle2 className="h-5 w-5 text-accent flex-shrink-0" />
                <span className="text-foreground font-medium">{skill}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Learning Path */}
      <section className="py-20 border-t border-accent/20">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-4xl font-bold mb-12 text-center gradient-text animate-slide-in-down">
            Continuous Learning
          </h2>

          <div className="grid md:grid-cols-2 gap-8">
            {[
              {
                title: "Technical Excellence",
                description:
                  "Staying updated with the latest frameworks, tools, and best practices in web development",
                icon: BookOpen,
              },
              {
                title: "Security & Privacy",
                description:
                  "Deep understanding of cybersecurity principles and ethical hacking for secure applications",
                icon: Award,
              },
            ].map((item, index) => {
              const Icon = item.icon;
              return (
                <div
                  key={index}
                  className="p-8 rounded-2xl bg-card border border-accent/30 hover:border-accent/60 transition-all hover:shadow-lg hover:shadow-accent/20 animate-slide-in-up"
                  style={{ animationDelay: `${index * 0.15}s` }}
                >
                  <Icon className="h-8 w-8 text-accent mb-4" />
                  <h3 className="text-2xl font-bold mb-3 text-foreground">
                    {item.title}
                  </h3>
                  <p className="text-foreground/70">{item.description}</p>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="border-t border-accent/20 py-8 bg-card/30">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center text-foreground/60 text-sm">
            <p>© 2025 Kandimalla Karthik. All rights reserved.</p>
          </div>
        </div>
      </footer>
    </div>
  );
}
