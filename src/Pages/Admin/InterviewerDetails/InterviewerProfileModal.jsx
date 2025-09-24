import React from "react";
import { Mail, Phone, X } from "lucide-react";

const InterviewerProfileModal = ({ interviewer, onClose }) => {
  if (!interviewer) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center">
      {/* Overlay with blur */}
      <div
        className="absolute inset-0 bg-opacity-50  backdrop-blur-sm"
        onClick={onClose}
      ></div>

      {/* Modal content */}
      <div
        className="relative bg-white rounded-2xl p-6 shadow-xl z-10"
        style={{ width: "200px" }}
      >
        {/* Interviewer Details */}
        <h2 className="text-lg font-bold mb-1 text-center">{interviewer.name}</h2>
        <p className="text-gray-500 mb-2 text-center">{interviewer.expertise}</p>

        <div className="flex flex-col gap-1 text-gray-600 text-sm">
          <div className="flex items-center gap-1">
            <Mail className="w-4 h-4 text-gray-400" />
            <span>{interviewer.email}</span>
          </div>
          <div className="flex items-center gap-1">
            <Phone className="w-4 h-4 text-gray-400" />
            <span>{interviewer.phone}</span>
          </div>
        </div>

        <button
          onClick={onClose}
          className="cursor-pointer mt-3 w-full bg-gradient-to-tr from-blue-500 to-indigo-500 text-white py-1 rounded-xl hover:bg-indigo-600 transition-colors text-sm"
        >
          Close
        </button>
      </div>
    </div>
  );
};

export default InterviewerProfileModal;
