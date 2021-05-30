package com.example.model;

import com.fasterxml.jackson.annotation.JsonIgnore;
import lombok.Data;

import javax.persistence.*;
import java.util.HashSet;
import java.util.List;
import java.util.Set;

@Data
@Entity
public class Collecte {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long collecte_id;

    private Long qte;

    private Long montant;

    @OneToOne
    @JoinColumn(name = "passage_id")
    private Passage passage;

    @ManyToOne
    @JoinColumn(name = "font_type_id")
    private Font_type font_type;
}
