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

  getReclamationById(id) {
    return this.httpClient.get(this.reclamationURL + id);
  }

  delete(id: any) {
    return this.httpClient.delete(`${this.reclamationURL}/${id}`);
  }
  update(reclamation: any) {
    return this.httpClient.put(`${this.reclamationURL}/${reclamation.id}`, reclamation );
  }
}
