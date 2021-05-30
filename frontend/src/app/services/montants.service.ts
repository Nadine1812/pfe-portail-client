import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class MontantsService {

  collecteURL = 'http://localhost:8080/api/collecte';
  alimenteURL = 'http://localhost:8080/api/alimentation';
  constructor(private httpClient: HttpClient) { }

  getAllAlimentation() {
    return this.httpClient.get(this.alimenteURL);
  }
  getAllCollecte() {
    return this.httpClient.get(this.collecteURL);
  }
}
