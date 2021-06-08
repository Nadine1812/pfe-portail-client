package com.example.repository;

import com.example.model.Alimentation;
import com.example.model.Collecte;
import com.example.model.Societe;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.stereotype.Repository;

import java.util.List;

@Repository
public interface CollecteRepository extends JpaRepository<Collecte, Long> {
    @Query("select c from Collecte c where c.passage.etablissement.societe= ?1")
    public List<Collecte> findCollectesBySociete(Societe societe);
}
