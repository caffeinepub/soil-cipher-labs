import { Globe, Target } from "lucide-react";

const visionPoints = [
  "Every farm operates on soil intelligence",
  "Fertilizer use is optimized, not excessive",
  "Data replaces guesswork",
  "Sustainability becomes measurable",
];

const cultivateLines = [
  "We cultivate resilience.",
  "We cultivate sustainability.",
  "We cultivate the future.",
];

export default function VisionMission() {
  return (
    <section
      id="vision"
      className="section-pad"
      style={{ backgroundColor: "oklch(0.18 0.025 60)" }}
    >
      <div className="max-w-6xl mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
          {/* Vision */}
          <div>
            <div className="flex items-center gap-3 mb-5">
              <Globe
                className="w-5 h-5"
                style={{ color: "oklch(0.72 0.12 65)" }}
              />
              <span
                className="font-sans text-xs font-semibold tracking-widest uppercase"
                style={{ color: "oklch(0.72 0.12 65)" }}
              >
                Our Vision
              </span>
            </div>
            <span
              className="block w-16 h-1 rounded-full mb-6"
              style={{ backgroundColor: "oklch(0.72 0.12 65)" }}
            />
            <h2 className="section-heading text-cream-200 mb-8 text-3xl md:text-4xl">
              Transforming Agriculture Into a Knowledge-Driven Ecosystem.
            </h2>
            <p className="font-sans text-sm font-semibold tracking-widest uppercase text-cream-400 mb-5">
              We envision a future where:
            </p>
            <ul className="space-y-4 mb-10">
              {visionPoints.map((point) => (
                <li key={point} className="flex items-start gap-3">
                  <span
                    className="w-2 h-2 rounded-full flex-shrink-0 mt-2"
                    style={{ backgroundColor: "oklch(0.72 0.12 65)" }}
                  />
                  <span className="font-sans text-base text-cream-300">
                    {point}
                  </span>
                </li>
              ))}
            </ul>
            <div
              className="border-l-4 pl-5 py-2"
              style={{ borderColor: "oklch(0.72 0.12 65)" }}
            >
              <p className="font-serif italic text-cream-300 text-base leading-relaxed">
                Soil is not just a resource.
                <br />
                It is intelligence waiting to be decoded.
              </p>
            </div>
          </div>

          {/* Mission */}
          <div>
            <div className="flex items-center gap-3 mb-5">
              <Target
                className="w-5 h-5"
                style={{ color: "oklch(0.55 0.11 155)" }}
              />
              <span
                className="font-sans text-xs font-semibold tracking-widest uppercase"
                style={{ color: "oklch(0.55 0.11 155)" }}
              >
                Our Mission
              </span>
            </div>
            <span
              className="block w-16 h-1 rounded-full mb-6"
              style={{ backgroundColor: "oklch(0.55 0.11 155)" }}
            />
            <h2 className="section-heading text-cream-200 mb-8 text-3xl md:text-4xl">
              Our Mission
            </h2>
            <p className="font-sans text-base text-cream-300 leading-relaxed mb-10">
              To empower farmers, agribusinesses, and institutions with clarity,
              precision, and actionable soil intelligence — creating resilient
              farms and sustainable agricultural ecosystems.
            </p>

            {/* Poetic Callout */}
            <div
              className="rounded-md p-8"
              style={{
                background:
                  "linear-gradient(135deg, oklch(0.38 0.095 155 / 0.2) 0%, oklch(0.22 0.065 155 / 0.3) 100%)",
                border: "1px solid oklch(0.38 0.095 155 / 0.3)",
              }}
            >
              <p
                className="font-serif font-semibold text-base mb-4"
                style={{ color: "oklch(0.75 0.08 155)" }}
              >
                We cultivate more than crops.
              </p>
              <div className="space-y-3">
                {cultivateLines.map((line, idx) => (
                  <p
                    key={line}
                    className="font-serif italic text-xl md:text-2xl font-bold text-cream-200"
                    style={{
                      paddingLeft: `${idx * 1.5}rem`,
                      opacity: 1 - idx * 0.05,
                    }}
                  >
                    {line}
                  </p>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
