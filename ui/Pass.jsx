import React, { useState } from "react";

const ChangePassword = () => {
  const [currentPassword, setCurrentPassword] = useState("");
  const [newPassword, setNewPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [logOutOtherDevices, setLogOutOtherDevices] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Current Password:", currentPassword);
    console.log("New Password:", newPassword);
    console.log("Log Out Other Devices:", logOutOtherDevices);
    setCurrentPassword("");
    setNewPassword("");
    setConfirmPassword("");
  };

  return (
    <div className="flex justify-center items-center mt-10">
      <div className="bg-white shadow-lg rounded-lg p-8 w-96">
        <h2 className="text-2xl font-bold mb-6 text-center text-blue-700">
          Change Password
        </h2>
        <form onSubmit={handleSubmit}>
          <div className="mb-4">
            <label className="block text-gray-700 font-medium">
              Current password (Updated 10/01/2024)
            </label>
            <input
              type="password"
              value={currentPassword}
              onChange={(e) => setCurrentPassword(e.target.value)}
              className="mt-1 block w-full p-3 border border-gray-300 rounded-md transition duration-200 focus:outline-none focus:ring-2 focus:ring-blue-500"
              required
              placeholder="Enter current password"
            />
          </div>
          <div className="mb-4">
            <label className="block text-gray-700 font-medium">
              New password
            </label>
            <input
              type="password"
              value={newPassword}
              onChange={(e) => setNewPassword(e.target.value)}
              className="mt-1 block w-full p-3 border border-gray-300 rounded-md transition duration-200 focus:outline-none focus:ring-2 focus:ring-blue-500"
              required
              placeholder="Enter new password"
            />
          </div>
          <div className="mb-4">
            <label className="block text-gray-700 font-medium">
              Re-type new password
            </label>
            <input
              type="password"
              value={confirmPassword}
              onChange={(e) => setConfirmPassword(e.target.value)}
              className="mt-1 block w-full p-3 border border-gray-300 rounded-md transition duration-200 focus:outline-none focus:ring-2 focus:ring-blue-500"
              required
              placeholder="Re-enter new password"
            />
          </div>
          <div className="mb-4 flex items-center">
            <input
              type="checkbox"
              checked={logOutOtherDevices}
              onChange={() => setLogOutOtherDevices(!logOutOtherDevices)}
              className="mr-2 h-5 w-5 text-blue-600 focus:ring-blue-500 border-gray-300 rounded"
            />
            <label className="text-gray-600">
              Log out of other devices. Choose this if someone else used your
              account.
            </label>
          </div>
          <button
            type="submit"
            className="w-full bg-blue-600 text-white p-2 rounded-md transition duration-200 hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-opacity-50"
          >
            Change password
          </button>
        </form>
        <p className="text-center text-blue-600 mt-4">
          <a href="#" className="underline hover:text-blue-800">
            Forgot your password?
          </a>
        </p>
      </div>
    </div>
  );
};

export default ChangePassword;
