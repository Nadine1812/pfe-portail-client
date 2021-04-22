package com.example.model;

import io.swagger.annotations.ApiModel;
import io.swagger.annotations.ApiModelProperty;

@ApiModel (value = "Le role de l'utilisateur")
public class RoleDTO {


	@ApiModelProperty(notes = "Id de role de l'utilisateur")
	private Integer id;
	
	@ApiModelProperty(notes = "Le libelle de role")
	private RoleName libelle;

	public RoleDTO() {
		super();
	}

	public RoleDTO(Integer id, RoleName libelle) {
		super();
		this.id = id;
		this.libelle = libelle;
	}

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
	
	public int compareTo(RoleDTO o) {
		return libelle.compareTo(o.getLibelle());
	}
}
