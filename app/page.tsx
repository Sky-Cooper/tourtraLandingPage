

import HeroSection from "./components/Pub/HeroSection";
import StatsSection from "./components/Pub/StatsSection";
import HowItWorksSection from "./components/Pub/HowItWorksSection ";
import CTASection from "./components/Pub/CTASection";
import FeaturesTabsSection from "./components/Pub/FeaturesTabsSection";

export default function HomePage() {
  // useScrollAnimation();

  return (
    <>
      <main>
        {/* 1. HOME LINK maps here */}
        <section id="home">
            <HeroSection />
        </section>

        {/* 2. A PROPOS LINK maps here */}
        <section id="apropos">
            <StatsSection />
        </section>

   <section id="features" className="py-24 bg-gray-50 border-y border-gray-200">
            <FeaturesTabsSection />
        </section>
      

        {/* 4. REALISATIONS LINK maps here */}
        <section id="realisations">
            <HowItWorksSection />
        </section>

        {/* 5. CONTACT & DEVIS LINKS map here */}
        <section id="contact" className="relative">
            {/* Takes you to the same section for both Contact and Devis */}
            <span id="devis" className="absolute -top-24"></span>
            <CTASection />
        </section>
      </main>
    </>
  );
}