package com.example.model;

import com.fasterxml.jackson.annotation.JsonFormat;
import lombok.Data;

import javax.persistence.*;
import java.time.LocalDate;
import java.util.ArrayList;
import java.util.List;
import java.util.Set;

@Data
@Entity
public class Passage {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long passage_id;

    private Long centre_fort_id;

    private String cen_societe_id;

    private String etablissement_id;

    private String societe_id;

    @JsonFormat(pattern = "yyyy-MM-dd")
    private LocalDate passage_date;


    @OneToMany(targetEntity=Passage.class,cascade=CascadeType.ALL, fetch = FetchType.LAZY)
     private List<Centre_fort> centres = new ArrayList();


}
