package com.example.security.jwt;

import com.example.service.UtilisateurPricipal;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.security.core.userdetails.UserDetails;
import org.springframework.security.core.userdetails.UserDetailsService;
import org.springframework.security.core.userdetails.UsernameNotFoundException;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

import com.example.model.Utilisateur;
import com.example.repository.UtilisateurRepository;

@Service
public class UtilisateurDetailsServiceImpl implements UserDetailsService {

	@Autowired
	UtilisateurRepository utilisateurRepository;
	
	@Override
	@Transactional
	public UserDetails  loadUserByUsername(String username) throws UsernameNotFoundException {
		Utilisateur utilisateur = utilisateurRepository.getByUsername(username);
		return UtilisateurPricipal.build(utilisateur);
	}
	
}
