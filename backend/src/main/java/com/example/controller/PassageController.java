package com.example.controller;

import com.example.model.Etablissement;
import com.example.model.Passage;
import com.example.service.PassageService;
import io.swagger.annotations.Api;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@CrossOrigin(origins = "http://localhost:4200", maxAge = 3600)
@RestController
@RequestMapping("api/passage")
@Api(value = "Rest Controller: Passage")
public class PassageController {

    @Autowired
    public PassageService passageService;

    @GetMapping
    public List<Passage> getAllPassage(){
        return passageService.getAllPassage();
    }

    @GetMapping("/{id}")
    public List<Passage> getAllPassageById(@PathVariable String id){
        return passageService.getAllPassageById(id);
    }

}
