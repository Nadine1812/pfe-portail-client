import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";

@Injectable({
  providedIn: 'root'
})
export class AlimentationService {
alimentationURL = 'http://localhost:8080/api/alimentation';

  constructor(private httpClient: HttpClient) { }

  getAllAlimentation() {
    return this.httpClient.get(this.alimentationURL);
  }
}
