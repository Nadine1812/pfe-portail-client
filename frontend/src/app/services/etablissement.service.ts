import {Injectable} from '@angular/core';
import {HttpClient} from "@angular/common/http";

@Injectable({
    providedIn: 'root'
})
export class EtablissementService {
    etabllisementURL = 'http://localhost:8080/api/etablissement';
    societeURL = 'http://localhost:8080/api/societe';

    constructor(private httpClient: HttpClient) {
    }

    getAllEstablishment() {
        return this.httpClient.get(this.etabllisementURL);
    }
    getAllSocieties(){
        return this.httpClient.get(this.societeURL);
    }
}
