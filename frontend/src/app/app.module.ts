import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
// import { ToastrModule } from 'ngx-toastr';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BodyComponent } from './body/body.component';
import { SidenavComponent } from './sidenav/sidenav.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { StatistiqueComponent } from './statistique/statistique.component';
import { PagesComponent } from './pages/pages.component';
import { MediaComponent } from './media/media.component';
import { SettingsComponent } from './settings/settings.component';
import { SublevelMenuComponent } from './sidenav/sublevel-menu.component';



import { AuthComponent } from './login/auth/auth.component';
import { DemandeReparationComponent } from './demande-reparation/demande-reparation.component';
import { NavBarComponent } from './nav-bar/nav-bar.component';
import { AcceuilComponent } from './acceuil/acceuil.component';
import { LogicielComponent } from './logiciel/logiciel.component';
import { ReparationComponent } from './reparation/reparation.component';
import { DemandesComponent } from './demandes/demandes.component';
import { AdminsComponent } from './admins/admins.component';
import { AdminConnexionComponent } from './admin-connexion/admin-connexion.component';
import { MaterielComponent } from './materiel/materiel.component';
import { SuccesComponent } from './succes/succes.component';
import { TechnicienComponent } from './technicien/technicien.component';
import { TechnicienAuthComponent } from './technicien-auth/technicien-auth.component';
import { UpdateDemandeComponent } from './update-demande/update-demande.component';
import { UpdateLogicielComponent } from './update-logiciel/update-logiciel.component';
import { UpdateMaterielComponent } from './update-materiel/update-materiel.component';
import { ForbiddenComponent } from './forbidden/forbidden.component';
import { TicketComponent } from './ticket/ticket.component';
import { CommentaireComponent } from './commentaire/commentaire.component';
import { RapportComponent } from './rapport/rapport.component';
import { ListeRapportComponent } from './liste-rapport/liste-rapport.component';
import { AddAdminComponent } from './add-admin/add-admin.component';
import { UpdateTicketComponent } from './update-ticket/update-ticket.component';



@NgModule({
  declarations: [
    AppComponent,
    AuthComponent,
    BodyComponent,
    SidenavComponent,
    DashboardComponent,
    StatistiqueComponent,
    PagesComponent,
    MediaComponent,
    SettingsComponent,
    SublevelMenuComponent,
    AddAdminComponent,

    AcceuilComponent,
    AuthComponent,
    DemandeReparationComponent,
    NavBarComponent,
    LogicielComponent,
    ReparationComponent,
    DemandesComponent,
    AdminsComponent,
    AdminConnexionComponent,
    MaterielComponent,
    SuccesComponent,
    TechnicienComponent,
    TechnicienAuthComponent,
    UpdateDemandeComponent,
    UpdateLogicielComponent,
    UpdateMaterielComponent,
    ForbiddenComponent,
    TicketComponent,
    CommentaireComponent,
    RapportComponent,
    ListeRapportComponent,
    AddAdminComponent,
    UpdateTicketComponent

  ],

  
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    HttpClientModule,
    FormsModule,
    ReactiveFormsModule,
    // ToastrModule.forRoot()
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
