package com.medihub.medihubbackend.data_utils;

import com.medihub.medihubbackend.domain.Device;
import com.medihub.medihubbackend.domain.DeviceData;
import com.medihub.medihubbackend.domain.HealMetric;
import com.medihub.medihubbackend.domain.MediHubUser;
import com.medihub.medihubbackend.repositories.DeviceDataRepo;
import com.medihub.medihubbackend.repositories.DeviceRepo;
import com.medihub.medihubbackend.repositories.HealthMetricRepo;
import com.medihub.medihubbackend.repositories.MediHubUserRepo;
import org.springframework.stereotype.Service;

import java.time.LocalDateTime;
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
        this.mediHubUserRepo=mediHubUserRepo;
        this.deviceRepo = deviceRepo;
    }

    private static Map<String, List<String>> DEVICE_NAME_TO_HEALTH_METRIC = new HashMap<>();

    private List<HealMetric> findHealthMetrics(List<String> healthMetricNames){
        return this.healthMetricRepo.findByNameIn(healthMetricNames);
    }

    //DevideName e idto na devicot
    public void processData(List<Map<String,String>> data,String username, String deviceName){
        MediHubUser user = this.mediHubUserRepo.findByUsername(username);
        Device device = this.deviceRepo.findByNameAndRegisterFor(deviceName,user);

        data.forEach(map->{
            map.forEach((k,v) -> {
                DeviceData deviceData = new DeviceData();

                deviceData.setData(v);
                deviceData.setMeasuredAt(LocalDateTime.now());
                deviceData.setForHealthMetric(findHealthMetrics(DEVICE_NAME_TO_HEALTH_METRIC.get(k)));
                deviceData.setDeviceDataName(k);

                deviceDataRepo.save(deviceData);
                device.getGenerates().add(deviceData);
            });
        }) ;

        deviceRepo.save(device);
    }
}
