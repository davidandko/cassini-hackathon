package com.medihub.medihubbackend.domain;

import jakarta.persistence.*;
import lombok.Data;
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
    String deviceDataName;
    LocalDateTime measuredAt;

    @ManyToMany(mappedBy = "measuredIn")
    List<HealMetric> forHealthMetric;

    public Long getId() {
        return id;
    }

    public void setId(Long id) {
        this.id = id;
    }

    public String getData() {
        return data;
    }

    public void setData(String data) {
        this.data = data;
    }

    public String getDeviceDataName() {
        return deviceDataName;
    }

    public void setDeviceDataName(String deviceDataName) {
        this.deviceDataName = deviceDataName;
    }

    public LocalDateTime getMeasuredAt() {
        return measuredAt;
    }

    public void setMeasuredAt(LocalDateTime measuredAt) {
        this.measuredAt = measuredAt;
    }

    public List<HealMetric> getForHealthMetric() {
        return forHealthMetric;
    }

    public void setForHealthMetric(List<HealMetric> forHealthMetric) {
        this.forHealthMetric = forHealthMetric;
    }
}
