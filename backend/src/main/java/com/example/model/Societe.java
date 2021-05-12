package com.example.model;

import com.fasterxml.jackson.annotation.JsonIgnoreProperties;
import lombok.Data;

import javax.persistence.*;
import java.util.Set;

@Data
@Entity
public class Societe {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private String societe_id;

    private String societe_nom;

    private Long societe_type;

    private String abrv;

//    @OneToMany(mappedBy = "societe", cascade = CascadeType.ALL)
//    @JsonIgnoreProperties("societe")
//    private Set<Etablissement> etablissements;
}

