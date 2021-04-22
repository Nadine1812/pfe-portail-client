package com.example.auth;

import java.util.Collection;
import java.util.HashSet;
import java.util.Iterator;
import java.util.Set;

import javax.validation.Valid;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.security.authentication.AuthenticationManager;
import org.springframework.security.authentication.UsernamePasswordAuthenticationToken;
import org.springframework.security.core.Authentication;
import org.springframework.security.core.GrantedAuthority;
import org.springframework.security.core.context.SecurityContextHolder;
import org.springframework.security.crypto.password.PasswordEncoder;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.example.model.Role;
import com.example.model.RoleName;
import com.example.model.Utilisateur;
import com.example.repository.UtilisateurRepository;
import com.example.request.LoginForm;
import com.example.request.SignUpForm;
import com.example.response.JwtResponse;
import com.example.response.ResponseMessage;
import com.example.security.JwtProvider;

import io.swagger.annotations.Api;
import io.swagger.annotations.ApiResponse;

@CrossOrigin

@RestController

@RequestMapping("/api/auth")
@Api(value = "Rest Controller: Authentification")

public class AuthRestAPIs {

	@Autowired
	AuthenticationManager authenticationManager;

	@Autowired
	UtilisateurRepository utilisateurRepository;

	@Autowired
	com.example.repository.RoleRepository roleRepository;

	@Autowired
	PasswordEncoder encoder;

	@Autowired
	JwtProvider jwtProvider;

	@PostMapping("/signin")
	public ResponseEntity<?> authenticateUser(@RequestBody LoginForm loginRequest) {
		Authentication authentication = authenticationManager.authenticate(
				new UsernamePasswordAuthenticationToken(loginRequest.getUsername(), loginRequest.getPwd()));
		SecurityContextHolder.getContext().setAuthentication(authentication);
		String jwt = jwtProvider.generateJwtToken(authentication);
		JwtResponse body = new JwtResponse(jwt, loginRequest.getUsername());
		body.setAuthorities(authentication.getAuthorities());
		return ResponseEntity.ok(body);
	}

	@PostMapping("/signup")
	@ApiResponse(code = 201, message = "L'utilisateur a été créé avec succées")
	public ResponseEntity<?> registerUser(@Valid @RequestBody SignUpForm signUpRequest) {
		if (utilisateurRepository.existsByCode(signUpRequest.getCode())) {
			System.out.println(utilisateurRepository.existsByCode(signUpRequest.getCode()));
			return new ResponseEntity<>(new ResponseMessage("Fail -> Username is already taken!"),
					HttpStatus.BAD_REQUEST);
		}

		if (utilisateurRepository.existsByCode(signUpRequest.getCode())) {
			return new ResponseEntity<>(new ResponseMessage("Fail -> Email is already in use!"),
					HttpStatus.BAD_REQUEST);
		}
		Utilisateur utilisateur = new Utilisateur(signUpRequest.getUsername(), encoder.encode(signUpRequest.getPwd()));
		System.out.println(encoder.encode(signUpRequest.getPwd()));

		Set<String> strRoles = signUpRequest.getRole();
		Set<Role> roles = new HashSet<>();

		strRoles.forEach(role -> {
			switch (role) {
			case "admin":
				Role adminRole = roleRepository.findByLibelle(RoleName.ROLE_ADMIN)
						.orElseThrow(() -> new RuntimeException("Fail! -> Cause: User Role not find."));
				roles.add(adminRole);

				break;
			case "client":
				Role userRole = roleRepository.findByLibelle(RoleName.ROLE_CLIENT)
						.orElseThrow(() -> new RuntimeException("Fail! -> Cause: User Role not find."));
				roles.add(userRole);
			}
		});

		utilisateur.setRoles(roles);
		utilisateurRepository.save(utilisateur);

		return new ResponseEntity<>(new ResponseMessage("User registered successfully!"), HttpStatus.OK);
	}
}
