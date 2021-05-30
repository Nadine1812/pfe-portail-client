package com.example.model;
import lombok.Data;

import javax.persistence.*;
import java.io.Serializable;


@Entity
@Data
public class Societe implements Serializable {

    @Id
    private String societe_id;

    private String societe_nom;

    private String societe_type;

    private String  abrv;


}
