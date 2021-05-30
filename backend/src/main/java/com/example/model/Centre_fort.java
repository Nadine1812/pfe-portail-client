package com.example.model;

import com.fasterxml.jackson.annotation.JsonIgnore;
import lombok.Data;

import javax.persistence.*;
import java.io.Serializable;
import java.util.List;

@Data
@Entity
public class Centre_fort implements Serializable {

    @Id
    private String centre_fort_id;

    private String centre_fort_libelle;

    @ManyToOne
    @JoinColumn(name = "societe_id")
    private Societe societe;

    @OneToMany(mappedBy = "centre_fort")
    @JsonIgnore
    private List<Etablissement> etablissements;
}
