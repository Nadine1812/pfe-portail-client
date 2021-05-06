import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";

@Injectable({
  providedIn: 'root'
})
export class PassagesService {
  pasageURL = 'http://localhost:8080/api/passage';

  constructor(private httpClient: HttpClient) { }

  getAllPassage(){
    return this.httpClient.get(this.pasageURL);
  }
}
