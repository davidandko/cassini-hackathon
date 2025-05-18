from fastapi import FastAPI

from fastapi.middleware.cors import CORSMiddleware
from app.api.router import router as sentinel_5p_router

app = FastAPI()
app.include_router(sentinel_5p_router)

origins = []

app.add_middleware(
    CORSMiddleware,
    allow_origins=["*"],
    allow_credentials=True,
    allow_methods=["*"],
    allow_headers=["*"],
)