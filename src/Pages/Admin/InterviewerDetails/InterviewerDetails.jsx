import React, { useState } from "react";
import { UserCheck, Mail, Phone } from "lucide-react";
import InterviewerProfileModal from "./InterviewerProfileModal";

const interviewers = [
  { id: 1, name: "John Doe", expertise: "React.js", email: "john.doe@example.com", phone: "+1 555-1111" },
  { id: 2, name: "Sara Lee", expertise: "Node.js", email: "sara.lee@example.com", phone: "+1 555-2222" },
  { id: 3, name: "Michael Smith", expertise: "Angular", email: "michael.smith@example.com", phone: "+1 555-3333" },
];

const InterviewerDetails = () => {
  const [selectedInterviewer, setSelectedInterviewer] = useState(null);

  return (
    <div className="p-6">
      <h1 className="text-3xl font-extrabold text-center mb-8 text-gray-800 tracking-tight">
        Interviewer Team
      </h1>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {interviewers.map((interviewer) => (
          <div
            key={interviewer.id}
            className="relative p-6 bg-white rounded-2xl shadow-lg hover:shadow-2xl transition-shadow duration-300 overflow-hidden"
          >
            {/* Top accent gradient
            <div className="absolute top-0 left-0 w-full h-1.5 bg-gradient-to-r from-blue-500 to-indigo-500 rounded-t-xl"></div> */}

            {/* Icon */}
            <div className="flex items-center justify-center mb-4">
              <div className="p-4 rounded-full bg-gradient-to-tr from-blue-500 to-indigo-500 text-white shadow-md">
                <UserCheck className="w-6 h-6" />
              </div>
            </div>

            {/* Name */}
            <h2 className="text-xl font-semibold text-gray-900 text-center mb-2">
              {interviewer.name}
            </h2>

            {/* Expertise badge */}
            <p className="text-sm text-white bg-blue-500 px-3 py-1 rounded-full w-max mx-auto mb-4">
              Expertise: {interviewer.expertise}
            </p>

            {/* Contact Info */}
            <div className="flex flex-col gap-2 text-gray-600">
              <div className="flex items-center gap-2">
                <Mail className="w-4 h-4 text-gray-400" />
                <span>{interviewer.email}</span>
              </div>
              <div className="flex items-center gap-2">
                <Phone className="w-4 h-4 text-gray-400" />
                <span>{interviewer.phone}</span>
              </div>
            </div>

            {/* View Profile Button */}
            <button
              onClick={() => setSelectedInterviewer(interviewer)}
              className="cursor-pointer mt-6 w-full bg-gradient-to-tr from-blue-500 to-indigo-500 text-white py-2 rounded-xl hover:bg-indigo-600 transition-colors"
            >
              View Profile
            </button>
          </div>
        ))}
      </div>

      {/* Modal */}
      {selectedInterviewer && (
        <InterviewerProfileModal
          interviewer={selectedInterviewer}
          onClose={() => setSelectedInterviewer(null)}
        />
      )}
    </div>
  );
};

export default InterviewerDetails;
