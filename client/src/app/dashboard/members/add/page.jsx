"use client";

import Image from "next/image";
import { useState } from "react";

export default function AddMemberPage() {
  const [preview, setPreview] = useState(null);

  const handleImage = (e) => {
    const file = e.target.files[0];

    if (file) {
      setPreview(URL.createObjectURL(file));
    }
  };

  return (
    <div className="space-y-8">
      {/* Header */}
      <div>
        <div className="flex items-center gap-3">
          <h1 className="text-3xl font-black text-[#0B1437]">
            Add New Member
          </h1>

          <span className="flex h-10 w-10 items-center justify-center rounded-xl border border-violet-200 text-2xl text-violet-600">
            👥
          </span>
        </div>

        <p className="mt-3 text-slate-500">
          Naye student ya employee ki details bharein aur turant digital ID issue karein.
        </p>
      </div>

      {/* Card */}
      <section className="rounded-3xl border border-slate-100 bg-white p-6 md:p-10 shadow-sm">
        <div className="grid gap-10 lg:grid-cols-[1.7fr_0.8fr]">
          
          {/* LEFT */}
          <div>
            <div className="grid gap-8 md:grid-cols-2">

              <FormField
                label="Full Name"
                required
                icon="👤"
                placeholder="Enter Full Name"
              />

              <FormField
                label="Member ID"
                required
                icon="🪪"
                placeholder="Roll No / Employee ID"
              />

              <FormField
                label="Email Address"
                required
                type="email"
                icon="📧"
                placeholder="Enter Email Address"
                helper="Login aur ID delivery ke liye required hai."
              />

              <FormField
                label="Mobile Number"
                required
                icon="📞"
                placeholder="Enter Mobile Number"
              />

 <SelectField
  label="Department"
  required
  icon="🏢"
  placeholder="Select Department"
  options={[
    "Development",
    "Frontend Development",
    "Backend Development",
    "Full Stack Development",
    "Testing / QA",
    "DevOps",
    "UI/UX Design",
    "HR Department",
    "Management",
    "Marketing",
    "Finance",
    "Security Team",
    "Support Team",
  ]}
/>

              <SelectField
                label="Role"
                required
                icon="🎓"
                placeholder="Select Role"
                options={[
                  "Student",
                  "Teacher",
                  "Admin",
                  "Employee",
                ]}
              />

            </div>

            <div className="my-10 h-px bg-slate-100" />

            <button className="w-full rounded-2xl bg-gradient-to-r from-blue-500 to-purple-600 px-6 py-4 text-lg font-black text-white shadow-lg hover:shadow-xl transition">
              🪪 Generate & Issue ID
            </button>

            <p className="mt-5 text-center text-sm text-slate-400">
              🔒 Digital ID will be generated and issued instantly.
            </p>
          </div>

          {/* RIGHT */}
          <div className="border-t border-slate-100 pt-8 lg:border-l lg:border-t-0 lg:pl-10 lg:pt-0">
            <p className="mb-5 font-black text-[#0B1437]">
              Member Photo <span className="text-red-500">*</span>
            </p>

            <label className="group flex min-h-[420px] cursor-pointer flex-col items-center justify-center rounded-3xl border-2 border-dashed border-blue-200 bg-[#FAFCFF] p-6 text-center transition hover:border-blue-400 hover:bg-blue-50">

              <input
                type="file"
                accept="image/png,image/jpeg,image/jpg"
                className="hidden"
                onChange={handleImage}
              />

              {preview ? (
                <div className="w-full">
             <Image
  src={preview}
  alt="preview"
  width={240}
  height={240}
  className="mx-auto h-60 w-60 rounded-3xl object-cover shadow-xl"
/>

                  <div className="mt-6 space-y-3">
                    <p className="font-bold text-green-600">
                      ✅ Image Selected
                    </p>

                    <div className="flex justify-center gap-3">
                      <span className="rounded-xl bg-blue-100 px-4 py-2 text-sm font-semibold text-blue-600">
                        Change Photo
                      </span>

                      <button
                        type="button"
                        onClick={(e) => {
                          e.preventDefault();
                          setPreview(null);
                        }}
                        className="rounded-xl bg-red-100 px-4 py-2 text-sm font-semibold text-red-500"
                      >
                        Remove
                      </button>
                    </div>
                  </div>
                </div>
              ) : (
                <>
                  <div className="mb-6 flex h-24 w-24 items-center justify-center rounded-full bg-violet-100 text-5xl">
                    📤
                  </div>

                  <p className="text-xl font-black text-[#0B1437]">
                    Upload Member Photo
                  </p>

                  <p className="mt-3 text-sm text-slate-500">
                    JPG, PNG (Max. 2MB)
                  </p>

                  <div className="mt-8 rounded-2xl bg-gradient-to-r from-blue-500 to-purple-600 px-8 py-4 font-bold text-white shadow-lg">
                    Choose File
                  </div>

                  <p className="mt-6 text-xs text-slate-400">
                    Clear face image recommended for ID generation.
                  </p>
                </>
              )}
            </label>
          </div>
        </div>
      </section>
    </div>
  );
}

function FormField({
  label,
  icon,
  placeholder,
  helper,
  required,
  type = "text",
}) {
  return (
    <div>
      <label className="mb-3 flex items-center gap-2 font-black text-[#0B1437]">
        <span className="text-blue-600">{icon}</span>

        {label}

        {required && (
          <span className="text-red-500">*</span>
        )}
      </label>

      <div className="flex h-16 overflow-hidden rounded-2xl border border-slate-200 bg-white focus-within:ring-2 focus-within:ring-blue-100">
        <div className="flex w-16 items-center justify-center bg-blue-50 text-2xl">
          {icon}
        </div>

        <input
          type={type}
          placeholder={placeholder}
          className="w-full px-4 text-slate-600 outline-none placeholder:text-slate-400"
        />
      </div>

      {helper && (
        <p className="mt-3 text-sm text-slate-500">
          {helper}
        </p>
      )}
    </div>
  );
}

function SelectField({
  label,
  icon,
  placeholder,
  options = [],
  required,
}) {
  return (
    <div>
      <label className="mb-3 flex items-center gap-2 font-black text-[#0B1437]">
        <span className="text-blue-600">{icon}</span>

        {label}

        {required && (
          <span className="text-red-500">*</span>
        )}
      </label>

      <div className="flex h-16 overflow-hidden rounded-2xl border border-slate-200 bg-white">
        <select className="w-full px-5 text-slate-600 outline-none">
          <option>{placeholder}</option>

          {options.map((item) => (
            <option key={item}>{item}</option>
          ))}
        </select>
      </div>
    </div>
  );
}