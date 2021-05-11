package com.example.mail;

import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import com.example.model.Utilisateur;
import com.example.service.impl.UtilisateurServiceImpl;
import io.swagger.annotations.Api;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.mail.MailException;
import org.springframework.mail.SimpleMailMessage;
import org.springframework.mail.javamail.JavaMailSender;
import org.springframework.web.bind.annotation.*;

import java.util.Date;


@CrossOrigin(origins = "http://localhost:4200", maxAge = 3600)
@RestController
@RequestMapping("api/mail")
@Api(value = "Rest Controller: Mail")
public class MailController {

    public static final Logger LOGGER = LoggerFactory.getLogger(MailController.class);

    @Autowired
    private UtilisateurServiceImpl utilisateurService;

//    @Autowired
//    private JavaMailSender javaMailSender;
@Autowired
private SendMailService sendMailService;

    @PostMapping("/sendEmailToUser")
    public ResponseEntity<Boolean> sendEmail(@RequestBody RequestMail mail) {
        Utilisateur utilisateur = utilisateurService.getByCode(mail.getCodeUser());

        if (utilisateur == null) {
            String errorMessage = "The selected user for sending email is not found in the database";
            LOGGER.info(errorMessage);
            return new ResponseEntity<Boolean>(false, HttpStatus.NOT_FOUND);
        } else if (utilisateur != null && utilisateur.getEmailAddress()==null) {
            String errorMessage = "No existing email for the selected user for sending email to";
            LOGGER.info(errorMessage);
            return new ResponseEntity<Boolean>(false, HttpStatus.NOT_FOUND);
        }




//        SimpleMailMessage mail = new SimpleMailMessage();
//        mail.setFrom("smartup.pfe2021@gmail.com");
//        mail.setTo(utilisateur.getEmailAddress());
//        System.out.println(utilisateur.getEmailAddress());
//        mail.setSentDate(new Date());
//        mail.setSubject(mailDto.getEmailSubject());
//        mail.setText(mailDto.getEmailContent(utilisateur.getUsername(),utilisateur.getPwd()));

        try {

            this.sendMailService.sendMail(mail);
        } catch (MailException e) {
            return new ResponseEntity<Boolean>(false, HttpStatus.FORBIDDEN);
        }

        return new ResponseEntity<Boolean>(true, HttpStatus.OK);
    }
    }
