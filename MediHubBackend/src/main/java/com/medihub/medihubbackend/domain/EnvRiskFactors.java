package com.medihub.medihubbackend.domain;

import com.medihub.medihubbackend.domain.many_to_many.IllnessLinkedEnvRiskFactor;
import jakarta.persistence.*;

import java.util.List;

@Entity
public class EnvRiskFactors {
    @Id
    @GeneratedValue(strategy = GenerationType.AUTO)
    private Long id;

    String name;

    @OneToMany(mappedBy = "envRiskFactor")
    List<IllnessLinkedEnvRiskFactor> riskFactors;

    @ManyToMany
    List<SateliteMetric> measuredByMetrics;
}
