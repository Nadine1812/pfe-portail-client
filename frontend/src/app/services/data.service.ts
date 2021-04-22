import { Injectable } from '@angular/core';
import {InMemoryDbService} from 'angular-in-memory-web-api'

@Injectable({
  providedIn: 'root'
})
export class DataService implements InMemoryDbService {

  constructor() { }

  createDb(){

    let  clients =  [
     {  id:  1,  code:  'PO1', nom:'Arab Tunisian Bank', raisonSocial: 'ATB', adress: 'Ben Arous', tel: 70589635 },
     {  id:  2,  code:  'PO2',nom:'Banque internationale arabe de Tunisie', raisonSocial: 'BIAT', adress: 'Marsa', tel: 70589635,},
     {  id:  3,  code:  'PO3',nom:'Union internationale de banques', raisonSocial: 'UIB', adress: 'Centre Urbain', tel: 70589635,},
     {  id:  4,  code:  'PO4',nom:'BH Bank', raisonSocial: 'BH', adress: 'Morouj', tel: 70589635, }
    ];
 
    return {clients};
 
   }
}
