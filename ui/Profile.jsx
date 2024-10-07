import React, { useState } from "react";
import { Calendar } from "@/components/ui/calendar";

const Profile = () => {
  const [profile, setProfile] = useState({
    username: "Maygelukdo si elieser",
    name: "",
    email: "Buk-at na iyang gelukdo",
    phoneNumber: "",
    gender: "",
    dateOfBirth: { day: 14, month: "May", year: 2002 },
  });
  const handleChange = (e) => {
    const { name, value } = e.target;
    setProfile({ ...profile, [name]: value });
  };
  const [image, setImage] = useState(null);
  const handleImageUpload = (e) => {
    const file = e.target.files[0];
    if (file) {
      const reader = new FileReader();
      reader.onload = () => {
        setImage(reader.result);
      };
      reader.readAsDataURL(file);
    }
  };

  return (
    <div className="max-w-4xl mx-auto bg-white p-8 rounded-lg shadow-md mt-10">
      <div className="flex flex-col items-center mb-6">
        <div className="w-32 h-32 bg-gray-200 rounded-full flex items-center justify-center mb-4">
          {image ? (
            <img
              src={image}
              alt="Profile"
              className="w-full h-full object-cover rounded-full"
            />
          ) : (
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-16 w-16 text-gray-400"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M12 4a4 4 0 100 8 4 4 0 000-8zm0 9c-4.418 0-8 2.239-8 5v1h16v-1c0-2.761-3.582-5-8-5z"
              />
            </svg>
          )}
        </div>
        <input
          type="file"
          accept="image/*"
          onChange={handleImageUpload}
          className="hidden"
          id="imageUpload"
        />
        <label
          htmlFor="imageUpload"
          className="bg-blue-500 text-white px-4 py-2 rounded-md cursor-pointer hover:bg-blue-600"
        >
          Select Image
        </label>
      </div>
      <h2 className="text-2xl font-semibold text-gray-700 mb-4">My Profile</h2>
      <p className="text-gray-500 mb-6">Manage and protect your account</p>

      <form className="space-y-6">
        <div>
          <label className="block text-sm font-medium text-gray-700">
            Username
          </label>
          <input
            type="text"
            className="mt-1 block w-full border border-gray-300 rounded-md p-2"
            value={profile.username}
            name="username"
            onChange={handleChange}
          />
          <p className="text-xs text-gray-400 mt-1">
            Username can only be changed once.
          </p>
        </div>

        <div>
          <label className="block text-sm font-medium text-gray-700">
            Name
          </label>
          <input
            type="text"
            name="name"
            className="mt-1 block w-full border border-gray-300 rounded-md p-2"
            value={profile.name}
            onChange={handleChange}
          />
        </div>

        <div>
          <label className="block text-sm font-medium text-gray-700">
            Email
          </label>
          <input
            type="text"
            className="mt-1 block w-full border border-gray-300 rounded-md p-2"
            value={profile.email}
            name="email"
            onChange={handleChange}
          />
        </div>

        <div>
          <label className="block text-sm font-medium text-gray-700">
            Phone Number
          </label>
          <input
            type="text"
            className="mt-1 block w-full border border-gray-300 rounded-md p-2"
            placeholder="Add"
            name="phoneNumber"
            value={profile.phoneNumber}
            onChange={handleChange}
          />
        </div>

        <div>
          <label className="block text-sm font-medium text-gray-700">
            Gender
          </label>
          <div className="mt-2 flex items-center space-x-4">
            <label className="flex items-center">
              <input
                type="radio"
                name="gender"
                value="Male"
                className="form-radio"
                onChange={handleChange}
                checked={profile.gender === "Male"}
              />
              <span className="ml-2">Male</span>
            </label>
            <label className="flex items-center">
              <input
                type="radio"
                name="gender"
                value="Female"
                className="form-radio"
                onChange={handleChange}
                checked={profile.gender === "Female"}
              />
              <span className="ml-2">Female</span>
            </label>
            <label className="flex items-center">
              <input
                type="radio"
                name="gender"
                value="Other"
                className="form-radio"
                onChange={handleChange}
                checked={profile.gender === "Other"}
              />
              <span className="ml-2">Other</span>
            </label>
          </div>
        </div>

        <div>
          <label className="block text-sm font-medium text-gray-700">
            Date of Birth
          </label>
          {/* elieser gikapoy naku unsaon pag butang, ma error siya */}
        </div>

        <div>
          <button
            type="submit"
            className="bg-blue-500 text-white px-4 py-2 rounded-md hover:bg-gray-600"
          >
            Save
          </button>
        </div>
      </form>
    </div>
  );
};

export default Profile;
