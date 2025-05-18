package com.medihub.medihubbackend.domain.many_to_many;

import com.medihub.medihubbackend.domain.EnvRiskFactors;
import com.medihub.medihubbackend.domain.Illness;
import jakarta.persistence.*;
import lombok.AllArgsConstructor;
import lombok.NoArgsConstructor;

@Entity
@IdClass(IllnessEnvRiskId.class)
@AllArgsConstructor
@NoArgsConstructor
public class IllnessLinkedEnvRiskFactor {
    @Id
    @ManyToOne
    EnvRiskFactors envRiskFactor;

    @Id
    @ManyToOne
    Illness illness;

    double correlationPoint;
}
