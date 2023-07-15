import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';




import {MatDialogModule} from '@angular/material/dialog';
import { EquipementsRoutingModule } from './equipements-routing.module';
import { OrdinateursComponent } from './ordinateurs/ordinateurs.component';
import { ImprimentesComponent } from './imprimentes/imprimentes.component';
import { ScannersComponent } from './scanners/scanners.component'; 

@NgModule({
  declarations: [ 
     OrdinateursComponent,
    ImprimentesComponent,
    ScannersComponent 
  ],
  imports: [
    CommonModule,
    EquipementsRoutingModule,
    MatDialogModule
  ]
})
export class EquipementsModule { }
