import Image from "next/image";
import { Images } from "../../../constant/iamge";


export default function PocketSection() {
  return (
    <section className="py-16 px-5 md:px-8 bg-white">
      <div className="max-w-7xl mx-auto grid lg:grid-cols-2 gap-12 items-center">
        <div>
          <span className="inline-flex mb-5 px-4 py-2 rounded-full bg-blue-50 text-blue-700 text-sm font-bold">
            🛡️ Secure. Simple. Seamless.
          </span>

          <h2 className="text-4xl font-black leading-tight mb-6">
            Everything You Need, <br />
            Right in Your <span className="text-violet-600">Pocket.</span>
          </h2>

          <div className="space-y-5">
            {[
              ["👤", "Login in seconds", "Magic link authentication"],
              ["📍", "Access anytime, anywhere", "Your ID and passes on the go"],
              ["🛡️", "Safe & Encrypted", "Your data is always protected"],
            ].map(([icon, title, desc]) => (
              <div key={title} className="flex gap-4">
                <div className="h-12 w-12 rounded-xl bg-blue-50 flex items-center justify-center">{icon}</div>
                <div>
                  <h4 className="font-black">{title}</h4>
                  <p className="text-slate-500 text-sm">{desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>

        <Image
          src={Images.MobilePhones}
          alt="Mobile app preview"
          width={700}
          height={550}
          className="w-full h-auto object-contain"
        />
      </div>
    </section>
  );
}