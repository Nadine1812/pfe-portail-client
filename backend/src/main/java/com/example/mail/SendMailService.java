package com.example.mail;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.mail.MailException;
import org.springframework.mail.SimpleMailMessage;
import org.springframework.mail.javamail.JavaMailSender;
import org.springframework.stereotype.Service;

import java.util.Date;

@Service
public class SendMailService {
    @Autowired
    private JavaMailSender javaMailSender;
    public Object sendMail(RequestMail requestMail){
        SimpleMailMessage mail = new SimpleMailMessage();
        mail.setFrom(requestMail.getSendFrom());
        mail.setTo(requestMail.getSendTo());
        mail.setSentDate(new Date());
        mail.setSubject(requestMail.getSubject());
        mail.setText(requestMail.getContent());

        try {

            javaMailSender.send(mail);
        } catch (MailException e) {
            return "error: " + e;
        }

        return "mail sended succesfsuly";
    }
}
