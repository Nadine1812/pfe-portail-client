package com.example.model;

import java.util.HashSet;
import java.util.List;
import java.util.Set;

import javax.persistence.CascadeType;
import javax.persistence.Column;
import javax.persistence.ElementCollection;
import javax.persistence.Entity;
import javax.persistence.FetchType;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.JoinTable;
import javax.persistence.ManyToMany;


import javax.persistence.JoinColumn;

@Entity
public class Utilisateur {

	public Set<Role> getRoles() {
		return roles;
	}

	public void setRoles(Set<Role> roles) {
		this.roles = roles;
	}

	@Id
	@GeneratedValue(strategy = GenerationType.IDENTITY)
	@Column(name = "user_id")
	private Integer id;
	@Column
	private String code;
	@Column
	private String userName;
	@Column
	private String pwd;
	@Column
	private String raisonSocial;
	@Column
	private Integer tel;
	@Column
	private String adress;
	@Column
	private String status;
	@Column
	private Integer active;
	
	
	@ManyToMany(cascade = CascadeType.DETACH)
	@JoinTable(name = "UTILISATEUR_ROLE", joinColumns = @JoinColumn(name = "user_id"), inverseJoinColumns = @JoinColumn(name = "ROLE_ID"))
	private Set<Role> roles = new HashSet<>();

	@ElementCollection(fetch = FetchType.EAGER)
	  List<Role> role;
	
	public Integer getActive() {
		return active;
	}

	public void setActive(Integer active) {
		this.active = active;
	}

	public String getStatus() {
		return status;
	}

	public void setStatus(String status) {
		this.status = status;
	}

	public Integer getId() {
		return id;
	}

	public void setId(Integer id) {
		this.id = id;
	}

	public String getCode() {
		return code;
	}

	public void setCode(String code) {
		this.code = code;
	}

	public String getUserName() {
		return userName;
	}

	public void setUserName(String userName) {
		this.userName = userName;
	}

	public String getPwd() {
		return pwd;
	}

	public void setPwd(String pwd) {
		this.pwd = pwd;
	}

	public String getRaisonSocial() {
		return raisonSocial;
	}

	public void setRaisonSocial(String raisonSocial) {
		this.raisonSocial = raisonSocial;
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

	public Utilisateur(Integer id, String code, String userName, String pwd, String raisonSocial, Integer tel,
			String adress, Integer active) {
		super();
		this.id = id;
		this.code = code;
		this.userName = userName;
		this.pwd = pwd;
		this.raisonSocial = raisonSocial;
		this.tel = tel;
		this.adress = adress;
		this.active = active;
	}

	public Utilisateur() {
		super();
	}

	public Utilisateur(String userName, String pwd) {
		super();
		this.userName = userName;
		this.pwd = pwd;
	}

}