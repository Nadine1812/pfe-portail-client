import { AuthService } from './../../services/auth.service';
import { AppService } from './../../services/app.service';
import { Component, OnInit } from '@angular/core';
import { Subscription } from 'rxjs';
import { TokenStorageService } from 'src/app/pages/auth/token-storage.service';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss']
})
export class NavbarComponent implements OnInit {

  userIsAuthenticated = false;
  user:boolean;
  private authListenerSubs: Subscription;
  constructor(private appService: AppService,
    private token: TokenStorageService,private authService: AuthService) { }
  isCollapsed = true;
  ngOnInit() {
    // this.userIsAuthenticated = this.authService.isUserAuth();
    // this.authListenerSubs = this.authService.getAuthStatusListener().subscribe(
    //   isAuthenticated => {
    //     this.userIsAuthenticated = isAuthenticated;
    //   }
    // )
  }
  // logout() {
  //     this.authService.logout();
  // }
  ngOnDestroy() {
    this.authListenerSubs.unsubscribe();
  }

  toggleSidebarPin() {
    this.appService.toggleSidebarPin();
  }
  toggleSidebar() {
    this.appService.toggleSidebar();
  }
  logout() {
    this.token.signOut();
    window.location.reload();
  }
}
