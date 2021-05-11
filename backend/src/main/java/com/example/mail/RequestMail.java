package com.example.mail;

import lombok.Data;
import lombok.NoArgsConstructor;

import javax.persistence.Entity;
@Data
@NoArgsConstructor
public class RequestMail {

    private String sendFrom;
    private String sendTo;
    private String subject;
    private String content;
    private String codeUser;


}
