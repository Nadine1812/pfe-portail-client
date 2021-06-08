package com.example.service;

import com.example.model.Alimentation;

import java.util.List;

public interface AlimentationService {

    public List<Alimentation> getAllAlimentation();

    public List<Alimentation> getAllAlimentationById(String id);
}
