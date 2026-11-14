import axios from 'axios';

// Hardcoded backend URL - env vars aren't reliable in Vercel builds
export const COTTON_YIELD_API_URL = 'https://backend-production-4f60.up.railway.app';

export const cottonYieldApi = axios.create({
  baseURL: COTTON_YIELD_API_URL,
  timeout: 60000,
  headers: { 'Content-Type': 'application/json' },
});
