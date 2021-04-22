// import { Injectable } from '@angular/core';
// import { Router } from '@angular/router';
// import { BehaviorSubject } from 'rxjs';
// import { User } from './user';

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
    console.log(credentials);
    return this.httpClient.post<JwtResponse>(this.loginUrl, credentials, httpOptions);
  }

  signUp(info: SignUpInfo): Observable<string> {
    return this.httpClient.post<string>(this.signupUrl, info, httpOptions);
  }

  // public logout() {
  //   localStorage.setItem("userName", "");
  //   localStorage.setItem("token", "");
  //   localStorage.setItem("isAuth", "false");
  //   this.user = null;
  //   console.log("Service logout");
  // }
  // setSession(userName, role, token) {
  //   localStorage.setItem("userName", userName);
  //   localStorage.setItem("role", role);
  //   localStorage.setItem("token", token);
  //   localStorage.setItem("isAuth", "true");

  //   console.log("user enregistré");
  //   this.isAuth = true;
  // }

  // get session(): AuthLoginInfo {
  //   this.user = new AuthLoginInfo(
  //     localStorage.getItem("userName"),
  //     localStorage.getItem("role")
  //   );
  //   return this.user;
  // }
  

}
