from pydantic_settings import BaseSettings, SettingsConfigDict
from functools import lru_cache

class Settings(BaseSettings):
    app_name: str = "CASSINI RESEN"

    datacube_execute_job_options: dict = {
        "executor-memory": "3G",
        "executor-memoryOverhead": "4G",
        "executor-cores": "2"
    }

    datacube_save_folder: str = "app/uploads_datacube_dataarrays"
    dataframe_drop_na_threshold: float = 0.3

    sentinel_5p_collection_name: str = "SENTINEL_5P_L2"

@lru_cache()
def get_settings():
    return Settings()