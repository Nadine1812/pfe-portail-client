package com.example.model;
import lombok.Data;
import javax.persistence.*;
import java.util.ArrayList;
import java.util.HashSet;
import java.util.List;
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

	@OneToMany(mappedBy="utilisateur",cascade=CascadeType.ALL,orphanRemoval = true)
	private List<Reclamation> reclamations = new ArrayList<>();
}
