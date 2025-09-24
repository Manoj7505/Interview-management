import React, { useState } from "react";
import { CheckCircle, XCircle, Clock, User, Calendar, MessageSquare, Award, UserCheck } from "lucide-react";

const steps = [
  { name: "Applied", icon: User, description: "Application received" },
  { name: "Shortlisted", icon: CheckCircle, description: "Initial screening passed" },
  { name: "Interview Scheduled", icon: Calendar, description: "Interview appointment set" },
  { name: "Feedback", icon: MessageSquare, description: "Interview completed" },
  { name: "Offer", icon: Award, description: "Job offer extended" },
  { name: "Hired/Rejected", icon: UserCheck, description: "Final decision made" },
];

const statusStyles = {
  pending: {
    circle: "bg-slate-200 text-slate-500 border-2 border-slate-300",
    line: "bg-slate-300",
    text: "text-slate-600",
    icon: "text-slate-500"
  },
  completed: {
    circle: "bg-emerald-500 text-white border-2 border-emerald-500 shadow-lg shadow-emerald-200",
    line: "bg-emerald-500",
    text: "text-emerald-700 font-semibold",
    icon: "text-white"
  },
  rejected: {
    circle: "bg-red-500 text-white border-2 border-red-500 shadow-lg shadow-red-200",
    line: "bg-slate-300",
    text: "text-red-600 font-semibold",
    icon: "text-white"
  },
  current: {
    circle: "bg-blue-500 text-white border-2 border-blue-500 shadow-lg shadow-blue-200 animate-pulse",
    line: "bg-slate-300",
    text: "text-blue-700 font-semibold",
    icon: "text-white"
  }
};

const CandidateTracker = ({ currentStep = 0, rejected = false, candidateName = "", position = "", applicationDate = "" }) => {
  const [hoveredStep, setHoveredStep] = useState(null);

  const getStepStatus = (index) => {
    if (rejected && index === currentStep) {
      return "rejected";
    } else if (index === currentStep && !rejected) {
      return "current";
    } else if (index < currentStep) {
      return "completed";
    }
    return "pending";
  };

  const getStatusText = () => {
    if (rejected) {
      return { text: "Application Rejected", color: "text-red-600" };
    } else if (currentStep === steps.length - 1) {
      return { text: "Hired Successfully", color: "text-emerald-600" };
    } else {
      return { text: `Currently at: ${steps[currentStep].name}`, color: "text-blue-600" };
    }
  };

  const statusInfo = getStatusText();

  return (
    <div className="bg-white  rounded-2xl shadow-2xl p-8 max-w-full mx-auto  border border-slate-100">
      <div className="mb-8 text-center">
        <div className="mb-4">
          <h2 className="text-3xl font-bold text-slate-800 mb-2">{candidateName}</h2>
          <p className="text-slate-600 text-lg">{position}</p>
          <p className="text-slate-500 text-sm">Applied on {applicationDate}</p>
        </div>
        <div className="bg-slate-50 rounded-full px-6 py-3 inline-block">
          <p className={`font-semibold ${statusInfo.color}`}>
            {statusInfo.text}
          </p>
        </div>
      </div>
      <div className="relative">
        <div className="absolute top-8 left-0 right-0 h-1 bg-slate-200 rounded-full"></div>
        
        <div className="flex justify-between items-start relative">
          {steps.map((step, index) => {
            const status = getStepStatus(index);
            const styles = statusStyles[status];
            const IconComponent = step.icon;
            const isHovered = hoveredStep === index;

            return (
              <div
                key={index}
                className="flex flex-col items-center relative group cursor-pointer"
                onMouseEnter={() => setHoveredStep(index)}
                onMouseLeave={() => setHoveredStep(null)}
              >
                {index < steps.length - 1 && (
                  <div
                    className={`absolute top-8 left-1/2 h-1 rounded-full transition-all duration-500 ${
                      index < currentStep ? styles.line : "bg-slate-200"
                    }`}
                    style={{
                      width: "calc(100vw / 6)",
                      transform: "translateX(50%)",
                      zIndex: 1
                    }}
                  ></div>
                )}
                <div
                  className={`w-16 h-16 flex items-center justify-center rounded-full transition-all duration-300 transform ${
                    styles.circle
                  } ${isHovered ? "scale-110" : "scale-100"} relative z-10`}
                >
                  <IconComponent className={`w-6 h-6 ${styles.icon}`} />
                </div>
                <div className="mt-4 text-center max-w-24">
                  <p className={`text-sm font-medium transition-colors duration-200 ${styles.text}`}>
                    {step.name}
                  </p>
                 {isHovered && (
                    <div className="absolute top-full mt-1 bg-slate-800 text-white text-xs px-3 py-2 rounded-lg shadow-lg opacity-0 group-hover:opacity-100 transition-all duration-150 ease-out whitespace-nowrap z-30 pointer-events-none">
                      {step.description}
                      <div className="absolute -top-1 left-1/2 transform -translate-x-1/2 w-2 h-2 bg-slate-800 rotate-45"></div>
                    </div>
                  )}
                </div>
                {status === "completed" && (
                  <div className="absolute -top-2 -right-2 w-6 h-6 bg-emerald-500 rounded-full flex items-center justify-center z-20">
                    <CheckCircle className="w-4 h-4 text-white" />
                  </div>
                )}
                {status === "rejected" && (
                  <div className="absolute -top-2 -right-2 w-6 h-6 bg-red-500 rounded-full flex items-center justify-center z-20">
                    <XCircle className="w-4 h-4 text-white" />
                  </div>
                )}
                {status === "current" && (
                  <div className="absolute -top-2 -right-2 w-6 h-6 bg-blue-500 rounded-full flex items-center justify-center z-20">
                    <Clock className="w-4 h-4 text-white" />
                  </div>
                )}
              </div>
            );
          })}
        </div>
      </div>
      <div className="mt-8 grid grid-cols-3 gap-6 pt-6 border-t border-slate-100">
        <div className="text-center">
          <div className="text-2xl font-bold text-slate-800">
            {Math.max(0, currentStep)} / {steps.length}
          </div>
          <div className="text-sm text-slate-600">Steps Completed</div>
        </div>
        <div className="text-center">
          <div className="text-2xl font-bold text-slate-800">
            {Math.round((Math.max(0, currentStep) / steps.length) * 100)}%
          </div>
          <div className="text-sm text-slate-600">Progress</div>
        </div>
        <div className="text-center">
          <div className={`text-2xl font-bold ${rejected ? 'text-red-600' : currentStep === steps.length - 1 ? 'text-emerald-600' : 'text-blue-600'}`}>
            {rejected ? 'Rejected' : currentStep === steps.length - 1 ? 'Hired' : 'In Progress'}
          </div>
          <div className="text-sm text-slate-600">Status</div>
        </div>
      </div>
    </div>
  );
};

export default CandidateTracker;