import {Component, OnInit} from '@angular/core';
import {FormBuilder, FormGroup} from '@angular/forms';
import {ActivatedRoute, Router} from '@angular/router';
import {ClientsService} from 'src/app/services/clients.service';

@Component({
    selector: 'app-modif-form',
    templateUrl: './modif-form.component.html',
    styleUrls: ['./modif-form.component.scss']
})
export class ModifFormComponent implements OnInit {
    id: any;
    utilisateur: any = {};
    modifierClientForm: FormGroup;

    constructor(private activatedRoute: ActivatedRoute,
                private clientService: ClientsService,
                private formBuilder: FormBuilder,
                private router: Router) {
    }

    ngOnInit() {
        this.id = +this.activatedRoute.snapshot.paramMap.get('id');
        this.clientService.getUtilisateur(this.id).subscribe(
            (data) => {

                this.utilisateur = data;
                console.log('voila mon client', this.utilisateur)
            }
        );
        this.modifierClientForm = this.formBuilder.group({
            id: [''],
            code: [''],
            username: [''],
            raisonSocial: [''],
            adress: [''],
            tel: ['']
        })
    }

    Utilisateur() {
        if (this.id) {
            this.clientService.updateUtilisateur(this.utilisateur).subscribe(
                () => {
                    this.router.navigate(['/consulter']);
                    console.log('client modifié');
                }
            )

        }
    }
}
