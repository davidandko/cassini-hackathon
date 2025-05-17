package com.medihub.medihubbackend.web;

import com.medihub.medihubbackend.data_utils.IngressIotDataProcessor;
import org.springframework.http.ResponseEntity;
import org.springframework.stereotype.Controller;
import org.springframework.stereotype.Repository;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestParam;

import java.util.Map;

@Controller
@RequestMapping("/medihub/ingress/api/v1")
public class IotIngressController {


    @PostMapping("/{username}/{device}/")
    public ResponseEntity<Void> ingressData(
            @RequestParam Map<String,String> deviceDataNameMesaurments,
            IngressIotDataProcessor iotDataProcessor
    ){
        iotDataProcessor.processData(deviceDataNameMesaurments);
        return ResponseEntity.ok().build();
    }
}
