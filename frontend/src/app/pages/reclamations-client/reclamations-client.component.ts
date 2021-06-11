import {Component, OnInit} from '@angular/core';
import {TokenStorageService} from '../auth/token-storage.service';
import {ReclamationService} from '../../services/reclamation.service';
import {FormBuilder, FormGroup} from '@angular/forms';

@Component({
    selector: 'app-reclamations-client',
    templateUrl: './reclamations-client.component.html',
    styleUrls: ['./reclamations-client.component.scss']
})
export class ReclamationsClientComponent implements OnInit {
    reclamation: any = {};
    ajouterRecForm: FormGroup;

    constructor(private tokenStrage: TokenStorageService,
                private formBuilder: FormBuilder,
                private reclamationService: ReclamationService) {
    }

    ngOnInit() {
        this.reclamation.codeUser = localStorage.getItem('code');
        this.ajouterRecForm = this.formBuilder.group({
            description: [''],
            rapport: ['']
        });
    }

    public isElementNotValid(field: string): boolean {
        // tslint:disable-next-line:max-line-length
        return this.ajouterRecForm.get(field) && !this.ajouterRecForm.get(field).hasError('required') && this.ajouterRecForm.get(field).invalid;
    }

    saveReclamation() {
        this.reclamation.date_creation = new Date();
        this.reclamationService.createReclamation(this.reclamation).subscribe(
            () => {
                console.log('reclamation crée');
                alert('Reclamation est crée avec succée');
            },
            (error) => {
                console.log(error);
                alert('Vous devez saisir tous les données');
            });
    }
}
