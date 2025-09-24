import React, { useState } from "react";
import { Card, CardContent } from "../../Components/ui/Card";
import {
  LineChart,
  Line,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Legend,
  BarChart,
  Bar,
  PieChart,
  Pie,
  Cell,
} from "recharts";

const Reports = () => {
  const [highlight, setHighlight] = useState("lastMonth");

  const salesData = [
    { date: "Sep 25", lastMonth: 200, prevMonth: 300 },
    { date: "Sep 26", lastMonth: 400, prevMonth: 350 },
    { date: "Sep 27", lastMonth: 300, prevMonth: 250 },
    { date: "Sep 28", lastMonth: 500, prevMonth: 450 },
    { date: "Today", lastMonth: 600, prevMonth: 480 },
  ];

  const pieData = [
    { name: "LinkedIn", value: 200 },
    { name: "Referral", value: 150 },
    { name: "Website", value: 100 },
    { name: "Other", value: 80 },
  ];

  const COLORS = ["#22c55e", "#16a34a", "#86efac", "#15803d"]; // green shades

  // Custom Tooltip for Pie Chart (removes black box)
  const CustomPieTooltip = ({ active, payload }) => {
    if (active && payload && payload.length) {
      return (
        <div className="px-3 py-2 bg-white shadow-md rounded-lg border border-gray-200">
          <p className="text-sm font-semibold text-gray-700">
            {payload[0].name}: {payload[0].value}
          </p>
        </div>
      );
    }
    return null;
  };

  return (
    <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
      {/* Total Sales (Line Chart) */}
      <Card className="rounded-2xl shadow-md">
        <CardContent className="p-4">
          <div className="flex items-center justify-between mb-2">
            <h3 className="text-lg font-bold">Total Sales</h3>
            <div className="flex gap-2">
              <button
                onClick={() => setHighlight("lastMonth")}
                className={`px-3 py-1 text-sm rounded-md ${
                  highlight === "lastMonth"
                    ? "bg-green-600 text-white"
                    : "bg-gray-200 text-gray-700"
                }`}
              >
                Last Month
              </button>
              <button
                onClick={() => setHighlight("prevMonth")}
                className={`px-3 py-1 text-sm rounded-md ${
                  highlight === "prevMonth"
                    ? "bg-green-600 text-white"
                    : "bg-gray-200 text-gray-700"
                }`}
              >
                Previous Month
              </button>
            </div>
          </div>
          <LineChart width={400} height={250} data={salesData}>
            <CartesianGrid strokeDasharray="3 3" />
            <XAxis dataKey="date" />
            <YAxis />
            <Tooltip />
            <Legend />
            <Line
              type="monotone"
              dataKey="lastMonth"
              stroke="url(#greenGradient)"
              strokeWidth={highlight === "lastMonth" ? 4 : 2}
              opacity={highlight === "lastMonth" ? 1 : 0.5}
              dot={false}
            />
            <Line
              type="monotone"
              dataKey="prevMonth"
              stroke="#9CA3AF"
              strokeWidth={highlight === "prevMonth" ? 4 : 2}
              opacity={highlight === "prevMonth" ? 1 : 0.5}
              dot={false}
            />
            <defs>
              <linearGradient id="greenGradient" x1="0" y1="0" x2="0" y2="1">
                <stop offset="5%" stopColor="#22c55e" />
                <stop offset="95%" stopColor="#15803d" />
              </linearGradient>
            </defs>
          </LineChart>
        </CardContent>
      </Card>

      {/* Total Upcoming Payouts (Bar Chart) */}
      <Card className="rounded-2xl shadow-md">
        <CardContent className="p-4">
          <div className="flex items-center justify-between mb-2">
            <h3 className="text-lg font-bold">Total Upcoming Payouts</h3>
            <div className="flex gap-2">
              <button
                onClick={() => setHighlight("lastMonth")}
                className={`px-3 py-1 text-sm rounded-md ${
                  highlight === "lastMonth"
                    ? "bg-green-600 text-white"
                    : "bg-gray-200 text-gray-700"
                }`}
              >
                Last Month
              </button>
              <button
                onClick={() => setHighlight("prevMonth")}
                className={`px-3 py-1 text-sm rounded-md ${
                  highlight === "prevMonth"
                    ? "bg-green-600 text-white"
                    : "bg-gray-200 text-gray-700"
                }`}
              >
                Previous Month
              </button>
            </div>
          </div>
          <BarChart width={400} height={250} data={salesData}>
            <CartesianGrid strokeDasharray="3 3" />
            <XAxis dataKey="date" />
            <YAxis />
            <Tooltip />
            <Legend />
            <Bar
              dataKey="lastMonth"
              fill="url(#greenGradient)"
              radius={6}
              opacity={highlight === "lastMonth" ? 1 : 0.5}
            />
            <Bar
              dataKey="prevMonth"
              fill="#9CA3AF"
              radius={6}
              opacity={highlight === "prevMonth" ? 1 : 0.5}
            />
            <defs>
              <linearGradient id="greenGradient" x1="0" y1="0" x2="0" y2="1">
                <stop offset="5%" stopColor="#22c55e" />
                <stop offset="95%" stopColor="#15803d" />
              </linearGradient>
            </defs>
          </BarChart>
        </CardContent>
      </Card>

      {/* Candidate Sources (Pie Chart) */}
      <Card className="rounded-2xl shadow-md lg:col-span-2">
        <CardContent className="p-4 flex flex-col items-center">
          <h3 className="text-lg font-bold mb-3">Candidate Sources</h3>
          <PieChart width={600} height={400}>
            <Pie
              data={pieData}
              cx="50%"
              cy="50%"
              outerRadius={150}
              dataKey="value"
              label
            >
              {pieData.map((entry, index) => (
                <Cell
                  key={`cell-${index}`}
                  fill={COLORS[index % COLORS.length]}
                />
              ))}
            </Pie>
            <Tooltip content={<CustomPieTooltip />} />
            <Legend />
          </PieChart>
        </CardContent>
      </Card>
    </div>
  );
};

export default Reports;
