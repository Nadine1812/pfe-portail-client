package com.example.security.rest;

import com.example.DTO.UtilisateurDTO;
import com.example.mail.RequestMail;
import com.example.mail.SendMailService;
import com.example.model.Utilisateur;
import com.example.repository.UtilisateurRepository;
import com.example.security.jwt.JwtProvider;
import com.example.security.util.JwtResponse;
import com.example.security.util.ResponseMessage;
import com.example.service.UtilisateurService;
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

@CrossOrigin(origins = "http://localhost:4200", maxAge = 3600)
@RestController
@RequestMapping("/api/auth")
public class AuthenticationController {

    @Autowired
    UtilisateurService utilisateurService;

    @Autowired
    AuthenticationManager authenticationManager;

    @Autowired
    UtilisateurRepository utilisateurRepository;

    @Autowired
    PasswordEncoder encoder;

    @Autowired
    JwtProvider jwtProvider;

    @Autowired
    SendMailService sendMailService;

    @PostMapping("/signin")
    public ResponseEntity<?> authenticateUser(@RequestBody LoginForm loginRequest) {
        Utilisateur utilisateur = this.utilisateurService.getByUsername(loginRequest.getUsername());
        if (!utilisateur.getActive()) {
            return new ResponseEntity<>(new ResponseMessage("Fail -> Account is inactive!"), HttpStatus.FORBIDDEN);
        }
        Authentication authentication = authenticationManager.authenticate(new UsernamePasswordAuthenticationToken(loginRequest.getUsername(), loginRequest.getPwd()));
        SecurityContextHolder.getContext().setAuthentication(authentication);
        String jwt = jwtProvider.generateJwtToken(authentication);
        JwtResponse jwtResponse = new JwtResponse(jwt);
        UtilisateurDTO utilisateurDTO = new UtilisateurDTO();
        utilisateurDTO.setUsername(utilisateur.getUsername());
        utilisateurDTO.setCode(utilisateur.getCode());
        utilisateurDTO.setAccessToken(jwtResponse.getAccessToken());
        utilisateurDTO.setType(jwtResponse.getType());
        return ResponseEntity.ok(utilisateurDTO);
    }

    @PostMapping("/signup")
    @ApiResponse(code = 201, message = "L'utilisateur a été créé avec succée")
    public ResponseEntity<?> registerUser(@Valid @RequestBody SignUpForm signUpRequest) {

        if (utilisateurService.hasAccount(signUpRequest.getCode())) {

            return new ResponseEntity<>(new ResponseMessage("Fail -> Account is already taken!"),
                    HttpStatus.BAD_REQUEST);
        }

        Utilisateur utilisateur = this.utilisateurService.getByCode(signUpRequest.getCode());

        utilisateur.setPwd(encoder.encode(signUpRequest.getPwd()));
        utilisateur.setRoles(signUpRequest.getRoles());
        utilisateur.setHasAccount(true);
        utilisateur.setActive(true);

        System.out.println("Roles: " + signUpRequest.getRoles());

        utilisateurRepository.save(utilisateur);
        RequestMail requestMail = new RequestMail();
        requestMail.setSendFrom("smartup.pfe2021@gmail.com");
        requestMail.setSendTo(utilisateur.getEmailAddress());
        requestMail.setSubject("Activation de compte");

            requestMail.setContent("Votre compte est maintenant créé: \n  Votre nom d'utilisation est:" + utilisateur.getUsername() + " et votre mot de passe est: " + signUpRequest.getPwd()+ " \n " +
                    "PS : Pour plus d'information, merci de nous appeler sur 54963533.");

        sendMailService.sendMail(requestMail);
        return new ResponseEntity<>(new ResponseMessage("utilisateur est crée avec succée"), HttpStatus.OK);

    }
}
