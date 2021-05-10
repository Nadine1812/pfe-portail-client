package com.example.mail;

import io.swagger.annotations.ApiModelProperty;
import lombok.Data;


public class Mail {

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

    @Override
    public String toString() {
        return "Mail [codeUser=" + codeUser + ", emailSubject=" + emailSubject
                + ", emailContent=" + emailContent + "]";
    }



}
