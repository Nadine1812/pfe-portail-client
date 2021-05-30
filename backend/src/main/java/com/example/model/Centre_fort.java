package com.example.model;

import lombok.Data;

import javax.persistence.*;
import java.io.Serializable;

@Data
@Entity
public class Centre_fort implements Serializable {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long centre_fort_id;

    private String centre_fort_libelle;

    @ManyToOne
    @JoinColumn(name = "societe_id")
    private Societe societe;

}
