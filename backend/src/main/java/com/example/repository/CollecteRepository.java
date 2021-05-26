package com.example.repository;

import com.example.model.Collecte;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

@Repository
public interface CollecteRepository extends JpaRepository<Collecte, Long> {
}
