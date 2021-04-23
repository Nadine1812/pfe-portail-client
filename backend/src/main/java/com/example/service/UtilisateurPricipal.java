package com.example.service;

import java.util.Collection;
import java.util.List;
import java.util.Objects;
import java.util.stream.Collectors;

import com.example.model.Role;
import lombok.Data;
import org.springframework.security.core.GrantedAuthority;
import org.springframework.security.core.authority.SimpleGrantedAuthority;
import org.springframework.security.core.userdetails.UserDetails;

import com.example.model.Utilisateur;
import com.fasterxml.jackson.annotation.JsonIgnore;

@Data
public class UtilisateurPricipal implements UserDetails {

	private static final long serialVersionUID = 1L;
	
	private Long id;
	
	private String code;

	private String userName;
	
	private String raisonSocial;
	
	private String tel;
	
	private String  adress;
	
	private String status;
	
	private Integer active;
	@JsonIgnore
	private String pwd;
	
	private Collection<? extends GrantedAuthority> authorities;

	public UtilisateurPricipal(Long id, String code, String userName, String raisonSocial, String tel,
			String adress, String status, Integer active, String pwd,
			Collection<? extends GrantedAuthority> authorities) {
		super();
		this.id = id;
		this.code = code;
		this.userName = userName;
		this.raisonSocial = raisonSocial;
		this.tel = tel;
		this.adress = adress;
		this.status = status;
		this.active = active;
		this.pwd = pwd;
		this.authorities = authorities;
	}

	public static UtilisateurPricipal build(Utilisateur utilisateur) {
        List<GrantedAuthority> authorities = utilisateur.getRoles().stream().map(role ->
                new SimpleGrantedAuthority(Role.ROLE_ADMIN.name())
        ).collect(Collectors.toList());

        return new UtilisateurPricipal(
        		utilisateur.getId(),
        		utilisateur.getCode(),
        		utilisateur.getUserName(),
        		utilisateur.getRaisonSocial(),
        		utilisateur.getTel(),
        		utilisateur.getAdress(),
        		utilisateur.getStatus(),
        		utilisateur.getActive(),
        		utilisateur.getPwd(),
        		authorities
        		);
                
    }
	
	public void setAuthorities(Collection<? extends GrantedAuthority> authorities) {
		this.authorities = authorities;
	}

	public Long getId() {
		return id;
	}

	public String getCode() {
		return code;
	}

	public String getUserName() {
		return userName;
	}

	public String getRaisonSocial() {
		return raisonSocial;
	}

	public String getTel() {
		return tel;
	}

	public String getAdress() {
		return adress;
	}

	public String getStatus() {
		return status;
	}

	public Integer getActive() {
		return active;
	}

	public String getPwd() {
		return pwd;
	}

	public static long getSerialversionuid() {
		return serialVersionUID;
	}
	@Override
	public Collection<? extends GrantedAuthority> getAuthorities() {
		return authorities;
	}

	@Override
	public boolean isAccountNonExpired() {
		return true;
	}

	@Override
	public boolean isAccountNonLocked() {
		return true;
	}

	@Override
	public boolean isCredentialsNonExpired() {
		return true;
	}
	
	@Override
	public boolean isEnabled() {
		return true;
	}
	
	@Override
    public boolean equals(Object o) {
        if (this == o) return true;
        if (o == null || getClass() != o.getClass()) return false;
        
        UtilisateurPricipal utilisateur = (UtilisateurPricipal) o;
        return Objects.equals(id, utilisateur.id);
    }

	@Override
	public String getPassword() {
		return pwd;
	}

	@Override
	public String getUsername() {
		return userName;
	}

	public void setId(Long id) {
		this.id = id;
	}

	public void setCode(String code) {
		this.code = code;
	}

	public void setUserName(String userName) {
		this.userName = userName;
	}

	public void setRaisonSocial(String raisonSocial) {
		this.raisonSocial = raisonSocial;
	}

	public void setTel(String tel) {
		this.tel = tel;
	}

	public void setAdress(String adress) {
		this.adress = adress;
	}

	public void setStatus(String status) {
		this.status = status;
	}

	public void setActive(Integer active) {
		this.active = active;
	}

	public void setPwd(String pwd) {
		this.pwd = pwd;
	}

}
