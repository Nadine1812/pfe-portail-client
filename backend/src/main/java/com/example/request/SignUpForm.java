package com.example.request;

import java.util.Set;

import javax.persistence.Column;

public class SignUpForm {

	@Column(name= "code")
	private String code;
	
	

	@Column(name= "username")
	private String username;
	
	@Column(name= "users_pwd")
	private String pwd;
	
	private Set<String> role;

	
	public String getCode() {
		return code;
	}

	public void setCode(String code) {
		this.code = code;
	}
	public String getUsername() {
		return username;
	}

	public void setUsername(String username) {
		this.username = username;
	}

	public String getPwd() {
		return pwd;
	}

	public void setPwd(String pwd) {
		this.pwd = pwd;
	}

	public Set<String> getRole() {
		return role;
	}

	public void setRole(Set<String> role) {
		this.role = role;
	}
	
	
}
