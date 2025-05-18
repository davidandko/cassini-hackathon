package com.medihub.medihubbackend.domain;

import jakarta.persistence.*;
import lombok.Getter;
import lombok.Setter;

import java.time.LocalDateTime;
import java.util.List;

@Entity
@Getter
@Setter
public class DeviceData {
    @Id
    @GeneratedValue(strategy = GenerationType.SEQUENCE)
    Long id;
    String data;
    LocalDateTime measuredAt;
    String value;

    @ManyToOne
    HealthMetric healthMetric;

    public Long getId() {
        return id;
    }

    public void setId(Long id) {
        this.id = id;
    }

    public String getData() {
        return data;
    }

    public void setData(Object data) {
        this.data = (String) data;
    }

    public LocalDateTime getMeasuredAt() {
        return measuredAt;
    }

    public void setMeasuredAt(LocalDateTime measuredAt) {
        this.measuredAt = measuredAt;
    }

    public void setData(String data) {
        this.data = data;
    }

    public String getValue() {
        return value;
    }

    public void setValue(String value) {
        this.value = value;
    }

    public HealthMetric getHealthMetric() {
        return healthMetric;
    }

    public void setHealthMetric(HealthMetric forHealthMetric) {
        this.healthMetric = forHealthMetric;
    }
}
