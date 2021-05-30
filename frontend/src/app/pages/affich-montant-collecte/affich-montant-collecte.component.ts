import { Component, OnInit } from '@angular/core';
import {MontantsService} from "../../services/montants.service";

@Component({
  selector: 'app-affich-montant-collecte',
  templateUrl: './affich-montant-collecte.component.html',
  styleUrls: ['./affich-montant-collecte.component.scss']
})
export class AffichMontantCollecteComponent implements OnInit {
  collecte: any;
  page;
  count = 0;
  tableSize = 7;
  tableSizes = [3, 6, 9, 12];
  constructor(private montantService: MontantsService) { }

  ngOnInit() {
    this.fetchPosts();
  }
  fetchPosts(): void {
    this.montantService.getAllCollecte()
        .subscribe(
            response => {
              this.collecte = response;
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
}
