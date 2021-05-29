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
    authListenerSubs: Subscription = new Subscription();

    constructor(private token: TokenStorageService,
                private clientService: ClientsService,
                public authService: AuthService) {}

    ngOnInit() {
    }
    ngOnDestroy() {
        this.authListenerSubs.unsubscribe();
    }

}
