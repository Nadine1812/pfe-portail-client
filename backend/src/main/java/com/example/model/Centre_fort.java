package com.example.model;
import com.fasterxml.jackson.annotation.JsonBackReference;
import lombok.Data;
import javax.persistence.*;
import java.io.Serializable;

@Data
@Entity
@IdClass(Centre_fort.class)
public class Centre_fort implements Serializable  {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long centre_fort_id;

    @Id
    private String societe_id;

    private String centre_fort_libelle;

    @ManyToOne(fetch = FetchType.LAZY,optional = false)
    @JoinColumn(name = "societe_id",nullable = false, insertable = false, updatable = false)
    @JsonBackReference
    private Societe societe;
}
