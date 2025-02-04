package com.example.controller;

import com.example.mail.RequestMail;
import com.example.mail.SendMailService;
import com.example.model.Utilisateur;
import com.example.service.UtilisateurService;
import io.swagger.annotations.Api;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@CrossOrigin(origins = "http://localhost:4200", maxAge = 3600)
@RestController
@RequestMapping("api/utilisateurs")
@Api(value = "Rest Controller: Utilisateur")
public class UtilisateurController {

    @Autowired
    private UtilisateurService utilisateurService;

    @Autowired
    private SendMailService sendMailService;

    @PostMapping
    public Utilisateur createUser(@RequestBody Utilisateur utilisateur) {
        return utilisateurService.create(utilisateur);
    }

    @GetMapping("/{id}")
    public Utilisateur getUtilisateurById(@PathVariable Long id) {
        return utilisateurService.findById(id);
    }

    @GetMapping("/code/{code}")
    public Utilisateur getByCode(@PathVariable String code) {
        return utilisateurService.getByCode(code);
    }

    @GetMapping
    public List<Utilisateur> getAllUtilisateurs() {
        return utilisateurService.getAllUtilisateurs();
    }

    @DeleteMapping("/{id}")
    public void delete(@PathVariable Long id) {
        utilisateurService.delete(id);
    }

    @PutMapping("/{id}")
    public Utilisateur update(@PathVariable Long id, @RequestBody Utilisateur utilisateur) {
        return utilisateurService.update(utilisateur);
    }

    @PutMapping("/{code}/activate-account")
    public Utilisateur activateAccount(@PathVariable String code, @RequestParam Boolean active) {
        Utilisateur utilisateur = utilisateurService.ActivateAccount(active, code);
        RequestMail requestMail = new RequestMail();
        requestMail.setSendFrom("smartup.pfe2021@gmail.com");
        requestMail.setSendTo(utilisateur.getEmailAddress());
        requestMail.setSubject("Activation de compte");
        if (active) {
            requestMail.setContent("Votre compte est maintenant activé, vous pouvez connecter à tous moment");
        }
        else {
            requestMail.setContent("Votre compte est maintenant désactivé, merci pour votre fidélisation!");
        }
        sendMailService.sendMail(requestMail);
        return utilisateur;
    }
}


