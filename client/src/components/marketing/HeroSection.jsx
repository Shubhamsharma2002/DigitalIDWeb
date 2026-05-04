import Image from "next/image";
import Link from "next/link";
import { Images } from "../../../constant/iamge";


export default function HeroSection() {
  return (
    <section className="bg-[#F8FAFF]">
      <div className="max-w-7xl mx-auto px-5 md:px-8 py-14 md:py-20 grid lg:grid-cols-2 gap-10 items-center">
        
        <div>
          <span className="inline-flex mb-6 px-4 py-2 rounded-full bg-green-100 text-green-700 text-sm font-bold">
            🌱 Go Digital. Go Smart. Go Green.
          </span>

          <h1 className="text-4xl md:text-6xl font-black leading-tight text-[#0B1437]">
            Digital Cards for a{" "}
            <span className="bg-gradient-to-r from-sky-500 to-violet-600 bg-clip-text text-transparent">
              Smarter Tomorrow
            </span>
          </h1>

          <p className="mt-6 text-lg text-slate-600 max-w-xl leading-relaxed">
            Create, share and manage digital cards effortlessly. Save time,
            reduce cost and help the planet.
          </p>

          <Link
            href="/signup"
            className="inline-flex mt-8 px-8 py-4 rounded-2xl bg-gradient-to-r from-sky-500 to-violet-600 text-white font-bold shadow-xl"
          >
            Get Started →
          </Link>
        </div>

        <div className="relative">
          <Image
            src={Images.MobilePhones}
            alt="Digital ID App Preview"
            width={750}
            height={600}
            priority
            className="w-full h-auto object-contain"
          />
        </div>
      </div>
    </section>
  );
}