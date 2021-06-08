import { Component, OnInit } from '@angular/core';
import {AffichageService} from '../../services/affichage.service';

@Component({
  selector: 'app-affich-passages',
  templateUrl: './affich-passages.component.html',
  styleUrls: ['./affich-passages.component.scss']
})
export class AffichPassagesComponent implements OnInit {
  passage_date: any;
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
  search() {
    if (this.passage_date !== '') {
    } else if (this.passage_date === '') {
      this.ngOnInit();
    }
    this.passage = this.passage.filter(res => {
      return res.passage_date.toLocaleLowerCase().match(this.passage_date.toLocaleLowerCase());
    });
  }
}
