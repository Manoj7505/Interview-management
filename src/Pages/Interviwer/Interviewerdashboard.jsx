import React, { useState } from "react";
import {
  BarChart,
  Bar,
  XAxis,
  YAxis,
  CartesianGrid,
  ResponsiveContainer,
  LabelList,
} from "recharts";
import { Briefcase, Users, Calendar, Clock, Eye } from "lucide-react"; // ✅ Added Eye icon

export default function Dashboard() {
  const [selectedRole, setSelectedRole] = useState(null);

  const stats = [
    { title: "Total Interview", value: "2000", gradient: "bg-gradient-to-r from-purple-500 to-purple-800", icon: <Briefcase size={28} /> },
    { title: "Total Attempt", value: "1300", gradient: "bg-gradient-to-r from-purple-500 to-purple-800", icon: <Users size={28} /> },
    { title: "Today Interview", value: "43", gradient: "bg-gradient-to-r from-purple-500 to-purple-800", icon: <Calendar size={28} /> },
    { title: "Upcoming Interview", value: "80", gradient: "bg-gradient-to-r from-purple-500 to-purple-800", icon: <Clock size={28} /> },
  ];

  const courses = [
    { name: "Digital Marketing", value: 85 },
    { name: "Human Resource", value: 40 },
    { name: "UI/UX Design", value: 35 },
    { name: "Front End", value: 5 },
    { name: "Flutter", value: 45 },
    { name: "Backend Developer", value: 20 },
    { name: "Fullstack Developer", value: 90 },
    { name: "Software Tester", value: 60 },
    { name: "Mobile App Developer", value: 10 },
    { name: "Data Analyst", value: 78 },
    { name: "Data Scientist", value: 45 },
    { name: "AI / ML", value: 45 },
  ];

  const employees = [
    {
      photo: "https://randomuser.me/api/portraits/men/32.jpg",
      name: "Manoj Kumar",
      role: "Fullstack Developer",
      date: "1/10/2025",
    },
    {
      photo: "https://randomuser.me/api/portraits/men/45.jpg",
      name: "Vignesh",
      role: "UI/UX Designer",
      date: "1/10/2025",
    },
  ];

  // Mock applicants per role
  const applicants = {
    "Fullstack Developer": [
      { name: "Arun", email: "arun@gmail.com", exp: "3 yrs", status: "Shortlisted" },
      { name: "Divya", email: "divya@gmail.com", exp: "2 yrs", status: "Pending" },
    ],
    "UI/UX Designer": [
      { name: "Karthik", email: "karthik@gmail.com", exp: "4 yrs", status: "Shortlisted" },
      { name: "Meera", email: "meera@gmail.com", exp: "1 yr", status: "Pending" },
      { name: "Suresh", email: "suresh@gmail.com", exp: "5 yrs", status: "Interview Scheduled" },
    ],
  };

  return (
    <div className="min-h-screen bg-gray-50 p-6">
   
      {/* Stats Cards */}
      <div className="grid grid-cols-1 md:grid-cols-4 gap-6 mb-8">
        {stats.map((stat, i) => (
          <div
            key={i}
            className={`rounded-3xl p-6 text-white shadow-lg bg-gradient-to-br ${stat.gradient} transform hover:scale-105 transition-transform duration-200`}
          >
            <div className="flex items-center justify-between mb-3">
              <h3 className="text-white text-sm font-medium opacity-90">{stat.title}</h3>
              <span className="text-white opacity-90">{stat.icon}</span>
            </div>
            <p className="text-3xl font-bold">{stat.value}</p>
          </div>
        ))}
      </div>

      {/* Courses Chart */}
      <div className="bg-white rounded-3xl shadow-lg p-8 mb-8 border border-purple-100">
        <h2 className="text-2xl font-bold mb-6 text-gray-800">Courses</h2>
        <ResponsiveContainer width="100%" height={450}>
          <BarChart data={courses} margin={{ top: 30, right: 30, left: 20, bottom: 80 }}>
            <CartesianGrid strokeDasharray="3 3" vertical={false} stroke="#f0f0f0" />
            <XAxis
              dataKey="name"
              tick={{ fontSize: 11, fill: '#141414ff' }}
              interval={0}
              angle={-35}
              textAnchor="end"
              height={80}
              axisLine={false}
              tickLine={false}
            />
            <YAxis 
              domain={[0, 100]} 
              tickFormatter={(v) => `${v}%`}
              tick={{ fontSize: 12, fill: '#0d0c0cff' }}
              axisLine={false}
              tickLine={false}
            />
            <defs>
              <linearGradient id="barGradient" x1="0" y1="0" x2="0" y2="1">
                <stop offset="0%" stopColor="#8b5cf6" stopOpacity={1} />
                <stop offset="100%" stopColor="#a855f7" stopOpacity={0.8} />
              </linearGradient>
            </defs>
            <Bar 
              dataKey="value" 
              fill="url(#barGradient)" 
              radius={[6, 6, 6, 6]}
              maxBarSize={20}
            >
              <LabelList
                dataKey="value"
                position="top"
                formatter={(v) => `${v}%`}
                style={{ 
                  fill: "#7c3aed", 
                  fontWeight: "600",
                  fontSize: "12px"
                }}
                offset={8}
              />
            </Bar>
          </BarChart>
        </ResponsiveContainer>
      </div>

      {/* Employee Table */}
      <div className="bg-white rounded-3xl shadow-lg p-8 border border-gray-100 mb-8">
        <h2 className="text-2xl font-bold mb-6 text-gray-800">Top Selling Products</h2>
        <div className="overflow-hidden">
          <table className="w-full">
            <thead>
              <tr className="border-b-2 border-gray-100">
                <th className="text-left py-4 px-2 font-bold text-gray-700">Photos</th>
                <th className="text-left py-4 px-2 font-bold text-gray-700">Employee Name</th>
                <th className="text-left py-4 px-2 font-bold text-gray-700">Role</th>
                <th className="text-left py-4 px-2 font-bold text-gray-700">Interview Date</th>
                <th className="text-left py-4 px-2 font-bold text-gray-700">Candidate Detail</th>
              </tr>
            </thead>
            <tbody>
              {employees.map((emp, i) => (
                <tr key={i} className="border-b border-gray-50 hover:bg-gray-25 transition-colors duration-200">
                  <td className="py-4 px-2">
                    <img 
                      src={emp.photo} 
                      alt={emp.name} 
                      className="w-12 h-12 rounded-full object-cover border-2 border-purple-100" 
                    />
                  </td>
                  <td className="py-4 px-2 font-semibold text-gray-800">{emp.name}</td>
                  <td className="py-4 px-2 text-gray-600">{emp.role}</td>
                  <td className="py-4 px-2 text-gray-600">{emp.date}</td>
                  <td className="py-4 px-2">
                    <button
                      onClick={() => setSelectedRole(emp.role)}
                      className="flex items-center gap-2 bg-purple-100 text-purple-700 px-4 py-2 ml-4 rounded-full text-sm font-medium hover:bg-purple-200 transition-colors duration-200"
                    >
                      <Eye size={16} /> Details
                    </button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>

      {/* Applicants Details Section */}
     {/* Applicants Details Modal */}
{selectedRole && (
  <div className="fixed inset-0 bg-black bg-opacity-60 flex justify-center items-center z-50">
    <div className="bg-white w-full md:w-4/5 lg:w-3/4 xl:w-2/3 h-[90%] rounded-2xl shadow-lg relative overflow-y-auto p-8">
      
      {/* Close Button */}
      <button
        onClick={() => setSelectedRole(null)}
        className="absolute top-4 right-4 text-gray-600 hover:text-black text-2xl"
      >
        ✕
      </button>

      {/* Modal Header */}
      <h2 className="text-2xl font-bold text-gray-800 mb-6">
        {selectedRole} – Applicants ({applicants[selectedRole]?.length || 0})
      </h2>

      {/* Applicants Table */}
      <table className="w-full">
        <thead>
          <tr className="border-b-2 border-gray-100">
            <th className="text-left py-3 px-2 font-bold text-gray-700">Name</th>
            <th className="text-left py-3 px-2 font-bold text-gray-700">Email</th>
            <th className="text-left py-3 px-2 font-bold text-gray-700">Experience</th>
            <th className="text-left py-3 px-2 font-bold text-gray-700">Status</th>
          </tr>
        </thead>
        <tbody>
          {applicants[selectedRole]?.map((a, i) => (
            <tr
              key={i}
              className="border-b border-gray-50 hover:bg-gray-50 transition-colors duration-200"
            >
              <td className="py-3 px-2 font-semibold text-gray-800">{a.name}</td>
              <td className="py-3 px-2 text-gray-600">{a.email}</td>
              <td className="py-3 px-2 text-gray-600">{a.exp}</td>
              <td className="py-3 px-2 text-purple-700 font-medium">{a.status}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  </div>
)}

    </div>
  );
}  