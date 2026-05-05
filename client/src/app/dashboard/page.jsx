"use client";

import {
  AreaChart,
  Area,
  XAxis,
  YAxis,
  Tooltip,
  ResponsiveContainer,
} from "recharts";
export default function DashboardPage() {
  const data = [
  { date: "01 May", issued: 250 },
  { date: "05 May", issued: 240 },
  { date: "10 May", issued: 820 },
  { date: "15 May", issued: 980 },
  { date: "20 May", issued: 780 },
  { date: "25 May", issued: 1120 },
  { date: "31 May", issued: 1350 },
];
  return (
    <div className="space-y-8">

      {/* Header */}
      <div className="flex items-center justify-between">
        <div>
          <h1 className="text-3xl font-bold text-[#0B1437]">
            Welcome back, Rahul! 👋
          </h1>
          <p className="text-gray-500">
            Here’s what’s happening with your organization today.
          </p>
        </div>

        <div className="flex gap-4">
          <button className="bg-gradient-to-r from-blue-500 to-purple-600 text-white px-6 py-3 rounded-xl shadow">
            + Add Single Member
          </button>

          <button className="border px-6 py-3 rounded-xl">
            Upload Bulk Data
          </button>
        </div>
      </div>

      {/* Stats Cards */}
      <div className="grid md:grid-cols-4 gap-6">

        <div className="bg-white p-6 rounded-2xl shadow">
          <p className="text-gray-500 text-sm">Total Issued</p>
          <h2 className="text-2xl font-bold mt-2">1,250</h2>
        </div>

        <div className="bg-white p-6 rounded-2xl shadow">
          <p className="text-gray-500 text-sm">Active Today</p>
          <h2 className="text-2xl font-bold mt-2">840</h2>
        </div>

        <div className="bg-white p-6 rounded-2xl shadow">
          <p className="text-gray-500 text-sm">Pending Sync</p>
          <h2 className="text-2xl font-bold mt-2 text-orange-500">15</h2>
        </div>

        <div className="bg-white p-6 rounded-2xl shadow">
          <p className="text-gray-500 text-sm">Departments</p>
          <h2 className="text-2xl font-bold mt-2">12</h2>
        </div>

      </div>

      {/* Middle Section */}
      <div className="grid lg:grid-cols-3 gap-6">

<div className="lg:col-span-2 min-w-0 bg-white p-6 rounded-2xl shadow">
  <div className="flex items-center justify-between mb-4">
    <h3 className="font-semibold">ID Issuance Overview</h3>

    <button className="border px-3 py-2 rounded-lg text-sm text-gray-600">
      This Month
    </button>
  </div>

  <div className="w-full min-w-0 h-[300px]">
    <ResponsiveContainer width="100%" height={300}>
      <AreaChart data={data}>
        <defs>
          <linearGradient id="issuedColor" x1="0" y1="0" x2="0" y2="1">
            <stop offset="5%" stopColor="#6366f1" stopOpacity={0.35} />
            <stop offset="95%" stopColor="#6366f1" stopOpacity={0} />
          </linearGradient>
        </defs>

        <XAxis dataKey="date" tick={{ fontSize: 12 }} />
        <YAxis tick={{ fontSize: 12 }} />
        <Tooltip />

        <Area
          type="monotone"
          dataKey="issued"
          stroke="#4f46e5"
          strokeWidth={3}
          fill="url(#issuedColor)"
        />
      </AreaChart>
    </ResponsiveContainer>
  </div>
</div>

        {/* Activity */}
        <div className="bg-white p-6 rounded-2xl shadow">
          <h3 className="font-semibold mb-4">Recent Activity</h3>

          <div className="space-y-4 text-sm text-gray-600">
            <p>✔ Bulk upload completed</p>
            <p>👁 ID viewed by user</p>
            <p>⚠ 15 IDs pending sync</p>
            <p>❌ ID expired</p>
          </div>
        </div>

      </div>

      {/* Bottom Section */}
      <div className="grid lg:grid-cols-2 gap-6">

        {/* Template */}
        <div className="bg-white p-6 rounded-2xl shadow">
          <h3 className="font-semibold mb-4">ID Template in Use</h3>

          <div className="flex items-center justify-between">
            <div>
              <p className="font-medium">College Blue Template</p>
              <p className="text-sm text-gray-500">Last updated 20 May</p>
            </div>

            <button className="border px-4 py-2 rounded-lg">
              Edit Template
            </button>
          </div>
        </div>

        {/* Members */}
        <div className="bg-white p-6 rounded-2xl shadow">
          <h3 className="font-semibold mb-4">Recently Added Members</h3>

          <div className="space-y-3 text-sm">
            <p>👤 Ananya Verma - Active</p>
            <p>👤 Rohit Kumar - Active</p>
            <p>👤 Sneha Patel - Active</p>
          </div>
        </div>

      </div>

    </div>
  );
}