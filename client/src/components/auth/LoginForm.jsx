// 🔥 UPDATED LOGINFORM.JSX
import Link from "next/link";
import SocialAuth from "./SocialAuth";

export default function LoginForm() {
  return (
    <>
      <h1 className="text-4xl font-bold text-[#0B1437] mb-4">
        Welcome Back! 👋
      </h1>

      <p className="text-gray-500 text-lg mb-8">
        Log in to manage your organization&apos;s digital identities.
      </p>

      <form className="space-y-5">
        <input
          type="email"
          placeholder="Email Address"
          className="w-full border rounded-xl px-4 py-3"
        />

        <input
          type="password"
          placeholder="Password"
          className="w-full border rounded-xl px-4 py-3"
        />

        <div className="text-right">
          <Link
            href="/reset-password"
            className="text-blue-600 text-sm hover:underline"
          >
            Forgot Password?
          </Link>
        </div>

        <button className="w-full bg-gradient-to-r from-blue-500 to-purple-600 text-white py-4 rounded-xl font-semibold text-lg hover:shadow-lg transition">
          Sign In
        </button>
      </form>

      <div className="mt-8">
        <SocialAuth />
      </div>

      <p className="text-center text-gray-500 mt-8">
        Don&apos;t have an account?{" "}
        <Link
          href="/signup"
          className="text-blue-600 font-medium hover:underline"
        >
          Create one for free
        </Link>
      </p>
    </>
  );
}