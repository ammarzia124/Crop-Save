import axios from 'axios';

// CORS Proxy to access Railway backend from Vercel
// Using allorigins.win as proxy (free, no signup)
const RAILWAY_BACKEND = 'https://backend-production-4f60.up.railway.app';
const CORS_PROXY = 'https://api.allorigins.win/raw?url=';

export const COTTON_YIELD_API_URL = CORS_PROXY + encodeURIComponent(RAILWAY_BACKEND);

export const cottonYieldApi = axios.create({
  baseURL: COTTON_YIELD_API_URL,
  timeout: 30000,
  headers: {
    'Content-Type': 'application/json',
  },
});

console.log('🌐 Cotton API URL (with CORS proxy):', COTTON_YIELD_API_URL);
