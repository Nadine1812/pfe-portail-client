package com.example.model;

import com.fasterxml.jackson.annotation.JsonBackReference;
import lombok.Data;

import javax.persistence.*;
import java.io.Serializable;

@Data
@Entity
@IdClass(Etablissement.class)
public class Etablissement implements Serializable {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private String etablissement_id;

    @Id
    private String societe_id;

    private String centre_fort_id;

    private String cen_societe_id;

    private String etablissement_libelle;

    @ManyToOne(fetch = FetchType.LAZY,optional = false)
    @JoinColumn(name = "societe_id",insertable=false, updatable=false)
    @JsonBackReference
    private Societe societe;


}
