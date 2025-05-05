// lib/api/editUserData.ts
import axios from "axios";

export const updateUserData = async (userId: number, name: string, email: string) => {
  const res = await axios.put(`/api/userdata/${userId}/`, { name, email });
  return res.data;
};

export const updateUserPassword = async (userId: number, password: string) => {
  const res = await axios.put(`/api/userdata/${userId}/password`, { password });
  return res.data;
};

export const getUserData = async (userId: number) => {
  const res = await axios.get(`/api/userdata/${userId}/`);
  return res.data;
};
