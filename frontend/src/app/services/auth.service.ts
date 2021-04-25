import { HttpClient, HttpHeaders } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { Observable } from "rxjs";
import { JwtResponse } from "../pages/auth/jwt-response";
import { AuthLoginInfo } from "../pages/auth/login-info";
import { SignUpInfo } from "../pages/auth/signup-info";
const httpOptions = {
  headers: new HttpHeaders({
    'Content-Type': 'application/json',
    'Access-Control-Allow-Methods': 'POST,GET,DELETE,PUT',
    'Access-Control-Allow-Origin': '*'
  }),
};
@Injectable({
  providedIn: 'root'
})
export class AuthService {
  user: AuthLoginInfo;
  isAuth: boolean;
  private loginUrl = 'http://localhost:8080/api/auth/signin';
  private signupUrl = 'http://localhost:8080/api/auth/signup';

  constructor(private httpClient: HttpClient) {
  }

  attemptAuth(credentials: AuthLoginInfo): Observable<JwtResponse> {
    return this.httpClient.post<JwtResponse>(this.loginUrl, credentials, httpOptions);
  }
  signUp(info: SignUpInfo): Observable<string> {
    return this.httpClient.post<string>(this.signupUrl, info, httpOptions);
  }

}
