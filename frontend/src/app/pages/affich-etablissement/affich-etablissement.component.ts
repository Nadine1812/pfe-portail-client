import {Component, ElementRef, OnInit, ViewChild} from '@angular/core';
import {AffichageService} from '../../services/affichage.service';

@Component({
    selector: 'app-affich-etablissement',
    templateUrl: './affich-etablissement.component.html',
    styleUrls: ['./affich-etablissement.component.scss']
})
export class AffichEtablissementComponent implements OnInit {
    etablissement_libelle: any;
    etablissement: any;
    page;
    count = 0;
    tableSize = 7;
    tableSizes = [3, 6, 9, 12];
    constructor(private affichageService: AffichageService) {
    }

    ngOnInit() {
        this.fetchPosts();
    }

    fetchPosts(): void {
        this.affichageService.getAllEstablishment()
            .subscribe(
                response => {
                    this.etablissement = response;
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

    search() {
        if (this.etablissement_libelle !== '') {
        } else if (this.etablissement_libelle === '') {
            this.ngOnInit();
        }
        this.etablissement = this.etablissement.filter(res => {
            return res.etablissement_libelle.toLocaleLowerCase().match(this.etablissement_libelle.toLocaleLowerCase());
        });
    }
}
