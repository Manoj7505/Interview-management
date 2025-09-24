import React, { useState } from "react";
import { Button } from "../../Components/ui/Button";

const Users = () => {
  const [hrUsers, setHrUsers] = useState([
    { id: 1, name: "Sarah Johnson", role: "HR Manager", email: "sarah@company.com" },
    { id: 2, name: "Rahul Mehta", role: "Recruiter", email: "rahul@company.com" },
    { id: 3, name: "Emily Davis", role: "Interviewer", email: "emily@company.com" },
  ]);

  const [newUser, setNewUser] = useState({ name: "", role: "", email: "" });
  const [showModal, setShowModal] = useState(false);
  const [editingUserId, setEditingUserId] = useState(null);
  const [editForm, setEditForm] = useState({ name: "", role: "", email: "" });

  // Handle input changes
  const handleChange = (e, setForm) => {
    const { name, value } = e.target;
    setForm((prev) => ({ ...prev, [name]: value }));
  };

  // Add User
  const handleAdd = () => {
    if (!newUser.name || !newUser.role || !newUser.email) {
      alert("Please fill all fields");
      return;
    }
    const user = { id: hrUsers.length + 1, ...newUser };
    setHrUsers([...hrUsers, user]);
    setNewUser({ name: "", role: "", email: "" });
    setShowModal(false); // Close modal after add
  };

  // Remove User
  const handleRemove = (id) => {
    setHrUsers(hrUsers.filter((user) => user.id !== id));
  };

  // Edit User
  const handleEdit = (user) => {
    setEditingUserId(user.id);
    setEditForm({ name: user.name, role: user.role, email: user.email });
  };

  const handleSave = (id) => {
    setHrUsers(
      hrUsers.map((user) => (user.id === id ? { ...user, ...editForm } : user))
    );
    setEditingUserId(null);
  };

  return (
    <div className="bg-white shadow-md rounded-lg p-4">
      <h3 className="text-lg font-bold mb-4">User Management</h3>
      <table className="w-full text-sm text-left">
        <thead className="bg-gray-100">
          <tr>
            <th className="p-2">Name</th>
            <th className="p-2">Role</th>
            <th className="p-2">Email</th>
            <th className="p-2">Actions</th>
          </tr>
        </thead>
        <tbody>
          {hrUsers.map((user) => (
            <tr key={user.id} className="border-b">
              {editingUserId === user.id ? (
                <>
                  <td className="p-2">
                    <input
                      type="text"
                      name="name"
                      value={editForm.name}
                      onChange={(e) => handleChange(e, setEditForm)}
                      className="border px-2 py-1 w-full"
                    />
                  </td>
                  <td className="p-2">
                    <input
                      type="text"
                      name="role"
                      value={editForm.role}
                      onChange={(e) => handleChange(e, setEditForm)}
                      className="border px-2 py-1 w-full"
                    />
                  </td>
                  <td className="p-2">
                    <input
                      type="email"
                      name="email"
                      value={editForm.email}
                      onChange={(e) => handleChange(e, setEditForm)}
                      className="border px-2 py-1 w-full"
                    />
                  </td>
                  <td className="p-2 space-x-2">
                    <Button
                      size="sm"
                      className="bg-green-700 hover:bg-green-800 text-white"
                      onClick={() => handleSave(user.id)}
                    >
                      Save
                    </Button>
                    <Button
                      size="sm"
                      variant="secondary"
                      onClick={() => setEditingUserId(null)}
                    >
                      Cancel
                    </Button>
                  </td>
                </>
              ) : (
                <>
                  <td className="p-2">{user.name}</td>
                  <td className="p-2">{user.role}</td>
                  <td className="p-2">{user.email}</td>
                  <td className="p-2 space-x-2">
                    <Button
                      size="sm"
                      className="bg-green-700 hover:bg-green-800 text-white"
                      onClick={() => handleEdit(user)}
                    >
                      Edit
                    </Button>
                    <Button
                      size="sm"
                      className="bg-red-600 hover:bg-red-700 text-white"
                      onClick={() => handleRemove(user.id)}
                    >
                      Remove
                    </Button>
                  </td>
                </>
              )}
            </tr>
          ))}
        </tbody>
      </table>

      {/* Button to open modal */}
      <Button
        className="mt-4 bg-green-900 hover:bg-green-800 text-white"
        onClick={() => setShowModal(true)}
      >
        Add New User
      </Button>

      {/* Add User Modal */}
      {showModal && (
        <div className="fixed inset-0 bg-black bg-opacity-40 flex justify-center items-center z-50">
          <div className="bg-white rounded-lg p-6 w-180 h-80 shadow-lg">
            <h4 className="font-semibold mb-4">Add New User</h4>
            <input
              type="text"
              name="name"
              placeholder="Name"
              value={newUser.name}
              onChange={(e) => handleChange(e, setNewUser)}
              className="border px-2 py-1 w-full mb-2 mt-3"
            />
            <input
              type="text"
              name="role"
              placeholder="Role"
              value={newUser.role}
              onChange={(e) => handleChange(e, setNewUser)}
              className="border px-2 py-1 w-full mb-2 mt-3"
            />
            <input
              type="email"
              name="email"
              placeholder="Email"
              value={newUser.email}
              onChange={(e) => handleChange(e, setNewUser)}
              className="border px-2 py-1 w-full mb-4 mt-3"
            />
            <div className="flex justify-end space-x-2">
              <Button
                className="bg-green-700 hover:bg-green-800 text-white"
                onClick={handleAdd}
              >
                Add
              </Button>
              <Button
                variant="secondary"
                onClick={() => setShowModal(false)}
              >
                Cancel
              </Button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default Users;
