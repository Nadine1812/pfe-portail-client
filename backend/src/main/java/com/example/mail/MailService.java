//package com.example.mail;
//
//import com.example.model.Utilisateur;
//import lombok.RequiredArgsConstructor;
//import org.springframework.beans.factory.annotation.Autowired;
//import org.springframework.mail.MailException;
//import org.springframework.mail.SimpleMailMessage;
//import org.springframework.mail.javamail.JavaMailSender;
//import org.springframework.stereotype.Service;
//
//import java.util.Date;
//
//@Service
//@RequiredArgsConstructor
//public class MailService {
//
//
//    private JavaMailSender javaMailSender;
//
//    @Autowired
//    public MailService(JavaMailSender javaMailSender) {
//        this.javaMailSender = javaMailSender;
//    }
//
//    public void sendEmail(Utilisateur utilisateur) throws MailException {
//
//        SimpleMailMessage mail = new SimpleMailMessage();
//        mail.setFrom("smartup.pfe2021@gmail.com");
//        mail.setTo(utilisateur.getEmailAddress());
//        mail.setSentDate(new Date());
//        mail.setSubject("test");
//        mail.setText("test");
//        javaMailSender.send(mail);
//    }
//}
