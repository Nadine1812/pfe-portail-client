package com.example.service.impl;

import com.example.model.Societe;
import com.example.repository.SocieteRepository;
import com.example.service.SocieteService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public class SocieteServiceImpl implements SocieteService {

    @Autowired
    public SocieteRepository societeRepository;

    @Override
    public List<Societe> getAllSocieties() {
        return societeRepository.findAll();
    }
}
