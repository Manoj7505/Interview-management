import React from "react";

const reports = [
  { id: 1, title: "Monthly Candidate Report", date: "2025-09-01" },
  { id: 2, title: "Interviewer Performance", date: "2025-09-10" },
  { id: 3, title: "HR Activities", date: "2025-09-15" },
];

const Reports = () => {
  return (
    <div>
      <h1 className="text-xl font-bold mb-4 text-center">Reports</h1>
      <div className="grid grid-cols-3 gap-6">
        {reports.map((r) => (
          <div
            key={r.id}
            className="p-6 bg-white rounded-xl shadow hover:shadow-lg cursor-pointer"
          >
            <h2 className="font-semibold text-lg">{r.title}</h2>
            <p className="text-sm text-gray-500">Generated on: {r.date}</p>
            <button className="mt-4 bg-green-600 text-white px-4 py-2 rounded hover:bg-green-700">
              Download
            </button>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Reports;
