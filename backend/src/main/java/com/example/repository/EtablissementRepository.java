package com.example.repository;

import com.example.model.Etablissement;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.stereotype.Repository;

@Repository
public interface EtablissementRepository  extends JpaRepository<Etablissement, String> {
    @Query( "SELECT
    centre_fort as centre_fort_id,
    centre_fort.centre_fort_libelle,
    etablissement.etablissement_id,
    etablissement.etablissement_libelle,
    societe.societe_id,
    societe.societe_type,
    societe.societe_nom,
    societe.abrv
            FROM
    public.societe,
    public.etablissement,
    public.centre_fort
            WHERE
    societe.societe_id = etablissement.societe_id AND
    centre_fort.centre_fort_id = etablissement.centre_fort_id;)
    @Query("select  centre_fort_id and centre_fort_libelle from centre_fort
            where centre_fort.centre_fort_id = etablissement.centre_fort_id")
}
