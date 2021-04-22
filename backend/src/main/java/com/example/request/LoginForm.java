package com.example.request;

import java.util.List;

import com.example.model.Role;

public class LoginForm {

	private String username;
	 
    private String pwd;
    
    private List<Role> roles;



	public List<Role> getRoles() {
		return roles;
	}

	public void setRoles(List<Role> roles) {
		this.roles = roles;
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
}
