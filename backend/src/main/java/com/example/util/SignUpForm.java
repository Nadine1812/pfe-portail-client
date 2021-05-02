package com.example.util;

import com.example.model.Role;
import lombok.Data;

import javax.persistence.ElementCollection;
import java.util.Set;

@Data
public class SignUpForm {

	private String code;

	private String username;

	private String pwd;

	private Set<Role> roles ;

}
