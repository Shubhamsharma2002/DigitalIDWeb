import Image from "next/image";
import { Images } from "../../../../constant/iamge";


export default function UserExperience() {
  return (
    <section className="px-5 py-10 bg-[#F8FAFF]">
      <div className="max-w-7xl mx-auto rounded-[2rem] bg-white border border-blue-100 shadow-[0_20px_60px_rgba(37,99,235,0.08)] p-6 md:p-10">
        <div className="grid lg:grid-cols-[0.75fr_1.25fr] gap-10 items-center">
          <div>
            <h2 className="text-3xl font-black text-[#0B1437] mb-8">
              User Experience 📱
            </h2>

            <div className="space-y-8">
              {[
                ["⚡", "Instant Access", "App download karte hi ID card ready."],
                ["📶", "Offline Viewing", "Internet ke bina bhi card dikhega."],
              ].map(([icon, title, desc]) => (
                <div key={title} className="flex gap-5 items-start">
                  <div className="h-16 w-16 rounded-2xl bg-violet-100 flex items-center justify-center text-3xl shadow-inner">
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

          <div className="relative rounded-[1.5rem] bg-gradient-to-br from-blue-50 to-white p-6 border border-slate-100 overflow-hidden">
            <div className="absolute right-10 top-10 h-52 w-52 rounded-full bg-violet-300/20 blur-3xl" />
            <div className="relative z-10 flex justify-center items-end gap-4 md:gap-8">
              {[Images.Phone1, Images.Phone2, Images.Phone3].map((phone, index) => (
                <Image
                  key={index}
                  src={phone}
                  alt="Mobile preview"
                  width={190}
                  height={380}
                  className={`h-auto object-contain drop-shadow-2xl ${
                    index === 1 ? "translate-y-6" : ""
                  }`}
                />
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}