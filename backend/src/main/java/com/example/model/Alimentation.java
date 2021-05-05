package com.example.model;

import lombok.Data;

import javax.persistence.*;
import java.io.Serializable;

@Data
@Entity
@IdClass(Alimentation.class)
public class Alimentation  implements Serializable {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long alimentation_id;

    @Id
    private Long  passage_id;

    private Long font_type_id;

    private Long qte;

    private Long montant;


}
