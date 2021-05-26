package com.example.service.impl;

import com.example.model.Centre_fort;
import com.example.repository.CentreFortRepository;
import com.example.service.CentreFortService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public class CentreFortServiceImpl implements CentreFortService {

    @Autowired
    public CentreFortRepository centreFortRepository;

    @Override
    public List<Centre_fort> getAllCentresFort() {
        return centreFortRepository.findAll();
    }
}
