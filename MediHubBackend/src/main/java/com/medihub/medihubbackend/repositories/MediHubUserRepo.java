package com.medihub.medihubbackend.repositories;

import com.medihub.medihubbackend.domain.MediHubUser;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

@Repository
public interface MediHubUserRepo extends JpaRepository<MediHubUser, String> {
    MediHubUser findByUsername(String username);
}
