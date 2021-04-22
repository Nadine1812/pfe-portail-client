package com.example.config;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.ApplicationArguments;
import org.springframework.boot.ApplicationRunner;
import org.springframework.core.annotation.Order;
import org.springframework.stereotype.Component;

import com.example.model.Utilisateur;
import com.example.service.UtilisateurService;
@Order(2)
@Component
public class InitUtilisateur implements ApplicationRunner {
	@Autowired
	private UtilisateurService utilisateurService;
	
	@Override
	public void run(ApplicationArguments args) throws Exception {
		
		Utilisateur admin = new Utilisateur("admin@admin.com", "admin");
		
		utilisateurService.add(admin);
		
	}

}
