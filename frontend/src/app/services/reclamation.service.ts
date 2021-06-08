import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {User} from "../pages/models/user";

@Injectable({
  providedIn: 'root'
})
export class ReclamationService {
reclamationURL = 'http://localhost:8080/api/reclamation';

  constructor(private httpClient: HttpClient) { }

  createReclamation(data: any) {
    return this.httpClient.post(this.reclamationURL + '/utilisateur/reclamation',data);
  }
  getAllReclamations() {
    return this.httpClient.get(this.reclamationURL);
  }
  deleteReclamation(id: any) {
    return this.httpClient.delete(`${this.reclamationURL}/${id}`);
  }
}
