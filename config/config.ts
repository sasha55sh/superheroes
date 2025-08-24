import axios from "axios";

export const BASE_URL = "http://localhost:4001";
export const CLIENT_URL = "http://localhost:3000";

export const api = axios.create({
  baseURL: BASE_URL,
});
