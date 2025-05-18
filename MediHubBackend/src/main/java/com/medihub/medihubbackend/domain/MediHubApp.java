package com.medihub.medihubbackend.domain;

import jakarta.persistence.*;

import java.util.List;

@Entity
public class MediHubApp {
    @Id
    @GeneratedValue(strategy = GenerationType.AUTO)
    String appId;
    String apiKey;
    @ManyToMany
    List<HealthMetric> requiredHealthMetrics;
}
