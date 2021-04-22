import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { ClientsService } from 'src/app/services/clients.service';

@Component({
  selector: 'app-activer-client',
  templateUrl: './activer-client.component.html',
  styleUrls: ['./activer-client.component.scss']
})
export class ActiverClientComponent implements OnInit {
  id:any;
  activer:any;
  activerClientForm:FormGroup;
  constructor(private activatedRoute: ActivatedRoute,
    private clientService:ClientsService,
     private formBuilder: FormBuilder,
     private router:Router) { }

  ngOnInit() {
    if(this.id){
      this.clientService.getUtilisateur(this.id).subscribe(
        (data) => {
  
          this.activer  = data;
          console.log('voila mon client', this.activer )
        }
      );
    this.activerClientForm = this.formBuilder.group({
      rs:[''],
      login:[''],
      password:['']
    })
  }
  }
}
