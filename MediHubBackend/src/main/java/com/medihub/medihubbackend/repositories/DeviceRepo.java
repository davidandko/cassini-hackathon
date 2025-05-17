package com.medihub.medihubbackend.repositories;

import com.medihub.medihubbackend.domain.Device;
import com.medihub.medihubbackend.domain.MediHubUser;
import org.springframework.data.jpa.repository.JpaRepository;

public interface DeviceRepo extends JpaRepository<Device, Long> {
    Device findByNameAndRegisterFor(String name, MediHubUser user);
}
