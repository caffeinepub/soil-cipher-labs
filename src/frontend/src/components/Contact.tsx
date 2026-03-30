import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { Mail, MapPin, Phone } from "lucide-react";
import { useState } from "react";
import { toast } from "sonner";
import { useScrollAnimation } from "../hooks/useScrollAnimation";

const hashtags = [
  "#SoilCipherLabs",
  "#VardhamanaIndori",
  "#SoilIntelligence",
  "#SustainableAgriculture",
];

export default function Contact() {
  const { ref, isVisible } = useScrollAnimation(0.1);
  const [form, setForm] = useState({ name: "", email: "", message: "" });
  const [submitting, setSubmitting] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitting(true);
    setTimeout(() => {
      setSubmitting(false);
      setForm({ name: "", email: "", message: "" });
      toast.success("Thank you! We'll get back to you soon.");
    }, 800);
  };

  return (
    <section
      id="contact"
      ref={ref as React.RefObject<HTMLElement>}
      className="section-pad"
      style={{ backgroundColor: "#0a1a0a" }}
    >
      <div className="max-w-5xl mx-auto">
        <div
          className={`text-center mb-14 animate-on-scroll ${isVisible ? "visible" : ""}`}
        >
          <div className="flex items-center justify-center gap-3 mb-5">
            <Mail className="w-5 h-5" style={{ color: "#4ade80" }} />
            <span
              className="font-mono text-xs font-semibold tracking-widest uppercase tech-bracket"
              style={{ color: "rgba(74,222,128,0.85)" }}
            >
              Contact
            </span>
          </div>
          <span
            className="block w-16 h-1 mx-auto mb-6"
            style={{ background: "linear-gradient(90deg, #4ade80, #22c55e)" }}
          />
          <h2 className="section-heading mb-4">Get In Touch</h2>
          <p className="body-text max-w-xl mx-auto">
            Ready to decode your soil? Reach out to us and let&apos;s start the
            conversation.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-10 items-start">
          <div
            className={`space-y-6 animate-on-scroll-left ${isVisible ? "visible" : ""}`}
          >
            {[
              {
                icon: Mail,
                label: "Email",
                content: (
                  <a
                    href="mailto:info@soilcipherlabs.com"
                    className="font-sans text-base font-medium"
                    style={{ color: "#4ade80" }}
                  >
                    info@soilcipherlabs.com
                  </a>
                ),
              },
              {
                icon: Phone,
                label: "Phone",
                content: (
                  <a
                    href="tel:+919522261547"
                    className="font-sans text-base font-medium"
                    style={{ color: "#4ade80" }}
                  >
                    +91-9522261547
                  </a>
                ),
              },
              {
                icon: MapPin,
                label: "Location",
                content: (
                  <p
                    className="font-sans text-base font-medium"
                    style={{ color: "rgba(232,245,233,0.8)" }}
                  >
                    India
                  </p>
                ),
              },
            ].map(({ icon: Icon, label, content }) => (
              <div
                key={label}
                className="flex items-start gap-4 p-5 rounded-md border transition-all duration-300"
                style={{
                  backgroundColor: "rgba(255,255,255,0.03)",
                  borderColor: "rgba(74,222,128,0.18)",
                }}
                onMouseEnter={(e) => {
                  (e.currentTarget as HTMLElement).style.borderColor =
                    "rgba(74,222,128,0.45)";
                }}
                onMouseLeave={(e) => {
                  (e.currentTarget as HTMLElement).style.borderColor =
                    "rgba(74,222,128,0.18)";
                }}
              >
                <div
                  className="w-10 h-10 rounded-sm flex items-center justify-center flex-shrink-0"
                  style={{
                    backgroundColor: "rgba(74,222,128,0.1)",
                    color: "#4ade80",
                  }}
                >
                  <Icon className="w-5 h-5" />
                </div>
                <div>
                  <p
                    className="font-mono text-xs font-semibold tracking-widest uppercase mb-1"
                    style={{ color: "rgba(232,245,233,0.45)" }}
                  >
                    {label}
                  </p>
                  {content}
                </div>
              </div>
            ))}
          </div>

          <div
            className={`space-y-6 animate-on-scroll-right ${isVisible ? "visible" : ""}`}
          >
            <div
              className="p-8 rounded-md border"
              style={{
                backgroundColor: "rgba(255,255,255,0.03)",
                borderColor: "rgba(74,222,128,0.2)",
              }}
            >
              <p
                className="font-mono text-xs font-semibold tracking-widest uppercase mb-6"
                style={{ color: "rgba(232,245,233,0.45)" }}
              >
                Send Us a Message
              </p>
              <form onSubmit={handleSubmit} className="space-y-4">
                <div className="space-y-1.5">
                  <Label
                    htmlFor="contact-name"
                    className="font-mono text-xs font-semibold uppercase tracking-widest"
                    style={{ color: "rgba(232,245,233,0.45)" }}
                  >
                    Full Name
                  </Label>
                  <Input
                    id="contact-name"
                    placeholder="Your full name"
                    value={form.name}
                    onChange={(e) =>
                      setForm((f) => ({ ...f, name: e.target.value }))
                    }
                    required
                    className="input-neon"
                    style={{
                      backgroundColor: "rgba(255,255,255,0.05)",
                      borderColor: "rgba(74,222,128,0.2)",
                      color: "#e8f5e9",
                    }}
                    data-ocid="contact.input"
                  />
                </div>
                <div className="space-y-1.5">
                  <Label
                    htmlFor="contact-email"
                    className="font-mono text-xs font-semibold uppercase tracking-widest"
                    style={{ color: "rgba(232,245,233,0.45)" }}
                  >
                    Email
                  </Label>
                  <Input
                    id="contact-email"
                    type="email"
                    placeholder="your@email.com"
                    value={form.email}
                    onChange={(e) =>
                      setForm((f) => ({ ...f, email: e.target.value }))
                    }
                    required
                    className="input-neon"
                    style={{
                      backgroundColor: "rgba(255,255,255,0.05)",
                      borderColor: "rgba(74,222,128,0.2)",
                      color: "#e8f5e9",
                    }}
                    data-ocid="contact.input"
                  />
                </div>
                <div className="space-y-1.5">
                  <Label
                    htmlFor="contact-message"
                    className="font-mono text-xs font-semibold uppercase tracking-widest"
                    style={{ color: "rgba(232,245,233,0.45)" }}
                  >
                    Message
                  </Label>
                  <Textarea
                    id="contact-message"
                    placeholder="Tell us about your soil and farming needs..."
                    rows={4}
                    value={form.message}
                    onChange={(e) =>
                      setForm((f) => ({ ...f, message: e.target.value }))
                    }
                    required
                    className="input-neon"
                    style={{
                      backgroundColor: "rgba(255,255,255,0.05)",
                      borderColor: "rgba(74,222,128,0.2)",
                      color: "#e8f5e9",
                    }}
                    data-ocid="contact.textarea"
                  />
                </div>
                <Button
                  type="submit"
                  disabled={submitting}
                  className="w-full font-semibold"
                  style={{ backgroundColor: "#4ade80", color: "#0a1a0a" }}
                  data-ocid="contact.submit_button"
                >
                  {submitting ? "Sending..." : "Send Message"}
                </Button>
              </form>
            </div>
            <div
              className="p-6 rounded-md border"
              style={{
                backgroundColor: "rgba(255,255,255,0.03)",
                borderColor: "rgba(74,222,128,0.18)",
              }}
            >
              <p
                className="font-mono text-xs font-semibold tracking-widest uppercase mb-4"
                style={{ color: "rgba(232,245,233,0.45)" }}
              >
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
                className="mt-6 pt-5 border-t"
                style={{ borderColor: "rgba(74,222,128,0.12)" }}
              >
                <p
                  className="font-serif italic text-sm leading-relaxed"
                  style={{ color: "rgba(232,245,233,0.6)" }}
                >
                  &ldquo;The future of agriculture depends on understanding what
                  lies beneath the surface.&rdquo;
                </p>
                <p
                  className="font-sans text-sm font-semibold mt-2"
                  style={{ color: "#4ade80" }}
                >
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
