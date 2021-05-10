import {Component, OnInit} from '@angular/core';
import {Mail} from "../auth/mail";
import {AuthService} from "../../services/auth.service";
import {ClientsService} from "../../services/clients.service";
import {User} from "../models/user";

@Component({
    selector: 'app-send-mail',
    templateUrl: './send-mail.component.html',
    styleUrls: ['./send-mail.component.scss']
})
export class SendMailComponent implements OnInit {
    form: User = new User();
    code: String;
    emailAddress: String;
    dataset: Mail = {
        codeUser: '',
        emailSubject: '',
        emailContent: ''
    };

    constructor(private authService: AuthService,
                private clientService: ClientsService) {
    }

    ngOnInit() {
        this.getCode(this.code);
    }

    getCode(code) {
        return this.clientService.getUtilisateurByCode(code);
    }

    onSubmit() {
        this.authService.sendMail(this.dataset).subscribe(
            (res) => {
                this.dataset = res;
                console.log(this.dataset);
                alert('Email Sent successfully');
            });
    }
}
