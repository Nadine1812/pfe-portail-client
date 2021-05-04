package com.example.model;

import lombok.Data;

import javax.persistence.*;
import java.io.Serializable;
import java.util.List;

@Data
@Entity
public class Centre_fort implements Serializable {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long centre_fort_id;

    @Id
    private String societe_id;

    private String centre_fort_libelle;


}
