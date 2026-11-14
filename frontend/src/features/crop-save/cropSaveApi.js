import axios from 'axios';

// Direct connection to Railway backend (no proxy)
const baseURL = import.meta.env.VITE_CROPSAVE_API_URL || 'https://backend-production-4f60.up.railway.app';

export const cropSaveApi = axios.create({
  baseURL,
  timeout: 60000, // Increased to 60 seconds
  headers: { 'Content-Type': 'application/json' },
});

console.log('🌐 CropSave API URL:', baseURL);
