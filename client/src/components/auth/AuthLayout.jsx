import Image from "next/image";
import { Icons } from "../../../constant/icon";
import BrandingSection from "./BrandingSection";
import { AuthFooter } from "./AuthFooter";

export default function AuthLayout({ children }) {
  return (
    <div className="min-h-screen bg-[#f8f9fc] grid lg:grid-cols-2">
      
      {/* Left Branding Section */}
      <BrandingSection />

      {/* Right Section */}
      <div className="h-screen overflow-y-auto flex justify-center px-4 py-8">
        <div className="w-full max-w-2xl p-8 md:p-12 my-auto">
          
          {/* Top Logo */}
          <div className="mb-8">
            <Image
              src={Icons.logo}
              alt="Digital ID Logo"
              width={180}
              height={80}
              className="h-auto object-contain"
              priority
            />
          </div>

          {/* Dynamic Form Content */}
          {children}

          {/* Footer */}
          <AuthFooter />
        </div>
      </div>
    </div>
  );
}