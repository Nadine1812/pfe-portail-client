import {Component, OnInit} from '@angular/core';
import {FormBuilder} from '@angular/forms';
import {ActivatedRoute, Router} from '@angular/router';
import {AuthService} from 'src/app/services/auth.service';
import {ClientsService} from 'src/app/services/clients.service';
import {SignUpInfo} from '../auth/signup-info';
import {TokenStorageService} from "../auth/token-storage.service";


@Component({
    selector: 'app-register',
    templateUrl: './register.component.html',
    styleUrls: ['./register.component.scss']
})
export class RegisterComponent implements OnInit {
    form: any = {};
    signupInfo: SignUpInfo;
    isSignedUp = false;
    isSignUpFailed = false;
    errorMessage = '';
    utilisateur: any;
    roles: any;
    code: String;
    username: String;
    raisonSocial: String;
    adress: String;
    tel: String;


    constructor(private authService: AuthService,
                private formBuilder: FormBuilder,
                private clientService: ClientsService,
                private tokenStorage: TokenStorageService,
    ) {
    }

    ngOnInit() {
        // this.getRole();
        this.getCode(this.code);
    }

    // getRole() {
    //     this.roles = this.tokenStorage.getAuthorities();
    // }

    getCode(code) {
       return this.clientService.getUtilisateurByCode(code);
    }

    ok() {
        this.getCode(this.code).subscribe(
            (data) => {
                this.form = data;
                console.log('Voici mes objets', data);
            }
        );
    }

    onSubmit() {
        console.log(this.form);

        this.signupInfo = new SignUpInfo(
            this.form.username,
            this.form.role,
            this.form.pwd,
            this.form.code);

        this.authService.signUp(this.signupInfo).subscribe(
            data => {
                console.log(data);
                this.isSignedUp = true;
                this.isSignUpFailed = false;
            },
            error => {
                console.log(error);
                this.errorMessage = error.error.message;
                this.isSignUpFailed = true;
            }
        );
    }

    signup() {
        console.log('COMPTE', this.utilisateur);
        this.authService.signUp(this.utilisateur).subscribe(
            (data) => {
                console.log('Login', data);
            }
        );
    }
}

