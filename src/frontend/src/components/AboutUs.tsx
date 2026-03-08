import { Leaf } from "lucide-react";

export default function AboutUs() {
  return (
    <section
      id="about"
      className="section-pad"
      style={{ backgroundColor: "oklch(0.975 0.008 85)" }}
    >
      <div className="max-w-6xl mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          {/* Left: Text */}
          <div>
            <div className="flex items-center gap-3 mb-5">
              <Leaf className="w-5 h-5 text-forest-600" />
              <span className="font-sans text-xs font-semibold tracking-widest uppercase text-forest-600">
                About Us
              </span>
            </div>
            <span className="accent-line" />
            <h2 className="section-heading text-forest-800 mb-6">
              Where Agriculture Meets Insight, Innovation &amp; Intelligence
            </h2>
            <div className="space-y-4 body-text text-foreground/80">
              <p>
                Soil isn't just dirt.
                <br />
                It's a living, breathing ecosystem speaking a hidden language of
                minerals, nutrients, moisture, and microbial life.
              </p>
              <p>
                For decades, farming decisions have relied on approximation. But
                beneath every thriving crop lies untapped intelligence — waiting
                to be decoded.
              </p>
              <p>
                At{" "}
                <strong className="text-forest-700 font-semibold">
                  Soil Cipher Labs
                </strong>
                , we bridge traditional agricultural wisdom with modern science
                and AI-powered analytics. We analyze soil health, nutrient
                balance, and fertilizer efficiency to deliver clarity,
                precision, and measurable results.
              </p>
            </div>
            <p
              className="mt-8 font-serif italic text-xl font-semibold"
              style={{ color: "oklch(0.38 0.095 155)" }}
            >
              Because when soil speaks — we listen.
            </p>
          </div>

          {/* Right: Visual accent block */}
          <div className="relative">
            <div
              className="rounded-md overflow-hidden"
              style={{
                background:
                  "linear-gradient(135deg, oklch(0.38 0.095 155) 0%, oklch(0.30 0.085 155) 100%)",
                padding: "3px",
              }}
            >
              <div
                className="rounded-md p-10 md:p-12"
                style={{ backgroundColor: "oklch(0.97 0.015 155)" }}
              >
                <div className="space-y-6">
                  {[
                    {
                      icon: "🌱",
                      label: "Living Ecosystem",
                      desc: "Minerals, nutrients, moisture & microbial life",
                    },
                    {
                      icon: "🔬",
                      label: "Scientific Analysis",
                      desc: "Laboratory-grade soil testing & profiling",
                    },
                    {
                      icon: "🤖",
                      label: "AI-Powered Insights",
                      desc: "Advanced algorithms decode raw soil data",
                    },
                    {
                      icon: "📈",
                      label: "Measurable Results",
                      desc: "Clarity, precision & profitable outcomes",
                    },
                  ].map((item) => (
                    <div key={item.label} className="flex items-start gap-4">
                      <span className="text-2xl flex-shrink-0">
                        {item.icon}
                      </span>
                      <div>
                        <p className="font-sans font-semibold text-forest-800 text-sm">
                          {item.label}
                        </p>
                        <p className="font-sans text-sm text-forest-600">
                          {item.desc}
                        </p>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
            {/* Decorative dot */}
            <div
              className="absolute -bottom-4 -right-4 w-24 h-24 rounded-full opacity-20"
              style={{ backgroundColor: "oklch(0.72 0.12 65)" }}
            />
          </div>
        </div>
      </div>
    </section>
  );
}
