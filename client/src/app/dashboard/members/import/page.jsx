"use client";

import { useState } from "react";

export default function BulkImportPage() {
  const [fileName, setFileName] = useState("");

  const handleFile = (e) => {
    const file = e.target.files?.[0];
    if (!file) return;
    setFileName(file.name);
  };

  return (
    <div className="space-y-8">
      <div>
        <h1 className="text-3xl font-black text-[#0B1437]">
          Bulk Import Members ☁️
        </h1>
        <p className="mt-2 text-slate-500">
          CSV ya Excel file upload karke multiple members ko ek saath add karein.
        </p>
      </div>

      <section className="grid gap-8 lg:grid-cols-[1.2fr_0.8fr]">
        <div className="rounded-3xl border border-slate-100 bg-white p-8 shadow-sm">
          <h2 className="text-xl font-black text-[#0B1437]">
            Upload Member File
          </h2>

          <label className="mt-6 flex min-h-[320px] cursor-pointer flex-col items-center justify-center rounded-3xl border-2 border-dashed border-blue-200 bg-[#FAFCFF] p-6 text-center hover:bg-blue-50 transition">
            <input
              type="file"
              accept=".csv,.xlsx,.xls"
              className="hidden"
              onChange={handleFile}
            />

            <div className="mb-5 flex h-24 w-24 items-center justify-center rounded-full bg-violet-100 text-5xl">
              📤
            </div>

            <p className="text-xl font-black text-[#0B1437]">
              Drag & drop your file here
            </p>

            <p className="mt-2 text-slate-500">or</p>

            <div className="mt-5 rounded-2xl bg-gradient-to-r from-blue-500 to-purple-600 px-8 py-4 font-bold text-white shadow-lg">
              Choose CSV / Excel
            </div>

            <p className="mt-5 text-sm text-slate-400">
              Supported: .csv, .xlsx, .xls | Max size: 5MB
            </p>
          </label>

          {fileName && (
            <div className="mt-6 rounded-2xl border border-blue-100 bg-blue-50 p-4">
              <p className="font-bold text-blue-700">✅ Selected File</p>
              <p className="mt-1 text-sm text-slate-600">{fileName}</p>
            </div>
          )}

          <div className="mt-6 flex flex-col gap-4 md:flex-row md:items-center md:justify-between">
            <button className="rounded-2xl border border-blue-200 bg-white px-6 py-3 font-bold text-blue-600 hover:bg-blue-50">
              ⬇ Download Sample Template
            </button>

            <button
              disabled={!fileName}
              className="rounded-2xl bg-gradient-to-r from-blue-500 to-purple-600 px-8 py-3 font-bold text-white shadow-lg disabled:cursor-not-allowed disabled:opacity-50"
            >
              Import Members →
            </button>
          </div>
        </div>

        <div className="rounded-3xl border border-slate-100 bg-white p-8 shadow-sm">
          <h2 className="text-xl font-black text-[#0B1437]">
            Import Guidelines
          </h2>

          <div className="mt-8 space-y-6">
            {[
              ["📄", "File format", "CSV ya Excel file upload karein."],
              ["✅", "Required columns", "Name, Email, Member ID, Department."],
              ["📦", "Max file size", "File size 5MB se kam honi chahiye."],
              ["🔁", "Update allowed", "Existing members ko update bhi kar sakte hain."],
            ].map(([icon, title, desc]) => (
              <div key={title} className="flex gap-4">
                <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-2xl bg-violet-50 text-2xl">
                  {icon}
                </div>
                <div>
                  <p className="font-black text-[#0B1437]">{title}</p>
                  <p className="mt-1 text-sm text-slate-500">{desc}</p>
                </div>
              </div>
            ))}
          </div>

          <div className="mt-8 rounded-2xl bg-gradient-to-r from-blue-50 to-purple-50 p-5">
            <p className="font-bold text-[#0B1437]">Need help?</p>
            <p className="mt-1 text-sm text-slate-500">
              Import issue aaye to support team se contact karein.
            </p>
            <button className="mt-4 rounded-xl bg-white px-5 py-3 font-bold text-blue-600 shadow">
              Contact Support
            </button>
          </div>
        </div>
      </section>
    </div>
  );
}