import FeaturesHero from "@/components/marketing/features/FeaturesHero";
import AdminControls from "@/components/marketing/features/AdminControls";
import SecuritySafety from "@/components/marketing/features/SecuritySafety";
import UserExperience from "@/components/marketing/features/UserExperience";
import CTASection from "@/components/marketing/CTASection";


export default function FeaturesPage() {
  return (
    <>
      <FeaturesHero />
      <AdminControls />
      <SecuritySafety />
      <UserExperience />
      <CTASection />
    </>
  );
}