package com.example.controller;

import com.example.model.Alimentation;
import com.example.model.Etablissement;
import com.example.service.AlimentationService;
import io.swagger.annotations.Api;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import java.util.List;

@CrossOrigin(origins = "http://localhost:4200", maxAge = 3600)
@RestController
@RequestMapping("api/alimentation")
@Api(value = "Rest Controller: Alimentation")
public class AlimentationController {

    @Autowired
    public AlimentationService alimentationService;

    @GetMapping
    public List<Alimentation> getAllAlimentation(){
        return alimentationService.getAllAlimentation();
    }
}
