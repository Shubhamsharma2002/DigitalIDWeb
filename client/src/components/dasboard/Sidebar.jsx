"use client";

import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useState } from "react";
import { Icons } from "../../../constant/icon";

export default function Sidebar() {
  const pathname = usePathname();
  const [openMenu, setOpenMenu] = useState("");

  const menus = [
    { label: "Dashboard", icon: "🏠", href: "/dashboard" },
    { label: "Organization Profile", icon: "🏢", href: "/dashboard/organization" },
    {
      label: "Member Management",
      icon: "👤",
      key: "members",
      children: [
        { label: "All Members", href: "/dashboard/members" },
        { label: "Add Member", href: "/dashboard/members/add" },
        { label: "Bulk Import", href: "/dashboard/members/import" },
      ],
    },
    {
      label: "ID Templates",
      icon: "🪪",
      key: "templates",
      children: [
        { label: "Design Templates", href: "/dashboard/templates" },
        { label: "Create Template", href: "/dashboard/templates/create" },
        { label: "Preview Cards", href: "/dashboard/templates/preview" },
      ],
    },
    {
      label: "Analytics",
      icon: "📊",
      key: "analytics",
      children: [
        { label: "Usage & Reports", href: "/dashboard/analytics" },
        { label: "ID Verification Logs", href: "/dashboard/analytics/logs" },
      ],
    },
    { label: "Settings", icon: "⚙️", href: "/dashboard/settings" },
  ];

  const handleLogout = () => {
    console.log("logout clicked");
  };

  return (
    <div className="h-full flex flex-col bg-white border-r border-slate-100 shadow-xl px-5 py-6">
      {/* Logo */}
      <Link href="/dashboard" className="flex items-center gap-3 mb-10">
        <Image
          src={Icons.logo}
          width={52}
          height={52}
          alt="Digital ID Logo"
          className="object-contain"
          priority
        />

        <div>
          <h1 className="text-xl font-black text-blue-600 leading-tight">
            Digital ID
          </h1>
          <p className="text-[11px] text-slate-500">
            Smart. Secure. Sustainable.
          </p>
        </div>
      </Link>

      {/* Menu */}
      <nav className="flex-1 space-y-3 overflow-y-auto pr-2 no-scrollbar text-sm font-semibold text-slate-600">
        {menus.map((menu) => {
          const isOpen = openMenu === menu.key;
          const isActive = menu.href && pathname === menu.href;
          const hasActiveChild = menu.children?.some(
            (child) => pathname === child.href
          );

          if (!menu.children) {
            return (
              <Link
                key={menu.label}
                href={menu.href}
                className={`flex items-center gap-3 rounded-2xl px-4 py-3 transition-all duration-200 ${
                  isActive
                    ? "bg-gradient-to-r from-blue-500 to-purple-600 text-white shadow-md"
                    : "hover:bg-slate-100/80 hover:translate-x-1"
                }`}
              >
                <span className="text-lg opacity-90">{menu.icon}</span>
                <span>{menu.label}</span>
              </Link>
            );
          }

          return (
            <div key={menu.label}>
              <button
                type="button"
                onClick={() => setOpenMenu(isOpen ? "" : menu.key)}
                className={`w-full flex items-center justify-between rounded-2xl px-4 py-3 transition-all duration-200 ${
                  hasActiveChild
                    ? "bg-gradient-to-r from-blue-500 to-purple-600 text-white shadow-md"
                    : isOpen
                    ? "bg-slate-100 text-slate-800"
                    : "hover:bg-slate-100/80 hover:translate-x-1"
                }`}
              >
                <span className="flex items-center gap-3">
                  <span className="text-lg opacity-90">{menu.icon}</span>
                  <span>{menu.label}</span>
                </span>

                <span
                  className={`text-xs transition-transform duration-300 ${
                    isOpen ? "rotate-180" : ""
                  }`}
                >
                  ▼
                </span>
              </button>

              <div
                className={`overflow-hidden transition-all duration-300 ${
                  isOpen || hasActiveChild
                    ? "max-h-44 opacity-100 mt-2"
                    : "max-h-0 opacity-0"
                }`}
              >
                <div className="ml-6 space-y-1 border-l border-slate-200 pl-4">
                  {menu.children.map((child) => {
                    const childActive = pathname === child.href;

                    return (
                      <Link
                        key={child.label}
                        href={child.href}
                        className={`block rounded-xl px-3 py-2 text-sm transition-all duration-200 ${
                          childActive
                            ? "bg-blue-50 text-blue-600 font-black"
                            : "text-slate-500 hover:bg-blue-50 hover:text-blue-600 hover:translate-x-1"
                        }`}
                      >
                        {child.label}
                      </Link>
                    );
                  })}
                </div>
              </div>
            </div>
          );
        })}
      </nav>

      {/* Bottom */}
      <div className="space-y-3 pt-5 border-t border-slate-100">
        <div className="rounded-3xl bg-gradient-to-br from-slate-50 to-slate-100 border border-slate-200 p-5 text-sm">
          <p className="font-black text-slate-900">ABC Organization</p>
          <p className="mt-1 text-green-600 text-xs font-semibold">
            Verified Organization
          </p>
        </div>

        <button
          type="button"
          onClick={handleLogout}
          className="w-full flex items-center gap-3 rounded-2xl px-4 py-3 text-sm font-bold text-red-500 hover:bg-red-50 hover:translate-x-1 transition-all duration-200"
        >
          <span className="text-lg">🚪</span>
          Logout
        </button>
      </div>
    </div>
  );
}