package com.example.model;

import lombok.Data;

import javax.persistence.*;
import java.util.List;

@Data
@Entity
public class Societe  {

        @Id
        @GeneratedValue(strategy = GenerationType.IDENTITY)
        private String societe_id;

        private String societe_nom;

        private Long societe_type;

        private String abrv;

//        @OneToMany(mappedBy="societe")
//        private List<Etablissement> etablissement;
}

