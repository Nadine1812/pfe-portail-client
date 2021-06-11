import {Component, OnInit} from '@angular/core';
import {FormBuilder, FormGroup} from '@angular/forms';
import {ActivatedRoute, Router} from '@angular/router';
import {ClientsService} from 'src/app/services/clients.service';

@Component({
    selector: 'app-forms',
    templateUrl: './forms.component.html',
    styleUrls: ['./forms.component.scss']
})
export class FormsComponent implements OnInit {
    id: any;
    utilisateur: any = {};
    societe: any = {};
    ajouterClientForm: FormGroup;

    constructor(private activatedRoute: ActivatedRoute,
                private clientService: ClientsService,
                private formBuilder: FormBuilder,
                private router: Router) {
    }

    ngOnInit() {
        this.id = +this.activatedRoute.snapshot.paramMap.get('id');
        if (this.id) {
            this.clientService.getUtilisateur(this.id).subscribe(
                (data) => {
                    this.utilisateur = data;
                    console.log('voila mon client', this.utilisateur);
                }
            );
            this.ajouterClientForm = this.formBuilder.group({
                id: [''],
                code: [''],
                societe_id: [''],
                username: [''],
                raisonSocial: [''],
                adress: [''],
                emailAddress: [''],
                tel: ['']
            });
        }
    }

    public isElementNotValid(field: string): boolean {
        // tslint:disable-next-line:max-line-length
        return this.ajouterClientForm.get(field) && !this.ajouterClientForm.get(field).hasError('required') && this.ajouterClientForm.get(field).invalid;
    }

    Client() {
        this.utilisateur.societe_id = this.utilisateur.code;
        this.clientService.createUser(this.utilisateur).subscribe(
            () => {
                this.router.navigate(['/gestionclients']);
                console.log('client crée');
                alert('Le nouveau utilisateur est bien crée');
            },
            (error) => {
                console.log(error);
                alert('Vous devez saisir tous les données');
            });
    }
}
