import axios from "axios";

const api = axios.create({
  baseURL: "https://localhost:7187/api",
});

export default api;