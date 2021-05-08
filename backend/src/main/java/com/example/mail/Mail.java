package com.example.mail;

import io.swagger.annotations.ApiModelProperty;

public class Mail {

    @ApiModelProperty(value = "Mail sender address")
    public String MAIL_FROM ;

    @ApiModelProperty(value = "user receiver code")
    private String codeUser;

    @ApiModelProperty(value = "Email subject")
    private String emailSubject;

    @ApiModelProperty(value = "Email content")
    private String emailContent;


    public String getCodeUser() {
        return codeUser;
    }

    public void setcodeUser(String codeUser) {
        this.codeUser = codeUser;
    }

    public String getEmailSubject() {
        return emailSubject;
    }

    public void setEmailSubject(String emailSubject) {
        this.emailSubject = emailSubject;
    }

    public String getEmailContent(String username, String pwd) {
        return emailContent;
    }

    public void setEmailContent(String emailContent) {
        this.emailContent = emailContent;
    }

    public String getMAIL_FROM() {
        return MAIL_FROM;
    }

    public void setMAIL_FROM(String mail) {
        this.MAIL_FROM = mail;
    }

    @Override
    public String toString() {
        return "Mail [MAIL_FROM=" + MAIL_FROM + ", codeUser=" + codeUser + ", emailSubject=" + emailSubject
                + ", emailContent=" + emailContent + "]";
    }



}
