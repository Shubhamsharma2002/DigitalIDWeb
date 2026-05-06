"use client";

import BrandingVisuals from "@/components/dasboard/BrandingVisuals";


export default function OrganizationProfilePage() {
  return (
    <div className="space-y-6">
      
      {/* Page Header */}
      <div className="flex flex-col gap-4 md:flex-row md:items-center md:justify-between">
        <div>
          <h1 className="text-3xl font-black text-[#0B1437]">
            Organization Profile
          </h1>

          <p className="mt-1 text-slate-500">
            Manage your organization details and preferences.
          </p>
        </div>

        <button className="rounded-2xl bg-gradient-to-r from-blue-500 to-purple-600 px-7 py-3 font-bold text-white shadow-lg hover:shadow-xl transition">
          💾 Save Changes
        </button>
      </div>

      {/* 1. Basic Information */}
      <section className="rounded-3xl border border-slate-100 bg-white p-6 md:p-8 shadow-sm">
        <SectionTitle
          icon="🏢"
          title="1. Basic Information"
          desc="Ye details ID cards par reflect hongi."
        />

        <div className="mt-8 grid gap-6 md:grid-cols-2">
          <Input label="Organization Name" value="ABC University" />

          <Input
            label="Tagline / Sub-text"
            value="Educating for Tomorrow"
          />

          <Input
            label="Registration ID"
            value="ABCUNI-2024-001"
          />

          <Input
            label="Official Email"
            value="admin@abc-org.com"
          />

          <Input
            label="Contact Number"
            value="+91 98765 43210"
          />
        </div>
      </section>

      {/* 2. Branding & Visuals */}
      <BrandingVisuals />

      {/* 3. Address */}
      <section className="rounded-3xl border border-slate-100 bg-white p-6 md:p-8 shadow-sm">
        <SectionTitle
          icon="📍"
          title="3. Address & Location"
          desc="Organization ka official address aur website."
        />

        <div className="mt-8 grid gap-6 md:grid-cols-2">
          <div>
            <label className="mb-2 block font-semibold text-[#0B1437]">
              Headquarters / Campus Address
            </label>

            <textarea
              defaultValue="123, Knowledge Park, Sector 62, Noida, Uttar Pradesh - 201309, India"
              className="min-h-24 w-full rounded-2xl border border-slate-200 px-4 py-3 text-slate-600 outline-none focus:ring-2 focus:ring-blue-100"
            />
          </div>

          <Input
            label="Website Link"
            value="www.abcuniversity.edu.in"
          />
        </div>
      </section>

      {/* 4. Account Status */}
      <section className="rounded-3xl border border-slate-100 bg-white p-6 md:p-8 shadow-sm">
        <SectionTitle
          icon="🛡️"
          title="4. Account Status & Limits"
          desc="Aapke account ki current status aur usage details."
        />

        <div className="mt-8 grid gap-5 md:grid-cols-3">
          <StatusCard
            icon="✅"
            title="Status"
            value="Verified Organization"
            sub="Aapka account verified hai."
          />

          <StatusCard
            icon="👑"
            title="Current Plan"
            value="Pro Plan"
            sub="Aapka current subscription plan."
          />

          <StatusCard
            icon="👥"
            title="Member Capacity"
            value="1250 / 5000"
            sub="IDs issued"
          />
        </div>

        <div className="mt-6 flex flex-col gap-4 rounded-2xl bg-gradient-to-r from-blue-50 to-purple-50 p-5 md:flex-row md:items-center md:justify-between">
          <p className="text-sm text-slate-600">
            ⚡ Upgrade to{" "}
            <span className="font-bold text-blue-600">
              Enterprise plan
            </span>{" "}
            for unlimited members, advanced analytics and priority support.
          </p>

          <button className="rounded-xl bg-gradient-to-r from-blue-500 to-purple-600 px-6 py-3 font-bold text-white">
            Upgrade Plan
          </button>
        </div>
      </section>

      <p className="pb-4 text-center text-sm text-slate-400">
        🔒 Your data is 100% secure and encrypted.
      </p>
    </div>
  );
}

function SectionTitle({ icon, title, desc }) {
  return (
    <div className="flex items-start gap-4">
      <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-violet-50 text-2xl">
        {icon}
      </div>

      <div>
        <h2 className="text-xl font-black text-[#0B1437]">
          {title}
        </h2>

        <p className="mt-1 text-sm text-slate-500">
          {desc}
        </p>
      </div>
    </div>
  );
}

function Input({ label, value }) {
  return (
    <div>
      <label className="mb-2 block font-semibold text-[#0B1437]">
        {label}
      </label>

      <input
        defaultValue={value}
        className="h-14 w-full rounded-2xl border border-slate-200 px-4 text-slate-600 outline-none focus:ring-2 focus:ring-blue-100"
      />
    </div>
  );
}

function StatusCard({ icon, title, value, sub }) {
  return (
    <div className="rounded-2xl border border-slate-100 bg-white p-5 shadow-sm">
      <div className="flex items-center gap-4">
        <div className="text-3xl">{icon}</div>

        <div>
          <p className="text-sm text-slate-500">
            {title}
          </p>

          <p className="font-black text-[#0B1437]">
            {value}
          </p>

          <p className="mt-1 text-xs text-slate-400">
            {sub}
          </p>
        </div>
      </div>
    </div>
  );
}