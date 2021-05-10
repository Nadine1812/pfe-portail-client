package com.example.model;

import com.fasterxml.jackson.annotation.JsonFormat;
import lombok.Data;

import javax.persistence.*;
import java.time.LocalDate;
import java.util.Date;

@Data
@Entity
public class Reclamation {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;

    private String codeUser;
//    @JsonFormat(pattern="yyyy-MM-dd HH:mm:ss")
    private Date Date_creation;

    private String Description;

    private String Rapport ;

//    @ManyToOne
//    Utilisateur utilisateur;
}
