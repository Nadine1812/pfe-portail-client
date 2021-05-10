package com.example.service.impl;

import com.example.model.Reclamation;
import com.example.model.Utilisateur;
import com.example.repository.ReclamationRepository;
import com.example.service.ReclamationService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;
import java.util.Optional;

@Service
public class ReclamationServiceImpl implements ReclamationService {

    @Autowired
    ReclamationRepository reclamationRepository;


    @Override
    public List<Reclamation> getAllReclamations() {
        return reclamationRepository.findAll();
    }

    @Override
    public Reclamation update(Reclamation reclamation) {
        return reclamationRepository.save(reclamation);
    }

    @Override
    public void delete(Long id) {
reclamationRepository.deleteById(id);
    }

    @Override
    public Reclamation create(Reclamation reclamation) {
        return reclamationRepository.save(reclamation);
    }

    @Override
    public Reclamation getById(Long id) {
        Optional<Reclamation> Reclamation = reclamationRepository.findById(id);
        return Reclamation.isPresent() ? Reclamation.get() : null;
    }
}
