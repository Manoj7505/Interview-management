import React, { useState } from "react";

export default function InterviewScheduleTabs() {
  const [activeTab, setActiveTab] = useState("Today");
  const [selectedRoles, setSelectedRoles] = useState([]);

  const todaySchedule = [
    { role: "Sujin", empPanel: "Fullstack Developer", managerPanel: "sujin@gmail.com", director: "BE CSE", remarks: "Offline" },
    { role: "Ragul", empPanel: "Python Developer", managerPanel: "ragul@gmail.com", director: "BE Aids", remarks: "Online" },
    { role: "Rahul", empPanel: "Digital Marketing", managerPanel: "sujin@gmail.com", director: "BE CSE", remarks: "Offline" },
    { role: "Golden", empPanel: "Flutter Developer", managerPanel: "golden@gmail.com", director: "BE CSE", remarks: "Online" },
    { role: "Ganesh", empPanel: "Social Media Manager", managerPanel: "sujin@gmail.com", director: "BE CSE", remarks: "Offline" },
    { role: "Farhan", empPanel: "Software Tester", managerPanel: "sujin@gmail.com", director: "BE CSE", remarks: "Offline" },
    { role: "Manoj", empPanel: "Ui/Ux Designer", managerPanel: "manoj@gmail.com", director: "Bsc CSE", remarks: "Offline" },
  ];

  const upcomingSchedule = [
    { role: "Sujin", empPanel: "Java Developer", managerPanel: "sujin@gmail.com", director: "BE CSE", remarks: "Online" },
    { role: "Manoj", empPanel: "Fullstack Developer", managerPanel: "manoj@gmail.com", director: "Bsc CSE", remarks: "Offline" },
    { role: "Sujin", empPanel: "Fullstack Developer", managerPanel: "sujin@gmail.com", director: "BE CSE", remarks: "Offline" },
    { role: "Sujin", empPanel: "Fullstack Developer", managerPanel: "sujin@gmail.com", director: "BE CSE", remarks: "Offline" },
    { role: "Dinesh", empPanel: "UiUx Designer", managerPanel: "dinesh@gmail.com", director: "BE CSE", remarks: "Offline" },
    { role: "Suraj", empPanel: "Backend Developer", managerPanel: "suraj@gmail.com", director: "Bsc IT", remarks: "Offline" },
    { role: "Abi", empPanel: "Frontend Developer", managerPanel: "abi@gmail.com", director: "BE IT", remarks: "Online" },
  ];

  // Collect unique roles dynamically
  const allRoles = Array.from(
    new Set([...todaySchedule, ...upcomingSchedule].map((item) => item.empPanel))
  );

  // Handle checkbox toggle
  const toggleRole = (role) => {
    setSelectedRoles((prev) =>
      prev.includes(role) ? prev.filter((r) => r !== role) : [...prev, role]
    );
  };

  // Apply filter
  const filterData = (data) => {
    if (selectedRoles.length === 0) return data;
    return data.filter((item) => selectedRoles.includes(item.empPanel));
  };

  const renderTable = (data) => (
    <div className="overflow-x-auto shadow-2xl rounded-2xl mt-6 bg-white border border-gray-100">
      <table className="w-full border-collapse text-left">
        <thead>
          <tr className="bg-gradient-to-r from-purple-500 to-purple-800 text-white">
            <th className="p-6 font-semibold text-base tracking-wide">Name</th>
            <th className="p-6 font-semibold text-base tracking-wide">Role</th>
            <th className="p-6 font-semibold text-base tracking-wide">Email Id</th>
            <th className="p-6 font-semibold text-base tracking-wide">Education</th>
            <th className="p-6 font-semibold text-base tracking-wide">Interview Type</th>
          </tr>
        </thead>
        <tbody>
          {filterData(data).map((item, index) => (
            <tr
              key={index}
              className={`border-b border-gray-100 hover:bg-purple-50 transition-all duration-200 hover:shadow-md ${
                index % 2 === 0 ? "bg-gray-50" : "bg-white"
              }`}
            >
              <td className="p-6 font-semibold text-gray-800 border-r border-gray-100">
                <div className="flex items-center space-x-3">
                  <div className="w-10 h-10 bg-gradient-to-r from-purple-400 to-purple-500 rounded-full flex items-center justify-center text-white font-semibold text-sm">
                    {item.role.charAt(0)}
                  </div>
                  <span>{item.role}</span>
                </div>
              </td>
              <td className="p-6 text-gray-700 border-r border-gray-100">
                <span className="inline-block bg-blue-100 text-blue-800 px-3 py-1 rounded-full text-sm font-medium">
                  {item.empPanel}
                </span>
              </td>
              <td className="p-6 text-gray-700 border-r border-gray-100">
                <div className="flex items-center space-x-2">
                  <svg
                    className="w-4 h-4 text-gray-400"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M3 8l7.89 7.89a2 2 0 002.83 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"
                    />
                  </svg>
                  <span className="text-sm">{item.managerPanel}</span>
                </div>
              </td>
              <td className="p-6 text-gray-700 border-r border-gray-100">
                <span className="inline-block bg-green-100 text-green-800 px-3 py-1 rounded-full text-sm font-medium">
                  {item.director}
                </span>
              </td>
              <td className="p-6">
                <span
                  className={`inline-flex items-center px-3 py-1 rounded-full text-sm font-semibold ${
                    item.remarks === "Online"
                      ? "bg-emerald-100 text-emerald-800"
                      : "bg-amber-100 text-amber-800"
                  }`}
                >
                  {item.remarks === "Online" ? (
                    <svg
                      className="w-4 h-4 mr-2"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M9.75 17L9 20l-1 1h8l-1-1-.75-3M3 13h18M5 17h14a2 2 0 002-2V5a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"
                      />
                    </svg>
                  ) : (
                    <svg
                      className="w-4 h-4 mr-2"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"
                      />
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M15 11a3 3 0 11-6 0 3 3 0 016 0z"
                      />
                    </svg>
                  )}
                  {item.remarks}
                </span>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-50 to-purple-50 p-8">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <div className="text-center mb-10">
          <h2 className="text-4xl font-bold bg-gradient-to-r from-purple-600 to-purple-800 bg-clip-text text-transparent mb-2">
            Interview Schedule
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-purple-400 to-purple-600 mx-auto rounded-full"></div>
        </div>

        {/* Tabs */}
        <div className="flex justify-center space-x-6 mb-10">
          {["Today", "Upcoming"].map((tab) => (
            <button
              key={tab}
              onClick={() => setActiveTab(tab)}
              className={`relative px-8 py-4 rounded-2xl text-base font-semibold transition-all duration-300 transform hover:scale-105 ${
                activeTab === tab
                  ? "bg-gradient-to-r from-purple-600 to-purple-700 text-white shadow-xl shadow-purple-200"
                  : "bg-white text-gray-700 hover:bg-purple-50 shadow-lg border border-gray-200 hover:shadow-xl"
              }`}
            >
              {tab} Interviews
              {activeTab === tab && (
                <div className="absolute -bottom-1 left-1/2 transform -translate-x-1/2 w-6 h-1 bg-white rounded-full"></div>
              )}
            </button>
          ))}
        </div>

        {/* Role Filters */}
      {/* Role Filters */}
<div className="flex flex-wrap gap-4 justify-center mb-6">
  {allRoles.map((role) => (
    <button
      key={role}
      onClick={() => toggleRole(role)}
      className={`px-4 py-2  hover:cursor-pointer rounded-lg shadow-md border transition-all duration-200 ${
        selectedRoles.includes(role)
          ? "bg-gradient-to-r from-purple-500 to-purple-600 text-white"
          : "bg-white text-gray-700 hover:bg-purple-50"
      }`}
    >
      {role}
    </button>
  ))}
</div>


        {/* Table */}
        <div className="bg-white rounded-3xl shadow-2xl p-2 border border-gray-100">
          {activeTab === "Today" && renderTable(todaySchedule)}
          {activeTab === "Upcoming" && renderTable(upcomingSchedule)}
        </div>
      </div>
    </div>
  );
}
