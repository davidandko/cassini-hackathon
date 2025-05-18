package com.medihub.medihubbackend.data_utils;

import com.medihub.medihubbackend.domain.Device;
import com.medihub.medihubbackend.domain.DeviceData;
import com.medihub.medihubbackend.domain.HealthMetric;
import com.medihub.medihubbackend.domain.MediHubUser;
import com.medihub.medihubbackend.repositories.DeviceDataRepo;
import com.medihub.medihubbackend.repositories.DeviceRepo;
import com.medihub.medihubbackend.repositories.HealthMetricRepo;
import com.medihub.medihubbackend.repositories.MediHubUserRepo;
import org.springframework.stereotype.Service;

import java.util.HashMap;
import java.util.List;
import java.util.Map;

@Service
public class IngressIotDataProcessor {

    private DeviceDataRepo deviceDataRepo;
    private HealthMetricRepo healthMetricRepo;
    private MediHubUserRepo mediHubUserRepo;
    private DeviceRepo deviceRepo;

    public IngressIotDataProcessor(
            DeviceDataRepo deviceDataRepo,
            HealthMetricRepo healthMetricRepo,
            MediHubUserRepo mediHubUserRepo,
            DeviceRepo deviceRepo
    ) {
        this.deviceDataRepo = deviceDataRepo;
        this.healthMetricRepo = healthMetricRepo;
        this.mediHubUserRepo = mediHubUserRepo;
        this.deviceRepo = deviceRepo;
    }

    private static Map<String, List<String>> DEVICE_NAME_TO_HEALTH_METRIC = new HashMap<>();

    private List<HealthMetric> findHealthMetrics(List<String> healthMetricNames) {
        return this.healthMetricRepo.findByNameIn(healthMetricNames);
    }

    //DevideName e idto na devicot
    public void processData(IotDTO data, String username, String deviceName) {
        MediHubUser user = this.mediHubUserRepo.findByUsername(username);
        Device device = this.deviceRepo.findByName(deviceName);


        DeviceData deviceData = new DeviceData();
        HealthMetric metric = this.healthMetricRepo.findByName(data.getMetricName());
        deviceData.setHealthMetric(metric);
        deviceData.setValue(data.getValue());
        deviceData.setMeasuredAt(data.getTimestamp());
        deviceDataRepo.save(deviceData);
        System.out.println("data: " + data.toString());


        deviceRepo.save(device);
    }
}
