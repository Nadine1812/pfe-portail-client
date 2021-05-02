package com.example.controller;

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
        return utilisateurService.ActivateAccount(active, code);
    }
}


