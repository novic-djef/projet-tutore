import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {MaterielComponent} from './materiel/materiel.component';
import { AdminConnexionComponent } from './admin-connexion/admin-connexion.component';
import { AdminsComponent } from './admins/admins.component';
import { TechnicienComponent } from './technicien/technicien.component';
import { Technicien } from './model/technicien.model';
import { LogicielComponent } from './logiciel/logiciel.component';
//import { LoginComponent } from './login/login.component';
import { ForbiddenComponent } from './forbidden/forbidden.component';
import { UpdateTechnicienComponent } from './update-technicien/update-technicien.component';
import { UpdateMaterielComponent } from './update-materiel/update-materiel.component';
import { UpdateLogicielComponent } from './update-logiciel/update-logiciel.component';
import { AdminGuard } from './admin.guard';
import { UpdateTechnicienGuard } from './update-technicien.guard';
import { UpdateMaterielGuard } from './update-materiel.guard';
import { UpdateLogicielGuard } from './update-logiciel.guard';
import { SuccesComponent } from './succes/succes.component';
import { DemandesComponent } from './demandes/demandes.component';
import { MaterielGuard } from './materiel.guard';
import { LogicielGuard } from './logiciel.guard';
import { TechnicienGuard } from './technicien.guard';
import { DemandeGuard } from './demande.guard';

import { UpdateDemandeComponent } from './update-demande/update-demande.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { ReparationComponent } from './reparation/reparation.component';
import { TicketComponent } from './ticket/ticket.component';
import { InterventionsComponent } from './interventions/interventions.component';
import { NavBarComponent } from './nav-bar/nav-bar.component';
import { RapportComponent } from './rapport/rapport.component';
import { ListeRapportComponent } from './liste-rapport/liste-rapport.component';
import { DemandeReparationComponent } from './demande-reparation/demande-reparation.component';
import { AcceuilComponent } from './acceuil/acceuil.component';
import { AddAdminComponent } from './add-admin/add-admin.component';
import { UpdateTicketComponent } from './update-ticket/update-ticket.component';
const routes: Routes = [
  {path: '', redirectTo: '', pathMatch: 'full' },
  {path:"dashborad",component:DashboardComponent,},
  {path: "acceuil",component:AcceuilComponent},
  {path:"admins", component:AddAdminComponent},

  {path:"materiel",component:MaterielComponent,canActivate:[MaterielGuard]},
  {path: "intervention", component:InterventionsComponent},
  {path: "reparation", component:ReparationComponent},
  {path: "ticket", component:TicketComponent},
  {path:"admin-connexion",component:AdminConnexionComponent},
  {path:"admins",component:AdminsComponent,canActivate:[AdminGuard]},
  {path: "forbidden", component: ForbiddenComponent},
  {path:"technicien",component:TechnicienComponent,canActivate:[TechnicienGuard]},
  {path:"logiciel",component:LogicielComponent,canActivate:[LogicielGuard]},
  {path: "nav-bar", component:NavBarComponent},
  {path:"update-technicien/:id",component:UpdateTechnicienComponent,canActivate:[UpdateTechnicienGuard]},
  {path:"update-materiel/:id",component:UpdateMaterielComponent,canActivate:[UpdateMaterielGuard]},
  {path:"update-logiciel/:id",component:UpdateLogicielComponent,canActivate:[UpdateLogicielGuard]},
  {path:"succes",component:SuccesComponent},
  {path:"demandes",component:DemandesComponent,canActivate:[DemandeGuard]},
  {path:"update-demande/:id",component:UpdateDemandeComponent},
  {path:"rapport",component:RapportComponent},
  {path:"liste-rapport",component:ListeRapportComponent},
  {path:"demande-intervention",component:DemandeReparationComponent},
  {path:"add-admins",component:AddAdminComponent},
  {path:"update-ticket",component:UpdateTicketComponent},


];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
