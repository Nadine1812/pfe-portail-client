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
    dataset: Mail = new Mail();

    constructor(private authService: AuthService,
                private clientService: ClientsService) {
    }

    ngOnInit() {
    }

    getCode(event) {
        let code = event.target.value;
        console.log(code);
        return this.clientService.getUtilisateurByCode(code).subscribe(
            data => {
                if (data) {
                    this.dataset.sendTo = data.emailAddress
              }
              },
                 error => {
                   console.log(error);}
               );
             }

onSubmit()
{
    console.log("dataset", this.dataset);
    this.authService.sendMail(this.dataset).subscribe(
        res => {
            this.dataset = new Mail();
            console.log("res", this.dataset);

            alert('Email a étè envoyé avec succés');
        },
        error => {
            console.log(error);
        }
    );
}
}
