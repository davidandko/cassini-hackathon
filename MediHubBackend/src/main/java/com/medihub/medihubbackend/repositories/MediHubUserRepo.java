package com.medihub.medihubbackend.repositories;

import com.medihub.medihubbackend.domain.MediHubUser;
import org.springframework.data.jpa.repository.JpaRepository;

public interface MediHubUserRepo extends JpaRepository<MediHubUser, String> {
    MediHubUser findByUsername(String username);
}
