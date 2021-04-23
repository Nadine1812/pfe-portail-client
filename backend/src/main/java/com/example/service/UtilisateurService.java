package com.example.service;

import java.util.List;

import com.example.model.Utilisateur;


public interface UtilisateurService {
	public List<Utilisateur> getAllUtilisateurs();
	
	public Utilisateur update(Utilisateur utilisateur);
	
	public void delete(Long id);
	
	public Utilisateur  create(Utilisateur utilisateur);

	public Utilisateur findById(Long id);

}
