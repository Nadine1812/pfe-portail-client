package com.example.model;

import com.fasterxml.jackson.annotation.JsonBackReference;
import com.fasterxml.jackson.annotation.JsonIgnore;
import lombok.Data;

import javax.persistence.*;
import java.io.Serializable;

@Data
@Entity
public class Etablissement implements Serializable {

    @Id
    private String etablissement_id;

    private String etablissement_libelle;

    @ManyToOne(fetch = FetchType.EAGER,optional = false)
    @JoinColumn(name = "societe_id",insertable=false, updatable=false)
    private Societe societe;

    @ManyToOne
    @JoinColumn(name = "centre_fort_id")
    private Centre_fort centre_fort;


}
