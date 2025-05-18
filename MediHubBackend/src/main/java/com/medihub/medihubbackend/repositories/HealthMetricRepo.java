package com.medihub.medihubbackend.repositories;

import com.medihub.medihubbackend.domain.HealthMetric;
import org.springframework.data.jpa.repository.JpaRepository;

import java.util.Collection;
import java.util.List;

public interface HealthMetricRepo extends JpaRepository<HealthMetric,String> {
    List<HealthMetric> findByNameIn(Collection<String> names);
    HealthMetric findByName(String name);
}
