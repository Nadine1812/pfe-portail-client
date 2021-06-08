package com.example.repository;

import com.example.model.Alimentation;
import com.example.model.Societe;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.stereotype.Repository;

import java.util.List;


@Repository
public interface AlimentationRepository extends JpaRepository<Alimentation, Long> {
    @Query("select a from Alimentation a where a.passage.etablissement.societe= ?1")
    public List<Alimentation> findAlimentationsBySociete(Societe societe);
}
