package com.example.repository;

import com.example.model.Societe;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.stereotype.Repository;

@Repository
public interface SocieteRepository extends JpaRepository<Societe, String> {

    @Query("SELECT u FROM Societe u WHERE u.societe_id = ?1")
    Societe findBySociete_id(String id);}
