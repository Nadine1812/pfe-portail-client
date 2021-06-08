package com.example.repository;

import com.example.model.Passage;
import com.example.model.Societe;
import org.springframework.data.jpa.repository.JpaRepository;

import org.springframework.data.jpa.repository.Query;
import org.springframework.stereotype.Repository;

import java.util.List;

@Repository
public interface PassageRepository extends JpaRepository<Passage, Long> {
//    @Query("SELECT u FROM Passage p,Etablissement p,Societe s WHERE s.societe_id = ?1")
    @Query("select p from Passage p where p.etablissement.societe= ?1")
    public List<Passage> findPassagesBySociete(Societe societe);

}
