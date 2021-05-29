package com.example.model;

import com.fasterxml.jackson.annotation.JsonManagedReference;
import lombok.Data;

import javax.persistence.*;
import java.io.Serializable;
import java.util.List;

@Entity
@Data
public class Societe implements Serializable {

    @Id
    private String societe_id;

    private String societe_nom;

    private Number societe_type;

    private String   abrv;

    @OneToMany(mappedBy = "societe", cascade = CascadeType.ALL)
    @Column(nullable = true)
//    @JsonManagedReference
    private List<Etablissement> etablissements;

//    @OneToMany(mappedBy = "societe", cascade = CascadeType.ALL)
//    @Column(nullable = true)
//    @JsonManagedReference
//    private List<Centre_fort> centre_forts;
}
