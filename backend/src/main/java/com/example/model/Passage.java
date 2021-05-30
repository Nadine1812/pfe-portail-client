package com.example.model;

import com.fasterxml.jackson.annotation.JsonFormat;
import lombok.Data;

import javax.persistence.*;
import java.time.LocalDate;

@Data
@Entity
public class Passage {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long passage_id;

    @JsonFormat(pattern = "yyyy-MM-dd")
    private LocalDate passage_date;

    @OneToOne
    @JoinColumn(name = "etablissement_id")
    private Etablissement etablissement;

    @ManyToOne
    @JoinColumn(name = "centre_fort_id")
    private Centre_fort centre_fort;
}
