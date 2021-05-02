import { AuthService } from './../../services/auth.service';
import { AppService } from './../../services/app.service';
import { Component, OnInit } from '@angular/core';
import { Subscription } from 'rxjs';
import { TokenStorageService } from 'src/app/pages/auth/token-storage.service';
import {Router} from "@angular/router";

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
    private token: TokenStorageService,private authService: AuthService,private router:Router) { }
  isCollapsed = true;
  ngOnInit() {
    // this.userIsAuthenticated = this.authService.isUserAuth();
    // this.authListenerSubs = this.authService.getAuthStatusListener().subscribe(
    //   isAuthenticated => {
    //     this.userIsAuthenticated = isAuthenticated;
    //   }
    // )
  }
  signOut() {
    window.localStorage.removeItem("USER_ROLE");
    console.log("hello");
    this.token.signOut();
    window.sessionStorage.clear();
    this.router.navigate(['']);

  }
  // ngOnDestroy() {
  //   this.authListenerSubs.unsubscribe();
  // }

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
