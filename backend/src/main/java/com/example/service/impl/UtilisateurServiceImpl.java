package com.example.service.impl;

import java.awt.*;
import java.util.List;
import java.util.Optional;

import com.example.DTO.SocieteModel;
import com.example.model.Societe;
import com.example.repository.SocieteRepository;
import com.example.service.UtilisateurService;
import org.modelmapper.ModelMapper;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.example.model.Utilisateur;
import com.example.repository.UtilisateurRepository;

@Service
public class UtilisateurServiceImpl implements UtilisateurService {
    ModelMapper modelMapper;
    @Autowired
    public UtilisateurRepository utilisateurRepository;
    @Autowired
    public SocieteRepository societeRepository;

    @Override
    public Utilisateur update(Utilisateur utilisateur) {
        return utilisateurRepository.save(utilisateur);
    }

    @Override
    public void delete(Long id) {
        utilisateurRepository.deleteById(id);

    }

    @Override
    public Utilisateur create(Utilisateur utilisateur) {
        modelMapper = new ModelMapper();
        SocieteModel societe =new SocieteModel(utilisateur.getCode(),utilisateur.getRaisonSocial(),2,utilisateur.getUsername());
        Societe s=modelMapper.map(societe, Societe.class);

       societeRepository.save(s);
        utilisateur.setHasAccount(false);
        utilisateur.setSociete(s);

       return utilisateurRepository.save(utilisateur);
    }

    @Override
    public Utilisateur findById(Long id) {
        Optional<Utilisateur> Utilisateur = utilisateurRepository.findById(id);
        return Utilisateur.isPresent() ? Utilisateur.get() : null;
    }


    @Override
    public Utilisateur getByCode(String code) {
        return utilisateurRepository.getByCode(code);
    }

    @Override
    public Boolean hasAccount(String code) {
        Utilisateur utilisateur = this.getByCode(code);
        return this.getByCode(code).getHasAccount();
    }

    @Override
    public Utilisateur getByUsername(String username) {
        return this.utilisateurRepository.getByUsername(username);
    }

    @Override
    public Utilisateur ActivateAccount(Boolean active, String code) {
        Utilisateur utilisateur = this.getByCode(code);
        utilisateur.setActive(active);
        return this.utilisateurRepository.save(utilisateur);
    }

    @Override
    public List<Utilisateur> getAllUtilisateurs() {
        return utilisateurRepository.findAll();
    }


}
