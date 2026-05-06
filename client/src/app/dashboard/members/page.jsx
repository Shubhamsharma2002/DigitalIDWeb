"use client";

import Image from "next/image";
import { useMemo, useState } from "react";

const initialMembers = [
  {
    id: "ABC12345",
    name: "Shubham Sharma",
    department: "Development",
    status: "Active",
    phone: "+91 98765 43210",
    joined: "20 May 2025",
    photo: "/assets/didlogo.png",
  },
  {
    id: "ABC12346",
    name: "Rohit Kumar",
    department: "Design",
    status: "Inactive",
    phone: "+91 98765 43211",
    joined: "19 May 2025",
    photo: "/assets/didlogo.png",
  },
  {
    id: "ABC12347",
    name: "Sneha Patel",
    department: "Testing / QA",
    status: "Active",
    phone: "+91 98765 43212",
    joined: "18 May 2025",
    photo: "/assets/didlogo.png",
  },
  {
    id: "ABC12348",
    name: "Aman Verma",
    department: "DevOps",
    status: "Active",
    phone: "+91 98765 43213",
    joined: "17 May 2025",
    photo: "/assets/didlogo.png",
  },
  {
    id: "ABC12349",
    name: "Pooja Singh",
    department: "Development",
    status: "Inactive",
    phone: "+91 98765 43214",
    joined: "16 May 2025",
    photo: "/assets/didlogo.png",
  },
  {
    id: "ABC12350",
    name: "Vikas Mehta",
    department: "DevOps",
    status: "Active",
    phone: "+91 98765 43215",
    joined: "15 May 2025",
    photo: "/assets/didlogo.png",
  },
];

