import React, { useState } from "react";
import CandidateProfileModal from "./CandidateProfileModal";

const candidates = [
  { id: 1, name: "Alice Johnson", job: "Frontend Developer", status: "Scheduled", email: "alice.johnson@example.com", phone: "+1 555-1234" },
  { id: 2, name: "Bob Smith", job: "Backend Developer", status: "Pending", email: "bob.smith@example.com", phone: "+1 555-5678" },
  { id: 3, name: "Michael Lee", job: "Fullstack Developer", status: "Completed", email: "michael.lee@example.com", phone: "+1 555-9012" },
  { id: 4, name: "Sara Khan", job: "UI/UX Designer", status: "Rejected", email: "sara.khan@example.com", phone: "+1 555-3456" },
];

const getStatusClass = (status) => {
  switch (status) {
    case "Scheduled": return "bg-blue-100 text-blue-800";
    case "Pending": return "bg-yellow-100 text-yellow-800";
    case "Completed": return "bg-green-100 text-green-800";
    case "Rejected": return "bg-red-100 text-red-800";
    default: return "bg-gray-100 text-gray-800";
  }
};

const CandidateDetails = () => {
  const [selectedCandidate, setSelectedCandidate] = useState(null);

  return (
    <div className="p-6">
      <h1 className="text-3xl font-extrabold text-center mb-8 text-gray-800 tracking-tight">
        Candidate Details
      </h1>

      <div className="overflow-x-auto rounded-2xl shadow-lg">
        <table className="min-w-full bg-white rounded-2xl">
          <thead className="bg-gray-200">
            <tr>
              <th className="p-3 text-left font-medium text-gray-700">ID</th>
              <th className="p-3 text-left font-medium text-gray-700">Name</th>
              <th className="p-3 text-left font-medium text-gray-700">Applied Job</th>
              <th className="p-3 text-left font-medium text-gray-700">Status</th>
              <th className="p-3 text-left font-medium text-gray-700">Action</th>
            </tr>
          </thead>
          <tbody>
            {candidates.map((c, index) => (
              <tr
                key={c.id}
                className={`border-t hover:bg-gray-50 transition-colors ${
                  index % 2 === 0 ? "bg-gray-50" : "bg-white"
                }`}
              >
                <td className="p-3">{c.id}</td>
                <td className="p-3 font-semibold">{c.name}</td>
                <td className="p-3">{c.job}</td>
                <td className="p-3">
                  <span className={`px-2 py-1 rounded-full text-sm font-medium ${getStatusClass(c.status)}`}>
                    {c.status}
                  </span>
                </td>
                <td className="p-3">
                  <button
                    onClick={() => setSelectedCandidate(c)}
                    className="bg-gradient-to-tr from-blue-500 to-indigo-500 cursor-pointer text-white px-3 py-1 rounded-xl hover:bg-blue-600 transition-colors text-sm"
                  >
                    View Profile
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      {/* Modal */}
      {selectedCandidate && (
        <CandidateProfileModal
          candidate={selectedCandidate}
          onClose={() => setSelectedCandidate(null)}
        />
      )}
    </div>
  );
};

export default CandidateDetails;
