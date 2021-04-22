package com.example.model;

import org.springframework.security.core.GrantedAuthority;

public enum RoleName implements GrantedAuthority {

	ROLE_CLIENT,
	ROLE_ADMIN;
	
	public String getAuthority() {
	    return name();
	  }
}
