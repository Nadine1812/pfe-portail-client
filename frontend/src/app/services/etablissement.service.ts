import {Injectable} from '@angular/core';
import {HttpClient} from "@angular/common/http";

@Injectable({
    providedIn: 'root'
})
export class EtablissementService {
    etabllisementURL = 'http://localhost:8080/api/etablissement';

    constructor(private httpClient: HttpClient) {
    }

    getAllEstablishment() {
        return this.httpClient.get(this.etabllisementURL);
    }

}
