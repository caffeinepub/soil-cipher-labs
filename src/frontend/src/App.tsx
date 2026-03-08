import AboutUs from "./components/AboutUs";
import CallToAction from "./components/CallToAction";
import Challenge from "./components/Challenge";
import Contact from "./components/Contact";
import Footer from "./components/Footer";
import Founder from "./components/Founder";
import Header from "./components/Header";
import Hero from "./components/Hero";
import Impact from "./components/Impact";
import Services from "./components/Services";
import Solution from "./components/Solution";
import VisionMission from "./components/VisionMission";
import WhySoilCipher from "./components/WhySoilCipher";

export default function App() {
  return (
    <div className="min-h-screen bg-background text-foreground">
      <Header />
      <main>
        <Hero />
        <AboutUs />
        <Challenge />
        <Solution />
        <Impact />

        {/* Brand name image between Impact and VisionMission */}
        <div className="flex justify-center items-center py-12 px-4 bg-cream-50">
          <img
            src="/assets/name.png"
            alt="Soil Cipher Labs — Unlocking the hidden language of soil & fertilizers. By Vardhamana Indori"
            className="max-w-2xl w-full h-auto object-contain"
          />
        </div>

        <VisionMission />
        <Founder />
        <Services />
        <WhySoilCipher />
        <CallToAction />
        <Contact />
      </main>
      <Footer />
    </div>
  );
}
