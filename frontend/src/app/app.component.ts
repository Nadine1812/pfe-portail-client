import {Component, OnInit} from '@angular/core';
import {ActivatedRoute} from '@angular/router';
import {Observable} from 'rxjs';
import {TokenStorageService} from './pages/auth/token-storage.service';
import {AppService} from './services/app.service';
import {AuthService} from './services/auth.service';

@Component({
    selector: 'app-root',
    templateUrl: './app.component.html',
    styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
    roles: String = null;
    public authority: string;

    constructor(private tokenStorage: TokenStorageService,
                private appService: AppService) {
    }


    ngOnInit() {
        this.roles = window.localStorage.getItem('USER_ROLE');
    }

    get data(): string {
        return this.appService.sharedData;
    }

    getClasses() {
        const classes = {
            'pinned-sidebar': this.appService.getSidebarStat().isSidebarPinned,
            'toggeled-sidebar': this.appService.getSidebarStat().isSidebarToggeled
        };
        return classes;
    }

    toggleSidebar() {
        this.appService.toggleSidebar();
    }

    public isConnected(): boolean {
        return false;
    }
}
