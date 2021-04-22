import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { ClientsService } from 'src/app/services/clients.service';

@Component({
  selector: 'app-affich',
  templateUrl: './affich.component.html',
  styleUrls: ['./affich.component.scss']
})
export class AffichComponent implements OnInit {
  id:any;
  utilisateur:any;
  constructor(private clientService:ClientsService,
    private router:Router,
    private activatedRoute:ActivatedRoute) { }

  ngOnInit() {
    this.id = this.activatedRoute.snapshot.paramMap.get('id');
    this.clientService.getUtilisateur(this.id).subscribe(
      (data) => {
        console.log('data', data);
        this.utilisateur = data;
      }
    )
  }
  

  }
