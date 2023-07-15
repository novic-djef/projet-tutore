import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ProduitsLevelThreeOneComponent } from './produits-level-three-one/produits-level-three-one.component';
import { ProduitsLevelThreeTwoComponent } from './produits-level-three-two/produits-level-three-two.component';

const routes: Routes = [
  {
    path: 'level 2.1',
    component: ProduitsLevelThreeOneComponent
  },
  {
    path: 'level 2.2',
    component: ProduitsLevelThreeTwoComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ProduitsRoutingModule { }
