package com.medihub.medihubbackend.repositories;

import com.medihub.medihubbackend.domain.DeviceData;
import org.springframework.data.jpa.repository.JpaRepository;

public interface DeviceDataRepo extends JpaRepository<DeviceData, Long> {
}
