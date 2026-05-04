import Footer from "@/components/Footer";
import Navbar from "@/components/Navbar";


export default function MarketingLayout({ children }) {
  return (
    <div className="flex min-h-screen flex-col bg-[#F8FAFF] text-[#0B1437]">
      <Navbar />

      <main className="flex-1">
        {children}
      </main>

      <Footer />
    </div>
  );
}