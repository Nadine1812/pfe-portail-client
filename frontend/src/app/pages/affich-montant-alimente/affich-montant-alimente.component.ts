import { Component, OnInit } from '@angular/core';
import {AffichageService} from '../../services/affichage.service';

@Component({
  selector: 'app-affich-montant-alimente',
  templateUrl: './affich-montant-alimente.component.html',
  styleUrls: ['./affich-montant-alimente.component.scss']
})
export class AffichMontantAlimenteComponent implements OnInit {
  allimente: any;
  page;
  count = 0;
  tableSize = 7;
  tableSizes = [3, 6, 9, 12];
  constructor(private affichageService: AffichageService) { }

  ngOnInit() {
    this.fetchPosts();
  }
  fetchPosts(): void {
    this.affichageService.getAllAlimentation()
        .subscribe(
            response => {
              this.allimente = response;
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
