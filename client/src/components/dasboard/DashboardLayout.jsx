// components/dashboard/DashboardLayout.jsx

import Sidebar from "./Sidebar";
import Topbar from "./Topbar";

export default function DashboardLayout({ children }) {
  return (
    <div className="min-h-screen bg-[#F8FAFF]">

      {/* Sidebar */}
      <aside className="fixed left-0 top-0 h-screen w-72 bg-white border-r border-slate-200 z-40">
        <Sidebar />
      </aside>

      {/* Right Side */}
      <div className="ml-72">

        {/* Topbar */}
        <Topbar />

        {/* Content */}
        <main className="p-6 lg:p-8">
          {children}
        </main>

      </div>
    </div>
  );
}