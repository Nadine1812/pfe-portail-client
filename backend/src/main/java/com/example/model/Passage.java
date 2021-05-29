package com.example.model;

import com.fasterxml.jackson.annotation.JsonFormat;
import com.fasterxml.jackson.annotation.JsonIgnore;
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
    private Long passage_id;

//    private Long centre_fort_id;

//    private String etablissement_id;

//    private String societe_id;

    @JsonFormat(pattern = "yyyy-MM-dd")
    private LocalDate passage_date;


    @ManyToOne
    @JoinColumn(name = "societe_id")
    private Societe societe;

    @ManyToOne
    @JoinColumn(name = "centre_fort_id")
    private Centre_fort centre_fort;
}
