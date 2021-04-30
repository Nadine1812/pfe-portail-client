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
    code: string;
    username: string;
    raisonSocial: string;
    adress: string;
    tel: string;


    constructor(private authService: AuthService,
                private formBuilder: FormBuilder,
                private clientService: ClientsService,
                private tokenStorage: TokenStorageService
    ) {
    }

    ngOnInit() {
        // this.getRole();
        this.getCode(this.code);
        // this.ok();
    }

    // getRole() {
    //     this.roles = this.tokenStorage.getAuthorities();
    // }

    getCode(code) {
       return this.clientService.getUtilisateurByCode(code);
    }
    getUsername(){
        this.username = this.tokenStorage.getUsername();
    }
    ok() {
        this.getCode(this.form.code).subscribe(
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
        console.log('signup', JSON.stringify((this.form)));
        this.authService.signUp(this.form).subscribe(
            (data) => {
                console.log('signup', data);
            }
        );

    }
}

