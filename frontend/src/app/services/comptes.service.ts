import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ComptesService {

  constructor(private httpClient: HttpClient) { }
  private userUrl = 'http://localhost:8080';


  // signup(user: any) {
  //   return this.httpClient.post<{message:string}>(`${this.userUrl}/register`, user);
  // }
}
