package com.example.model;

import lombok.Data;

import javax.persistence.*;
import java.io.Serializable;

@Data
@Entity
public class Etablissement implements Serializable {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private String etablissement_id;

    @Id
    private String societe_id;

    private Long centre_fort_id;

    private String cen_societe_id;

    private String etablissement_libelle;

    @ManyToOne
    @JoinColumn(name="societe_id")
    private Societe societe;


}
