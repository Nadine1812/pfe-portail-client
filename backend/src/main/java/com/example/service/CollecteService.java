package com.example.service;

import com.example.model.Collecte;
import com.example.model.Etablissement;

import java.util.List;

public interface CollecteService {

    public List<Collecte> getAllCollecte();
    public List<Collecte> getAllCollecteById(String id);
}
