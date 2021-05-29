import {Component, OnInit} from '@angular/core';
import {ReclamationService} from "../../services/reclamation.service";

@Component({
    selector: 'app-reclamations-admin',
    templateUrl: './reclamations-admin.component.html',
    styleUrls: ['./reclamations-admin.component.scss']
})
export class ReclamationsAdminComponent implements OnInit {
    reclamation: any;
    page = 1;
    count = 0;
    tableSize = 5;
    tableSizes = [3, 6, 9, 12];
    constructor(private reclamationService: ReclamationService) {
    }

    ngOnInit() {
        this.fetchPosts();
    }

    fetchPosts(): void {
        this.reclamationService.getAllReclamations()
            .subscribe(
                response => {
                    this.reclamation = response;
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
