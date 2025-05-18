
from openeo.rest.connection import Connection
from openeo.rest.datacube import DataCube
from app.config.config_settings import get_settings
import os

settings = get_settings()

def fetch_datacubes(connection: Connection,
                     bands: list[str],
                     time: list[str],
                     spatial_extent: dict,
                     collection_name: str) -> list[DataCube]:
    cubes = []
    
    for band in bands:
        datacube = connection.load_collection(
            collection_name,
            temporal_extent=time,
            spatial_extent=spatial_extent,
            bands=[band]
        )
        cubes.append(datacube)

    return cubes

def merge_datacubes(cubes: list[DataCube]) -> DataCube:
    if not cubes:
        raise ValueError("No datacubes to merge.")
    
    merged_cube = cubes[0]
    for cube in cubes[1:]:
        merged_cube = merged_cube.merge(cube)
    
    return merged_cube

def execute_datacube(name:str, cube: DataCube, title: str):
    """Executes the datacube and saves the result to a file WITH AN EXTENSION '.nc'.
    It's Xarray DataArray Dataset"""

    full_path = f"{settings.datacube_save_folder}/{title}.nc"

    cube.execute_batch(title=name,
                          outputfile=full_path,
                          job_options=settings.datacube_execute_job_options)
    
    absolute_path = os.path.abspath(full_path)

    
    return absolute_path