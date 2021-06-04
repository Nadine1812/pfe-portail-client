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
import {GestionClientComponent} from './pages/gestion-client/gestion-client.component';
import {FormsComponent} from './pages/forms/forms.component';
import {LoginComponent} from './pages/login/login.component';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import {HTTP_INTERCEPTORS, HttpClientModule} from '@angular/common/http';
import {InMemoryWebApiModule} from 'angular-in-memory-web-api';
import {AppMaterialModule} from './app-material.module';
import {HomeComponent} from './pages/home/home.component';
import {ReclamationsClientComponent} from './pages/reclamations-client/reclamations-client.component';
import {ModifierClientComponent} from './pages/modifier-client/modifier-client.component';
import {ReclamationsAdminComponent} from './pages/reclamations-admin/reclamations-admin.component';
import {ModifFormComponent} from './pages/modif-form/modif-form.component';
import {SuppClientComponent} from './pages/supp-client/supp-client.component';
import {RegisterComponent} from './pages/register/register.component';
import {AuthGuard} from './services/auth.guard';
import {DesactiverCompteComponent} from './pages/desactiver-compte/desactiver-compte.component';
import {AffichEtablissementComponent} from './pages/affich-etablissement/affich-etablissement.component';
import {MatPaginatorModule} from '@angular/material/paginator';
import {NgxPaginationModule} from 'ngx-pagination';
import {AffichPassagesComponent} from './pages/affich-passages/affich-passages.component';
import {SendMailComponent} from './pages/send-mail/send-mail.component';
import {AffichMontantCollecteComponent} from './pages/affich-montant-collecte/affich-montant-collecte.component';
import {AffichMontantAlimenteComponent} from './pages/affich-montant-alimente/affich-montant-alimente.component';


@NgModule({
    declarations: [
        AppComponent,
        NavbarComponent,
        SidebarComponent,
        FooterComponent,
        GestionClientComponent,
        FormsComponent,
        LoginComponent,
        HomeComponent,
        ReclamationsClientComponent,
        ModifierClientComponent,
        ReclamationsAdminComponent,
        ModifFormComponent,
        SuppClientComponent,
        RegisterComponent,
        DesactiverCompteComponent,
        AffichEtablissementComponent,
        AffichPassagesComponent,
        SendMailComponent,
        AffichMontantCollecteComponent,
        AffichMontantAlimenteComponent,
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
        ToastrModule.forRoot(),
        MatPaginatorModule,
        NgxPaginationModule
    ],
    exports: [],
    providers: [AuthService,
        AuthGuard,
    ],
    bootstrap: [AppComponent]
})
export class AppModule {
}
