import {Component, OnInit} from '@angular/core';
import {ClientsService} from '../../services/clients.service';

@Component({
    selector: 'app-desactiver-compte',
    templateUrl: './desactiver-compte.component.html',
    styleUrls: ['./desactiver-compte.component.scss']
})
export class DesactiverCompteComponent implements OnInit {
    code: any;
    utilisateurs: any;
    page;
    count = 0;
    tableSize = 7;
    tableSizes = [3, 6, 9, 12];

    constructor(private clientService: ClientsService) {
    }

    ngOnInit() {
        this.getAllUtilisateur();
    }

    search() {
        if (this.code !== '') {
        } else if (this.code === '') {
            this.ngOnInit();
        }
        this.utilisateurs = this.utilisateurs.filter(res => {
            return res.code.toLocaleLowerCase().match(this.code.toLocaleLowerCase());
        });
    }

    getAllUtilisateur() {
        this.clientService.getAllUtilisateur().subscribe(
            (data) => {
                console.log('Here my objects', data);
                this.utilisateurs = data;
            }
        );
    }

    DesactiverCompte(code) {
        this.clientService.activateAccount(code, false).subscribe(
            data => {
                this.getAllUtilisateur();
            },
            error => {
                console.log(error);
            }
        );
    }

    ActiverCompte(code) {
        this.clientService.activateAccount(code, true).subscribe(
            data => {
                this.getAllUtilisateur();
            },
            error => {
                console.log(error);
            }
        );
    }
    onTableDataChange(event) {
        this.page = event;
        this.getAllUtilisateur();
    }

    onTableSizeChange(event): void {
        this.tableSize = event.target.value;
        this.page = 1;
        this.getAllUtilisateur();
    }
}
