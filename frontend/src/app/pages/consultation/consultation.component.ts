import {Component, OnInit} from '@angular/core';
import {Router} from '@angular/router';
import {ClientsService} from 'src/app/services/clients.service';

@Component({
    selector: 'app-consultation',
    templateUrl: './consultation.component.html',
    styleUrls: ['./consultation.component.scss']
})
export class ConsultationComponent implements OnInit {
    utilisateurs: any;

    constructor(private router: Router,
                private clientService: ClientsService) {
    }

    ngOnInit() {
        this.clientService.getAllUtilisateur().subscribe(
            (data) => {
                console.log('Here my objects', data);

                this.utilisateurs = data;
            }
        );
    }
}
