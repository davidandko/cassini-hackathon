package main.mobile.healthmatewatchos.presentation

import android.Manifest
import android.location.Location
import android.os.Bundle
import android.util.Log
import androidx.activity.ComponentActivity
import androidx.activity.compose.setContent
import androidx.core.app.ActivityCompat
import androidx.core.splashscreen.SplashScreen.Companion.installSplashScreen
import androidx.compose.foundation.background
import androidx.compose.foundation.clickable
import androidx.compose.foundation.layout.*
import androidx.compose.runtime.*
import androidx.compose.ui.Alignment
import androidx.compose.ui.Modifier
import androidx.compose.ui.graphics.Color
import androidx.compose.ui.text.style.TextAlign
import androidx.compose.ui.unit.dp
import androidx.health.services.client.HealthServices
import androidx.health.services.client.MeasureCallback
import androidx.health.services.client.MeasureClient
import androidx.health.services.client.data.*
import androidx.wear.compose.material.Text
import com.google.android.gms.location.*
import kotlinx.coroutines.channels.awaitClose
import kotlinx.coroutines.flow.*
import kotlinx.coroutines.guava.await
import kotlinx.coroutines.delay
import kotlinx.coroutines.Dispatchers
import kotlinx.coroutines.withContext
import main.mobile.healthmatewatchos.presentation.theme.HealthMateWatchOSTheme
import org.json.JSONObject
import java.io.OutputStreamWriter
import java.net.HttpURLConnection
import java.net.URL
import java.time.LocalDateTime

class MainActivity : ComponentActivity() {
    private lateinit var measureClient: MeasureClient
    private lateinit var fusedLocationClient: FusedLocationProviderClient

    companion object {
        private const val REQUEST_LOCATION_PERMISSION = 1001
    }

    override fun onCreate(savedInstanceState: Bundle?) {
        installSplashScreen()
        super.onCreate(savedInstanceState)

        measureClient = HealthServices.getClient(this).measureClient
        fusedLocationClient = LocationServices.getFusedLocationProviderClient(this)

        ActivityCompat.requestPermissions(
            this,
            arrayOf(Manifest.permission.ACCESS_FINE_LOCATION),
            REQUEST_LOCATION_PERMISSION
        )

        setContent {
            var currentLocation by remember { mutableStateOf<Location?>(null) }
            var supportsHeartRate by remember { mutableStateOf(false) }
            var heartRate by remember { mutableStateOf("--") }
            var steps by remember { mutableStateOf("--") }
            var useMock by remember { mutableStateOf(false) }
            var supportsSteps by remember { mutableStateOf(false) }

            LaunchedEffect(Unit) {
                requestLocationUpdates { loc ->
                    currentLocation = loc
                }
            }

            LaunchedEffect(Unit) {
                val capabilities = measureClient.getCapabilitiesAsync().await()
                supportsHeartRate = DataType.HEART_RATE_BPM in capabilities.supportedDataTypesMeasure
                supportsSteps = DataType.STEPS in capabilities.supportedDataTypesMeasure
            }

            if (supportsSteps) {
                LaunchedEffect(useMock, supportsSteps) {
                    val stepFlow = if (useMock) mockStepsFlow() else stepsFlow(measureClient)
                    stepFlow.collect { stp ->
                        steps = stp
                        val loc = currentLocation
                        val jsonObject = JSONObject().apply {
                            put("metricName", "steps")
                            put("value", stp)
                            put("timestamp", LocalDateTime.now().toString())
                            put("latitude", loc?.latitude ?: "unknown")
                            put("longitude", loc?.longitude ?: "unknown")
                        }
                        sendDataToServer(jsonObject)
                    }
                }
            }

            if (supportsHeartRate) {
                LaunchedEffect(useMock, supportsHeartRate) {
                    val hrFlow = if (useMock) mockHeartRateFlow() else heartRateFlow(measureClient)
                    hrFlow.collect { bpm ->
                        heartRate = bpm
                        val loc = currentLocation
                        val jsonObject = JSONObject().apply {
                            put("metricName", "bpm")
                            put("value", bpm)
                            put("timestamp", LocalDateTime.now().toString())
                            put("latitude", loc?.latitude ?: "unknown")
                            put("longitude", loc?.longitude ?: "unknown")
                        }
                        sendDataToServer(jsonObject)
                    }
                }
            }

            WearApp(heartRate = heartRate, steps = steps, toggleMock = { useMock = !useMock })
        }
    }

