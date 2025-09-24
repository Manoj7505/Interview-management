import React from "react";

const users = [
  { id: 1, name: "Admin User", role: "Admin", status: "Active" },
  { id: 2, name: "John Smith", role: "HR", status: "Active" },
  { id: 3, name: "Jane Doe", role: "Interviewer", status: "Inactive" },
];

const UserManagement = () => {
  return (
    <div>
      <h1 className="text-xl font-bold mb-4 text-center">User Management</h1>
      <table className="w-full bg-white rounded-xl shadow">
        <thead>
          <tr className="bg-gray-200">
            <th className="p-3 text-left">ID</th>
            <th className="p-3 text-left">Name</th>
            <th className="p-3 text-left">Role</th>
            <th className="p-3 text-left">Status</th>
          </tr>
        </thead>
        <tbody>
          {users.map((u) => (
            <tr key={u.id} className="border-t">
              <td className="p-3">{u.id}</td>
              <td className="p-3">{u.name}</td>
              <td className="p-3">{u.role}</td>
              <td className="p-3">
                <span
                  className={`px-2 py-1 text-sm rounded ${
                    u.status === "Active"
                      ? "bg-green-100 text-green-600"
                      : "bg-red-100 text-red-600"
                  }`}
                >
                  {u.status}
                </span>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default UserManagement;
