package com.example.repository;

import com.example.model.Etablissement;
import com.example.model.Societe;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import java.util.List;


@Repository
public interface EtablissementRepository extends JpaRepository<Etablissement, String> {

    public List<Etablissement> findEtablissementsBySociete(Societe societe);
}
