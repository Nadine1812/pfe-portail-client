package com.example.repository;

import com.example.model.Centre_fort;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

@Repository
public interface CentreFortRepository extends JpaRepository<Centre_fort, Long> {
}
