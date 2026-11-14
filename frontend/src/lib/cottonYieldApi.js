import axios from 'axios';

// Use env var or fallback to localhost
const API_URL = import.meta.env.VITE_COTTON_YIELD_API_URL || 'http://localhost:8000';

export const COTTON_YIELD_API_URL = API_URL;

export const cottonYieldApi = axios.create({
  baseURL: COTTON_YIELD_API_URL,
  timeout: 30000,
  headers: {
    'Content-Type': 'application/json',
  },
});

console.log('🌐 Cotton API URL:', COTTON_YIELD_API_URL);
