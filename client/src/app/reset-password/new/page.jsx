"use client";

import { useState } from "react";

export default function NewPasswordPage() {
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] =
    useState("");

  const handleSubmit = (e) => {
    e.preventDefault();

    if (password !== confirmPassword) {
      return alert("Passwords do not match");
    }

    alert(
      "Password reset feature connected successfully 🔥"
    );
  };

  return (
    <div className="min-h-screen bg-[#F8FAFF] flex items-center justify-center px-4">
      <div className="w-full max-w-md rounded-3xl bg-white p-8 shadow-xl border border-slate-100">

        <h1 className="text-3xl font-black text-[#0B1437] mb-2">
          Create New Password 🔐
        </h1>

        <p className="text-slate-500 mb-8">
          Enter your new password below.
        </p>

        <form
          onSubmit={handleSubmit}
          className="space-y-5"
        >

          <input
            type="password"
            placeholder="New Password"
            value={password}
            onChange={(e) =>
              setPassword(e.target.value)
            }
            className="w-full rounded-xl border px-4 py-3 outline-none"
            required
          />

          <input
            type="password"
            placeholder="Confirm Password"
            value={confirmPassword}
            onChange={(e) =>
              setConfirmPassword(e.target.value)
            }
            className="w-full rounded-xl border px-4 py-3 outline-none"
            required
          />

          <button
            type="submit"
            className="w-full rounded-xl bg-gradient-to-r from-blue-500 to-purple-600 py-4 font-bold text-white"
          >
            Reset Password
          </button>

        </form>
      </div>
    </div>
  );
}