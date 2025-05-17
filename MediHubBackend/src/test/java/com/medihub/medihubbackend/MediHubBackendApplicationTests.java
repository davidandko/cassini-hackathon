package com.medihub.medihubbackend;

import com.medihub.medihubbackend.data_utils.IngressIotDataProcessor;
import com.medihub.medihubbackend.domain.Device;
import com.medihub.medihubbackend.domain.MediHubUser;
import com.medihub.medihubbackend.repositories.DeviceDataRepo;
import com.medihub.medihubbackend.repositories.DeviceRepo;
import com.medihub.medihubbackend.repositories.HealthMetricRepo;
import com.medihub.medihubbackend.repositories.MediHubUserRepo;
import org.junit.jupiter.api.Test;
import org.junit.jupiter.api.extension.ExtendWith;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.test.context.SpringBootTest;
import org.springframework.test.context.bean.override.mockito.MockitoBean;
import org.springframework.test.context.bean.override.mockito.MockitoBeans;
import org.springframework.test.context.junit.jupiter.SpringExtension;


import java.util.List;
import java.util.Map;

import static org.mockito.Mockito.*;

@SpringBootTest
@ExtendWith(SpringExtension.class)
class MediHubBackendApplicationTests {

    @MockitoBean
    DeviceDataRepo deviceDataRepo;

    @MockitoBean
    HealthMetricRepo healthMetricRepo;

    @MockitoBean
    MediHubUserRepo mediHubUserRepo;

    @MockitoBean
    DeviceRepo deviceRepo;

    @Test
    void contextLoads(IngressIotDataProcessor ingressIotDataProcessor) {
        String testUsername="we";
        String testDeviceName="dev1";

        MediHubUser testUser = new MediHubUser();
        Device testDevice = new Device();

        testUser.setUsername(testUsername);
        testDevice.setRegisterFor(testUser);

//        when(deviceRepo.findByNameAndRegisterFor()).thenReturn()

        List<Map<String,String>> mockData=List.of(
                Map.of("timestamp", "2025-05-17T08:00:00Z", "heartRate", "62",  "confidence", "0.95"),
                Map.of("timestamp", "2025-05-17T08:01:00Z", "heartRate", "64",  "confidence", "0.97"),
                Map.of("timestamp", "2025-05-17T08:02:00Z", "heartRate", "68",  "confidence", "0.92"),
                Map.of("timestamp", "2025-05-17T08:03:00Z", "heartRate", "72",  "confidence", "0.98"),
                Map.of("timestamp", "2025-05-17T08:04:00Z", "heartRate", "78",  "confidence", "0.99"),
                Map.of("timestamp", "2025-05-17T08:05:00Z", "heartRate", "85",  "confidence", "0.96"),
                Map.of("timestamp", "2025-05-17T08:06:00Z", "heartRate", "95",  "confidence", "0.94"),
                Map.of("timestamp", "2025-05-17T08:07:00Z", "heartRate", "102", "confidence", "0.90"),
                Map.of("timestamp", "2025-05-17T08:08:00Z", "heartRate", "110", "confidence", "0.88"),
                Map.of("timestamp", "2025-05-17T08:09:00Z", "heartRate", "117", "confidence", "0.91")
        );

        ingressIotDataProcessor.processData(mockData,);
    }

}
