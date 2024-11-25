import axios from "axios";

// Alternatively, if you have a separate configuration file:
const api = axios.create({
  baseURL: "https://seedsbackend.onrender.com", // Update to your Render backend URL
});

export default api;
