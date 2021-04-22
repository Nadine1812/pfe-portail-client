package com.example.service;

import java.util.List;

import com.example.model.Utilisateur;


public interface UtilisateurService {
	public List<Utilisateur> getAllUtilisateurs();
	
	public Utilisateur update(Utilisateur utilisateur);
	
	public void delete(Integer id);
	
	public Utilisateur  add(Utilisateur utilisateur);

	public Utilisateur findById(Integer id);
	
	public Utilisateur findByUserNameAndPwd(String userName, String pwd);
	
	public Utilisateur updateUtilisateur(Utilisateur utilisateur);
	
	public boolean checkIfCodeExists(String code);
	
	public Utilisateur findUserByCode(String code);
	
	 public List<Utilisateur> getAllUtilisateur();
	 
	 public void deleteUtilisateur(String code);
}
