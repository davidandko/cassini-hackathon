import math

def generate_bounding_box(lat: float, lon: float, area_km2: float = 220.0) -> dict:
    # Approximate dimensions for the area
    lat_km = 111  # 1 degree latitude ~ 111 km
    lon_km = 111 * math.cos(math.radians(lat))  # Longitude adjusted for latitude

    # Calculating the side of the square (since it's a square bounding box)
    side_km = math.sqrt(area_km2)

    # Converting the side to latitude and longitude differences
    lat_diff = side_km / lat_km / 2
    lon_diff = side_km / lon_km / 2

    # Creating the bounding box
    bounding_box = {
        "west": lon - lon_diff,
        "south": lat - lat_diff,
        "east": lon + lon_diff,
        "north": lat + lat_diff
    }

    return bounding_box