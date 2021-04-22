import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Utilisateur } from './utilisateur';

@Injectable({
  providedIn: 'root'
})
export class RegisterService {

  constructor(private httpClient: HttpClient) { }

  // userUrl = 'http://localhost:8080';
  // // public loginUtilisateurFromRemote(utilisateur: Utilisateur): Observable<any> {
  // //   return this.httpClient.post("http://localhost:8080/login", utilisateur)
  // // }
  // signup(user: any) {
  //   return this.httpClient.post<{message:string}>(`${this.userUrl}/register`, user);
  }

