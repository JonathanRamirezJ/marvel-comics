import axios from "axios";

// Own constants
import { BASE_URL } from "../../constants/api";

export const BaseConfigApi = axios.create({
  baseURL: BASE_URL,
  headers: {
    "Content-Type": "application/json",
  }
});

// Interceptor
BaseConfigApi.interceptors.request.use();