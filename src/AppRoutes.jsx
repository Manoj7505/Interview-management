import React from "react";
import { BrowserRouter as Router, Routes, Route, Navigate } from "react-router-dom";

import AdminDashboard from "./Pages/Admin/Admindashboard";
import HRDashboard from "./Pages/Hr/Hrdashboard";
import InterviewerDashboard from "./Pages/Interviwer/Interviewerdashboard";
import HRDetails from "./Pages/Admin/HRDetails/HRDetails";
import InterviewerDetails from "./Pages/Admin/InterviewerDetails/InterviewerDetails";
import CandidateDetails from "./Pages/Admin/CandidateDetails/CandidateDetails";
import Recruitment from "./Pages/Admin/Recruitment";
import ReportsDetails from "./Pages/Admin/ReportsDetails";
import UserManagement from "./Pages/Admin/UserManagement";
import Setting from "./Pages/Admin/Setting";  // ✅ use this
import Login from "./Auth/Signin/Login";
import SignIn from "./Auth/Signin/SignIn";
import Landing from "./Auth/landingpage/landing";
import { AuthProvider, useAuth } from "./Auth/Signin/authReducer";
import ProtectedRoute from "./Components/ProtectedRoute";
import CandidateProfile from "./Pages/Candidate/My profile/Profile";
import CandidateTracker from "./Pages/Candidate/My interviews/CandidateTracker";
import CandidateApplication from "./Pages/Candidate/Application/CandidateApplication";
import InterviewSchedule from "./Pages/Interviwer/schedule/schedule";
import CandidateStatusTable from "./Pages/Interviwer/interviewstatus/interviewstatus";
import Overview from "./Pages/Hr/Overview";
import Candidates from "./Pages/Hr/Candidate";
import JobPostings from "./Pages/Hr/JobPosting";
import Calender from "./Pages/Hr/CalenderView";
import Reports from "./Pages/Hr/Reports";
import Users from "./Pages/Hr/Users";

