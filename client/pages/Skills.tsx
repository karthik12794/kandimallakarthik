import { useEffect, useState } from "react";
import Navigation from "@/components/Navigation";
import { TrendingUp } from "lucide-react";

const skillsData = [
  {
    category: "Frontend Development",
    skills: ["JavaScript", "React", "TypeScript", "TailwindCSS", "Vite"],
    color: "from-blue-500 to-cyan-500",
  },
  {
    category: "Backend Development",
    skills: ["Node.js", "Express", "Python", "REST APIs", "MongoDB"],
    color: "from-purple-500 to-pink-500",
  },
  {
    category: "Full Stack",
    skills: ["Full Stack Development", "Full-Stack Development", "Flutter", "SQL"],
    color: "from-green-500 to-emerald-500",
  },
  {
    category: "Security & Best Practices",
    skills: ["Data Privacy", "Cybersecurity", "Ethical Hacking", "Problem Solving"],
    color: "from-red-500 to-orange-500",
  },
  {
    category: "Professional Skills",
    skills: [
      "Software Development",
      "Computer Science Education",
      "Operations Management",
      "Technology Management",
      "Search Engine Ranking",
    ],
    color: "from-yellow-500 to-amber-500",
  },
];

export default function Skills() {
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
          <div className="absolute top-0 left-1/2 -translate-x-1/2 w-96 h-96 bg-primary/20 rounded-full blur-3xl animate-glow"></div>
        </div>

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h1 className="text-5xl md:text-6xl font-bold mb-6 gradient-text animate-slide-in-down">
              Skills & Expertise
            </h1>
            <p className="text-lg text-foreground/70 max-w-2xl mx-auto animate-slide-in-up">
              A comprehensive overview of my technical skills and professional expertise
            </p>
          </div>
        </div>
      </section>

      {/* Skills Grid */}
      <section className="py-20 border-t border-accent/20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-2 lg:grid-cols-5 gap-6">
            {skillsData.map((skillGroup, index) => (
              <div
                key={index}
                className={`group relative animate-slide-in-up`}
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <div className="absolute inset-0 bg-gradient-to-r rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-300 blur -z-10" style={{
                  backgroundImage: `linear-gradient(to right, var(--tw-gradient-stops))`,
                }} />
                
                <div className="relative p-6 rounded-2xl bg-card border border-accent/30 group-hover:border-accent/60 transition-all duration-300 h-full hover:shadow-lg hover:shadow-accent/20">
                  <div className="flex items-start justify-between mb-4">
                    <h3 className="text-lg font-bold text-foreground group-hover:gradient-text transition-all">
                      {skillGroup.category}
                    </h3>
                    <TrendingUp className="h-5 w-5 text-accent opacity-0 group-hover:opacity-100 transition-opacity" />
                  </div>

                  <div className="space-y-3">
                    {skillGroup.skills.map((skill, skillIndex) => (
                      <div
                        key={skillIndex}
                        className="flex items-center gap-3 group/skill"
                      >
                        <div className="w-2 h-2 rounded-full bg-accent group-hover/skill:scale-150 transition-transform" />
                        <span className="text-foreground/80 group-hover/skill:text-accent transition-colors text-sm">
                          {skill}
                        </span>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Proficiency Section */}
      <section className="py-20 border-t border-accent/20 bg-card/30">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-4xl font-bold mb-12 text-center gradient-text animate-slide-in-down">
            Proficiency Levels
          </h2>

          <div className="space-y-6 max-w-2xl mx-auto">
            {[
              { name: "JavaScript & React", level: 95 },
              { name: "Full Stack Development", level: 90 },
              { name: "Python & Backend", level: 85 },
              { name: "Database & SQL", level: 80 },
              { name: "UI/UX & TailwindCSS", level: 92 },
              { name: "Security & Best Practices", level: 85 },
            ].map((skill, index) => (
              <div key={index} className="animate-slide-in-up" style={{ animationDelay: `${index * 0.1}s` }}>
                <div className="flex justify-between mb-2">
                  <span className="font-medium text-foreground">{skill.name}</span>
                  <span className="text-accent font-semibold">{skill.level}%</span>
                </div>
                <div className="h-3 bg-card rounded-full overflow-hidden border border-accent/30">
                  <div
                    className="h-full bg-gradient-to-r from-primary to-accent rounded-full transition-all duration-1000 ease-out"
                    style={{
                      width: isLoaded ? `${skill.level}%` : "0%",
                    }}
                  />
                </div>
              </div>
            ))}
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
