import {LoginComponent} from './pages/login/login.component';
import {ListeCommandesComponent} from './pages/liste-commandes/liste-commandes.component';
import {NgModule} from '@angular/core';
import {Routes, RouterModule} from '@angular/router';
import {GestionClientComponent} from './pages/gestion-client/gestion-client.component';
import {FormsComponent} from './pages/forms/forms.component';
import {HomeComponent} from './pages/home/home.component';
import {CommandesClientComponent} from './pages/commandes-client/commandes-client.component';
import {ReclamationsClientComponent} from './pages/reclamations-client/reclamations-client.component';
import {ConsultationComponent} from './pages/consultation/consultation.component';
import {ModifierClientComponent} from './pages/modifier-client/modifier-client.component';
import {ReclamationsAdminComponent} from './pages/reclamations-admin/reclamations-admin.component';
import {ModifFormComponent} from './pages/modif-form/modif-form.component';
import {SuppClientComponent} from './pages/supp-client/supp-client.component';
import {RegisterComponent} from './pages/register/register.component';
import {AuthGuard} from './services/auth.guard';
import {DesactiverCompteComponent} from "./pages/desactiver-compte/desactiver-compte.component";
import {AppComponent} from "./app.component";
import {AffichEtablissementComponent} from "./pages/affich-etablissement/affich-etablissement.component";
import {AffichPassagesComponent} from "./pages/affich-passages/affich-passages.component";
import {AlimentationService} from "./services/alimentation.service";
import {AffichAlimentationComponent} from "./pages/affich-alimentation/affich-alimentation.component";
import {SendMailComponent} from "./pages/send-mail/send-mail.component";

const routes: Routes = [
    {path: '', component: LoginComponent},
    // contenu de home dans router outelet
    {
        path: 'home', component: AppComponent,
        children: [{
            path: '', component: HomeComponent
        }]
    },
    {path: 'register', component: RegisterComponent, canActivate: [AuthGuard]},
    {path: 'reclamations', component: ReclamationsAdminComponent, canActivate: [AuthGuard]},
    {path: 'gestionclients', component: GestionClientComponent, canActivate: [AuthGuard]},
    {path: 'commandes-client', component: CommandesClientComponent, canActivate: [AuthGuard]},
    {path: 'reclamations-client', component: ReclamationsClientComponent, canActivate: [AuthGuard]},
    {path: 'listecommandes', component: ListeCommandesComponent, canActivate: [AuthGuard]},
    {path: 'ajouterClient', component: FormsComponent, canActivate: [AuthGuard]},
    // {path: 'afficherClient/:id', component: AffichComponent, canActivate: [AuthGuard]},
    {path: 'consulter', component: ConsultationComponent, canActivate: [AuthGuard]},
    {path: 'modifierClient', component: ModifierClientComponent, canActivate: [AuthGuard]},
    {path: 'modifClient/:id', component: ModifFormComponent, canActivate: [AuthGuard]},
    {path: 'supprimerClient', component: SuppClientComponent, canActivate: [AuthGuard]},

    {path: 'desactiverCompte', component: DesactiverCompteComponent},
    {path: 'etablissements', component: AffichEtablissementComponent},
    {path: 'passages', component: AffichPassagesComponent},
    {path: 'alimentations', component: AffichAlimentationComponent},
    {path: 'envoie-mail', component: SendMailComponent}
];

@NgModule({
    imports: [RouterModule.forRoot(routes)],
    exports: [RouterModule]
})
export class AppRoutingModule {
}


