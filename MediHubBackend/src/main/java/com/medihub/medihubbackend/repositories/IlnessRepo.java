package com.medihub.medihubbackend.repositories;

import com.medihub.medihubbackend.domain.Ilness;
import org.springframework.data.jpa.repository.JpaRepository;

public interface IlnessRepo extends JpaRepository<Ilness, String> {
}
