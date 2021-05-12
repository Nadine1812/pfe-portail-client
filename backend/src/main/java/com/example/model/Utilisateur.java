package com.example.model;

import com.fasterxml.jackson.annotation.JsonIgnoreProperties;
import com.fasterxml.jackson.annotation.JsonProperty;
import lombok.Data;

import javax.persistence.*;
import java.util.HashSet;
import java.util.Set;

@Data
@Entity
public class Utilisateur {
	@Id
	@GeneratedValue(strategy = GenerationType.IDENTITY)
	private Long id;

	private String code;

	private String username;

	private String pwd;

	private String raisonSocial;

	private String tel;

	private String adress;

	private Boolean active;

	private Boolean hasAccount;

	private String emailAddress;


	@ElementCollection
	private Set<Role> roles = new HashSet<>();

	@OneToMany(mappedBy="utilisateur",cascade=CascadeType.ALL)
	@JsonIgnoreProperties("utilisateur")
	private Set<Reclamation> reclamations;
}
