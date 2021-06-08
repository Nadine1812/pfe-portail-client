package com.example.service.impl;

import com.example.model.Etablissement;
import com.example.repository.EtablissementRepository;
import com.example.repository.SocieteRepository;
import com.example.service.EtablissementService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public class EtablissementServiceImpl implements EtablissementService {

    @Autowired
    public EtablissementRepository etablissementRepository;

    @Autowired
    public SocieteRepository societeRepository;

    @Override
    public List<Etablissement> getAllEstablishment() {
        return etablissementRepository.findAll();
    }

    @Override
    public List<Etablissement> getAllEstablishmentById(String id) {
        return etablissementRepository.findEtablissementsBySociete(societeRepository.findBySociete_id(id));
    }
}
