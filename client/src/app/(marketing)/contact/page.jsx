import BusinessCTA from "@/components/marketing/contact/BusinessCTA";
import ContactForm from "@/components/marketing/contact/ContactForm";
import ContactHero from "@/components/marketing/contact/ContactHero";
import QuickContact from "@/components/marketing/contact/QuickContact";
import TrustedOrgs from "@/components/marketing/contact/TrustedOrgs";


export default function ContactPage() {
  return (
    <>
      <ContactHero />

      <section className="bg-[#F8FAFF] px-5 md:px-8 py-10">
        <div className="max-w-7xl mx-auto grid lg:grid-cols-[0.8fr_1.2fr] gap-8">
          <QuickContact />
          <ContactForm />
        </div>
      </section>

      <BusinessCTA />
      <TrustedOrgs />
    </>
  );
}