import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {User} from "../pages/models/user";

@Injectable({
  providedIn: 'root'
})
export class ReclamationService {
reclamationURL = 'http://localhost:8080/api/reclamation';

  constructor(private httpClient: HttpClient) { }

  createReclamation() {
    return this.httpClient.get(this.reclamationURL);
  }
  getAllReclamations() {
    return this.httpClient.get(this.reclamationURL);
  }
}
