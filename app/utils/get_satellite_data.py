from app.utils.authenticate_openeo import authenticate_openeo
from openeo.rest.connection import Connection
from app.config.config_settings import get_settings
from app.utils.get_execute_datacubes import fetch_datacubes, merge_datacubes, execute_datacube
from app.utils import satellite_data_helper

def get_satellite_bands(connection: Connection, collection_name: str) -> list:
    return connection.describe_collection(collection_name).get("cube:dimensions").get("bands").get("values")

def get_satellite_description(connection: Connection, collection_name:str) -> dict:
    return connection.describe_collection(collection_name)

def get_mean_of_collection_bands_for_region(connection: Connection,
                                            bands: list[str],
                                            time: list[str],
                                            spatial_extent: dict,
                                            collection_name: str,
                                            dataset_title: str
                                            ) -> dict:
    cubes = fetch_datacubes(connection = connection,
                        bands=bands,
                        collection_name=collection_name,
                        spatial_extent=spatial_extent,
                        time=time
                        )
    merged_cube = merge_datacubes(cubes=cubes)
    file_path = execute_datacube(cube=merged_cube, name=dataset_title, title=dataset_title)
    df = satellite_data_helper.load_satellite_dataset_dataframe(file_path)
    region_stats = satellite_data_helper.get_location_mean_to_json(df)
    return region_stats
    