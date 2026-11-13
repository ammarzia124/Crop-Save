# Frontend Integration Guide for Muavia

## Backend Status: ✅ READY

Your unified CropSave backend is ready for integration!

## Live URLs

**Local Development**: http://localhost:8000
**Production** (after deployment): https://cropsave-backend.onrender.com

## API Documentation

Interactive docs: http://localhost:8000/docs

---

## Available Endpoints

### 1. Drought Prediction
**POST** `/drought/predict`

Request:
```json
{
  "lat": 31.5204,
  "lon": 74.3587,
  "district_name": "Lahore"
}
```

Response:
```json
{
  "risk_score": 45,
  "risk_level": "MEDIUM",
  "soil_moisture": 0.42,
  "rainfall_last_30_days": 12.5,
  "temperature_max": 38.2,
  "humidity": 65.3,
  "prediction_date": "2026-11-13"
}
```

### 2. Cotton Yield Prediction
**POST** `/crop/cotton/predict`

Request:
```json
{
  "variety": "CKC-6",
  "irrigation_level": 100,
  "nitrogen_amount": 240,
  "soil_moisture": 0.5,
  "location": "Multan",
  "district_lat": 30.1575,
  "district_lon": 71.5249
}
```

Response:
```json
{
  "predicted_yield": 650.0,
  "drought_adjusted_yield": 520.0,
  "drought_risk_level": "MEDIUM",
  "drought_impact_percent": 20,
  "confidence": "MEDIUM",
  "variety_used": "CKC-6",
  "prediction_date": "2026-11-13"
}
```

### 3. Combined Analysis
**POST** `/combined/analysis`

Request:
```json
{
  "lat": 30.1575,
  "lon": 71.5249,
  "district_name": "Multan",
  "variety": "CKC-6",
  "irrigation_level": 75,
  "nitrogen_amount": 240,
  "soil_moisture": 0.4
}
```

Response:
```json
{
  "drought_result": {...},
  "cotton_result": {...},
  "combined_advice": "Paragraph of advice...",
  "summary": "One sentence summary"
}
```

---

## Frontend Setup

### Update Environment Variable

In your frontend `.env` file:

```env
# For local development
VITE_API_BASE_URL=http://localhost:8000

# For production
VITE_API_BASE_URL=https://cropsave-backend.onrender.com
```

### Update API Calls

Replace:
```javascript
// OLD
fetch('https://drought-backend.onrender.com/predict')
fetch('https://cotton-backend.onrender.com/predict')
```

With:
```javascript
// NEW
const BASE_URL = import.meta.env.VITE_API_BASE_URL;
fetch(`${BASE_URL}/drought/predict`)
fetch(`${BASE_URL}/crop/cotton/predict`)
fetch(`${BASE_URL}/combined/analysis`)  // NEW endpoint!
```

---

## Testing Locally

1. **Start backend**:
```bash
cd backend
uvicorn main:app --reload
```

2. **Test in browser**: http://localhost:8000/docs

3. **Run tests**:
```bash
python test_endpoints.py
```

---

## Questions? Contact Ammar

WhatsApp Ammar if anything breaks!
