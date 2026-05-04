"use client";

import Image from "next/image";
import { Icons } from "../../../constant/icon";
export default function SocialAuth() {
  const handleGoogleLogin = () => {
    window.location.href = "/api/auth/google";
  };

  const handleMicrosoftLogin = () => {
    window.location.href = "/api/auth/microsoft";
  };

  return (
    <div className="space-y-6">
      
      {/* Divider */}
      <div className="flex items-center gap-4">
        <div className="flex-1 h-px bg-slate-200" />
        <span className="text-sm text-slate-400 font-medium">
          Or continue with
        </span>
        <div className="flex-1 h-px bg-slate-200" />
      </div>

      {/* Social Buttons */}
      <div className="grid grid-cols-2 gap-4 ">
        
        {/* Google */}
        <button
          type="button"
          onClick={handleGoogleLogin}
          className="flex items-center justify-center h-12 border border-slate-200 rounded-xl hover:bg-slate-50 transition-all font-bold text-slate-600 hover:shadow-md cursor-pointer"
        >
          <Image
            src={Icons.Google}
            width={20}
            height={20}
            className="mr-2"
            alt="Google"
          />
          Google
        </button>

        {/* Microsoft */}
        <button
          type="button"
          onClick={handleMicrosoftLogin}
          className="flex items-center justify-center h-12 border border-slate-200 rounded-xl hover:bg-slate-50 transition-all font-bold text-slate-600 hover:shadow-md cursor-pointer"
        >
          <Image
            src={Icons.Microsoft}
            width={20}
            height={20}
            className="mr-2"
            alt="Microsoft"
          />
          Microsoft
        </button>
      </div>
    </div>
  );
}