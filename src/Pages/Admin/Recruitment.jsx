import React, { useState } from "react";

const jobsData = [
  { id: 1, title: "Frontend Developer", department: "Engineering", status: "Open" },
  { id: 2, title: "Backend Developer", department: "Engineering", status: "Closed" },
  { id: 3, title: "HR Executive", department: "Human Resources", status: "Open" },
];

const applicationsData = [
  { id: 1, name: "Alice Johnson", job: "Frontend Developer", stage: "Applied" },
  { id: 2, name: "Bob Smith", job: "Backend Developer", stage: "Shortlisted" },
  { id: 3, name: "Charlie Lee", job: "HR Executive", stage: "Interview" },
];

const Recruitment = () => {
  const [jobs] = useState(jobsData);
  const [applications] = useState(applicationsData);

  return (
    <div>
      <h1 className="text-2xl font-bold mb-6 text-center">Recruitment</h1>

      {/* Job Listings */}
      <section className="mb-10">
        <h2 className="text-xl font-semibold mb-4">Job Openings</h2>
        <table className="w-full bg-white rounded-xl shadow">
          <thead>
            <tr className="bg-gray-200">
              <th className="p-3 text-left">ID</th>
              <th className="p-3 text-left">Title</th>
              <th className="p-3 text-left">Department</th>
              <th className="p-3 text-left">Status</th>
            </tr>
          </thead>
          <tbody>
            {jobs.map((job) => (
              <tr key={job.id} className="border-t">
                <td className="p-3">{job.id}</td>
                <td className="p-3">{job.title}</td>
                <td className="p-3">{job.department}</td>
                <td className="p-3">
                  <span
                    className={`px-2 py-1 text-sm rounded ${
                      job.status === "Open"
                        ? "bg-green-100 text-green-600"
                        : "bg-red-100 text-red-600"
                    }`}
                  >
                    {job.status}
                  </span>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </section>

      {/* Applications */}
      <section>
        <h2 className="text-xl font-semibold mb-4">Applications</h2>
        <table className="w-full bg-white rounded-xl shadow">
          <thead>
            <tr className="bg-gray-200">
              <th className="p-3 text-left">ID</th>
              <th className="p-3 text-left">Candidate</th>
              <th className="p-3 text-left">Applied For</th>
              <th className="p-3 text-left">Stage</th>
            </tr>
          </thead>
          <tbody>
            {applications.map((app) => (
              <tr key={app.id} className="border-t">
                <td className="p-3">{app.id}</td>
                <td className="p-3">{app.name}</td>
                <td className="p-3">{app.job}</td>
                <td className="p-3">
                  <span
                    className={`px-2 py-1 text-sm rounded ${
                      app.stage === "Applied"
                        ? "bg-blue-100 text-blue-600"
                        : app.stage === "Shortlisted"
                        ? "bg-yellow-100 text-yellow-600"
                        : app.stage === "Interview"
                        ? "bg-purple-100 text-purple-600"
                        : "bg-gray-100 text-gray-600"
                    }`}
                  >
                    {app.stage}
                  </span>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </section>
    </div>
  );
};

export default Recruitment;