export default function AllMembersPage() {
  const [members, setMembers] = useState(initialMembers);
  const [confirmMember, setConfirmMember] = useState(null);
  const [editMember, setEditMember] = useState(null);

  const [search, setSearch] = useState("");
  const [department, setDepartment] = useState("");
  const [status, setStatus] = useState("");
  const [currentPage, setCurrentPage] = useState(1);

  const membersPerPage = 5;

  const filteredMembers = useMemo(() => {
    return members.filter((member) => {
      const query = search.toLowerCase();

      const matchesSearch =
        member.name.toLowerCase().includes(query) ||
        member.id.toLowerCase().includes(query) ||
        member.phone.toLowerCase().includes(query);

      const matchesDepartment = department
        ? member.department === department
        : true;

      const matchesStatus = status ? member.status === status : true;

      return matchesSearch && matchesDepartment && matchesStatus;
    });
  }, [members, search, department, status]);

  const totalPages = Math.ceil(filteredMembers.length / membersPerPage) || 1;

  const startIndex = (currentPage - 1) * membersPerPage;

  const paginatedMembers = filteredMembers.slice(
    startIndex,
    startIndex + membersPerPage
  );

  const handleReset = () => {
    setSearch("");
    setDepartment("");
    setStatus("");
    setCurrentPage(1);
  };

  const handleToggleStatus = () => {
    if (!confirmMember) return;

    setMembers((prev) =>
      prev.map((member) =>
        member.id === confirmMember.id
          ? {
              ...member,
              status: member.status === "Active" ? "Inactive" : "Active",
            }
          : member
      )
    );

    setConfirmMember(null);
  };

  const handleEditSave = (e) => {
    e.preventDefault();

    const form = new FormData(e.currentTarget);

    setMembers((prev) =>
      prev.map((member) =>
        member.id === editMember.id
          ? {
              ...member,
              name: form.get("name"),
              phone: form.get("phone"),
              department: form.get("department"),
            }
          : member
      )
    );

    setEditMember(null);
  };

  const handleSearchChange = (e) => {
    setSearch(e.target.value);
    setCurrentPage(1);
  };

  const handleDepartmentChange = (e) => {
    setDepartment(e.target.value);
    setCurrentPage(1);
  };

  const handleStatusChange = (e) => {
    setStatus(e.target.value);
    setCurrentPage(1);
  };

  return (
    <div className="space-y-8">
      {/* Header */}
      <div className="flex flex-col gap-4 lg:flex-row lg:items-center lg:justify-between">
        <div>
          <div className="flex items-center gap-3">
            <h1 className="text-3xl font-black text-[#0B1437]">
              All Members
            </h1>

            <span className="flex h-10 w-10 items-center justify-center rounded-xl border border-violet-200 text-xl">
              👥
            </span>
          </div>

          <p className="mt-2 text-slate-500">
            Manage, filter aur control karein sabhi members ko ek jagah se.
          </p>
        </div>

        <a
          href="/dashboard/members/add"
          className="rounded-2xl bg-gradient-to-r from-blue-500 to-purple-600 px-6 py-3 font-bold text-white shadow-lg"
        >
          + Add New Member
        </a>
      </div>

      {/* Filters */}
      <div className="grid gap-4 lg:grid-cols-[1.5fr_0.8fr_0.8fr_auto]">
        <input
          value={search}
          onChange={handleSearchChange}
          placeholder="Search by name, ID, email or phone..."
          className="h-14 rounded-2xl border border-slate-200 bg-white px-5 outline-none focus:ring-2 focus:ring-blue-100"
        />

        <select
          value={department}
          onChange={handleDepartmentChange}
          className="h-14 rounded-2xl border border-slate-200 bg-white px-5 text-slate-500 outline-none"
        >
          <option value="">Filter by Department</option>
          <option value="Development">Development</option>
          <option value="Testing / QA">Testing / QA</option>
          <option value="DevOps">DevOps</option>
          <option value="Design">Design</option>
        </select>

        <select
          value={status}
          onChange={handleStatusChange}
          className="h-14 rounded-2xl border border-slate-200 bg-white px-5 text-slate-500 outline-none"
        >
          <option value="">Filter by Status</option>
          <option value="Active">Active</option>
          <option value="Inactive">Inactive</option>
        </select>

        <button
          type="button"
          onClick={handleReset}
          className="h-14 rounded-2xl border border-slate-200 bg-white px-6 font-bold text-slate-600 hover:bg-slate-50"
        >
          ↻ Reset
        </button>
      </div>

      {/* Table */}
      <div className="overflow-hidden rounded-3xl border border-slate-100 bg-white shadow-sm">
        <div className="overflow-x-auto">
          <table className="w-full min-w-[950px] text-left">
            <thead className="bg-slate-50 text-sm text-[#0B1437]">
              <tr>
                <th className="px-6 py-5">#</th>
                <th className="px-6 py-5">Name & ID</th>
                <th className="px-6 py-5">Department</th>
                <th className="px-6 py-5">Status</th>
                <th className="px-6 py-5">Phone Number</th>
                <th className="px-6 py-5">Joined On</th>
                <th className="px-6 py-5">Action</th>
              </tr>
            </thead>

            <tbody className="divide-y divide-slate-100">
              {paginatedMembers.length === 0 ? (
                <tr>
                  <td
                    colSpan="7"
                    className="px-6 py-12 text-center text-slate-500"
                  >
                    No members found.
                  </td>
                </tr>
              ) : (
                paginatedMembers.map((member, index) => (
                  <tr key={member.id} className="text-sm hover:bg-slate-50">
                    <td className="px-6 py-5 font-bold text-slate-600">
                      {startIndex + index + 1}
                    </td>

                    <td className="px-6 py-5">
                      <div className="flex items-center gap-3">
                        <div className="relative h-12 w-12 overflow-hidden rounded-full bg-slate-100">
                          <Image
                            src={member.photo}
                            alt={member.name}
                            fill
                            className="object-cover"
                          />
                        </div>

                        <div>
                          <p className="font-black text-[#0B1437]">
                            {member.name}
                          </p>
                          <p className="text-slate-500">ID: {member.id}</p>
                        </div>
                      </div>
                    </td>

                    <td className="px-6 py-5 text-slate-600">
                      {member.department}
                    </td>

                    <td className="px-6 py-5">
                      <span
                        className={`inline-flex items-center gap-2 rounded-full px-3 py-1 text-xs font-bold ${
                          member.status === "Active"
                            ? "bg-green-50 text-green-600"
                            : "bg-red-50 text-red-500"
                        }`}
                      >
                        {member.status}

                        <span
                          className={`h-2 w-2 rounded-full ${
                            member.status === "Active"
                              ? "bg-green-500"
                              : "bg-red-500"
                          }`}
                        />
                      </span>
                    </td>

                    <td className="px-6 py-5 text-slate-600">
                      {member.phone}
                    </td>

                    <td className="px-6 py-5 text-slate-600">
                      {member.joined}
                    </td>

                    <td className="px-6 py-5">
                      <div className="flex gap-3">
                        <button
                          type="button"
                          onClick={() => setEditMember(member)}
                          className="rounded-xl border border-blue-200 px-4 py-2 font-bold text-blue-600 hover:bg-blue-50"
                        >
                          ✎ Edit
                        </button>

                        <button
                          type="button"
                          onClick={() => setConfirmMember(member)}
                          className={`rounded-xl border px-4 py-2 font-bold ${
                            member.status === "Active"
                              ? "border-red-200 text-red-500 hover:bg-red-50"
                              : "border-green-200 text-green-600 hover:bg-green-50"
                          }`}
                        >
                          {member.status === "Active"
                            ? "Deactivate"
                            : "Reactivate"}
                        </button>
                      </div>
                    </td>
                  </tr>
                ))
              )}
            </tbody>
          </table>
        </div>

        {/* Pagination */}
        <div className="flex flex-col gap-4 border-t border-slate-100 px-6 py-5 md:flex-row md:items-center md:justify-between">
          <p className="text-sm text-slate-500">
            {filteredMembers.length === 0
              ? "Showing 0 members"
              : `Showing ${startIndex + 1} to ${Math.min(
                  startIndex + membersPerPage,
                  filteredMembers.length
                )} of ${filteredMembers.length} members`}
          </p>

          <div className="flex flex-wrap gap-2">
            <button
              type="button"
              disabled={currentPage === 1}
              onClick={() => setCurrentPage((prev) => Math.max(prev - 1, 1))}
              className="h-10 min-w-10 rounded-xl border border-slate-200 px-3 text-sm font-bold text-slate-500 disabled:cursor-not-allowed disabled:opacity-40"
            >
              ‹
            </button>

            {Array.from({ length: totalPages }, (_, i) => (
              <button
                key={i}
                type="button"
                onClick={() => setCurrentPage(i + 1)}
                className={`h-10 min-w-10 rounded-xl border px-3 text-sm font-bold ${
                  currentPage === i + 1
                    ? "border-violet-200 bg-violet-50 text-violet-600"
                    : "border-slate-200 text-slate-500 hover:bg-slate-50"
                }`}
              >
                {i + 1}
              </button>
            ))}

            <button
              type="button"
              disabled={currentPage === totalPages}
              onClick={() =>
                setCurrentPage((prev) => Math.min(prev + 1, totalPages))
              }
              className="h-10 min-w-10 rounded-xl border border-slate-200 px-3 text-sm font-bold text-slate-500 disabled:cursor-not-allowed disabled:opacity-40"
            >
              ›
            </button>
          </div>
        </div>
      </div>

      {/* Edit Modal */}
      {editMember && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-slate-900/30 px-4">
          <form
            onSubmit={handleEditSave}
            className="w-full max-w-lg rounded-3xl bg-white p-8 shadow-2xl"
          >
            <button
              type="button"
              onClick={() => setEditMember(null)}
              className="ml-auto block text-xl text-slate-400"
            >
              ×
            </button>

            <h2 className="text-2xl font-black text-[#0B1437]">
              Edit Member
            </h2>

            <p className="mt-2 text-sm text-slate-500">
              Update member details here.
            </p>

            <div className="mt-6 space-y-4">
              <input
                name="name"
                defaultValue={editMember.name}
                className="h-14 w-full rounded-2xl border border-slate-200 px-5 outline-none focus:ring-2 focus:ring-blue-100"
              />

              <input
                name="phone"
                defaultValue={editMember.phone}
                className="h-14 w-full rounded-2xl border border-slate-200 px-5 outline-none focus:ring-2 focus:ring-blue-100"
              />

              <select
                name="department"
                defaultValue={editMember.department}
                className="h-14 w-full rounded-2xl border border-slate-200 px-5 outline-none"
              >
                <option value="Development">Development</option>
                <option value="Testing / QA">Testing / QA</option>
                <option value="DevOps">DevOps</option>
                <option value="Design">Design</option>
              </select>
            </div>

            <div className="mt-8 grid grid-cols-2 gap-4">
              <button
                type="button"
                onClick={() => setEditMember(null)}
                className="rounded-2xl border border-slate-200 px-5 py-3 font-bold text-slate-600"
              >
                Cancel
              </button>

              <button className="rounded-2xl bg-gradient-to-r from-blue-500 to-purple-600 px-5 py-3 font-bold text-white shadow-lg">
                Save Changes
              </button>
            </div>
          </form>
        </div>
      )}

      {/* Confirm Modal */}
      {confirmMember && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-slate-900/30 px-4">
          <div className="w-full max-w-md rounded-3xl bg-white p-8 text-center shadow-2xl">
            <button
              onClick={() => setConfirmMember(null)}
              className="ml-auto block text-xl text-slate-400"
            >
              ×
            </button>

            <div className="mx-auto mb-5 flex h-16 w-16 items-center justify-center rounded-full bg-red-50 text-3xl">
              ⚠️
            </div>

            <h2 className="text-2xl font-black text-[#0B1437]">
              {confirmMember.status === "Active"
                ? "Kya aap is ID ko deactivate karna chahte hain?"
                : "Kya aap is ID ko reactivate karna chahte hain?"}
            </h2>

            <p className="mt-3 text-slate-500">
              {confirmMember.name} ka status update ho jayega.
            </p>

            <div className="mt-8 grid grid-cols-2 gap-4">
              <button
                onClick={() => setConfirmMember(null)}
                className="rounded-2xl border border-slate-200 px-5 py-3 font-bold text-slate-600"
              >
                Cancel
              </button>

              <button
                onClick={handleToggleStatus}
                className={`rounded-2xl px-5 py-3 font-bold text-white shadow-lg ${
                  confirmMember.status === "Active"
                    ? "bg-red-500"
                    : "bg-green-500"
                }`}
              >
                {confirmMember.status === "Active"
                  ? "Deactivate ID"
                  : "Reactivate ID"}
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}