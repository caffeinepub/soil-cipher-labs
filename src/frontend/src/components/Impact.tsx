import { TrendingUp } from "lucide-react";

const impacts = [
  {
    stat: "20%",
    label: "Higher Yield Efficiency",
    desc: "Up to 20% improvement in crop yield through precision soil management.",
    color: "oklch(0.38 0.095 155)",
  },
  {
    stat: "30%",
    label: "Reduction in Fertilizer Waste",
    desc: "Up to 30% less fertilizer waste with AI-optimized nutrient strategies.",
    color: "oklch(0.72 0.12 65)",
  },
  {
    stat: "✓",
    label: "Improved Soil Organic Health",
    desc: "Measurable improvements in soil organic matter and microbial activity.",
    color: "oklch(0.38 0.095 155)",
  },
  {
    stat: "✓",
    label: "Long-Term Land Productivity",
    desc: "Sustained productivity through regenerative soil intelligence practices.",
    color: "oklch(0.72 0.12 65)",
  },
  {
    stat: "✓",
    label: "Climate-Smart Agriculture Practices",
    desc: "Environmentally responsible farming aligned with climate resilience goals.",
    color: "oklch(0.38 0.095 155)",
  },
];

export default function Impact() {
  return (
    <section
      id="impact"
      className="section-pad"
      style={{ backgroundColor: "oklch(0.97 0.015 155)" }}
    >
      <div className="max-w-6xl mx-auto">
        {/* Header */}
        <div className="text-center mb-16">
          <div className="flex items-center justify-center gap-3 mb-5">
            <TrendingUp className="w-5 h-5 text-forest-600" />
            <span className="font-sans text-xs font-semibold tracking-widest uppercase text-forest-600">
              Impact &amp; Results
            </span>
          </div>
          <span className="accent-line mx-auto" />
          <h2 className="section-heading text-forest-800 mb-4">
            When We Listen to the Soil, We Cultivate the Future.
          </h2>
          <p className="body-text text-foreground/70 max-w-2xl mx-auto">
            With intelligent soil decoding, farmers achieve measurable, lasting
            results.
          </p>
        </div>

        {/* Impact Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-12">
          {impacts.map((item) => (
            <div
              key={item.label}
              className="card-soil flex flex-col gap-3"
              style={{ backgroundColor: "oklch(0.99 0.005 80)" }}
            >
              {/* Checkmark + Stat */}
              <div className="flex items-center gap-3">
                <div
                  className="w-10 h-10 rounded-full flex items-center justify-center flex-shrink-0 text-lg font-bold"
                  style={{
                    backgroundColor: `${item.color} / 0.12`,
                    color: item.color,
                    background: `oklch(from ${item.color} l c h / 0.12)`,
                  }}
                >
                  {item.stat.startsWith("✓") ? (
                    <svg
                      className="w-5 h-5"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                      strokeWidth={2.5}
                      aria-label="Checkmark"
                      role="img"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        d="M5 13l4 4L19 7"
                      />
                    </svg>
                  ) : (
                    <span className="text-xs font-bold">✓</span>
                  )}
                </div>
                {!item.stat.startsWith("✓") && (
                  <span
                    className="font-serif font-bold text-3xl"
                    style={{ color: item.color }}
                  >
                    {item.stat}
                  </span>
                )}
              </div>
              <h3 className="font-serif font-bold text-forest-800 text-lg leading-snug">
                {item.label}
              </h3>
              <p className="font-sans text-sm text-foreground/70 leading-relaxed">
                {item.desc}
              </p>
            </div>
          ))}
        </div>

        {/* Summary */}
        <div
          className="rounded-md p-8 text-center border"
          style={{
            backgroundColor: "oklch(0.38 0.095 155 / 0.06)",
            borderColor: "oklch(0.38 0.095 155 / 0.2)",
          }}
        >
          <p className="font-serif text-xl md:text-2xl font-semibold text-forest-800">
            Understanding soil reduces cost, improves resilience, and increases
            profitability.
          </p>
        </div>
      </div>
    </section>
  );
}
