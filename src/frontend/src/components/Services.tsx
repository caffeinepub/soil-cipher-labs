import { Activity, BarChart3, Brain, FlaskConical, Leaf } from "lucide-react";

const services = [
  {
    icon: FlaskConical,
    title: "Comprehensive Soil Testing",
    desc: "NPK, micronutrients, organic carbon, pH, EC, and microbial indicators.",
    color: "oklch(0.38 0.095 155)",
    bg: "oklch(0.97 0.015 155)",
  },
  {
    icon: Brain,
    title: "AI Fertilizer Optimization Plans",
    desc: "Crop-specific nutrient recommendations powered by advanced AI algorithms.",
    color: "oklch(0.72 0.12 65)",
    bg: "oklch(0.98 0.015 75)",
  },
  {
    icon: Activity,
    title: "Soil Health Monitoring Programs",
    desc: "Long-term soil vitality tracking for sustained agricultural performance.",
    color: "oklch(0.38 0.095 155)",
    bg: "oklch(0.97 0.015 155)",
  },
  {
    icon: BarChart3,
    title: "Agri-Business Advisory",
    desc: "Data-driven fertilizer procurement and efficiency strategies for agribusinesses.",
    color: "oklch(0.72 0.12 65)",
    bg: "oklch(0.98 0.015 75)",
  },
  {
    icon: Leaf,
    title: "Sustainability Consulting",
    desc: "Climate-smart and regenerative agriculture models for long-term land health.",
    color: "oklch(0.38 0.095 155)",
    bg: "oklch(0.97 0.015 155)",
  },
];

export default function Services() {
  return (
    <section
      id="services"
      className="section-pad"
      style={{ backgroundColor: "oklch(0.975 0.008 85)" }}
    >
      <div className="max-w-6xl mx-auto">
        {/* Header */}
        <div className="text-center mb-16">
          <div className="flex items-center justify-center gap-3 mb-5">
            <FlaskConical className="w-5 h-5 text-forest-600" />
            <span className="font-sans text-xs font-semibold tracking-widest uppercase text-forest-600">
              Services
            </span>
          </div>
          <span className="accent-line mx-auto" />
          <h2 className="section-heading text-forest-800 mb-4">
            Soil Intelligence Services
          </h2>
          <p className="body-text text-foreground/70 max-w-2xl mx-auto">
            A complete suite of data-driven services designed to decode your
            soil and optimize your agricultural outcomes.
          </p>
        </div>

        {/* Services Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {services.map((service) => {
            const Icon = service.icon;
            return (
              <div
                key={service.title}
                className="card-soil group flex flex-col gap-4"
                style={{ backgroundColor: "oklch(0.99 0.005 80)" }}
              >
                {/* Icon */}
                <div
                  className="w-12 h-12 rounded-sm flex items-center justify-center flex-shrink-0 transition-transform group-hover:scale-110"
                  style={{
                    backgroundColor: service.bg,
                    color: service.color,
                  }}
                >
                  <Icon className="w-6 h-6" />
                </div>
                <div>
                  <h3 className="font-serif font-bold text-forest-800 text-lg mb-2 leading-snug">
                    {service.title}
                  </h3>
                  <p className="font-sans text-sm text-foreground/70 leading-relaxed">
                    {service.desc}
                  </p>
                </div>
                {/* Bottom accent */}
                <div
                  className="mt-auto h-0.5 w-0 group-hover:w-full rounded-full transition-all duration-300"
                  style={{ backgroundColor: service.color }}
                />
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
