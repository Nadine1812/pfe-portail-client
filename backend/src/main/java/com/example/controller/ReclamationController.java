package com.example.controller;

import com.example.mail.RequestMail;
import com.example.mail.SendMailService;
import com.example.model.Reclamation;
import com.example.model.Utilisateur;
import com.example.service.ReclamationService;
import com.example.service.UtilisateurService;
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

    @Autowired
    SendMailService sendMailService;

    @Autowired
    UtilisateurService utilisateurService;

    @PostMapping("utilisateur/{id}/reclamation")
    public Reclamation createReclamation(@PathVariable(value = "id") long id,@RequestBody Reclamation reclamation) {

        Utilisateur utilisateur = utilisateurService.findById(id);
        reclamation.setUtilisateur(utilisateur);
        Reclamation userReclamation = reclamationService.create(reclamation);

        RequestMail requestMail = new RequestMail();
        requestMail.setSendFrom(utilisateur.getEmailAddress());
        requestMail.setSendTo("smartup.pfe2021@gmail.com");
        requestMail.setSubject("Reclamation: " + reclamation.getDescription());
        requestMail.setContent(reclamation.getRapport());
        sendMailService.sendMail(requestMail);
        return userReclamation;}

    @GetMapping
    public List<Reclamation> getAllReclamations() {
        return reclamationService.getAllReclamations();
    }
    @DeleteMapping("/{id}")
    public void delete(@PathVariable Long id) {
        reclamationService.delete(id);
    }
}