// ✅ Routes wrapper
const AppRoutes = () => {
  const { initialized, isAuthenticated } = useAuth();
  const userKnownSkills = ["React", "Node.js", "MongoDB", "AWS"];

  if (!initialized) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-gray-50">
        <div className="flex flex-col items-center space-y-4">
          <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-blue-600"></div>
          <p className="text-gray-600">Loading...</p>
        </div>
      </div>
    );
  }

  const getRedirectPath = () => {
    const role = JSON.parse(localStorage.getItem("user"))?.role;
    if (role === "admin") return "/admin/dashboard";
    if (role === "hr") return "/hr/dashboard";
    if (role === "interviewer") return "/interviewer/dashboard";
    if (role === "candidate") return "/candidate/profile";
    return "/login";
  };

  return (
    <Routes>
      {/* Landing */}
      <Route path="/" element={<Landing />} />

      {/* Auth Routes */}
      <Route
        path="/login"
        element={
          isAuthenticated ? <Navigate to={getRedirectPath()} replace /> : <Login />
        }
      />
      <Route
        path="/signin"
        element={
          isAuthenticated ? <Navigate to={getRedirectPath()} replace /> : <SignIn />
        }
      />

      {/* Unauthorized */}
      <Route
        path="/unauthorized"
        element={
          <div className="min-h-screen flex items-center justify-center bg-gray-50">
            <div className="text-center">
              <h1 className="text-6xl font-bold text-gray-400 mb-4">403</h1>
              <p className="text-xl text-gray-600 mb-8">Access Denied</p>
              <button
                onClick={() => window.history.back()}
                className="px-6 py-3 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors mr-4"
              >
                Go Back
              </button>
              <a
                href="/login"
                className="px-6 py-3 bg-gray-600 text-white rounded-lg hover:bg-gray-700 transition-colors"
              >
                Login
              </a>
            </div>
          </div>
        }
      />

      {/* Admin Routes */}
      <Route
        path="/admin/dashboard"
        element={
          <ProtectedRoute requiredRole="admin">
            <AdminDashboard />
          </ProtectedRoute>
        }
      />
      <Route
        path="/admin/hr"
        element={
          <ProtectedRoute requiredRole="admin">
            <HRDetails />
          </ProtectedRoute>
        }
      />
      <Route
        path="/admin/interviewers"
        element={
          <ProtectedRoute requiredRole="admin">
            <InterviewerDetails />
          </ProtectedRoute>
        }
      />
      <Route
        path="/admin/candidates"
        element={
          <ProtectedRoute requiredRole="admin">
            <CandidateDetails />
          </ProtectedRoute>
        }
      />
      <Route
        path="/admin/recruitment"
        element={
          <ProtectedRoute requiredRole="admin">
            <Recruitment />
          </ProtectedRoute>
        }
      />
      <Route
        path="/admin/users"
        element={
          <ProtectedRoute requiredRole="admin">
            <UserManagement />
          </ProtectedRoute>
        }
      />
      <Route
        path="/admin/settings"
        element={
          <ProtectedRoute requiredRole="admin">
            <Setting />
          </ProtectedRoute>
        }
      />
      <Route
        path="/admin/reports"
        element={
          <ProtectedRoute requiredRole="admin">
            <ReportsDetails />
          </ProtectedRoute>
        }
      />

      {/* HR Routes */}
      <Route
        path="/hr/dashboard"
        element={
          <ProtectedRoute requiredRole="hr">
            <HRDashboard />
          </ProtectedRoute>
        }
      />
      <Route
        path="/hr/overview"
        element={
          <ProtectedRoute requiredRole="hr">
            <Overview />
          </ProtectedRoute>
        }
      />
      <Route
        path="/hr/candidates"
        element={
          <ProtectedRoute requiredRole="hr">
            <Candidates />
          </ProtectedRoute>
        }
      />
      <Route
        path="/hr/jobpostings"
        element={
          <ProtectedRoute requiredRole="hr">
            <JobPostings />
          </ProtectedRoute>
        }
      />
      <Route
        path="/hr/calender"
        element={
          <ProtectedRoute requiredRole="hr">
            <Calender />
          </ProtectedRoute>
        }
      />
      <Route
        path="/hr/reports"
        element={
          <ProtectedRoute requiredRole="hr">
            <Reports />
          </ProtectedRoute>
        }
      />
      <Route
        path="/hr/users"
        element={
          <ProtectedRoute requiredRole="hr">
            <Users />
          </ProtectedRoute>
        }
      />

      {/* Interviewer Routes */}
      <Route
        path="/interviewer/dashboard"
        element={
          <ProtectedRoute requiredRole="interviewer">
            <InterviewerDashboard />
          </ProtectedRoute>
        }
      />
      <Route
        path="/interviewer/schedule"
        element={
          <ProtectedRoute requiredRole="interviewer">
            <InterviewSchedule />
          </ProtectedRoute>
        }
      />
      <Route
        path="/interviewer/status"
        element={
          <ProtectedRoute requiredRole="interviewer">
            <CandidateStatusTable />
          </ProtectedRoute>
        }
      />

      {/* Candidate Routes */}
      <Route
        path="/candidate/profile"
        element={
          <ProtectedRoute requiredRole="candidate">
            <CandidateProfile />
          </ProtectedRoute>
        }
      />
      <Route
        path="/candidate/applications"
        element={
          <ProtectedRoute requiredRole="candidate">
            <CandidateApplication
              appliedRole="backend"
              userSkills={userKnownSkills}
              source="Company Website"
            />
          </ProtectedRoute>
        }
      />
      <Route
        path="/candidate/interviews"
        element={
          <ProtectedRoute requiredRole="candidate">
            <CandidateTracker />
          </ProtectedRoute>
        }
      />

      {/* Catch-all */}
      <Route path="*" element={<Navigate to="/login" replace />} />
    </Routes>
  );
};

export default AppRoutes;
