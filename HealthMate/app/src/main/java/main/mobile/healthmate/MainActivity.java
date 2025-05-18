package main.mobile.healthmate;

import android.net.Uri;
import android.os.Bundle;
import android.util.Log;
import android.widget.TextView;
import androidx.appcompat.app.AppCompatActivity;
import androidx.lifecycle.MutableLiveData;
import com.google.android.gms.wearable.*;

public class MainActivity extends AppCompatActivity implements DataClient.OnDataChangedListener {

    private static final String TAG = "HealthMatePhone";
    private static final String HEART_RATE_PATH = "/heart_rate";
    private TextView heartRateTextView;
    private MutableLiveData<String> heartRateLiveData = new MutableLiveData<>("");

    @Override
    protected void onCreate(Bundle savedInstanceState) {
        super.onCreate(savedInstanceState);
        setContentView(R.layout.activity_main);
        // Try this temporarily to catch all data
        Wearable.getDataClient(this).addListener(this);

        heartRateTextView = findViewById(R.id.heartRateTextView);

        // Initialize with placeholder
        heartRateTextView.setText("Heart Rate: -- bpm");

        // Observe heart rate changes
        heartRateLiveData.observe(this, heartRate -> {
            heartRateTextView.setText("Heart Rate: " + heartRate + " bpm");
        });

        // Check for connected wearable devices
        checkConnectedNodes();
    }

    @Override
    protected void onResume() {
        super.onResume();
        // TEMPORARY: Listen to all data events (unfiltered)
        Wearable.getDataClient(this).addListener(this);
        Log.d(TAG, "Unfiltered DataClient listener added in onResume");
    }


    @Override
    protected void onPause() {
        super.onPause();
        // Unregister data listener when activity is not visible
        Wearable.getDataClient(this).removeListener(this);
        Log.d(TAG, "DataClient listener removed in onPause");
    }

    @Override
    protected void onDestroy() {
        super.onDestroy();
        // Safety check to ensure listener is removed
        Wearable.getDataClient(this).removeListener(this);
        Log.d(TAG, "DataClient listener removed in onDestroy");
    }

    // Check for connected wearable devices
    private void checkConnectedNodes() {
        Log.d(TAG, "Checking connected wearable devices");
        Wearable.getNodeClient(this).getConnectedNodes()
                .addOnSuccessListener(nodes -> {
                    if (nodes.isEmpty()) {
                        Log.d(TAG, "No connected wearable devices found");
                        runOnUiThread(() -> {
                            heartRateTextView.setText("No watch connected. Please connect your watch.");
                        });
                    } else {
                        for (Node node : nodes) {
                            Log.d(TAG, "Connected wearable: " + node.getDisplayName() + ", id: " + node.getId());
                        }
                        runOnUiThread(() -> {
                            heartRateTextView.setText("Watch connected. Waiting for heart rate data...");
                        });
                    }
                })
                .addOnFailureListener(e -> {
                    Log.e(TAG, "Failed to get connected nodes", e);
                });
    }

    @Override
    public void onDataChanged(DataEventBuffer dataEvents) {
        for (DataEvent event : dataEvents) {
            if (event.getType() == DataEvent.TYPE_CHANGED) {
                String path = event.getDataItem().getUri().getPath();
                Log.d(TAG, "Data event received, path: " + path);

                if (path != null && path.startsWith(HEART_RATE_PATH)) {
                    DataMapItem dataMapItem = DataMapItem.fromDataItem(event.getDataItem());
                    String bpm = dataMapItem.getDataMap().getString("bpm");
                    long timestamp = dataMapItem.getDataMap().getLong("timestamp"); 

                    Log.d(TAG, "Received heart rate: " + bpm + " bpm, timestamp: " + timestamp);

                    // Update UI using LiveData to ensure it happens on the main thread
                    heartRateLiveData.postValue(bpm);
                }
            }
        }
    }
}