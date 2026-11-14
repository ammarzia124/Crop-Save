import axios from 'axios';

// CORS Proxy to access Railway backend from Vercel
const RAILWAY_BACKEND = 'https://backend-production-4f60.up.railway.app';
const CORS_PROXY = 'https://api.allorigins.win/raw?url=';
const baseURL = CORS_PROXY + encodeURIComponent(RAILWAY_BACKEND);

export const cropSaveApi = axios.create({
  baseURL,
  timeout: 30000,
  headers: { 'Content-Type': 'application/json' },
});

console.log('🌐 CropSave API URL (with CORS proxy):', baseURL);
