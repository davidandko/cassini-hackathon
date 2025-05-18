package com.medihub.medihubbackend.domain.many_to_many;

import com.medihub.medihubbackend.domain.EnvRiskFactors;
import com.medihub.medihubbackend.domain.Illness;
import jakarta.persistence.Embeddable;
import jakarta.persistence.ManyToOne;

@Embeddable
public class IllnessEnvRiskId {
    @ManyToOne
    EnvRiskFactors envRiskFactor;

    @ManyToOne
    Illness illness;
}
