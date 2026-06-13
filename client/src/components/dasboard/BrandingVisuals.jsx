"use client";

import { useState } from "react";
import Image from "next/image";
import { Icons } from "../../../constant/icon";

export default function BrandingVisuals() {
  const [logoPreview, setLogoPreview] = useState(null);
  const [selectedColor, setSelectedColor] = useState("#6D4CFF");

  const colors = ["#6D4CFF", "#2F80ED", "#2BB39A", "#FF9F43", "#EF476F", "#4B587C"];

  const handleLogoUpload = (e) => {
    const file = e.target.files?.[0];
    if (!file) return;

    setLogoPreview(URL.createObjectURL(file));
  };

  return (
    <section className="rounded-3xl border border-slate-100 bg-white p-6 md:p-8 shadow-sm">
      <div className="flex items-start gap-4">
        <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-violet-50 text-2xl">
          🎨
        </div>

        <div>
          <h2 className="text-xl font-black text-[#0B1437]">
            2. Branding & Visuals
          </h2>
          <p className="mt-1 text-sm text-slate-500">
            Apni organization ka logo aur brand theme set karein.
          </p>
        </div>
      </div>

      <div className="mt-8 grid gap-8 lg:grid-cols-2">
        {/* Logo Upload */}
        <div>
          <p className="mb-4 font-semibold text-[#0B1437]">
            Organization Logo
          </p>

          <label className="flex h-64 cursor-pointer items-center justify-center rounded-3xl border border-dashed border-blue-200 bg-[#FAFCFF] hover:bg-blue-50 transition">
            <input
              type="file"
              accept="image/png,image/jpeg,image/jpg,image/svg+xml"
              onChange={handleLogoUpload}
              className="hidden"
            />

            {logoPreview ? (
              <div className="relative h-40 w-40 overflow-hidden rounded-full border bg-white shadow">
                <Image
                  src={logoPreview}
                  alt="Organization Logo"
                  fill
                  className="object-contain p-3"
                  unoptimized
                />
              </div>
            ) : (
              <div className="text-center">
                <div className="mx-auto mb-4 flex h-20 w-20 items-center justify-center rounded-full bg-blue-50 text-4xl">
                  ☁️
                </div>
                <p className="font-bold text-[#0B1437]">
                  Click to upload logo ---
                </p>
                <p className="mt-1 text-sm text-slate-500">
                  PNG, JPG or SVG max 2MB....
                </p>
              </div>
            )}
          </label>

          <p className="mt-4 text-sm text-slate-500">
            Square ya circular logo upload karein.
          </p>
          <p className="text-sm text-slate-500">
            Recommended size: 500x500px
          </p>
        </div>

        {/* Theme Color + Preview */}
        <div>
          <p className="mb-2 font-semibold text-[#0B1437]">
            Brand Theme Color
          </p>
          <p className="mb-5 text-sm text-slate-500">
            Ye color digital ID card aur app theme me use hoga.
          </p>

          <div className="mb-8 flex flex-wrap gap-4">
            {colors.map((color) => (
              <button
                key={color}
                type="button"
                onClick={() => setSelectedColor(color)}
                className="flex h-11 w-11 items-center justify-center rounded-xl shadow-sm border"
                style={{ backgroundColor: color }}
              >
                {selectedColor === color && (
                  <span className="text-lg font-black text-white">✓</span>
                )}
              </button>
            ))}
          </div>

          <p className="mb-4 font-semibold text-[#0B1437]">Preview</p>

          <div className="max-w-md overflow-hidden rounded-3xl border border-blue-100 bg-white shadow-lg">
            <div
              className="px-6 py-4 text-white"
              style={{ background: selectedColor }}
            >
              <p className="font-bold">ABC University</p>
            </div>

            <div className="flex items-center justify-between p-5">
              <div className="flex items-center gap-4">
                <div className="relative flex h-16 w-16 items-center justify-center overflow-hidden rounded-full bg-slate-100">
                  {logoPreview ? (
                    <Image
                      src={logoPreview}
                      alt="Logo preview"
                      fill
                      className="object-contain p-2"
                      unoptimized
                    />
                  ) : (
                    <span className="text-2xl">🎓</span>
                  )}
                </div>

                <div>
                  <p className="font-black text-[#0B1437]">Rahul Sharma</p>
                  <p className="text-sm text-slate-500">ID:ABC12345</p>
                  <p
                    className="text-sm font-semibold"
                    style={{ color: selectedColor }}
                  >
                    Student  
                  </p>
                </div>
              </div>

              <div className="text-5xl">
                <Image src={Icons.QrCode} alt="logo" width={50} height={50} />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}