package com.example.repository;

import java.util.Optional;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import com.example.model.Utilisateur;

@Repository
public interface UtilisateurRepository extends JpaRepository<Utilisateur, Long> {
	
	public Utilisateur findByUsernameAndPwd(String userName, String pwd);
	
	public Boolean existsByCode(String code);
	
	public Boolean existsByUsername(String userName);
	
	public Utilisateur deleteByCode (String code);
	
	public Optional<Utilisateur> findByUsername (String userName);

	public Utilisateur getByCode (String code);


	
}
