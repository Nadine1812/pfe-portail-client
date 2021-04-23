package com.example.service.dto;

import io.swagger.annotations.ApiModelProperty;
import lombok.Data;

import javax.management.relation.Role;
import java.util.HashSet;
import java.util.Set;

@Data
public class UtilisateurDTO {

    @ApiModelProperty(notes = "Id de l'utilisateur")
    private Long id;

    @ApiModelProperty(notes = "La mot de passe crypté de l'utlisateur")
    private String pwd;

    @ApiModelProperty(notes = "Le nom de l'utilisateur")
    private String username;

    @ApiModelProperty(notes = "Le raison social de l'utilisateur")
    private String raisonSocial;

    @ApiModelProperty(notes = "Le code de l'utilisateur")
    private String code;

    @ApiModelProperty(notes = "Le tel de l'utilisateur")
    private Integer tel;

    @ApiModelProperty(notes = "L'adress de l'utilisateur")
    private String adress;


    @ApiModelProperty(notes = "L'activation  du compte de l'utilisateur")
    private String active;

    @ApiModelProperty(notes = "Le role de l'utilisateur")
    private Set<Role> roles = new HashSet<>();
}
