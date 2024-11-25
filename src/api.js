import axios from "axios";

export const BASE_URL =
  import.meta.env.VITE_BASE_URL || "https://seedsbackend.onrender.com";
const api = axios.create({
  baseURL: BASE_URL, // Ensure the baseURL matches your Django API on Render
});

export default api;
