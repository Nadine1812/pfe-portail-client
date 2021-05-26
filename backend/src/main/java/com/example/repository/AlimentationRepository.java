package com.example.repository;

import com.example.model.Alimentation;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

@Repository
public interface AlimentationRepository extends JpaRepository<Alimentation, Long> {
}
