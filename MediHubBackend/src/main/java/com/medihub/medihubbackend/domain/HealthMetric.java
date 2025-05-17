package com.medihub.medihubbackend.domain;

import jakarta.persistence.Entity;
import jakarta.persistence.Id;
import jakarta.persistence.ManyToMany;

import java.util.List;

@Entity
public class HealthMetric {
    @Id
    String name;

    @ManyToMany
    List<DeviceData> measuredBy;
}
