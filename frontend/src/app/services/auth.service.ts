import { HttpClient, HttpHeaders } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { Observable } from "rxjs";
import { JwtResponse } from "../pages/auth/jwt-response";
import { AuthLoginInfo } from "../pages/auth/login-info";
import { SignUpInfo } from "../pages/auth/signup-info";

const httpOptions = {
  headers: new HttpHeaders({'Content-Type': 'application/json'})
};
@Injectable({
  providedIn: 'root'
})
export class AuthService {
  user: AuthLoginInfo;
  isAuth: boolean;
  private loginUrl = 'http://localhost:8080/api/auth/signin';
  private signupUrl = 'http://localhost:8080/api/auth/signup';
  private mailUrl = 'http://localhost:8080/api/mail/sendEmailToUser';

  constructor(private httpClient: HttpClient) {
  }

  attemptAuth(credentials: AuthLoginInfo): Observable<JwtResponse> {
    return this.httpClient.post<JwtResponse>(this.loginUrl, credentials);
  }
  signUp(info): Observable<any> {
    return this.httpClient.post<any>(this.signupUrl, info, httpOptions);
  }
  sendMail(mail): Observable<any> {
    return this.httpClient.post<any>(this.mailUrl, mail);
  }
}
