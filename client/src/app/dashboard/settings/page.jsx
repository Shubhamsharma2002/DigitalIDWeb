"use client";

import Image from "next/image";
import { useState } from "react";

export default function SettingsPage() {
  const [activeTab, setActiveTab] = useState("profile");
  const [preview, setPreview] = useState("/assets/didlogo.png");

  const handleImage = (e) => {
    const file = e.target.files?.[0];
    if (!file) return;
    setPreview(URL.createObjectURL(file));
  };

  return (
    <div className="space-y-8">
      {/* Tabs */}
      <div className="flex gap-3">
        <button
          onClick={() => setActiveTab("profile")}
          className={`rounded-2xl px-5 py-3 font-bold ${
            activeTab === "profile"
              ? "bg-gradient-to-r from-blue-500 to-purple-600 text-white shadow"
              : "bg-white border text-slate-600"
          }`}
        >
          Admin Profile
        </button>

        <button
          onClick={() => setActiveTab("security")}
          className={`rounded-2xl px-5 py-3 font-bold ${
            activeTab === "security"
              ? "bg-gradient-to-r from-blue-500 to-purple-600 text-white shadow"
              : "bg-white border text-slate-600"
          }`}
        >
          Security
        </button>
      </div>

      {activeTab === "profile" ? (
        <AdminProfile preview={preview} handleImage={handleImage} />
      ) : (
        <SecuritySettings />
      )}
    </div>
  );
}

function AdminProfile({ preview, handleImage }) {
  return (
    <div className="space-y-8">
      <div>
        <div className="flex items-center gap-3">
          <h1 className="text-3xl font-black text-[#0B1437]">
            Admin Profile Settings
          </h1>
          <span className="flex h-11 w-11 items-center justify-center rounded-full border border-violet-200 text-2xl">
            👤
          </span>
        </div>

        <p className="mt-3 text-slate-500">
          Update your personal details and how you appear as an administrator.
        </p>
      </div>

      <section className="rounded-3xl border border-slate-100 bg-white p-8 shadow-sm">
        <div className="grid gap-10 lg:grid-cols-[1.3fr_0.8fr]">
          {/* Left */}
          <div className="space-y-8">
            <Field label="Full Name" icon="👤" defaultValue="Rahul Sharma" />

            <div>
              <label className="mb-3 flex items-center gap-2 font-black text-[#0B1437]">
                💼 Admin Role
              </label>
              <select className="h-14 w-full rounded-2xl border border-slate-200 px-5 outline-none">
                <option>Super Admin</option>
                <option>Admin</option>
                <option>Manager</option>
              </select>
            </div>

            <Field
              label="Contact Email"
              icon="✉️"
              type="email"
              defaultValue="rahul.sharma@abcorganization.com"
              helper="Jahan aapko system alerts milenge."
            />
          </div>

          {/* Right */}
          <div className="border-t border-slate-100 pt-8 lg:border-l lg:border-t-0 lg:pl-10 lg:pt-0">
            <h3 className="font-black text-[#0B1437]">📷 Profile Picture</h3>
            <p className="mt-2 text-sm text-slate-500">
              Circular image, recommended size 200x200px.
            </p>

            <div className="mt-8 flex flex-col items-center">
              <div className="relative h-56 w-56 overflow-hidden rounded-full border-8 border-blue-50 bg-slate-100 shadow">
                <Image
                  src={preview}
                  alt="Profile"
                  fill
                  className="object-cover"
                  unoptimized
                />
              </div>

              <label className="mt-8 cursor-pointer rounded-2xl border border-dashed border-blue-200 px-8 py-4 font-bold text-blue-600 hover:bg-blue-50">
                <input
                  type="file"
                  accept="image/png,image/jpeg,image/jpg"
                  className="hidden"
                  onChange={handleImage}
                />
                ⬆ Upload New Photo
              </label>

              <p className="mt-3 text-sm text-slate-400">
                JPG, PNG (Max. 2MB)
              </p>
            </div>
          </div>
        </div>

        <div className="my-10 h-px bg-slate-100" />

        <button className="w-full rounded-2xl bg-gradient-to-r from-blue-500 to-purple-600 px-6 py-4 text-lg font-black text-white shadow-lg">
          💾 Save Profile Changes
        </button>

        <p className="mt-5 text-center text-sm text-slate-400">
          🔒 Your changes are secure and encrypted.
        </p>
      </section>
    </div>
  );
}

