import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {TokenStorageService} from "../pages/auth/token-storage.service";

@Injectable({
  providedIn: 'root'
})
export class MontantsService {

  collecteURL = 'http://localhost:8080/api/collecte';
  alimenteURL = 'http://localhost:8080/api/alimentation';
  constructor(private httpClient: HttpClient, private tokenStorage: TokenStorageService) { }

  getAllAlimentation() {
    if (this.tokenStorage.getAuthorities()[0] === 'ROLE_CLIENT') {
      return this.httpClient.get(this.alimenteURL + '/' + localStorage.getItem('code'));
    }if (this.tokenStorage.getAuthorities()[0] === 'ROLE_ADMIN') {
      return this.httpClient.get(this.alimenteURL);
    }
  }
  getAllCollecte() {
    return this.httpClient.get(this.collecteURL + '/' + localStorage.getItem('code') );
  }
}
