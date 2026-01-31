import { useEffect, useState } from "react";
import Navigation from "@/components/Navigation";
import { Redirect3D } from "@/components/ThreeD/Redirect3D";
import {
  Mail,
  Phone,
  MapPin,
  Linkedin,
  Github,
  MessageSquare,
  ArrowRight,
} from "lucide-react";

export default function Contact() {
  const [isLoaded, setIsLoaded] = useState(false);
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });
  const [submitted, setSubmitted] = useState(false);

  useEffect(() => {
    setIsLoaded(true);
  }, []);

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>,
  ) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    // Here you would typically send the form data to a backend
    console.log("Form submitted:", formData);
    setSubmitted(true);
    setTimeout(() => {
      setFormData({ name: "", email: "", message: "" });
      setSubmitted(false);
    }, 3000);
  };

  return (
    <div className="w-full bg-background text-foreground min-h-screen">
      <Navigation />

      {/* Hero Section */}
      <section className="relative py-24 md:py-32 pt-32">
        <div className="absolute inset-0 -z-10">
          <div className="absolute top-0 right-0 w-96 h-96 bg-secondary/20 rounded-full blur-3xl animate-glow"></div>
        </div>

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h1 className="text-5xl md:text-6xl font-bold mb-6 gradient-text animate-slide-in-down">
              Get in Touch
            </h1>
            <p className="text-lg text-foreground/70 max-w-2xl mx-auto animate-slide-in-up">
              Let's collaborate and create something amazing together. Reach out
              through any channel that works for you.
            </p>
          </div>
        </div>
      </section>

      {/* Contact Content */}
      <section className="py-20 border-t border-accent/20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-2 gap-12">
            {/* Contact Info */}
            <div
              className={`space-y-8 transition-all duration-1000 ${isLoaded ? "opacity-100 translate-x-0" : "opacity-0 -translate-x-10"}`}
            >
              <h2 className="text-3xl font-bold mb-8">Contact Information</h2>

              {/* Email */}
              <a
                href="mailto:kandimallakarthik4@gmail.com"
                className="group flex items-start gap-4 p-6 rounded-2xl bg-card border border-accent/30 hover:border-accent/60 hover:shadow-lg hover:shadow-accent/20 transition-all duration-300"
              >
                <div className="p-3 rounded-full bg-accent/10 group-hover:bg-accent group-hover:text-background transition-all duration-300 flex-shrink-0">
                  <Mail className="h-6 w-6 text-accent group-hover:text-background" />
                </div>
                <div>
                  <h3 className="text-lg font-bold text-foreground mb-1">
                    Email
                  </h3>
                  <p className="text-foreground/70 group-hover:text-accent transition-colors">
                    kandimallakarthik4@gmail.com
                  </p>
                  <p className="text-sm text-foreground/50 mt-1">
                    I'll respond within 24 hours
                  </p>
                </div>
              </a>

              {/* Phone */}
              <a
                href="tel:+919573218680"
                className="group flex items-start gap-4 p-6 rounded-2xl bg-card border border-accent/30 hover:border-accent/60 hover:shadow-lg hover:shadow-accent/20 transition-all duration-300"
              >
                <div className="p-3 rounded-full bg-accent/10 group-hover:bg-accent group-hover:text-background transition-all duration-300 flex-shrink-0">
                  <Phone className="h-6 w-6 text-accent group-hover:text-background" />
                </div>
                <div>
                  <h3 className="text-lg font-bold text-foreground mb-1">
                    Phone
                  </h3>
                  <p className="text-foreground/70 group-hover:text-accent transition-colors">
                    +91 9573218680
                  </p>
                  <p className="text-sm text-foreground/50 mt-1">
                    Available for calls and discussions
                  </p>
                </div>
              </a>

              {/* Social Links */}
              <div>
                <h3 className="text-lg font-bold text-foreground mb-4">
                  Follow Me
                </h3>
                <div className="flex gap-4">
                  <a
                    href="https://linkedin.com/in/kandimalla-karthik"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="p-4 rounded-full bg-card border border-accent/30 text-accent hover:bg-accent hover:text-background transition-all duration-300 group hover:shadow-lg hover:shadow-accent/30"
                  >
                    <Linkedin className="h-6 w-6 group-hover:scale-110 transition-transform" />
                  </a>
                  <a
                    href="https://github.com/karthik12794"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="p-4 rounded-full bg-card border border-accent/30 text-accent hover:bg-accent hover:text-background transition-all duration-300 group hover:shadow-lg hover:shadow-accent/30"
                  >
                    <Github className="h-6 w-6 group-hover:scale-110 transition-transform" />
                  </a>
                </div>
              </div>
            </div>

            {/* Contact Form */}
            <div
              className={`transition-all duration-1000 ${isLoaded ? "opacity-100 translate-x-0" : "opacity-0 translate-x-10"}`}
            >
              <form
                onSubmit={handleSubmit}
                className="space-y-6 p-8 rounded-2xl bg-card border border-accent/30 hover:border-accent/60 transition-all"
              >
                {submitted && (
                  <div className="p-4 rounded-lg bg-green-500/10 border border-green-500/30 text-green-400 animate-slide-in-down">
                    Thank you! I'll get back to you soon.
                  </div>
                )}

                {/* Name */}
                <div>
                  <label className="block text-sm font-medium text-foreground mb-2">
                    Your Name
                  </label>
                  <input
                    type="text"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-3 rounded-lg bg-background border border-accent/30 text-foreground placeholder-foreground/40 focus:border-accent focus:outline-none transition-colors duration-300"
                    placeholder="Kandimalla Karthik"
                  />
                </div>

                {/* Email */}
                <div>
                  <label className="block text-sm font-medium text-foreground mb-2">
                    Your Email
                  </label>
                  <input
                    type="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-3 rounded-lg bg-background border border-accent/30 text-foreground placeholder-foreground/40 focus:border-accent focus:outline-none transition-colors duration-300"
                    placeholder="your@email.com"
                  />
                </div>

                {/* Message */}
                <div>
                  <label className="block text-sm font-medium text-foreground mb-2">
                    Message
                  </label>
                  <textarea
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    required
                    rows={5}
                    className="w-full px-4 py-3 rounded-lg bg-background border border-accent/30 text-foreground placeholder-foreground/40 focus:border-accent focus:outline-none transition-colors duration-300 resize-none"
                    placeholder="Tell me about your project or inquiry..."
                  ></textarea>
                </div>

                {/* Submit Button */}
                <button
                  type="submit"
                  className="w-full py-3 rounded-lg bg-gradient-to-r from-primary to-secondary text-white font-semibold hover:shadow-lg hover:shadow-primary/50 transition-all duration-300 flex items-center justify-center gap-2 group"
                >
                  Send Message
                  <ArrowRight className="h-4 w-4 group-hover:translate-x-1 transition-transform" />
                </button>
              </form>
            </div>
          </div>
        </div>
      </section>

      {/* Quick Contact Options */}
      <section className="py-20 border-t border-accent/20 bg-card/30">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-4xl font-bold mb-12 text-center gradient-text">
            Quick Connect
          </h2>

          <div className="grid md:grid-cols-3 gap-8">
            {[
              {
                title: "Email",
                description: "For formal inquiries and collaborations",
                action: "Send Email",
                href: "mailto:kandimallakarthik4@gmail.com",
                icon: Mail,
              },
              {
                title: "Call Me",
                description: "Available for phone discussions",
                action: "Call Now",
                href: "tel:+919573218680",
                icon: Phone,
              },
              {
                title: "Connect on LinkedIn",
                description: "Let's network and collaborate",
                action: "Visit Profile",
                href: "https://linkedin.com/in/kandimalla-karthik",
                icon: Linkedin,
              },
            ].map((option, index) => {
              const Icon = option.icon;
              return (
                <a
                  key={index}
                  href={option.href}
                  target={option.href.startsWith("http") ? "_blank" : undefined}
                  rel={
                    option.href.startsWith("http")
                      ? "noopener noreferrer"
                      : undefined
                  }
                  className="group p-8 rounded-2xl bg-card border border-accent/30 hover:border-accent/60 hover:shadow-lg hover:shadow-accent/20 transition-all duration-300 text-center animate-slide-in-up"
                  style={{ animationDelay: `${index * 0.1}s` }}
                >
                  <Icon className="h-8 w-8 text-accent mx-auto mb-4 group-hover:scale-110 transition-transform" />
                  <h3 className="text-xl font-bold text-foreground mb-2">
                    {option.title}
                  </h3>
                  <p className="text-foreground/70 mb-4">
                    {option.description}
                  </p>
                  <span className="inline-flex items-center gap-2 text-accent font-semibold group-hover:gap-3 transition-all">
                    {option.action}
                    <ArrowRight className="h-4 w-4" />
                  </span>
                </a>
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
