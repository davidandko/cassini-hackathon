package com.medihub.medihubbackend.repositories;

import com.medihub.medihubbackend.domain.SateliteMetric;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.repository.CrudRepository;

public interface SateliteMetricRepo extends JpaRepository<SateliteMetric, Long> {
}
