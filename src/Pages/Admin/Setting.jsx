import React, { useState } from "react";
import { Bell, Building2, Lock, Mail, Palette, Save, User } from "lucide-react";

const Setting = () => {
  const [notifications, setNotifications] = useState(true);
  const [theme, setTheme] = useState("light");

  return (
    <div className="p-8">
      <h1 className="text-3xl font-extrabold mb-8 text-center text-gray-800 tracking-tight">
        ⚙️ Settings
      </h1>

      <div className="bg-white p-8 rounded-2xl shadow-xl space-y-8 max-w-2xl mx-auto">
        {/* Company Info */}
        <section className="space-y-4">
          <h2 className="text-lg font-semibold text-gray-700 flex items-center gap-2">
            <Building2 className="w-5 h-5 text-blue-600" /> Company Info
          </h2>
          <div>
            <label className="font-medium text-gray-600">Company Name</label>
            <input
              type="text"
              placeholder="Enter company name"
              className="w-full mt-2 p-3 border rounded-lg focus:ring-2 focus:ring-blue-500 outline-none"
            />
          </div>
          <div>
            <label className="font-medium text-gray-600">Default Role</label>
            <select className="w-full mt-2 p-3 border rounded-lg focus:ring-2 focus:ring-blue-500 outline-none">
              <option>Admin</option>
              <option>HR</option>
              <option>Interviewer</option>
            </select>
          </div>
        </section>

        {/* Contact Info */}
        <section className="space-y-4">
          <h2 className="text-lg font-semibold text-gray-700 flex items-center gap-2">
            <User className="w-5 h-5 text-blue-600" /> Contact Info
          </h2>
          <div>
            <label className="font-medium text-gray-600">Contact Person</label>
            <input
              type="text"
              placeholder="Enter contact name"
              className="w-full mt-2 p-3 border rounded-lg focus:ring-2 focus:ring-blue-500 outline-none"
            />
          </div>
          <div>
            <label className="font-medium text-gray-600">Email</label>
            <input
              type="email"
              placeholder="Enter email address"
              className="w-full mt-2 p-3 border rounded-lg focus:ring-2 focus:ring-blue-500 outline-none"
            />
          </div>
          <div>
            <label className="font-medium text-gray-600">Phone</label>
            <input
              type="tel"
              placeholder="Enter phone number"
              className="w-full mt-2 p-3 border rounded-lg focus:ring-2 focus:ring-blue-500 outline-none"
            />
          </div>
        </section>

        {/* Preferences */}
        <section className="space-y-4">
          <h2 className="text-lg font-semibold text-gray-700 flex items-center gap-2">
            <Palette className="w-5 h-5 text-blue-600" /> Preferences
          </h2>
          <div>
            <label className="font-medium text-gray-600">Theme</label>
            <select
              value={theme}
              onChange={(e) => setTheme(e.target.value)}
              className="w-full mt-2 p-3 border rounded-lg focus:ring-2 focus:ring-blue-500 outline-none"
            >
              <option value="light">Light</option>
              <option value="dark">Dark</option>
              <option value="system">System Default</option>
            </select>
          </div>
          <div className="flex items-center gap-2">
            <input
              type="checkbox"
              checked={notifications}
              onChange={() => setNotifications(!notifications)}
              className="w-5 h-5 accent-blue-600"
            />
            <label className="flex items-center gap-2 text-gray-700 cursor-pointer">
              <Bell className="w-5 h-5 text-blue-500" /> Email Notifications
            </label>
          </div>
        </section>

        {/* Security */}
        <section className="space-y-4">
          <h2 className="text-lg font-semibold text-gray-700 flex items-center gap-2">
            <Lock className="w-5 h-5 text-blue-600" /> Security
          </h2>
          <div>
            <label className="font-medium text-gray-600">Change Password</label>
            <input
              type="password"
              placeholder="Enter new password"
              className="w-full mt-2 p-3 border rounded-lg focus:ring-2 focus:ring-blue-500 outline-none"
            />
          </div>
          <div>
            <label className="font-medium text-gray-600">Confirm Password</label>
            <input
              type="password"
              placeholder="Confirm new password"
              className="w-full mt-2 p-3 border rounded-lg focus:ring-2 focus:ring-blue-500 outline-none"
            />
          </div>
        </section>

        {/* Save Button */}
        <div className="flex justify-center">
          <button className="flex items-center gap-2 bg-blue-600 text-white px-6 py-3 rounded-xl font-semibold hover:bg-blue-700 transition-all shadow-md">
            <Save className="w-5 h-5" /> Save Settings
          </button>
        </div>
      </div>
    </div>
  );
};

export default Setting;
