import { Mail, MapPin, Phone } from "lucide-react";

const hashtags = [
  "#SoilCipherLabs",
  "#VardhamanaIndori",
  "#SoilIntelligence",
  "#SustainableAgriculture",
];

export default function Contact() {
  return (
    <section
      id="contact"
      className="section-pad"
      style={{ backgroundColor: "oklch(0.975 0.008 85)" }}
    >
      <div className="max-w-5xl mx-auto">
        {/* Header */}
        <div className="text-center mb-14">
          <div className="flex items-center justify-center gap-3 mb-5">
            <Mail className="w-5 h-5 text-forest-600" />
            <span className="font-sans text-xs font-semibold tracking-widest uppercase text-forest-600">
              Contact
            </span>
          </div>
          <span className="accent-line mx-auto" />
          <h2 className="section-heading text-forest-800 mb-4">Get In Touch</h2>
          <p className="body-text text-foreground/70 max-w-xl mx-auto">
            Ready to decode your soil? Reach out to us and let's start the
            conversation.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-10 items-start">
          {/* Contact Details */}
          <div className="space-y-6">
            <div
              className="flex items-start gap-4 p-5 rounded-md border"
              style={{
                backgroundColor: "oklch(0.99 0.005 80)",
                borderColor: "oklch(0.88 0.018 80)",
              }}
            >
              <div
                className="w-10 h-10 rounded-sm flex items-center justify-center flex-shrink-0"
                style={{
                  backgroundColor: "oklch(0.97 0.015 155)",
                  color: "oklch(0.38 0.095 155)",
                }}
              >
                <Mail className="w-5 h-5" />
              </div>
              <div>
                <p className="font-sans text-xs font-semibold tracking-widest uppercase text-foreground/50 mb-1">
                  Email
                </p>
                <a
                  href="mailto:info@soilcipherlabs.com"
                  className="font-sans text-base font-medium text-forest-700 hover:text-forest-500 transition-colors"
                >
                  info@soilcipherlabs.com
                </a>
              </div>
            </div>

            <div
              className="flex items-start gap-4 p-5 rounded-md border"
              style={{
                backgroundColor: "oklch(0.99 0.005 80)",
                borderColor: "oklch(0.88 0.018 80)",
              }}
            >
              <div
                className="w-10 h-10 rounded-sm flex items-center justify-center flex-shrink-0"
                style={{
                  backgroundColor: "oklch(0.98 0.015 75)",
                  color: "oklch(0.72 0.12 65)",
                }}
              >
                <Phone className="w-5 h-5" />
              </div>
              <div>
                <p className="font-sans text-xs font-semibold tracking-widest uppercase text-foreground/50 mb-1">
                  Phone
                </p>
                <a
                  href="tel:+919522261547"
                  className="font-sans text-base font-medium text-foreground/80 hover:text-forest-600 transition-colors"
                >
                  +91-9522261547
                </a>
              </div>
            </div>

            <div
              className="flex items-start gap-4 p-5 rounded-md border"
              style={{
                backgroundColor: "oklch(0.99 0.005 80)",
                borderColor: "oklch(0.88 0.018 80)",
              }}
            >
              <div
                className="w-10 h-10 rounded-sm flex items-center justify-center flex-shrink-0"
                style={{
                  backgroundColor: "oklch(0.97 0.015 155)",
                  color: "oklch(0.38 0.095 155)",
                }}
              >
                <MapPin className="w-5 h-5" />
              </div>
              <div>
                <p className="font-sans text-xs font-semibold tracking-widest uppercase text-foreground/50 mb-1">
                  Location
                </p>
                <p className="font-sans text-base font-medium text-foreground/80">
                  India
                </p>
              </div>
            </div>
          </div>

          {/* Social / Hashtags */}
          <div>
            <div
              className="p-8 rounded-md border"
              style={{
                backgroundColor: "oklch(0.99 0.005 80)",
                borderColor: "oklch(0.88 0.018 80)",
              }}
            >
              <p className="font-sans text-xs font-semibold tracking-widest uppercase text-foreground/50 mb-6">
                Follow the Conversation
              </p>
              <div className="flex flex-wrap gap-3">
                {hashtags.map((tag) => (
                  <span key={tag} className="hashtag-tag">
                    {tag}
                  </span>
                ))}
              </div>
              <div
                className="mt-8 pt-6 border-t"
                style={{ borderColor: "oklch(0.88 0.018 80)" }}
              >
                <p className="font-serif italic text-base text-foreground/60 leading-relaxed">
                  "The future of agriculture depends on understanding what lies
                  beneath the surface."
                </p>
                <p className="font-sans text-sm font-semibold text-forest-600 mt-3">
                  — Vardhamana Indori, Founder
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
