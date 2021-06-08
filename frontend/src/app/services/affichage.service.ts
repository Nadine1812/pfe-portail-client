import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {TokenStorageService} from "../pages/auth/token-storage.service";

@Injectable({
  providedIn: 'root'
})
export class AffichageService {
  fontURL = 'http://localhost:8080/api/font_type';
  etabllisementURL = 'http://localhost:8080/api/etablissement';
  societeURL = 'http://localhost:8080/api/societe';
  centre_fortURL = 'http://localhost:8080/api/centre_fort';
  collecteURL = 'http://localhost:8080/api/collecte';
  alimenteURL = 'http://localhost:8080/api/alimentation';
  pasageURL = 'http://localhost:8080/api/passage';
  constructor(private httpClient: HttpClient, private tokenStorage: TokenStorageService) { }

  getAllTypeFont() {
    return this.httpClient.get(this.fontURL);
  }

  getAllEstablishment() {
    if (this.tokenStorage.getAuthorities()[0] === 'ROLE_CLIENT') {
      return this.httpClient.get(this.etabllisementURL + '/' + localStorage.getItem('code'));
    }
    if (this.tokenStorage.getAuthorities()[0] === 'ROLE_ADMIN') {
      return this.httpClient.get(this.etabllisementURL);
    }
  }
  getAllSocieties() {
    return this.httpClient.get(this.societeURL);
  }
  getAllCentre_fort() {
    return this.httpClient.get(this.centre_fortURL);
  }
  getAllAlimentation() {
    if (this.tokenStorage.getAuthorities()[0] === 'ROLE_CLIENT') {
      return this.httpClient.get(this.alimenteURL + '/' + localStorage.getItem('code'));
    }
    if (this.tokenStorage.getAuthorities()[0] === 'ROLE_ADMIN') {
      return this.httpClient.get(this.alimenteURL);
    }
  }

  getAllCollecte() {
    if (this.tokenStorage.getAuthorities()[0] === 'ROLE_CLIENT') {
      return this.httpClient.get(this.collecteURL + '/' + localStorage.getItem('code'));
    }
    if (this.tokenStorage.getAuthorities()[0] === 'ROLE_ADMIN') {
      return this.httpClient.get(this.collecteURL);
    }
  }
  getAllPassage() {
    if (this.tokenStorage.getAuthorities()[0] === 'ROLE_CLIENT') {
      return this.httpClient.get(this.pasageURL + '/' + localStorage.getItem('code'));
    }if (this.tokenStorage.getAuthorities()[0] === 'ROLE_ADMIN') {
      return this.httpClient.get(this.pasageURL);
    }
  }
}
