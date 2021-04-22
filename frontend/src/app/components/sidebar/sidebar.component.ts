import { AuthService } from './../../services/auth.service';
import { Component, OnDestroy, OnInit } from '@angular/core';
import { Subscription } from 'rxjs';
import { TokenStorageService } from 'src/app/pages/auth/token-storage.service';
import { ClientsService } from 'src/app/services/clients.service';
import { TOUCH_BUFFER_MS } from '@angular/cdk/a11y';

@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.scss']
})
export class SidebarComponent implements OnInit, OnDestroy {
 info:any;
  private authListenerSubs: Subscription;
  constructor(private token: TokenStorageService,
    private clientService : ClientsService
    // private authService: AuthService, 
    ) { }

  ngOnInit() {
    this.info = {
      username: this.token.getUsername(),
    };
}
  ngOnDestroy() {
    this.authListenerSubs.unsubscribe();
  }

  // logout() {
  //   this.authService.logout();
  // }
  logout() {
    this.token.signOut();
    window.location.reload();
  }
}