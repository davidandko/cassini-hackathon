package com.medihub.medihubbackend.repositories;

import com.medihub.medihubbackend.domain.Device;
import org.springframework.data.jpa.repository.JpaRepository;

public interface DeviceRepo extends JpaRepository<Device, Long> {
}
