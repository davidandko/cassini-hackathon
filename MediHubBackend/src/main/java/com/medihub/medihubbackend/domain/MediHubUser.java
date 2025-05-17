package com.medihub.medihubbackend.domain;

import jakarta.persistence.Entity;
import jakarta.persistence.Id;
import jakarta.persistence.ManyToOne;
import jakarta.persistence.OneToMany;
import lombok.Data;

import java.util.List;

@Entity
@Data
public class MediHubUser {
    @Id
    String username;

    @OneToMany
    List<Device> registeredDevices;

    double currentLongtitude;
    double currentLatitude;
}

