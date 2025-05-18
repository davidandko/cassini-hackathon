from fastapi import APIRouter, Form
from app.utils.authenticate_openeo import authenticate_openeo
from app.utils.generate_bounding_box import generate_bounding_box
from app.utils.get_satellite_data import (
    get_satellite_bands,
    get_satellite_description,
    get_mean_of_collection_bands_for_region,
)
from app.models.SatelliteRequirementsDto import SatelliteRequirementsDto

connection = authenticate_openeo()

router = APIRouter(
    prefix="/api",
    tags=["Sentinel Copernicus"],
    responses={404: {"description": "Not found"}},
)
@router.post("/bands")
async def get_bands(collection_name: str = Form(default="SENTINEL_5P_L2", description="Satellite collection name")):
    """
    Get the list of bands available in Sentinel data.
    Source: https://documentation.dataspace.copernicus.eu/APIs/SentinelHub/Data/S5PL2.html
    """
    return get_satellite_bands(connection=connection, collection_name=collection_name)

@router.get("/description")
async def get_description(collection_name: str = Form(default="SENTINEL_5P_L2", description="Satellite collection name")):
    """
    Get the description of the Sentinel data.
    Source: https://documentation.dataspace.copernicus.eu/APIs/SentinelHub/Data/S5PL2.html
    """
    return get_satellite_description(connection=connection, collection_name=collection_name)

@router.post("/mean")
async def get_mean(
    satellite_requirements: SatelliteRequirementsDto
):
    """
    Get the mean of the Sentinel 5P data for a given region and time period.
    """
    return get_mean_of_collection_bands_for_region(
        connection=connection,
        bands=satellite_requirements.bands,
        time=satellite_requirements.time,
        spatial_extent=satellite_requirements.spatial_extent,
        collection_name=satellite_requirements.collection_name,
        dataset_title=satellite_requirements.dataset_title
    )
    
@router.post("/get_region")
def get_region(latitude: float = Form(default=42.0054967, description="Lattitude"), longitude: float = Form(default=21.4104270, description="Longitude")):
    return generate_bounding_box(lat= latitude, lon=longitude)