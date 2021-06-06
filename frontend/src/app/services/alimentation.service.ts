import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class AlimentationService {
alimentationURL = 'http://localhost:8080/api/alimentation';
fontURL = 'http://localhost:8080/api/font_type';

  constructor(private httpClient: HttpClient) { }

  getAllAlimentation() {
    return this.httpClient.get(this.alimentationURL);
  }
  getAllTypeFont() {
    return this.httpClient.get(this.fontURL);
  }
}
