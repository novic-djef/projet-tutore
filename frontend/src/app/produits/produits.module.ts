import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ProduitsRoutingModule } from './produits-routing.module';
import { ProduitsComponent } from './produits.component';
import { ProduitsLevelThreeOneComponent } from './produits-level-three-one/produits-level-three-one.component';
import { ProduitsLevelThreeTwoComponent } from './produits-level-three-two/produits-level-three-two.component';


import {MatDialogModule} from '@angular/material/dialog';

@NgModule({
  declarations: [ 
    ProduitsComponent, 
    ProduitsLevelThreeOneComponent, 
    ProduitsLevelThreeTwoComponent
  ],
  imports: [
    CommonModule,
    ProduitsRoutingModule,
    MatDialogModule
  ]
})
export class ProduitsModule { }
