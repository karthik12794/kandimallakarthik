import { useLocation } from "react-router-dom";
import { useEffect } from "react";
import { Link } from "react-router-dom";
import Navigation from "@/components/Navigation";
import { ArrowRight } from "lucide-react";

const NotFound = () => {
  const location = useLocation();

  useEffect(() => {
    console.error(
      "404 Error: User attempted to access non-existent route:",
      location.pathname,
    );
  }, [location.pathname]);

  return (
    <div className="w-full bg-background text-foreground min-h-screen flex flex-col">
      <Navigation />

      <div className="flex-1 flex items-center justify-center px-4">
        <div className="max-w-2xl w-full text-center py-20">
          {/* 404 Number */}
          <h1 className="text-8xl md:text-9xl font-extrabold gradient-text mb-4 animate-slide-in-down">
            404
          </h1>

          {/* Message */}
          <p className="text-3xl md:text-4xl font-bold text-foreground mb-4 animate-slide-in-up">
            Page Not Found
          </p>

          <p
            className="text-lg text-foreground/70 mb-8 max-w-xl mx-auto animate-slide-in-up"
            style={{ animationDelay: "0.1s" }}
          >
            Oops! It looks like the page you're looking for doesn't exist. Let's
            get you back on track.
          </p>

          {/* Action Buttons */}
          <div
            className="flex flex-col sm:flex-row gap-4 justify-center mb-12 animate-slide-in-up"
            style={{ animationDelay: "0.2s" }}
          >
            <Link
              to="/"
              className="px-8 py-3 rounded-lg bg-gradient-to-r from-primary to-secondary text-white font-semibold hover:shadow-lg hover:shadow-primary/50 transition-all duration-300 flex items-center justify-center gap-2 group"
            >
              Back to Home
              <ArrowRight className="h-4 w-4 group-hover:translate-x-1 transition-transform" />
            </Link>
            <Link
              to="/projects"
              className="px-8 py-3 rounded-lg border border-accent/50 text-accent font-semibold hover:bg-accent/10 transition-all duration-300"
            >
              View Projects
            </Link>
          </div>

          {/* Suggestions */}
          <div
            className="p-8 rounded-2xl bg-card border border-accent/30 animate-slide-in-up"
            style={{ animationDelay: "0.3s" }}
          >
            <h3 className="text-lg font-bold text-foreground mb-4">
              Quick Links
            </h3>
            <div className="grid sm:grid-cols-2 gap-4">
              <Link
                to="/"
                className="p-4 rounded-lg bg-background border border-accent/20 hover:border-accent/50 transition-colors text-foreground hover:text-accent"
              >
                🏠 Home
              </Link>
              <Link
                to="/skills"
                className="p-4 rounded-lg bg-background border border-accent/20 hover:border-accent/50 transition-colors text-foreground hover:text-accent"
              >
                🛠️ Skills
              </Link>
              <Link
                to="/projects"
                className="p-4 rounded-lg bg-background border border-accent/20 hover:border-accent/50 transition-colors text-foreground hover:text-accent"
              >
                💼 Projects
              </Link>
              <Link
                to="/contact"
                className="p-4 rounded-lg bg-background border border-accent/20 hover:border-accent/50 transition-colors text-foreground hover:text-accent"
              >
                📧 Contact
              </Link>
            </div>
          </div>
        </div>
      </div>

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
};

export default NotFound;
