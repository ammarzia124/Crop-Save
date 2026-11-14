# Deploy Backend to Render.com

## Quick Start

1. **Sign up/Login to Render**: https://render.com
2. **Connect GitHub**: Link your GitHub account
3. **New Web Service**:
   - Click "New +" → "Web Service"
   - Select repository: `ammarzia124/Crop-Save`
   - Render auto-detects `render.yaml` ✅
4. **Deploy**: Click "Create Web Service"
5. **Wait 5-10 minutes** for initial deployment

## Get Your Backend URL

After deployment completes:
- Copy the URL: `https://cropsave-api.onrender.com`

## Update Frontend

Add to Vercel environment variables:
```
VITE_COTTON_YIELD_API_URL=https://cropsave-api.onrender.com
VITE_CROPSAVE_API_URL=https://cropsave-api.onrender.com
```

Or update frontend `.env`:
```bash
VITE_COTTON_YIELD_API_URL=https://cropsave-api.onrender.com
VITE_CROPSAVE_API_URL=https://cropsave-api.onrender.com
```

## Redeploy Frontend

On Vercel:
1. Go to project settings
2. Add environment variables above
3. Trigger redeploy

Done! No more CORS issues. ✅

## Notes

- Free tier may sleep after 15min inactivity (first request takes ~30s to wake)
- CORS already configured for https://cropsave.vercel.app
- Health check: `https://cropsave-api.onrender.com/health`
