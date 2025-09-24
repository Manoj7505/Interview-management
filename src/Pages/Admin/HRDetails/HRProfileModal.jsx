import React from "react";
import { Mail, Phone, X } from "lucide-react";

const HRProfileModal = ({ hr, onClose }) => {
  if (!hr) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center">
      {/* Overlay with blur */}
      <div
        className="absolute inset-0  bg-opacity-50 backdrop-blur-sm"
        onClick={onClose}
      ></div>

      {/* Modal content */}
      <div className="relative bg-white rounded-2xl p-6 w-15/16 max-w-md shadow-xl z-10">
       

        {/* HR Details */}
        <h2 className="text-2xl font-bold mb-2">{hr.name}</h2>
        <p className="text-gray-500 mb-4">{hr.role}</p>

        <div className="flex flex-col gap-3 text-gray-600">
          <div className="flex items-center gap-2">
            <Mail className="w-5 h-5 text-gray-400" />
            <span>{hr.email}</span>
          </div>
          <div className="flex items-center gap-2">
            <Phone className="w-5 h-5 text-gray-400" />
            <span>{hr.phone}</span>
          </div>
        </div>

        <button
          onClick={onClose}
          className="cursor-pointer mt-6 w-full bg-gradient-to-tr from-blue-500 to-indigo-500 text-white py-2 rounded-xl hover:bg-purple-600 transition-colors"
        >
          Close
        </button>
      </div>
    </div>
  );
};

export default HRProfileModal;
