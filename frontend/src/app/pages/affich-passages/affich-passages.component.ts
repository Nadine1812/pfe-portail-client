import { Component, OnInit } from '@angular/core';
import {AffichageService} from '../../services/affichage.service';

@Component({
  selector: 'app-affich-passages',
  templateUrl: './affich-passages.component.html',
  styleUrls: ['./affich-passages.component.scss']
})
export class AffichPassagesComponent implements OnInit {

  passage: any;
  page;
  count = 0;
  tableSize = 7;
  tableSizes = [3, 6, 9, 12];
  constructor(private affichageService: AffichageService) { }

  ngOnInit() {
    this.fetchPosts();
  }
    fetchPosts(): void {
    this.affichageService.getAllPassage()
        .subscribe(
            response => {
              this.passage = response;
              console.log(response);
            },
            error => {
              console.log(error);
            });
  }

  onTableDataChange(event){
    this.page = event;
    this.fetchPosts();
  }

  onTableSizeChange(event): void {
    this.tableSize = event.target.value;
    this.page = 1;
    this.fetchPosts();
  }
}
