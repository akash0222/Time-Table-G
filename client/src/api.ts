import axios from "axios";

export const API = axios.create({
  baseURL: "http://localhost:5000/api",
});

// ✅ Attach token automatically (SAFE VERSION)
API.interceptors.request.use((req) => {
  const token = localStorage.getItem("token");

  if (token && req.headers) {
    req.headers.Authorization = `Bearer ${token}`;
  }

  return req;
});