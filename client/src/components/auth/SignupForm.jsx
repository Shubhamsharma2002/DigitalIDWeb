// 🔥 UPDATED SIGNUPFORM.JSX
import Link from "next/link";
import SocialAuth from "./SocialAuth";

export default function SignupForm() {
  return (
    <>
      <h1 className="text-4xl font-bold text-[#0B1437] mb-4">
        Start Your{" "}
        <span className="bg-gradient-to-r from-blue-500 to-purple-600 bg-clip-text text-transparent">
          Digital Journey 🚀
        </span>
      </h1>

      <p className="text-gray-500 text-lg mb-8">
        Join{" "}
        <span className="font-semibold text-blue-600">
          100+ organizations
        </span>{" "}
        issuing smart digital IDs.
      </p>

      <form className="space-y-5">
        <input
          type="text"
          placeholder="Full Name"
          className="w-full border rounded-xl px-4 py-3"
        />

        <input
          type="email"
          placeholder="Work Email"
          className="w-full border rounded-xl px-4 py-3"
        />

        <input
          type="password"
          placeholder="Create Password"
          className="w-full border rounded-xl px-4 py-3"
        />

        <label className="flex items-center gap-2 text-sm text-gray-600">
          <input type="checkbox" /> I agree to Terms & Privacy Policy
        </label>

        <button className="w-full bg-gradient-to-r from-blue-500 to-purple-600 text-white py-4 rounded-xl font-semibold text-lg hover:shadow-lg transition">
          Create Admin Account
        </button>
      </form>

      <div className="mt-8">
        <SocialAuth />
      </div>

      <p className="text-center text-gray-500 mt-8">
        Already have an account?{" "}
        <Link
          href="/login"
          className="text-blue-600 font-medium hover:underline"
        >
          Log in here
        </Link>
      </p>
    </>
  );
}