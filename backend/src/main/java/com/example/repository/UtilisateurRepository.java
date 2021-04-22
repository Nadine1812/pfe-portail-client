package com.example.repository;

import java.util.Optional;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import com.example.model.Utilisateur;

@Repository
public interface UtilisateurRepository extends JpaRepository<Utilisateur, Integer> {
	
	public Utilisateur findByUserNameAndPwd(String userName, String pwd);
	
	public Boolean existsByCode(String code);
	
	public Boolean existsByUserName(String userName);
	
	public Utilisateur deleteByCode (String code);
	
	public Optional<Utilisateur> findByUserName (String userName);
	
}
