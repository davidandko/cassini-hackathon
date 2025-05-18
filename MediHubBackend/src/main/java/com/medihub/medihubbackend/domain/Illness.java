package com.medihub.medihubbackend.domain;

import com.medihub.medihubbackend.domain.many_to_many.IllnessLinkedEnvRiskFactor;
import jakarta.persistence.*;

import java.util.List;

@Entity
public class Illness {
    @Id
    String name;

    @OneToMany(mappedBy = "illness")
    List<IllnessLinkedEnvRiskFactor> envRiskFactorsInfluence;

    @ManyToMany
    List<HealthMetric> healMetricsInfluence;

}
