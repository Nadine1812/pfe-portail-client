import {Component, OnInit} from '@angular/core';
import {TokenStorageService} from './pages/auth/token-storage.service';
import {AppService} from './services/app.service';

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
        if (this.tokenStorage.token) {
            return true;
        }
        return false;
    }
}
