package com.example.controller;
import com.example.model.Alimentation;
import com.example.model.Collecte;
import com.example.service.CollecteService;
import io.swagger.annotations.Api;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@CrossOrigin(origins = "http://localhost:4200", maxAge = 3600)
@RestController
@RequestMapping("api/collecte")
@Api(value = "Rest Controller: Collecte")
public class CollecteController {

    @Autowired
    public CollecteService collecteService;

    @GetMapping
    public List<Collecte> getAllCollecte(){
        return collecteService.getAllCollecte();
    }
    @GetMapping("/{id}")
    public List<Collecte> getAllCollectById(@PathVariable String id){
        return collecteService.getAllCollecteById(id);
    }
}
