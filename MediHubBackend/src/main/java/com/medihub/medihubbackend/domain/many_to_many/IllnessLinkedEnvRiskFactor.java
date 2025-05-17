package com.medihub.medihubbackend.domain.many_to_many;

import com.medihub.medihubbackend.domain.EnvRiskFactors;
import com.medihub.medihubbackend.domain.Ilness;
import jakarta.persistence.*;

@Entity
@IdClass(IllnessEnvRiskId.class)
public class IllnessLinkedEnvRiskFactor {
    @Id
    @ManyToOne
    EnvRiskFactors envRiskFactor;

    @Id
    @ManyToOne
    Ilness illness;

    double correlationPoint;
}
