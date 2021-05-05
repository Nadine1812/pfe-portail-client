package com.example.service.impl;

import com.example.model.Alimentation;
import com.example.repository.AlimentationRepository;
import com.example.service.AlimentationService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public class AlimentationServicImpl implements AlimentationService {

    @Autowired
    public AlimentationRepository alimentationRepository;

    @Override
    public List<Alimentation> getAllAlimentation() {
        return alimentationRepository.findAll();
    }
}
