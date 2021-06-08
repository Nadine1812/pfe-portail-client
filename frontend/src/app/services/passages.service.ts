import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";

@Injectable({
  providedIn: 'root'
})
export class PassagesService {
  pasageURL = 'http://localhost:8080/api/passage';
   centre_fortURL = 'http://localhost:8080/api/centre_fort';
  constructor(private httpClient: HttpClient) { }

  getAllPassage() {
    return this.httpClient.get(this.pasageURL + '/' + localStorage.getItem('code'));
  }
  getAllCentresFort() {
    return this.httpClient.get(this.centre_fortURL);
  }
}
