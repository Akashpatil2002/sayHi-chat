import axios from "axios";

export const axiosInstance = axios.create({
  baseURL: "https://sayhi-chat-5doa.onrender.com/api",
  withCredentials: true,
});