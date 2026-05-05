"use client";

import { useState } from "react";
import Image from "next/image";
import { Images } from "../../../../constant/iamge";
import { Icons } from "../../../../constant/icon";

export default function HowItWorks() {
  const [active, setActive] = useState(0);

  const steps = [
    {
      title: "Org Profile",
      desc: "Set your organization identity",
      img: Images.step1,
    },
    {
      title: "ID Template",
      desc: "Customize your ID card",
      img: Images.step2,
    },
    {
      title: "Member Import",
      desc: "Upload members easily",
      img: Images.step3,
    },
  ];

  return (
    <section className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid lg:grid-cols-2 gap-10">
          {/* Left */}
          <div className="space-y-5">
            {steps.map((step, i) => (
              <div
                key={i}
                onClick={() => setActive(i)}
                className={`p-5 rounded-2xl cursor-pointer transition ${
                  active === i
                    ? "bg-blue-50 border border-blue-200"
                    : "bg-gray-50 border border-transparent"
                }`}
              >
                <h3 className="font-bold text-lg">{i + 1}. {step.title}</h3>
                <p className="text-sm text-gray-500">{step.desc}</p>
              </div>
            ))}
          </div>

          {/* Right */}
          <div className="rounded-3xl shadow-xl p-3 bg-white border border-slate-100">
            <Image
              src={steps[active].img}
              alt="preview"
              width={900}
              height={700}
              className="w-full h-auto object-contain rounded-2xl"
            />
          </div>
        </div>

        {/* Bottom CTA */}
<div className="flex flex-col md:flex-row items-center justify-between gap-6 mt-8">
  
  <div className="flex items-center gap-5 text-center md:text-left">
    
    <div className="hidden sm:flex h-20 w-20 items-center justify-center rounded-2xl ">
      <Image
        src={Icons.logo}
        alt="Digital ID"
        width={80}
        height={50}
        className="object-contain"
      />
    </div>

    <div>
      <h3 className="text-2xl font-black text-[#0B1437]">
        Almost There! 🎉
      </h3>
      <p className="mt-2 text-slate-600 max-w-xl">
        Complete these 3 steps and you’re ready to issue digital IDs.
      </p>
    </div>
  </div>

  <button className="w-full md:w-auto rounded-2xl bg-gradient-to-r from-sky-500 to-violet-600 px-10 py-4 font-black text-white shadow-lg hover:shadow-xl transition cursor-pointer">
    Save & Continue →
  </button>
</div>
      </div>
    </section>
  );
}