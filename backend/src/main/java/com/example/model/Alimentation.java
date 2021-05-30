package com.example.model;

import lombok.Data;
import javax.persistence.*;
import java.io.Serializable;

@Data
@Entity
public class Alimentation implements Serializable {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long alimentation_id;

    private Long qte;

    private Long montant;

    @OneToOne
    @JoinColumn(name = "passage_id")
    private Passage passage;

    @ManyToOne
    @JoinColumn(name = "font_type_id")
    private Font_type font_type;
}
