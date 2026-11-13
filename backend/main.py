"""CropSave API: 30-day drought risk for Pakistani districts from NASA POWER data.

Run: uvicorn main:app --reload   (from the backend/ folder)
"""
import os
from dotenv import load_dotenv
from fastapi import FastAPI, Request
from fastapi.middleware.cors import CORSMiddleware
from slowapi import Limiter, _rate_limit_exceeded_handler
from slowapi.util import get_remote_address
from slowapi.errors import RateLimitExceeded

from routes.drought import router as drought_router
from routes.crop import router as crop_router
from routes.combined import router as combined_router
from services.ml_service import model_loaded

load_dotenv()

# Initialize rate limiter
limiter = Limiter(key_func=get_remote_address)

app = FastAPI(
    title="CropSave API",
    description="Drought risk from NASA POWER satellite data"
)

# Add rate limiter to app state
app.state.limiter = limiter
app.add_exception_handler(RateLimitExceeded, _rate_limit_exceeded_handler)

# ponytail: read from env, fallback to safe defaults
cors_origins = os.getenv("CORS_ORIGINS", "*").split(",")
origins = [origin.strip() for origin in cors_origins]

app.add_middleware(
    CORSMiddleware,
    allow_origins=origins,
    allow_credentials=True,
    allow_methods=["*"],
    allow_headers=["*"],
)


@app.get("/health")
def health():
    """Server health check."""
    return {"status": "ok", "model_loaded": model_loaded}


# Include routers
app.include_router(drought_router, prefix="/drought", tags=["Drought Prediction"])
app.include_router(crop_router, prefix="/crop", tags=["Cotton Yield"])
app.include_router(combined_router, prefix="/combined", tags=["Combined Analysis"])
