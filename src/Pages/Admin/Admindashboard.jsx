import React from "react";
import { Users, Briefcase, UserCog, Activity } from "lucide-react";
import {
  LineChart,
  Line,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  PieChart,
  Pie,
  Cell,
  ResponsiveContainer,
} from "recharts";

const stats = [
  {
    label: "Total Candidates",
    value: 120,
    icon: Users,
    color: "from-blue-500 to-blue-600",
  },
  {
    label: "Interviewers",
    value: 15,
    icon: Briefcase,
    color: "from-green-500 to-green-600",
  },
  {
    label: "HR Members",
    value: 5,
    icon: UserCog,
    color: "from-purple-500 to-purple-600",
  },
];

// 📊 Line Chart Data (candidates over time)
const candidateTrend = [
  { month: "Jan", candidates: 40 },
  { month: "Feb", candidates: 55 },
  { month: "Mar", candidates: 65 },
  { month: "Apr", candidates: 80 },
  { month: "May", candidates: 95 },
  { month: "Jun", candidates: 120 },
];

// 🥧 Pie Chart Data (role distribution)
const roleDistribution = [
  { name: "Candidates", value: 120, color: "#3b82f6" },
  { name: "Interviewers", value: 15, color: "#22c55e" },
  { name: "HR", value: 5, color: "#9333ea" },
];

// 📝 Recent activity
const activities = [
  { id: 1, text: "New candidate John Doe applied for Backend role", time: "2h ago" },
  { id: 2, text: "Interview scheduled for Sarah Smith", time: "5h ago" },
  { id: 3, text: "HR updated job posting: Frontend Developer", time: "1d ago" },
  { id: 4, text: "Candidate Alice submitted documents", time: "2d ago" },
];

const DashboardLayout = () => {
  return (
    <div className="p-6 space-y-8">
      {/* Header */}
      <h1 className="text-3xl font-extrabold text-center mb-6 text-gray-800 tracking-tight">
        Overview Dashboard
      </h1>

      {/* Stats Cards */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        {stats.map(({ label, value, icon: Icon, color }, i) => (
          <div
            key={i}
            className="group relative p-6 bg-white rounded-2xl shadow-md hover:shadow-xl transition-all duration-300 overflow-hidden"
          >
            {/* Accent Bar */}
            {/* <div
              className={`absolute top-0 left-0 w-full h-1.5 bg-gradient-to-r ${color}`}
            ></div> */}

            {/* Content */}
            <div className="flex items-center justify-between">
              <div>
                <p className="text-gray-500 font-medium">{label}</p>
                <h2 className="text-4xl font-bold text-gray-900 mt-2">
                  {value}
                </h2>
              </div>
              <div
                className={`p-3 rounded-xl bg-gradient-to-tr ${color} text-white shadow-md group-hover:scale-110 transition-transform`}
              >
                <Icon className="w-6 h-6" />
              </div>
            </div>
          </div>
        ))}
      </div>

      {/* Charts Section */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        {/* Line Chart */}
        <div className="p-6 bg-white rounded-2xl shadow-md">
          <h2 className="text-lg font-semibold text-gray-700 mb-4">
            Candidates Growth
          </h2>
          <ResponsiveContainer width="100%" height={250}>
            <LineChart data={candidateTrend}>
              <CartesianGrid strokeDasharray="3 3" stroke="#e5e7eb" />
              <XAxis dataKey="month" />
              <YAxis />
              <Tooltip />
              <Line
                type="monotone"
                dataKey="candidates"
                stroke="#3b82f6"
                strokeWidth={3}
                dot={{ r: 6 }}
                activeDot={{ r: 8 }}
              />
            </LineChart>
          </ResponsiveContainer>
        </div>

        {/* Pie Chart */}
        <div className="p-6 bg-white rounded-2xl shadow-md">
          <h2 className="text-lg font-semibold text-gray-700 mb-4">
            Role Distribution
          </h2>
          <ResponsiveContainer width="100%" height={250}>
            <PieChart>
              <Pie
                data={roleDistribution}
                dataKey="value"
                nameKey="name"
                cx="50%"
                cy="50%"
                outerRadius={80}
                label
              >
                {roleDistribution.map((entry, index) => (
                  <Cell key={`cell-${index}`} fill={entry.color} />
                ))}
              </Pie>
              <Tooltip />
            </PieChart>
          </ResponsiveContainer>
        </div>
      </div>

      {/* Recent Activity */}
      <div className="p-6 bg-white rounded-2xl shadow-md">
        <h2 className="text-lg font-semibold text-gray-700 mb-4 flex items-center gap-2">
          <Activity className="w-5 h-5 text-blue-500" /> Recent Activity
        </h2>
        <ul className="divide-y divide-gray-200">
          {activities.map((item) => (
            <li key={item.id} className="py-3 flex justify-between items-center">
              <span className="text-gray-700">{item.text}</span>
              <span className="text-sm text-gray-500">{item.time}</span>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default DashboardLayout;
