import Image from "next/image";
import { Images } from "../../../../constant/iamge";


export default function ContactHero() {
  return (
    <section className="bg-[#F8FAFF] px-5 md:px-8 py-16">
      <div className="max-w-7xl mx-auto grid lg:grid-cols-2 gap-12 items-center">
        <div>
          <span className="inline-flex rounded-full bg-blue-50 px-4 py-2 text-sm font-bold text-blue-600">
            ⚡ We’re Here to Help 💬
          </span>

          <h1 className="mt-8 text-5xl md:text-6xl font-black leading-tight text-[#0B1437]">
            Humein{" "}
            <span className="bg-gradient-to-r from-sky-500 to-violet-600 bg-clip-text text-transparent">
              sampark
            </span>{" "}
            karein
          </h1>

          <p className="mt-6 max-w-xl text-lg leading-relaxed text-slate-600">
            Kisi bhi prashn, sahayata ya business query ke liye humse sampark
            karein. Hum aapki madad ke liye hamesha taiyaar hain.
          </p>

          <div className="mt-10 grid grid-cols-3 rounded-3xl bg-white p-6 shadow border border-slate-100 max-w-xl">
            {["🛡️ Secure & Reliable", "⚡ Quick Support", "👥 Trusted by 100+ Orgs"].map(
              (item) => (
                <div key={item} className="text-center text-xs font-bold text-slate-700">
                  <div className="text-2xl mb-2">{item.split(" ")[0]}</div>
                  {item.replace(item.split(" ")[0], "")}
                </div>
              )
            )}
          </div>
        </div>

        <div className="flex justify-center">
          <Image
            src={Images.Authlogo}
            alt="Digital ID support"
            width={520}
            height={420}
            className="w-full max-w-xl h-auto object-contain"
            priority
          />
        </div>
      </div>
    </section>
  );
}