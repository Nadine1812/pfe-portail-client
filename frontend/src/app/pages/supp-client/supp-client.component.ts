import {Component, OnInit} from '@angular/core';
import {Router} from '@angular/router';
import {ClientsService} from 'src/app/services/clients.service';

@Component({
    selector: 'app-supp-client',
    templateUrl: './supp-client.component.html',
    styleUrls: ['./supp-client.component.scss']
})
export class SuppClientComponent implements OnInit {
    code: any;
    utilisateurs: any;

    constructor(private clientService: ClientsService,
                private router: Router) {
    }

    ngOnInit() {
        this.clientService.getAllUtilisateur().subscribe(
            (data) => {
                console.log('Here my objects', data);
                this.utilisateurs = data;
            }
        );
    }

    search() {
        if (this.code != "") {
        } else if (this.code == "") {
            this.ngOnInit();
        }
        this.utilisateurs = this.utilisateurs.filter(res => {
            return res.code.toLocaleLowerCase().match(this.code.toLocaleLowerCase());
        });
    }

    supprimerClient(id) {
        if (window.confirm('Voulez vous vraiment supprimer ce utilisateur ?'))
            this.clientService.deleteUtilisateur(id).subscribe(() => {
                console.log('utilisateur supprimé avec succées');
                this.clientService.getAllUtilisateur().subscribe(
                    (data) => {
                        this.utilisateurs = data;
                    }
                )
            })
    }
}
