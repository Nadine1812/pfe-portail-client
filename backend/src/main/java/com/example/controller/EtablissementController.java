package com.example.controller;
import com.example.model.Etablissement;
import com.example.repository.EtablissementRepository;
import com.example.service.EtablissementService;
import io.swagger.annotations.Api;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@CrossOrigin(origins = "http://localhost:4200", maxAge = 3600)
@RestController
@RequestMapping("api/etablissement")
@Api(value = "Rest Controller: Etablissement")
public class EtablissementController {

    @Autowired
    public EtablissementService etablissementService;

    @GetMapping
    public List<Etablissement> getAllEstablishment(){
        return etablissementService.getAllEstablishment();
    }

    @GetMapping("/{id}")
    public List<Etablissement> getAllEstablishmentById(@PathVariable String id){
        return etablissementService.getAllEstablishmentById(id);
    }

}
