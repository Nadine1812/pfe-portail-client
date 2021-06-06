import {Component, OnDestroy, OnInit} from '@angular/core';
import {Subscription} from 'rxjs';
import {TokenStorageService} from 'src/app/pages/auth/token-storage.service';


@Component({
    selector: 'app-sidebar',
    templateUrl: './sidebar.component.html',
    styleUrls: ['./sidebar.component.scss']
})
export class SidebarComponent implements OnInit, OnDestroy {
    info: any;
    roles: any;
    username: string;
    authListenerSubs: Subscription = new Subscription();

    constructor(private tokenStorage: TokenStorageService) {
    }

    ngOnInit() {
        this.getRole();
        this.getUsername();
    }

    ngOnDestroy() {
        this.authListenerSubs.unsubscribe();
    }

    getRole() {
        this.roles = this.tokenStorage.getAuthorities();
    }

    getUsername() {
        this.username = this.tokenStorage.getUsername();
    }

    showTo(role: string) {
        let roles = this.tokenStorage.getAuthorities();
        if (roles.indexOf(role) === -1) {
            return false;
        }
        return true;
    }
}
