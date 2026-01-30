import { useState } from "react";
import { X, ChevronLeft, ChevronRight } from "lucide-react";

interface Certificate {
  id: string;
  title: string;
  issuer: string;
  date: string;
  icon: string;
  description: string;
  certificateUrl?: string;
  image?: string;
}

interface CertificateModalProps {
  certificate: Certificate | null;
  onClose: () => void;
}

export function CertificateModal({
  certificate,
  onClose,
}: CertificateModalProps) {
  if (!certificate) return null;

  return (
    <div
      className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/60 backdrop-blur-sm animate-fade-in"
      onClick={onClose}
    >
      {/* 3D animated background inside modal */}
      <div className="absolute inset-0 -z-10">
        <div className="absolute top-0 left-1/4 w-64 h-64 bg-primary/20 rounded-full blur-3xl animate-glow"></div>
        <div className="absolute bottom-0 right-1/4 w-64 h-64 bg-secondary/20 rounded-full blur-3xl animate-glow" style={{ animationDelay: "1s" }}></div>
      </div>

      <div
        className="relative bg-card border border-accent/50 rounded-3xl overflow-hidden max-w-4xl w-full max-h-[90vh] overflow-y-auto shadow-2xl shadow-accent/30 animate-scale-in"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Close button */}
        <button
          onClick={onClose}
          className="absolute top-4 right-4 p-2 rounded-full bg-background/80 hover:bg-background border border-accent/30 text-accent transition-all z-10"
        >
          <X className="h-6 w-6" />
        </button>

        {/* Certificate content */}
        <div className="p-8 md:p-12">
          {/* Header */}
          <div className="text-center mb-8">
            <div className="text-5xl mb-4">{certificate.icon}</div>
            <h2 className="text-4xl font-bold gradient-text mb-2">
              {certificate.title}
            </h2>
            <p className="text-accent text-lg font-semibold">
              {certificate.issuer}
            </p>
            <p className="text-foreground/60 mt-2">{certificate.date}</p>
          </div>

          {/* Certificate image if available */}
          {certificate.image && (
            <div className="mb-8 rounded-2xl overflow-hidden border border-accent/30">
              <img
                src={certificate.image}
                alt={certificate.title}
                className="w-full h-auto"
              />
            </div>
          )}

          {/* Description */}
          <div className="mb-8 p-6 rounded-2xl bg-background/50 border border-accent/20">
            <p className="text-foreground/80 text-center leading-relaxed">
              {certificate.description}
            </p>
          </div>

          {/* Certificate Link */}
          {certificate.certificateUrl && (
            <div className="text-center">
              <a
                href={certificate.certificateUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 px-6 py-3 rounded-lg bg-gradient-to-r from-primary to-secondary text-white font-semibold hover:shadow-lg hover:shadow-primary/50 transition-all duration-300"
              >
                View Full Certificate
                <ChevronRight className="h-4 w-4" />
              </a>
            </div>
          )}

          {/* Achievements/Details */}
          <div className="mt-8 pt-8 border-t border-accent/20">
            <h3 className="text-lg font-bold text-foreground mb-4">
              Certificate Details
            </h3>
            <div className="grid md:grid-cols-2 gap-4">
              <div className="p-4 rounded-lg bg-background/50 border border-accent/20">
                <p className="text-foreground/60 text-sm">Issued By</p>
                <p className="text-foreground font-semibold">
                  {certificate.issuer}
                </p>
              </div>
              <div className="p-4 rounded-lg bg-background/50 border border-accent/20">
                <p className="text-foreground/60 text-sm">Date</p>
                <p className="text-foreground font-semibold">
                  {certificate.date}
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default CertificateModal;
