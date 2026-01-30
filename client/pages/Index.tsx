import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import Navigation from "@/components/Navigation";
import { ImageCard3D } from "@/components/ThreeD/ImageCard3D";
import { IntroVideo } from "@/components/IntroVideo";
import { Animated3DName } from "@/components/Animated3DName";
import { AnimatedBackground } from "@/components/AnimatedBackground";
import { ArrowRight, Github, Linkedin, Mail, Phone } from "lucide-react";

const photoUrl =
  "https://cdn.builder.io/api/v1/image/assets%2F561ea15e518d4b43bc85a4244ae1b5ff%2Fe08f9d5d28a44a8d955a13153f8c8d47?format=webp&width=800&height=1200";

const introVideoUrl =
  "https://cdn.builder.io/o/assets%2F561ea15e518d4b43bc85a4244ae1b5ff%2F8dec621b21874b63be0935083d1fe2f5?alt=media&token=4e473d1e-fdb2-4e55-88ab-b94b3172114a&apiKey=561ea15e518d4b43bc85a4244ae1b5ff";

export default function Index() {
  const [isLoaded, setIsLoaded] = useState(false);
  const [showIntro, setShowIntro] = useState(true);
  const [showAnimatedName, setShowAnimatedName] = useState(false);

  useEffect(() => {
    setIsLoaded(true);
  }, []);

  // Show intro video on first load
  if (showIntro) {
    return (
      <IntroVideo
        videoUrl={introVideoUrl}
        onComplete={() => {
          setShowIntro(false);
          setShowAnimatedName(true);
        }}
      />
    );
  }

  return (
    <div className="w-full bg-background text-foreground overflow-hidden">
      <AnimatedBackground />
      <Navigation />

      {/* Animated Name Section - appears after intro */}
      {showAnimatedName && (
        <section className="relative min-h-screen flex items-center justify-center pt-20 overflow-hidden">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full text-center py-20">
            <Animated3DName
              text="KANDIMALLA KARTHIK"
              className="text-6xl md:text-7xl font-extrabold leading-tight"
              onComplete={() => setShowAnimatedName(false)}
            />
          </div>
        </section>
      )}

      {/* Hero Section */}
      {!showAnimatedName && (
        <section className="relative min-h-screen flex items-center justify-center pt-20 overflow-hidden">
          {/* Animated background gradient */}
          <div className="absolute inset-0 -z-10">
            <div className="absolute top-0 left-1/2 -translate-x-1/2 w-96 h-96 bg-primary/20 rounded-full blur-3xl animate-glow"></div>
            <div className="absolute bottom-0 right-0 w-96 h-96 bg-secondary/20 rounded-full blur-3xl animate-glow" style={{ animationDelay: "1s" }}></div>
            <div className="absolute top-1/2 left-0 w-96 h-96 bg-accent/10 rounded-full blur-3xl animate-glow" style={{ animationDelay: "0.5s" }}></div>
          </div>

          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full">
            <div className="grid md:grid-cols-2 gap-8 lg:gap-16 items-center min-h-[calc(100vh-200px)]">
              {/* Left Content */}
              <div className={`space-y-8 transition-all duration-1000 ${isLoaded ? "opacity-100 translate-x-0" : "opacity-0 -translate-x-10"}`}>
                {/* Greeting */}
                <div className="space-y-4">
                  <div className="inline-block">
                    <div className="px-4 py-2 rounded-full bg-accent/10 border border-accent/30 text-accent text-sm font-medium animate-slide-in-down">
                      ✨ Welcome to my portfolio
                    </div>
                  </div>

                  {/* Name - Single Line */}
                  <h1 className="text-6xl md:text-7xl font-extrabold leading-tight">
                    <span className="gradient-text">KANDIMALLA KARTHIK</span>
                  </h1>

                  {/* Subtitle */}
                  <p className="text-lg md:text-xl text-foreground/70 max-w-xl leading-relaxed">
                    Full Stack Developer passionate about building beautiful, scalable applications with modern technologies. Crafting digital experiences that matter.
                  </p>
                </div>

                {/* CTA Buttons */}
                <div className="flex flex-wrap gap-4 pt-4">
                  <Link
                    to="/projects"
                    className="px-8 py-3 rounded-lg bg-gradient-to-r from-primary to-secondary text-white font-semibold hover:shadow-lg hover:shadow-primary/50 transition-all duration-300 flex items-center gap-2 group"
                  >
                    View My Work
                    <ArrowRight className="h-4 w-4 group-hover:translate-x-1 transition-transform" />
                  </Link>
                  <Link
                    to="/contact"
                    className="px-8 py-3 rounded-lg border border-accent/50 text-accent font-semibold hover:bg-accent/10 transition-all duration-300"
                  >
                    Get in Touch
                  </Link>
                </div>

                {/* Social Links */}
                <div className="flex gap-6 pt-8">
                  <a
                    href="https://github.com/karthik12794"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="p-3 rounded-full bg-card border border-accent/30 text-accent hover:bg-accent hover:text-background transition-all duration-300 group"
                  >
                    <Github className="h-5 w-5 group-hover:scale-110 transition-transform" />
                  </a>
                  <a
                    href="https://linkedin.com/in/kandimalla-karthik"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="p-3 rounded-full bg-card border border-accent/30 text-accent hover:bg-accent hover:text-background transition-all duration-300 group"
                  >
                    <Linkedin className="h-5 w-5 group-hover:scale-110 transition-transform" />
                  </a>
                  <a
                    href="mailto:kandimallakarthik4@gmail.com"
                    className="p-3 rounded-full bg-card border border-accent/30 text-accent hover:bg-accent hover:text-background transition-all duration-300 group"
                  >
                    <Mail className="h-5 w-5 group-hover:scale-110 transition-transform" />
                  </a>
                  <a
                    href="tel:+919573218680"
                    className="p-3 rounded-full bg-card border border-accent/30 text-accent hover:bg-accent hover:text-background transition-all duration-300 group"
                  >
                    <Phone className="h-5 w-5 group-hover:scale-110 transition-transform" />
                  </a>
                </div>

                {/* Stats */}
                <div className="grid grid-cols-2 gap-4 pt-8 border-t border-accent/20">
                  <div className="animate-slide-in-up">
                    <p className="text-3xl font-bold gradient-text">45+</p>
                    <p className="text-foreground/60 text-sm">GitHub Projects</p>
                  </div>
                  <div className="animate-slide-in-up" style={{ animationDelay: "0.1s" }}>
                    <p className="text-3xl font-bold gradient-text">5+</p>
                    <p className="text-foreground/60 text-sm">Full Stack Apps</p>
                  </div>
                </div>
              </div>

              {/* Right Content - 3D Image */}
              <div
                className={`relative h-[500px] md:h-[600px] transition-all duration-1000 ${isLoaded ? "opacity-100 translate-x-0" : "opacity-0 translate-x-10"}`}
              >
                <ImageCard3D src={photoUrl} alt="Kandimalla Karthik" className="w-full h-full" />
              </div>
            </div>
          </div>
        </section>
      )}

      {/* Quick Stats Section */}
      {!showAnimatedName && (
        <section className="py-20 bg-gradient-to-b from-card/50 to-background border-t border-accent/20">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid md:grid-cols-3 gap-8">
              {[
                {
                  title: "Skills",
                  description: "15+ technologies and frameworks",
                  icon: "🛠️",
                },
                {
                  title: "Projects",
                  description: "Real-world applications showcased",
                  icon: "💼",
                },
                {
                  title: "Passion",
                  description: "Building the future, one line at a time",
                  icon: "🚀",
                },
              ].map((item, index) => (
                <div
                  key={index}
                  className="group p-6 rounded-2xl bg-card border border-accent/20 hover:border-accent/50 hover:shadow-lg hover:shadow-accent/10 transition-all duration-300 animate-slide-in-up"
                  style={{ animationDelay: `${index * 0.1}s` }}
                >
                  <div className="text-4xl mb-4">{item.icon}</div>
                  <h3 className="text-xl font-bold mb-2 text-foreground">
                    {item.title}
                  </h3>
                  <p className="text-foreground/60">{item.description}</p>
                </div>
              ))}
            </div>
          </div>
        </section>
      )}

      {/* CTA Section */}
      {!showAnimatedName && (
        <section className="py-20 border-t border-accent/20">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <h2 className="text-4xl md:text-5xl font-bold mb-6 gradient-text">
              Ready to work together?
            </h2>
            <p className="text-lg text-foreground/70 mb-8 max-w-2xl mx-auto">
              Explore my skills, projects, and certifications. Let's create something amazing together.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link
                to="/skills"
                className="px-8 py-3 rounded-lg bg-gradient-to-r from-primary to-secondary text-white font-semibold hover:shadow-lg hover:shadow-primary/50 transition-all duration-300"
              >
                Explore Skills
              </Link>
              <Link
                to="/contact"
                className="px-8 py-3 rounded-lg border border-accent/50 text-accent font-semibold hover:bg-accent/10 transition-all duration-300"
              >
                Contact Me
              </Link>
            </div>
          </div>
        </section>
      )}

      {/* Footer */}
      {!showAnimatedName && (
        <footer className="border-t border-accent/20 py-8 bg-card/30">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center text-foreground/60 text-sm">
              <p>© 2025 Kandimalla Karthik. All rights reserved.</p>
              <p className="mt-2">
                Built with React, Three.js, and TailwindCSS ✨
              </p>
            </div>
          </div>
        </footer>
      )}
    </div>
  );
}
