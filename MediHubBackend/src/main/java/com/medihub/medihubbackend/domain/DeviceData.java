package com.medihub.medihubbackend.domain;

import jakarta.persistence.*;
import lombok.Data;

import java.time.LocalDateTime;
import java.util.List;

@Entity
@Data
public class DeviceData {
    @Id
    @GeneratedValue(strategy = GenerationType.SEQUENCE)
    Long id;
    String data;
    String deviceDataName;
    LocalDateTime measuredAt;

    @ManyToMany(mappedBy = "measuredIn")
    List<HealMetric> forHealthMetric;
}
