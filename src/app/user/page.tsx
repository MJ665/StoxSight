"use client";
import React, { useEffect, useState } from "react";
import { getUserData, updateUserData, updateUserPassword } from "@/app/api/userdata/editUserData";

export default function UserPage() {
  const userId = 1; // Replace with actual session/user ID
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  // Fetch user data on mount
  useEffect(() => {
    const fetchData = async () => {
      try {
        const user = await getUserData(userId);
        setName(user.name);
        setEmail(user.email);
      } catch (err) {
        alert("Failed to load user data");
      }
    };

    fetchData();
  }, []);

  const handleUserDataSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    try {
      await updateUserData(userId, name, email);
      alert("User data updated successfully!");
    } catch (err) {
      alert("Failed to update user data");
    }
  };

  const handlePasswordSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    try {
      await updateUserPassword(userId, password);
      alert("Password updated successfully!");
    } catch (err) {
      alert("Failed to update password");
    }
  };

  return (
    <div className="p-4">
      <h2 className="text-xl font-semibold mb-2">Edit User Info</h2>
      <form onSubmit={handleUserDataSubmit} className="mb-6 space-y-2">
        <input
          type="text"
          placeholder="New Name"
          value={name}
          onChange={(e) => setName(e.target.value)}
          className="border px-2 py-1 w-full"
        />
        <input
          type="email"
          placeholder="New Email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          className="border px-2 py-1 w-full"
        />
        <button type="submit" className="bg-blue-500 text-white px-4 py-1">
          Update Info
        </button>
      </form>

      <h2 className="text-xl font-semibold mb-2">Update Password</h2>
      <form onSubmit={handlePasswordSubmit} className="space-y-2">
        <input
          type="password"
          placeholder="New Password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          className="border px-2 py-1 w-full"
        />
        <button type="submit" className="bg-green-600 text-white px-4 py-1">
          Change Password
        </button>
      </form>
    </div>
  );
}
