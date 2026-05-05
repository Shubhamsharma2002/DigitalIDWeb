// components/dashboard/Topbar.jsx

export default function Topbar() {
  return (
    <header className="sticky top-0 z-30 h-20 bg-white/80 backdrop-blur-md border-b border-slate-200 flex items-center justify-between px-8">

      {/* Search */}
      <input
        placeholder="Search by name, ID..."
        className="w-[400px] px-4 py-2 border rounded-xl outline-none"
      />

      {/* Right Side */}
      <div className="flex items-center gap-6">

        <div className="relative">
          🔔
          <span className="absolute -top-2 -right-2 bg-purple-600 text-white text-xs px-1 rounded-full">
            3
          </span>
        </div>

        <div className="flex items-center gap-2">
          👤
          <div>
            <p className="text-sm font-semibold">Rahul Sharma</p>
            <p className="text-xs text-gray-500">Admin</p>
          </div>
        </div>

      </div>
    </header>
  );
}