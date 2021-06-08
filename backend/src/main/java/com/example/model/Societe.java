package com.example.model;

import javax.persistence.*;
import java.io.Serializable;


@Entity

public class Societe implements Serializable {

    @Id
    private String societe_id;

    private String societe_nom;

    private int societe_type;

    private String abrv;

    public Societe() {
    }

    public String getSociete_id() {
        return societe_id;
    }

    public void setSociete_id(String societe_id) {
        this.societe_id = societe_id;
    }

    public String getSociete_nom() {
        return societe_nom;
    }

    public void setSociete_nom(String societe_nom) {
        this.societe_nom = societe_nom;
    }

    public int getSociete_type() {
        return societe_type;
    }

    public void setSociete_type(int societe_type) {
        this.societe_type = societe_type;
    }

    public String getAbrv() {
        return abrv;
    }

    public void setAbrv(String abrv) {
        this.abrv = abrv;
    }


}
