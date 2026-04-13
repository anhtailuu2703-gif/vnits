import Hero from "../components/Hero/Hero";
import Solutions from "../components/Solutions/Solutions";
import HeroFeature from "../components/HeroFeature/HeroFeature";
import FeatureSection from "../components/Features/FeatureSection";
import TrustedBy from "../components/TrustedBy/TrustedBy";
import AboutSection from "../components/About/AboutSection";
import useScrollTop from "../Hooks/useScrollTop";

export default function Home() {
  useScrollTop();

  return (
    <>
      <main>
        <Hero />
        <FeatureSection />
        <HeroFeature />
        <Solutions />
        <AboutSection />
        <TrustedBy />
      </main>
    </>
  );
}