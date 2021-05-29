package com.example.model;

import com.fasterxml.jackson.annotation.JsonIgnore;
import com.fasterxml.jackson.annotation.JsonManagedReference;
import lombok.Data;

import javax.persistence.*;
import java.io.Serializable;
import java.util.List;

@Data
@Entity
public class Centre_fort implements Serializable  {

    @Id
    private Long centre_fort_id;

    private String centre_fort_libelle;

//    @ManyToOne(fetch = FetchType.LAZY,optional = false)
//    @JoinColumn(name = "societe_id",nullable = false, insertable = false, updatable = false)
//    @JsonBackReference
//    private Societe societe;

    @OneToMany( mappedBy = "centre_fort")
    @Column(nullable = false)
    @JsonIgnore
    private List<Etablissement> etablissements;



    @OneToMany( mappedBy = "centre_fort")
    @Column(nullable = false)
    @JsonIgnore
    private List<Passage> passages;
}
