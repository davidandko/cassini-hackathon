package com.medihub.medihubbackend.web;

import com.medihub.medihubbackend.data_utils.IngressIotDataProcessor;
import com.medihub.medihubbackend.data_utils.IotDTO;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping("/api/v1")
public class DataAggregationApi {
    private IngressIotDataProcessor processor;

    public DataAggregationApi(IngressIotDataProcessor iotDataProcessor) {
        this.processor = iotDataProcessor;
    }

    @PostMapping("/iot")
    public ResponseEntity<Void> ingressData(
            @RequestBody IotDTO data,
            @RequestParam String username,
            @RequestParam String device
    ){
        processor.processData(data,username,device);
        return ResponseEntity.status(301).build();
    }
    @GetMapping("/sync")
    public void syncDataWithCopernicus(@RequestParam String username, @RequestParam String device){
        
    }

}
