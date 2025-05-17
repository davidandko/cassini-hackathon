package com.medihub.medihubbackend.domain;

import jakarta.persistence.*;

import java.util.List;

@Entity
public class Device {
    @Id
    @GeneratedValue(strategy = GenerationType.AUTO)
    Long id;
    String name;

    @ManyToMany
    List<DeviceData> generates;

    @ManyToOne
    MediHubUser registerFor;
}
