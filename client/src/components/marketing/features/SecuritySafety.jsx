import Image from "next/image";
import { Images } from "../../../../constant/iamge";


export default function SecuritySafety() {
  return (
    <section className="px-5 py-10 bg-[#F8FAFF]">
      <div className="max-w-7xl mx-auto rounded-[2rem] bg-white border border-red-100 shadow-[0_20px_60px_rgba(239,68,68,0.07)] p-6 md:p-10">
        <div className="grid lg:grid-cols-[0.8fr_1.2fr] gap-10 items-center">
          <div>
            <h2 className="text-3xl font-black text-[#0B1437] mb-8">
              Security & Safety 🛡️
            </h2>

            <div className="space-y-8">
              {[
                ["🚫", "Remote Deactivation", "Lost card? Turant block ya delete karein."],
                ["🔐", "Encrypted Data", "User ka personal data secure encryption ke saath."],
              ].map(([icon, title, desc]) => (
                <div key={title} className="flex gap-5 items-start">
                  <div className="h-16 w-16 rounded-2xl bg-red-50 flex items-center justify-center text-3xl shadow-inner">
                    {icon}
                  </div>
                  <div>
                    <h3 className="text-xl font-black text-blue-600">{title}</h3>
                    <p className="mt-2 text-slate-600 leading-relaxed">{desc}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          <div className="relative min-h-[320px] rounded-[1.5rem] bg-gradient-to-r from-emerald-50 via-white to-red-50 border border-slate-100 p-6 flex items-center justify-center overflow-hidden">
            <div className="absolute left-8 top-8 rounded-full bg-emerald-100 text-emerald-700 px-5 py-2 font-bold">
              Active
            </div>
            <div className="absolute right-8 top-8 rounded-full bg-red-100 text-red-600 px-5 py-2 font-bold">
              Blocked
            </div>

            <Image
              src={Images.SecurityCards}
              alt="Security cards"
              width={650}
              height={400}
              className="relative z-10 w-full max-w-2xl h-auto object-contain"
            />
          </div>
        </div>
      </div>
    </section>
  );
}