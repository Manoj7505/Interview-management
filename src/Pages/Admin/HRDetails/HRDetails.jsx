import React, { useState } from "react";
import { UserCog, Mail, Phone } from "lucide-react";
import HRProfileModal from "./HRProfileModal";

const hrMembers = [
  { id: 1, name: "Emily Clark", role: "HR Manager", email: "emily.clark@example.com", phone: "+1 555-1234" },
  { id: 2, name: "David White", role: "Recruiter", email: "david.white@example.com", phone: "+1 555-5678" },
];

const HRDetails = () => {
  const [selectedHR, setSelectedHR] = useState(null);

  return (
    <div className="p-6">
      <h1 className="text-3xl font-extrabold text-center mb-8 text-gray-800 tracking-tight">
        HR Team
      </h1>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {hrMembers.map((hr) => (
          <div key={hr.id} className="relative p-6 bg-white rounded-2xl shadow-lg hover:shadow-2xl transition-shadow duration-300 overflow-hidden">
            <div className="flex items-center justify-center mb-4">
              <div className="p-4 rounded-full bg-gradient-to-tr from-blue-500 to-indigo-500 text-white shadow-md">
                <UserCog className="w-6 h-6" />
              </div>
            </div>

            <h2 className="text-xl font-semibold text-gray-900 text-center mb-2">{hr.name}</h2>
            <p className="text-sm text-gray-500 text-center mb-4">{hr.role}</p>

            <div className="flex flex-col gap-2 text-gray-600">
              <div className="flex items-center gap-2">
                <Mail className="w-4 h-4 text-gray-400" />
                <span>{hr.email}</span>
              </div>
              <div className="flex items-center gap-2">
                <Phone className="w-4 h-4 text-gray-400" />
                <span>{hr.phone}</span>
              </div>
            </div>

            <button
              onClick={() => setSelectedHR(hr)}
              className=" cursor-pointer mt-6 w-full bg-gradient-to-tr from-blue-500 to-indigo-500 text-white py-2 rounded-xl hover:bg-purple-600 transition-colors"
            >
              View Profile
            </button>
          </div>
        ))}
      </div>

      {/* Modal */}
      {selectedHR && <HRProfileModal hr={selectedHR} onClose={() => setSelectedHR(null)} />}
    </div>
  );
};

export default HRDetails;
