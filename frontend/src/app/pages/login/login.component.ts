import {Component, OnInit} from '@angular/core';
import {Router} from '@angular/router';
import {AuthService} from 'src/app/services/auth.service';
import {AuthLoginInfo} from '../auth/login-info';
import {TokenStorageService} from '../auth/token-storage.service';


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
    hide: boolean = true;
    private loginInfo: AuthLoginInfo;

    constructor(
        private authService: AuthService,
        private tokenStorage: TokenStorageService,
        private router: Router) {
    }

    ngOnInit() {
        window.localStorage.removeItem('USER_ROLE');
        if (this.tokenStorage.getToken()) {
            this.isLoggedIn = true;
            this.roles = this.tokenStorage.getAuthorities();
        }
    }

    myFunction() {
        this.hide = !this.hide;
    }

    onSubmit() {
        this.loginInfo = new AuthLoginInfo(
            this.form.username,
            this.form.pwd);
        this.authService.attemptAuth(this.loginInfo).subscribe(
            (data) => {
                this.tokenStorage.saveToken(data.accessToken);
                this.tokenStorage.saveUser(data);
                localStorage.setItem('code', data.code);
                this.isLoginFailed = false;
                this.isLoggedIn = true;
                this.router.navigate(['home']);
            },
            (error) => {
                console.log(error);
                this.errorMessage = error.error.message;
                this.isLoginFailed = true;
            }
        );
    }
}
