package com.example.model;
import lombok.Data;
import javax.persistence.*;

@Data
@Entity
public class Font_type {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long font_type_id;

    private String libelle;

}
