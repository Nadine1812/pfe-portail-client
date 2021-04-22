package com.example.service;

import java.util.List;
import java.util.Optional;

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
	public void delete(Integer id) {
		utilisateurRepository.deleteById(id);
		
	}

	@Override
	public Utilisateur add(Utilisateur utilisateur) {
		return utilisateurRepository.save(utilisateur);
	}

	@Override
	public Utilisateur findById(Integer id) {
		Optional<Utilisateur> Utilisateur = utilisateurRepository.findById(id);
	     return  Utilisateur.isPresent() ? Utilisateur.get() : null;
	}

	@Override
	public List<Utilisateur> getAllUtilisateurs() {
		return utilisateurRepository.findAll();
	}

	@Override
	public Utilisateur findByUserNameAndPwd(String userName, String pwd) {
		return utilisateurRepository.findByUserNameAndPwd(userName, pwd);
	}

	@Override
	public Utilisateur updateUtilisateur(Utilisateur utilisateur) {
		return utilisateurRepository.save(utilisateur);
	}

	@Override
	public boolean checkIfCodeExists(String code) {
		return utilisateurRepository.existsByCode(code);
	}

	@Override
	public Utilisateur findUserByCode(String code) {
		return utilisateurRepository.findById(Integer.parseInt(code)).get();
	}

	@Override
	public List<Utilisateur> getAllUtilisateur() {
		return utilisateurRepository.findAll();
	}

	@Override
	public void deleteUtilisateur(String code) {
		utilisateurRepository.deleteByCode(code);
		
	}
}
