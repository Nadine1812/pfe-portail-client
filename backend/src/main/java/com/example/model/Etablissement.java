package com.example.model;

import lombok.Data;

import javax.persistence.*;
import java.io.Serializable;
import java.util.List;

@Data
@Entity
public class Etablissement implements Serializable {

    @Id
    private String etablissement_id;

    private String etablissement_libelle;

    @ManyToOne
    @JoinColumn(name = "societe_id")
    private Societe societe;

    @ManyToOne
    @JoinColumn(name = "centre_fort_id")
    private Centre_fort centre_fort;
}
