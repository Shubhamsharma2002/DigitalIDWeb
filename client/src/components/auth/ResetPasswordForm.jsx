// 🔥 UPDATED RESETPASSWORDFORM.JSX
import Link from "next/link";

export default function ResetPasswordForm() {
  return (
    <>
      <h1 className="text-4xl font-bold text-[#0B1437] mb-4">
        Reset Password 🔐
      </h1>

      <p className="text-gray-500 text-lg mb-8">
        Enter your registered email to receive reset instructions.
      </p>

      <form className="space-y-5">
        <input
          type="email"
          placeholder="Work Email"
          className="w-full border rounded-xl px-4 py-3"
        />

        <button className="w-full bg-gradient-to-r from-blue-500 to-purple-600 text-white py-4 rounded-xl font-semibold text-lg hover:shadow-lg transition">
          Send Reset Link
        </button>
      </form>

      <p className="text-center text-gray-500 mt-8">
        Remembered your password?{" "}
        <Link
          href="/login"
          className="text-blue-600 font-medium hover:underline"
        >
          Back to Login
        </Link>
      </p>
    </>
  );
}