    private fun requestLocationUpdates(onLocationReceived: (Location) -> Unit) {
        val locationRequest = LocationRequest.create().apply {
            interval = 10_000
            fastestInterval = 5_000
            priority = Priority.PRIORITY_HIGH_ACCURACY
        }

        val locationCallback = object : LocationCallback() {
            override fun onLocationResult(locationResult: LocationResult) {
                locationResult.lastLocation?.let { location ->
                    Log.d("WearOS", "Location: ${location.latitude}, ${location.longitude}")
                    onLocationReceived(location)
                }
            }
        }

        fusedLocationClient.requestLocationUpdates(
            locationRequest,
            locationCallback,
            mainLooper
        )
    }
}

fun heartRateFlow(measureClient: MeasureClient) = callbackFlow {
    val callback = object : MeasureCallback {
        override fun onAvailabilityChanged(dataType: DeltaDataType<*, *>, availability: Availability) {}
        override fun onDataReceived(data: DataPointContainer) {
            val bpm = data.getData(DataType.HEART_RATE_BPM).lastOrNull()?.value?.toString()
            if (bpm != null) trySend(bpm)
        }
    }
    measureClient.registerMeasureCallback(DataType.HEART_RATE_BPM, callback)
    awaitClose {
        measureClient.unregisterMeasureCallbackAsync(DataType.HEART_RATE_BPM, callback)
    }
}

fun stepsFlow(measureClient: MeasureClient) = callbackFlow {
    val callback = object : MeasureCallback {
        override fun onAvailabilityChanged(dataType: DeltaDataType<*, *>, availability: Availability) {}
        override fun onDataReceived(data: DataPointContainer) {
            val steps = data.getData(DataType.STEPS).lastOrNull()?.value?.toString()
            Log.d("WearOS", "Steps received: $steps")
            if (steps != null) trySend(steps)
        }
    }
    measureClient.registerMeasureCallback(DataType.STEPS, callback)
    awaitClose {
        measureClient.unregisterMeasureCallbackAsync(DataType.STEPS, callback)
    }
}

fun mockHeartRateFlow() = flow {
    while (true) {
        emit((60..100).random().toString())
        delay(2000)
    }
}

fun mockStepsFlow() = flow {
    while (true) {
        emit((1000..10000).random().toString())
        delay(2000)
    }
}

suspend fun sendDataToServer(dataMetric: JSONObject) {
    withContext(Dispatchers.IO) {
        try {
            // TODO: Add url parameters dinamically based on logged in user account on wearos
            val url = URL("http://192.168.88.210:8080/api/v1/iot?username=david&device=Thermometer")
            val connection = url.openConnection() as HttpURLConnection
            connection.requestMethod = "POST"
            connection.setRequestProperty("Content-Type", "application/json; charset=UTF-8")
            connection.doOutput = true

            OutputStreamWriter(connection.outputStream).use { writer ->
                writer.write(dataMetric.toString())
                writer.flush()
            }

            val responseCode = connection.responseCode
            if (responseCode == HttpURLConnection.HTTP_OK) {
                Log.d("WearOS", "Successfully sent data: $dataMetric")
            } else {
                Log.e("WearOS", "Failed to send data. Response code: $responseCode")
            }
            connection.disconnect()
        } catch (e: Exception) {
            Log.e("WearOS", "Exception while sending data", e)
        }
    }
}

@Composable
fun WearApp(
    heartRate: String,
    steps: String,
    toggleMock: () -> Unit
) {
    HealthMateWatchOSTheme {
        Box(
            modifier = Modifier
                .fillMaxSize()
                .background(Color.Black)
                .padding(16.dp),
            contentAlignment = Alignment.Center
        ) {
            Column(
                horizontalAlignment = Alignment.CenterHorizontally,
                verticalArrangement = Arrangement.Center
            ) {
                Text("Heart Rate", color = Color.Gray, textAlign = TextAlign.Center)
                Text("$heartRate bpm", color = Color.White, textAlign = TextAlign.Center)
                Spacer(modifier = Modifier.height(16.dp))
                Text("Steps", color = Color.Gray, textAlign = TextAlign.Center)
                Text("$steps", color = Color.White, textAlign = TextAlign.Center)
                Spacer(modifier = Modifier.height(24.dp))
                Text(
                    "Toggle Mock Data",
                    color = Color.White,
                    modifier = Modifier
                        .clickable { toggleMock() }
                        .background(Color.DarkGray)
                        .padding(horizontal = 12.dp, vertical = 6.dp)
                )
            }
        }
    }
}
