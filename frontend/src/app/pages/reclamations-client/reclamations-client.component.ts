import {Component, OnInit} from '@angular/core';
import {TokenStorageService} from '../auth/token-storage.service';
import {ReclamationService} from '../../services/reclamation.service';

@Component({
    selector: 'app-reclamations-client',
    templateUrl: './reclamations-client.component.html',
    styleUrls: ['./reclamations-client.component.scss']
})
export class ReclamationsClientComponent implements OnInit {
    reclamation: any = {};
    constructor(private tokenStrage: TokenStorageService,
                private reclamationService: ReclamationService) {
    }

    ngOnInit() {
        this.reclamation.codeUser = localStorage.getItem('code');

    }

    saveReclamation() {
        // this.reclamation.utilisateur = this.tokenStrage.getUser();
        this.reclamationService.createReclamation(this.reclamation).subscribe(
            () => {
                console.log('reclamation crée');
                alert('Reclamation est crée avec succée');
            }
        );
    }
}
