import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ClientsService } from 'src/app/services/clients.service';
@Component({
  selector: 'app-modifier-client',
  templateUrl: './modifier-client.component.html',
  styleUrls: ['./modifier-client.component.scss']
})
export class ModifierClientComponent implements OnInit {
utilisateurs:any;
code:any;
  constructor( private clientService:ClientsService,
    private router:Router) { }

  ngOnInit() {
    this.clientService.getAllUtilisateur().subscribe(
      (data) => {
        console.log('Here my objects', data);
        
        this.utilisateurs = data;
      }
    );
  }
  search(){
    if (this.code !=""){
    }else if (this.code==""){
      this.ngOnInit();
    }
    this.utilisateurs=this.utilisateurs.filter(res=>{
      return res.code.toLocaleLowerCase().match(this.code.toLocaleLowerCase());
    });
  }
  modifierClient(id){
    this.router.navigate([`modifClient/${id}`]);
  }
}
