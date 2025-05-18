#TODO: Define DTOs

from pydantic import BaseModel, Field

class SatelliteRequirementsDto(BaseModel):
    bands: list[str] = Field(
        default=["AER_AI_340_380", "AER_AI_354_388", "CO", "HCHO", "NO2", "O3", "SO2", "CH4"],
        description="List of bands/features to be extracted from the satellite data"
    )
    time: list[str] = Field(
        default=["2025-04-17", "2025-04-18"],
        description="Date period for the data extraction in ISO format"
    )
    spatial_extent: dict = Field(
        default={"west": 21.320514012895956,
                 "south": 41.93868410101716,
                 "east": 21.50033998710404,
                 "north": 42.072309298982844
                 },
        description="Spatial extent of the region of interest"
    )
    collection_name: str = Field(default="SENTINEL_5P_L2", description="Satellite collection name")
    dataset_title: str = Field(default="Sentinel5P1MonthAgo1Day", description="This is the title that will be used to nametag and save the dataset file")