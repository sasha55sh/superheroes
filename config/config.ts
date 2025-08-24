import axios from "axios";

export const BASE_URL = process.env.NEXT_PUBLIC_API_URL;
export const CLIENT_URL = "http://localhost:3000";

export const api = axios.create({
  baseURL: BASE_URL,
});
