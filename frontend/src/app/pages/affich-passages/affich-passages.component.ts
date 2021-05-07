import { Component, OnInit } from '@angular/core';
import {PassagesService} from "../../services/passages.service";

@Component({
  selector: 'app-affich-passages',
  templateUrl: './affich-passages.component.html',
  styleUrls: ['./affich-passages.component.scss']
})
export class AffichPassagesComponent implements OnInit {

  passage: any;
  centre: any;
  page = 1;
  count = 0;
  tableSize = 1;
  tableSizes = [3, 6, 9, 12];
  constructor(private passageService: PassagesService) { }

  ngOnInit() {
    this.fetchPosts();
      this.getAllCentres();
  }
    fetchPosts(): void {
    this.passageService.getAllPassage()
        .subscribe(
            response => {
              this.passage = response;
              console.log(response);
            },
            error => {
              console.log(error);
            });
  }
  getAllCentres() {
    this.passageService.getAllCentresFort().subscribe(
        response => {
          this.centre = response;
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
