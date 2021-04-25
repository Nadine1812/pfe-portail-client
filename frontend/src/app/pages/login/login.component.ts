import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from 'src/app/services/auth.service';
import { AuthLoginInfo } from '../auth/login-info';
import { TokenStorageService } from '../auth/token-storage.service';


@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {
  form: any = {};
  isLoggedIn = false;
  isLoginFailed = false;
  errorMessage = '';
  roles: string[] = [];
  private loginInfo: AuthLoginInfo;
  constructor(
    private authService: AuthService,
    private tokenStorage: TokenStorageService,
    private router: Router) {}
  ngOnInit() {
    if (this.tokenStorage.getToken()) {
      this.isLoggedIn = true;
      this.roles = this.tokenStorage.getAuthorities();
    }
  }

  onSubmit() {
    console.log(this.form);

    this.loginInfo = new AuthLoginInfo(
      this.form.username,
      this.form.pwd);


    this.authService.attemptAuth(this.loginInfo).subscribe(
        (data) => {
        this.tokenStorage.saveToken(data.accessToken);
        this.isLoginFailed = false;
        this.isLoggedIn = true;

        // this.reloadPage();
        // console.log('token: ' + data.accessToken);
        // console.log('username: ' + data.username);
        console.log('role: ' +  this.roles );
      },
        (error) => {
        console.log(error);
        this.errorMessage = error.error.message;
        this.isLoginFailed = true;
      }, () => {
          this.roles = this.tokenStorage.getAuthorities();
        }
    );
  }

  reloadPage() {
    window.location.reload();
  }
}
