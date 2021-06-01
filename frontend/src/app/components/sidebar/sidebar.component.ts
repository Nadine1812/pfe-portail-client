import {Component, OnDestroy, OnInit} from '@angular/core';
import {Observable, Subscription} from 'rxjs';
import {TokenStorageService} from 'src/app/pages/auth/token-storage.service';
import {ClientsService} from 'src/app/services/clients.service';
import {Router} from '@angular/router';
import {Menu} from '../../pages/models/menu';
import {AuthService} from '../../services/auth.service';
import {Role} from '../../pages/models/role';


@Component({
    selector: 'app-sidebar',
    templateUrl: './sidebar.component.html',
    styleUrls: ['./sidebar.component.scss']
})
export class SidebarComponent implements OnInit, OnDestroy {
    info: any;
    activeMenuItem$: Observable<Menu>;
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
}
