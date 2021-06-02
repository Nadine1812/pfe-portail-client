import {LoginComponent} from './pages/login/login.component';
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
import {DesactiverCompteComponent} from './pages/desactiver-compte/desactiver-compte.component';
import {AppComponent} from './app.component';
import {AffichEtablissementComponent} from './pages/affich-etablissement/affich-etablissement.component';
import {AffichPassagesComponent} from './pages/affich-passages/affich-passages.component';
import {SendMailComponent} from './pages/send-mail/send-mail.component';
import {AffichMontantCollecteComponent} from './pages/affich-montant-collecte/affich-montant-collecte.component';
import {AffichMontantAlimenteComponent} from './pages/affich-montant-alimente/affich-montant-alimente.component';

const routes: Routes = [
    {
        path: "",
        redirectTo: "login",
        pathMatch: "full",

    },
    {path: 'login', component: LoginComponent},
    {
        path: 'home', component: HomeComponent,data: {roles: [ 'ROLE_ADMIN','ROLE_CLIENT']}, canActivate: [AuthGuard]
        // children: [{
        //     path: '', component: HomeComponent
        // }]
    },
    {path: 'register', component: RegisterComponent, data: {roles: [ 'ROLE_ADMIN']}, canActivate: [AuthGuard]},
    {path: 'reclamations', component: ReclamationsAdminComponent, data: {roles: [ 'ROLE_ADMIN']},canActivate: [AuthGuard]},
    {path: 'gestionclients', component: GestionClientComponent,data: {roles: [ 'ROLE_ADMIN']}, canActivate: [AuthGuard]},
    {path: 'commandes-client', component: CommandesClientComponent, data: {roles: [ 'ROLE_ADMIN']},canActivate: [AuthGuard]},
    {path: 'reclamations-client', component: ReclamationsClientComponent,data: {roles: [ 'ROLE_CLIENT']}, canActivate: [AuthGuard]},
    {path: 'ajouterClient', component: FormsComponent, data: {roles: [ 'ROLE_ADMIN']},canActivate: [AuthGuard]},
    {path: 'consulter', component: ConsultationComponent,data: {roles: [ 'ROLE_ADMIN']}, canActivate: [AuthGuard]},
    {path: 'modifierClient', component: ModifierClientComponent,data: {roles: [ 'ROLE_ADMIN']}, canActivate: [AuthGuard]},
    {path: 'modifClient/:id', component: ModifFormComponent, data: {roles: [ 'ROLE_ADMIN']},canActivate: [AuthGuard]},
    {path: 'supprimerClient', component: SuppClientComponent, data: {roles: [ 'ROLE_ADMIN']},canActivate: [AuthGuard]},
    {path: 'desactiverCompte', component: DesactiverCompteComponent,data: {roles: [ 'ROLE_ADMIN']},canActivate: [AuthGuard]},
    {path: 'etablissements', component: AffichEtablissementComponent,data: {roles: [ 'ROLE_CLIENT']}, canActivate: [AuthGuard]},
    {path: 'passages', component: AffichPassagesComponent,data: {roles: [ 'ROLE_CLIENT']}, canActivate: [AuthGuard]},
    {path: 'envoie-mail', component: SendMailComponent,data: {roles: [ 'ROLE_ADMIN']}, canActivate: [AuthGuard]},
    {path: 'envoie-reclamation', component: ReclamationsClientComponent,data: {roles: [ 'ROLE_CLIENT']}, canActivate: [AuthGuard]},
    {path: 'liste-reclamations', component: ReclamationsAdminComponent,data: {roles: [ 'ROLE_ADMIN']}, canActivate: [AuthGuard]},
    {path: 'montantsCollecte', component: AffichMontantCollecteComponent,data: {roles: [ 'ROLE_CLIENT']}, canActivate: [AuthGuard]},
    {path: 'montantsAllimente', component: AffichMontantAlimenteComponent,data: {roles: [ 'ROLE_CLIENT']}, canActivate: [AuthGuard]},
];

@NgModule({
    imports: [RouterModule.forRoot(routes)],
    exports: [RouterModule]
})
export class AppRoutingModule {
}


