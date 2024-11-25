import axios from "axios";
// export const BASE_URL = "http://127.0.0.1:8000";

export const BASE_URL =
  import.meta.env.VITE_BASE_URL || "http://127.0.0.1:8000";
const api = axios.create({
  baseURL: BASE_URL, // Ensure the baseURL matches your Django API
});

export default api;
