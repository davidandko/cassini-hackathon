package com.medihub.medihubbackend.data_utils;

import com.medihub.medihubbackend.domain.DeviceData;
import com.medihub.medihubbackend.domain.HealMetric;
import com.medihub.medihubbackend.repositories.DeviceDataRepo;
import com.medihub.medihubbackend.repositories.HealthMetricRepo;
import org.springframework.stereotype.Service;

import java.time.LocalDateTime;
import java.util.HashMap;
import java.util.List;
import java.util.Map;

@Service
public class IngressIotDataProcessor {

    private DeviceDataRepo deviceDataRepo;
    private HealthMetricRepo healthMetricRepo;

    public IngressIotDataProcessor(
            DeviceDataRepo deviceDataRepo,
            HealthMetricRepo healthMetricRepo
    ) {
        this.deviceDataRepo = deviceDataRepo;
        this.healthMetricRepo = healthMetricRepo;
    }

    private static Map<String, List<String>> DEVICE_NAME_TO_HEALTH_METRIC = new HashMap<>();

    private List<HealMetric> findHealthMetrics(List<String> healthMetricNames){
        return this.healthMetricRepo.findByNameIn(healthMetricNames);
    }

    public void processData(Map<String,String> data){
        data.forEach((k,v)->{
            DeviceData deviceData = new DeviceData();

            deviceData.setData(v);
            deviceData.setMeasuredAt(LocalDateTime.now());
            deviceData.setForHealthMetric(findHealthMetrics(DEVICE_NAME_TO_HEALTH_METRIC.get(k)));
            deviceData.setDeviceDataName(k);

            deviceDataRepo.save(deviceData);
        }) ;
    }
}
