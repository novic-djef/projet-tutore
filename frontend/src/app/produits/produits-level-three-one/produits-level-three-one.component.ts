import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';

@Component({
  selector: 'app-produits-level-three-one',
  templateUrl: './produits-level-three-one.component.html',
  styleUrls: ['./produits-level-three-one.component.scss']
})
export class ProduitsLevelThreeOneComponent implements OnInit {

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
