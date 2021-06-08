package com.example.service.impl;

import com.example.model.Alimentation;
import com.example.model.Collecte;
import com.example.repository.CollecteRepository;
import com.example.repository.SocieteRepository;
import com.example.service.CollecteService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public class CollecteServiceImp implements CollecteService {

    @Autowired
    public CollecteRepository collecteRepository;
    @Autowired
    public SocieteRepository societeRepository;

    @Override
    public List<Collecte> getAllCollecte() {
        return collecteRepository.findAll();
    }
    @Override
    public List<Collecte> getAllCollecteById(String id) {
        return collecteRepository.findCollectesBySociete(societeRepository.findBySociete_id(id));
    }
}
