import {Component, OnInit} from '@angular/core';
import {TokenStorageService} from "../auth/token-storage.service";

@Component({
    selector: 'app-home',
    templateUrl: './home.component.html',
    styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {
    roles: any;
    username: string;

    constructor(private tokenStorage: TokenStorageService) {
    }

    ngOnInit() {
        this.getRole();
        this.getUsername();
    }

    getRole() {
        this.roles = this.tokenStorage.getAuthorities();
    }
    getUsername(){
        this.username = this.tokenStorage.getUsername();
    }
}
