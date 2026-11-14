import axios from 'axios';

// Hardcoded backend URL - env vars aren't reliable in Vercel builds
const baseURL = 'https://backend-production-4f60.up.railway.app';

export const cropSaveApi = axios.create({
  baseURL,
  timeout: 30000,
  headers: { 'Content-Type': 'application/json' },
});
