import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';

@Injectable({
    providedIn: 'root'
})
export class EtablissementService {
    etabllisementURL = 'http://localhost:8080/api/etablissement';
    societeURL = 'http://localhost:8080/api/societe';
    centre_fortURL = 'http://localhost:8080/api/centre_fort';

    constructor(private httpClient: HttpClient) {
    }

    getAllEstablishment() {
        return this.httpClient.get(this.etabllisementURL + '/' + localStorage.getItem('code'));
    }
    getAllSocieties() {
        return this.httpClient.get(this.societeURL);
    }
    getAllCentre_fort() {
        return this.httpClient.get(this.centre_fortURL);
    }
}
