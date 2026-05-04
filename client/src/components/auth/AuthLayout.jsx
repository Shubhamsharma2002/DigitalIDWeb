import Image from "next/image";
import { Icons } from "../../../constant/icon";
import BrandingSection from "./BrandingSection";
import { AuthFooter } from "./AuthFooter";
import { Images } from "../../../constant/iamge";

export default function AuthLayout({ children }) {
  return (
    <div className="min-h-screen bg-[#f8f9fc] lg:grid lg:grid-cols-2">
      <BrandingSection />

      <div className="flex justify-center px-4 py-8 lg:py-12">
        <div className="w-full max-w-2xl p-8 md:p-12">
          <div className="mb-8 flex justify-center">
            <Image
              src={Images.Authlogo}
              alt="Digital ID Logo"
              width={180}
              height={80}
              className="w-[180px] h-auto object-cover"
              priority
            />
          </div>

          {children}

          <AuthFooter />
        </div>
      </div>
    </div>
  );
}
