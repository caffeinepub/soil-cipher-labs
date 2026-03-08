import { Quote } from "lucide-react";

export default function Founder() {
  return (
    <section
      id="founder"
      className="section-pad"
      style={{ backgroundColor: "oklch(0.985 0.006 85)" }}
    >
      <div className="max-w-5xl mx-auto">
        {/* Section Label */}
        <div className="flex items-center gap-3 mb-12 justify-center">
          <span className="font-sans text-xs font-semibold tracking-widest uppercase text-forest-600">
            Founder Message
          </span>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 md:gap-16 items-center">
          {/* Portrait */}
          <div className="flex justify-center md:justify-start">
            <div className="relative">
              {/* Decorative ring */}
              <div
                className="absolute -inset-3 rounded-full opacity-20"
                style={{
                  background:
                    "conic-gradient(from 0deg, oklch(0.38 0.095 155), oklch(0.72 0.12 65), oklch(0.38 0.095 155))",
                }}
              />
              <div
                className="relative w-56 h-56 md:w-72 md:h-72 rounded-full overflow-hidden border-4"
                style={{ borderColor: "oklch(0.38 0.095 155)" }}
              >
                <img
                  src="/assets/my image.jpg"
                  alt="Vardhamana Indori — Founder of Soil Cipher Labs"
                  className="w-full h-full object-cover object-top"
                  loading="lazy"
                />
              </div>
              {/* Amber accent dot */}
              <div
                className="absolute bottom-2 right-2 w-8 h-8 rounded-full border-4 border-background"
                style={{ backgroundColor: "oklch(0.72 0.12 65)" }}
              />
            </div>
          </div>

          {/* Content */}
          <div>
            <span className="accent-line" />
            <h2 className="font-serif text-3xl md:text-4xl font-bold text-forest-800 mb-2">
              Vardhamana Indori
            </h2>
            <p className="font-sans text-sm text-foreground/60 mb-8 leading-relaxed">
              Agri-Strategist &nbsp;|&nbsp; Sustainable Farming Advocate
              &nbsp;|&nbsp; Soil Intelligence Innovator
            </p>

            {/* Quote */}
            <div
              className="relative rounded-md p-6 mb-8"
              style={{
                backgroundColor: "oklch(0.97 0.015 155)",
                borderLeft: "4px solid oklch(0.72 0.12 65)",
              }}
            >
              <Quote
                className="absolute top-4 right-4 w-8 h-8 opacity-20"
                style={{ color: "oklch(0.38 0.095 155)" }}
              />
              <p className="font-serif italic text-lg text-forest-800 leading-relaxed">
                "Beneath every thriving crop lies an untold story — written in
                minerals, nutrients, moisture, and microbial life. When we
                understand that story, we unlock the true potential of the
                land."
              </p>
            </div>

            {/* Origin Story */}
            <p className="font-sans text-base text-foreground/75 leading-relaxed mb-3">
              Soil Cipher Labs was born from a simple belief:
            </p>
            <p
              className="font-serif italic text-lg font-semibold"
              style={{ color: "oklch(0.38 0.095 155)" }}
            >
              The future of agriculture depends on understanding what lies
              beneath the surface.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
