package com.medihub.medihubbackend.domain;

import jakarta.persistence.Entity;
import jakarta.persistence.Id;
import jakarta.persistence.ManyToOne;
import jakarta.persistence.OneToMany;
import lombok.Data;

import java.util.List;

@Entity
public class MediHubUser {
    @Id
    String username;

    @OneToMany
    List<Device> registeredDevices;

    double currentLongtitude;
    double currentLatitude;

    public String getUsername() {
        return username;
    }

    public void setUsername(String username) {
        this.username = username;
    }

    public List<Device> getRegisteredDevices() {
        return registeredDevices;
    }

    public void setRegisteredDevices(List<Device> registeredDevices) {
        this.registeredDevices = registeredDevices;
    }

    public double getCurrentLongtitude() {
        return currentLongtitude;
    }

    public void setCurrentLongtitude(double currentLongtitude) {
        this.currentLongtitude = currentLongtitude;
    }

    public double getCurrentLatitude() {
        return currentLatitude;
    }

    public void setCurrentLatitude(double currentLatitude) {
        this.currentLatitude = currentLatitude;
    }
}

