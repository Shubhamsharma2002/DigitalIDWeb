import Image from "next/image";
import { Images } from "../../../../constant/iamge";


export default function FeaturesHero() {
  return (
    <section className="bg-[#F8FAFF] py-16">
      <div className="max-w-7xl mx-auto px-6 grid lg:grid-cols-2 gap-10 items-center">
        
        {/* Left */}
        <div>
          <span className="inline-flex px-4 py-2 rounded-full bg-blue-100 text-blue-600 text-sm font-semibold mb-6">
            ⚡ Powerful Features, Simple Experience
          </span>

          <h1 className="text-4xl md:text-5xl font-black text-[#0B1437] leading-tight">
            Everything you need, <br />
            built for the{" "}
            <span className="bg-gradient-to-r from-blue-500 to-purple-600 bg-clip-text text-transparent">
              future.
            </span>
          </h1>

          <p className="mt-6 text-lg text-gray-600">
            Digital ID makes identity management simple, secure and scalable for every organization.
          </p>
        </div>

        {/* Right Image */}
        <div className="flex justify-center">
          <Image
            src={Images.Authlogo}
            alt="Feature"
            width={450}
            height={450}
            className="object-contain"
          />
        </div>
      </div>
    </section>
  );
}