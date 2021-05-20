package com.example.service;

import com.example.model.Reclamation;

import java.util.List;

public interface ReclamationService {

    public List<Reclamation> getAllReclamations();

    public Reclamation create (Reclamation reclamation);

    public void delete(Long id);

}
