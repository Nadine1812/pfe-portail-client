package com.example.service.impl;

import java.util.List;
import java.util.Optional;

import com.example.service.UtilisateurService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.example.model.Utilisateur;
import com.example.repository.UtilisateurRepository;
@Service
public class UtilisateurServiceImpl implements UtilisateurService {
	
	@Autowired
	public UtilisateurRepository utilisateurRepository;

	@Override
	public Utilisateur update(Utilisateur utilisateur) {
		return utilisateurRepository.save(utilisateur);
	}

	@Override
	public void delete(Long id) {
		utilisateurRepository.deleteById(id);
		
	}

	@Override
	public Utilisateur create(Utilisateur utilisateur) {
		return utilisateurRepository.save(utilisateur);
	}

	@Override
	public Utilisateur findById(Long id) {
		Optional<Utilisateur> Utilisateur = utilisateurRepository.findById(id);
	     return  Utilisateur.isPresent() ? Utilisateur.get() : null;
	}


	@Override
	public Utilisateur getByCode(String code) {
		return utilisateurRepository.getByCode(code);
	}

	@Override
	public List<Utilisateur> getAllUtilisateurs() {
		return utilisateurRepository.findAll();
	}




}
