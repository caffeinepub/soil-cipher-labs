import { Cpu, Microscope, Network, Sprout, Users } from "lucide-react";

const usps = [
  {
    icon: Microscope,
    title: "Science-Backed Precision",
    desc: "Every recommendation is grounded in rigorous laboratory analysis and peer-reviewed agricultural science.",
  },
  {
    icon: Cpu,
    title: "AI-Driven Insights",
    desc: "Advanced machine learning algorithms transform complex soil data into clear, actionable intelligence.",
  },
  {
    icon: Sprout,
    title: "Sustainable Approach",
    desc: "We prioritize long-term land health and environmental stewardship in every strategy we develop.",
  },
  {
    icon: Users,
    title: "Farmer-Centric Design",
    desc: "Our platform and services are designed with the farmer at the center — accessible, practical, and impactful.",
  },
  {
    icon: Network,
    title: "Scalable Agri-Intelligence Platform",
    desc: "From individual farms to large agribusinesses, our platform scales to meet every agricultural need.",
  },
];

export default function WhySoilCipher() {
  return (
    <section
      id="why"
      className="section-pad"
      style={{ backgroundColor: "oklch(0.30 0.085 155)" }}
    >
      <div className="max-w-6xl mx-auto">
        {/* Header */}
        <div className="text-center mb-16">
          <span
            className="font-sans text-xs font-semibold tracking-widest uppercase"
            style={{ color: "oklch(0.83 0.1 65)" }}
          >
            Why Choose Us
          </span>
          <span
            className="block w-16 h-1 rounded-full mx-auto my-5"
            style={{ backgroundColor: "oklch(0.72 0.12 65)" }}
          />
          <h2 className="section-heading text-cream-200 mb-4">
            Why Soil Cipher Labs?
          </h2>
          <p className="body-text text-cream-400 max-w-2xl mx-auto">
            We combine technology, agriculture, and strategy — building the
            future of soil intelligence.
          </p>
        </div>

        {/* USP Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 mb-14">
          {usps.map((usp) => {
            const Icon = usp.icon;
            return (
              <div
                key={usp.title}
                className="flex flex-col gap-4 p-6 rounded-md border transition-all duration-200 hover:scale-[1.02]"
                style={{
                  backgroundColor: "oklch(0.38 0.095 155 / 0.3)",
                  borderColor: "oklch(0.45 0.1 155 / 0.4)",
                }}
              >
                <div
                  className="w-12 h-12 rounded-sm flex items-center justify-center flex-shrink-0"
                  style={{
                    backgroundColor: "oklch(0.72 0.12 65 / 0.2)",
                    color: "oklch(0.83 0.1 65)",
                  }}
                >
                  <Icon className="w-6 h-6" />
                </div>
                <h3 className="font-serif font-bold text-cream-200 text-lg leading-snug">
                  {usp.title}
                </h3>
                <p className="font-sans text-sm text-cream-400 leading-relaxed">
                  {usp.desc}
                </p>
              </div>
            );
          })}
        </div>

        {/* Closing Statement */}
        <div
          className="text-center rounded-md p-8 border"
          style={{
            backgroundColor: "oklch(0.22 0.065 155 / 0.5)",
            borderColor: "oklch(0.72 0.12 65 / 0.3)",
          }}
        >
          <p className="font-serif italic text-xl md:text-2xl font-semibold text-cream-200">
            We combine technology, agriculture, and strategy — building the
            future of soil intelligence.
          </p>
        </div>
      </div>
    </section>
  );
}
