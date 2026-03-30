import { FlaskConical } from "lucide-react";
import { useScrollAnimation } from "../hooks/useScrollAnimation";

const steps = [
  {
    num: "01",
    title: "Soil Sampling & Testing",
    desc: "Scientific collection and laboratory-grade analysis.",
  },
  {
    num: "02",
    title: "Nutrient & Microbial Profiling",
    desc: "Macro, micro, organic, and biological health mapping.",
  },
  {
    num: "03",
    title: "AI-Based Soil Interpretation",
    desc: "Advanced algorithms translate raw data into clear insights.",
  },
  {
    num: "04",
    title: "Precision Fertilizer Strategy",
    desc: "Customized nutrient recommendations for optimal crop performance.",
  },
  {
    num: "05",
    title: "Sustainability Index Tracking",
    desc: "Monitoring long-term soil vitality and environmental impact.",
  },
];

const pipeline = [
  "Soil Sample",
  "Lab Analysis",
  "AI Interpretation",
  "Farmer Dashboard",
  "Optimized Yield",
];

export default function Solution() {
  const { ref, isVisible } = useScrollAnimation(0.1);

  return (
    <section
      id="solution"
      ref={ref as React.RefObject<HTMLElement>}
      className="section-pad"
      style={{ backgroundColor: "#0d2610" }}
    >
      <div className="max-w-6xl mx-auto">
        <div
          className={`text-center mb-16 animate-on-scroll ${isVisible ? "visible" : ""}`}
        >
          <div className="flex items-center justify-center gap-3 mb-5">
            <FlaskConical className="w-5 h-5" style={{ color: "#4ade80" }} />
            <span
              className="font-mono text-xs font-semibold tracking-widest uppercase tech-bracket"
              style={{ color: "rgba(74,222,128,0.85)" }}
            >
              The Soil Cipher Solution
            </span>
          </div>
          <span
            className="block w-16 h-1 mx-auto mb-6"
            style={{ background: "linear-gradient(90deg, #4ade80, #22c55e)" }}
          />
          <h2 className="section-heading mb-4">
            Unlocking Underground Secrets.
          </h2>
          <p className="body-text max-w-2xl mx-auto">
            Soil Cipher Labs offers a structured, data-driven approach to soil
            and fertilizer optimization.
          </p>
        </div>

        <div className="mb-14">
          {/* Desktop */}
          <div className="hidden lg:block relative">
            <div
              className="absolute top-7 left-0 right-0 h-0.5"
              style={{
                background:
                  "linear-gradient(90deg, rgba(74,222,128,0.4), rgba(74,222,128,0.2))",
              }}
            />
            <div className="relative z-10 grid grid-cols-5 gap-4">
              {steps.map((step, idx) => (
                <div
                  key={step.num}
                  className={`animate-on-scroll ${isVisible ? "visible" : ""} flex flex-col items-center text-center`}
                  style={{ transitionDelay: `${idx * 0.12}s` }}
                >
                  <div
                    className="w-14 h-14 rounded-full flex items-center justify-center text-base font-bold mb-4 border-4"
                    style={{
                      backgroundColor: "#4ade80",
                      color: "#0a1a0a",
                      borderColor: "rgba(74,222,128,0.3)",
                      fontFamily: "'Playfair Display', serif",
                    }}
                  >
                    {step.num}
                  </div>
                  <div
                    className="p-4 w-full rounded-md"
                    style={{
                      backgroundColor: "rgba(255,255,255,0.04)",
                      border: "1px solid rgba(74,222,128,0.18)",
                    }}
                  >
                    <h3
                      className="font-serif font-bold text-sm mb-1 leading-snug"
                      style={{ color: "#e8f5e9" }}
                    >
                      {step.title}
                    </h3>
                    <p
                      className="font-sans text-xs leading-relaxed"
                      style={{ color: "rgba(232,245,233,0.6)" }}
                    >
                      {step.desc}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Mobile */}
          <div className="lg:hidden relative pl-8">
            <div
              className="absolute left-5 top-0 bottom-0 w-0.5"
              style={{
                background:
                  "linear-gradient(180deg, rgba(74,222,128,0.5), rgba(74,222,128,0.2))",
              }}
            />
            <div className="space-y-6">
              {steps.map((step, idx) => (
                <div
                  key={step.num}
                  className={`animate-on-scroll ${isVisible ? "visible" : ""} relative flex items-start gap-4`}
                  style={{ transitionDelay: `${idx * 0.12}s` }}
                >
                  <div
                    className="absolute -left-8 w-10 h-10 rounded-full flex items-center justify-center text-sm font-bold flex-shrink-0"
                    style={{
                      backgroundColor: "#4ade80",
                      color: "#0a1a0a",
                      fontFamily: "'Playfair Display', serif",
                    }}
                  >
                    {step.num}
                  </div>
                  <div
                    className="flex-1 p-4 rounded-md"
                    style={{
                      backgroundColor: "rgba(255,255,255,0.04)",
                      border: "1px solid rgba(74,222,128,0.18)",
                    }}
                  >
                    <h3
                      className="font-serif font-bold text-base mb-1"
                      style={{ color: "#e8f5e9" }}
                    >
                      {step.title}
                    </h3>
                    <p
                      className="font-sans text-sm leading-relaxed"
                      style={{ color: "rgba(232,245,233,0.6)" }}
                    >
                      {step.desc}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>

        <div
          className={`rounded-md p-6 md:p-8 mb-10 animate-on-scroll ${isVisible ? "visible" : ""}`}
          style={{
            background: "rgba(74,222,128,0.05)",
            border: "1px solid rgba(74,222,128,0.2)",
            transitionDelay: "0.55s",
          }}
        >
          <p
            className="font-mono text-xs font-semibold tracking-widest uppercase mb-5 text-center tech-bracket"
            style={{ color: "rgba(74,222,128,0.85)" }}
          >
            Intelligence Pipeline
          </p>
          <div className="flex flex-wrap items-center justify-center gap-2 md:gap-0">
            {pipeline.map((step, idx) => (
              <div key={step} className="flex items-center gap-2">
                <div
                  className="px-4 py-2 rounded-sm text-sm font-semibold font-mono text-center"
                  style={{
                    backgroundColor: "rgba(74,222,128,0.1)",
                    color: "#4ade80",
                    border: "1px solid rgba(74,222,128,0.3)",
                  }}
                >
                  {step}
                </div>
                {idx < pipeline.length - 1 && (
                  <span
                    className="text-lg font-bold"
                    style={{ color: "rgba(74,222,128,0.6)" }}
                  >
                    →
                  </span>
                )}
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
