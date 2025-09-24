import React, { useState } from "react";
import { User } from "lucide-react"; // 👤 simple candidate icon

const candidateData = [
  { name: "Ganesh Babu", role: "Frontend Developer", interview: "Online", status: "Selected" },
  { name: "Yasmine Garcia", role: "UI/UX Designer", interview: "Offline", status: "Pending" },
  { name: "Ibrahim Mahmud", role: "Backend Developer", interview: "Online", status: "Rejected" },
  { name: "Ria Lakshmi", role: "Fullstack Developer", interview: "Offline", status: "Selected" },
  { name: "Margaret Taylor", role: "Digital Marketing", interview: "Online", status: "Pending" },
  { name: "Sakuna Patelri", role: "Flutter Developer", interview: "Offline", status: "Rejected" },
];

export default function CandidateStatusTable() {
  const [activeTab, setActiveTab] = useState("All");

  const filteredCandidates =
    activeTab === "All"
      ? candidateData
      : candidateData.filter((c) => c.status === activeTab);

  // Status badge styles
  const statusStyles = {
    Selected: "bg-green-100 text-green-700 border border-green-300",
    Pending: "bg-yellow-100 text-yellow-700 border border-yellow-300",
    Rejected: "bg-red-100 text-red-700 border border-red-300",
  };

  // Status icons
  const statusIcons = {
    Selected: "✅",
    Pending: "⏳",
    Rejected: "❌",
  };

  return (
    <div className="bg-gray-50 min-h-screen p-10">
      <div className="max-w-7xl mx-auto bg-white shadow-xl rounded-xl p-8">
        <h2 className="text-3xl font-bold text-gray-800 mb-8">
          Candidate Interview Status
        </h2>

        {/* Tabs */}
        <div className="flex space-x-4 mb-8">
          {["All", "Selected", "Pending", "Rejected"].map((tab) => (
            <button
              key={tab}
              onClick={() => setActiveTab(tab)}
              className={`px-6 py-3 rounded-full text-base font-medium transition 
                ${
                  activeTab === tab
                    ? "bg-purple-600 text-white shadow-md"
                    : "bg-gray-100 text-gray-700 hover:bg-purple-50"
                }`}
            >
              {tab}
            </button>
          ))}
        </div>

        {/* Table */}
        <div className="overflow-x-auto rounded-lg border border-gray-200">
          <table className="w-full text-left border-collapse text-lg">
            <thead>
              <tr className="border-b bg-gradient-to-r from-purple-50 to-blue-50 text-gray-800">
                <th className="p-5">No</th>
                <th className="p-5">Candidate</th>
                <th className="p-5">Role</th>
                <th className="p-5">Interview Type</th>
                <th className="p-5">Status</th>
              </tr>
            </thead>
            <tbody>
              {filteredCandidates.map((candidate, index) => (
                <tr
                  key={index}
                  className="hover:bg-gray-50 transition"
                >
                  <td className="p-5">{index + 1}</td>
                  <td className="p-5 flex items-center space-x-3">
                    <User className="w-6 h-6 text-gray-500" />
                    <span>{candidate.name}</span>
                  </td>
                  <td className="p-5">{candidate.role}</td>
                  <td className="p-5">{candidate.interview}</td>
                  <td className="p-5">
                    <span
                      className={`flex items-center gap-2 px-4 py-2 rounded-full text-sm font-semibold w-fit ${statusStyles[candidate.status]}`}
                    >
                      <span>{statusIcons[candidate.status]}</span>
                      {candidate.status}
                    </span>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
}
