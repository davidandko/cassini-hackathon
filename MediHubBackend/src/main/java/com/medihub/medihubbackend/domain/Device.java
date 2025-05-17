package com.medihub.medihubbackend.domain;

import jakarta.persistence.*;
import lombok.Data;

import java.util.List;

@Entity
public class Device {
    @Id
    @GeneratedValue(strategy = GenerationType.AUTO)
    Long id;
    String name;

    @ManyToMany
    List<DeviceData> generatedData;

    @ManyToOne
    MediHubUser registerFor;

    public Long getId() {
        return id;
    }

    public void setId(Long id) {
        this.id = id;
    }

    public String getName() {
        return name;
    }

    public void setName(String name) {
        this.name = name;
    }

    public List<DeviceData> getGeneratedData() {
        return generatedData;
    }

    public void setGeneratedData(List<DeviceData> generatedData) {
        this.generatedData = generatedData;
    }

    public MediHubUser getRegisterFor() {
        return registerFor;
    }

    public void setRegisterFor(MediHubUser registerFor) {
        this.registerFor = registerFor;
    }
}
