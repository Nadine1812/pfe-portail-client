import {Component, OnInit} from '@angular/core';
import {TokenStorageService} from '../auth/token-storage.service';

@Component({
    selector: 'app-home',
    templateUrl: './home.component.html',
    styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {
    username: string;

    constructor(private tokenStorage: TokenStorageService) {
    }

    ngOnInit() {
        this.getUsername();
    }
    getUsername(){
        this.username = this.tokenStorage.getUsername();
    }
}
