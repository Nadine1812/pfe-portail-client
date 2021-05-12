package com.example.model;

import lombok.Data;

import javax.persistence.*;
import java.io.Serializable;
import java.util.List;

@Data
@Entity
@IdClass(Etablissement.class)
public class Etablissement implements Serializable {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private String etablissement_id;

    @Id
    private String societe_id;

    private Long centre_fort_id;

    private String cen_societe_id;

    private String etablissement_libelle;


//    @ManyToOne
//    Societe Societe;

}
