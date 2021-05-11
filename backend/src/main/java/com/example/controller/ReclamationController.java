package com.example.controller;

import com.example.mail.RequestMail;
import com.example.mail.SendMailService;
import com.example.model.Reclamation;
import com.example.security.util.ResponseMessage;
import com.example.service.ReclamationService;
import io.swagger.annotations.Api;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@CrossOrigin(origins = "http://localhost:4200", maxAge = 3600)
@RestController
@RequestMapping("api/reclamation")
@Api(value = "Rest Controller: Reclamation")
public class ReclamationController {

    @Autowired
    ReclamationService reclamationService;

    @Autowired
    SendMailService sendMailService;

    @PostMapping
    public Reclamation createReclamation(@RequestBody Reclamation reclamation){
        RequestMail requestMail = new RequestMail();
        requestMail.setSendFrom(reclamation.getUtilisateur().getEmailAddress());
        requestMail.setSendTo("smartup.pfe2021@gmail.com");
        requestMail.setSubject("Reclamation: " + reclamation.getDescription());

        requestMail.setContent(reclamation.getRapport());

        sendMailService.sendMail(requestMail);
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
