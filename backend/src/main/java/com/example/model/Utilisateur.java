package com.example.model;

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

	private String userName;

	private String pwd;

	private String raisonSocial;

	private String tel;

	private String adress;

	private String status;

	private Integer active;

	@ElementCollection
	private Set<Role> roles = new HashSet<>();

}
