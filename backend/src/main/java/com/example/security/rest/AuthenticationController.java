package com.example.security.rest;

import com.example.model.Utilisateur;
import com.example.repository.UtilisateurRepository;
import com.example.security.jwt.JwtProvider;
import com.example.security.util.JwtResponse;
import com.example.security.util.ResponseMessage;
import com.example.util.LoginForm;
import com.example.util.SignUpForm;
import io.swagger.annotations.ApiResponse;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.security.authentication.AuthenticationManager;
import org.springframework.security.authentication.UsernamePasswordAuthenticationToken;
import org.springframework.security.core.Authentication;
import org.springframework.security.core.context.SecurityContextHolder;
import org.springframework.security.crypto.password.PasswordEncoder;
import org.springframework.web.bind.annotation.*;

import javax.validation.Valid;

@CrossOrigin
@RestController
@RequestMapping("/api/auth")
public class AuthenticationController {

	@Autowired
	AuthenticationManager authenticationManager;

	@Autowired
	UtilisateurRepository utilisateurRepository;

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
			return new ResponseEntity<>(new ResponseMessage("Fail -> Code is already taken!"),
					HttpStatus.BAD_REQUEST);
		}

		if (utilisateurRepository.existsByCode(signUpRequest.getUsername())) {
			return new ResponseEntity<>(new ResponseMessage("Fail -> username is already in use!"),
					HttpStatus.BAD_REQUEST);
		}

		Utilisateur utilisateur = new Utilisateur();

		utilisateur.setUsername(signUpRequest.getUsername());
		utilisateur.setPwd(encoder.encode(signUpRequest.getPwd()));
		utilisateur.setRoles(signUpRequest.getRole());

		System.out.println(encoder.encode(signUpRequest.getPwd()));


		utilisateurRepository.save(utilisateur);

		return new ResponseEntity<>(new ResponseMessage("User registered successfully!"), HttpStatus.OK);
	}
}
