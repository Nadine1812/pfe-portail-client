package com.example.security.util;

import java.util.Collection;

import org.springframework.security.core.GrantedAuthority;

public class JwtResponse {
	private String accessToken;
	private String type = "Bearer";
	private String username;
	private Collection<? extends GrantedAuthority> authorities;

	public JwtResponse(String accessToken,String username) {
		this.accessToken = accessToken;
		this.username = username;
	}

	public String getAccessToken() {
		return accessToken;
	}

	public void setAccessToken(String accessToken) {
		this.accessToken = accessToken;
	}

	public String getType() {
		return type;
	}

	public void setType(String type) {
		this.type = type;
	}

	public String getUsername() {
		return username;
	}

	public void setUsername(String username) {
		this.username = username;
	}

	public Collection<? extends GrantedAuthority> getAuthorities() {
		return authorities;
	}

	public void setAuthorities(Collection<? extends GrantedAuthority> authorities) {
		this.authorities = authorities;
	}

}
