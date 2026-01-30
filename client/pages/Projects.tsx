import { useEffect, useState } from "react";
import Navigation from "@/components/Navigation";
import { Github, ExternalLink, Code2, Calendar } from "lucide-react";

const projectsData = [
  {
    name: "Doorstep",
    description: "A comprehensive solution for service delivery and management at your doorstep",
    technologies: ["React", "Node.js", "MongoDB", "TailwindCSS"],
    github: "https://github.com/karthik12794",
    status: "Active",
    category: "Full Stack",
  },
  {
    name: "FeelTalk",
    description: "A social networking platform for meaningful conversations and connections",
    technologies: ["React", "Express", "MongoDB", "Socket.io"],
    github: "https://github.com/karthik12794",
    status: "Active",
    category: "Full Stack",
  },
  {
    name: "MemoryLeaf",
    description: "An intelligent note-taking and memory management application",
    technologies: ["React", "Python", "PostgreSQL", "TailwindCSS"],
    github: "https://github.com/karthik12794",
    status: "Active",
    category: "Full Stack",
  },
];

export default function Projects() {
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
          <div className="absolute top-0 right-1/2 translate-x-1/2 w-96 h-96 bg-secondary/20 rounded-full blur-3xl animate-glow"></div>
        </div>

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h1 className="text-5xl md:text-6xl font-bold mb-6 gradient-text animate-slide-in-down">
              My Projects
            </h1>
            <p className="text-lg text-foreground/70 max-w-2xl mx-auto animate-slide-in-up">
              Real-world applications built with modern technologies and best practices
            </p>
          </div>
        </div>
      </section>

      {/* Projects Grid */}
      <section className="py-20 border-t border-accent/20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {projectsData.map((project, index) => (
              <div
                key={index}
                className={`group relative animate-slide-in-up`}
                style={{ animationDelay: `${index * 0.15}s` }}
              >
                {/* Glow effect on hover */}
                <div className="absolute -inset-0.5 bg-gradient-to-r from-primary via-secondary to-accent rounded-2xl opacity-0 group-hover:opacity-40 transition-opacity duration-300 blur -z-10" />

                <div className="relative h-full p-6 rounded-2xl bg-card border border-accent/30 group-hover:border-accent/60 transition-all duration-300 hover:shadow-xl hover:shadow-accent/20 flex flex-col">
                  {/* Header */}
                  <div className="flex items-start justify-between mb-4">
                    <div>
                      <h3 className="text-2xl font-bold text-foreground mb-2 group-hover:gradient-text transition-all">
                        {project.name}
                      </h3>
                      <div className="flex items-center gap-2 text-xs">
                        <span className="px-2 py-1 rounded-full bg-primary/20 text-primary">
                          {project.category}
                        </span>
                        <span className={`px-2 py-1 rounded-full ${project.status === "Active" ? "bg-green-500/20 text-green-400" : "bg-yellow-500/20 text-yellow-400"}`}>
                          {project.status}
                        </span>
                      </div>
                    </div>
                    <Code2 className="h-5 w-5 text-accent opacity-60 group-hover:opacity-100 transition-opacity" />
                  </div>

                  {/* Description */}
                  <p className="text-foreground/70 mb-6 flex-grow">
                    {project.description}
                  </p>

                  {/* Technologies */}
                  <div className="mb-6">
                    <div className="flex flex-wrap gap-2">
                      {project.technologies.map((tech, techIndex) => (
                        <span
                          key={techIndex}
                          className="px-3 py-1 rounded-full text-xs bg-accent/10 text-accent border border-accent/30 group-hover:border-accent/60 transition-colors"
                        >
                          {tech}
                        </span>
                      ))}
                    </div>
                  </div>

                  {/* Links */}
                  <div className="flex gap-3 pt-4 border-t border-accent/20">
                    <a
                      href={project.github}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex-1 flex items-center justify-center gap-2 px-4 py-2 rounded-lg bg-accent/10 text-accent border border-accent/30 hover:bg-accent hover:text-background transition-all duration-300 font-medium text-sm"
                    >
                      <Github className="h-4 w-4" />
                      Code
                    </a>
                    <a
                      href={project.github}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex-1 flex items-center justify-center gap-2 px-4 py-2 rounded-lg bg-primary/10 text-primary border border-primary/30 hover:bg-primary hover:text-background transition-all duration-300 font-medium text-sm"
                    >
                      <ExternalLink className="h-4 w-4" />
                      Demo
                    </a>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Project Statistics */}
      <section className="py-20 border-t border-accent/20 bg-card/30">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-4 gap-6 text-center">
            {[
              { number: "45+", label: "Total Projects" },
              { number: "3", label: "Showcase Projects" },
              { number: "15+", label: "Technologies Used" },
              { number: "100%", label: "Custom Built" },
            ].map((stat, index) => (
              <div key={index} className="animate-slide-in-up" style={{ animationDelay: `${index * 0.1}s` }}>
                <p className="text-4xl font-bold gradient-text mb-2">{stat.number}</p>
                <p className="text-foreground/60">{stat.label}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 border-t border-accent/20">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-4xl font-bold mb-6 gradient-text">
            Interested in collaborating?
          </h2>
          <p className="text-lg text-foreground/70 mb-8 max-w-2xl mx-auto">
            Visit my GitHub profile to see more projects and explore the code
          </p>
          <a
            href="https://github.com/karthik12794"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 px-8 py-3 rounded-lg bg-gradient-to-r from-primary to-secondary text-white font-semibold hover:shadow-lg hover:shadow-primary/50 transition-all duration-300"
          >
            <Github className="h-5 w-5" />
            Visit GitHub Profile
          </a>
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
