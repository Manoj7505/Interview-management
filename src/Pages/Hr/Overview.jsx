import React, { useState } from "react";
import { Card, CardContent } from "../../Components/ui/Card";

import {
  Users,
  Briefcase,
  Calendar,
  FileText,
  BarChart3,
} from "lucide-react";

const Overview = ({ onAcceptCandidate }) => {
  // Dummy applied candidates (replace with API data later)
  const [appliedCandidates, setAppliedCandidates] = useState([
    { id: 1, name: "John Doe", email: "john.doe@example.com", job: "Frontend Developer", date: "2025-09-15", experience: "3 yrs", resume: "/resumes/john_doe.pdf" },
    { id: 2, name: "Jane Smith", email: "jane.smith@example.com", job: "Backend Developer", date: "2025-09-16", experience: "5 yrs", resume: "/resumes/jane_smith.pdf" },
    { id: 3, name: "Michael Lee", email: "michael.lee@example.com", job: "UI/UX Designer", date: "2025-09-17", experience: "Fresher", resume: "/resumes/michael_lee.pdf" },
  ]);

  const handleAccept = (id) => {
    const candidate = appliedCandidates.find(c => c.id === id);
    if (candidate) {
      // Create accepted candidate with additional fields for Candidates component
      const acceptedCandidate = {
        ...candidate,
        status: "Shortlisted",
        interviewer: "Sarah (HR)"
      };
      
      // Get existing accepted candidates from localStorage
      const existingAccepted = JSON.parse(localStorage.getItem('acceptedCandidates') || '[]');
      
      // Add new candidate
      const updatedAccepted = [...existingAccepted, acceptedCandidate];
      
      // Save to localStorage
      localStorage.setItem('acceptedCandidates', JSON.stringify(updatedAccepted));
      
      // Remove from applied candidates
      setAppliedCandidates(prev => prev.filter(c => c.id !== id));
      
      // Call parent function if provided
      if (onAcceptCandidate) {
        onAcceptCandidate(acceptedCandidate);
      }
      
      console.log("Accepted candidate:", candidate.name);
    }
  };

  const handleReject = (id) => {
    setAppliedCandidates(prev => prev.filter(c => c.id !== id));
    console.log("Rejected candidate with ID:", id);
  };

  return (
    <div className="space-y-6">
      {/* Top overview cards */}
      <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-5 gap-4">
        <Card>
          <CardContent className="p-4 flex items-center space-x-3">
            <Users className="text-blue-500" />
            <div>
              <p className="text-sm text-gray-500">Total Candidates</p>
              <h3 className="text-xl font-bold">1,245</h3>
            </div>
          </CardContent>
        </Card>

        <Card>
          <CardContent className="p-4 flex items-center space-x-3">
            <Briefcase className="text-green-500" />
            <div>
              <p className="text-sm text-gray-500">Active Jobs</p>
              <h3 className="text-xl font-bold">12</h3>
            </div>
          </CardContent>
        </Card>

        <Card>
          <CardContent className="p-4 flex items-center space-x-3">
            <Calendar className="text-purple-500" />
            <div>
              <p className="text-sm text-gray-500">Interviews This Week</p>
              <h3 className="text-xl font-bold">34</h3>
            </div>
          </CardContent>
        </Card>

        <Card>
          <CardContent className="p-4 flex items-center space-x-3">
            <FileText className="text-red-500" />
            <div>
              <p className="text-sm text-gray-500">Offers Released</p>
              <h3 className="text-xl font-bold">8</h3>
            </div>
          </CardContent>
        </Card>

        <Card>
          <CardContent className="p-4 flex items-center space-x-3">
            <BarChart3 className="text-yellow-500" />
            <div>
              <p className="text-sm text-gray-500">Conversion Rate</p>
              <h3 className="text-xl font-bold">22%</h3>
            </div>
          </CardContent>
        </Card>
      </div>

      {/* Applied Candidates Table */}
      <div className="bg-white shadow-md rounded-lg p-4">
        <h2 className="text-lg font-bold mb-4">Applied Candidates</h2>
        {appliedCandidates.length === 0 ? (
          <div className="text-center py-8">
            <p className="text-gray-500 mb-4">No pending applications</p>
            <p className="text-sm text-green-600">All candidates have been processed! ✅</p>
          </div>
        ) : (
          <table className="w-full text-sm text-left">
            <thead className="bg-gray-100">
              <tr>
                <th className="p-2 text-center">ID</th>
                <th className="p-2 ">Name</th>
                <th className="p-2 ">Email</th>
                <th className="p-2 ">Applied Job</th>
                <th className="p-2 ">Date Applied</th>
                <th className="p-2 ">Experience</th>
                <th className="p-2 text-center">Resume</th>
                <th className="p-2 text-center">A/R</th>
              </tr>
            </thead>
            <tbody>
              {appliedCandidates.map((c) => (
                <tr key={c.id} className="border-b hover:bg-gray-50">
                  <td className="p-2 text-center">{c.id}</td>
                  <td className="p-2">{c.name}</td>
                  <td className="p-2">{c.email}</td>
                  <td className="p-2">{c.job}</td>
                  <td className="p-2">{c.date}</td>
                  <td className="p-2">
                    <span className="px-2 py-1 text-xs rounded bg-gray-100">
                      {c.experience}
                    </span>
                  </td>
                  <td className="p-2 text-center">
                    <a
                      href={c.resume}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-blue-600 hover:underline"
                    >
                      View Resume
                    </a>
                  </td>
                  <td className="p-2 text-center">
                    <button
                      className="bg-green-500 text-white px-3 py-1 rounded hover:bg-green-600 mr-2 transition-colors"
                      onClick={() => handleAccept(c.id)}
                    >
                      Accept
                    </button>
                    <button
                      className="bg-red-500 text-white px-3 py-1 rounded hover:bg-red-600 transition-colors"
                      onClick={() => handleReject(c.id)}
                    >
                      Reject
                    </button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        )}
      </div>
    </div>
  );
};

export default Overview;