import { useEffect, useState } from "react";
import Navigation from "@/components/Navigation";
import { CertificateModal } from "@/components/CertificateModal";
import { Award, BookOpen, CheckCircle2 } from "lucide-react";

interface Certificate {
  id: string;
  title: string;
  issuer: string;
  date: string;
  icon: string;
  description: string;
  certificateUrl?: string;
}

const linkedinProfileUrl = "https://linkedin.com/in/kandimalla-karthik";

const certificatesData: Certificate[] = [
  {
    id: "python-data-science",
    title: "Python for Data Science",
    issuer: "NPTEL (IIT Madras)",
    date: "Jan-Feb 2025",
    icon: "🐍",
    description:
      "Elite certification for successfully completing Python for Data Science course with a consolidated score of 72%. Certificate No: NPTEL25CS60S331600053. This course covers fundamental and advanced concepts in data science using Python.",
    certificateUrl: linkedinProfileUrl,
  },
  {
    id: "cloud-computing",
    title: "Cloud Computing",
    issuer: "NPTEL (IIT Kharagpur)",
    date: "Jul-Oct 2025",
    icon: "☁️",
    description:
      "Elite certification for successfully completing Cloud Computing (12-week course) with a consolidated score of 66%. Certificate No: NPTEL25CS107S164900097. Comprehensive study of cloud computing architecture, services, and deployment models.",
    certificateUrl: linkedinProfileUrl,
  },
  {
    id: "cpp-programming",
    title: "C++ Programming",
    issuer: "Saylor Academy",
    date: "May 30, 2025",
    icon: "⚙️",
    description:
      "Certificate of Achievement for CS107: C++ Programming. 40-hour comprehensive course covering object-oriented programming concepts, memory management, and advanced C++ features. Grade: 77.50. Certificate ID: 0934641704KK",
    certificateUrl: linkedinProfileUrl,
  },
  {
    id: "software-engineering",
    title: "Software Engineering",
    issuer: "Saylor Academy",
    date: "May 30, 2025",
    icon: "💻",
    description:
      "Certificate of Achievement for CS302: Software Engineering. 36-hour course covering software development lifecycle, design patterns, testing methodologies, and best practices. Grade: 75.81. Certificate ID: 8009418818KK",
    certificateUrl: linkedinProfileUrl,
  },
  {
    id: "c-programming",
    title: "C Programming Course",
    issuer: "Infosys Springboard",
    date: "May 6, 2025",
    icon: "🔤",
    description:
      "Course Completion Certificate for C Programming Course. Successfully completed comprehensive training in C programming fundamentals, data structures, and programming concepts. Issued by Infosys Limited with Springboard certification.",
    certificateUrl: linkedinProfileUrl,
  },
  {
    id: "data-labeling",
    title: "Data Labeling Job Simulation",
    issuer: "Forage",
    date: "December 12, 2025",
    icon: "🏷️",
    description:
      "Certificate of Completion for Data Labeling Job Simulation. Completed practical tasks in Batch Labeling & PII Awareness and Review, Quality Control & Iteration. This practical simulation provided hands-on experience in data preparation and quality assurance processes. Enrolment Verification Code: uXrcu5ghvpHoYgHZA",
    certificateUrl: linkedinProfileUrl,
  },
  {
    id: "web-dev-fundamentals",
    title: "Web Development Fundamentals",
    issuer: "IBM SkillsBuild",
    date: "August 10, 2025",
    icon: "🌐",
    description:
      "Certificate of Completion for Web Development Fundamentals. Comprehensive course covering foundational web development concepts, HTML, CSS, JavaScript, and modern web technologies through IBM SkillsBuild platform.",
    certificateUrl: linkedinProfileUrl,
  },
];

export default function Certifications() {
  const [isLoaded, setIsLoaded] = useState(false);
  const [selectedCert, setSelectedCert] = useState<Certificate | null>(null);

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
          {/* Additional 3D background elements */}
          <div
            className="absolute top-0 right-1/4 w-80 h-80 bg-primary/10 rounded-full blur-3xl animate-glow"
            style={{ animationDelay: "1.5s" }}
          ></div>
        </div>

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h1 className="text-5xl md:text-6xl font-bold mb-6 gradient-text animate-slide-in-down">
              Certifications & Achievements
            </h1>
            <p className="text-lg text-foreground/70 max-w-2xl mx-auto animate-slide-in-up">
              Professional certifications and continuous learning achievements
              from renowned institutions
            </p>
          </div>
        </div>
      </section>

      {/* Certificates Grid */}
      <section className="py-20 border-t border-accent/20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {certificatesData.map((cert, index) => (
              <div
                key={cert.id}
                className="group relative animate-slide-in-up"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                {/* Glow effect on hover */}
                <div className="absolute -inset-0.5 bg-gradient-to-r from-primary via-secondary to-accent rounded-2xl opacity-0 group-hover:opacity-40 transition-opacity duration-300 blur -z-10" />

                <a
                  href={cert.certificateUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="relative w-full h-full p-6 rounded-2xl bg-card border border-accent/30 group-hover:border-accent/60 transition-all duration-300 hover:shadow-xl hover:shadow-accent/20 flex flex-col text-left cursor-pointer block"
                >
                  {/* Header */}
                  <div className="flex items-start justify-between mb-4">
                    <div>
                      <div className="text-5xl mb-3">{cert.icon}</div>
                      <h3 className="text-2xl font-bold text-foreground mb-2 group-hover:gradient-text transition-all">
                        {cert.title}
                      </h3>
                      <p className="text-accent font-semibold text-sm">
                        {cert.issuer}
                      </p>
                    </div>
                    <Award className="h-6 w-6 text-accent opacity-60 group-hover:opacity-100 transition-opacity flex-shrink-0" />
                  </div>

                  {/* Date */}
                  <div className="mt-auto pt-4 border-t border-accent/20">
                    <p className="text-foreground/60 text-sm">{cert.date}</p>
                    <p className="text-accent text-xs mt-2 font-medium hover:text-primary transition-colors">
                      View on LinkedIn →
                    </p>
                  </div>
                </a>
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
              "Python for Data Science",
              "Cloud Computing Architecture",
              "C++ Advanced Programming",
              "Software Engineering Best Practices",
              "C Programming Fundamentals",
              "Data Labeling & Quality Control",
              "Object-Oriented Programming",
              "System Design & Architecture",
              "Database Management",
              "Data Privacy & Security",
              "Testing & Quality Assurance",
              "Team Leadership & Collaboration",
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

      {/* Learning Journey */}
      <section className="py-20 border-t border-accent/20">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-4xl font-bold mb-12 text-center gradient-text animate-slide-in-down">
            Continuous Learning Journey
          </h2>

          <div className="grid md:grid-cols-2 gap-8">
            {[
              {
                title: "Advanced Technical Skills",
                description:
                  "Specialized training in Python, C++, Cloud Computing, and Software Engineering from top-tier institutions like NPTEL and Saylor Academy",
                icon: BookOpen,
              },
              {
                title: "Practical Industry Experience",
                description:
                  "Hands-on experience through job simulations and real-world projects covering data labeling, quality control, and data preparation",
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

      {/* Certificate Modal */}
      <CertificateModal
        certificate={selectedCert}
        onClose={() => setSelectedCert(null)}
      />

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
