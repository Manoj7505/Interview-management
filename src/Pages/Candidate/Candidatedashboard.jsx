import { useState } from "react";
import { Icons } from "../../Components/Icons";

const CandidateDashboard = () => {
  const [stats] = useState({
    applications: 8,
    interviews: 3,
    offers: 1,
    profileViews: 24
  });

  return (
    <div className="space-y-6">
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        <div className="bg-white p-6 rounded-2xl shadow-sm border border-gray-100 hover:shadow-lg transition-shadow">
          <div className="flex items-center justify-between">
            <div>
              <p className="text-sm text-gray-500 font-medium">Applications</p>
              <p className="text-3xl font-bold text-indigo-600 mt-1">{stats.applications}</p>
            </div>
            <div className="bg-indigo-50 p-3 rounded-xl">
              {Icons.briefcase('w-6 h-6 text-indigo-600')}
            </div>
          </div>
        </div>

        <div className="bg-white p-6 rounded-2xl shadow-sm border border-gray-100 hover:shadow-lg transition-shadow">
          <div className="flex items-center justify-between">
            <div>
              <p className="text-sm text-gray-500 font-medium">Interviews</p>
              <p className="text-3xl font-bold text-blue-600 mt-1">{stats.interviews}</p>
            </div>
            <div className="bg-blue-50 p-3 rounded-xl">
              {Icons.calendar('w-6 h-6 text-blue-600')}
            </div>
          </div>
        </div>

        <div className="bg-white p-6 rounded-2xl shadow-sm border border-gray-100 hover:shadow-lg transition-shadow">
          <div className="flex items-center justify-between">
            <div>
              <p className="text-sm text-gray-500 font-medium">Offers</p>
              <p className="text-3xl font-bold text-green-600 mt-1">{stats.offers}</p>
            </div>
            <div className="bg-green-50 p-3 rounded-xl">
              {Icons.briefcase('w-6 h-6 text-green-600')}
            </div>
          </div>
        </div>

        <div className="bg-white p-6 rounded-2xl shadow-sm border border-gray-100 hover:shadow-lg transition-shadow">
          <div className="flex items-center justify-between">
            <div>
              <p className="text-sm text-gray-500 font-medium">Profile Views</p>
              <p className="text-3xl font-bold text-purple-600 mt-1">{stats.profileViews}</p>
            </div>
            <div className="bg-purple-50 p-3 rounded-xl">
              {Icons.user('w-6 h-6 text-purple-600')}
            </div>
          </div>
        </div>
      </div>

      {/* Application Status */}
      <div className="bg-white rounded-2xl shadow-sm border border-gray-100 p-6">
        <h3 className="text-lg font-semibold text-gray-900 mb-6">Recent Applications</h3>
        <div className="space-y-4">
          {[
            { company: 'Tech Corp', position: 'Frontend Developer', status: 'Interview Scheduled', statusColor: 'blue' },
            { company: 'StartupXYZ', position: 'Full Stack Developer', status: 'Under Review', statusColor: 'yellow' },
            { company: 'BigTech Inc', position: 'Senior Developer', status: 'Offer Received', statusColor: 'green' }
          ].map((app, i) => (
            <div key={i} className="flex items-center justify-between p-4 bg-gray-50 rounded-xl">
              <div className="flex items-center space-x-4">
                <div className="bg-indigo-100 p-2 rounded-lg">
                  {Icons.briefcase('w-5 h-5 text-indigo-600')}
                </div>
                <div>
                  <p className="text-sm font-medium text-gray-900">{app.position}</p>
                  <p className="text-xs text-gray-500">{app.company}</p>
                </div>
              </div>
              <span className={`px-3 py-1 text-xs font-medium rounded-full
                ${app.statusColor === 'blue' ? 'bg-blue-100 text-blue-600' :
                  app.statusColor === 'yellow' ? 'bg-yellow-100 text-yellow-600' :
                  'bg-green-100 text-green-600'}`}>
                {app.status}
              </span>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};
export default CandidateDashboard;