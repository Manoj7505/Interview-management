import React, { useState } from "react";

const Setting = () => {
  const [notifications, setNotifications] = useState(true);

  return (
    <div>
      <h1 className="text-xl font-bold mb-4 text-center">Settings</h1>
      <div className="bg-white p-6 rounded-xl shadow space-y-4">
        <div>
          <label className="font-semibold">Company Name:</label>
          <input
            type="text"
            placeholder="Enter company name"
            className="w-full mt-2 p-2 border rounded"
          />
        </div>

        <div>
          <label className="font-semibold">Default Role:</label>
          <select className="w-full mt-2 p-2 border rounded">
            <option>Admin</option>
            <option>HR</option>
            <option>Interviewer</option>
          </select>
        </div>

        <div className="flex items-center">
          <input
            type="checkbox"
            checked={notifications}
            onChange={() => setNotifications(!notifications)}
            className="mr-2"
          />
          <label>Email Notifications</label>
        </div>

        <button className="bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700">
          Save Settings
        </button>
      </div>
    </div>
  );
};

export default Setting;
    