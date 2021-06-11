import {Component, OnInit} from '@angular/core';
import {TokenStorageService} from '../auth/token-storage.service';
import {ReclamationService} from '../../services/reclamation.service';
import {FormBuilder, FormGroup, Validators} from '@angular/forms';

@Component({
    selector: 'app-reclamations-client',
    templateUrl: './reclamations-client.component.html',
    styleUrls: ['./reclamations-client.component.scss']
})
export class ReclamationsClientComponent implements OnInit {
    reclamation: any = {};
    ajouterRecForm: FormGroup;
    description: any;
    public submitted = false;

    constructor(private tokenStrage: TokenStorageService,
                private formBuilder: FormBuilder,
                private reclamationService: ReclamationService) {
    }

    ngOnInit() {
        this.reclamation.codeUser = localStorage.getItem('code');
        this.ajouterRecForm = this.formBuilder.group({
            description: [null, [Validators.required]],
            rapport: [null, [Validators.required]]
        });
    }

    public isElementNotValid(field: string): boolean {
        // tslint:disable-next-line:max-line-length
        return this.ajouterRecForm.get(field) && !this.ajouterRecForm.get(field).hasError('required') && this.ajouterRecForm.get(field).invalid;
    }

    saveReclamation() {
        this.submitted = true;
        if (this.ajouterRecForm.valid) {
            this.reclamation.date_creation = new Date();
        this.reclamationService.createReclamation(this.reclamation).subscribe(
            (data) => {
                console.log(data);
                alert('Reclamation est crée avec succée');
            },
            (error) => {
                console.log(error);
            });
    }
    }
}
