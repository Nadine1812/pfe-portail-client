import { Component, OnDestroy, OnInit } from '@angular/core';
import {Observable, Subscription} from 'rxjs';
import { TokenStorageService } from 'src/app/pages/auth/token-storage.service';
import { ClientsService } from 'src/app/services/clients.service';
import { Router} from "@angular/router";
import {Menu} from "../../pages/models/menu";


@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.scss']
})
export class SidebarComponent implements OnInit, OnDestroy {
 info:any;
 activeMenuItem$: Observable<Menu>;
  private authListenerSubs: Subscription;
  constructor(private token: TokenStorageService,
    private clientService: ClientsService,
              private route: Router
    ) {}

  ngOnInit() {
      // this.info = {
      //   username: this.token.getUsername(),
      // };
      // tslint:disable-next-line:no-unused-expression

  }
  ngOnDestroy() {
    this.authListenerSubs.unsubscribe();
  }

  logout() {
    this.token.signOut();
    window.location.reload();
  }
}
