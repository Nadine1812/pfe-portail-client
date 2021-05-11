import { Component, OnInit } from '@angular/core';
import {TokenStorageService} from "../auth/token-storage.service";

@Component({
  selector: 'app-reclamations-client',
  templateUrl: './reclamations-client.component.html',
  styleUrls: ['./reclamations-client.component.scss']
})
export class ReclamationsClientComponent implements OnInit {
reclamation
  constructor(private tokenStrage: TokenStorageService) { }

  ngOnInit() {
  }
saveReclamation(){
    this.reclamation.utilisateur = this.tokenStrage.getUser();
    //je termine le service ici
}
}
