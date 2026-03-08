import { FlaskConical } from "lucide-react";

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
  return (
    <section
      id="solution"
      className="section-pad"
      style={{ backgroundColor: "oklch(0.985 0.006 85)" }}
    >
      <div className="max-w-6xl mx-auto">
        {/* Header */}
        <div className="text-center mb-16">
          <div className="flex items-center justify-center gap-3 mb-5">
            <FlaskConical className="w-5 h-5 text-forest-600" />
            <span className="font-sans text-xs font-semibold tracking-widest uppercase text-forest-600">
              The Soil Cipher Solution
            </span>
          </div>
          <span className="accent-line mx-auto" />
          <h2 className="section-heading text-forest-800 mb-4">
            Unlocking Underground Secrets.
          </h2>
          <p className="body-text text-foreground/70 max-w-2xl mx-auto">
            Soil Cipher Labs offers a structured, data-driven approach to soil
            and fertilizer optimization.
          </p>
        </div>

        {/* 5-Step Model */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-14">
          {steps.map((step, idx) => (
            <div
              key={step.num}
              className="card-soil group"
              style={idx === 4 ? { gridColumn: "span 1" } : {}}
            >
              <div className="flex items-start gap-4">
                <div className="step-number flex-shrink-0">{step.num}</div>
                <div>
                  <h3 className="font-serif font-bold text-forest-800 text-lg mb-2 leading-snug">
                    {step.title}
                  </h3>
                  <p className="font-sans text-sm text-foreground/70 leading-relaxed">
                    {step.desc}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Pipeline Flow */}
        <div
          className="rounded-md p-6 md:p-8 mb-10"
          style={{
            background:
              "linear-gradient(135deg, oklch(0.38 0.095 155) 0%, oklch(0.30 0.085 155) 100%)",
          }}
        >
          <p className="font-sans text-xs font-semibold tracking-widest uppercase text-cream-400 mb-5 text-center">
            Intelligence Pipeline
          </p>
          <div className="flex flex-wrap items-center justify-center gap-2 md:gap-0">
            {pipeline.map((step, idx) => (
              <div key={step} className="flex items-center gap-2">
                <div
                  className="px-4 py-2 rounded-sm text-sm font-semibold font-sans text-center"
                  style={{
                    backgroundColor: "oklch(0.975 0.008 85 / 0.15)",
                    color: "oklch(0.975 0.008 85)",
                    border: "1px solid oklch(0.975 0.008 85 / 0.25)",
                  }}
                >
                  {step}
                </div>
                {idx < pipeline.length - 1 && (
                  <span
                    className="text-lg font-bold hidden md:block"
                    style={{ color: "oklch(0.83 0.1 65)" }}
                  >
                    →
                  </span>
                )}
                {idx < pipeline.length - 1 && (
                  <span
                    className="text-lg font-bold md:hidden"
                    style={{ color: "oklch(0.83 0.1 65)" }}
                  >
                    →
                  </span>
                )}
              </div>
            ))}
          </div>
        </div>

        {/* Illustration */}
        <div className="rounded-md overflow-hidden mb-10 border border-forest-100">
          <img
            src="/assets/generated/soil-process-illustration.dim_1200x600.png"
            alt="Soil Process Illustration — cross-section of soil layers with data nodes and root systems"
            className="w-full h-auto object-cover"
            loading="lazy"
          />
        </div>

        {/* Closing */}
        <div className="text-center">
          <p className="font-serif text-2xl md:text-3xl font-bold text-forest-800">
            We don't just test soil.
          </p>
          <p
            className="font-serif italic text-2xl md:text-3xl font-bold mt-1"
            style={{ color: "oklch(0.38 0.095 155)" }}
          >
            We decode it.
          </p>
        </div>
      </div>
    </section>
  );
}
