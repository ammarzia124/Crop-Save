import axios from 'axios';

// Direct connection to Railway backend (no proxy)
const BACKEND_URL = import.meta.env.VITE_COTTON_YIELD_API_URL || 'https://backend-production-4f60.up.railway.app';

export const COTTON_YIELD_API_URL = BACKEND_URL;

export const cottonYieldApi = axios.create({
  baseURL: COTTON_YIELD_API_URL,
  timeout: 60000, // Increased to 60 seconds
  headers: {
    'Content-Type': 'application/json',
  },
});

console.log('🌐 Cotton API URL:', COTTON_YIELD_API_URL);
