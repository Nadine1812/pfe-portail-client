import {HttpClient, HttpHeaders} from '@angular/common/http';
import {Injectable} from '@angular/core';
import {Observable} from 'rxjs';
import {JwtResponse} from '../pages/auth/jwt-response';
import {AuthLoginInfo} from '../pages/auth/login-info';
import {Mail} from '../pages/auth/mail';
import {User} from '../pages/models/user';
import {Router} from '@angular/router';

const httpOptions = {
    headers: new HttpHeaders({'Content-Type': 'application/json'})
};

@Injectable({
    providedIn: 'root'
})
export class AuthService {
    private utilisateur: User;
    user: AuthLoginInfo;
    token: string;
    public currentUser: any;
    public loggedUser: string;
    private loginUrl = 'http://localhost:8080/api/auth/signin';
    private signupUrl = 'http://localhost:8080/api/auth/signup';
    private mailUrl = 'http://localhost:8080/api/mail/sendEmailToUser';

    constructor(private httpClient: HttpClient, private router: Router) {
    }

    attemptAuth(credentials: AuthLoginInfo): Observable<JwtResponse> {
        return this.httpClient.post<JwtResponse>(this.loginUrl, credentials);
    }

    signUp(info): Observable<any> {
        return this.httpClient.post<any>(this.signupUrl, info, httpOptions);
    }

    sendMail(mail): Observable<Mail> {
        return this.httpClient.post<Mail>(this.mailUrl, mail);
    }

    public isAuthenticated(): boolean {
        this.token = localStorage.getItem('token');
        this.currentUser = sessionStorage.getItem('user');
        return !!this.token && !!this.currentUser;
    }
}
