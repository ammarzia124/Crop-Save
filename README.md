# 🌾 CropSave Backend

**Drought Prediction & Cotton Yield Forecasting for Farmers**  
**NASA Space Apps Challenge 2026**

[![NASA Space Apps](https://img.shields.io/badge/NASA-Space%20Apps%202026-blue)](https://www.spaceappschallenge.org/)
[![Python](https://img.shields.io/badge/Python-3.11-blue)](https://www.python.org/)
[![FastAPI](https://img.shields.io/badge/FastAPI-0.161-green)](https://fastapi.tiangolo.com/)

> **Unified API** providing:
> - **30-day drought risk prediction** (LOW/MEDIUM/HIGH) with farming advice
> - **Cotton yield forecasting** (quintals/hectare) with SHAP explainability
> - **Combined analysis** endpoint for integrated crop planning
> 
> Powered by NASA POWER satellite data and ensemble machine learning models.

---

## 🌍 The Problem We Solve

Millions of Pakistani farmers lose crops every year due to drought. They have **no early warning system**.  

NASA satellites collect soil moisture and rainfall data daily, but farmers can't access it.  
**CropSave bridges this gap.**

---

## 🛰️ NASA Data We Use

All data comes from the free **[NASA POWER API](https://power.larc.nasa.gov)** (no login required):

| Parameter | Meaning | NASA Source |
|---|---|---|
| **PRECTOTCORR** | Daily precipitation (mm) | GPM IMERG (bias-corrected) |
| **GWETROOT** | Root-zone soil wetness (0–1) | GMAO MERRA-2 |
| **T2M_MAX** | Maximum temperature (°C) | GMAO MERRA-2 |
| **RH2M** | Relative humidity (%) | GMAO MERRA-2 |

### NASA POWER API Integration

- **Endpoint**: https://power.larc.nasa.gov/api/temporal/daily/point
- **Authentication**: None required (public API)
- **Rate Limits**: None for research/educational use
- **Data Latency**: 1-2 days behind real-time
- **Coverage**: Global (any lat/lon coordinates)
- **Documentation**: https://power.larc.nasa.gov/docs/

**Parameters we fetch**:
- **PRECTOTCORR**: Precipitation (mm/day) - GPM IMERG
- **GWETROOT**: Root-zone soil moisture (0-1) - MERRA-2
- **T2M_MAX**: Max temperature (Celsius) - MERRA-2
- **RH2M**: Relative humidity (percent) - MERRA-2

---

## 🏗️ How It Works

### Drought Prediction
1. **Fetch NASA Data:** Real-time climate data from NASA POWER API
2. **Feature Engineering:** Extract 6 key features from 60-day historical window
3. **ML Prediction:** Random Forest model predicts 30-day drought risk
4. **API Response:** Returns risk score (0-100), level (LOW/MEDIUM/HIGH), and farming advice

### Cotton Yield Forecasting
1. **Input Parameters:** Temperature, rainfall, humidity, soil pH, fertilizer, irrigation, sunshine, pest incidence
2. **Ensemble Prediction:** Combines Random Forest, Gradient Boosting, and XGBoost models
3. **SHAP Analysis:** Explains which features contribute most to the predicted yield
4. **API Response:** Returns yield estimate (quintals/hectare) with feature importance values

---

## 🚀 Quick Start

```bash
cd backend
python -m venv .venv
source .venv/bin/activate      # Windows: .venv\Scripts\activate
pip install -r requirements.txt
cp .env.example .env
uvicorn main:app --reload      # Runs on http://localhost:8000
```

**API Documentation:** http://localhost:8000/docs

---

## 📡 API Endpoints

### Unified Backend - All Endpoints

| Method | Endpoint | Description |
|---|---|---|
| **GET** | `/health` | Server health check |
| **POST** | `/predict` | Drought risk prediction for coordinates |
| **POST** | `/predict/cotton` | Cotton yield prediction (quintals/hectare) |
| **POST** | `/shap/explain` | SHAP feature importance for cotton yield |
| **POST** | `/predict/combined` | Combined drought + cotton analysis |
| **GET** | `/history` | Historical rainfall & soil moisture data |
| **GET** | `/advisory` | Farming advice based on risk level |

**Live API:** https://cropsave-api.onrender.com  
**API Docs:** https://cropsave-api.onrender.com/docs

---

## 🔗 Unified Backend

All prediction capabilities are integrated into a single FastAPI backend:

### Drought Risk Analysis
- Real-time NASA satellite data (precipitation, soil moisture, temperature)
- 60-day historical window for feature engineering
- Random Forest classifier for 30-day risk prediction
- Urdu/English farming advisories

### Cotton Yield Forecasting
- Ensemble of 3 models (Random Forest, Gradient Boosting, XGBoost)
- 8 input parameters covering climate, soil, and agricultural practices
- SHAP-based explainability showing which factors drive yield predictions
- Yield output in quintals per hectare

### Combined Analysis
- Single endpoint (`/predict/combined`) returns both predictions
- Reduces API calls for integrated farming decisions
- Coordinated timestamp for synchronized analysis

### Model Setup
Place trained models in `backend/../ml/models/`:
- `random_forest.joblib` - Drought prediction
- `cotton_rf_model.pkl` - Cotton Random Forest
- `cotton_gb_model.pkl` - Cotton Gradient Boosting  
- `cotton_xgb_model.pkl` - Cotton XGBoost

---

## 🌐 Deployment

**Platform:** [Render.com](https://render.com) (Free Tier)  
**Configuration:** See `render.yaml`

```bash
git push origin main  # Auto-deploys to Render
```

---

## 👥 Team

**Team:** Code Voyagers  
**Challenge:** NASA Space Apps Challenge 2026

| Name | Role |
|---|---|
| **Muhammad Ammar Zia** | Team Lead, Backend Engineer |
| **Atiqua** | Frontend Developer |
| **Muavia** | ML Engineer |
| **Sohaib Altaf** | Data Engineer |
| **Sahal** | Frontend Developer |

---

## 📂 Project Structure

```
backend/
├── main.py                 # FastAPI application
├── routes/
│   ├── predict.py         # /predict endpoint
│   ├── advisory.py        # /advisory endpoint
│   └── history.py         # /history endpoint
├── services/
│   ├── nasa_api.py        # NASA POWER API client
│   ├── ml_service.py      # ML model loading
│   └── feature_builder.py # Feature engineering
├── models/
│   └── schemas.py         # Pydantic models
├── data/
│   └── districts.json     # Pakistan districts
└── requirements.txt       # Python dependencies
```

---

## 🛠️ Tech Stack

- **Python 3.11** - Programming language
- **FastAPI** - Web framework
- **Uvicorn** - ASGI server
- **NASA POWER API** - Climate data source
- **Scikit-learn** - Machine learning (Random Forest, Gradient Boosting)
- **XGBoost** - Gradient boosting framework
- **SHAP** - Model explainability and feature importance
- **Pandas & NumPy** - Data processing
- **Joblib & Pickle** - Model serialization
- **Render.com** - Deployment platform

---

## 🙏 Acknowledgments

- **NASA POWER API** for free global weather & soil data  
- **NASA Space Apps Challenge** for inspiring this project  
- **Pakistani farmers** who inspired this solution  

---

## 📜 License

MIT License — Free to use for educational & humanitarian purposes.

---

**Built with ❤️ for farmers. Powered by NASA data. 🌾🛰️**
