import { AlertTriangle } from "lucide-react";

const painPoints = [
  { text: "Overuse and misuse of fertilizers", icon: "⚠️" },
  { text: "Declining soil organic matter", icon: "📉" },
  { text: "Rising input costs", icon: "💸" },
  { text: "Yield unpredictability", icon: "🎲" },
  { text: "Long-term land degradation", icon: "🏜️" },
];

export default function Challenge() {
  return (
    <section
      id="challenge"
      className="section-pad"
      style={{ backgroundColor: "oklch(0.22 0.065 155)" }}
    >
      <div className="max-w-5xl mx-auto">
        <div className="text-center mb-14">
          <div className="flex items-center justify-center gap-3 mb-5">
            <AlertTriangle
              className="w-5 h-5"
              style={{ color: "oklch(0.83 0.1 65)" }}
            />
            <span
              className="font-sans text-xs font-semibold tracking-widest uppercase"
              style={{ color: "oklch(0.83 0.1 65)" }}
            >
              The Challenge
            </span>
          </div>
          <span
            className="block w-16 h-1 rounded-full mx-auto mb-6"
            style={{ backgroundColor: "oklch(0.72 0.12 65)" }}
          />
          <h2 className="section-heading text-cream-200 mb-4">
            Traditional Farming Shouldn't Be Guesswork.
          </h2>
          <p className="body-text text-cream-400 max-w-2xl mx-auto">
            Across agricultural ecosystems, we see persistent challenges that
            cost farmers their livelihoods and the land its vitality.
          </p>
        </div>

        {/* Pain Points Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 mb-12">
          {painPoints.map((point) => (
            <div
              key={point.text}
              className="flex items-start gap-4 p-5 rounded-md border transition-all duration-200 hover:scale-[1.02]"
              style={{
                backgroundColor: "oklch(0.28 0.07 155 / 0.6)",
                borderColor: "oklch(0.38 0.095 155 / 0.4)",
              }}
            >
              <span className="text-2xl flex-shrink-0">{point.icon}</span>
              <p className="font-sans font-medium text-cream-300 text-sm leading-snug pt-1">
                {point.text}
              </p>
            </div>
          ))}
          {/* Sixth cell — closing statement */}
          <div
            className="flex items-center p-5 rounded-md border sm:col-span-2 lg:col-span-1"
            style={{
              backgroundColor: "oklch(0.72 0.12 65 / 0.15)",
              borderColor: "oklch(0.72 0.12 65 / 0.4)",
            }}
          >
            <p
              className="font-serif italic text-base font-semibold leading-snug"
              style={{ color: "oklch(0.83 0.1 65)" }}
            >
              Without accurate soil intelligence, farmers are forced to make
              costly assumptions.
            </p>
          </div>
        </div>

        {/* Bottom statement */}
        <div className="text-center">
          <p
            className="font-serif text-xl md:text-2xl font-bold"
            style={{ color: "oklch(0.83 0.1 65)" }}
          >
            And assumptions reduce profitability.
          </p>
        </div>
      </div>
    </section>
  );
}
