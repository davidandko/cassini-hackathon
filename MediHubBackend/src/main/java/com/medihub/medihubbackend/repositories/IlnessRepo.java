package com.medihub.medihubbackend.repositories;

import com.medihub.medihubbackend.domain.Illness;
import org.springframework.data.jpa.repository.JpaRepository;

public interface IlnessRepo extends JpaRepository<Illness, String> {
}
