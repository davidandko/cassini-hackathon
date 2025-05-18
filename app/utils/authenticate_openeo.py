# https://shapps.dataspace.copernicus.eu/dashboard

import openeo
from openeo.rest.connection import Connection
import os
from functools import lru_cache

@lru_cache()
def authenticate_openeo(client_id= None, client_secret = None, provider_id = None) -> Connection:
    client_id = os.getenv("OPENEO_CLIENT_ID", client_id)
    client_secret = os.getenv("OPENEO_CLIENT_SECRET", client_secret)
    provider_id = os.getenv("OPENEO_CLIENT_OAUTH_ID", provider_id)
    connection = openeo.connect("openeo.dataspace.copernicus.eu").authenticate_oidc(client_id=client_id, client_secret=client_secret, provider_id=provider_id)
    return connection