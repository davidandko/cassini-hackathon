package com.medihub.medihubbackend.domain;

import jakarta.persistence.Entity;
import jakarta.persistence.Id;
import jakarta.persistence.ManyToOne;
import jakarta.persistence.OneToMany;

import java.util.List;

@Entity
public class MediHubUser {
    @Id
    String username;

    @OneToMany
    List<Device> registeredDevices;

    double currentLongtitude;
    double currentLatitude;
}

