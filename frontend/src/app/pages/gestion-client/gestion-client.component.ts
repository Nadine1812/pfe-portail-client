import {Component, OnInit} from '@angular/core';
import {Router} from '@angular/router';
import {ClientsService} from 'src/app/services/clients.service';

@Component({
    selector: 'app-gestion-client',
    templateUrl: './gestion-client.component.html',
    styleUrls: ['./gestion-client.component.scss']
})
export class GestionClientComponent implements OnInit {
    utilisateur: any;
    page;
    count = 0;
    tableSize = 7;
    tableSizes = [3, 6, 9, 12];
    code: any;

    constructor(private router: Router,
                private clientService: ClientsService) {
    }

    ngOnInit() {
        this.fetchPosts();
    }

    fetchPosts(): void {
        this.clientService.getAllUtilisateur()
            .subscribe(
                response => {
                    this.utilisateur = response;
                    console.log(response);
                },
                error => {
                    console.log(error);
                });
    }

    onTableDataChange(event) {
        this.page = event;
        this.fetchPosts();
    }

    onTableSizeChange(event): void {
        this.tableSize = event.target.value;
        this.page = 1;
        this.fetchPosts();
    }

    ajouterClient() {
        this.router.navigate([`ajouterClient`]);

    }

    modifierClient(id) {
        this.router.navigate([`modifClient/${id}`]);
    }
    supprimerClient(id) {
        let res = confirm('Êtes-vous sûr de vouloir supprimer?');
        if (res) {
            this.clientService.deleteUtilisateur(id).subscribe(() => {
                console.log('Employee deleted successfully');
                this.clientService.getAllUtilisateur().subscribe(
                    (data) => {
                        this.utilisateur = data;
                    }
                );
            });

        }
    }
    search() {
        if (this.code !== '') {
        } else if (this.code === '') {
            this.ngOnInit();
        }
        this.utilisateur = this.utilisateur.filter(res => {
            return res.code.toLocaleLowerCase().match(this.code.toLocaleLowerCase());
        });
    }
}
