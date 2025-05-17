package com.medihub.medihubbackend.domain;

import jakarta.persistence.*;

import java.time.LocalDateTime;
import java.util.List;

@Entity
public class DeviceData {
    @Id
    @GeneratedValue(strategy = GenerationType.SEQUENCE)
    Long id;
    Double data;
    String deviceDataName;
    LocalDateTime measuredAt;

    @ManyToMany(mappedBy = "measuredIn")
    List<HealMetric> forHealthMetric;
}
