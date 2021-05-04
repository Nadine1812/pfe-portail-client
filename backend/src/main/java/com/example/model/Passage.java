package com.example.model;

import com.fasterxml.jackson.annotation.JsonFormat;
import lombok.Data;

import javax.persistence.*;
import java.io.Serializable;
import java.time.LocalDate;
import java.util.List;

@Data
@Entity
public class Passage  {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long passage_id;

    private Long centre_fort_id;

    private String cen_societe_id;

    private Long etablissement_id;

    private Long societe_id;

    @JsonFormat(pattern="yyyy-MM-dd")
    private LocalDate passage_date;

    @OneToMany(mappedBy="passage")
    private List<Alimentation> Alimentation;


}
