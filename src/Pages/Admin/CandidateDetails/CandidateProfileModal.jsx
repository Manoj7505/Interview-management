import React from "react";
import { X } from "lucide-react";

const CandidateProfileModal = ({ candidate, onClose }) => {
  if (!candidate) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center">
      {/* Overlay with blur */}
      <div
        className="absolute inset-0 bg-black/50 backdrop-blur-sm"
        onClick={onClose}
      ></div>

      {/* Modal content */}
      <div
        className="relative bg-white rounded-2xl p-6 shadow-xl z-10 w-80"
      >
        {/* Candidate Details */}
        <h2 className="text-2xl font-bold mb-2 text-center">{candidate.name}</h2>
        <p className="text-gray-500 text-center mb-4">{candidate.job}</p>

        <div className="text-gray-700 text-sm space-y-2">
          <p><span className="font-semibold">ID:</span> {candidate.id}</p>
          <p><span className="font-semibold">Status:</span> {candidate.status}</p>
          <p><span className="font-semibold">Email:</span> {candidate.email || "N/A"}</p>
          <p><span className="font-semibold">Phone:</span> {candidate.phone || "N/A"}</p>
        </div>

        <button
          onClick={onClose}
          className="cursor-pointer mt-6 w-full bg-gradient-to-tr from-blue-500 to-indigo-500 text-white py-2 rounded-xl hover:bg-blue-600 transition-colors"
        >
          Close
        </button>
      </div>
    </div>
  );
};

export default CandidateProfileModal;
