package com.example.service.impl;

import com.example.model.Etablissement;
import com.example.repository.EtablissementRepository;
import com.example.service.EtablissementService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public class EtablissementServiceImpl implements EtablissementService {

    @Autowired
    public EtablissementRepository etablissementRepository;

    @Override
    public List<Etablissement> getAllEstablishment() {
        return etablissementRepository.findAll();
    }
}
