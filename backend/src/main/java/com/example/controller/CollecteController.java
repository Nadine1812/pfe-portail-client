package com.example.controller;

import com.example.model.Collecte;
import com.example.service.CollecteService;
import io.swagger.annotations.Api;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import java.util.List;

@CrossOrigin(origins = "http://localhost:4200", maxAge = 3600)
@RestController
@RequestMapping("api/collecte")
@Api(value = "Rest Controller: Collecte")
public class CollecteController {

    @Autowired
    public CollecteService collecteService;

    @GetMapping
    public List<Collecte> getAllEstablishment(){
        return collecteService.getAllCollecte();
    }
}
