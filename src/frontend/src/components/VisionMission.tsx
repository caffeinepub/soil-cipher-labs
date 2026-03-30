import { Globe, Target } from "lucide-react";
import { useScrollAnimation } from "../hooks/useScrollAnimation";

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
  const { ref, isVisible } = useScrollAnimation(0.1);
  return (
    <section
      id="vision"
      ref={ref as React.RefObject<HTMLElement>}
      className="section-pad"
      style={{ backgroundColor: "#0a1a0a" }}
    >
      <div className="max-w-6xl mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
          <div
            className={`animate-on-scroll-left ${isVisible ? "visible" : ""}`}
          >
            <div className="flex items-center gap-3 mb-5">
              <Globe className="w-5 h-5" style={{ color: "#4ade80" }} />
              <span
                className="font-mono text-xs font-semibold tracking-widest uppercase tech-bracket"
                style={{ color: "rgba(74,222,128,0.85)" }}
              >
                Our Vision
              </span>
            </div>
            <span
              className="block w-16 h-1 rounded-full mb-6"
              style={{ background: "linear-gradient(90deg, #4ade80, #22c55e)" }}
            />
            <h2 className="section-heading mb-8 text-3xl md:text-4xl">
              Transforming Agriculture Into a Knowledge-Driven Ecosystem.
            </h2>
            <p
              className="font-sans text-sm font-semibold tracking-widest uppercase mb-5"
              style={{ color: "rgba(232,245,233,0.5)" }}
            >
              We envision a future where:
            </p>
            <ul className="space-y-4 mb-10">
              {visionPoints.map((point, idx) => (
                <li
                  key={point}
                  className={`flex items-start gap-3 animate-on-scroll ${isVisible ? "visible" : ""}`}
                  style={{ transitionDelay: `${0.1 + idx * 0.1}s` }}
                >
                  <span
                    className="w-2 h-2 rotate-45 flex-shrink-0 mt-2"
                    style={{ backgroundColor: "#4ade80" }}
                  />
                  <span
                    className="font-sans text-base"
                    style={{ color: "rgba(232,245,233,0.8)" }}
                  >
                    {point}
                  </span>
                </li>
              ))}
            </ul>
            <div
              className="border-l-4 pl-5 py-2"
              style={{ borderColor: "#4ade80" }}
            >
              <p
                className="font-serif italic text-base leading-relaxed"
                style={{ color: "rgba(232,245,233,0.7)" }}
              >
                Soil is not just a resource.
                <br />
                It is intelligence waiting to be decoded.
              </p>
            </div>
          </div>

          <div
            className={`animate-on-scroll-right ${isVisible ? "visible" : ""}`}
            style={{ transitionDelay: "0.15s" }}
          >
            <div className="flex items-center gap-3 mb-5">
              <Target className="w-5 h-5" style={{ color: "#4ade80" }} />
              <span
                className="font-mono text-xs font-semibold tracking-widest uppercase tech-bracket"
                style={{ color: "rgba(74,222,128,0.85)" }}
              >
                Our Mission
              </span>
            </div>
            <span
              className="block w-16 h-1 rounded-full mb-6"
              style={{ background: "linear-gradient(90deg, #4ade80, #22c55e)" }}
            />
            <h2 className="section-heading mb-8 text-3xl md:text-4xl">
              Our Mission
            </h2>
            <p
              className="font-sans text-base leading-relaxed mb-10"
              style={{ color: "rgba(232,245,233,0.75)" }}
            >
              To empower farmers, agribusinesses, and institutions with clarity,
              precision, and actionable soil intelligence — creating resilient
              farms and sustainable agricultural ecosystems.
            </p>
            <div
              className={`rounded-md p-8 animate-on-scroll-right ${isVisible ? "visible" : ""}`}
              style={{
                background: "rgba(74,222,128,0.06)",
                border: "1px solid rgba(74,222,128,0.25)",
                backdropFilter: "blur(12px)",
                transitionDelay: "0.3s",
              }}
            >
              <p
                className="font-serif font-semibold text-base mb-4"
                style={{ color: "#e8f5e9" }}
              >
                We cultivate more than crops.
              </p>
              <div className="space-y-3">
                {cultivateLines.map((line, idx) => (
                  <p
                    key={line}
                    className={`font-serif italic text-xl md:text-2xl font-bold animate-on-scroll ${isVisible ? "visible" : ""}`}
                    style={{
                      paddingLeft: `${idx * 1.5}rem`,
                      transitionDelay: `${0.35 + idx * 0.12}s`,
                      color: "#4ade80",
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
