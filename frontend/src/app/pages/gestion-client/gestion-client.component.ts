import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ClientsService } from 'src/app/services/clients.service';

@Component({
  selector: 'app-gestion-client',
  templateUrl: './gestion-client.component.html',
  styleUrls: ['./gestion-client.component.scss']
})
export class GestionClientComponent implements OnInit {
  utilisateur:any;
  constructor(private router:Router,
    private clientService:ClientsService) { }

  ngOnInit() {}
  
  
  ajouterClient(){
  this.router.navigate([`ajouterClient`]);

}
consulter(){
  this.clientService.getAllUtilisateur().subscribe(
    ()=>{
      this.router.navigate([`consulter`]);
    });
  }
  modifierClient(){
    this.router.navigate([`modifierClient`]);
  }
  activerClient(){
    this.router.navigate([`activerClient`]);
  }
  supprimerClient(){
    this.router.navigate([`supprimerClient`]);
  }
  ajouterCompte(){
    this.router.navigate([`register`]);
  }
  }
