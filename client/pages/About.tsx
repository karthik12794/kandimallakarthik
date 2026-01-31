import { useEffect, useState } from "react";
import Navigation from "@/components/Navigation";
import { ImageCard3D } from "@/components/ThreeD/ImageCard3D";
import { Heart, Code, Zap } from "lucide-react";

const photoUrl =
  "https://cdn.builder.io/api/v1/image/assets%2F561ea15e518d4b43bc85a4244ae1b5ff%2F7905317a24084921867174485907e1f6?format=webp&width=800&height=1200";

export default function About() {
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
              About Me
            </h1>
            <p className="text-lg text-foreground/70 max-w-2xl mx-auto animate-slide-in-up">
              Get to know the person behind the code
            </p>
          </div>
        </div>
      </section>

      {/* Main Content */}
      <section className="py-20 border-t border-accent/20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            {/* Photo */}
            <div
              className={`relative h-[500px] md:h-[600px] transition-all duration-1000 ${
                isLoaded
                  ? "opacity-100 translate-x-0"
                  : "opacity-0 -translate-x-10"
              }`}
            >
              <ImageCard3D
                src={photoUrl}
                alt="Kandimalla Karthik"
                className="w-full h-full"
              />
            </div>

            {/* Personal Info */}
            <div
              className={`space-y-8 transition-all duration-1000 ${
                isLoaded
                  ? "opacity-100 translate-x-0"
                  : "opacity-0 translate-x-10"
              }`}
            >
              {/* Name and Title */}
              <div>
                <h2 className="text-4xl md:text-5xl font-bold gradient-text mb-4">
                  Kandimalla Karthik
                </h2>
                <p className="text-xl text-accent font-semibold mb-2">
                  Aspiring Full Stack Developer
                </p>
                <p className="text-foreground/70">
                  Building innovative digital solutions with passion and precision
                </p>
              </div>

              {/* Family Details */}
              <div className="space-y-4 p-6 rounded-2xl bg-card border border-accent/30">
                <h3 className="text-2xl font-bold text-foreground mb-4">
                  Family
                </h3>
                <div className="space-y-3">
                  <div>
                    <p className="text-foreground/60 text-sm">Father</p>
                    <p className="text-lg font-semibold text-foreground">
                      Kandimalla Venkateswarlu
                    </p>
                  </div>
                  <div>
                    <p className="text-foreground/60 text-sm">Mother</p>
                    <p className="text-lg font-semibold text-foreground">
                      Kandimalla Siva Parvathi
                    </p>
                  </div>
                </div>
              </div>

              {/* Health & Location */}
              <div className="grid grid-cols-2 gap-4">
                <div className="p-4 rounded-lg bg-card border border-accent/20">
                  <p className="text-foreground/60 text-sm mb-1">Blood Group</p>
                  <p className="text-2xl font-bold gradient-text">A+</p>
                </div>
                <div className="p-4 rounded-lg bg-card border border-accent/20">
                  <p className="text-foreground/60 text-sm mb-1">Location</p>
                  <p className="text-lg font-semibold text-foreground">
                    Andhra Pradesh
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Hobbies Section */}
      <section className="py-20 border-t border-accent/20 bg-card/30">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-4xl font-bold mb-12 text-center gradient-text animate-slide-in-down">
            Hobbies & Interests
          </h2>

          <div className="grid md:grid-cols-3 gap-8">
            {[
              {
                title: "Web Development",
                description:
                  "Crafting beautiful and functional websites that deliver exceptional user experiences",
                icon: Code,
                color: "from-blue-500 to-cyan-500",
              },
              {
                title: "Learning New Technologies",
                description:
                  "Staying updated with the latest tech trends and continuously expanding my skillset",
                icon: Zap,
                color: "from-yellow-500 to-orange-500",
              },
              {
                title: "Solving Challenges",
                description:
                  "Enjoying the problem-solving process and building solutions to complex problems",
                icon: Heart,
                color: "from-red-500 to-pink-500",
              },
            ].map((hobby, index) => {
              const Icon = hobby.icon;
              return (
                <div
                  key={index}
                  className="group p-8 rounded-2xl bg-card border border-accent/30 hover:border-accent/60 transition-all hover:shadow-lg hover:shadow-accent/20 animate-slide-in-up"
                  style={{ animationDelay: `${index * 0.15}s` }}
                >
                  <div className={`w-12 h-12 rounded-lg bg-gradient-to-r ${hobby.color} flex items-center justify-center mb-4 group-hover:scale-110 transition-transform`}>
                    <Icon className="h-6 w-6 text-white" />
                  </div>
                  <h3 className="text-2xl font-bold text-foreground mb-3 group-hover:gradient-text transition-all">
                    {hobby.title}
                  </h3>
                  <p className="text-foreground/70">{hobby.description}</p>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Personal Values */}
      <section className="py-20 border-t border-accent/20">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-4xl font-bold mb-12 text-center gradient-text">
            Core Values
          </h2>

          <div className="grid md:grid-cols-2 gap-6">
            {[
              {
                title: "Problem Solving",
                description:
                  "Approaching challenges with logical thinking and creative solutions",
              },
              {
                title: "Time Management",
                description:
                  "Efficiently organizing work to meet deadlines and maximize productivity",
              },
              {
                title: "Calm & Focused",
                description:
                  "Maintaining composure under pressure to deliver quality work",
              },
              {
                title: "Effective Communication",
                description:
                  "Clearly articulating ideas and collaborating effectively with teams",
              },
            ].map((value, index) => (
              <div
                key={index}
                className="p-6 rounded-2xl bg-card border border-accent/20 hover:border-accent/50 transition-all hover:shadow-lg hover:shadow-accent/10 animate-slide-in-up"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <h3 className="text-xl font-bold text-foreground mb-3">
                  {value.title}
                </h3>
                <p className="text-foreground/70">{value.description}</p>
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
