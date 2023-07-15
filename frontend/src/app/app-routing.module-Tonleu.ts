import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DashboardComponent } from './dashboard/dashboard.component';

import { MediaComponent } from './media/media.component';
import { PagesComponent } from './pages/pages.component';
import { SettingsComponent } from './settings/settings.component';
import { StatistiqueComponent } from './statistique/statistique.component';




import { NavBarComponent } from './nav-bar/nav-bar.component';

import {MaterielComponent} from './materiel/materiel.component';
import { AdminConnexionComponent } from './admin-connexion/admin-connexion.component';
import { TechnicienAuthComponent } from './technicien-auth/technicien-auth.component';
import { AdminsComponent } from './admins/admins.component';
import { TechnicienComponent } from './technicien/technicien.component';
import { LogicielComponent } from './logiciel/logiciel.component';

import { AuthComponent } from './login/auth/auth.component';
import { ForbiddenComponent } from './forbidden/forbidden.component';
import { UpdateMaterielComponent } from './update-materiel/update-materiel.component';
import { UpdateLogicielComponent } from './update-logiciel/update-logiciel.component';
import { AdminGuard } from './admin.guard';

import { UpdateTechnicienGuard } from './update-technicien.guard';
import { UpdateMaterielGuard } from './update-materiel.guard';
import { UpdateLogicielGuard } from './update-logiciel.guard';
import { DemandeReparationComponent } from './demande-reparation/demande-reparation.component';
import { SuccesComponent } from './succes/succes.component';
import { DemandesComponent } from './demandes/demandes.component';
import { ReparationComponent } from './reparation/reparation.component';
import { ReparationGuard } from './reparation.guard';
import { DemandeGuard } from './demande.guard';
import { LogicielGuard } from './logiciel.guard';
import { MaterielGuard } from './materiel.guard';
import { TechnicienGuard } from './technicien.guard';
import { FournisseurGuard } from './fournisseur.guard';
import { UpdateReparationGuard } from './update-reparation.guard';
import { UpdateDemandeComponent } from './update-demande/update-demande.component';
import { AcceuilComponent } from './acceuil/acceuil.component';
import { TicketComponent } from './ticket/ticket.component';
import { CommentaireComponent } from './commentaire/commentaire.component';

import { UpdateTechnicienComponent } from './update-technicien/update-technicien.component';





const routes: Routes = [
  {path: '', redirectTo: 'login', pathMatch: 'full' },
  {path:"login",component:AuthComponent},
  {path: 'dashboard', component: DashboardComponent },

  {path: 'statistique', component: StatistiqueComponent },


  {path: 'pages', component: PagesComponent },
  {path: 'media', component: MediaComponent },
  {path: 'settings', component: SettingsComponent },


  {path: "acceuil", component: AcceuilComponent},
  {path:"admin-connexion",component:AdminConnexionComponent},
  {path:"technicien-auth",component:TechnicienAuthComponent},
  {path:"admins",component:AdminsComponent,canActivate:[AdminGuard]},
  {path: "forbidden", component: ForbiddenComponent},
  {path:"technicien",component:TechnicienComponent,canActivate:[TechnicienGuard]},
  {path:"logiciel",component:LogicielComponent,canActivate:[LogicielGuard]},

  {path:"update-technicien/:id",component:UpdateTechnicienComponent,canActivate:[UpdateTechnicienGuard]},
  {path:"update-materiel/:id",component:UpdateMaterielComponent,canActivate:[UpdateMaterielGuard]},
  {path:"update-logiciel/:id",component:UpdateLogicielComponent,canActivate:[UpdateLogicielGuard]},
  {path:"demande-reparation",component:DemandeReparationComponent},
  {path:"succes",component:SuccesComponent},
  {path:"demandes",component:DemandesComponent,canActivate:[DemandeGuard]},
  {path:"reparation",component:ReparationComponent,canActivate:[ReparationGuard]},
  {path: "materiel", component: MaterielComponent, canActivate:[MaterielGuard]},
  {path:"update-demande/:id",component:UpdateDemandeComponent},
  {path: "ticket", component: TicketComponent},
  {path: "commentaire", component: CommentaireComponent},




];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
