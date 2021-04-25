import { LoginComponent } from './pages/login/login.component';
import { ListeCommandesComponent } from './pages/liste-commandes/liste-commandes.component';
import { ClientComponent } from './pages/client/client.component';
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ListeReclamationsComponent } from './pages/liste-reclamations/liste-reclamations';
import { GestionClientComponent } from './pages/gestion-client/gestion-client.component';
import { FormsComponent } from './pages/forms/forms.component';
// import { AuthGuard } from './services/auth.guard';
import { AffichComponent } from './pages/affich/affich.component';
import { HomeComponent } from './pages/home/home.component';
import { CommandesClientComponent } from './pages/commandes-client/commandes-client.component';
import { ReclamationsClientComponent } from './pages/reclamations-client/reclamations-client.component';
import { ConsultationComponent } from './pages/consultation/consultation.component';
import { ModifierClientComponent } from './pages/modifier-client/modifier-client.component';
import { ActiverClientComponent } from './pages/activer-client/activer-client.component';
import { ReclamationsAdminComponent } from './pages/reclamations-admin/reclamations-admin.component';
import { ModifFormComponent } from './pages/modif-form/modif-form.component';
import { SuppClientComponent } from './pages/supp-client/supp-client.component';
import { RegisterComponent } from './pages/register/register.component';
import { AuthGuard } from './services/auth.guard';

const routes: Routes = [
  // { path: '', component: HomeComponent, canActivate: [AuthGuard] },
  { path: '', component: LoginComponent },
  { path: 'home', component: HomeComponent, canActivate:[AuthGuard]},
  { path: '', redirectTo: 'home', pathMatch: 'full' },
  // { path: 'client', component: ClientComponent, canActivate: [AuthGuard] },
  { path: 'reclamations', component: ReclamationsAdminComponent, canActivate:[AuthGuard]},
  { path: 'gestionclients', component: GestionClientComponent, canActivate:[AuthGuard] },
  { path: 'commandes-client', component: CommandesClientComponent, canActivate:[AuthGuard] },
  { path: 'reclamations-client', component: ReclamationsClientComponent, canActivate:[AuthGuard] },
  { path: 'listecommandes', component: ListeCommandesComponent, canActivate:[AuthGuard] },
  { path: 'ajouterClient', component: FormsComponent, canActivate:[AuthGuard] },
  { path: 'afficherClient/:id', component: AffichComponent, canActivate:[AuthGuard] },
  { path: 'consulter', component: ConsultationComponent, canActivate:[AuthGuard] },
  { path: 'modifierClient', component: ModifierClientComponent, canActivate:[AuthGuard] },
  { path: 'activerClient', component: ActiverClientComponent, canActivate:[AuthGuard] },
  { path: 'modifClient/:id', component: ModifFormComponent, canActivate:[AuthGuard] },
  { path: 'supprimerClient', component: SuppClientComponent, canActivate:[AuthGuard] },
  { path: 'register', component: RegisterComponent, canActivate:[AuthGuard] }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }


