package com.example.DTO;

import lombok.Data;
import lombok.NoArgsConstructor;
@Data
@NoArgsConstructor
public class UtilisateurDTO {

    private Long id;

    private String code;

    private String username;

    private String raisonSocial;

    private String tel;

    private String adress;

    private Boolean active;

    private Boolean hasAccount;

    private String emailAddress;

    private String accessToken;
    private String type = "Bearer";
}
