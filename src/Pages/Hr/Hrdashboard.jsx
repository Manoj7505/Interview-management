import { useState } from "react";
import { Icons } from "../../Components/Icons";

const HRDashboard = () => {
  const [stats] = useState({
    totalCandidates: 324,
    scheduledInterviews: 28,
    completedInterviews: 45,
    hiringRate: 23.5
  });

  return (
    <div className="space-y-6">
      {/* Stats Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        <div className="bg-white p-6 rounded-2xl shadow-sm border border-gray-100 hover:shadow-lg transition-shadow">
          <div className="flex items-center justify-between">
            <div>
              <p className="text-sm text-gray-500 font-medium">Total Candidates</p>
              <p className="text-3xl font-bold text-green-600 mt-1">{stats.totalCandidates}</p>
            </div>
            <div className="bg-green-50 p-3 rounded-xl">
              {Icons.users('w-6 h-6 text-green-600')}
            </div>
          </div>
        </div>

        <div className="bg-white p-6 rounded-2xl shadow-sm border border-gray-100 hover:shadow-lg transition-shadow">
          <div className="flex items-center justify-between">
            <div>
              <p className="text-sm text-gray-500 font-medium">Scheduled</p>
              <p className="text-3xl font-bold text-blue-600 mt-1">{stats.scheduledInterviews}</p>
            </div>
            <div className="bg-blue-50 p-3 rounded-xl">
              {Icons.calendar('w-6 h-6 text-blue-600')}
            </div>
          </div>
        </div>

        <div className="bg-white p-6 rounded-2xl shadow-sm border border-gray-100 hover:shadow-lg transition-shadow">
          <div className="flex items-center justify-between">
            <div>
              <p className="text-sm text-gray-500 font-medium">Completed</p>
              <p className="text-3xl font-bold text-purple-600 mt-1">{stats.completedInterviews}</p>
            </div>
            <div className="bg-purple-50 p-3 rounded-xl">
              {Icons.edit('w-6 h-6 text-purple-600')}
            </div>
          </div>
        </div>

        <div className="bg-white p-6 rounded-2xl shadow-sm border border-gray-100 hover:shadow-lg transition-shadow">
          <div className="flex items-center justify-between">
            <div>
              <p className="text-sm text-gray-500 font-medium">Hiring Rate</p>
              <p className="text-3xl font-bold text-indigo-600 mt-1">{stats.hiringRate}%</p>
            </div>
            <div className="bg-indigo-50 p-3 rounded-xl">
              {Icons.reports('w-6 h-6 text-indigo-600')}
            </div>
          </div>
        </div>
      </div>

      {/* Recent Candidates */}
      <div className="bg-white rounded-2xl shadow-sm border border-gray-100 p-6">
        <h3 className="text-lg font-semibold text-gray-900 mb-6">Recent Candidates</h3>
        <div className="space-y-4">
          {[1, 2, 3].map(i => (
            <div key={i} className="flex items-center justify-between p-4 bg-gray-50 rounded-xl">
              <div className="flex items-center space-x-4">
                <div className="bg-green-100 p-2 rounded-lg">
                  {Icons.user('w-5 h-5 text-green-600')}
                </div>
                <div>
                  <p className="text-sm font-medium text-gray-900">Sarah Johnson</p>
                  <p className="text-xs text-gray-500">Frontend Developer - Applied 1 hour ago</p>
                </div>
              </div>
              <button className="px-4 py-2 bg-green-500 text-white text-sm rounded-lg hover:bg-green-600 transition-colors">
                Review
              </button>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};
export default HRDashboard;