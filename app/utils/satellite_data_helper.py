#load the saved file
import xarray as xr
import pandas as pd
from app.config.config_settings import get_settings
settings = get_settings()

def load_satellite_dataset_xarray(file_path:str) -> xr.Dataset:
    dataset = xr.load_dataset(file_path)
    return dataset

def load_satellite_dataset_dataframe(file_path:str) -> pd.DataFrame:
    dataset = xr.open_dataset(file_path)
    df = dataset.to_dataframe().reset_index()

    if 'crs' in df.columns:
        df = df.drop(columns=['crs'])

    return df

def dataframe_drop_x_y_and_na(df:pd.DataFrame) -> pd.DataFrame:
    df_cleaned = df.dropna(thresh=int(settings.dataframe_drop_na_threshold * len(df)), axis=1)
    df_cleaned = df_cleaned.drop(columns=['x','y'])
    return df_cleaned

def calculate_location_mean(df:pd.DataFrame, drop_na: bool = True) -> pd.DataFrame:
    """
    Calculate the mean of the data for each unique location (latitude and longitude).
    """
    # Group by latitude and longitude and calculate the mean
    if drop_na:
        df_drop_na = dataframe_drop_x_y_and_na(df)
    pollutant_columns = df_drop_na.select_dtypes(include=['float32', 'float64']).columns
    region_stats = df_drop_na.groupby(['t']).agg(
        **{f"avg_{col}": (col, 'mean') for col in pollutant_columns}
    ).reset_index()
    
    return region_stats

def get_location_mean_to_json(df:pd.DataFrame, drop_na: bool = True) -> dict:
    """
    Calculate the mean of the data for each unique location (latitude and longitude).
    """
    region_stats = calculate_location_mean(df)

    region_stats['t'] = region_stats['t'].astype(str)
    
    return region_stats.to_json(orient='records')