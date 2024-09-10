import axios from "axios";

export const baseURL = "https://api.dictionaryapi.dev";

const axiosInstance = axios.create({
  baseURL,
  timeout: 10000, // timeout of 10 seconds
  headers: { "Content-Type": "application/json" },
});

export default axiosInstance;
