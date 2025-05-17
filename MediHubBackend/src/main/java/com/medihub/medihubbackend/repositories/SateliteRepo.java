package com.medihub.medihubbackend.repositories;

import com.medihub.medihubbackend.domain.Satelite;
import org.springframework.data.jpa.repository.JpaRepository;

public interface SateliteRepo extends JpaRepository<Satelite, String> {
}
