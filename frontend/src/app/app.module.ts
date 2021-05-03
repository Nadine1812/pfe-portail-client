import {AuthService} from './services/auth.service';
import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';

import {CollapseModule} from 'ngx-bootstrap/collapse';
import {ToastrModule} from 'ngx-toastr';

import {AppRoutingModule} from './app-routing.module';

import {AppComponent} from './app.component';
import {NavbarComponent} from './components/navbar/navbar.component';
import {SidebarComponent} from './components/sidebar/sidebar.component';
import {FooterComponent} from './components/footer/footer.component';
import {ListeReclamationsComponent} from './pages/liste-reclamations/liste-reclamations';
import {GestionClientComponent} from './pages/gestion-client/gestion-client.component';
import {FormsComponent} from './pages/forms/forms.component';
import {ClientComponent} from './pages/client/client.component';
import {ListeCommandesComponent} from './pages/liste-commandes/liste-commandes.component';
import {LoginComponent} from './pages/login/login.component';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import {HTTP_INTERCEPTORS, HttpClientModule} from "@angular/common/http";
import {InMemoryWebApiModule} from 'angular-in-memory-web-api';
import {AffichComponent} from './pages/affich/affich.component';
import {AppMaterialModule} from './app-material.module';
import {HomeComponent} from './pages/home/home.component';
import {CommandesClientComponent} from './pages/commandes-client/commandes-client.component';
import {ReclamationsClientComponent} from './pages/reclamations-client/reclamations-client.component';
import {ConsultationComponent} from './pages/consultation/consultation.component';
import {ModifierClientComponent} from './pages/modifier-client/modifier-client.component';
import {ReclamationsAdminComponent} from './pages/reclamations-admin/reclamations-admin.component';
import {ModifFormComponent} from './pages/modif-form/modif-form.component';
import {SuppClientComponent} from './pages/supp-client/supp-client.component';
import {RegisterComponent} from './pages/register/register.component';
import {AuthGuard} from "./services/auth.guard";
import {AuthInterceptor} from "./pages/auth/auth-interceptor";
import { DesactiverCompteComponent } from './pages/desactiver-compte/desactiver-compte.component';


@NgModule({
    declarations: [
        AppComponent,
        NavbarComponent,
        SidebarComponent,
        FooterComponent,
        ListeReclamationsComponent,
        GestionClientComponent,
        FormsComponent,
        ClientComponent,
        ListeCommandesComponent,
        LoginComponent,
        AffichComponent,
        HomeComponent,
        CommandesClientComponent,
        ReclamationsClientComponent,
        ConsultationComponent,
        ModifierClientComponent,
        ReclamationsAdminComponent,
        ModifFormComponent,
        SuppClientComponent,
        RegisterComponent,
        DesactiverCompteComponent,
    ],
    imports: [
        AppMaterialModule,
        BrowserModule,
        AppRoutingModule,
        CommonModule,
        FormsModule,
        HttpClientModule,
        ReactiveFormsModule,
        // InMemoryWebApiModule.forRoot(DataService),
        BrowserAnimationsModule,
        CollapseModule.forRoot(),
        ToastrModule.forRoot()
    ],
    providers: [AuthService,
        AuthGuard,
        {provide: HTTP_INTERCEPTORS, useClass: AuthInterceptor, multi: true}
    ],
    bootstrap: [AppComponent]
})
export class AppModule {
}
