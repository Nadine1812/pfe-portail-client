package com.example.model;

import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.EnumType;
import javax.persistence.Enumerated;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;

@Entity
public class Role {

	@Id
    @GeneratedValue(strategy = GenerationType.AUTO)
	@Column(name = "ROLE_ID")
	private Integer id;
	
	@Enumerated(EnumType.STRING)
	@Column(name = "libelle_role")
	private RoleName libelle;

	public Integer getId() {
		return id;
	}

	public void setId(Integer id) {
		this.id = id;
	}

	
	public RoleName getLibelle() {
		return libelle;
	}

	public void setLibelle(RoleName libelle) {
		this.libelle = libelle;
	}

	public Role() {
		super();
	}

	public Role(Integer id, com.example.model.RoleName libelle) {
		super();
		this.id = id;
		this.libelle = libelle;
	}
    
	
    
}
