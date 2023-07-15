import { Component, OnInit } from '@angular/core';
import {MatDialog} from '@angular/material/dialog';
import { ProduitsLevelThreeOneComponent } from './produits-level-three-one/produits-level-three-one.component';
@Component({
  selector: 'app-produits',
  templateUrl: './produits.component.html',
  styleUrls: ['./produits.component.scss']
})
export class ProduitsComponent implements OnInit {

  constructor( private dialog: MatDialog) { }

  ngOnInit(): void {
  }
  openDialog() {
    const dialogRef = this.dialog.open(ProduitsLevelThreeOneComponent);

    dialogRef.afterClosed().subscribe(result => {
      console.log(`Dialog result: ${result}`);
    });
  }
}
