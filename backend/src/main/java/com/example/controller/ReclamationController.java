package com.example.controller;

import com.example.model.Reclamation;
import com.example.service.ReclamationService;
import io.swagger.annotations.Api;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@CrossOrigin(origins = "http://localhost:4200", maxAge = 3600)
@RestController
@RequestMapping("api/reclamation")
@Api(value = "Rest Controller: Reclamation")
public class ReclamationController {

    @Autowired
    ReclamationService reclamationService;

    @PostMapping
    public Reclamation createReclamation(@RequestBody Reclamation reclamation){
        return  reclamationService.create(reclamation);
    }

    @GetMapping("/{id}")
    public Reclamation getReclamationById(@PathVariable Long id){
        return reclamationService.getById(id);
    }

    @GetMapping
    public List<Reclamation> getAllReclamations(){
        return reclamationService.getAllReclamations();
    }

    @DeleteMapping("/{id}")
    public void delete(@PathVariable Long id) {
        reclamationService.delete(id);
    }

    @PutMapping("/{id}")
    public Reclamation update (@PathVariable Long id, @RequestBody Reclamation reclamation) {
        return  reclamationService.update(reclamation);
    }
    }
