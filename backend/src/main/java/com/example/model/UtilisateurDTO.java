package com.example.model;

import java.util.HashSet;
import java.util.Set;

import io.swagger.annotations.ApiModelProperty;

public class UtilisateurDTO {

	@ApiModelProperty(notes = "Id de l'utilisateur")
	private Integer idUser;
	
	@ApiModelProperty(notes = "La mot de passe crypté de l'utlisateur")
	private String pwd;

	@ApiModelProperty(notes = "Le nom de l'utilisateur")
	private String userName;
	
	@ApiModelProperty(notes = "Le raison social de l'utilisateur")
	private String raisonSocial;
	
	@ApiModelProperty(notes = "Le code de l'utilisateur")
	private String code;
	
	@ApiModelProperty(notes = "Le tel de l'utilisateur")
	private Integer tel;
	
	@ApiModelProperty(notes = "L'adress de l'utilisateur")
	private String adress;
	
	@ApiModelProperty(notes = "Le status de l'utilisateur")
	private String status;
	
	@ApiModelProperty(notes = "L'activation  du compte de l'utilisateur")
	private String active;
	
	@ApiModelProperty(notes = "Le role de l'utilisateur")
	  private Set<Role> roles = new HashSet<>();

	public Integer getIdUser() {
		return idUser;
	}

	public void setIdUser(Integer idUser) {
		this.idUser = idUser;
	}

	public String getPwd() {
		return pwd;
	}

	public void setPwd(String pwd) {
		this.pwd = pwd;
	}

	public String getUserName() {
		return userName;
	}

	public void setUserName(String userName) {
		this.userName = userName;
	}

	public String getRaisonSocial() {
		return raisonSocial;
	}

	public void setRaisonSocial(String raisonSocial) {
		this.raisonSocial = raisonSocial;
	}

	public String getCode() {
		return code;
	}

	public void setCode(String code) {
		this.code = code;
	}

	public Integer getTel() {
		return tel;
	}

	public void setTel(Integer tel) {
		this.tel = tel;
	}

	public String getAdress() {
		return adress;
	}

	public void setAdress(String adress) {
		this.adress = adress;
	}

	public String getStatus() {
		return status;
	}

	public void setStatus(String status) {
		this.status = status;
	}

	public String getActive() {
		return active;
	}

	public void setActive(String active) {
		this.active = active;
	}

	public Set<Role> getRoles() {
		return roles;
	}

	public void setRoles(Set<Role> roles) {
		this.roles = roles;
	}

	@Override
	public String toString() {
		return "UtilisateurDTO [idUser=" + idUser + ", pwd=" + pwd + ", userName=" + userName + ", raisonSocial="
				+ raisonSocial + ", code=" + code + ", tel=" + tel + ", adress=" + adress + ", status=" + status
				+ ", active=" + active + ", roles=" + roles + "]";
	}
	
	
}
