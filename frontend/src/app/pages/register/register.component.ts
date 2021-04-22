import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { AuthService } from 'src/app/services/auth.service';
import { ClientsService } from 'src/app/services/clients.service';
import { ComptesService } from 'src/app/services/comptes.service';
import { SignUpInfo } from '../auth/signup-info';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.scss']
})
export class RegisterComponent implements OnInit {
  // utilisateur: any = {};
  // ajouterCompteForm: FormGroup
  // id: any;
  form: any = {};
  signupInfo: SignUpInfo;
  isSignedUp = false;
  isSignUpFailed = false;
  errorMessage = '';
 


  constructor(private authService: AuthService,
    private formBuilder: FormBuilder
    // private activatedRoute: ActivatedRoute,
    // private fb: FormBuilder,
    // // private comptesService: ComptesService,
    // private clientsService: ClientsService,
    // private router: Router
  ) { }

  ngOnInit() {

    // this.ajouterCompteForm = this.fb.group({
    //   nomUtilisateur: [''],
    //   pwd: [''],
    //   rPwd: ['']
    // })
  }
  onSubmit() {
    console.log(this.form);

    this.signupInfo = new SignUpInfo(
      this.form.username,
      this.form.role,
      this.form.pwd);

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
  // signup() {
  //   console.log('COMPTE', this.utilisateur);
  //   this.clientsService.signup(this.utilisateur).subscribe(
  //     (data) => {
  //       console.log('Login', data);
  //     }
  //   )
  // }
}
