package com.example.controller;

import com.example.model.Societe;
import com.example.service.SocieteService;
import io.swagger.annotations.Api;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import java.util.List;

@CrossOrigin(origins = "http://localhost:4200", maxAge = 3600)
@RestController
@RequestMapping("api/societe")
@Api(value = "Rest Controller: Societe")
public class SocieteController {

    @Autowired
    public SocieteService societeService;

    @GetMapping
    public List<Societe> getAllSocieties(){
        return societeService.getAllSocieties();
    }
}
