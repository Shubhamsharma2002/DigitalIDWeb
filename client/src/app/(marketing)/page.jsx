import CTASection from "@/components/marketing/CTASection";
import FeaturesSection from "@/components/marketing/FeaturesSection";
import HeroSection from "@/components/marketing/HeroSection";
import HowItWorks from "@/components/marketing/HowItWorks";
import PocketSection from "@/components/marketing/PocketSection";
import ProblemSection from "@/components/marketing/ProblemSection";

export default function HomePage() {
  return (
    <>
      <HeroSection />
      <ProblemSection />
      <HowItWorks />
      <FeaturesSection />
      <PocketSection />
      <CTASection />
    </>
  );
}