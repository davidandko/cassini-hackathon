package com.medihub.medihubbackend.repositories;

import com.medihub.medihubbackend.domain.HealMetric;
import org.springframework.data.jpa.repository.JpaRepository;

import java.util.Collection;
import java.util.List;

public interface HealthMetricRepo extends JpaRepository<HealMetric,String> {
    List<HealMetric> findByNameIn(Collection<String> names);
}
