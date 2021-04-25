import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ClientsService {
  private adminUrl = 'http://localhost:8080/api/test/admin';
  private userUrl = 'http://localhost:8080/api/test/user';
  utilisateurURL = 'http://localhost:8080/api/utilisateurs';

  constructor(private httpClient: HttpClient) { }

  createUser(utilisateur: any) {
    return this.httpClient.post(`${this.utilisateurURL}`, utilisateur);
  }

    getAllUtilisateur() {
      return this.httpClient.get(this.utilisateurURL);
    }
    getUtilisateur(id) {
      return this.httpClient.get(`${this.utilisateurURL}/${id}`);
    }
    updateUtilisateur(utilisateur: any) {
      return this.httpClient.put(`${this.utilisateurURL}/${utilisateur.id}`, utilisateur);
    }
    deleteUtilisateur(id: any) {
      return this.httpClient.delete(`${this.utilisateurURL}/${id}`);
    }
    getUserBoard(): Observable<string> {
      return this.httpClient.get(this.userUrl, { responseType: 'text' });
    }
    getAdminBoard(): Observable<string> {
      return this.httpClient.get(this.adminUrl, { responseType: 'text' });
    }
}
