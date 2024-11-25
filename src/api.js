import axios from "axios";

const api = axios.create({
  baseURL: "http://localhost:8000/", // Ensure the baseURL matches your Django API
});

export default api;
