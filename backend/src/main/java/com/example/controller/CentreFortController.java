package com.example.controller;
import com.example.model.Centre_fort;
import com.example.service.CentreFortService;
import io.swagger.annotations.Api;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import java.util.List;

@CrossOrigin(origins = "http://localhost:4200", maxAge = 3600)
@RestController
@RequestMapping("api/centre_fort")
@Api(value = "Rest Controller: CentreFort")
public class CentreFortController {

    @Autowired
    public CentreFortService centreFortService;

    @GetMapping
    public List<Centre_fort> getAllCentresFort(){
        return centreFortService.getAllCentresFort();
    }
}
