package com.example.DTO;

import lombok.Data;

@Data
public class SocieteModel {
    private String societe_id;

    private String societe_nom;

    private int societe_type;

    private String  abrv;

    public SocieteModel(String societe_id, String societe_nom, int societe_type, String abrv) {
        this.societe_id = societe_id;
        this.societe_nom = societe_nom;
        this.societe_type = societe_type;
        this.abrv = abrv;
    }
}