function SecuritySettings() {
  const sessions = [
    ["💻", "Windows • Chrome", "New Delhi, India", "Current Session"],
    ["📱", "Android • Mobile App", "Mumbai, India", "20 May 2025"],
    ["💻", "MacOS • Safari", "Bengaluru, India", "18 May 2025"],
    ["📱", "iPhone • Mobile Safari", "Kolkata, India", "16 May 2025"],
  ];

  return (
    <div className="space-y-8">
      <div>
        <div className="flex items-center gap-3">
          <h1 className="text-3xl font-black text-[#0B1437]">
            Security & Access Control
          </h1>
          <span className="flex h-11 w-11 items-center justify-center rounded-full border border-violet-200 text-2xl">
            🛡️
          </span>
        </div>

        <p className="mt-3 text-slate-500">
          Manage your password and protect your admin account from unauthorized access.
        </p>
      </div>

      <div className="grid gap-8 lg:grid-cols-2">
        {/* Password */}
        <section className="rounded-3xl border border-slate-100 bg-white p-8 shadow-sm">
          <h2 className="text-xl font-black text-[#0B1437]">
            🔐 Change Password
          </h2>
          <p className="mt-2 text-sm text-slate-500">
            Update your password regularly to keep your account secure.
          </p>

          <div className="mt-8 space-y-5">
            <PasswordInput label="Current Password" placeholder="Enter current password" />
            <PasswordInput label="New Password" placeholder="Enter new password" />
            <PasswordInput label="Confirm New Password" placeholder="Confirm new password" />
          </div>

          <div className="mt-6">
            <p className="mb-2 text-sm font-bold text-[#0B1437]">
              Password Strength
            </p>

            <div className="grid grid-cols-3 gap-2">
              <div className="h-2 rounded-full bg-green-500" />
              <div className="h-2 rounded-full bg-orange-400" />
              <div className="h-2 rounded-full bg-slate-200" />
            </div>

            <p className="mt-3 text-sm text-slate-500">
              Use at least 8 characters with letters, numbers & symbols.
            </p>
          </div>
        </section>

        {/* Sessions */}
        <section className="rounded-3xl border border-slate-100 bg-white p-8 shadow-sm">
          <h2 className="text-xl font-black text-[#0B1437]">
            🖥️ Login Sessions
          </h2>
          <p className="mt-2 text-sm text-slate-500">
            Dekhein aapka account abhi kahan-kahan login hai.
          </p>

          <div className="mt-8 space-y-4">
            {sessions.map(([icon, title, location, right]) => (
              <div
                key={title}
                className="flex items-center justify-between rounded-2xl border border-slate-100 p-4"
              >
                <div className="flex items-center gap-4">
                  <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-blue-50 text-2xl">
                    {icon}
                  </div>
                  <div>
                    <p className="font-black text-[#0B1437]">{title}</p>
                    <p className="text-sm text-slate-500">{location}</p>
                  </div>
                </div>

                <span className="text-sm text-blue-600">{right}</span>
              </div>
            ))}
          </div>

          <button className="mt-6 w-full rounded-2xl border border-slate-200 py-3 font-bold text-blue-600">
            View All Sessions →
          </button>
        </section>
      </div>

      {/* 2FA */}
      <section className="rounded-3xl border border-slate-100 bg-white p-8 shadow-sm">
        <div className="flex flex-col gap-5 md:flex-row md:items-center md:justify-between">
          <div>
            <h2 className="text-xl font-black text-[#0B1437]">
              🛡️ Two-Factor Authentication (2FA)
            </h2>
            <p className="mt-2 text-sm text-slate-500">
              Enable OTP login for extra security.
            </p>
          </div>

          <label className="relative inline-flex cursor-pointer items-center">
            <input type="checkbox" defaultChecked className="peer sr-only" />
            <div className="h-8 w-16 rounded-full bg-slate-200 peer-checked:bg-violet-600" />
            <div className="absolute left-1 h-6 w-6 rounded-full bg-white transition peer-checked:translate-x-8" />
          </label>
        </div>

        <div className="mt-6 rounded-2xl border border-violet-100 bg-violet-50 px-5 py-4 text-sm text-slate-600">
          🔒 Jab bhi aap kisi naye device se login karenge, OTP verify karna hoga.
        </div>
      </section>

      <button className="w-full rounded-2xl bg-gradient-to-r from-blue-500 to-purple-600 px-6 py-4 text-lg font-black text-white shadow-lg">
        💾 Update Security Settings
      </button>

      <p className="text-center text-sm text-slate-400">
        🔒 Your security is our priority.
      </p>
    </div>
  );
}

function Field({ label, icon, defaultValue, helper, type = "text" }) {
  return (
    <div>
      <label className="mb-3 flex items-center gap-2 font-black text-[#0B1437]">
        {icon} {label}
      </label>

      <input
        type={type}
        defaultValue={defaultValue}
        className="h-14 w-full rounded-2xl border border-slate-200 px-5 outline-none focus:ring-2 focus:ring-blue-100"
      />

      {helper && <p className="mt-3 text-sm text-slate-500">{helper}</p>}
    </div>
  );
}

function PasswordInput({ label, placeholder }) {
  return (
    <div>
      <label className="mb-3 block font-black text-[#0B1437]">{label}</label>

      <div className="flex h-14 items-center rounded-2xl border border-slate-200 px-5">
        <input
          type="password"
          placeholder={placeholder}
          className="w-full outline-none"
        />
        <span className="text-slate-400">👁️</span>
      </div>
    </div>
  );
}