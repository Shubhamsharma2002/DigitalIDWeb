import Image from "next/image";
import { Icons } from "../../../constant/icon";
import { Images } from "../../../constant/iamge";

export default function BrandingSection() {
  return (
    <div className="hidden lg:flex flex-col items-center justify-center bg-gradient-to-br from-[#f8f9fc] to-[#eef4ff] p-10 gap-8">
      {/* GIF Showcase */}
      <div className="w-full max-w-xl flex justify-center">
        <Image
          src={Images.MobilePhones}
          alt="Digital ID Logo"
          width={420}
          height={180}
          className="w-[430px] h-auto object-cover"
          priority
        />
      </div>

      {/* Headline */}
      <div className="text-center max-w-xl">
        <h2 className="text-4xl font-bold text-[#0B1437] mb-4">
          Digital Identity for{" "}
          <span className="text-blue-600">Smarter Tomorrow</span>
        </h2>

        <p className="text-gray-600">
          Reduce printing costs, streamline identity verification, and empower
          organizations.
        </p>
      </div>

      {/* Features */}
      <div className="grid grid-cols-3 gap-4 w-full max-w-2xl">
        <div className="bg-white rounded-2xl p-3 shadow text-center">
          ⚡<br />
          Instant
        </div>
        <div className="bg-white rounded-2xl p-3 shadow text-center">
          🔒
          <br />
          Secure
        </div>
        <div className="bg-white rounded-2xl p-3 shadow text-center">
          🌱
          <br />
          Eco
        </div>
      </div>

      {/* Testimonial */}
      <div className="bg-white rounded-2xl p-4 shadow max-w-2xl text-center">
        <p className="font-semibold">
          “Digital ID ne printing cost 80% kam kar diya!”
        </p>
        <p className="text-sm text-gray-500 mt-2">— Dr. Neha Verma</p>
      </div>
    </div>
  );
}
