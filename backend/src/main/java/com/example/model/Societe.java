package com.example.model;

import lombok.Data;

import javax.persistence.*;
import java.io.Serializable;
import java.util.List;

@Data
@Entity
public class Societe implements Serializable {

        @Id
        @GeneratedValue(strategy = GenerationType.IDENTITY)
        private String societe_id;

        private String societe_nom;

        private Long societe_type;

        private String abrv;

    }
